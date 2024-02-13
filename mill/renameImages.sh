ls *.jpg | cat -n | while read n f; do mv "$f" `printf "%04d.jpg" $n`; done
