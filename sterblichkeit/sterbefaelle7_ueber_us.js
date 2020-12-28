var ch_statsUS={
ecdc_date: '2020-12-21',
cdc_date: '2020-12-23',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 387005,
maxperc: 14.1947941,
lastperc: 14.0891090,
lastcw: '2020/50',
lastcw_covid: '2020/51',
covid_sum: '317670',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01"],
type: 'line',
_ecdc_data: [0,0,0,0,0,0,0,0,2,19,48,402,2038,7138,12461,18574,14194,12806,11846,10034,8158,6663,6131,5218,4243,5829,4143,5258,5329,6401,7925,8078,7114,6754,6263,5872,5138,5430,5247,5038,4977,4903,5556,5766,6576,8642,10568,10091,15437,16867,18493,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,506,2914,9072,14853,15157,14828,13308,12070,9839,8399,6703,5869,5075,4196,3954,3679,5404,5511,6493,7893,7382,7098,6697,6244,5895,5115,5440,5405,4980,5073,5040,5695,5766,7032,7766,10537,10054,15332,16949,18375,15450,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58176,58537,59175,58591,58385,57359,57608,56780,57161,55827,55267,54976,53168,53404,52754,52076,52575,51106,51369,51534,50933,51317,50742,51091,50122,50230,49504,50210,50371,50296,49659,50960,51111,51825,51353,51462,52235,51703,52357,52687,53822,53384,53919,54226,54903,55746,57550,59672,61251,,]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64820,62944,61124,61263,59931,57935,56829,57226,56480,55912,55045,55420,55359,54152,53849,53874,52215,50739,51066,51172,52123,51514,51221,50995,51812,51337,50730,50423,50809,51130,50435,50577,50745,50436,51215,51713,51098,52486,51972,53113,53881,53778,53692,54820,54998,55210,56095,56547,56671,56164,,66317]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58524,58354,58034,58287,58653,58121,58134,58075,58669,58022,57235,56776,56713,55651,54590,53770,54118,53613,53684,53828,52858,53303,52793,52424,52325,52504,52077,51796,51815,51549,51862,51130,51150,51296,51959,51748,51920,52875,52683,53220,54437,54159,54214,55803,56036,56332,55598,57417,57775,57580,58619,,58463]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59666,60037,60200,60203,59682,59491,59316,59040,58598,58384,58018,57633,57140,56548,55987,55405,54786,54179,53722,53362,53034,52823,52687,52505,52466,52315,52127,51979,51842,51697,51548,51514,51489,51562,51618,51838,52024,52317,52651,53027,53341,53737,54156,54594,54955,55298,55830,56291,56824,57352,,,,]},
{label: '2020',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60176,60718,59351,59146,58797,59369,58796,58871,59271,59631,58636,59164,62990,72270,79033,76737,73863,69262,66756,64417,61557,59621,58821,57960,57918,58421,60083,62172,63423,64496,64495,63924,63840,62690,61093,59918,58984,58946,59738,58615,60319,58829,60282,61361,64903,66103,68294,68490,68703,62590,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.854758154,0.994962532,0.190102444,-0.297785145,-0.533710489,-0.479293251,-0.535601237,-0.504778754,-0.324112839,-0.0825741612,0.0194595754,0.233433014,0.978358318,2.81932530,5.25897700,7.22811189,8.75487560,9.74497110,10.4552223,10.9308084,11.1571356,11.2290754,11.2456973,11.2127013,11.1822502,11.1996985,11.3390954,11.6126881,11.9552728,12.3504363,12.7316064,13.0607210,13.3682587,13.5934098,13.7206141,13.7693688,13.7593821,13.7321176,13.7254353,13.6484146,13.6349704,13.5378603,13.4866838,13.4619597,13.5653970,13.6964644,13.8834430,14.0499616,14.1947941,14.0891090,,,,]},
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
