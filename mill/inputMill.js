const fs = require("fs"); 
const pigments = require("./pigments.js").pigments;
const colorsets = require("./pigments.js").colorsets;
const rawcolorsets = require("./pigments.js").rawcolorsets;
const tools = require("./tools.js");
console.log(process.argv);
let args = process.argv;

let dt = new Date();
let timestamp = dt.getTime();
let datetime = dt.toDateString();

const title = "turbulence";
const subtitle = datetime;
const description = "algorithmic sound & drawings";
const rooturl = "https://turbulence.work";
const authorurl = "https://mctavish.work/";
const author= "mctavish";
const copyright = "Copyright ©2024 mctavish<br/>";
const isbn = "ISBN: 00000<br/>";
const publisher = ". . .";

let filmobj = {
	title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	sections: [],
	poemids: [],
	bookmargin: 0,
	bookguttermargin: 0,
	bleed: 0,
	bookunits: "in",
	filmwidth: 16,
	filmheight: 9,
	bookwidth: 8,
	bookheight: 8,
	bookmargin: 1,
	postcardwidth: 7,
	postcardheight: 5,
	bookguttermargin: 1.2,
	bleed: 0.125,
	pixelsperunit: 72,
	captionheight: 1,
	cssstyles: "", 
};
let bookobj = {
	title, subtitle, description, rooturl,
	authorurl, author, copyright,
	isbn, publisher,
	sections: [],
	poemids: [],
	bookunits: "in",
	bookwidth: 8,
	bookheight: 8,
	bookmargin: 1,
	bookguttermargin: 1.2,
	bleed: 0.125,
	pixelsperunit: 72,
	captionheight: 1,
	cssstyles: "", 
};

const inputfile = `./input.js`;

const fps = 24;
const spicecolors = [pigments.warmlightwhite, pigments.warmlightwhite, pigments.warmblack, pigments.warmgray, pigments.yellow]; 
const colors = colorsets.warmbw; 
//const allcolors = [pigments.warmlightwhite,pigments.warmblack,pigments.yellow,pigments.warmlightwhite,pigments.warmlightwhite,pigments.warmblack,pigments.warmlightwhite,pigments.warmblack];
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

const allcolors = colorweights.flatMap(wx=>{
	return [...new Array(wx[1]).keys()].map( w=>wx[0] );
});

const nx = 3;
const ny = 3;
//nz = nlayers
const nz = 2;

const xgrid = [...new Array(nx).keys()].map( j=>Math.floor(100*j/(nx-1))/100 );
const ygrid = [...new Array(ny).keys()].map( j=>Math.floor(100*j/(ny-1))/100 );
//const ygrid = [...new Array(n).keys()].map(j=>tools.randominteger(0,100)/100).sort( (a,b) => { return a - b } );
//const xgrid = [...new Array(nx).keys()].map( x=>0.5 );
//const ygrid = [...new Array(ny).keys()].map( y=>0.5 );
console.log(`inputMill:xgrid=${JSON.stringify(xgrid)}`);

const intervals = {
	lowi: basetone => { return basetone/4 },
	lowinoise: basetone => { return tools.randominteger(9,11)/10*basetone/4 },
	bassi: basetone => { return basetone/2 },
	bassinoise: basetone => { return tools.randominteger(9,11)/10*basetone/2 },
	bassIV: basetone => { return basetone*4/6 },
	bassIVnoise: basetone => { return tools.randominteger(9,11)/10*basetone*4/6 },
	bassV: basetone => { return basetone*3/2 },
	bassVnoise: basetone => { return tools.randominteger(9,11)/10*basetone*3/2 },
	I: basetone => { return basetone/1 },
	Inoise: basetone => { return tools.randominteger(9,11)/10*basetone/1 },
	II: basetone => { return basetone*9/8 },
	IInoise: basetone => { return tools.randominteger(9,11)/10*basetone*9/8 },
	majIII: basetone => { return basetone*5/4 },
	majIIInoise: basetone => { return tools.randominteger(9,11)/10*basetone*5/4 },
	miniii: basetone => { return basetone*6/5 },
	miniiinoise: basetone => { return tools.randominteger(9,11)/10*basetone*6/5 },
	IV: basetone => { return basetone*4/3 },
	IVnoise: basetone => { return tools.randominteger(9,11)/10*basetone*4/3 },
	V: basetone => { return basetone*3/2 },
	Vnoise: basetone => { return tools.randominteger(9,11)/10*basetone*3/2 },
	VI: basetone => { return basetone*5/3 },
	VInoise: basetone => { return tools.randominteger(9,11)/10*basetone*5/3 },
	majVII: basetone => { return basetone*15/8 },
	majVIInoise: basetone => { return tools.randominteger(9,11)/10*basetone*15/8 },
	minvii: basetone => { return basetone*9/5 },
	minviinoise: basetone => { return tools.randominteger(9,11)/10*basetone*9/5 },
	VIII: basetone => { return basetone*2 },
	VIIInoise: basetone => { return tools.randominteger(9,11)/10*basetone*2 },
	lownoise: basetone => { return basetone*tools.randominteger(5,9)/10 },
	midnoise: basetone => { return basetone*tools.randominteger(9,11)/10 },
	highnoise: basetone => { return basetone*tools.randominteger(12,18)/10 },
	noise: basetone => { return basetone*tools.randominteger(4,16)/10 },
	buzz: basetone => { return basetone*tools.randominteger(9,12)/10 },
};

/*
 * example:::
	// pentatonic
	{ lowi: 0, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 0, majIII: 0, miniii: 6, IV: 6, V: 6, VI: 0, majVII: 0, minvii: 4, VIII: 2, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
*/
const chords = [
	{ I: {weight:6,fraylow:100,frayhigh:100}, II: {weight:2,fraylow:100,frayhigh:100}, IV: {weight:2,fraylow:100,frayhigh:100}, V: {weight:3,fraylow:100,frayhigh:100} },
	{ I: {weight:6,fraylow:92,frayhigh:108}, II: {weight:2,fraylow:92,frayhigh:108}, IV: {weight:2,fraylow:92,frayhigh:108}, V: {weight:3,fraylow:92,frayhigh:108} },
];
console.log(`chords[1] = ${JSON.stringify(chords[1])}`);
const sounddata = require("./rawSoundFiles.js");
//{id: "accordion", keywords:"accordion", file: "accordion.mp3", duration:17.820000, nchannels:2, rate:44100, type:"mp3", bitrate:16},
//373243__samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1
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
/*
const hornfray = sounddata.filter(f=>f.keywords.includes("horn")).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  
*/

const score = [
	{gain:0.5,padmin:0,padmax:100,start:0,end:1,nthreads:4,list:horn},
	{gain:0.4,padmin:0,padmax:400,start:0.3,end:0.9,nthreads:3,list:hornfray},
	//{gain:0.2,padmin:0,padmax:400,nthreads:3,list:afterring},
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
let intervalstr = JSON.stringify(intervals, (key, val) => {
        return (typeof val === 'function') ? '' + val.toString() : val;
});
console.log(`intervalstr = ${intervalstr}`);
const input = {
	duration: 1.8, //minutes
	fps: 24,
	intervals: intervalstr,
	chords,
	sounds,
	score,
	nx, ny, nz,
	xgrid, ygrid,
	//pigments, colorsets, rawcolorsets,
	pigments,
	colors, spicecolors, allcolors,
	bookunits: "in",
	bookwidth: 8,
	bookheight: 8,
	bookmargin: 1,
	bookguttermargin: 1.2,
	bleed: 0.125,
	pixelsperunit: 72,
	captionheight: 1,
	cssstyles: "", 
	npoems: 80,
	nstanzas: 3,
	nlines: 4,
	nchars: 48,
	weights: [0,18,22,22,30,24,18,16,14,12,6,4,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	bookobj,filmobj,
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
