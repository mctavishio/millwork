#usage::: bash trimFilm.sh inputfile.mp3 00:00:00 00:01:00
# $1=input filename 
# $2=start time form: 00:10:00
# $3=end time 
# ffmpeg -ss 00:00:00 -to 00:01:00 -i film.mp4 -c copy film_1min.mp4
# form from: https://shotstack.io/learn/use-ffmpeg-to-trim-video/
# ffmpeg -i input.mp4 -ss 00:05:20 -t 00:10:00 -c:v copy -c:a copy output1.mp4
# ffmpeg -ss $2 -to $3 -i film.mp4 -c copy film_$2_$3.mp4
ffmpeg -ss $2 -to $3 -i $1.mp4 -c copy $1_start$2_end$3.mp4
