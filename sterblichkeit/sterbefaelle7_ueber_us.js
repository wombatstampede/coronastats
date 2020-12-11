var ch_statsUS={
ecdc_date: '2020-12-11',
cdc_date: '2020-12-09',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 293437,
maxperc: 13.4524097,
lastperc: 11.1460357,
lastcw: '2020/48',
lastcw_covid: '2020/49',
covid_sum: '292179',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53"],
type: 'line',
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58176,58537,59162,58591,58398,57359,57598,56779,57162,55837,55267,54969,53175,53404,52760,52076,52575,51100,51369,51525,50942,51317,50742,51090,50122,50230,49505,50210,50364,50296,49666,50960,51116,51820,51353,51462,52250,51703,52357,52672,53822,53384,53910,54225,54913,55760,57537,59671,61251,]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64842,62922,61124,61243,59931,57935,56849,57226,56462,55930,55045,55420,55355,54152,53848,53879,52216,50739,51055,51173,52123,51523,51221,50995,51812,51337,50741,50422,50799,51130,50423,50577,50757,50436,51215,51713,51098,52486,51972,53124,53881,53784,53692,54820,54981,55210,56095,56531,56671,56180,]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58513,58365,58034,58278,58653,58129,58136,58075,58669,58022,57234,56776,56713,55635,54590,53786,54118,53602,53695,53828,52858,53299,52798,52424,52324,52516,52077,51796,51803,51549,51855,51130,51157,51296,51970,51747,51910,52875,52683,53220,54437,54160,54213,55802,56050,56319,55598,57419,57775,57580,58634,]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59667,60034,60197,60199,59681,59490,59316,59040,58598,58386,58019,57632,57139,56548,55988,55405,54786,54180,53724,53362,53034,52823,52687,52506,52468,52317,52128,51980,51841,51696,51546,51512,51489,51563,51619,51840,52025,52317,52650,53027,53342,53737,54157,54594,54953,55296,55830,56290,,,,,]},
{label: '2020',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60160,60704,59342,59135,58787,59360,58772,58854,59276,59617,58624,59178,62949,72218,78992,76695,73805,69210,66736,64388,61531,59592,58803,57926,57874,58370,59687,61766,63016,64033,63997,63412,63248,62032,60389,58917,57723,57474,58254,57121,58630,57063,58166,58480,60301,58820,53794,38874,,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.826252367,0.971587539,0.171208129,-0.314872739,-0.550407301,-0.495451863,-0.555205168,-0.525517981,-0.341649541,-0.101074994,0.000612907526,0.218230251,0.959085116,2.79508609,5.23152873,7.19781812,8.72041409,9.70722155,10.4173023,10.8921296,11.1180024,11.1892801,11.2061285,11.1720801,11.1398684,11.1552004,11.2699871,11.5199569,11.8404978,12.2116270,12.5682266,12.8734050,13.1538555,13.3498424,13.4470661,13.4524097,13.3885434,13.3000955,13.2347887,13.1015435,13.0258862,12.8662659,12.7406562,12.6133007,12.5490723,12.4135800,12.0655512,11.1460357,,,,,]},
{label: 'Covid-19',
_tag: 'covid',
borderColor: 'rgba(0,193,143,1)',
backgroundColor: 'rgba(0,193,143,0.25)',
pointRadius: 0,
borderWidth: 1,
order: 93,
lineTension: 0,
fill: true,
data: [0,0,0,0,0,0,0,0,1,16,40,283,1851,6310,12107,18302,14279,13196,12409,9960,8333,6694,6021,5634,4283,5820,4137,5138,5305,6341,7987,7978,7056,6881,6417,5759,5163,5557,5239,4897,4983,4912,5610,5657,6557,8487,10299,10164,15136,,,,]},
]},
]
