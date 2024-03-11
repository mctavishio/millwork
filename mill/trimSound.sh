#usage::: bash trimSound.sh inputfile.mp3 00:15 4
#fade [type] fade-in-length [stop-time [fade-out-length]]
#Add a fade effect to the beginning, end, or both of the audio.
#https://www.manpagez.com/man/7/soxeffect/
# $1=input filename 
# $2=length of new file (ex:00:15)
# $3=length of fade out (t indicates linear like 3)
#sox $1 tf_$2_$3_$1 fade t 0 $2 $3
#Choices are q for quarter of a sine wave, h  for  half  a
#sine  wave,  t  for  linear  slope, l for logarithmic, and p for
#inverted parabola.  The default is logarithmic.
#sox $1 tf_$2_$3_$1 fade h 0 $2 $3
sox $1 tf_$2_$1 fade h 0 $2 $3
