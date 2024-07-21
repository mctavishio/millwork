const fs = require("fs"); 
const pigments = require("./pigments.js").pigments;
const tools = require("./tools.js");
console.log(process.argv);
let args = process.argv;
//console.log(`parameters = ${args.filter( (a,j)=>{return j>1} )}`);

let dt = new Date();
let timestamp = dt.getTime();
let datetime = dt.toDateString();

const title = "telegraph";
const sequencetitle = "telegraph";
const subtitle = datetime;
const description = "algorithmic sound & drawings";
const rooturl = "https://telegraph.work";
const authorurl = "https://mctavish.work/";
const author= "mctavish";
const copyright = "Copyright ©2024 mctavish<br/>";
const isbn = "ISBN: 00000<br/>";
const publisher = ". . .";

let film16x9info = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["film", "notext"],
	ntickstitle: 0,
	nticks: 60*2,
	fps: 24,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 16,
	height: 9,
	margin: 0,
	guttermargin: 0.0,
	bleed: 0,
	spine: 0,
	pixelsperunit: 120,
	svgwidth: 16*120,
	svgheight: 9*120,
	captionheight: 1,
	cssstyles: "", 
};

let film9x9info = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["film", "notext"],
	ntickstitle: 0,
	nticks: 60*2,
	fps: 24,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 9,
	height: 9,
	margin: 0,
	guttermargin: 0.0,
	bleed: 0,
	spine: 0,
	pixelsperunit: 120,
	svgwidth: 9*120,
	svgheight: 9*120,
	captionheight: 1,
	cssstyles: "", 
};

let postcardinfo = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["broadsides", "notext"],
	ntickstitle: 1,
	nticks: 60,
	fps: 1,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 6,
	height: 4,
	margin: 0.5,
	guttermargin: 0.5,
	bleed: 0.125,
	spine: 0.322,
	pixelsperunit: 72,
	svgwidth: 7*72,
	svgheight: 5*72,
	captionheight: 1,
	cssstyles: "", 
};

let picture8x8info = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["film", "notext"],
	ntickstitle: 1,
	nticks: 24,
	fps: 1,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 8,
	height: 8,
	margin: 0,
	guttermargin: 0,
	bleed: 0.125,
	spine: 0.322,
	pixelsperunit: 120,
	svgwidth: 8*120,
	svgheight: 8*120,
	captionheight: 1,
	cssstyles: "", 
};

let coverinfo = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["film", "notext"],
	ntickstitle: 1,
	fps: 1,
	nticks: 60,
	sections: [],
	poemids: [],
	bookunits: "in",
	//(width*2+bleed*2+spine)*printpixelsperunit
	width: (8*2+0.125*2+0.322),
	height: (8*1+0.125*2),
	margin: 0,
	guttermargin: 0.0,
	bleed: 0.125,
	spine: 0.322,
	pixelsperunit: 72,
	svgwidth: (8*2+0.125*2+0.322)*72,
	svgheight: (8*1+0.125*2+0.322)*72,
	captionheight: 1,
	cssstyles: "", 
}

let bookinfo = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["illustratedbook"],
	ntickstitle: 1,
	fps: 1,
	nticks: 60,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 8,
	height: 8,
	margin: 1,
	guttermargin: 1.0,
	bleed: 0.125,
	spine: 0.322,
	pixelsperunit: 72,
	svgwidth: 8*72,
	svgheight: 8*72,
	captionheight: 1,
	cssstyles: "", 
};

let picturebookinfo = {
	sequencetitle, title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	bodyclasses: ["broadsides notext"],
	ntickstitle: 1,
	fps: 1,
	nticks: 120,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 8,
	height: 8,
	margin: 1,
	guttermargin: 1.0,
	bleed: 0.125,
	spine: 0.322,
	pixelsperunit: 72,
	svgwidth: 8*72,
	svgheight: 8*72,
	captionheight: 1,
	cssstyles: "", 
};

const inputfile = `./input.js`;

const fps = 24;
const corecolors = [pigments.warmblack, pigments.warmlightwhite]; 
const spicecolors = [pigments.warmblack, pigments.warmlightwhite]; 
const allcolors = [...corecolors,...spicecolors];
const colorweights = [
	["var(--corecolor0)",10],
	["var(--corecolor1)",9],
	["var(--corecolor2)",0],
	["var(--corecolor3)",0],
	["var(--corecolor4)",0],
	["var(--spicecolor0)",1],
	["var(--spicecolor1)",2],
	["var(--spicecolor2)",2],
	["var(--spicecolor3)",0],
	["var(--spicecolor4)",0],
];
/*
const colorweights = [
	[pigments.warmlightwhite,12],
	[pigments.warmwhite,0],
	[pigments.warmblack,9],
	[pigments.warmgray,0],
	[pigments.gray,2],
	[pigments.warmlightgray,0],
	[pigments.red,1],
	[pigments.yellow,2],
	[pigments.blue,0],
];
*/
const weightedcolors = colorweights.flatMap(wx=>{
	return [...new Array(wx[1]).keys()].map( w=>wx[0] );
});

const nx = 3;
const ny = 2;
//nz = nlayers
const nz = 2;
//const xgrid = [...new Array(nx).keys()].map( j=>Math.floor(100*j/(nx-1))/100 );
//const ygrid = [...new Array(ny).keys()].map( j=>Math.floor(100*j/(ny-1))/100 );
//const ygrid = [...new Array(n).keys()].map(j=>tools.randominteger(0,100)/100).sort( (a,b) => { return a - b } );
const xgrid = [...new Array(nx).keys()].map( x=>0.5 );
const ygrid = [...new Array(ny).keys()].map( y=>0.5 );
//console.log(`inputMill:xgrid=${JSON.stringify(xgrid)}`);
const input = {
	sequencetitle,
	duration: 2.0, //minutes
	nticks: 60*2,
	fps: 24,
	nx, ny, nz,
	xgrid, ygrid,
	//pigments, colorsets, rawcolorsets,
	pigments,
	corecolors, spicecolors, allcolors,
	weightedcolors,
	cssstyles: "", 
	npoems: 80,
	nstanzas: 3,
	nlines: 4,
	nchars: 48,
	weights: [0,18,22,22,30,24,18,16,14,12,6,4,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	bookinfo,postcardinfo,coverinfo,
	picture8x8info,
	picturebookinfo,
	film9x9info,film16x9info,
};

let inputstr = `let input =
	${JSON.stringify(input,null,"\t")};
module.exports = input;`

fs.writeFileSync(inputfile, inputstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${BfilmFile} written successfully\n`);
	}
});
module.exports = input;
