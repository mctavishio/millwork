#!/bin/bash
dt=$1
mill=mill$dt
echo $dt
echo $mill

node inputMill.js

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
#
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

sed "s/film notext/broadsides withtext/" printpicturebook.html > printbroadsides.html
prince -s css/print.css printbroadsides.html -o printbroadsides_temp.pdf
echo done making broadside book
pdfseparate printbroadsides_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
pdfunite page*.pdf printbroadsides.pdf
rm page*.pdf
rm printbroadsides_temp.pdf
echo done removing front matter from printbroadsides.pdf

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

sed "s/figure class=\"frame\"/figure class=\"\"/" printbook.html > printbook_temp.html
mv printbook_temp.html printbook.html
#gcloud storage  cp printbook.html gs://$gsdir/$mill/
cp printbook.html ../../printbook${mill:4}.html
echo "|:|"
