const fs = require("fs"); 
const input = require("./input.js"); 
console.log(process.argv);
let args = process.argv;

let dt = new Date();
let timestamp = dt.getTime();
let datetime = dt.toDateString();

const Bfile = `./B.js`;
const BfilmFile = `./Bfilm.js`;
const tools = require("./tools.js");

/* 
 * for when the nticks is determined by the length of the sound file
const outSoundFiles = require("./outSoundFiles.js");
let soundFile = outSoundFiles.filter(f=>f.id==="line_all_thread_all_echo_reverb").length>0 ? outSoundFiles.filter(f=>f.id==="line_all_thread_all_echo")[0] : null;
const nticks =  soundFile ? Math.round(soundFile.duration) : 240;
*/
const nticks = input.nticks;
console.log(`nticks = ${nticks}`);
const fps = input.fps || 24;
const pigments = input.pigments;
const spicecolors = input.spicecolors; 
const corecolors = input.corecolors; 
const allcolors = input.allcolors;
const weightedcolors = input.weightedcolors;
const nx = input.nx || 5;
const ny = input.ny || 5;
const nz = input.nz || 2;
const nmin = Math.min(nx,ny);
const nmax = Math.max(nx,ny);
const m = nx*ny*nz;
const ne = (nx*2+ny)*nz;
const n = nmin;

const xgrid = tools.shuffle(input.xgrid);
const ygrid = tools.shuffle(input.ygrid);
console.log(`xgrid=${JSON.stringify(xgrid)}`);
//const xgrid = tools.shuffle(input.xgrid);
//const ygrid = tools.shuffle(input.ygrid);

//x,y,e,z
let elements = [];
elements[0] = [
	{tag:"rect",role:"rect",b:[],n:0,block:0,x:0,y:0,z:0,e:0,cx:0,cy:0,w:1,h:1,sw:0.2,sf:0,sd:4,so:1,fo:1,strokecolor:"var(--warmblack)",fillcolor:"var(--warmlightwhite)"},
];
let count=0;
let r0 = 0.4;
[...new Array(nz).keys()].map(z=>z+1).forEach( z=> {
	//let color = weightedcolors[tools.randominteger(0,weightedcolors.length)];
	let e = -1;
	elements[z] = [];

	let color = allcolors[tools.randominteger(0,allcolors.length)]; 
	//[...new Array(nx).keys()].forEach( x=> {
	let x=0;
	/*
	color = z<nz ? allcolors[tools.randominteger(0,allcolors.length)] : "var(--yellow)";
	++e;++count;
	elements[z].push({b:[], tag:"line", role:"vline", x,y:0,z,e,n:count, cx:0.5, cy:0.5, so:1.0, fo:0.0, strokecolor:color, fillcolor:color});
	*/
	[...new Array(ny).keys()].forEach( y=> {
		let cy = 0.5;
		let cx = 0.5;

		let offset = 0;
		color = "var(--warmblack)"; 
		++e;++count;
		elements[z].push({tag:"rect",role:"rect",b:[],n:count,block:0,x:0,y:0,z:0,e,cx:offset,cy:-1,w:1-2*offset,h:2,sw:0.28,sf:0.5,sd:.5,so:1,fo:0,strokecolor:color, fillcolor:color});
		offset = 0;
		color = "var(--warmblack)"; 
		++e;++count;
		elements[z].push({tag:"rect",role:"rect",b:[],n:count,block:0,x:0,y:0,z:0,e,cx:offset,cy:-1,w:1-2*offset,h:2,sw:0.28,sf:0.5,sd:.5,so:1,fo:0,strokecolor:color, fillcolor:color});
		//elements[z].push({tag:"rect",role:"rect",b:[],n:count,block:0,x:0,y:0,z:0,e,cx:offset,cy:offset,w:1-2*offset,h:1-2*offset,sw:0.28,sf:0.5,sd:.5,so:1,fo:0,strokecolor:color, fillcolor:color});

		color = "var(--warmlightwhite)"; 
		++e;++count;
		offset = tools.randominteger(0,10)/100;
		elements[z].push({tag:"rect",role:"rect",b:[],n:count,block:0,x:0,y:0,z:0,e,cx:offset,cy:-1,w:1-2*offset,h:2,sw:0.28,sf:0.5,sd:.5,so:1,fo:0,strokecolor:color, fillcolor:color});
		//elements[z].push({tag:"rect",role:"rect",b:[],n:count,block:0,x:0,y:0,z:0,e,cx:offset,cy:offset,w:1-2*offset,h:1-2*offset,sw:0.28,sf:0.5,sd:.5,so:1,fo:0,strokecolor:color, fillcolor:color});

		color = "var(--warmblack)"; 
		//color = allcolors[tools.randominteger(0,allcolors.length)];
		++e;++count;
		elements[z].push({b:[], tag:"line", role:"hline", x,y,z,e,n:count, cx:0, cy:ygrid[y], so:1.0, fo:0.0, strokecolor:color, fillcolor:color});

		color = z<1 ? "var(--yellow)" : "var(--warmlightwhite)"; 
		//color = allcolors[tools.randominteger(0,allcolors.length)];
		++e;++count;
		elements[z].push({b:[], tag:"line", role:"hline", x,y,z,e,n:count, cx:0, cy:ygrid[y], so:1.0, fo:0.0, strokecolor:color, fillcolor:color});

		color = "var(--warmlightwhite)"; 
		//color = allcolors[tools.randominteger(0,allcolors.length)];
		++e;++count;
		elements[z].push({b:[], tag:"line", role:"hline", x,y,z,e,n:count, cx:0, cy:ygrid[y], so:1.0, fo:0.0, strokecolor:color, fillcolor:color});

		color = "var(--warmblack)"; 
		//color = allcolors[tools.randominteger(0,allcolors.length)];
		++e;++count;
		elements[z].push({b:[], tag:"line", role:"hline", x,y,z,e,n:count, cx:0, cy:ygrid[y], so:1.0, fo:0.0, strokecolor:color, fillcolor:color});

		color = "var(--warmlightwhite)"; 
		//color = allcolors[tools.randominteger(0,allcolors.length)];
		++e;++count;
		elements[z].push({b:[], tag:"line", role:"hline", x,y,z,e,n:count, cx:0, cy:ygrid[y], so:1.0, fo:0.0, strokecolor:color, fillcolor:color});
		color = z%2===0 ? "var(--yellow)" : "var(--warmlightwhite)"; 

		color = "var(--warmblack)"; 
		++e;++count;
		let r = Math.max(0.05,0.38-0.1*z);
		elements[z].push({b:[], tag:"circle", role:"fcircle", x,y,z,e,n:count, cx:0.5, cy:0.5, r:r, strokecolor:color, fillcolor:color});
	});
	//});
});

let B = {
	nticks: nticks,
	fps: fps,
	pigmentcount: [],
	elements: elements,
};
let Bfilm = {
	nticks: nticks,
	fps: fps,
	elements: elements.map( z => {
		return z.map( el => {
			let newel = {};
			Object.keys(el).forEach(key=> {
				newel[key]=el[key];
			});
			return newel;
		});
	})
}
const dotween = () => { return tools.randominteger(0,100) < 101 }
const ischange = () => { return tools.randominteger(0,100) > 16 }

/* layer 0
 * rectangle background
 * */
[0].forEach( z => {
	[...new Array(elements[z].length).keys()].forEach( n => { 
		B.elements[z][n].b = [...new Array(nticks).keys()].map( j => {
			let sf = tools.randominteger(1,20)/100;
			return { };
		});
		Bfilm.elements[z][n].b = [...new Array(nticks).keys()].flatMap( j => {
			return [...new Array(fps).keys()].map( t => {
				return {};
			});
		});
	});
});

/* layers 1&above
 * */
let mult = [...new Array(nz).keys()].map(z=>tools.randominteger(2,10)/10).sort( (a, b) => b-a );
[...new Array(nz).keys()].map(z=>z+1).forEach( z => { 
	let rarray = [...new Array(B.elements[z].length).keys()].map(j=>{
		return tools.randominteger(4,48)/100;
	}).sort( (a, b) => b - a );
	[...new Array(nticks).keys()].forEach( t => {
		B.elements[z].forEach( (el,j) => {
			let bt = {};
			let sw = el.role==="hline" ? tools.randominteger(8,80)/100 : tools.randominteger(8,18)/100;
			//let sw = 1.2;
			let sf = 0;
			let sd = el.role==="scircle" ? tools.randominteger(65,80)/100 : tools.randominteger(5,20)/100;
			if(el.tag==="rect") {
				sw = tools.randominteger(8,200)/100; 
				sf = tools.randominteger(0,360)/100; 
				sd = tools.randominteger(4,20)/100
			}

			let r = tools.randominteger(8,48)/100;
			let rmult = tools.randominteger(48,110)/100;
			if("r" in el) r=el.r*rmult*tools.randominteger(96,104)/100;

			if( t===0 || ischange() || t===nticks-1 ) {
				//bt = { sw:sw, sd:sd, sf:sf, r:r*mult[z-1] };
				bt = { sw:sw, sd:sd, sf:sf, r:r};
				if(el.tag==="circle") {
					bt = { cx:tools.randominteger(0,100)/100, sw:sw, sd:sd, sf:sf, r:r};
				}
			}
			else { bt = el.b[t-1]; }
			el.b[t] = bt;
		});
	});
	B.elements[z].forEach( (el,j) => {
		[...new Array(Math.floor(nticks/5)).keys()].forEach(x=> {
			let t = tools.randominteger(1,nticks-2);
			el.b[t] = tools.tween(el.b[t-1],el.b[t+1],1,2);
		});

		[...new Array(Math.floor(nticks/3)).keys()].forEach(x=> {
			let t = tools.randominteger(1,nticks-3);
			el.b[t] = tools.tween(el.b[t-1],el.b[t+2],1,3);
			el.b[t+1] = tools.tween(el.b[t-1],el.b[t+2],2,3);
		});
		[...new Array(Math.floor(nticks/2)).keys()].forEach(x=> {
			let t = tools.randominteger(1,nticks-4);
			el.b[t] = tools.tween(el.b[t-1],el.b[t+3],1,4);
			el.b[t+1] = tools.tween(el.b[t-1],el.b[t+3],2,4);
			el.b[t+2] = tools.tween(el.b[t-1],el.b[t+3],3,4);
		});

		//console.log(`el.b[0] = ${JSON.stringify(el.b[0])}`);
		//console.log(`el.b[nticks-1] = ${JSON.stringify(el.b[nticks-1])}`);
		Bfilm.elements[z][j].b = [...new Array(nticks).keys()].flatMap( t => { 
			//console.log(`t=${t}`);
			let p1 = el.b[t];
			let p2 = el.b[Math.min((t+1),(nticks-1))];
			//console.log(`el.n=${el.n}, j=${j}, p1=${JSON.stringify(p1)}, p2=${JSON.stringify(p2)}`);
			let istween = dotween();
			if(t===0 || t===nticks-1) {istween = 0}
			else if (t>nticks*0.6) {istween = 1}
			else {
				let tag = t<nticks/2 ? "circle" : "line";
				if(Bfilm.elements[z][j].tag===tag) {istween = 1}
			}
			return [...new Array(fps).keys()].map( f => {
				//console.log(`f=${f} t=${t} istween=${istween}`);
				let step = istween ? tools.tween(p1,p2,f,fps) : el.b[tools.randominteger(0,el.b.length)];
				//console.log(`p1=${JSON.stringify(p1)} p2=${JSON.stringify(p2)} step = ${JSON.stringify(step)}`);
				return step; 
			});
		});
		//console.log(`Bfilm.elements[z][j].b.length =${Bfilm.elements[z][j].b.length}`);
		//console.log(`el.b.length=${el.b.length}`);
		//console.log(`count=${el.b.length}`);
		//console.log(`count=${Bfilm.elements[z][j].b.length}`);
	});
});

let Bstr = `let B =
	${JSON.stringify(B, null, "\t")};
module.exports = B;`

let Bfilmstr = `let B =
	${JSON.stringify(Bfilm)};
module.exports = B;`

fs.writeFileSync(Bfile, Bstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${Bfile} written successfully\n`);
	}
});

fs.writeFileSync(BfilmFile, Bfilmstr, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`${BfilmFile} written successfully\n`);
	}
});
