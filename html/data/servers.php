<?php
$servers = trim(@shell_exec(__DIR__ . "/servers.sh"));
header('Content-Type: application/json; charset=utf-8');
echo $servers;
exit;
