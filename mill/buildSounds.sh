#!/bin/bash
#mill=$1
gsdir="bindery"
ts=$(date +"%s")
dt=$(date +"%Y%m%d%H%M%S")
mill=millsox$dt
echo $ts
echo $dt
echo $mill
echo $gsdir

mkdir data/$mill
cp buildSounds.sh data/$mill/buildSounds.sh
cp inputSoundMill.js data/$mill/inputSoundMill.js
cp tools.js data/$mill/tools.js

cp trimSound.sh data/$mill/trimSound.sh
cp soundMill.js data/$mill/soundMill.js
cp rawSoundFiles.js data/$mill/rawSoundFiles.js
cp getsoundfiledata.sh data/$mill/getsoundfiledata.sh
echo "copied files"

cd data/$mill
echo ls data/$mill
ls
node inputSoundMill.js
#
# 4 min sound thread
node soundMill.js 4.05
echo done with soundMill 4
echo run SOX: sound weaving . . . 
bash runSOX.sh 
echo done running SOX 
cp line_all_thread_all_echo_reverb.mp3 sound.mp3
#sox $1 tf_$2_$3_$1 fade h 0 $2 $3
bash trimSound.sh sound.mp3 04:00 18
rm line_*_thread_*.mp3
mv sound.mp3 tf_raw_4_sound.mp3
mv runSOX.sh runSOX_4.sh

# 2 min sound thread
node soundMill.js 2.05
echo done with soundMill 2
echo run SOX: sound weaving . . . 
bash runSOX.sh 
echo done running SOX 
cp line_all_thread_all_echo_reverb.mp3 sound.mp3
#sox $1 tf_$2_$3_$1 fade h 0 $2 $3
bash trimSound.sh sound.mp3 02:00 18
rm line_*_thread_*.mp3
mv runSOX.sh runSOX_2.sh
echo done with sound 2

# 1 min sound thread
bash trimSound.sh sound.mp3 01:00 9
echo done with sound 1

# 15sec sound thread
bash trimSound.sh sound.mp3 00:15 5
echo done with sound 15sec
mv sound.mp3 tf_raw_2_sound.mp3

echo module.exports = [ > outSoundFiles.js; for file in ?(*.mp3|*.wav); do soxi -D $file | read d ; soxi -c $file | read c ; soxi -r $file | read r ; soxi -t $file | read t ; soxi -p $file | read p ;echo {id:\"${file%.*}\", file:\"$file\", url:\"https://storage.googleapis.com/soundfactory/1696901930244/$file\", duration:$d, nchannels:$c, rate:$r, type:\"$t\", bitrate:$p}, >> outsoundfiles.js; done; echo ] >> outSoundFiles.js;
echo done writing outSoundFiles.js 
#
echo "module.exports = { webpage:'printbook${mill:4}.html', dt:'$dt', datetime:'$(date)',directory:'data/$mill' }" > millinfo.js
#
echo done with sound ::: $mill
echo "|:|"
