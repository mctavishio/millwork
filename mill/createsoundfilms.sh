# make sound films
ffmpeg -i film9x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_sound.mp4
ffmpeg -i film9x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_1min_sound.mp4
ffmpeg -i film9x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_15sec_sound.mp4
echo done making film9x9sound films 

ffmpeg -i film16x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_sound.mp4
ffmpeg -i film16x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_1min_sound.mp4
ffmpeg -i film16x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_15sec_sound.mp4
echo done making film16x9sound films 
