#usage::: bash trimFilm.sh inputfile.mp3 00:00:00 00:01:00
# $1=input filename 
# $2=start time form: 00:10:00
# $3=end time 
# ffmpeg -ss 00:00:00 -to 00:01:00 -i film.mp4 -c copy film_1min.mp4
ffmpeg -ss $2 -to $3 -i film.mp4 -c copy film_$2_$3.mp4
