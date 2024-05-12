#!/bin/bash
ts=$(date +"%s")
dt=$(date +"%Y%m%d%H%M%S")
echo $ts
echo $dt

find . -name "line_all_thread_all_echo_reverb.mp3" > mp3Files.txt
sed "s/^/file '/" mp3Files.txt > mp3Files_temp.txt 
sed "s/$/'/" mp3Files_temp.txt > mp3Files$dt.txt 
rm mp3Files_temp.txt
rm mp3Files.txt
ffmpeg -f concat -safe 0 -i mp3Files$dt.txt -c copy sound$dt.mp3
#sox sound$dt.mp3 sound$dt.mp3 silence 1 0.1 1% -1 0.1 1%
#sox -m sound$dt.mp3 sound$dt_temp.mp3 sound$dt_m.mp3
