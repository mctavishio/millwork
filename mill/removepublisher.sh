for i in printzine*.html 
do 
    sed  "s/<h4 id=\"publisher\">mctavish<\/h4>//" "$i" > "t$i"
done
