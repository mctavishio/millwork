const chords = [
	{ 
		id: 0,
		name: "I_II_IV_V_nonoise",
		info: "no low no high no noise : minimalist with I II IV V",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 6, II: 2, majIII: 0, miniii: 0, IV: 2, V: 3, 
			VI: 0, majVII: 0, minvii: 0, VIII: 0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 0b,
		name: "I_II_IV_V_noise",
		info: "no low no high with noise : minimalist with I II IV V",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 6, IInoise: 2, majIII: 0, miniii: 0, IVnoise: 2, Vnoise: 3, 
			VI: 0, majVII: 0, minvii: 0, VIII: 0, 
			lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 1,
		name: "I_iii_IV_V_midnoise_nonoise",
		info: "no low no high no noise : minor chord with forth",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 6, II: 0, majIII: 0, miniii: 1, IV: 1, V: 1, 
			VI: 0, majVII: 0, minvii: 0, VIII: 0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 1b,
		name: "I_iii_IV_V_midnoise_noise",
		info: "no low no high with noise : minor chord with forth",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I:5, Inoise: 1, II: 0, majIII: 0, miniiinoise: 1, IVnoise: 1, V: 1, 
			VI: 0, majVII: 0, minvii: 0, VIII: 0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 2,
		name: "I_iii_V_nonoise",
		info: "no low no high no noise : tight minor chord",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 6, II: 0, majIII: 0, miniii: 1, IV: 0, V: 1, 
			VI: 0, majVII: 0, minvii: 0, VIII: 0, 
			lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 2b,
		name: "I_iii_V_noise",
		info: "no low no high with noise : tight minor chord",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 5, Inoise:1, II: 0, majIII: 0, miniiinoise: 1, IV: 0, Vnoise: 1, 
			VI: 0, majVII: 0, minvii: 0, VIII: 0, 
			lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 3,
		name: "I_iii_IV_V_vii_VIII_nonoise",
		info: "minor 7th no noise : full minor scale feel",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 3, II: 0, majIII: 0, miniii: 2, 
			IV: 1, V: 3,
			VI: 0, majVII: 0, minvii: 2, VIII: 1, 
			lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 3b,
		name: "I_iii_IV_V_vii_VIII_noise",
		info: "minor 7th with noise : full minor scale feel",
		toneweights: { 
			lowi: 0, bassi: 0, bassV: 0, bassIV: 0, 
			I: 3, Inoise: 3, II: 0, majIII: 0, 
			miniii: 2, miniiinoise:1,
			IV: 1, IVnoise: 1, V: 2, Vnoise:1,
			VI: 0, majVII: 0, minvii: 2, minviinoise:1, 
			VIII: 1, VIIInoise:1, 
			lownoise: 0, midnoise: 1, highnoise: 1, noise:0, buzz: 0 },
	},
	{ 
		id: 4,
		name: "I_iii_IV_V_vii_VIII_lownoise_midnoise_highnoise_nonoise",
		info: "minor 7th full noise : full minor scale feel",
		toneweights: { 
			lowi: 0, bassi: 1, bassV: 1, bassIV: 1, 
			I: 3, Inoise: 0, II: 0, majIII: 0, 
			miniii: 2, miniiinoise:0,
			IV: 1, IVnoise: 0, V: 2, Vnoise:0,
			VI: 0, majVII: 0, minvii: 2, minviinoise:0, 
			VIII: 1, VIIInoise:0, 
			lownoise: 1, midnoise: 1, highnoise: 1, noise:0, buzz: 0 },
	},
	{ 
		id: 4b,
		name: "I_iii_IV_V_vii_VIII_lownoise_midnoise_highnoise_noise",
		info: "minor 7th full noise : full minor scale feel",
		toneweights: { 
			lowi: 0, bassi: 1, bassV: 1, bassIV: 1, 
			I: 2, Inoise: 1, II: 0, majIII: 0, 
			miniii: 1, miniiinoise:1,
			IV: 1, IVnoise: 1, V: 1, Vnoise:1,
			VI: 0, majVII: 0, minvii: 1, minviinoise:1, 
			VIII: 1, VIIInoise:1, 
			lownoise: 1, midnoise: 1, highnoise: 1, noise:0, buzz: 0 },
	},
	{ 
		id: 5,
		name: "bassi_bassV_bassIV_I_vii_midnoise_nonoise",
		info: "low midnoise I and below",
		toneweights: { 
			lowi: 0, bassi: 1, bassV: 1, bassIV: 1, 
			I: 6, Inoise: 0, II: 0, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 0, IVnoise: 0, V: 0, Vnoise:0,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 0, VIIInoise:0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 5b,
		name: "bassi_bassV_bassIV_I_vii_midnoise_noise",
		info: "low midnoise I and below",
		toneweights: { 
			lowi: 0, bassi: 1, bassV: 1, bassIV: 1, 
			I: 6, Inoise: 0, II: 0, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 0, IVnoise: 0, V: 0, Vnoise:0,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 0, VIIInoise:0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 6,
		name: "bassi_bassV_bassIV_I_IV_V_midnoise_nonoise",
		info: "fuller low simple I IV V",
		toneweights: { 
			lowi: 0, bassi: 1, bassV: 3, bassIV: 3, 
			I: 6, Inoise: 0, II: 0, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 2, IVnoise: 0, V: 2, Vnoise:0,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 0, VIIInoise:0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 6b,
		name: "bassi_bassV_bassIV_I_IV_V_midnoise_noise",
		info: "fuller low simple I IV V",
		toneweights: { 
			lowi: 0, bassi: 1, bassinoise: 1, bassV: 2, bassVnoise: 1,
			bassIV: 2, bassIVnoise: 1, 
			I: 5, Inoise: 1, II: 0, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 1, IVnoise: 1, V: 1, Vnoise:1,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 0, VIIInoise:0, 
			lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	//harmonics
	{ 
		id: 7,
		name: "lowi_bassi_bassV_bassIV_I_IV_V_VIII_nonoise",
		info: "simple full range",
		toneweights: { 
			lowi: 1, bassi: 1, bassinoise: 0, bassV: 3, bassVnoise: 0,
			bassIV: 2, bassIVnoise: 0, 
			I: 6, Inoise: 0, II: 0, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 6, IVnoise: 0, V: 6, Vnoise:0,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 2, VIIInoise:0, 
			lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 7b,
		name: "lowi_bassi_bassV_bassIV_I_IV_V_VIII_noise",
		info: "simple full range",
		toneweights: { 
			lowi: 1, bassi: 0, bassinoise: 1, bassV: 2, bassVnoise: 1,
			bassIV: 1, bassIVnoise: 1, 
			I: 5, Inoise: 1, II: 0, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 5, IVnoise: 1, V: 5, Vnoise:1,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 2, VIIInoise:0, 
			lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 8,
		name: "lowi_bassi_bassV_bassIV_I_II_IV_V_VIII_lownoise_midnoise_nonoise",
		info: "pentatonic2",
		toneweights: { 
			lowi: 1, bassi: 1, bassinoise: 0, bassV: 3, bassVnoise: 0,
			bassIV: 3, bassIVnoise: 0, 
			I: 6, Inoise: 0, II: 3, IInoise:0, majIII: 0, majIIInoise:0, 
			miniii: 0, miniiinoise:0,
			IV: 6, IVnoise: 0, V: 6, Vnoise:0,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 2, VIIInoise:0, 
			lownoise: 1, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 8b,
		name: "lowi_bassi_bassV_bassIV_I_II_IV_V_VIII_lownoise_midnoise_noise",
		info: "pentatonic2",
		toneweights: { 
			lowi: 1, bassi: 0, bassinoise: 1, bassV: 2, bassVnoise: 1,
			bassIV: 2, bassIVnoise: 1, 
			I: 6, Inoise: 0, II: 2, IInoise:1, majIII: 0, 
			miniii: 0, miniiinoise:0,
			IV: 5, IVnoise: 1, V: 5, Vnoise:1,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 1, VIIInoise:1, 
			lownoise: 1, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 9,
		name: "lowi_bassi_bassV_bassIV_I_IV_V_VIII_lownoise_midnoise_nonoise",
		info: "pentatonic1",
		toneweights: { 
			lowi: 1, bassi: 1, bassinoise: 0, bassV: 3, bassVnoise: 0,
			bassIV: 3, bassIVnoise: 0, 
			I: 6, Inoise: 0, II: 0, IInoise:0, majIII: 0, majIIInoise:0, 
			miniii: 0, miniiinoise:0,
			IV: 6, IVnoise: 0, V: 6, Vnoise:0,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 2, VIIInoise:0, 
			lownoise: 1, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	},
	{ 
		id: 9b,
		name: "lowi_bassi_bassV_bassIV_I_IV_V_VIII_lownoise_midnoise_noise",
		info: "pentatonic1",
		toneweights: { 
			lowi: 1, bassi: 0, bassinoise: 1, bassV: 2, bassVnoise: 1,
			bassIV: 2, bassIVnoise: 1, 
			I: 5, Inoise: 1, II: 0, IInoise:0, majIII: 0, majIIInoise:0, 
			miniii: 0, miniiinoise:0,
			IV: 5, IVnoise: 1, V: 5, Vnoise:1,
			VI: 0, majVII: 0, minvii: 0, minviinoise:0, 
			VIII: 1, VIIInoise:1, 
			lownoise: 1, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	}
	/*
	//harmonic 10 
	{ lowi: 1, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 5, majIII: 1, miniii: 5, IV: 9, V: 9, VI: 4, majVII: 1, minvii: 4, VIII: 2, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	//levels of noise
	// noise 11
	{ lowi: 0, bassi: 1, bassV: 0, bassIV: 0, I: 2, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 2, VIII: 0, lownoise: 2, midnoise: 2, highnoise: 2, noise: 4, buzz: 2 },
	//simplebuzz 12
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 0, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 1, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 1, noise: 0, buzz: 8 },
	// buzz 13
	{ lowi: 0, bassi: 1, bassV: 0, bassIV: 0, I: 2, II: 0, majIII: 0, miniii: 0, IV: 1, V: 1, VI: 0, majVII: 0, minvii: 1, VIII: 2, lownoise: 1, midnoise: 1, highnoise: 0, noise: 1, buzz: 8 },
	// the identity (I only) 14
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 2, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	*/
];
const toneweights = [
	//no low no high no noise : minimalist with I II IV V 0
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 6, II: 2, majIII: 0, miniii: 0, IV: 2, V: 3, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	//no low no high no noise : minor chord with forth 1
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 6, II: 0, majIII: 0, miniii: 1, IV: 1, V: 1, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	//no low no high no noise : tight minor chord 2
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 6, II: 0, majIII: 0, miniii: 1, IV: 0, V: 1, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	//minor 7th no noise : full minor scale feel 3
	{ lowi: 0, bassi: 1, bassV: 1, bassIV: 1, I: 6, II: 1, majIII: 0, miniii: 2, IV: 2, V: 2, VI: 0, majVII: 0, minvii: 2, VIII: 1, lownoise: 0, midnoise: 1, highnoise: 1, noise:0, buzz: 0 },
	//minor 7th full noise : full minor scale feel 4
	{ lowi: 0, bassi: 1, bassV: 1, bassIV: 1, I: 6, II: 1, majIII: 0, miniii: 1, IV: 1, V: 1, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 1, midnoise: 1, highnoise: 1, noise:0, buzz: 0 },
	//low midnoise I  and below  5
	{ lowi: 0, bassi: 1, bassV: 1, bassIV: 1, I: 6, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	// no noise fuller low simple I IV V  6
	{ lowi: 0, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 0, majIII: 0, miniii: 0, IV: 2, V: 2, VI: 0, majVII: 0, minvii: 1, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 0, noise:0, buzz: 0 },
	//harmonics
	// simple 7
	{ lowi: 1, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 0, majIII: 0, miniii: 0, IV: 6, V: 6, VI: 0, majVII: 0, minvii: 0, VIII: 2, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	// pentatonic2 8
	{ lowi: 1, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 3, majIII: 0, miniii: 0, IV: 6, V: 6, VI: 6, majVII: 0, minvii: 0, VIII: 2, lownoise: 1, midnoise: 3, highnoise: 0, noise:0, buzz: 0 },
	// pentatonic 9
	{ lowi: 1, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 0, majIII: 0, miniii: 6, IV: 6, V: 6, VI: 0, majVII: 0, minvii: 4, VIII: 2, lownoise: 1, midnoise: 3, highnoise: 0, noise:0, buzz: 0 },
	//harmonic 10 
	{ lowi: 1, bassi: 1, bassV: 3, bassIV: 3, I: 6, II: 5, majIII: 1, miniii: 5, IV: 9, V: 9, VI: 4, majVII: 1, minvii: 4, VIII: 2, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
	//levels of noise
	// noise 11
	{ lowi: 0, bassi: 1, bassV: 0, bassIV: 0, I: 2, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 2, VIII: 0, lownoise: 2, midnoise: 2, highnoise: 2, noise: 4, buzz: 2 },
	//simplebuzz 12
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 0, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 1, VIII: 0, lownoise: 0, midnoise: 1, highnoise: 1, noise: 0, buzz: 8 },
	// buzz 13
	{ lowi: 0, bassi: 1, bassV: 0, bassIV: 0, I: 2, II: 0, majIII: 0, miniii: 0, IV: 1, V: 1, VI: 0, majVII: 0, minvii: 1, VIII: 2, lownoise: 1, midnoise: 1, highnoise: 0, noise: 1, buzz: 8 },
	// the identity (I only) 14
	{ lowi: 0, bassi: 0, bassV: 0, bassIV: 0, I: 2, II: 0, majIII: 0, miniii: 0, IV: 0, V: 0, VI: 0, majVII: 0, minvii: 0, VIII: 0, lownoise: 0, midnoise: 0, highnoise: 0, noise:0, buzz: 0 },
]
module.exports = chords;
