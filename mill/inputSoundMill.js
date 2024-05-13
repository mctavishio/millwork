const fs = require("fs"); 
const tools = require("./tools.js");
console.log(process.argv);
let args = process.argv;
//console.log(`parameters = ${args.filter( (a,j)=>{return j>1} )}`);

let dt = new Date();
let timestamp = dt.getTime();
let datetime = dt.toDateString();

const authorurl = "https://mctavish.work/";
const author= "mctavish";
const inputfile = `./inputSounds.js`;
/*
 * example:::
	// pentatonic
	{ lowi: 0, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 0, majIII: 0, miniii: 6, IV: 6, V: 6, VI: 0, majVII: 0, minvii: 4, VIII: 2, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
*/
const chords = [
	{ bassV: {weight:1,fraylow:100,frayhigh:100}, bassIV: {weight:3,fraylow:100,frayhigh:100}, I: {weight:6,fraylow:100,frayhigh:100}, IV: {weight:2,fraylow:100,frayhigh:100}, V: {weight:3,fraylow:100,frayhigh:100}, VIII: {weight:3,fraylow:100,frayhigh:100} },
	{ I: {weight:6,fraylow:100,frayhigh:100}, IV: {weight:2,fraylow:100,frayhigh:100}, V: {weight:3,fraylow:100,frayhigh:100}, VIII: {weight:3,fraylow:100,frayhigh:100} },
	//{ I: {weight:6,fraylow:100,frayhigh:100}, IV: {weight:2,fraylow:100,frayhigh:100}, V: {weight:3,fraylow:96,frayhigh:104}, minvii: {weight:1,fraylow:100,frayhigh:100}, VIII: {weight:1,fraylow:90,frayhigh:102} },
];
//console.log(`chords[1] = ${JSON.stringify(chords[1])}`);
const sounddata = require("./rawSoundFiles.js");
//{id: "accordion", keywords:"accordion", file: "accordion.mp3", duration:17.820000, nchannels:2, rate:44100, type:"mp3", bitrate:16},
/*
const horn = sounddata.filter(f=>f.id.includes("samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1")).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  
*/
let set1 = {
	keywordANDset: ["knock", "orch"],
	keywordORset: ["scratch"],
	keywordNOTset: [],
	idANDset: [],
	idORset: [],
	idNOTset: ["typewriter"],
};
let set2 = {
	keywordANDset: [],
	keywordORset: [],
	keywordNOTset: [],
	idANDset: [],
	idORset: ["train"],
	idNOTset: ["typewriter"],
};
const filterrawsounds = set => {
	return f => {
		let filtersets = set;
		let filter = true;
		console.log(`f.id=${f.id}`);
		console.log(`f.keywords=${f.keywords}`);
		filtersets.keywordANDset.forEach( v => {
			filter = filter && f.keywords.includes(v);
		});
		filtersets.keywordORset.forEach( v => {
			filter = filter || f.keywords.includes(v);
		});
		filtersets.keywordNOTset.forEach( v => {
			filter = filter && !f.keywords.includes(v);
		});
		filtersets.idANDset.forEach( v => {
			filter = filter && f.id.includes(v);
		});
		filtersets.idORset.forEach( v => {
			filter = filter || f.id.includes(v);
		});
		filtersets.idNOTset.forEach( v => {
			filter = filter && !f.id.includes(v);
		});
		console.log("filter = "+filter);
		return filter;
	}
};
//const drums1 = sounddata.filter(f=>f.keywords.includes("beat")&&f.keywords.includes("thunk")&&!f.id.includes("typewriter")&&!f.keywords.includes("vox")).map(f=> {
const drums1 = sounddata.filter(filterrawsounds(set1)).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  
const drums2 = sounddata.filter(filterrawsounds(set2)).map(f=> {
	return {id:f.id, weight:1, chord:0}
});  
//console.log(`drums1 = ${JSON.stringify(drums1)}`);
const drums3 = drums1;
const drums4 = drums1;

const score = [
	{gain:0.3,padmin:0,padmax:20,start:0,end:1.0,nthreads:5,list:drums1},
	{gain:0.3,padmin:0,padmax:10,start:0.1,end:0.9,nthreads:3,list:drums2},
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
	chords,
	sounds,
	score,
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

fs.writeFileSync(inputfile, inputstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${BfilmFile} written successfully\n`);
	}
});
module.exports = input;
