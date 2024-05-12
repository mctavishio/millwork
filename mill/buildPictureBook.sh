#!/bin/bash
mill=$1
echo $mill
cp buildPictureBook.sh data/$mill/buildPictureBook.sh
cp inputMill.js data/$mill/inputMill.js
cd data/$mill

node inputMill.js

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
pdfunite page*.pdf printpicturebook.pdf
rm page*.pdf
rm printbook_temp.pdf
echo done removing front matter from printpicturebook.pdf

pdfseparate printpostcardbook_temp.pdf page%03d.pdf
rm page001.pdf
rm page002.pdf
rm page004.pdf
pdfunite page*.pdf printpostcardbook.pdf
rm page*.pdf
rm printpostcardbook_temp.pdf
echo done removing front matter from printpostcardbook.pdf

rm B.js
rm poems.js
rm print.html
rm film9x9.pdf

cd ../..
echo "|:|"
