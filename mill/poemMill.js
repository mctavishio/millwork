const fs = require("fs"); 
const input = require("./input.js");
const millinfo = require("./millinfo.js");
console.log(process.argv);
let args = process.argv;
const target = args[2] ? args[2] : "bookinfo";
const Bfile = `./B.js`;
const B = require(Bfile);
const tools = require("./tools.js");
const book = input[target];
console.log(`target=${target}`);
console.log(`book=${JSON.stringify(book)}`);
const nticks = Math.min(book.nticks,B.nticks);
const fps = Math.min(book.fps,B.fps);

const markup = str => {
	let words = str.split(" ").map( (w,j) => {
		let markup = w;
		if(tools.randominteger(0,30)<2) {
			let markclass = `mark${tools.randominteger(0,20)} word${j}`;
			let bordersclass = tools.randominteger(0,40)<2 ? `borders${tools.randominteger(0,20)}` : ""; 
			markup = `<mark class="${markclass} ${bordersclass}">${w}</mark>`;
		}
		else if(tools.randominteger(0,50)<2) {
			let bordersclass = `borders${tools.randominteger(0,20)}`; 
			markup = `<mark class="${bordersclass} word${j}">${w}</mark>`;
		}
		return markup;
	});
	return words.join(" ");
};
const poemsfile = `./poems.js`;
const bookfile = `./book.js`;
const rawpoems = require("./poemTextLists.js");

let dt = new Date();
let timestamp = dt.getTime();
let datetime = dt.toDateString();

const textLists2html = textLists => {
	return textLists.reduce( (acc,list) => {
		acc = acc + `
		<ul class="stanza">` + list.map(item=>item.replace("prostitutes","creased map")).reduce( (ulstr,item) => {
			ulstr = ulstr + `<li>${markup(item)}</li>`;
			return ulstr;
		},"");
		acc = acc + `
		</ul>`;
		return acc;
	}, "")
};

let canvas = { width:book.svgwidth, height:book.svgheight, min:Math.min(book.svgwidth,book.svgheight), max:Math.max(book.svgwidth,book.svgheight)};
let poemsinfo = [...new Array(nticks).keys()].map( j => {
	let textLists = rawpoems[j%rawpoems.length].lists;
	//let textarray = "left throng city depot arrived alone worn suitcase sandwich lukewarm coffee thermos tepid brown liquid greasy paper rusted texaco station folded map urgent mission fix the system repair reclaim rebuild reweave restore prairie meadow sequestration".split(" ");
	let textarray = textLists.reduce( (acc,list) => {
		return acc + list.join(" ");
	}, " ").split(" ").filter( word => word!=="prostitutes" && word!==" " && word.length < 12);
	let captiontext = [0,1,2].map(j=>textarray[tools.randominteger(0,textarray.length)]).join(" :|: ");
	let title = [0].map(j=>textarray[tools.randominteger(0,textarray.length)]).join(" ");
	// console.log(textarray);
	let poem = {
		id: `${(j+1).toString().padStart(2, '0')}`,
		title: `${title}`,
		text: textLists2html(textLists),
	};
	//let jd = (j===0 || j===nticks-1) ? tools.randominteger(1,nticks-2) : j; 
	let jd=j;
	let elementdraw = B.elements.map( layer => {
		return layer.map( el => {
			//console.log(el.role);
			let cx = el.b[jd].cx || el.cx;
			let cy = el.b[jd].cy || el.cy;
			let r = el.b[jd].r || el.r;
			let w = el.b[jd].w || el.w;
			let h = el.b[jd].h || el.h;
			let sw = el.b[jd].sw || el.sw;
			let sf = el.b[jd].sf || el.sf;
			let sd = el.b[jd].sd || el.sd;
			let so = el.b[jd].so || el.so;
			let fo = el.b[jd].fo || el.fo;
			let strokecolor = el.b[jd].strokecolor || el.strokecolor;
			let fillcolor = el.b[jd].fillcolor || el.fillcolor;
			let cssclasses = el.cssclasses || [];
			let p = tools.drawp[el.role]( {cx,cy,r,w,h,sw,sf,sd,so,fo,strokecolor,fillcolor } ); 
			//console.log(JSON.stringify(p));
			//console.log(JSON.stringify(tools.drawf(canvas,p,el.tag)));
			return tools.drawf(canvas,p,el.tag,cssclasses);
		}).join(" ");
	}).join(" ");

	poem.figure = {
		picture:`
	<svg viewBox="0 0 ${canvas.width} ${canvas.height}">
		${elementdraw}
	</svg>
	`,
		caption:`${captiontext}`};
	//console.log(`poemtitle = ${poem.figure.caption}, j=${j}`);
	return poem;
});

let framesinfo = [];
if(fps===1) { framesinfo=poemsinfo }
else {
	const BfilmFile = `./Bfilm.js`;
	const Bfilm = require(BfilmFile);
	framesinfo = [...new Array(nticks).keys()].flatMap( j => { 
		let poem = poemsinfo[j%nticks];
		return [...new Array(fps).keys()].map( t => {
			let k = fps*j + t;
			let frame = {
				id: `${(k).toString().padStart(3, '0')}`,
				title: poem.title, 
				text: poem.figure.caption.split(" ")[0], 
			};
			let elementdraw = Bfilm.elements.map( layer => {
				return layer.map( el => {
					let jd = k%el.b.length;
					//console.log(el.role);
					let cx = el.b[jd].cx || el.cx;
					let cy = el.b[jd].cy || el.cy;
					let r = el.b[jd].r || el.r;
					let w = el.b[jd].w || el.w;
					let h = el.b[jd].h || el.h;
					let sw = el.b[jd].sw || el.sw;
					let sf = el.b[jd].sf || el.sf;
					let sd = el.b[jd].sd || el.sd;
					let so = el.b[jd].so || el.so;
					let fo = el.b[jd].fo || el.fo;
					let strokecolor = el.b[jd].strokecolor || el.strokecolor;
					let fillcolor = el.b[jd].fillcolor || el.fillcolor;
					let cssclasses = el.cssclasses || [];
					let p = tools.drawp[el.role]( {cx,cy,r,w,h,sw,sf,sd,so,fo,strokecolor,fillcolor } ); 
					//console.log(JSON.stringify(p));
					return tools.drawf(canvas,p,el.tag,cssclasses);
				}).join(" ");
			}).join(" ");
			frame.figure = {
				picture:`
	<svg viewBox="0 0 ${canvas.width} ${canvas.height}">
		${elementdraw}
	</svg>
	`,
				//caption: poem.figure.caption,
				caption: "",
			};
			return frame;
		});
	});
}

book.target = target;
book.dt = millinfo.dt;
book.datetime = millinfo.datetime;
book.sections = [
	{ 
		id: "section1",
		title: "the repair(*)",
		inscription: "random text from field notes",
		cssclasses: ["pagestartnumbers", "booksection"],
		poems: [...new Array(nticks*fps).keys()].map( j => { return framesinfo[j].id }), 
	},
];
book.poemids = [...new Array(nticks*fps).keys()].map( j => { return framesinfo[j].id }); 

let bookstr = `let book =
	${JSON.stringify(book, null, "\t")};
module.exports = book;`

let poemsstr = `let poems =
	${JSON.stringify(framesinfo, null, "\t")};
module.exports = poems;`

fs.writeFileSync(bookfile, bookstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${bookfile} written successfully\n`);
	}
});

fs.writeFileSync(poemsfile, poemsstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${poemsfile} written successfully\n`);
	}
});
