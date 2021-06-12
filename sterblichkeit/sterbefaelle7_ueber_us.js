var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-06-09',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 654789,
maxperc: 19.2882458,
lastperc: 15.8156590,
lastcw: '2021/21',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '5',
jh_covid_sum: '599180',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12","2021/13","2021/14","2021/15","2021/16","2021/17","2021/18","2021/19","2021/20","2021/21","2021/22","2021/23","2021/24"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,529,2974,9208,14913,15283,14972,13184,12047,9841,8315,6527,5763,5037,4141,3880,3663,5397,5574,6509,7866,7383,7181,6704,6315,5865,5128,5339,5434,4941,5170,5223,5802,6027,7308,8164,11141,10832,16067,17917,19283,16420,18978,23137,23770,21954,22216,20920,17476,13315,13902,11875,8821,7152,6979,5733,6907,5074,4990,4786,4595,4034,3791,4380,3072,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58176,58547,59162,58591,58385,57382,57597,56779,57161,55829,55267,54969,53175,53404,52760,52076,52574,51101,51369,51525,50933,51326,50742,51091,50122,50229,49493,50229,50364,50296,49659,50960,51111,51820,51358,51462,52235,51703,52357,52672,53837,53394,53909,54226,54903,55746,57537,59672,61264,,,61114,59444,58176,58547,59162,58591,58385,57382,57597,56779,57161,55829,55267,54969,53175,53404,52760,52076,52574,51101,51369,51525,50933]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67686,64820,62922,61124,61243,59952,57934,56829,57226,56480,55912,55045,55420,55354,54153,53853,53875,52215,50750,51055,51162,52123,51523,51221,50995,51813,51337,50730,50432,50799,51142,50423,50577,50745,50436,51215,51713,51098,52497,51972,53113,53881,53767,53692,54820,54998,55210,56096,56530,56671,56163,,66317,67686,64820,62922,61124,61243,59952,57934,56829,57226,56480,55912,55045,55420,55354,54153,53853,53875,52215,50750,51055,51162,52123,51523]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58491,58514,58354,58045,58279,58655,58120,58143,58084,58683,58024,57221,56790,56729,55636,54590,53770,54145,53613,53685,53829,52858,53301,52797,52425,52329,52505,52090,51808,51803,51549,51858,51141,51149,51303,51959,51749,51931,52875,52683,53223,54442,54156,54215,55830,56036,56319,55601,57434,57776,57581,58638,,58491,58514,58354,58045,58279,58655,58120,58143,58084,58683,58024,57221,56790,56729,55636,54590,53770,54145,53613,53685,53829,52858,53301,52797]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [61656,62754,62732,61978,61512,60929,60537,60006,59409,59007,58689,58225,57767,57283,56675,56260,55550,54801,54242,53629,53343,53058,52842,52533,52364,52146,51831,51578,51332,51149,50971,50958,50920,51021,51131,51346,51463,51748,52052,52342,52555,52931,53259,53626,54086,54400,54899,55423,56039,56487,57454,58484,59272,59818,60428,60499,60523,60461,60075,59693,59294,58856,58453,58112,57645,57083,56575,56092,55750,55203,54790,54304,53984,53809,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60172,60746,59363,59160,58842,59487,58810,58909,59339,59694,58692,59219,63024,72298,79112,76807,73907,69318,66824,64490,61630,59678,58902,58039,57989,58506,59836,61932,63166,64260,64223,63714,63640,62579,61095,60243,59666,59744,60602,59807,61774,60631,62195,63418,67588,68803,71629,73276,77408,81993,83363,84765,87281,86973,87318,83577,79178,74869,69619,67803,65228,62140,60403,58971,59382,57335,59459,57776,58972,58036,56007,54435,52111,43740,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-2.40690282,-2.80684832,-3.666200,-3.88527617,-3.97544361,-3.71163820,-3.59131493,-3.37631883,-3.02531400,-2.62038918,-2.39013522,-2.06218021,-1.24095614,0.625649864,3.08154620,5.05066364,6.58892607,7.61224279,8.36696393,8.91005001,9.19808245,9.33399060,9.41859907,9.45888494,9.50562012,9.59979918,9.79628450,10.1289998,10.5323992,10.9878601,11.4258857,11.8115685,12.1742922,12.4557361,12.6400310,12.7602434,12.8399169,12.9041145,12.9890838,13.0192341,13.1242917,13.1568229,13.2382582,13.3494348,13.6031202,13.8798463,14.2321966,14.6095266,15.0982930,15.7148751,16.3153948,16.8987584,17.5131219,18.0712277,18.5950153,18.9754132,19.2016157,19.2882458,19.2261452,19.1256532,18.9670844,18.7399069,18.4846024,18.2089243,17.9684457,17.6980147,17.5082311,17.2947973,17.1288257,16.9600208,16.7570212,16.5346010,16.2703282,15.8156590,,,]},
{label: 'Covid-19',
_tag: 'covid',
borderColor: 'rgba(0,193,143,1)',
backgroundColor: 'rgba(0,193,143,0.25)',
pointRadius: 0,
borderWidth: 1,
order: 93,
lineTension: 0,
fill: true,
data: []},
]},
]
