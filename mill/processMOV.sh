for f in *.MOV;
do ffmpeg -i "$f" -vf scale=-1:1080 "small$f";
ffmpeg -i small$f -c copy -movflags +faststart  $f.mp4
ffmpeg -i $f.mp4 -vcodec copy -an $f_nosound.mp4
done

