<?php
// postback.php — CPL/CPA-aware with phase-based dedupe

// 1) КОНФИГ
const POSTBACK_SECRET = 'f12c17096ca1b3f831a7e9d09b1160cb';
const LOG_DIR = __DIR__ . '/../postback_logs'; // будет создан автоматически

// GA4 Measurement Protocol
const GA4_MEASUREMENT_ID   = 'G-V5BJFQ8G10';
const GA4_API_SECRET       = 'UhxMHhLCSoKC9_Jp9FNnaA';
const GA4_DEFAULT_CURRENCY = 'USD';

header('Content-Type: text/plain; charset=utf-8');

// 2) Подготовка логов и защита каталога
if (!is_dir(LOG_DIR)) { @mkdir(LOG_DIR, 0755, true); }
$denyFile = LOG_DIR . '/.htaccess';
if (!file_exists($denyFile)) { @file_put_contents($denyFile, "Require all denied\n"); }
$logFile    = LOG_DIR . '/events.log';       // подробные события (JSONL)
$dedupeFile = LOG_DIR . '/dedupe.csv';       // ключи для дедупа по фазам

// 3) Считать входные параметры (GET)
$q = array_change_key_case($_GET, CASE_LOWER);

// Поддержка длинных и коротких названий параметров:
// t=token, s=status, c=click_id, x=txn_id, g=campaign_id, pr=partner, u=user_commission
$clickId   = $q['click_id'] ?? $q['c'] ?? '';
$statusRaw = strtoupper($q['status'] ?? ($q['s'] ?? ''));
$typeRaw   = strtoupper($q['type']   ?? '');
$payout    = isset($q['payout']) ? (float)$q['payout']
            : (isset($q['user_commission']) ? (float)$q['user_commission']
            : (isset($q['u']) ? (float)$q['u'] : 0.0));
$txnId     = $q['txn_id'] ?? ($q['transaction_id'] ?? ($q['x'] ?? ''));
$campaign  = $q['campaign_id'] ?? ($q['campaign'] ?? ($q['g'] ?? ''));
// Партнёра берём приоритетно из s3, затем s1 (сохраняя приоритет click_id в s1), затем явные partner/pr
$partner   = $q['s3'] ?? ($q['s1'] ?? ($q['partner'] ?? ($q['pr'] ?? '')));
$token     = isset($q['token']) ? trim($q['token']) : ($q['t'] ?? '');
$cidParam  = $q['cid'] ?? ($q['s2'] ?? null); // принимаем client_id из cid или s2
$leadEventOverride = $q['lead_event'] ?? ($q['le'] ?? ''); // опционально: имя события для CPL
$eventParam = strtolower($q['event'] ?? ''); // прямое имя события, если задано явно
$debug     = isset($q['mp_debug']) && $q['mp_debug'] === '1';

// 4) Валидация секрета
if (!hash_equals(POSTBACK_SECRET, $token)) {
  http_response_code(403);
  echo 'forbidden';
  exit;
}

// 5) Мини-валидация обязательных полей (достаточно одного идентификатора + статуса/выплаты)
if ($clickId === '' && $txnId === '') {
  http_response_code(400);
  echo 'missing_ids';
  exit;
}

// 6) Определяем фазу
$phase = 'lead';
$eventName = 'affiliate_lead';

// Явно признаём L (lead) и P/H/пусто как лид
if ($statusRaw === 'A' || ($statusRaw === '' && $payout > 0)) {
  $phase = 'approved';
  $eventName = 'affiliate_approved';
} elseif ($statusRaw === 'D') {
  $phase = 'declined';
  $eventName = 'affiliate_declined';
} else {
  // L, P, H, '' — считаем как lead
  if ($leadEventOverride !== '') {
    // Позволяем переименовать событие для лида, например lead_event=cpl => affiliate_cpl
    $eventName = ($leadEventOverride === 'cpl') ? 'affiliate_cpl' : $leadEventOverride;
  }
}

// Если явно задан event, переопределяем имя события и фазу
if ($eventParam !== '') {
  switch ($eventParam) {
    case 'affiliate_cpl':
      $phase = 'lead';
      $eventName = 'affiliate_cpl';
      break;
    case 'affiliate_approved':
      $phase = 'approved';
      $eventName = 'affiliate_approved';
      break;
    case 'affiliate_declined':
      $phase = 'declined';
      $eventName = 'affiliate_declined';
      break;
  }
}

// Политика: CPL учитываем только на Approved. Если пришло не A — тихо игнорируем.
if ($eventName === 'affiliate_cpl') {
  if ($statusRaw !== 'A') {
    file_put_contents($logFile, json_encode([
      'ts' => gmdate('c'), 'filtered' => 'cpl_not_approved', 'status' => $statusRaw, 'type' => $typeRaw
    ], JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);
    echo 'ok';
    exit;
  }
  // Дополнительно: если указан type и он не CPL — тоже игнорируем
  if ($typeRaw !== '' && strpos($typeRaw, 'CPL') !== 0) {
    file_put_contents($logFile, json_encode([
      'ts' => gmdate('c'), 'filtered' => 'type_not_cpl', 'status' => $statusRaw, 'type' => $typeRaw
    ], JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);
    echo 'ok';
    exit;
  }
}

$dedupeKey = ($txnId !== '' ? strtoupper($txnId) : strtoupper($clickId)) . '|' . $phase . '|' . strtolower($partner);
$seen = [];
if (file_exists($dedupeFile)) {
  $lines = @file($dedupeFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  if ($lines !== false) {
    foreach ($lines as $ln) { $seen[trim($ln)] = 1; }
  }
}
$isDuplicate = isset($seen[$dedupeKey]);

// 8) Лог входа
$entry = [
  'ts'        => gmdate('c'),
  'phase'     => $phase,
  'event'     => $eventName,
  'status'    => $statusRaw,
  'click_id'  => $clickId,
  'txn_id'    => $txnId,
  'campaign'  => $campaign,
  'partner'   => $partner,
  'payout'    => $payout,
  'duplicate' => $isDuplicate ? 1 : 0,
  'type'      => $typeRaw,
  'event_arg' => $eventParam,
  'ip'        => $_SERVER['REMOTE_ADDR'] ?? '',
  'ua'        => $_SERVER['HTTP_USER_AGENT'] ?? '',
];
file_put_contents($logFile, json_encode($entry, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);

// 9) Если уже видели эту фазу для этого идентификатора — отвечаем ok (чтобы сеть не долбила) и выходим
if ($isDuplicate) {
  echo 'ok';
  exit;
}

// 10) Запоминаем ключ
file_put_contents($dedupeFile, $dedupeKey . PHP_EOL, FILE_APPEND | LOCK_EX);

// 11) Готовим отправку в GA4 (Measurement Protocol)
if ($cidParam) {
  $clientId = (string)$cidParam;
} else {
  $ts = time();
  $rnd = random_int(100000, 999999);
  $clientId = $ts . '.' . $rnd; // веб‑стиль client_id X.Y
}
$params = [
  'click_id' => $clickId,
  'status'   => $statusRaw === '' ? ($phase === 'approved' ? 'A' : ($phase === 'declined' ? 'D' : 'P')) : $statusRaw,
  'txn_id'   => $txnId,
  'campaign' => $campaign,
  'partner'  => $partner,
];
// гарантируем отображение в Realtime и корректную сессию
$params['engagement_time_msec'] = 1;                  // минимум 1 мс вовлечения
$params['ga_session_id'] = (int) floor(microtime(true));   // текущий unix timestamp
$params['ga_session_number'] = 1;                     // первая сессия
if ($debug) { $params['debug_mode'] = 1; }            // позволяет видеть и в DebugView

if ($payout > 0) {
  $params['value']    = $payout;
  $params['currency'] = GA4_DEFAULT_CURRENCY;
}

$payload = [
  'client_id'            => (string) $clientId,
  'user_id'              => (string) $clickId,
  'non_personalized_ads' => false,
  'events' => [[
    'name'   => $eventName,
    'params' => $params,
  ]],
];

$mpUrl = 'https://www.google-analytics.com/' . ($debug ? 'debug/' : '') . 'mp/collect?measurement_id='
      . urlencode(GA4_MEASUREMENT_ID) . '&api_secret=' . urlencode(GA4_API_SECRET);

$ch = curl_init($mpUrl);
curl_setopt_array($ch, [
  CURLOPT_POST           => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
  CURLOPT_POSTFIELDS     => json_encode($payload),
  CURLOPT_TIMEOUT        => 5,
]);
$mpResp = curl_exec($ch);
$mpHttp = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$mpErr  = curl_error($ch);
curl_close($ch);

// 12) Лог ответа GA4
file_put_contents($logFile, json_encode([
  'ga4_http' => $mpHttp,
  'ga4_resp' => $mpResp,
  'ga4_err'  => $mpErr,
], JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);

// 13) Ответ сети
echo 'ok';