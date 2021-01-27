var ch_statsUS={
ecdc_date: '2021-01-18',
cdc_date: '2021-01-21',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 448316,
maxperc: 15.4185460,
lastperc: 15.0220967,
lastcw: '2021/01',
lastcw_covid: '2021/02',
covid_sum: '397611',
jh_last_covid_dayoffset: '2',
jh_covid_sum: '425119',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05"],
type: 'line',
_ecdc_data: [0,0,0,0,0,0,0,0,2,19,48,402,2038,7138,12461,18574,14194,12806,11846,10034,8158,6663,6131,5218,4243,5829,4143,5258,5329,6401,7925,8078,7114,6754,6263,5872,5138,5430,5247,5038,4977,4903,5556,5766,6576,8642,10568,10091,15437,16867,18493,15656,18264,22852,23169,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,506,2914,9080,14849,15165,14834,13321,12071,9846,8399,6700,5874,5079,4204,3958,3712,5414,5544,6536,7912,7393,7101,6682,6300,5839,5124,5428,5422,4983,5068,5049,5699,5786,7035,7762,10531,10080,15333,16933,18341,15412,18364,22684,23263,21614,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59454,58176,58537,59175,58591,58385,57360,57597,56789,57161,55828,55274,54969,53168,53404,52754,52082,52574,51100,51370,51525,50933,51317,50751,51091,50123,50229,49493,50221,50371,50296,49659,50960,51116,51820,51353,51462,52235,51718,52357,52672,53822,53394,53909,54225,54904,55757,57537,59671,61254,,,61114,59454,58176,58537]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66339,67664,64820,62922,61144,61243,59932,57934,56847,57226,56462,55912,55045,55425,55354,54153,53848,53874,52216,50750,51055,51162,52123,51523,51221,50995,51812,51347,50730,50423,50799,51130,50435,50577,50745,50436,51215,51713,51098,52486,51983,53113,53881,53767,53692,54820,54981,55227,56095,56547,56671,56164,,66339,67664,64820,62922,61144]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58474,58514,58354,58045,58278,58655,58129,58144,58075,58684,58037,57221,56776,56713,55652,54606,53770,54118,53602,53696,53829,52869,53304,52794,52428,52326,52505,52078,51808,51815,51549,51865,51139,51149,51298,51959,51749,51911,52895,52683,53224,54437,54157,54217,55802,56051,56332,55602,57417,57778,57582,58635,,58474,58514,58354,58045,58278]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59665,60034,60200,60202,59685,59493,59318,59042,58600,58386,58019,57634,57141,56550,55990,55407,54788,54182,53724,53364,53036,52826,52688,52507,52469,52318,52130,51983,51844,51700,51551,51516,51492,51566,51621,51840,52027,52320,52654,53030,53345,53739,54159,54597,54956,55301,55834,56296,56828,57359,58321,59163,59759,60178,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60180,60725,59356,59152,58816,59375,58800,58881,59275,59640,58642,59172,63003,72284,79069,76749,73861,69277,66768,64435,61571,59639,58832,57979,57939,58449,59757,61855,63069,64144,64443,63976,63886,62752,61251,60290,59654,59551,60129,58894,60414,58821,60256,61336,65085,66592,69354,70526,73680,76720,75081,72710,68806,57792,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.863152602,1.00752721,0.201224020,-0.286546079,-0.519370484,-0.466211496,-0.523892909,-0.492840827,-0.313106656,-0.0714736178,0.0303381323,0.244411343,0.990071916,2.83165993,5.27422300,7.24347475,8.76893897,9.75940693,10.4698286,10.9460980,11.1727247,11.2451741,11.2619029,11.2295144,11.1996890,11.2181960,11.3352788,11.5885326,11.9099324,12.2852665,12.6651630,12.9989899,13.3105837,13.5403631,13.6769786,13.7455020,13.7688568,13.7701558,13.7806372,13.7148435,13.7038472,13.6046864,13.5507273,13.5233751,13.6327757,13.7816244,14.0077152,14.2486865,14.5741909,14.9746847,15.2608103,15.4185460,15.4128361,15.0220967,,,,]},
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
