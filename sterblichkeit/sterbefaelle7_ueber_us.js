var ch_statsUS={
ecdc_date: '2021-01-25',
cdc_date: '2021-01-27',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 472519,
maxperc: 15.8650962,
lastperc: 15.5182731,
lastcw: '2021/02',
lastcw_covid: '2021/03',
covid_sum: '421129',
jh_last_covid_dayoffset: '0',
jh_covid_sum: '441319',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06"],
type: 'line',
_ecdc_data: [0,0,0,0,0,0,0,0,2,19,48,402,2038,7138,12461,18574,14194,12806,11846,10034,8158,6663,6131,5218,4243,5829,4143,5258,5329,6401,7925,8078,7114,6754,6263,5872,5138,5430,5247,5038,4977,4903,5556,5766,6576,8642,10568,10091,15437,16867,18493,15656,18264,22852,23169,23518,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,506,2914,9080,14849,15165,14834,13321,12071,9846,8399,6700,5874,5079,4204,3958,3712,5414,5544,6536,7912,7393,7101,6682,6300,5839,5124,5428,5422,4970,5065,5053,5701,5785,7037,7764,10532,10086,15333,16933,18341,15412,18368,22697,23274,21623,22068,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58176,58547,59175,58591,58385,57360,57607,56780,57161,55827,55267,54976,53168,53404,52761,52076,52574,51100,51369,51525,50933,51326,50742,51091,50122,50241,49493,50210,50364,50296,49666,50960,51116,51820,51353,51462,52235,51718,52357,52672,53822,53384,53919,54226,54903,55756,57537,59672,61254,,,61114,59444,58176,58547,59175]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67686,64820,62922,61124,61243,59951,57935,56829,57244,56462,55912,55045,55425,55354,54153,53848,53875,52226,50739,51055,51162,52123,51514,51230,50995,51812,51337,50731,50432,50799,51130,50423,50577,50757,50436,51215,51713,51098,52486,51972,53113,53881,53778,53692,54820,54981,55227,56095,56531,56671,56180,,66317,67686,64820,62922,61124,61243]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58514,58365,58034,58289,58655,58131,58143,58074,58669,58037,57234,56777,56730,55636,54590,53770,54145,53602,53696,53829,52858,53304,52794,52425,52329,52505,52090,51808,51803,51549,51856,51141,51151,51303,51960,51748,51910,52896,52684,53220,54437,54160,54217,55817,56036,56319,55615,57434,57793,57581,58621,,58463,58514,58365,58034,58289,58655]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59667,60036,60199,60202,59686,59494,59318,59044,58602,58386,58020,57636,57141,56548,55989,55408,54789,54183,53726,53365,53035,52824,52687,52507,52469,52319,52131,51984,51844,51699,51549,51516,51491,51565,51621,51842,52028,52320,52654,53030,53345,53740,54160,54597,54957,55302,55836,56296,56829,57360,58321,59162,59759,60177,60525,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60165,60726,59358,59152,58815,59384,58801,58872,59276,59641,58642,59196,63006,72263,79071,76752,73882,69259,66785,64437,61585,59633,58835,57994,57946,58438,59761,61863,63082,64155,64125,63962,63881,62762,61282,60346,59752,59775,60437,59156,60422,58875,60310,61346,65081,66586,69372,70698,74012,77602,76812,75851,74928,69591,59700,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.834632209,0.992456329,0.192882792,-0.292789791,-0.525034191,-0.468709990,-0.525797774,-0.496811446,-0.316831018,-0.0746677788,0.0272732566,0.244688789,0.990707959,2.82992649,5.27291902,7.24243513,8.76995248,9.75852877,10.4703326,10.9466502,11.1745044,11.2465780,11.2635641,11.2322127,11.2027823,11.2203533,11.3375512,11.5911658,11.9132796,12.2892310,12.6507179,12.9841738,13.2959715,13.5267421,13.6653248,13.7368596,13.7651911,13.7773054,13.8019933,13.7476225,13.7362043,13.6385854,13.5860912,13.5583531,13.6667650,13.8145839,14.0405691,14.2873692,14.6243553,15.0558651,15.4020056,15.6665185,15.8650962,15.8606351,15.5182731,,,,]},
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
