#!/bin/bash

export LC_ALL="en_US.UTF-8"

scan_one() {
  local host="$1"
  local port="${2:-1027}"
  local state=`sudo nmap -sS -Pn -T2 -oG - $host -p $port | grep -oP '/[^/]+/tcp/' | grep -oP '^/[^/]+/' | grep -oP '[^/]+'`
  local online=`[ "$state" == 'open' ] && echo 'true' || echo 'false'`
  echo "\"${host}:${port}\":${online}"
}
export -f scan_one

scan_all() {
  local servers=(
    piplup.smoo.it
    sanae.smoo.it
    parknich.smoo.it
    fruityloops.smoo.it
    f0c0s.smoo.it
    beni.smoo.it
    rcl.smoo.it
    rcl.smoo.it:1028
    krokilex.smoo.it
    joe.smoo.it
    jeff.smoo.it
  )
  local stamp=`date --iso-8601=seconds`
  local output=(`parallel --colsep=:  -j 4  -k  --nice 19  scan_one  :::  "${servers[@]}"`)
  local IFS=','
  echo "{\"stamp\":\"${stamp}\",\"servers\":{${output[*]}}}"
}

DIR=`dirname "$0"`
FILE="$DIR/servers.json"
LOCK="$DIR/servers.lock"

if ( [ "$1" == "force" ] || [ ! -f $FILE ] || [ $(find $FILE -cmin +10) ] ) ; then
  (
    flock -xn 331 || exit 1
    scan_all >$FILE.tmp
    cat $FILE.tmp >$FILE
  ) 331>$LOCK
fi

cat $FILE
