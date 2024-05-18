#!/bin/bash
ts=$(date +"%s")
dt=$(date +"%Y%m%d%H%M%S")
echo $ts
echo $dt
echo "# sound films" > filmFiles9x9_$dt.txt
for file in $(ls data/mill202405*/film9x9_sound.mp4); do 
 echo "file '$file'" >> filmFiles9x9_$dt.txt
done
ffmpeg -f concat -safe 0 -i filmFiles9x9_$dt.txt -c copy film9x9_$dt.mp4
echo "# sound films" > filmFiles16x9_$dt.txt
for file in $(ls data/mill202405*/film16x9_sound.mp4); do 
 echo "file '$file'" >> filmFiles16x9_$dt.txt
done
ffmpeg -f concat -safe 0 -i filmFiles16x9_$dt.txt -c copy film16x9_$dt.mp4
