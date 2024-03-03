let input =
	{
	"duration": 1.8,
	"fps": 24,
	"intervals": "{\"lowi\":\"basetone => { return basetone/4 }\",\"lowinoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone/4 }\",\"bassi\":\"basetone => { return basetone/2 }\",\"bassinoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone/2 }\",\"bassIV\":\"basetone => { return basetone*4/6 }\",\"bassIVnoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*4/6 }\",\"bassV\":\"basetone => { return basetone*3/2 }\",\"bassVnoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*3/2 }\",\"I\":\"basetone => { return basetone/1 }\",\"Inoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone/1 }\",\"II\":\"basetone => { return basetone*9/8 }\",\"IInoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*9/8 }\",\"majIII\":\"basetone => { return basetone*5/4 }\",\"majIIInoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*5/4 }\",\"miniii\":\"basetone => { return basetone*6/5 }\",\"miniiinoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*6/5 }\",\"IV\":\"basetone => { return basetone*4/3 }\",\"IVnoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*4/3 }\",\"V\":\"basetone => { return basetone*3/2 }\",\"Vnoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*3/2 }\",\"VI\":\"basetone => { return basetone*5/3 }\",\"VInoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*5/3 }\",\"majVII\":\"basetone => { return basetone*15/8 }\",\"majVIInoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*15/8 }\",\"minvii\":\"basetone => { return basetone*9/5 }\",\"minviinoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*9/5 }\",\"VIII\":\"basetone => { return basetone*2 }\",\"VIIInoise\":\"basetone => { return tools.randominteger(9,11)/10*basetone*2 }\",\"lownoise\":\"basetone => { return basetone*tools.randominteger(5,9)/10 }\",\"midnoise\":\"basetone => { return basetone*tools.randominteger(9,11)/10 }\",\"highnoise\":\"basetone => { return basetone*tools.randominteger(12,18)/10 }\",\"noise\":\"basetone => { return basetone*tools.randominteger(4,16)/10 }\",\"buzz\":\"basetone => { return basetone*tools.randominteger(9,12)/10 }\"}",
	"chords": [
		{
			"I": 6,
			"II": 2,
			"IV": 2,
			"V": 3
		},
		{
			"Inoise": 6,
			"IInoise": 2,
			"IVnoise": 2,
			"Vnoise": 3
		}
	],
	"sounds": [
		{
			"id": "373243__samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1",
			"keywords": "orchinstsample|brass|horn|long",
			"file": "373243__samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1.mp3",
			"duration": 14.55,
			"nchannels": 2,
			"rate": 44100,
			"type": "mp3",
			"bitrate": 16
		}
	],
	"score": [
		{
			"gain": 0.5,
			"padmin": 0,
			"padmax": 100,
			"start": 0,
			"end": 1,
			"nthreads": 4,
			"list": [
				{
					"id": "373243__samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1",
					"weight": 1,
					"chord": 0
				}
			]
		},
		{
			"gain": 0.4,
			"padmin": 0,
			"padmax": 400,
			"start": 0.3,
			"end": 0.9,
			"nthreads": 3,
			"list": [
				{
					"id": "373243__samulis__f-horn-sustain-a3-mohorn_sus_a2_v1_1",
					"weight": 1,
					"chord": 1
				}
			]
		}
	],
	"nx": 3,
	"ny": 3,
	"nz": 2,
	"xgrid": [
		0,
		0.5,
		1
	],
	"ygrid": [
		0,
		0.5,
		1
	],
	"pigments": {
		"red": "#AA0000",
		"yellow": "#ffde00",
		"blue": "#006699",
		"bluegreen": "#006969",
		"darkbrown": "#332c21",
		"brown": "#4f4433",
		"black": "#000000",
		"warmblack": "#191918",
		"warmblack1": "#080807",
		"warmblack2": "#2E2E2C",
		"warmblack3": "#3B3B38",
		"warmblack4": "#4F4F4C",
		"warmblack5": "#545451",
		"warmblack6": "#61615D",
		"warmblack7": "#666662",
		"warmblack8": "#70706C",
		"warmblack9": "#7A7A76",
		"warmblack10": "#8C8C87",
		"warmblack11": "#999993",
		"warmblack12": "#ADADA6",
		"warmblack13": "#BDBDB5",
		"warmblack14": "#CCCCC4",
		"warmblack15": "#DBDBD3",
		"warmblack16": "#E6E6DC",
		"warmblack17": "#F0F0E6",
		"warmblack18": "#FAFAF0",
		"warmblack19": "#FCFCF2",
		"warmblack20": "#FFFFF5",
		"gray": "#484848",
		"lightgray": "#888888",
		"warmgray": "#4b4b44",
		"warmlightgray": "#656560",
		"white": "#ffffff",
		"warmwhite": "#fcfbe3",
		"warmlightwhite": "#fdfdf3",
		"warmlightwhite1": "#FFFFF5",
		"warmlightwhite2": "#FAFAF0",
		"warmlightwhite3": "#F5F5EB",
		"warmlightwhite4": "#F0F0E6",
		"warmlightwhite5": "#EBEBE1",
		"warmlightwhite6": "#E6E6DC",
		"warmlightwhite7": "#E0E0D7",
		"warmlightwhite8": "#D6D6CE",
		"warmlightwhite9": "#D1D1C9",
		"warmlightwhite10": "#CCCCC4",
		"warmlightwhite11": "#C7C7BF",
		"warmlightwhite12": "#C2C2BA",
		"warmlightwhite13": "#BDBDB5",
		"warmlightwhite14": "#B8B8B0",
		"warmlightwhite15": "#B3B3AB",
		"warmlightwhite16": "#ADADA6",
		"warmlightwhite17": "#A8A8A2",
		"warmlightwhite18": "#A3A39D",
		"warmlightwhite19": "#999993",
		"warmlightwhite20": "#8F8F89",
		"warmlightwhiteveil": "rgba(253,253,243,0.8)",
		"richblack": "#010203",
		"richgray1": "#2a2a2b",
		"richgray2": "#4f4f50",
		"richgray3": "#777878",
		"richgray4": "#a2a3a3",
		"richgray5": "#d0d0d0",
		"richgray6": "#ffffff",
		"philippurple1": "#1A0D73",
		"philippurple2": "#59518C",
		"philippurple3": "#131159",
		"philipgreen1": "#3E5915",
		"philipgreen2": "#708C32"
	},
	"colors": [
		"#fdfdf3",
		"#191918"
	],
	"spicecolors": [
		"#fdfdf3",
		"#fdfdf3",
		"#191918",
		"#4b4b44",
		"#ffde00"
	],
	"allcolors": [
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#fdfdf3",
		"#191918",
		"#191918",
		"#191918",
		"#191918",
		"#191918",
		"#191918",
		"#191918",
		"#191918",
		"#191918",
		"#484848",
		"#484848",
		"#AA0000",
		"#ffde00",
		"#ffde00"
	],
	"bookunits": "in",
	"bookwidth": 8,
	"bookheight": 8,
	"bookmargin": 1,
	"bookguttermargin": 1.2,
	"bleed": 0.125,
	"pixelsperunit": 72,
	"captionheight": 1,
	"cssstyles": "",
	"npoems": 80,
	"nstanzas": 3,
	"nlines": 4,
	"nchars": 48,
	"weights": [
		0,
		18,
		22,
		22,
		30,
		24,
		18,
		16,
		14,
		12,
		6,
		4,
		3,
		2,
		2,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1
	],
	"bookobj": {
		"title": "turbulence",
		"subtitle": "Sun Mar 03 2024",
		"description": "algorithmic sound & drawings",
		"rooturl": "https://turbulence.work",
		"authorurl": "https://mctavish.work/",
		"author": "mctavish",
		"copyright": "Copyright ©2024 mctavish<br/>",
		"isbn": "ISBN: 00000<br/>",
		"publisher": ". . .",
		"sections": [],
		"poemids": [],
		"bookunits": "in",
		"bookwidth": 8,
		"bookheight": 8,
		"bookmargin": 1,
		"bookguttermargin": 1.2,
		"bleed": 0.125,
		"pixelsperunit": 72,
		"captionheight": 1,
		"cssstyles": ""
	},
	"filmobj": {
		"title": "turbulence",
		"subtitle": "Sun Mar 03 2024",
		"description": "algorithmic sound & drawings",
		"rooturl": "https://turbulence.work",
		"authorurl": "https://mctavish.work/",
		"author": "mctavish",
		"copyright": "Copyright ©2024 mctavish<br/>",
		"isbn": "ISBN: 00000<br/>",
		"publisher": ". . .",
		"sections": [],
		"poemids": [],
		"bookmargin": 1,
		"bookguttermargin": 1.2,
		"bleed": 0.125,
		"bookunits": "in",
		"filmwidth": 16,
		"filmheight": 9,
		"bookwidth": 8,
		"bookheight": 8,
		"postcardwidth": 7,
		"postcardheight": 5,
		"pixelsperunit": 72,
		"captionheight": 1,
		"cssstyles": ""
	}
};
module.exports = input;