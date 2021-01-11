var ch_statsUS={
ecdc_date: '2021-01-04',
cdc_date: '2021-01-06',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 401521,
maxperc: 14.6213038,
lastperc: 14.0173464,
lastcw: '2020/52',
lastcw_covid: '2020/53',
covid_sum: '351590',
jh_last_covid_dayoffset: '0',
jh_covid_sum: '374322',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03"],
type: 'line',
_ecdc_data: [0,0,0,0,0,0,0,0,2,19,48,402,2038,7138,12461,18574,14194,12806,11846,10034,8158,6663,6131,5218,4243,5829,4143,5258,5329,6401,7925,8078,7114,6754,6263,5872,5138,5430,5247,5038,4977,4903,5556,5766,6576,8642,10568,10091,15437,16867,18493,15656,18264,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,506,2914,9080,14849,15165,14834,13321,12071,9846,8399,6700,5874,5079,4204,3958,3712,5414,5544,6536,7912,7393,7101,6682,6300,5839,5124,5428,5422,4983,5068,5049,5699,5785,7032,7763,10533,10080,15323,16938,18345,15407,18364,22676,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59454,58176,58550,59162,58591,58385,57359,57597,56789,57162,55828,55267,54976,53168,53404,52753,52082,52574,51101,51370,51525,50942,51317,50742,51101,50122,50231,49493,50210,50371,50296,49659,50960,51111,51820,51358,51462,52235,51703,52357,52672,53837,53394,53909,54225,54907,55756,57538,59671,61251,,,61114,59454]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64842,62922,61124,61243,59951,57935,56829,57226,56462,55912,55063,55420,55354,54152,53848,53881,52215,50739,51055,51173,52123,51514,51230,50995,51812,51337,50741,50422,50799,51142,50423,50577,50745,50436,51215,51713,51098,52497,51972,53113,53881,53767,53709,54820,54981,55210,56095,56530,56671,56180,,66317,67664,64842]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58464,58525,58354,58034,58289,58654,58122,58143,58084,58670,58037,57234,56777,56729,55636,54590,53786,54129,53613,53685,53829,52858,53304,52798,52424,52326,52505,52102,51796,51803,51558,51863,51132,51151,51296,51960,51748,51911,52875,52703,53220,54440,54157,54232,55802,56037,56333,55601,57434,57793,57583,58618,,58464,58525,58354]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59668,60035,60199,60203,59684,59493,59318,59041,58600,58386,58021,57636,57142,56551,55991,55408,54789,54182,53725,53364,53035,52824,52689,52508,52470,52320,52132,51983,51845,51701,51550,51516,51491,51565,51619,51839,52026,52321,52654,53030,53346,53741,54160,54598,54958,55302,55837,56296,56828,57358,58320,59160,,,,]},
{label: '2020',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60155,60710,59360,59140,58800,59380,58789,58877,59273,59637,58636,59191,62971,72276,79058,76757,73850,69268,66764,64437,61562,59614,58839,57965,57915,58419,59763,61837,63417,64488,64479,63939,63864,62700,61153,60050,59227,59242,59897,58652,60277,58769,60204,61241,64881,66378,68877,69441,71642,72561,65948,51409,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.816182879,0.970735905,0.179542195,-0.308198496,-0.541714339,-0.483464243,-0.541328237,-0.508750296,-0.327651187,-0.0850953623,0.0167011927,0.234272488,0.976380785,2.81779710,5.25985036,7.23067515,8.75561144,9.74589863,10.4565092,10.9335647,11.1600860,11.2312544,11.2489924,11.2159925,11.1848940,11.2017322,11.3196272,11.5722507,11.9155369,12.3111652,12.6924349,13.0233874,13.3331511,13.5596059,13.6907534,13.7468802,13.7492886,13.7362306,13.7367127,13.6609534,13.6450910,13.5449447,13.4901038,13.4601367,13.5625794,13.7044321,13.9135477,14.1153194,14.3678661,14.6213038,14.5892522,14.0173464,,,,]},
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
