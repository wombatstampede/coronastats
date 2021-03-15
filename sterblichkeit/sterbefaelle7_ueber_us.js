var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-03-10',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 580678,
maxperc: 18.4360348,
lastperc: 17.0666524,
lastcw: '2021/08',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '0',
jh_covid_sum: '534880',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2976,9202,14901,15254,14956,13171,12066,9855,8315,6538,5772,5027,4142,3881,3659,5397,5559,6513,7855,7421,7126,6711,6309,5855,5124,5348,5439,4939,5172,5222,5812,6012,7303,8156,11119,10814,16033,17907,19238,16363,18890,23074,23726,21843,22152,20667,17346,13155,13706,11791,9472,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61124,59444,58176,58537,59175,58591,58385,57359,57608,56780,57161,55827,55267,54976,53168,53404,52753,52083,52574,51100,51370,51525,50933,51326,50742,51101,50122,50230,49493,50211,50364,50303,49659,50960,51111,51820,51358,51462,52235,51703,52357,52672,53837,53385,53919,54225,54903,55747,57537,59674,61261,,,61124,59444,58176,58537,59175,58591,58385,57359,57608,56780,57161]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64842,62922,61144,61243,59932,57934,56829,57226,56462,55930,55045,55421,55354,54152,53853,53874,52227,50739,51055,51162,52123,51523,51221,50995,51812,51337,50730,50433,50799,51130,50435,50577,50745,50429,51215,51720,51098,52497,51972,53113,53881,53767,53692,54837,54981,55210,56113,56530,56671,56163,,66317,67664,64842,62922,61144,61243,59932,57934,56829,57226,56462,55930]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58514,58376,58034,58279,58654,58120,58153,58075,58669,58024,57248,56776,56714,55636,54606,53770,54134,53624,53685,53829,52858,53300,52793,52433,52325,52506,52078,51808,51815,51549,51858,51139,51156,51298,51979,51748,51911,52876,52683,53223,54441,54157,54214,55802,56052,56332,55601,57451,57778,57582,58618,,58463,58514,58376,58034,58279,58654,58120,58153,58075,58669,58024,57248]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [60929,61493,61500,61488,61085,60535,60176,59704,59084,58751,58195,57760,57369,56747,56134,55462,54776,53984,53363,52852,52476,52253,52137,51979,51979,51868,51648,51462,51312,51213,51092,51143,51145,51254,51374,51589,51721,52036,52371,52671,52945,53336,53668,54010,54382,54687,55179,55682,56288,56751,57693,58709,59522,60054,60665,60771,60846,60779,60358,60171,59807,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60167,60720,59361,59160,58812,59454,58799,58893,59315,59669,58650,59187,63018,72302,79071,76792,73886,69286,66799,64454,61613,59652,58862,58003,57962,58472,59807,61885,63118,64194,64178,63667,63603,62502,61042,60149,59555,59974,60849,59905,61809,60401,61934,63170,66699,68144,71125,72530,75864,79964,80715,81810,84044,83368,83270,79063,73419,69094,62183,57455,50243,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.25063599,-1.25385960,-1.99758593,-2.44570311,-2.69988091,-2.54911043,-2.51237108,-2.37086936,-2.07200079,-1.71890632,-1.49938154,-1.18121271,-0.368090748,1.52021523,3.99887760,6.01830915,7.59777384,8.65925176,9.45446017,10.0231878,10.3426004,10.5001437,10.5950072,10.6327250,10.6648029,10.7375521,10.9088323,11.2137480,11.5853782,12.0049604,12.4066475,12.7533953,13.0771799,13.3183998,13.4643818,13.5455900,13.5862017,13.6277252,13.6902893,13.6913452,13.7631583,13.7511830,13.7887888,13.8598521,14.0537994,14.2829015,14.5961822,14.9277623,15.3437068,15.8725107,16.3675483,16.8393811,17.3360941,17.7692231,18.1582541,18.3923183,18.4360348,18.3463337,18.0645771,17.6581386,17.0666524,,,,]},
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
