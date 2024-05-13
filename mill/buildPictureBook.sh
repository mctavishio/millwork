#!/bin/bash
mill=$1
echo $mill
cd data/$mill

sed "s/film notext/broadsides notext/" printpicturebook.html > print.html
#picturebook
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

rm B.js
rm poems.js
rm print.html
rm film9x9.pdf

cd ../..
echo "|:|"
