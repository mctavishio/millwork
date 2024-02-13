mogrify -format jpg *.heic
mogrify -format jpg *.HEIC
mkdir -p size400
mogrify -path size400/ -resize 400 *.jpg
mkdir -p size600
mogrify -path size600/ -resize 600 *.jpg
mkdir -p size1280
mogrify -path size1280/ -resize 1280 *.jpg
