<?php
$client_id     = 'Ov23lirgDROzpNCZlsax';
$client_secret = 'c18a20fb128aa021e1397df87e292add2a816a12';

$code  = $_GET['code']  ?? '';
$error = $_GET['error'] ?? '';

function send($msg) {
    header('Content-Type: text/html; charset=utf-8');
    echo '<!DOCTYPE html><html><body><script>';
    echo 'const m=' . json_encode($msg) . ';';
    echo '(window.opener||window.parent).postMessage(m,"*");';
    echo 'setTimeout(()=>window.close(),300);';
    echo '</script></body></html>';
    exit;
}

if ($error || !$code) {
    send('authorization:github:error:' . ($error ?: 'no_code'));
}

$ch = curl_init('https://github.com/login/oauth/access_token');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => http_build_query([
        'client_id'     => $client_id,
        'client_secret' => $client_secret,
        'code'          => $code,
    ]),
    CURLOPT_HTTPHEADER     => ['Accept: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => true,
]);
$resp = curl_exec($ch);
curl_close($ch);

$data  = json_decode($resp, true);
$token = $data['access_token'] ?? '';

if ($token) {
    send('authorization:github:success:' . json_encode(['token' => $token, 'provider' => 'github']));
} else {
    send('authorization:github:error:' . ($data['error_description'] ?? 'token_exchange_failed'));
}
