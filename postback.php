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

// Поддержка разных названий параметров (s1 как носитель click_id)
$clickId   = $q['click_id'] ?? $q['s1'] ?? '';
$statusRaw = strtoupper($q['status'] ?? '');
$payout    = isset($q['payout']) ? (float)$q['payout'] : (isset($q['user_commission']) ? (float)$q['user_commission'] : 0.0);
$txnId     = $q['txn_id'] ?? $q['transaction_id'] ?? '';
$campaign  = $q['campaign_id'] ?? ($q['campaign'] ?? '');
$token     = isset($q['token']) ? trim($q['token']) : '';
$cidParam  = $q['cid'] ?? ($q['s2'] ?? null); // принимаем client_id из cid или s2
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

// 6) Определяем фазу (lead/pending/hold vs approved/declined)
// GoodAff: A=Approved, D=Declined, P=Pending, H=Hold
$phase = 'lead';
$eventName = 'affiliate_lead';

if ($statusRaw === 'A' || ($statusRaw === '' && $payout > 0)) {
  $phase = 'approved';
  $eventName = 'affiliate_approved';
} elseif ($statusRaw === 'D') {
  $phase = 'declined';
  $eventName = 'affiliate_declined';
} else {
  // P/H/пусто — считаем как lead
}

// 7) Дедупликация по ключу (txn_id|phase) либо (click_id|phase), чтобы CPL и CPA не конфликтовали
$dedupeKey = ($txnId !== '' ? strtoupper($txnId) : strtoupper($clickId)) . '|' . $phase;
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
  'payout'    => $payout,
  'duplicate' => $isDuplicate ? 1 : 0,
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
$clientId = $cidParam ?: (string) ((int)(microtime(true) * 1000000) . rand(100000, 999999));
$params = [
  'click_id' => $clickId,
  'status'   => $statusRaw === '' ? ($phase === 'approved' ? 'A' : ($phase === 'declined' ? 'D' : 'P')) : $statusRaw,
  'txn_id'   => $txnId,
  'campaign' => $campaign,
];
if ($phase === 'approved' && $payout > 0) {
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