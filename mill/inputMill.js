const fs = require("fs"); 
const pigments = require("./pigments.js").pigments;
const tools = require("./tools.js");
console.log(process.argv);
let args = process.argv;
//console.log(`parameters = ${args.filter( (a,j)=>{return j>1} )}`);

let dt = new Date();
let timestamp = dt.getTime();
let datetime = dt.toDateString();

const title = "turbulence";
const sequencetitle = "turbulence";
const subtitle = datetime;
const description = "algorithmic sound & drawings";
const rooturl = "https://turbulence.work";
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
	ntickstitle: 4,
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
	ntickstitle: 4,
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
	width: 7,
	height: 5,
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
	bodyclasses: ["broadsides", "notext"],
	ntickstitle: 1,
	nticks: 24,
	fps: 1,
	sections: [],
	poemids: [],
	bookunits: "in",
	width: 8,
	height: 8,
	margin: 0.5,
	guttermargin: 0.5,
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
	height: (8*2+0.125*1+0.322),
	margin: 0,
	guttermargin: 0.0,
	bleed: 0.125,
	spine: 0.322,
	pixelsperunit: 72,
	svgwidth: (8*2+0.125*2+0.322)*72,
	svgheight: (8*2+0.125*1+0.322)*72,
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

const inputfile = `./input.js`;

const fps = 24;
const corecolors = [pigments.warmlightwhite, pigments.warmblack, pigments.gray]; 
const spicecolors = [pigments.red, pigments.yellow, pigments.lightgray]; 
const allcolors = [...corecolors,...spicecolors];
const colorweights = [
	["var(--color1)",10],
	["var(--color2)",8],
	["var(--color3)",2],
	["var(--spicecolor1)",2],
	["var(--spicecolor2)",4],
	["var(--spicecolor3)",0],
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

const nx = 2;
const ny = 2;
//nz = nlayers
const nz = 2;

const xgrid = [...new Array(nx).keys()].map( j=>Math.floor(100*j/(nx-1))/100 );
const ygrid = [...new Array(ny).keys()].map( j=>Math.floor(100*j/(ny-1))/100 );
//const ygrid = [...new Array(n).keys()].map(j=>tools.randominteger(0,100)/100).sort( (a,b) => { return a - b } );
//const xgrid = [...new Array(nx).keys()].map( x=>0.5 );
//const ygrid = [...new Array(ny).keys()].map( y=>0.5 );
//console.log(`inputMill:xgrid=${JSON.stringify(xgrid)}`);


/*
 * example:::
	// pentatonic
	{ lowi: 0, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 0, majIII: 0, miniii: 6, IV: 6, V: 6, VI: 0, majVII: 0, minvii: 4, VIII: 2, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
*/
const chords = [
	{ I: {weight:6,fraylow:100,frayhigh:100}, IV: {weight:2,fraylow:100,frayhigh:100}, V: {weight:3,fraylow:100,frayhigh:100}, VIII: {weight:3,fraylow:100,frayhigh:100} },
	{ I: {weight:6,fraylow:100,frayhigh:100}, IV: {weight:2,fraylow:100,frayhigh:100}, V: {weight:3,fraylow:96,frayhigh:104}, minvii: {weight:1,fraylow:100,frayhigh:100}, VIII: {weight:1,fraylow:90,frayhigh:102} },
];
//console.log(`chords[1] = ${JSON.stringify(chords[1])}`);
const sounddata = require("./rawSoundFiles.js");
//{id: "accordion", keywords:"accordion", file: "accordion.mp3", duration:17.820000, nchannels:2, rate:44100, type:"mp3", bitrate:16},
/*
const horn = sounddata.filter(f=>f.id.includes("samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1")).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  
*/
const hornfray = sounddata.filter(f=>f.id.includes("samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1")).map(f=> {
	return {id:f.id, weight:1, chord:1}
});  
const horn = sounddata.filter(f=>f.keywords.includes("horn")).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  
const reeds = sounddata.filter(f=>f.keywords.includes("reed")).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  


const score = [
	{gain:0.4,padmin:0,padmax:100,start:0,end:1.0,nthreads:4,list:horn},
	{gain:0.4,padmin:0,padmax:400,start:0.7,end:1.0,nthreads:3,list:horn},
	{gain:0.4,padmin:10,padmax:200,start:0.4,end:0.5,nthreads:2,list:reeds},
	{gain:0.4,padmin:10,padmax:200,start:0.6,end:0.7,nthreads:4,list:hornfray},
];
let soundids = [];
const sounds = score.reduce( (acc,part) => {
	part.list.forEach( instrument => { 
		if(!soundids.includes(instrument.id)) {
			soundids.push(instrument.id);
			acc.push(sounddata.filter(f => f.id===instrument.id)[0]);
		}
	});
	return acc;
},[]);
const input = {
	sequencetitle,
	duration: 2.0, //minutes
	nticks: 60*2,
	fps: 24,
	chords,
	sounds,
	score,
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
	film9x9info,film16x9info,
};

fs.writeFileSync("inSoundFiles.js", JSON.stringify(sounds,null,"\t"), (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`inSoundFiles file written successfully\n`);
	}
})

let inputstr = `let input =
	${JSON.stringify(input,null,"\t")};
module.exports = input;`

fs.writeFileSync("input.js", inputstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${BfilmFile} written successfully\n`);
	}
});
module.exports = input;
