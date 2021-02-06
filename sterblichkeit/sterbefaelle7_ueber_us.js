var ch_statsUS={
ecdc_date: '2021-02-01',
cdc_date: '2021-02-03',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 503191,
maxperc: 16.5971462,
lastperc: 16.2262205,
lastcw: '2021/03',
lastcw_covid: '2021/04',
covid_sum: '443355',
jh_last_covid_dayoffset: '5',
jh_covid_sum: '459403',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06"],
type: 'line',
_ecdc_data: [0,0,0,0,0,0,0,0,2,19,48,402,2038,7138,12461,18574,14194,12806,11846,10034,8158,6663,6131,5218,4243,5829,4143,5258,5329,6401,7925,8078,7114,6754,6263,5872,5138,5430,5247,5038,4977,4903,5556,5766,6576,8642,10568,10091,15437,16867,18493,15656,18264,22852,23169,23518,22226,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,506,2914,9080,14849,15165,14834,13321,12071,9846,8399,6700,5874,5079,4204,3958,3712,5414,5544,6536,7912,7393,7101,6682,6300,5839,5124,5428,5422,4970,5065,5053,5701,5785,7037,7764,10533,10085,15333,16933,18341,15412,18368,22697,23274,21623,22073,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61124,59444,58176,58537,59162,58591,58398,57369,57597,56781,57161,55827,55267,54969,53168,53411,52754,52082,52574,51101,51369,51525,50933,51317,50751,51090,50122,50231,49493,50221,50371,50296,49659,50960,51111,51820,51353,51467,52235,51718,52357,52672,53832,53385,53909,54225,54903,55749,57538,59681,61251,,,61124,59444,58176,58537,59162]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64820,62944,61124,61243,59931,57935,56849,57226,56462,55930,55045,55426,55354,54152,53848,53874,52215,50740,51066,51162,52123,51514,51221,51004,51812,51338,50730,50432,50799,51142,50423,50577,50745,50429,51215,51713,51105,52486,51983,53113,53881,53767,53692,54820,54998,55210,56095,56547,56671,56164,,66317,67664,64820,62944,61124,61243]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58474,58525,58354,58034,58278,58663,58130,58136,58074,58670,58038,57234,56776,56713,55652,54606,53770,54118,53602,53685,53851,52858,53304,52793,52424,52331,52505,52090,51808,51803,51549,51858,51134,51156,51303,51969,51759,51911,52875,52683,53220,54441,54159,54215,55816,56038,56332,55601,57418,57776,57617,58618,,58474,58525,58354,58034,58278,58663]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [59897,60460,60699,60652,60233,59649,59429,59016,58469,58280,57975,57634,57179,56648,56188,55595,54873,54071,53541,53119,52749,52592,52456,52308,52302,52153,51962,51855,51721,51569,51448,51448,51456,51492,51510,51702,51875,52155,52417,52772,53049,53412,53834,54215,54536,54970,55541,56031,56505,57000,57989,58831,59539,60216,60972,60909,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60168,60725,59366,59147,58815,59383,58799,58870,59278,59665,58641,59197,62986,72265,79052,76769,73881,69265,66786,64440,61577,59646,58850,57983,57951,58442,59765,61867,63090,64157,64147,63644,63880,62774,61301,60375,59771,59800,60557,59255,60545,59151,60613,61763,65184,66751,69608,71016,74587,78635,78566,78350,78040,74543,70543,60064,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [0.452443361,0.445341775,-0.440195299,-0.952388833,-1.23202877,-1.10235349,-1.09638757,-0.992010999,-0.734070685,-0.430306443,-0.290488561,-0.0475860936,0.710524811,2.55198373,4.98057588,6.94272833,8.47346496,9.48710871,10.2290984,10.7394459,11.0016446,11.1023648,11.1458406,11.1344624,11.1221358,11.1554067,11.2873973,11.5519624,11.8841785,12.2697541,12.6396143,12.9597845,13.2743522,13.5107420,13.6572584,13.7384911,13.7762652,13.7982915,13.8406756,13.8032476,13.8109711,13.7397663,13.7135256,13.7182270,13.8468161,14.0124287,14.2566610,14.5227883,14.8905178,15.3698879,15.7863710,16.1441908,16.4487097,16.5971462,16.5791008,16.2262205,,,]},
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
