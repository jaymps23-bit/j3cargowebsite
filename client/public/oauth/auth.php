<?php
$client_id = 'Ov23lirgDROzpNCZlsax';
$scope = $_GET['scope'] ?? 'repo';
$params = http_build_query([
    'client_id'    => $client_id,
    'scope'        => $scope,
    'redirect_uri' => 'https://j3cargo.com/oauth/callback',
]);
header('Location: https://github.com/login/oauth/authorize?' . $params);
exit;
