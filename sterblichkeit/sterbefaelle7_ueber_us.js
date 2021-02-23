var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-02-17',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 540256,
maxperc: 17.5951552,
lastperc: 16.7673264,
lastcw: '2021/05',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '1',
jh_covid_sum: '500310',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,518,2940,9249,14900,15280,14963,13230,12073,9862,8314,6686,5780,5037,4155,3902,3715,5406,5572,6531,7885,7430,7134,6735,6323,5884,5132,5367,5473,4954,5179,5243,5845,6031,7322,8175,11153,10853,16068,17893,19265,16368,18855,22718,23259,21468,21905,20467,17224,13106,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59444,58186,58537,59162,58604,58385,57359,57608,56780,57161,55827,55267,54976,53168,53404,52754,52082,52574,51101,51369,51534,50933,51317,50742,51091,50122,50241,49493,50210,50364,50303,49659,50960,51116,51820,51353,51462,52235,51718,52357,52672,53822,53385,53909,54235,54903,55746,57541,59681,61251,,,61114,59444,58186,58537,59162,58604,58385,57359]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66339,67664,64820,62922,61124,61243,59932,57954,56829,57226,56480,55912,55045,55421,55354,54157,53848,53874,52227,50739,51055,51162,52123,51514,51221,51004,51812,51348,50730,50422,50799,51142,50423,50577,50745,50429,51215,51720,51098,52486,51972,53113,53892,53767,53692,54837,54981,55210,56095,56530,56688,56164,,66339,67664,64820,62922,61124,61243,59932,57954,56829]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58525,58365,58034,58278,58654,58132,58143,58074,58684,58037,57221,56776,56729,55636,54606,53770,54118,53602,53696,53840,52858,53309,52794,52424,52325,52505,52078,51796,51803,51573,51858,51139,51151,51303,51960,51758,51920,52876,52686,53224,54438,54156,54214,55817,56036,56319,55615,57434,57776,57599,58618,,58463,58525,58365,58034,58278,58654,58132,58143,58074]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [60926,61480,61506,61515,61109,60538,60184,59613,58952,58650,58096,57556,57081,56502,55919,55294,54644,53914,53339,52851,52449,52218,52093,51917,51875,51767,51583,51468,51356,51270,51170,51201,51202,51294,51403,51622,51757,52060,52398,52715,52985,53366,53683,54046,54432,54735,55235,55741,56370,56856,57819,58835,59648,60203,60853,60906,60971,60905,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60184,60733,59356,59149,58806,59388,58794,58871,59289,59644,58664,59177,63008,72283,79055,76754,73873,69291,66790,64445,61585,59654,58856,57992,57953,58464,59773,61884,63102,64185,64160,63646,63553,62490,61345,60438,59843,59898,60700,59702,61603,60239,61816,63086,65484,67083,69940,71427,75410,79755,80408,81406,82153,79535,77608,71955,63783,52864,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.21787086,-1.21644364,-1.97866371,-2.44675606,-2.71028525,-2.57659219,-2.53898113,-2.38050736,-2.06165735,-1.69718085,-1.46264012,-1.12063878,-0.275731273,1.63582453,4.13364253,6.16284324,7.74967111,8.81270533,9.60329521,10.1654006,10.4792603,10.6345940,10.7275060,10.7644558,10.7992348,10.8744093,11.0437912,11.3442270,11.7082259,12.1202385,12.5128772,12.8520996,13.1672126,13.4031719,13.5610039,13.6524411,13.7025024,13.7362196,13.7877888,13.7749734,13.8336762,13.8115330,13.8420511,13.9067753,14.0481584,14.2331954,14.4991642,14.7884323,15.1870708,15.7072959,16.1897380,16.6461087,17.0770513,17.3809386,17.5842153,17.5951552,17.3447435,16.7673264,,,,]},
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
