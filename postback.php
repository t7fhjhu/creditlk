<?php
// postback.php

// 1) КОНФИГ — заполни
const POSTBACK_SECRET = 'ba928e9c06af9d78af2a8b48b0a2c13449268d8770a98c72fa010915e84294113c984e188d3aeeb6b4d00ba138f8b956737df8a63b5c99985fcc623cba6d1b3e';
const LOG_DIR = __DIR__ . '/../postback_logs'; // будет создан автоматически

// GA4 Measurement Protocol (заполни для отправки в аналитику)
const GA4_MEASUREMENT_ID = 'G-V5BJFQ8G10'; // твой Web-поток (можешь изменить при необходимости)
const GA4_API_SECRET     = 'UhxMHhLCSoKC9_Jp9FNnaA';             // вставь секрет из GA4 → Поток данных → Measurement Protocol API secrets
const GA4_DEFAULT_CURRENCY = 'USD';        // измени на 'LKR' или нужную валюту выплат

header('Content-Type: text/plain; charset=utf-8');

// 2) Подготовка логов
if (!is_dir(LOG_DIR)) { @mkdir(LOG_DIR, 0755, true); }
$denyFile = LOG_DIR . '/.htaccess';
if (!file_exists($denyFile)) { @file_put_contents($denyFile, "Require all denied\n"); }
$logFile = LOG_DIR . '/events.log';
$dedupeFile = LOG_DIR . '/dedupe.csv'; // для txn_id

// 3) Считать входные параметры (GET)
$q = array_change_key_case($_GET, CASE_LOWER);

// Поддержка разных названий параметров (s1 как носитель click_id)
$clickId   = $q['click_id'] ?? $q['s1'] ?? '';
$statusRaw = strtoupper($q['status'] ?? '');
$payout    = isset($q['payout']) ? (float)$q['payout'] : (isset($q['user_commission']) ? (float)$q['user_commission'] : 0.0);
$txnId     = $q['txn_id'] ?? $q['transaction_id'] ?? '';
$campaign  = $q['campaign_id'] ?? ($q['campaign'] ?? '');
$token     = isset($q['token']) ? trim($q['token']) : '';

// 4) Валидация секрета
if (!hash_equals(POSTBACK_SECRET, $token)) {
  http_response_code(403);
  echo 'forbidden';
  exit;
}

// 5) Мини-валидация обязательных полей
if ($clickId === '' || $statusRaw === '') {
  http_response_code(400);
  echo 'missing_params';
  exit;
}

// 6) Дедупликация по txn_id (если пришёл)
if ($txnId !== '') {
  $seen = [];
  if (file_exists($dedupeFile)) {
    $seen = array_flip(array_map('trim', file($dedupeFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES)));
  }
  if (isset($seen[$txnId])) {
    // уже учли — отвечаем ОК, чтобы сеть не долбила повторно
    echo 'duplicate';
    exit;
  }
  // записать txn_id
  file_put_contents($dedupeFile, $txnId . PHP_EOL, FILE_APPEND | LOCK_EX);
}

// 7) Нормализуем статус
// GoodAff: A=Approved, D=Declined, P=Pending, H=Hold
$isApproved = ($statusRaw === 'A');
$isDeclined = ($statusRaw === 'D');

// 8) Запишем лог
$entry = [
  'ts'         => gmdate('c'),
  'click_id'   => $clickId,
  'status'     => $statusRaw,
  'payout'     => $payout,
  'txn_id'     => $txnId,
  'campaign'   => $campaign,
  'ip'         => $_SERVER['REMOTE_ADDR'] ?? '',
  'ua'         => $_SERVER['HTTP_USER_AGENT'] ?? '',
];
file_put_contents($logFile, json_encode($entry, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);

// 9) Отправка в GA4 (Measurement Protocol)
if (GA4_MEASUREMENT_ID !== '' && GA4_API_SECRET !== '') {
  // Выбор имени события по статусу
  $eventName = $isApproved ? 'affiliate_approved' : ($isDeclined ? 'affiliate_declined' : 'affiliate_status');

  // Параметры события
  $params = [
    'click_id' => $clickId,
    'status'   => $statusRaw,
    'txn_id'   => $txnId,
    'campaign' => $campaign,
  ];
  if ($isApproved && $payout > 0) {
    $params['value']    = $payout;
    $params['currency'] = GA4_DEFAULT_CURRENCY;
  }

  // client_id / user_id
  $clientId = $q['cid'] ?? (string) ( (int)(microtime(true) * 1000000) . rand(100000, 999999) ); // синтетический, если нет сохранённого
  $userId   = $clickId; // используем click_id как user_id (не PII)

  // debug режим (видно в DebugView): добавь ?mp_debug=1 к запросу постбэка
  $debug = isset($q['mp_debug']) && $q['mp_debug'] === '1';

  $payload = [
    'client_id'             => (string) $clientId,
    'user_id'               => (string) $userId,
    'non_personalized_ads'  => false,
    'events' => [[
      'name'   => $eventName,
      'params' => $params,
    ]],
  ];

  $mpUrl = 'https://www.google-analytics.com/' . ($debug ? 'debug/' : '') .
           'mp/collect?measurement_id=' . urlencode(GA4_MEASUREMENT_ID) .
           '&api_secret=' . urlencode(GA4_API_SECRET);

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

  // Лог ответа GA4 для диагностики
  file_put_contents($logFile, json_encode([
    'ga4_http' => $mpHttp,
    'ga4_resp' => $mpResp,
    'ga4_err'  => $mpErr,
  ], JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);
}

// 10) Ответить сети
echo 'ok';