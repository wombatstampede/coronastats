var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-03-31',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 598701,
maxperc: 18.7399354,
lastperc: 16.7202457,
lastcw: '2021/11',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '1',
jh_covid_sum: '555608',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12","2021/13","2021/14","2021/15"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2976,9202,14901,15254,14958,13173,12068,9855,8315,6538,5772,5027,4142,3881,3659,5397,5561,6513,7856,7421,7126,6711,6309,5855,5125,5348,5439,4940,5173,5221,5813,6014,7304,8158,11120,10816,16036,17907,19248,16369,18908,23108,23767,21906,22209,20738,17420,13235,13788,11885,9565,7034,6794,5547,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61124,59444,58176,58537,59175,58591,58385,57359,57597,56781,57171,55827,55274,54969,53168,53404,52754,52082,52574,51100,51370,51534,50933,51317,50742,51090,50122,50242,49493,50210,50364,50296,49666,50960,51111,51820,51358,51462,52235,51718,52357,52672,53822,53384,53920,54225,54903,55749,57537,59671,61261,,,61124,59444,58176,58537,59175,58591,58385,57359,57597,56781,57171,55827,55274,54969]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66318,67664,64820,62944,61124,61243,59952,57934,56829,57226,56462,55930,55045,55420,55355,54157,53848,53885,52215,50740,51055,51162,52123,51514,51230,50995,51813,51337,50730,50432,50799,51130,50435,50577,50745,50429,51215,51713,51105,52486,51972,53113,53881,53778,53709,54820,54981,55210,56112,56530,56671,56163,,66318,67664,64820,62944,61124,61243,59952,57934,56829,57226,56462,55930,55045,55420,55355]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58464,58514,58365,58034,58289,58672,58122,58134,58075,58698,58023,57221,56776,56713,55652,54606,53770,54129,53602,53685,53840,52858,53300,52798,52429,52325,52505,52090,51796,51803,51561,51856,51139,51156,51300,51959,51749,51921,52885,52686,53221,54441,54156,54214,55802,56050,56332,55603,57434,57776,57582,58620,,58464,58514,58365,58034,58289,58672,58122,58134,58075,58698,58023,57221,56776,56713,55652]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [61064,62203,61633,61563,61175,60642,60284,59865,59298,58953,58643,58187,57684,57034,56383,55687,54943,54114,53453,52906,52454,52191,52069,51929,51917,51812,51611,51456,51298,51174,51010,51035,51040,51141,51288,51502,51648,51955,52281,52594,52874,53277,53599,53968,54359,54699,55166,55671,56280,56728,57662,58669,59456,59974,60599,60686,60735,60647,60312,60110,59668,59192,58796,58449,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60185,60729,59356,59154,58821,59458,58811,58889,59312,59682,58686,59202,63024,72287,79083,76801,73914,69299,66807,64458,61607,59657,58869,58008,57967,58488,59807,61921,63134,64205,64181,63676,63622,62512,61069,60204,59608,59673,60555,59655,61867,60516,62085,63329,67630,68861,71729,73335,76289,80407,81093,82178,84507,84035,84285,80668,75891,73294,68077,65425,61302,56081,52618,47518,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.43947334,-1.90886450,-2.50405625,-2.85600678,-3.05326390,-2.87199957,-2.81171540,-2.66691781,-2.37563604,-2.02462583,-1.83970793,-1.55146439,-0.753333999,1.11759569,3.58457475,5.59634978,7.17768177,8.24445063,9.04846119,9.62877687,9.96553842,10.1438255,10.2586303,10.3133320,10.3621043,10.4505421,10.6337399,10.9495413,11.3305085,11.7601010,12.1735697,12.5335588,12.8702953,13.1239701,13.2812552,13.3747873,13.4263074,13.4617552,13.5193394,13.5170948,13.5990654,13.5987975,13.6495498,13.7322165,13.9675567,14.2261672,14.5643429,14.9273075,15.3589869,15.9040550,16.4127371,16.8976940,17.4112716,17.8680470,18.2907202,18.5769821,18.6994175,18.7399354,18.6322340,18.4562831,18.1807901,17.7802480,17.3080472,16.7202457,,,,]},
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
