<?php
$servers = [
  'all',
  'piplup.smoo.it:1027',
  'piplup.smoo.it:1028',
  'sanae.smoo.it:1027',
  'tmdog.smoo.it:1027',
  'f0c0s.smoo.it:1027',
  'sleepyy.smoo.it:1027',
  'parknich.smoo.it:1027',
  'yann.smoo.it:1027',
  'rcl.smoo.it:1027',
  'rcl.smoo.it:1028',
  'rcl.smoo.it:1029',
  'rcl.smoo.it:1030',
  'krokilex.smoo.it:1027',
  'jeff.smoo.it:1027',
  'snafty.smoo.it:62102',
  'radiated.smoo.it:1027',
];

$file = basename($_SERVER['REQUEST_URI'] ?? '');
if (! $file) { exit; }

$server = substr($file, 0, -5);
if (! $server) { exit; }
if ($server === 'servers') { $server = 'all'; }

if (! in_array($server, $servers)) { exit('unknown server'); }

$response = trim(@shell_exec(__DIR__ . "/servers.sh $server"));
header('Content-Type: application/json; charset=utf-8');
echo $response;
exit;
