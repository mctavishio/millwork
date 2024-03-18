#!/bin/bash
#mill=$1
gsdir="millwork"
ts=$(date +"%s")
dt=$(date +"%Y%m%d%H%M%S")
mill=mill$dt
echo $ts
echo $dt
echo $mill
echo $gsdir

node inputMill.js

mv poemTextLists.js poemTextLists$dt
node textMill.js

mkdir data/$mill
mkdir data/$mill/css
cp buildMill.sh data/$mill/buildMill.sh
cp textMill.js data/$mill/textMill.js
cp inputMill.js data/$mill/inputMill.js
cp input.js data/$mill/input.js
cp pigments.js data/$mill/pigments.js
cp tools.js data/$mill/tools.js
cp poemTextLists.js data/$mill/poemTextLists.js

cp Bmill.js data/$mill/Bmill.js
cp bookMill.js data/$mill/bookMill.js
cp poemMill.js data/$mill/poemMill.js
#cp coverMill.js data/$mill/coverMill.js
#cp bookMill.js data/$mill/bookMill.js

#cp filmMill.js data/$mill/filmMill.js
cp trimSound.sh data/$mill/trimSound.sh
cp soundMill.js data/$mill/soundMill.js
cp rawSoundFiles.js data/$mill/rawSoundFiles.js
#cp pdfToFilm.sh data/$mill/pdfToFilm.sh
cp buildMill.sh data/$mill/buildMill.sh
#
cp getsoundfiledata.sh data/$mill/getsoundfiledata.sh
cd css
 bash clean.sh
 bash compileCSS.sh
cd ../
cp css/print.css data/$mill/css/print.css
#
echo "copied files"

cd data/$mill
echo ls data/$mill
ls

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
node Bmill.js
echo done running Bmill

node poemMill bookinfo
echo done running poemMill bookinfo
node bookMill
echo done running bookMill on bookinfo

prince -s css/print.css print.html -o printbook_temp.pdf
mv print.html printbook.html
echo done making print book
pdfseparate printbook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printbook.pdf
rm page*.pdf
rm printbook_temp.pdf
echo done removing front matter from printbook.pdf
#
# change colors :::
#sed "s/spicecolor2: var(--red)/spicecolor2: var(--yellow)/" printbook.html > printbook2.html
#
sed "s/illustratedbook/broadsides/" printbook.html > printbroadsides.html
prince -s css/print.css printbroadsides.html -o printbroadsides_temp.pdf
echo done making broadside book
pdfseparate printbroadsides_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printbroadsides.pdf
rm page*.pdf
rm printbroadsides_temp.pdf
echo done removing front matter from printbroadsides.pdf

sed "s/illustratedbook/broadsides notext/" printbook.html > printpicturebook.html
prince -s css/print.css printpicturebook.html -o printpicturebook_temp.pdf
echo done making picture book
pdfseparate printpicturebook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printpicturebook.pdf
rm page*.pdf
rm printpicturebook_temp.pdf
echo done removing front matter from printpicturebook.pdf

sed "s/illustratedbook/film notext/" printbook.html > printfilmbook.html
prince -s css/print.css printfilmbook.html -o printfilmbook_temp.pdf
echo done making film book
pdfseparate printfilmbook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printfilmbook.pdf
rm page*.pdf
rm printfilmbook_temp.pdf
echo done removing front matter from printfilmbook.pdf
#postcards
node poemMill postcardinfo
echo done running poemMill postcardinfo
node bookMill
echo done running bookMill on postcardinfo
prince -s css/print.css print.html -o printpostcardbook_temp.pdf
echo done making postcard book
pdfseparate printpostcardbook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printpostcardbook.pdf
rm page*.pdf
rm printpostcardbook_temp.pdf
echo done removing front matter from printpostcardbook.pdf

#pictures
node poemMill picture8x8info
echo done running poemMill picture8x8info
node bookMill
echo done running bookMill on picture8x8info
prince -s css/print.css print.html --raster-dpi=300 --raster-output=picture%04d.png;
echo done making picture8x8 sequence
rm picture0000.png
rm picture0001.png
echo done removing front matter from printpictures8x8.pdf

#covers
node poemMill coverinfo
echo done running poemMill coverinfo
node bookMill
echo done running bookMill on coverinfo
prince -s css/print.css print.html -o printcoverbook_temp.pdf
echo done making cover book
pdfseparate printcoverbook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printcoverbook.pdf
rm page*.pdf
rm printcoverbook_temp.pdf

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

sed "s/figure class=\"frame\"/figure class=\"\"/" printbook.html > printbook_temp.html
mv printbook_temp.html printbook.html
#gsutil  cp printbook.html gs://$gsdir/$mill/
cp printbook.html ../../printbook${mill:4}.html
echo "|:|"
