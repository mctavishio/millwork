#!/bin/bash
#mill=$1
gsdir="bindery"
ts=$(date +"%s")
dt=$(date +"%Y%m%d%H%M%S")
mill=millpix$dt
echo $ts
echo $dt
echo $mill
echo $gsdir

#mv poemTextLists.js poemTextLists$dt
#node textMill.js

mkdir data/$mill
mkdir data/$mill/css
#cp buildMill.sh data/$mill/buildMill.sh
cp buildPictures.sh data/$mill/buildPictures.sh
cp textMill.js data/$mill/textMill.js
cp inputMill.js data/$mill/inputMill.js
cp pigments.js data/$mill/pigments.js
cp tools.js data/$mill/tools.js
cp poemTextLists.js data/$mill/poemTextLists.js

cp Bmill.js data/$mill/Bmill.js
cp bookMill.js data/$mill/bookMill.js
cp poemMill.js data/$mill/poemMill.js
#cp coverMill.js data/$mill/coverMill.js
#cp bookMill.js data/$mill/bookMill.js

#cp pdfToFilm.sh data/$mill/pdfToFilm.sh
#
cd css
 bash clean.sh
 bash compileCSS.sh
cd ../
cp css/print.css ../css/print.css
cp css/print.css data/$mill/css/print.css
#
echo "copied files"

cd data/$mill
echo ls data/$mill
ls

node inputMill.js
echo "module.exports = { webpage:'printbook${mill:4}.html', dt:'$dt', datetime:'$(date)',directory:'data/$mill' }" > millinfo.js
#
node Bmill.js
echo done running Bmill

#printbook
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

#picturebook
node poemMill picturebookinfo 
echo done running poemMill picturebookinfo 
node bookMill
echo done running bookMill on picturebookinfo 
prince -s css/print.css print.html -o printbook_temp.pdf
mv print.html printpicturebook.html
echo done making print book
pdfseparate printbook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printpicturebook.pdf
rm page*.pdf
rm printbook_temp.pdf
echo done removing front matter from printpicturebook.pdf

#
# change colors :::
#sed "s/spicecolor2: var(--red)/spicecolor2: var(--yellow)/" printbook.html > printbook2.html
#
#
#sed "s/film notext/broadsides withtext/" printpicturebook.html > printbroadsides.html
#prince -s css/print.css printbroadsides.html -o printbroadsides_temp.pdf
#echo done making broadside book
#pdfseparate printbroadsides_temp.pdf page%03d.pdf
#rm page001.pdf
#rm page002.pdf
#pdfunite page*.pdf printbroadsides.pdf
#rm page*.pdf
#rm printbroadsides_temp.pdf
#echo done removing front matter from printbroadsides.pdf
#

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
rm picture0002.png
echo done removing front matter from printpictures8x8.pdf

mkdir -p size400
mogrify -path size400/ -resize 400 picture*.png

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
#prince -s css/print.css print.html -o film9x9.pdf
echo done making film book
#
##sed "s/notext/withtext/" film.html > filmtext.html
##prince -s css/print.css filmtext.html -o filmtext.pdf
##echo done making word film book
#
## https://www.princexml.com/doc/command-line/
##prince -s css/print.css print.html --raster-dpi=300 --raster-output=frame%04d.png;
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
#make text film
#sed "s/notext/withtext/" print.html > printtext.html
#prince -s css/print.css printtext.html --raster-dpi=120 --raster-output=frame%04d.png;
#rm frame0000.png
#rm frame0001.png
##rm frame0002.png
##rm frame0003.png
#cp frame0148.png poster9x9_text_0000.png
#cp frame0298.png poster9x9_text_0001.png
#cp frame0418.png poster9x9_text_0002.png
#cp frame0618.png poster9x9_text_0003.png
#cp frame0818.png poster9x9_text_0004.png
#ffmpeg -framerate 24 -i frame%04d.png -c:v libx264 -r 24 -pix_fmt yuv420p film9x9_text.mp4
#rm frame*.png
#echo done making film9x9_text.mp4
# make shorter films
ffmpeg -ss 00:01:00 -to 00:02:00 -i film9x9.mp4 -c copy film9x9_1min.mp4
ffmpeg -ss 00:01:00 -to 00:01:15 -i film9x9.mp4 -c copy film9x9_15sec.mp4
#ffmpeg -ss 00:01:00 -to 00:02:00 -i film9x9_text.mp4 -c copy film9x9_text_1min.mp4
#ffmpeg -ss 00:01:00 -to 00:01:15 -i film9x9_text.mp4 -c copy film9x9_text_15sec.mp4
echo done making film9x9 shorter films 
# make sound films
#ffmpeg -i film9x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_sound.mp4
#ffmpeg -i film9x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_1min_sound.mp4
#ffmpeg -i film9x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9_15sec_sound.mp4
#echo done making film9x9sound films 
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

#make text film
#sed "s/notext/withtext/" print.html > printtext.html
#prince -s css/print.css printtext.html --raster-dpi=120 --raster-output=frame%04d.png;
#rm frame0000.png
#rm frame0001.png
##rm frame0002.png
##rm frame0003.png
#cp frame0148.png poster16x9_text_0000.png
#cp frame0298.png poster16x9_text_0001.png
#cp frame0418.png poster16x9_text_0002.png
#cp frame0618.png poster16x9_text_0003.png
#cp frame0818.png poster16x9_text_0004.png
#ffmpeg -framerate 24 -i frame%04d.png -c:v libx264 -r 24 -pix_fmt yuv420p film16x9_text.mp4
#rm frame*.png
#echo done making film16x9_text.mp4
#make shorter films
ffmpeg -ss 00:01:00 -to 00:02:00 -i film16x9.mp4 -c copy film16x9_1min.mp4
ffmpeg -ss 00:01:00 -to 00:01:15 -i film16x9.mp4 -c copy film16x9_15sec.mp4
#ffmpeg -ss 00:01:00 -to 00:02:00 -i film16x9_text.mp4 -c copy film16x9_text_1min.mp4
#ffmpeg -ss 00:01:00 -to 00:01:15 -i film16x9_text.mp4 -c copy film16x9_text_15sec.mp4
echo done making film16x9 shorter films 

#make sound films
#ffmpeg -i film16x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_sound.mp4
#ffmpeg -i film16x9_1min.mp4 -i tf_01:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_1min_sound.mp4
#ffmpeg -i film16x9_15sec.mp4 -i tf_00:15_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9_15sec_sound.mp4
#echo done making film16x9sound films 
#
#make vertical films
ffmpeg -i film16x9_1min.mp4  -c copy -metadata:s:v:0 rotate=90 film16x9_1min_v.mp4
ffmpeg -i film16x9_15sec.mp4  -c copy -metadata:s:v:0 rotate=90 film16x9_15sec_v.mp4
#echo done making vertical film16x9sound films 
#
#echo "directory=data/$mill" >> readMe.txt
#echo "$(date)" > readMe.txt
#echo "directory=data/$mill" >> readMe.txt
#echo "done"
#echo "|:|"
#cd ../..
#echo gcloud storage cp -r data/$mill gs://bindery/
#echo "cd data/$mill"
#echo open data/$mill/printbook.pdf
#echo open data/$mill/printbroadsides.pdf
#echo "open data/$mill/film.mp4"
#echo "open data/$mill/filmtext.mp4"
#echo "open data/$mill/filmsound.mp4"
#echo "open data/$mill/filmtextsound.mp4"
#echo "bash createFilm.sh"
#echo gcloud storage cp -r film_file$dt.mp4 gs://bindery/
#
rm print.html
rm Bfilm.js
rm B.js

sed "s/figure class=\"frame\"/figure class=\"\"/" printbook.html > printbook_temp.html
mv printbook_temp.html printbook.html
cp printbook.html ../../printbook${mill:4}.html
echo "|:|"
