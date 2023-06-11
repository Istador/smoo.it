#!/bin/bash

export LC_ALL="en_US.UTF-8"

get_details() {
  local host="$1"
  local port="$2"
  local token="$3"
  local json=$(echo -n "{\"API_JSON_REQUEST\":{\"Token\":\"${token}\",\"Type\":\"Status\"}}" \
    | timeout 5.0 nc $host $port 2>/dev/null \
    | tail -c+23 \
    | jq -c '{
        Settings: .Settings | {
          Server: .Server | {
            MaxPlayers: .MaxPlayers | del(select(type | . != "number")),
          } | with_entries(select(.value != null)),
          Scenario: .Scenario | {
            MergeEnabled: .MergeEnabled | del(select(type | . != "boolean")),
          } | with_entries(select(.value != null)),
          Shines: .Shines | {
            Enabled: .Enabled | del(select(type | . != "boolean")),
          } | with_entries(select(.value != null)),
          PersistShines: .PersistShines | {
            Enabled: .Enabled | del(select(type | . != "boolean")),
          } | with_entries(select(.value != null)),
          Udp: .Udp | {
            InitiateHandshake : .InitiateHandshake | del(select(type | . != "boolean")),
            BasePort          : .BasePort          | del(select(type | . != "number")),
            PortCount         : .PortCount         | del(select(type | . != "number")),
          } | with_entries(select(.value != null)),
        } | with_entries(select(.value != null and .value != {})),
        Players: (if .Players == null then null else .Players | map(. | {
          Name    : .Name    | del(select(type | . != "string")),
          Kingdom : .Kingdom | del(select(type | . != "string")),
          Stage   : .Stage   | del(select(type | . != "string")),
          Costume : .Costume | {
            Cap  : .Cap  | del(select(type | . != "string")),
            Body : .Body | del(select(type | . != "string")),
          } | with_entries(select(.value != null)),
        } | with_entries(select(.value != null and .value != {})) ) end),
      }'  2>/dev/null
  )
  if [ "$json" == "" ] ; then
    echo "true"
  else
    echo "$json"
  fi
}
export -f get_details

scan_one() {
  local host="$1"
  local port="${2:-1027}"
  local token="${3:-}"
  local state=`sudo nmap -sS -Pn -T2 -oG - $host -p $port | grep -oP '/[^/]+/tcp/' | grep -oP '^/[^/]+/' | grep -oP '[^/]+'`
  local online=`[ "$state" == 'open' ] && echo 'true' || echo 'false'`
  if [ "$token" != "" ] && [ "$online" == 'true' ] ; then
    echo "\"${host}:${port}\":$(get_details ${host} ${port} ${token})"
  else
    echo "\"${host}:${port}\":${online}"
  fi
}
export -f scan_one

scan_all() {
  [ -f "$DIR/secrets.env" ] && source "$DIR/secrets.env"
  local servers=(
    piplup.smoo.it
    sanae.smoo.it
    #tmdog.smoo.it
    f0c0s.smoo.it
    parknich.smoo.it
    yann.smoo.it
    rcl.smoo.it::${RCL_1:-}
    rcl.smoo.it:1028:${RCL_2:-}
    rcl.smoo.it:1029:${RCL_3:-}
    krokilex.smoo.it
    jeff.smoo.it
    ninunity.smoo.it:62102
  )
  local stamp=`date --iso-8601=seconds`
  local IFS=$'\n'
  local output=(`parallel --colsep=:  -j 4  -k  --nice 19  scan_one  :::  "${servers[@]}"`)
  echo -n "{\"stamp\":\"${stamp}\",\"servers\":{"
  local first=1
  local line
  for line in "${output[@]}" ; do
    if [[ $first != 1 ]] ; then
      echo -n ","
    fi
    echo -n "$line"
    first=0
  done
  echo "}}"
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
