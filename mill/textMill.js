const fs = require("fs"); 
const tools = require("./tools.js");
const wordsAll = require("./wordsAll.js");
const vowels = "aeiou".split("");
let letters = wordsAll[0].words;
let ln = letters.length;
wordsAll.filter(list=>list.n>1).forEach( list=> {
	[...Array(10).keys()].forEach(x => {
		let newword = [...Array(list.n).keys()].reduce( (acc,j) => {
			return acc + letters[tools.randominteger(0,ln)];
		}, "");
		console.log(`newword=${newword}`);
		list.words.push(newword);
	});
});
const input = require("./input.js");
const npoems = input.npoems || 80;
const nstanzas =  3;
const nlines = input.nlines || 4;
//const nstanzas = input.nstanzas || 3;
//const nlines = input.nlines || 4;
const nchars = input.nchars || 48;
const chcounts = wordsAll.map(w=>w.n);
const wchcounts = wordsAll.flatMap( w => {
	return [...Array(w.words.length)].map(k=>w.n);  
});
//console.log(`wchcounts=${wchcounts}`);
const punctuations = ["|||","|.|","=>","<=",".^.","#-#","&&","++","_¶",".ä.","(æ)", "ƶƶƶ", "ǡ", "Ǝ!", "Ʃ", "ò"];
const getpunctuation  = () => {
	return punctuations[tools.randominteger(0,punctuations.length)];
}
let rawpoems = [...Array(npoems).keys()].map( (p,pn) =>{
	let poem = [...Array(nstanzas).keys()].map(s=>{	
		let count = 0;
		let linecount = [];
		while(count<nchars) {
			//console.log(`nchars-count = ${nchars-count}`);
			let chcts = wchcounts.filter(c => c <= (nchars-count) );
			let n = chcts[tools.randominteger(0,chcts.length)];
			count = count + n + 2;
			linecount.push(n);
		}
		let stanza = [...Array(nlines).keys()].map( (l,lj) => {	
			return line = linecount.map( n => {
				let choices = wordsAll.filter(w => w.n===n)[0].words.filter(w => !w.includes(vowels[pn%vowels.length]));
				let word = choices[tools.randominteger(0,choices.length)];
				return word;
			}).join("..");
			/*
			while(count<nchars) {
				//console.log(`nchars-count = ${nchars-count}`);
				let chcts = wchcounts.filter(c => c <= (nchars-count) );
				let n = chcts[tools.randominteger(0,chcts.length)];
				//console.log(n);
				count = count + n + 1;
				//let choices = wordsAll.filter(w => w.n===n)[0].words;
				let choices = wordsAll.filter(w => w.n===n)[0].words.filter(w => !w.includes(vowels[pn%vowels.length]));
				let word = choices[tools.randominteger(0,choices.length)];
				line.push(word+" ");
			}
			return tools.shufflearray(line).join("");
			*/
		});
		return stanza;
	});
	return {title:"poem " + p, lists:poem}
});
let rawpoemsstr = `module.exports = ${JSON.stringify(rawpoems,null," ")}`;
//console.log(`rawpoems = ${JSON.stringify(rawpoems,null,"\t")}`);
fs.writeFileSync("poemTextLists.js", rawpoemsstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${BfilmFile} written successfully\n`);
	}
});
