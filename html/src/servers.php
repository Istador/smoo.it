<?php

$servers = [
  'all' => true,
];

# load servers from environment file
$env_file = __DIR__ . '/../data/.env';
$env = (
  file_exists($env_file)
  ? parse_ini_file($env_file)
  : []
);
foreach ($env as $k => $v) {
  if (substr($k, 0, 12) !== 'SMOO_SERVER_') { continue; }
  $_ENV[$k] = $v;
}

# load servers from environment
foreach ($_ENV as $k => $v) {
  if (substr($k, 0, 12) !== 'SMOO_SERVER_') { continue; }
  list($host, $port) = explode(':', $v);
  $port = ((int) $port) ?: 1027;
  $servers["{$host}:{$port}"] = true;
}

# parse file name
$file = basename($_SERVER['REQUEST_URI'] ?? '');
if (! $file) { exit; }
$server = substr($file, 0, -5); // without '.json'
if (! $server) { exit; }
if ($server === 'servers') { $server = 'all'; }

# check that the requested server is configured
if (! array_key_exists($server, $servers)) { exit('unknown server'); }

# call script and output
$response = trim(@shell_exec(__DIR__ . "/servers.sh $server"));
header('Content-Type: application/json; charset=utf-8');
echo $response;
exit;
