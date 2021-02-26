var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-02-24',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 553622,
maxperc: 17.9474335,
lastperc: 16.8666557,
lastcw: '2021/06',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '4',
jh_covid_sum: '508127',
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
data: [,61114,59454,58176,58537,59162,58604,58385,57360,57597,56779,57161,55838,55267,54969,53175,53404,52753,52076,52576,51100,51375,51525,50933,51317,50751,51090,50133,50229,49495,50210,50371,50296,49659,50960,51111,51820,51358,51462,52235,51703,52357,52687,53822,53384,53919,54225,54904,55749,57537,59681,61252,,,61114,59454,58176,58537,59162,58604,58385,57360]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66339,67664,64820,62922,61124,61243,59951,57935,56829,57244,56462,55912,55045,55420,55355,54157,53848,53885,52215,50739,51056,51162,52123,51514,51221,51004,51822,51337,50731,50422,50799,51130,50423,50589,50745,50429,51215,51720,51098,52486,51972,53124,53881,53767,53692,54820,54998,55210,56112,56531,56671,56163,,66339,67664,64820,62922,61124,61243,59951,57935,56829]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58514,58376,58034,58278,58653,58120,58145,58085,58670,58024,57220,56804,56713,55636,54622,53770,54118,53613,53696,53829,52858,53305,52793,52428,52326,52505,52078,51808,51803,51561,51856,51139,51160,51296,51960,51758,51910,52886,52684,53220,54443,54156,54215,55831,56036,56319,55601,57417,57793,57598,58620,,58463,58514,58376,58034,58278,58653,58120,58145,58085]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [60935,61454,61483,61499,61076,60515,60174,59651,58938,58648,58125,57620,57143,56557,55987,55346,54683,53921,53354,52876,52474,52234,52130,51968,51935,51797,51610,51471,51341,51272,51148,51191,51200,51289,51393,51620,51758,52057,52395,52699,52985,53366,53676,54019,54416,54721,55195,55719,56337,56789,57776,58800,59570,60137,60791,60884,60897,60837,60464,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60170,60734,59352,59150,58811,59463,58799,58877,59303,59666,58644,59203,62988,72284,79057,76761,73883,69297,66791,64448,61601,59646,58853,57996,57956,58469,59774,61892,63107,64193,64144,63657,63565,62499,61013,60466,59851,59931,60754,59821,61779,60344,61854,63145,66045,67423,70322,71825,75562,79840,80579,81628,83328,81401,80078,74523,67621,61302,50500,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.25543612,-1.21334434,-1.96658545,-2.43101263,-2.68561937,-2.52941721,-2.49498989,-2.34825499,-2.02776124,-1.66254945,-1.43834396,-1.10343027,-0.270308172,1.63416957,4.12404965,6.14832974,7.73238358,8.79587760,9.58568668,10.1463381,10.4599826,10.6140383,10.7043999,10.7383815,10.7696347,10.8439053,11.0123592,11.3140104,11.6801736,12.0932513,12.4870690,12.8281840,13.1446546,13.3819425,13.5237211,13.6176285,13.6688985,13.7051869,13.7601831,13.7542842,13.8212916,13.8040027,13.8366382,13.9051969,14.0701031,14.2687687,14.5505558,14.8547924,15.2590619,15.7836620,16.2723762,16.7362072,17.2086765,17.5751467,17.8582051,17.9474335,17.8143937,17.4924470,16.8666557,,,]},
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
