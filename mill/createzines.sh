for each mill
	copy zineMill to folder
	run zineMill to with body class illustratedbook
	run prince & get rid of front pages
	cp printzine.html to ../../printzine$mill.html
then sed to body classes film notext
	run prince & get rid of front pages
then sed to body classes broadsides notext
	run prince & get rid of front pages

gsutil cp these new pdf files (&the html) 
to their respective storage folders

