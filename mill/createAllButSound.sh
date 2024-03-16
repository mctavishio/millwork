#!/bin/bash
dt=$1
mill=mill$dt
echo $dt
echo $mill

node inputMill.js

ls
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
#
#node filmMill
node poemMill film9x9info
echo done running poemMill film9x9info
node bookMill
echo done running bookMill on film9x9info
#echo done running filmMill
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
ffmpeg -i film9x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film9x9sound.mp4
echo done making film9x9sound 
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
ffmpeg -i film16x9.mp4 -i tf_02:00_sound.mp3 -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k film16x9sound.mp4
echo done making film16x9sound 
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
#
echo "|:|"
