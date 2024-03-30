#!/bin/bash
dt=$1
mill=mill$dt
echo $dt
echo $mill

node inputMill.js

node Bmill.js
echo done running Bmill

#
#node filmMill 9x9
node poemMill film9x9info
echo done running poemMill film9x9info
node bookMill
echo done running bookMill on film9x9info
prince -s css/print.css print.html -o film9x9.pdf
echo done making film book
#
##sed "s/notext/withtext/" film.html > filmtext.html
##prince -s css/print.css filmtext.html -o filmtext.pdf
##echo done making word film book
#
## https://www.princexml.com/doc/command-line/
##prince -s css/print.css film.html --raster-dpi=300 --raster-output=frame%04d.png;
##cp frame0048.png picture0000.png
##cp frame0098.png picture0001.png
##cp frame0218.png picture0002.png
##cp frame0340.png picture0004.png
##cp frame0480.png picture0005.png
##cp frame0580.png picture0006.png
##cp frame0680.png picture0007.png
##cp frame0780.png picture0008.png
##cp frame0880.png picture0009.png
##cp frame0948.png picture0010.png
##cp frame1098.png picture0011.png
##cp frame1118.png picture0012.png
##cp frame1280.png picture0014.png
##cp frame1380.png picture0015.png
##cp frame1480.png picture0016.png
##cp frame1060.png picture0017.png
##cp frame1160.png picture0018.png
##cp frame1260.png picture0019.png
##rm frame*.png
##echo done creating 300dpi pictures 
#
prince -s css/print.css print.html --raster-dpi=120 --raster-output=frame%04d.png;
rm frame0000.png
rm frame0001.png
#rm frame0002.png
#rm frame0003.png
cp frame0148.png poster9x9_0000.png
cp frame0298.png poster9x9_0001.png
cp frame0418.png poster9x9_0002.png
cp frame0618.png poster9x9_0003.png
cp frame0818.png poster9x9_0004.png
ffmpeg -framerate 24 -i frame%04d.png -c:v libx264 -r 24 -pix_fmt yuv420p film9x9.mp4
rm frame*.png
echo done making film9x9.mp4
ffmpeg -i film9x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_sound.mp4

ffmpeg -ss 00:01:00 -to 00:02:00 -i film9x9.mp4 -c copy film9x9_1min.mp4
ffmpeg -i film9x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_1min_sound.mp4
ffmpeg -i film9x9_1min_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film9x9_1min_v_sound.mp4

ffmpeg -ss 00:01:00 -to 00:01:15 -i film9x9.mp4 -c copy film9x9_15sec.mp4
ffmpeg -i film9x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_15sec_sound.mp4
ffmpeg -i film9x9_15sec_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film9x9_15sec_v_sound.mp4

echo done making film9x9sound films 
#
#
#node filmMill 16x9
node poemMill film16x9info
echo done running poemMill film16x9info
node bookMill
echo done running bookMill on film16x9info

prince -s css/print.css print.html --raster-dpi=120 --raster-output=frame%04d.png;
rm frame0000.png
rm frame0001.png
#rm frame0002.png
#rm frame0003.png
cp frame0148.png poster16x9_0000.png
cp frame0298.png poster16x9_0001.png
cp frame0418.png poster16x9_0002.png
cp frame0618.png poster16x9_0003.png
cp frame0818.png poster16x9_0004.png
ffmpeg -framerate 24 -i frame%04d.png -c:v libx264 -r 24 -pix_fmt yuv420p film16x9.mp4
rm frame*.png
echo done making film16x9.mp4
ffmpeg -i film16x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_sound.mp4

ffmpeg -ss 00:01:00 -to 00:02:00 -i film16x9.mp4 -c copy film16x9_1min.mp4
ffmpeg -i film16x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_1min_sound.mp4
ffmpeg -i film16x9_1min_sound.mp4  -c copy -metadata:s:v:0 rotate=90 film16x9_1min_v_sound.mp4

ffmpeg -ss 00:01:00 -to 00:01:15 -i film16x9.mp4 -c copy film16x9_15sec.mp4
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
#echo gsutil -m cp -r data/$mill gs://clockfactory/
#echo "cd data/$mill"
#echo open data/$mill/printbook.pdf
#echo open data/$mill/printbroadsides.pdf
#echo "open data/$mill/film.mp4"
#echo "open data/$mill/filmtext.mp4"
#echo "open data/$mill/filmsound.mp4"
#echo "open data/$mill/filmtextsound.mp4"
#echo "bash createFilm.sh"
#echo gsutil -m cp -r film_file$dt.mp4 gs://clockfactory/
rm print.html
echo "|:|"
