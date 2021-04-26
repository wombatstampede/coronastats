var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-04-21',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 612684,
maxperc: 18.8912373,
lastperc: 16.3215528,
lastcw: '2021/14',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '0',
jh_covid_sum: '572200',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12","2021/13","2021/14","2021/15","2021/16","2021/17","2021/18"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2975,9202,14904,15252,14957,13175,12073,9850,8314,6534,5772,5035,4143,3879,3666,5400,5565,6516,7868,7383,7175,6705,6320,5876,5135,5341,5439,4946,5180,5221,5818,6012,7311,8160,11128,10819,16051,17901,19262,16380,18947,23143,23783,21968,22245,20900,17495,13326,13897,11884,8822,7146,6959,5707,6809,4989,4941,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59454,58176,58537,59175,58591,58385,57369,57598,56780,57161,55827,55267,54969,53168,53411,52754,52076,52575,51106,51369,51525,50933,51326,50742,51090,50133,50230,49494,50217,50364,50296,49659,50960,51111,51820,51358,51462,52235,51703,52372,52672,53822,53384,53919,54225,54904,55746,57537,59671,61255,,,61114,59454,58176,58537,59175,58591,58385,57369,57598,56780,57161,55827,55267,54969,53168,53411,52754]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66327,67664,64842,62922,61124,61264,59931,57934,56829,57226,56462,55930,55045,55420,55354,54158,53848,53874,52215,50750,51056,51162,52123,51514,51230,50995,51812,51348,50730,50422,50799,51142,50423,50577,50745,50429,51215,51720,51098,52486,51972,53113,53881,53778,53692,54837,54981,55210,56096,56530,56671,56180,,66327,67664,64842,62922,61124,61264,59931,57934,56829,57226,56462,55930,55045,55420,55354,54158,53848,53874]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58514,58354,58045,58289,58662,58122,58134,58085,58685,58023,57220,56790,56713,55652,54606,53770,54118,53602,53707,53829,52858,53305,52797,52425,52325,52517,52078,51796,51815,51549,51856,51134,51156,51305,51959,51749,51920,52886,52683,53221,54437,54159,54218,55802,56065,56318,55602,57417,57793,57584,58635,,58463,58514,58354,58045,58289,58662,58122,58134,58085,58685,58023,57220,56790,56713,55652,54606,53770,54118]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [61214,62335,62355,61618,61221,60628,60295,59878,59306,58920,58661,58198,57755,57244,56594,55932,55255,54475,53816,53177,52654,52322,52175,51949,51878,51757,51597,51440,51281,51174,51063,51069,51023,51067,51182,51381,51525,51864,52184,52537,52811,53202,53525,53903,54298,54615,55105,55620,56261,56679,57618,58619,59413,59924,60523,60586,60621,60544,60217,59979,59484,59093,58702,58371,57883,57444,56795,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60161,60736,59365,59156,58824,59469,58802,58901,59315,59707,58667,59205,63029,72286,79113,76792,73901,69295,66810,64477,61617,59663,58876,58026,57985,58486,59799,61929,63141,64232,64195,63709,63613,62527,61088,60226,59630,59698,60581,59678,61562,60206,61725,63370,67710,68942,71834,73412,76814,81201,82093,83372,85528,84455,84725,81142,76421,74050,69187,67213,64550,61269,59125,56625,54813,50651,47813,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.72019473,-2.14651677,-3.03489973,-3.27405241,-3.40121072,-3.15671777,-3.06121499,-2.88635955,-2.57283411,-2.19392204,-1.99990697,-1.70031837,-0.900708603,0.952207406,3.40473677,5.39555576,6.95050372,7.98957325,8.76884467,9.33665390,9.66794948,9.84713307,9.96502336,10.0303561,10.0935410,10.1951118,10.3869727,10.7117097,11.1009029,11.5381743,11.9547201,12.3199511,12.6625111,12.9265394,13.0959049,13.2020388,13.2657252,13.3112062,13.3786966,13.3837935,13.4584289,13.4516632,13.4940084,13.5848127,13.8291997,14.0975529,14.4449338,14.8152351,15.2692024,15.8466211,16.3935379,16.9222363,17.4715802,17.9428689,18.3811715,18.6845690,18.8258888,18.8912373,18.8180274,18.6969040,18.5190862,18.2660300,17.9737073,17.6320430,17.2672784,16.8152405,16.3215528,,,,]},
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
