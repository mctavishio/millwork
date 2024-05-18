#!/bin/bash
dt=$1
mill=mill$dt
echo $dt
echo $mill

ffmpeg -i film9x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_sound.mp4
ffmpeg -i film9x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_1min_sound.mp4
ffmpeg -i film9x9_1min_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film9x9_1min_v_sound.mp4
ffmpeg -i film9x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_15sec_sound.mp4
ffmpeg -i film9x9_15sec_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film9x9_15sec_v_sound.mp4
echo done making film9x9sound films 
#
ffmpeg -i film16x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9sound.mp4
ffmpeg -i film16x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_1min_sound.mp4
ffmpeg -i film16x9_1min_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film16x9_1min_v_sound.mp4
ffmpeg -i film16x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_15sec_sound.mp4
ffmpeg -i film16x9_15sec_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film16x9_15sec_v_sound.mp4
echo done making film16x9sound films 
#
## with text film
##prince -s css/print.css filmtext.html --raster-dpi=120 --raster-output=frame%04d_text.png;
##rm frame0000_text.png
##rm frame0001_withtext.png
##ffmpeg -framerate 24 -i frame%04d_text.png -c:v libx264 -r 24 -pix_fmt yuv420p filmtext.mp4
##cp frame0048_withtext.png poster_withtext.png
##cp frame0098_withtext.png poster0001_withtext.png
##cp frame0218_withtext.png poster0002_withtext.png
##cp frame0480_withtext.png poster0003_withtext.png
##rm frame*_withtext.png
##echo done making filmtext.mp4
##ffmpeg -i filmtext.mp4 -i line_all_thread_all_echo.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k filmtextsound.mp4
##echo done making filmtextsound 
#
#open filmsound.mp4
#echo "directory=data/$mill" >> readMe.txt
#echo "$(date)" > readMe.txt
#echo "directory=data/$mill" >> readMe.txt
#echo "done"
#echo "|:|"
#cd ../..
#echo gcloud storage cp -r data/$mill gs://clockfactory/
#echo "cd data/$mill"
#echo open data/$mill/printbook.pdf
#echo open data/$mill/printbroadsides.pdf
#echo "open data/$mill/film.mp4"
#echo "open data/$mill/filmtext.mp4"
#echo "open data/$mill/filmsound.mp4"
#echo "open data/$mill/filmtextsound.mp4"
#echo "bash createFilm.sh"
#echo gcloud storage cp -r film_file$dt.mp4 gs://clockfactory/
rm print.html
echo "|:|"
