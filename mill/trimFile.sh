#usage::: bash trimFile.sh inputfile.mp3 00:15 4
# $1=input filename 
# $2=length of new file (ex:00:15)
# $3=length of fade out (t indicates linear like 3)
 sox $1 tf_$2_$3_$1 fade t 0 $2 $3
