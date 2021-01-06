var ch_statsUS={
ecdc_date: '2020-12-28',
cdc_date: '2020-12-30',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 392692,
maxperc: 14.3645492,
lastperc: 13.9982626,
lastcw: '2020/51',
lastcw_covid: '2020/52',
covid_sum: '333326',
jh_last_covid_dayoffset: '2',
jh_covid_sum: '357258',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02"],
type: 'line',
_ecdc_data: [0,0,0,0,0,0,0,0,2,19,48,402,2038,7138,12461,18574,14194,12806,11846,10034,8158,6663,6131,5218,4243,5829,4143,5258,5329,6401,7925,8078,7114,6754,6263,5872,5138,5430,5247,5038,4977,4903,5556,5766,6576,8642,10568,10091,15437,16867,18493,15656,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,506,2914,9072,14853,15157,14828,13308,12070,9839,8399,6703,5869,5075,4196,3954,3679,5404,5511,6493,7893,7382,7098,6697,6244,5895,5115,5440,5405,4980,5073,5040,5695,5766,7032,7766,10537,10054,15332,16949,18375,15450,18462,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58176,58537,59162,58604,58385,57359,57598,56780,57161,55837,55267,54976,53168,53404,52754,52077,52574,51100,51375,51525,50933,51326,50742,51090,50123,50241,49493,50210,50364,50296,49666,50960,51111,51820,51353,51467,52235,51703,52372,52672,53822,53394,53910,54225,54903,55746,57537,59681,61255,,,61114]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66339,67664,64820,62922,61124,61243,59952,57934,56829,57226,56480,55912,55045,55425,55354,54152,53849,53874,52226,50740,51055,51162,52123,51514,51230,50995,51812,51338,50730,50432,50799,51130,50423,50589,50745,50429,51215,51720,51098,52486,51983,53113,53881,53767,53692,54820,54998,55210,56096,56547,56671,56163,,66339,67664]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58514,58365,58045,58278,58663,58122,58135,58083,58684,58024,57220,56790,56713,55652,54590,53786,54129,53613,53685,53829,52858,53302,52797,52424,52329,52505,52090,51796,51815,51551,51856,51132,51149,51312,51969,51759,51910,52876,52686,53223,54439,54156,54214,55802,56036,56334,55615,57434,57776,57598,58620,,58463,58514]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59667,60036,60199,60201,59684,59492,59317,59042,58601,58386,58020,57635,57141,56550,55991,55409,54790,54182,53725,53363,53035,52824,52688,52507,52470,52319,52131,51984,51844,51699,51550,51517,51491,51566,51622,51842,52028,52321,52654,53030,53345,53740,54158,54596,54957,55301,55836,56297,56830,57358,58320,,,,]},
{label: '2020',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60160,60710,59360,59138,58797,59378,58787,58875,59271,59654,58636,59167,62991,72249,79053,76738,73866,69251,66762,64420,61573,59611,58847,57964,57911,58412,59774,62174,63413,64499,64495,63943,63821,62691,61067,59879,58950,58935,59732,58603,60268,58769,60234,61273,64867,66317,68540,68871,70318,68547,56422,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.826252367,0.974912909,0.182321486,-0.306118624,-0.541050813,-0.483189944,-0.541333410,-0.509381582,-0.328771313,-0.0832457431,0.0185399413,0.232725122,0.977690212,2.81587580,5.25749976,7.22633051,8.75302097,9.74181854,10.4524492,10.9283144,11.1559812,11.2270836,11.2456850,11.2128207,11.1815570,11.1981130,11.3169300,11.5910192,11.9335302,12.3293961,12.7110506,13.0416271,13.3485288,13.5740244,13.7001611,13.7472537,13.7359394,13.7085188,13.7019775,13.6248247,13.6094698,13.5102045,13.4575320,13.4297243,13.5323234,13.6724654,13.8692390,14.0502654,14.2548761,14.3645492,13.9982626,,,,]},
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
