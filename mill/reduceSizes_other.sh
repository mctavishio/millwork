mogrify -format jpg *.heic
mogrify -format jpg *.HEIC
#find . -type f -name '*.jpeg' -print0 | xargs -0 rename 's/\.jpeg/\.jpg/'
for i in *.jpeg; do mv -- "$i" "${i%.jpeg}.jpg"; done
ls *.jpg | cat -n | while read n f; do mv "$f" `printf "image%04d.jpg" $n`; done
#mkdir -p size400
#mogrify -path size400/ -resize 400 *.jpg
#mkdir -p size600
#mogrify -path size600/ -resize 600 *.jpg
mkdir -p size1280
mkdir -p size1280x720_nocrop
mkdir -p size1280x720_crop
mogrify -path size1280/ -resize 1280 *.jpg
mogrify -path size1280x720_nocrop -resize 1280x1280 -extent 1280x720 *.jpg
mogrify -path size1280x720_crop -resize 1280x1280 -crop 1280x720+0+0 *.jpg
#for i in *.mov; do ffmpeg -i "$i" "${i%.*}.mp4"; done
#for i in *.mov; do ffmpeg -i "$i" -filter:v scale=1280:-1 -c:a copy "${i%.*}_1280.mp4
#convert "IMG_2137.jpg" -resize 1280x1280 -extent 1280x720 "IMG_2137_720x1280_nocrop.jpg"
#convert "IMG_2137.jpg" -gravity center -crop 1280x720+0+0 "IMG_2137_720x1280.jpg"
