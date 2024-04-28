#!/bin/bash


export LC_ALL="en_US.UTF-8"
export HOME="/tmp"

SRC=$(realpath `dirname "$0"`)
HTM=$(dirname "$SRC")
export DIR="$HTM/data"


# backwards compatible way to dynamically trim binary before the first '{' character
function trim_start () {
  local IFS
  local LC_ALL
  local c
  while IFS= LC_ALL=C read -rd '' -n1 c ; do
    [ "$c" == "{" ] && echo -n "$c" && break
  done
  while IFS= LC_ALL=C read -rd '' -n1 c ; do
    echo -n "$c"
  done
}
export -f trim_start


# fetch detailed server information via the JSON API
get_details() {
  local host="$1"
  local port="$2"
  local token="$3"
  local json=$(echo -n "{\"API_JSON_REQUEST\":{\"Token\":\"${token}\",\"Type\":\"Status\"}}" \
    | timeout 5.0 nc $host $port 2>/dev/null \
    | trim_start \
    | jq -c '{
        Settings: .Settings | {
          Server: .Server | {
            MaxPlayers: .MaxPlayers | del(select(type | . != "number")),
          } | with_entries(select(.value != null)),
          Scenario: .Scenario | {
            MergeEnabled: .MergeEnabled | del(select(type | . != "boolean")),
          } | with_entries(select(.value != null)),
          Shines: .Shines | {
            Enabled         : .Enabled         | del(select(type | . != "boolean")),
            ClearOnNewSaves : .ClearOnNewSaves | del(select(type | . != "boolean")),
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
          Name     : .Name     | del(select(type | . != "string")),
          Kingdom  : .Kingdom  | del(select(type | . != "string")),
          Stage    : .Stage    | del(select(type | . != "string")),
          Position : .Position | {
            X : .X | del(select(type | . != "number")),
            Y : .Y | del(select(type | . != "number")),
            Z : .Z | del(select(type | . != "number")),
          } | with_entries(select(.value != null)),
          Rotation : .Rotation | {
            W : .W | del(select(type | . != "number")),
            X : .X | del(select(type | . != "number")),
            Y : .Y | del(select(type | . != "number")),
            Z : .Z | del(select(type | . != "number")),
          } | with_entries(select(.value != null)),
          Costume : .Costume | {
            Cap  : .Cap  | del(select(type | . != "string")),
            Body : .Body | del(select(type | . != "string")),
          } | with_entries(select(.value != null)),
          Tagged : .Tagged | del(select(type | . != "boolean")),
          Is2D   : .Is2D   | del(select(type | . != "boolean")),
        } | with_entries(select(.value != null and .value != {})) ) end),
      }'  2>/dev/null
  )
  if [ "$json" == "" ] ; then
    # JSON API failed, fallback to normal online status
    echo "true"
  else
    echo "$json"
  fi
}
export -f get_details


# get the live status of one server
get_status() {
  local host="$1"
  local port="$2"

  [ -f "$DIR/.env" ] && source "$DIR/.env"

  # load all secret tokens for the JSON API
  local tokens
  declare -A tokens=()
  local key
  for key in "${!SMOO_TOKEN_@}" ; do
    local h="${!key%:*:*}"
    local p="${!key#*:}"
    p="${p%:*}"
    tokens["$h:$p"]="${!key#*:*:}"
  done

  # get secret token
  local token=""
  if [[ "${tokens[$host:$port]}" != "" ]]; then
    token="${tokens[$host:$port]}"
  fi

  # get state by stealth tcp check
  local res=`sudo nmap -sS -Pn -T2 -oG - "$host." -p $port | grep -P '/[^/]+/tcp/'`
  local ipv4=`echo "$res" | grep -oP '^Host: [0-9]+(\.[0-9]+){3}' | grep -oP '[0-9\.]+'`
  local state=`echo "$res" | grep -oP '/[^/]+/tcp/' | grep -oP '^/[^/]+/' | grep -oP '[^/]+'`
  local online=`[ "$state" == 'open' ] && echo 'true' || echo 'false'`
  if [ "$token" != "" ] && [ "$online" == 'true' ] ; then
    # get more details via JSON-API
    online=`get_details ${host} ${port} ${token}`
  fi
  local stamp=`date --iso-8601=seconds`
  echo "{\"stamp\":\"$stamp\",\"host\":\"${host}\",\"ipv4\":\"${ipv4}\",\"port\":${port},\"state\":${online}}"
}
export -f get_status


# get the status for one server, but only update it every X minutes
scan_one() {
  local host="$1"
  local port="${2:-1027}"
  local force="${3:-}"

  [ -f "$DIR/.env" ] && source "$DIR/.env"

  # custom status refresh rate per server
  local times
  declare -A times=()
  local key
  for key in "${!SMOO_EXPIRE_@}" ; do
    local h="${!key%:*:*}"
    local p="${!key#*:}"
    p="${p%:*}"
    times["$h:$p"]="${!key#*:*:}"
  done

  # refresh rate to use
  local timex="${times[$host:$port]:-${SMOO_EXPIRE:-10}}"

  local file="$DIR/$host:$port.json"
  local ftmp="$file.tmp"
  local lock="$file.lock"
  if ( [ "$force" == "force" ] || [ ! -f $file ] || [ $(find $file -cmin +$timex) ] ) ; then
    (
      flock -xn 332 || exit 1
      get_status $host $port >$ftmp
      cat $ftmp >$file
    ) 332>$lock
  fi
  cat $file
}
export -f scan_one


# generate the output for one server (when the output contains multiple servers)
scan_one_line() {
  local host="$1"
  local port="${2:-1027}"
  local force="${3:-}"

  local res=`scan_one "$host" "$port" "$force"`
  echo "\"${host}:${port}\":${res}"
}
export -f scan_one_line


# generate the output for all servers
scan_all() {
  local force="${1:-}"

  # load servers from environment
  [ -f "$DIR/.env" ] && source "$DIR/.env"
  local servers=()
  local key
  for key in "${!SMOO_SERVER_@}" ; do
    servers+=("${!key}")
  done

  # get the status for each server in parallel
  local IFS=$'\n'
  local output=(`parallel  --colsep=:  -j 4  -k  --nice 19  scan_one_line  :::  "${servers[@]}"  :::  "$force"`)
  local stamp=`date --iso-8601=seconds`

  # output
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


# only output the status of one server
display_one() {
  local server="$1"
  local force="$2"
  parallel  --colsep=:  -j 4  -k  --nice 19  scan_one  :::  "$server:$force"
}


# output all servers, but only update it once per minute
display_all() {
  local file="$DIR/all.json"
  local ftmp="$file.tmp"
  local lock="$file.lock"
  local force="$1"
  if ( [ "$force" == "force" ] || [ ! -f $file ] || [ $(find $file -cmin +1) ] ) ; then
    (
      flock -xn 331 || exit 1
      scan_all "$force" >$ftmp
      cat $ftmp >$file
    ) 331>$lock
  fi
  cat $file
}


if [[ "${1:-all}" == "all" ]] ; then
  display_all "${2:-}"
else
  display_one "$1" "${2:-}"
fi
