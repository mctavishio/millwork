#remove audio
ffmpeg -i $input_file -c copy -an $output_file
#trim
ffmpeg -i input.mp4 -ss 00:05:20 -t 00:10:00 -c:v copy -c:a copy output1.mp4
#https://shotstack.io/learn/use-ffmpeg-to-trim-video/
#-ss is the starting point and -t is the duration
#or $ ffmpeg -i input.mp4 -ss 00:05:10 -to 00:15:30 -c:v copy -c:a copy output2.mp4
# -to uses a specific end time
# or cut from end ::: ffmpeg -sseof -00:10:00 -i input.mp4 -c copy output6.mp4
# or with an exact encoding : $ ffmpeg -ss 00:05:20 -accurate_seek -i input.mp4 -t 00:10:00 -c:v libx264 -c:a aac output7.mp4

