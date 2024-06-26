const rawcolorsets = [
	{ title: "core colors", lists: [
		["#fcfbe3", "#191918"], //"warmbw",
		["#9a0000", "#fcfbe3", "#191918"], //"warmbwred",
		["#ffcc00", "#fcfbe3", "#191918"], //"warmbwyellow",
		["#006699", "#fcfbe3", "#191918", "#4b4b44"], //"warmbwgray",
		["#006699", "#fcfbe3", "#191918", "#004488"], //"warmbwbluegray",
		["#006699", "#fcfbe3", "#191918"], //"warmbwblue",
		["#006699", "#006666", "#fcfbe3", "#191918"], //"warmbwbluegreen",
		["#191918", "#2f2f2f", "#464646", "#5e5e5d", "#757574", "#8c8c8b", "#a3a3a2", "#babab9", "#b0af9e", "#979688", "#7e7d71", "#64645a", "#4b4b44", "#32322d", "#191916", "#191916", "#000000"], //warmgrayscale dark
		["#191918", "#2f2f2f", "#464646", "#5e5e5d", "#757574", "#8c8c8b", "#a3a3a2", "#babab9", "#d1d1d0", "#e8e8e7", "#ffffff", "#fcfbe3", "#e2e1cc", "#c9c8b5", "#b0af9e", "#979688", "#7e7d71", "#64645a", "#4b4b44", "#32322d", "#191916", "#000000"], //warmgrayscale
	] },
	{ title: "lake superior", lists: [
		["#CCD8EA", "#CBD3DA", "#818794", "#5B5756", "#413A36", "#413B30"], //lake superior
		["#BEC4D0", "#C9CDD8", "#7E808C", "#282730", "#54545F", "#A5ACBF", "#AAA9A5", "#FBFBFF", "#535763", "#211F2B"], //canada snow
		["#C7CED8", "#C2C5CC", "#9C9A9D", "#454140", "#454140", "#383330", "#473D3B", "#767B7F"], //lake superior
		["#4E505D", "#4F525A", "#808394", "#A4AAB8", "#DEE5F7", "#E6EFFD"], //ice snow river
		["#8F97A2", "#5A575E", "#666A79", "#474C58", "#8790A0", "#B5C2D2", "#4E5043", "#181919"], //winter blue green tree
		["#BCBFC4", "#B9BABE", "#9FA0A5", "#98999E", "#72757A", "#63686E", "#555F64", "#505C60"], //subtle lake surface grays
		["#093F68", "#005A98", "#000112", "#E8ECF5", "#A8B5C8", "#538096", "#45758A", "#234E64", "#001929", "#0A4761", "#00132A", "#095A74", "#033A56", "#0C6180"], //lake superior (very blue)
		["#F2F4F8", "#90A2B1", "#475360", "#4E3728", "#B95F2E", "#4C5B70", "#678296", "#293E45"], //lake superior
		["#F6E8DD", "#BC8860", "#3B3735", "#405D68", "#041D24", "#606F6D", "#26383F", "#2F4D58", "#2F4652", "#657678", "#5A5858", "#19323D", "#837C75", "#854529"], //lake superior (blue with orange)
		["#839FB6", "#AEB7BF", "#A3A6A9", "#797B7B", "#3D4048", "#393A3B", "#688896", "#7C8FAA", "#3F5468"], //lake superior
		["#F8FCFD", "#A2B2CC", "#7A8193", "#6D6B51", "#5A583A", "#2C2D24", "#7D92AE", "#615F62", "#5C6C6C"], //lake superior
		["#485654", "#3D4949", "#7B8F9D", "#8695A3", "#8C99A1", "#82959C", "#839298", "#768387", "#738187", "#637074", "#738891", "#566871", "#BCCCD0", "#8698AA", "#515E65", "#35404E", "#566367"], //lake superior
	]},
	{ title: "water", lists: [
		["#C5E0FB", "#F3FBFD", "#52615E", "#18191B", "#90969A", "#27292E", "#A7C2E0", "#6B838D", "#7E9889", "#1B1E3E", "#110F24"], //waterfall
		["#7086A6", "#6E7C78", "#7895BF", "#424639", "#4A6B99", "#7389A3", "#4B607F", "#4F688A", "#263040", "#283247", "#3D536F", "#222126", "#948F84"], //lake (blue)
		["#969599", "#796C6C", "#675855", "#635049", "#79685C", "#6E5340", "#515054", "#6A5848", "#968F8A", "#4B4A4F", "#595453"], //lake bottom browns
		["#757260", "#616664", "#626562", "#E0E9F5", "#BFCEDF", "#A7ADB6", "#636A6C", "#5D5543", "#49402C", "#849BB4", "#5B422D", "#393E41", "#424544"], //pond
		["#BFB9A8", "#C3B481", "#6D604B", "#8E7A6E", "#8097AE", "#3B2F30", "#7F97AE"], //lake sand
		["#C3D3E1", "#A5B3BF", "#E5D1B7", "#E7D093", "#8C6F54", "#8CA0B1"], //lake sand
		["#696566", "#706E6F", "#79796E", "#AFB199", "#898A7C", "#676357", "#C8CAC9", "#41382C"], //moss
		["#E8DFD7", "#DDD6D0", "#8C8780", "#51504A", "#A9A69F", "#D2CCC4", "#444440", "#66685F", "#393B34", "#20211A", "#67665F"], //woods winter snow

		["#AAAAAC", "#7C7C7C", "#747371", "#525251", "#797372", "#343632", "#0C0E0B", "#42433E", "#434544", "#6C6D68"], //winter
		["#494B4A", "#494B4A", "#534B41", "#373934", "#8C887F", "#504531", "#201F19", "#5F5E5D", "#604F3D", "#5A5A57", "#30322C", "#211D15", "#696964", "#1F231B", "#393B36", "#554A47"], //winter
		["#525762", "#4A525F", "#5D6471", "#929DAE", "#AAB5CC", "#A5B0C3", "#353943", "#545F72"], //slate winter sky
		["#A8B0C3", "#9599A7", "#242222", "#292724", "#49484B", "#ADAEB3", "#2B2328", "#3F3F4F"], //canada winter
		["#414141", "#2B2B2A", "#615146", "#634D3B", "#947049", "#525B68", "#EDE8DB", "#2B261B", "#515262"], //outdoors fall
		["#C3C6CF", "#5775B0", "#837C7D", "#7A535B", "#593B3B", "#413B3F"], //boots jeans rock (nice blues browns)
		["#0D0F0E", "#767577", "#9AA6B4", "#A2AFB6", "#656863", "#3C3E3C", "#5F5B50", "#38301B", "#636E76", "#82949F", "#4C5A5C", "#302D26", "#A39E8E"], //outdoors fall (nice blues browns)
	]},
	{ title: "greens", lists: [
		["#183C76", "#64665C", "#967B21", "#5084CB", "#34361D", "#503E2B", "#38370E"], //bright day blue sky yellow leaves
		["#556D7F", "#444E33", "#4B5A37", "#50663E", "#6C7937", "#59613E", "#2A2D1E", "#545B38", "#788049", "#998800", "#324528", "#161B13", "#1B2519", "#343222"], //orchard
		["#7F7655", "#7C7C58", "#4C4F3A", "#ADA590", "#969374", "#7B7458", "#7D815D", "#454425", "#948C7F", "#5F6E4C", "#474633", "#BEB7A5"], //grasses (green yellow)
		["#6C6B6D", "#4B4B4D", "#373435", "#494C57", "#2E2B2E", "#242225", "#5F6264"], //rocks
		["#D1E3EF", "#9DAB92", "#8F9675", "#7A7E64", "#727A53", "#535E39", "#576245", "#566163", "#686E60"], //tree
		["#D7D6D8", "#8A8B84", "#5C6161", "#6B563F", "#272413", "#423930", "#1E260D", "#3D3A30", "#6D2E29", "#18190C", "#928C87"], //finland arteles
		["#778BA8", "#5E6D86", "#686C76", "#4F463D", "#5A432F", "#44301D", "#37261A", "#3F231C", "#4D739F", "#5D1215", "#352B28", "#4A2A28"], //outdoors sumac
		["#675944", "#2E2E27", "#927F56", "#A18462", "#4B4437", "#544A39", "#2C352D", "#BEA886"], //grass shadow
		["#7A6C57", "#46382F", "#745F4F", "#928B88", "#977E6C", "#E2E3E7", "#3C3023", "#41491D", "#2C2521"], //muddy creek (greens browns)
		["#A3958A", "#A49389", "#82706C", "#7C6D66", "#786662", "#746663"], //gravelroadcanada (all beige)
		["#17180E", "#585743", "#A9A497", "#938A5E", "#676320", "#463922", "#A76F09", "#A76406", "#3E441F", "#47502D", "#6F7948", "#A1A294", "#272C12"], //lake summer woods (green orange)
		["#45424A", "#393536", "#726558", "#B3A6A0", "#6C6060", "#818175", "#8C8E76", "#565C57"], //river rock (greens)
		["#B5C1CF", "#79838F", "#988D82", "#5B5351", "#665B49", "#5A5A4C", "#575D4E", "#4B594A", "#8291A4"], //finland fields () 
		["#484A2B", "#423F33", "#594E43", "#91827C", "#C9C7C6", "#44502A", "#5D6445"], //finnish forest (green brown)
		["#45403C", "#4A3325", "#463A32", "#A99374", "#A4845C", "#BBA156", "#4F4026", "#3F3B21"], //finland fields (green brown yellow)
	]},
	{ title: "loom", lists: [
		["#EAF1F2", "#AFB4BB", "#A3998A", "#735F48", "#5B4F45", "#66513A", "#3D2A1D", "#050A0D", "#53463A"], //looom
		["#181410", "#3B302E", "#63544B", "#80756C", "#BFB3A5", "#978777", "#28221D", "#131111", "#E7D7BB", "#3D3730", "#F7EBD5"], //weaving
		["#C4BBAC", "#492E21", "#514A47", "#3C3833", "#46443E", "#73695E", "#897768", "#8A7766", "#0F0F0F", "#F5E7CD", "#393633", "#2F2F2C"], //weaving
	]},
	{ title: "new york city", lists: [
		["#FFFFFF", "##313331", "#524E4A", "#391F18", "#813B2B", "#A15444", "#354141", "#222222"], //nystairs
		["#332725", "#535051", "#705E5A", "#80807F", "#7A756B", "#80807F", "#E8EDF2", "#785E56", "#47484A"], //nystairs
		["#42433E", "#5C5C58", "#81796C", "#484238", "#5C5042", "#000000", "#1F2C40", "#2B3E57", "#2A3540", "#78766D"], //nystairs
		["#5E646F", "#9BB4C6", "#7F7976", "#4E596E", "#3E3839", "#70625A"], //nystairs (some blue)
		["#786652", "#5B4031", "#1A1E1C", "#B6B7B5", "#9B999C", "#16190D", "#5F3D35", "#71391E"], //nystairs
		["#FBFBFD", "#7B7879", "#575758", "#5D5048", "#7F7066", "#3C3C3C"], //nystairs
		["#977A6D", "#5B5350", "#87847D", "#57646F", "#AFBBC2", "#B6ADA8", "#1B3B51", "#2D2E31", "#546877"], //nystairs (blues)
		["#873E04", "#463730", "#7D838A", "#CE8430", "#732F02", "#4E4340", "#453732", "#A19F9B", "#5B4F44"], //nylibrary browns grays
		["#403B37", "#444242", "#444242", "#2F2824", "#423D3B", "#423D3B", "#8B5D3E", "#3F3E3F", "#2A211A", "#D8D8D8", "#6C727D"], //nylibrary browns grays blues
		["#644C39", "#5B4536", "#B69D88", "#614C3E", "#16100C", "#150F0B", "#120D07"], //ny art haring? all browns dark
		["#662512", "#865E40", "#B9916F", "#B58562", "#965C3D", "#662512", "#53200A", "#432916", "#955C3D", "#4A3321"], //ny art reds browns clay
		["#040302", "#75604F", "#CDBBAB", "#77614A", "#0E0A06", "#BEA794", "#603102", "#93520D", "#A99588", "#A97D51"], //ny art reds browns clay
		["#C09A7A", "#C68425", "#9C1704", "#B38968", "#0D0604", "#967051", "#941102", "#A64A25"], //nyart yellow orange red (vivid color)
		["#A4886E", "#866648", "#5F3B1A", "#452B14", "#79552C", "#896338", "#0D0903", "#AA9179", "#4F3015"], //nyart browns
		["#AE7C41", "#A54B18", "#AC6C35", "#90350F", "#75270D", "#633E1A", "#0A0502", "#A3270C"], //nyart browns red harring
		["#C39B72", "#C29464", "#9A622C", "#864B12", "#823607", "#69350D", "#86480F", "#583D26", "#51270E"], //nyart browns  hesse
		["#676863", "#3E3E3C", "#82796D", "#444037", "#5F5343", "#000000", "#3B5478", "#233047", "#333630", "#413A33", "#343C35", "#20293C", "#4E483E"], //ny street sky blue gray brown
		["#B1B4B0", "#7D7672", "#604A49", "#504343", "#583E3F", "#828F87", "#61605B"], //nystreet (bg brown)
		["#392F28", "#34342E", "#696966", "#5F5B56", "#CDCDCD", "#FFFFFF", "#503D34", "#262420"], //nystreet grays bg brown
		["#2C2F2E", "#505351", "#271814", "#823A2B", "#A15444", "#777673", "#453D34"], //ny stairs grays reds bg orange
	]},
	{ title: "city", lists: [
		["#46474A", "#6C665F", "#6C6C6C", "#2C2D25", "#8D9194", "#2C2920", "#57524E", "#5C5D58"], //window mpls warehouse (green gray brown beige)
		["#848482", "#BEAA81", "#88816F", "#9D9892", "#463D2C", "#7F745E", "#30251A", "#3F3626", "#A09C93"], //mpls warehouse window (some yellow)
		["#AFBDD0", "#D7DCE1", "#93A7B8", "#4D585B", "#585151", "#908985", "#848181", "#4D585"], //tiger dancing (blues gray)
		["#D0D0D0", "#FBFBFB", "#999B99", "#91867F", "#5B4939", "#47392B", "#3C5D5C", "#535351", "#586463", "#304142", "#33261D", "#745C4B"], //bridge bgs (bg brown white0)
		["#4B2D13", "#081B30", "#194874", "#0B1C2C", "#0B1C2C", "#101721", "#305F83"], //canada night image w/brown blue dark too vivid?
		["#172F4F", "#2A68A1", "#2B4E6B", "#103354", "#3C6FA4"], //canada night image ll blue dark combine with above?
		["#EFF0F2", "#DAD1C5", "#828075", "#353934", "#0F1214", "#091007", "#47493D", "#393E2F", "#484E42", "#2D372E"], //greens mist railway duluth with white
	]},
	{ title: "josef albers", lists: [
		["#8C2E32","#8C0D23","#993A45","#AC9283","#D5BAA4","#978579","#B7A295","#867569","#8B4646","#9D2E2E","#B7151A","#B73D3C"],
		["#79695C","#8C0D23","#80091C","#AC9283","#D5BAA4","#978579","#B7A295","#867569","#605349","#9D2E2E","#B51615","#E9CEB6"],
		["#ECCEB6","#8E0D28","#B29985","#D9BDA6","#978579","#B6A196","#837064","#B71818","#61534A","#645C53"]
	]},
	{ title: "russian constructivism & bauhaus", lists: [
		["#7E7D58", "#4E4C30", "#CA5032", "#130F06", "#CEB492", "#C3C2A4", "#B3A183", "#C21806", "#B43F23", "#65653D"],
		["#716F49", "#4B4B28", "#B73320", "#C54F36", "#D5402B", "#CDB18E", "#C3BDA6", "#AE9D81", "#131305", "#CD432A","#514D35", "#60603B"],
		["#D0C7BF", "#2A2C38", "#51433B", "#4D423E", "#76655C", "#79726F", "#968476", "#B6A694", "#C8BBA8", "#CAC1B6", "#ACA39A", "#A89B8E", "#A5927E", "#AF977D"],
		["#C8C7C2", "#000000", "#DC9A4B", "#E3A55B", "#DD9527", "#BC2825", "#81807C", "#575653", "#696867"],
		["#D6CDB9", "#C4B4A7", "#9F1D11", "#9E2112", "#B7AEA2", "#A2998C", "#171011", "#070704", "#696454"],
		["#D3C9B7", "#E3D9C2", "#B8A79E", "#9D1F11", "#9D1B0B", "#E6D7C2", "#AEA796", "#948F81", "#14110B", "#E6DBC5", "#645E5B"],
		["#A4A27F", "#ABA279", "#A18861", "#8C362D", "#8E8969", "#7C7355", "#484539", "#555B4D", "#9D8F4D", "#373F5A", "#395635", "#636F77", "#30302C"],
		["#E7CAA6", "#D0B796", "#A18D77", "#836A5E", "#5A4A42", "#887365", "#CBB491", "#E7CAA6", "#060208", "#D32435", "#5A4A42"],
		["#AAAAAB", "#D2D2D4", "#B9C9D4", "#BFC1C5", "#BCBFC4", "#BBC2C7", "#B4B9C2", "#AEBBC4", "#A5B0B6", "#A8AEAF", "#AEB0B0", "#B8B9B7", "#969596", "#A6B4BF", "#B1C0CC", "#94A5B2"],//hesse
		// ["#CBB269", "#D0B76B", "#D1B769", "#D5BB6D", "#DAC06F", "#DDC577", "#DCC47D", "#DCC37C", "#D8C078", "#D6BE78", "#D1BA73", "#CDB56D", "#BAA352", "#BBA95C", "#E3CB81"],//martin
		["#547A9B", "#55779F", "#4C6F96", "#4A6D96", "#456B94", "#37608F", "#305888", "#305783", "#2D5380", "#365C86", "#47678D", "#567494", "#314E78", "#1E4676", "#5884B1"]//martin
	]},
	{ title: "february 2021", lists: [
		["#302D29", "#393530", "#53524B", "#59564E", "#5A5850", "#6A665D", "#7A756C", "#898277", "#898276", "#697FA0", "#766D63", "#615B53"],
		["#384F5E", "#171C25", "#636769", "#222F3A", "#FAF9F7", "#DBD8D4", "#A9A8A5", "#A6A5A0", "#77797C", "#5E6566", "#5B5C5D", "#4B4C4D", "#3D3B3F", "#323338", "#1E222A", "#373B43"],
		["#CECBC4", "#C4C2BD", "#C2C2C1", "#A2AAB4", "#7F8DA3", "#687B96", "#516581", "#3B475F", "#2B3445", "#616A77", "#A5A5A9", "#CDC9C3", "#11151B", "#323C40"],
		["#213B63", "#183868", "#163B70", "#1A427B", "#264E87", "#2B528B", "#385D92", "#395C92", "#3D6095", "#585F6E", "#9F9B9D", "#D1C3AB", "#213B63", "#183868", "#163B70", "#1A427B", "#264E87", "#385D92", "#62779F"],
		["#383840", "#847F74", "#0E131D", "#929293", "#717374", "#6C6F70", "#666869", "#595C5D", "#60656A", "#8D8E91", "#A5A7AC", "#BFC2C9", "#D2D5DC", "#DBDFE8", "#CECED5"],
		["#4D77B4", "#B1BEDB", "#91A5C9", "#7089B2", "#6781AD", "#607DA9", "#436698", "#436597", "#5A77A0", "#687B98", "#6D7583", "#6C7078", "#63615F"],
		["#585C60", "#8A939D", "#3D3D3B", "#8C8D8D", "#68727C", "#5B5B59", "#828B96", "#41403B", "#3C3C3B", "#B6B8C0", "#E3E4E8", "#C7CBD4", "#A6ABB3", "#8C939E", "#898C97", "#696E75", "#676B6F", "#74777C", "#95969C", "#B9BCC4", "#BEC1C8", "#B8BAC2"],
		["#0F1015", "#5B351D", "#433023", "#393131", "#373941", "#514D50", "#776F68", "#82786E", "#A2988B", "#C1B7A8", "#CDC5B8", "#CAC3B2", "#864B1F", "#5E391E", "#462E27", "#3A3739", "#3B3B42", "#857A72", "#A5998D", "#CCC4B4"]
	]},
	{ title: "iowa", lists: [
		["#CAC4BE", "#A49C99", "#716863", "#675F5A", "#8C857F", "#6D6560", "#635A55", "#948D87", "#655D58", "#C7C1BA"], //iowa farm gradient (all beige)
		["#5B534E", "#685E59", "#9E948E", "#C3BBB5", "#999089", "#978D87"], //iowa farm gradient (all beige)
		["#2A3135", "#596D86", "#8598B1", "#B8BFD3", "#6C7C8C", "#566D8B"], //iowa farm gradient (all blues)
		["#893D22", "#A9400A", "#BBB594", "#732D14", "#ACB9A2", "#5A1B00", "#87886B"], //iowa brick bldg
		["#E5E2E6", "#CAC7C9", "#786458", "#5B4D41", "#644629", "#5F5E50", "#943800", "#2F1E0C", "#47453E", "#372A1E"], //iowa brick bldg
		["#9B3C16", "#922400", "#A07E66", "#BAB8B5", "#E5E6E1", "#A16F58", "#421A03", "#381A04", "#481D09", "#939284"], //iowa brick bldg
		["#D3D3D5", "#B2B3B6", "#1F1F20", "#444C35", "#6F6C5C", "#7F745C", "#3C3F31", "#726A52", "#817153"], //iowa stone bldg
		["#6A4E45", "#8F7257", "#836D60", "#979EA2", "#54615E", "#45493C"], //iowa stone bldg
		["#787574", "#C3C3C4", "#616263", "#595139", "#3A3E27", "#ABABA9", "#363D23", "#746E64"], //iowa stone bldg
		["#6B85B5", "#614E28", "#8B8A87", "#726853", "#FFFDFB", "#453925", "#483D22", "#36363E", "#A7A6A3", "#C2B5A3"], //iowa bldg
		["#FEFAF1", "#E7DBCE", "#BDB6B0", "#94897E", "#7A7E85", "#625D4C", "#5F3B2B", "#898785", "#220300", "#76766C"], //iowa silo
		["#FFF8EE", "#978A80", "#09090A", "#EFE8E0", "#888D8E", "#6F6F62", "#2E0200", "#7C746D", "#CABCA8"], //iowa silo
		["#5A513E", "#A09C93", "#AA5818", "#905C29", "#AD5E1D", "#6B4219", "#6B4219", "#C87A48", "#562400", "#886236", "#989167"], //iowa bldg
		["#7E878D", "#322923", "#748288", "#D8E0DE", "#7E3E36", "#623124", "#7F2E29", "#C3CECE", "#2E3B49", "#11141D"], //iowa bldg marion
		["#F6F8FD", "#C2CACF", "#8C8C8A", "#835D51", "#64473D", "#6C7069", "#5C5B55", "#939B99", "#908675", "#4C443E"], //iowa bldgs
		["#BFB7A5", "#A4988B", "#6A7A88", "#070000", "#2F241C", "#592916", "#77504D", "#52525D", "#8F5F59"], //iowa bldg
		["#78747E", "#B3A895", "#6D6D60", "#605038", "#D7D3CE", "#AAA8AF", "#4D4739", "#241809", "#442500", "#40392A", "#494234", "#69695D"], //iowa cedar rapids under bridge 1
		["#A3A8AC", "#FAF1E5", "#969494", "#706B62", "#69788A", "#3C587C", "#171717", "#273F5A", "#48413A"], //iowa cedar rapids under bridge
	]},
	{ title: "cello", lists: [
		["#1A0A03", "#2D0E08", "#6B2E12", "#613716", "#9E6528", "#5F370C", "#9A1905", "#FFF9C9"], //cello at sacred heart
		["#0E0600", "#2E0F04", "#0F0700", "#484E42", "#577871", "#010101", "#FFFFFF", "#406861", "#902200"], //cello at sacred heart
		["#78685B", "#B4A19A", "#877C6A", "#2F3C35", "#435046", "#242216", "#6B867D", "#993B21", "#000100", "#725128", "#15211D"], //cello at sacred heart
		["#6B6259", "#43403B", "#51524D", "#8A300F", "#743B1D", "#988071", "#2D2F2E", "#B9AA8D", "#64655E"], //cello stairwell*
		["#3D1C04", "#0D0604", "#411B0D", "#6D3F26", "#8E7061", "#8E9490"], //cellosacredheart
	]},
	{ title: "birdland", lists: [
		["#163341", "#172F47", "#4477A8", "#2A4A69", "#52779B", "#000000", "#384B60", "#1F3350", "#153A69", "#153559", "#9D9990", "#9D9990", "#181E21", "#0C1D32", "#706959", "#D6D3CE", "#534E48", "#3E5766", "#222E34", "#BBB4A4", "#7C7D7F"], //birdland
	]},
];
const pigments = {
	//red: "#8F0000", /*panatone:"7621 C" rgb(rgb(143,0,0)), cmyk(0,100,100,44), hsl(0,100%,28%)*/
	//red: "#AA0000", /*cmyk(0%, 100%, 100%, 33.3%)*/
	red: "#AE0501",
	yellow: "#ffcc00",/*rgb(255,204,0), hsl(48,100%,50%), cmyk(0,20,100,0) */
	//yellow: "#ffde00", //cmyk(0%, 13%, 100%, 0%)
	blue: "#006699", /*rgb(0,102,153), hsl(200,100%,30%), cmyk(100,33,0,40) */
	bluegreen: "#006969", /*rgb(0,105,105), hsl(180,100%,20.6%), cmyk(100,0,0,59) */
	darkbrown: "#332c21", /*cmyk(0%, 13%, 35%, 80%)*/
	brown: "#4f4433", /*cmyk(0%, 14%, 35%, 69%) */
	/*--darkbrown: #362C23;  cmyk(0%, 19%, 35%, 79%) */
	/*--brown: #4A3D30;  cmyk(0%, 17.6%, 35%, 71%) */
	black: "#000000",
	warmblack: "#191918",/*panatone "Black 6 C" rgb(25,25,24), hsl(60,2%,9.6%), cmyk(0,0,4,90)*/
	warmblack1: "#080807",
	warmblack2: "#2E2E2C",
	warmblack3: "#3B3B38",
	warmblack4: "#4F4F4C",
	warmblack5: "#545451",
	warmblack6: "#61615D",
	warmblack7: "#666662",
	warmblack8: "#70706C",
	warmblack9: "#7A7A76",
	warmblack10: "#8C8C87",
	warmblack11: "#999993",
	warmblack12: "#ADADA6",
	warmblack13: "#BDBDB5",
	warmblack14: "#CCCCC4",
	warmblack15: "#DBDBD3",
	warmblack16: "#E6E6DC",
	warmblack17: "#F0F0E6",
	warmblack18: "#FAFAF0",
	warmblack19: "#FCFCF2",
	warmblack20: "#FFFFF5",
	gray: "#484848",
	lightgray: "#888888",
	warmgray: "#4b4b44",
	warmlightgray: "#656560",
	white: "#ffffff",
	warmwhite: "#fcfbe3", /* rgb(252,251,227),hsl(57.6,80.6%,93.9%),cmyk(0,0,10,1)*/
	warmlightwhite: "#fdfdf3", /* panatone sort of "P 1-9 C"rgb(253,253,243),hsl(60,71.4%,97.3%),cmyk(0,0,4,1)*/
	warmlightwhite1: "#FFFFF5",
	warmlightwhite2: "#FAFAF0",
	warmlightwhite3: "#F5F5EB",
	warmlightwhite4: "#F0F0E6",
	warmlightwhite5: "#EBEBE1",
	warmlightwhite6: "#E6E6DC",
	warmlightwhite7: "#E0E0D7",
	warmlightwhite8: "#D6D6CE",
	warmlightwhite9: "#D1D1C9",
	warmlightwhite10: "#CCCCC4",
	warmlightwhite11: "#C7C7BF",
	warmlightwhite12: "#C2C2BA",
	warmlightwhite13: "#BDBDB5",
	warmlightwhite14: "#B8B8B0",
	warmlightwhite15: "#B3B3AB",
	warmlightwhite16: "#ADADA6",
	warmlightwhite17: "#A8A8A2",
	warmlightwhite18: "#A3A39D",
	warmlightwhite19: "#999993",
	warmlightwhite20: "#8F8F89",
	warmlightwhiteveil: "rgba(253,253,243,0.8)",
	richblack: "#010203",
	richgray1: "#2a2a2b",
	richgray2: "#4f4f50",
	richgray3: "#777878",
	richgray4: "#a2a3a3",
	richgray5: "#d0d0d0",
	richgray6: "#ffffff",
	philippurple1: "#1A0D73",
	philippurple2: "#59518C",
	philippurple3: "#131159",
	philipgreen1: "#3E5915",
	philipgreen2: "#708C32",
};
const blackcmykset = [
	"cmyk(0%, 0%, 4%, 90.2%)",
	"cmyk(0%, 0%, 6%, 94%)",
	"cmyk(0%, 0%, 4%, 92%)",
	"cmyk(0%, 0%, 4%, 91%)",
	"cmyk(0%, 0%, 5%, 91%)",
	"cmyk(0%, 0%, 5%, 88%)",
	"cmyk(0%, 0%, 5%, 89%)",
	"cmyk(0%, 0%, 4%, 84%)",
];


const colorsets = {
	warmbw: [pigments.warmlightwhite, pigments.warmblack],
	warmb2w: [pigments.warmlightwhite, pigments.warmlightwhite, pigments.warmblack],
	warmbwgred: [pigments.red, pigments.warmlightwhite, pigments.warmgray,pigments.warmblack],
	warmbwred: [pigments.red, pigments.warmlightwhite, pigments.warmblack],
	warmbwyellow: [pigments.yellow, pigments.warmlightwhite, pigments.warmblack],
	warmbwb: [pigments.blue, pigments.warmlightwhite, pigments.warmblack],
};

module.exports = {pigments,colorsets,rawcolorsets};
