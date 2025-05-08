#!/bin/bash
# Script to kill any process running on a specific port

PORT=4444
echo "Attempting to kill any process running on port $PORT"

# Find the process ID using the port
PID=$(lsof -i:$PORT -t)

if [ -z "$PID" ]; then
  echo "No process found running on port $PORT"
else
  echo "Killing process $PID running on port $PORT"
  kill -9 $PID
  echo "Process killed"
fi
