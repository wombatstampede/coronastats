var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-03-17',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 585596,
maxperc: 18.5542678,
lastperc: 16.9143078,
lastcw: '2021/09',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '4',
jh_covid_sum: '539698',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2976,9202,14901,15254,14956,13171,12066,9855,8315,6538,5772,5027,4142,3881,3659,5397,5559,6513,7855,7421,7126,6711,6309,5855,5124,5348,5439,4939,5172,5222,5812,6012,7303,8156,11119,10814,16033,17907,19238,16363,18890,23074,23726,21843,22152,20667,17346,13155,13706,11791,9480,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58176,58547,59162,58591,58398,57369,57597,56780,57162,55827,55274,54969,53168,53404,52753,52077,52580,51100,51370,51534,50933,51317,50743,51091,50133,50229,49493,50210,50371,50296,49659,50960,51111,51820,51353,51467,52235,51703,52372,52672,53822,53384,53909,54235,54904,55746,57540,59682,61251,,,61114,59444,58176,58547,59162,58591,58398,57369,57597,56780,57162]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66339,67664,64820,62922,61144,61244,59931,57934,56829,57226,56462,55930,55045,55420,55354,54153,53853,53874,52215,50750,51056,51162,52123,51514,51221,51004,51823,51337,50730,50422,50799,51142,50423,50577,50745,50429,51222,51713,51098,52486,51972,53113,53881,53778,53692,54837,54981,55210,56095,56531,56688,56163,,66339,67664,64820,62922,61144,61244,59931,57934,56829,57226,56462,55930]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58536,58354,58034,58279,58654,58130,58134,58084,58685,58037,57220,56776,56713,55652,54590,53770,54134,53602,53696,53829,52873,53300,52799,52424,52325,52505,52078,51808,51803,51561,51863,51134,51156,51298,51960,51748,51921,52885,52684,53220,54437,54162,54215,55803,56036,56333,55615,57436,57777,57581,58635,,58463,58536,58354,58034,58279,58654,58130,58134,58084,58685,58037,57220]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [60964,61506,61614,61542,61103,60582,60236,59764,59178,58858,58371,57924,57498,56913,56253,55544,54812,54025,53379,52847,52432,52223,52120,51958,51941,51853,51647,51460,51275,51178,51040,51079,51117,51203,51345,51568,51695,51997,52342,52647,52914,53316,53633,54009,54380,54688,55156,55685,56295,56730,57693,58704,59477,60042,60666,60716,60804,60747,60388,60133,59690,59235,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60167,60730,59352,59161,58817,59454,58801,58893,59316,59672,58674,59215,62997,72300,79077,76775,73909,69285,66801,64456,61606,59653,58877,58006,57975,58468,59780,61909,63127,64195,64190,63671,63609,62504,61049,60172,59573,59658,60883,59944,61805,60429,61981,63204,67046,68366,71184,72820,76002,80054,80793,81872,84177,83668,83779,79845,74890,71295,64860,60719,55048,47192,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.30732892,-1.28439618,-2.08328806,-2.53067672,-2.77182790,-2.62175650,-2.58801956,-2.44935985,-2.15887237,-1.81449648,-1.60926779,-1.30119921,-0.499396771,1.37503244,3.84621419,5.86073746,7.44498146,8.50847981,9.30845553,9.88371443,10.2121620,10.3775892,10.4797498,10.5237066,10.5635974,10.6406902,10.8133983,11.1228237,11.5000902,11.9243308,12.3321632,12.6850760,13.0126112,13.2586098,13.4081550,13.4931340,13.5373842,13.5671143,13.6342524,13.6396677,13.7140564,13.7054257,13.7477428,13.8211584,14.0300614,14.2683672,14.5851722,14.9277752,15.3484284,15.8811432,16.3786457,16.8524905,17.3551647,17.7983425,18.2034001,18.4638408,18.5542678,18.5318281,18.3271724,18.0150568,17.5626429,16.9143078,,,]},
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
