#!/bin/bash

for cmd in "$@"; do {
  echo "Process \"$cmd\" started";
  $cmd & pid=$!
  PID_LIST+=" $pid";
} done

trap "kill $PID_LIST" SIGINT

echo "Parallel processes have started";

wait $PID_LIST

echo
echo "All processes have completed";

#parallel_commands "cmd arg0 arg1 arg2" "other_cmd arg0 arg2 arg3"
#ng serve
#firefox http://localhost:4200