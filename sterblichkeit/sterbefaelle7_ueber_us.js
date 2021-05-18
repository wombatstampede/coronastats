var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-05-12',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 633686,
maxperc: 19.1796152,
lastperc: 16.1577018,
lastcw: '2021/17',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '1',
jh_covid_sum: '586362',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12","2021/13","2021/14","2021/15","2021/16","2021/17","2021/18","2021/19","2021/20","2021/21"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,527,2975,9202,14904,15253,14957,13175,12074,9851,8315,6535,5772,5035,4143,3879,3666,5400,5566,6516,7868,7384,7175,6706,6323,5876,5135,5341,5439,4948,5179,5221,5818,6012,7314,8161,11130,10822,16060,17907,19274,16387,18955,23153,23794,21971,22260,20906,17497,13331,13899,11890,8837,7166,6982,5749,6890,5071,4933,4737,4538,4116,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61124,59444,58176,58537,59162,58591,58398,57359,57597,56789,57161,55829,55274,54969,53168,53404,52753,52082,52574,51102,51369,51525,50942,51317,50742,51090,50122,50230,49505,50217,50364,50296,49659,50960,51111,51820,51358,51462,52235,51718,52357,52672,53823,53384,53909,54235,54903,55747,57540,59681,61251,,,61124,59444,58176,58537,59162,58591,58398,57359,57597,56789,57161,55829,55274,54969,53168,53404,52753,52082,52574,51102]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64820,62944,61124,61243,59932,57934,56849,57244,56462,55912,55045,55420,55355,54157,53848,53874,52216,50750,51055,51162,52123,51514,51230,50995,51823,51337,50730,50422,50799,51130,50435,50577,50745,50429,51215,51713,51105,52486,51983,53113,53881,53767,53692,54820,54981,55227,56113,56530,56671,56163,,66317,67664,64820,62944,61124,61243,59932,57934,56849,57244,56462,55912,55045,55420,55355,54157,53848,53874,52216,50750,51055]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58525,58354,58034,58290,58655,58120,58152,58076,58670,58037,57234,56776,56729,55636,54590,53786,54118,53602,53707,53829,52858,53300,52797,52428,52327,52505,52078,51808,51803,51561,51858,51132,51165,51296,51961,51748,51920,52875,52696,53220,54440,54158,54214,55817,56036,56318,55616,57437,57793,57581,58618,,58463,58525,58354,58034,58290,58655,58120,58152,58076,58670,58037,57234,56776,56729,55636,54590,53786,54118,53602,53707,53829]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [61432,62529,62505,61743,61301,60734,60335,59886,59286,58913,58673,58214,57781,57304,56669,56190,55502,54683,54019,53307,52826,52521,52358,52110,52002,51851,51603,51409,51231,51136,51026,51044,51017,51113,51217,51399,51486,51781,52097,52437,52725,53106,53451,53812,54217,54539,55044,55567,56195,56638,57591,58619,59386,59892,60484,60533,60562,60479,60120,59864,59370,58975,58560,58214,57794,57364,56742,56225,55840,55304,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60171,60728,59366,59167,58823,59479,58804,58906,59318,59684,58669,59233,63033,72308,79096,76815,73906,69295,66821,64470,61618,59668,58896,58030,57979,58498,59808,61918,63172,64248,64210,63717,63626,62537,61076,60262,59648,59708,60593,59771,61740,60611,62146,63390,67478,68720,72056,73582,77661,82270,83154,84560,86606,85346,85780,82238,77666,74455,69447,67564,64960,61873,60136,58642,58911,56688,57744,54556,52421,46092,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-2.05267613,-2.47013173,-3.32553924,-3.53613286,-3.63639301,-3.37885286,-3.26095792,-3.06260386,-2.72650709,-2.33593575,-2.13115712,-1.81972046,-1.01502300,0.839007609,3.28539348,5.25487811,6.78981206,7.81447428,8.58218536,9.14478662,9.46845645,9.63879115,9.75102938,9.81177140,9.87281751,9.97572531,10.1747276,10.5071784,10.9073248,11.3531351,11.7776390,12.1493335,12.4971516,12.7630258,12.9337898,13.0447215,13.1153047,13.1693852,13.2453596,13.2629827,13.3525590,13.3704768,13.4359750,13.5330826,13.7727191,14.0366987,14.3963892,14.7761715,15.2648807,15.8825716,16.4672820,17.0355673,17.6201821,18.1192999,18.5899835,18.9264403,19.1045809,19.1796152,19.1125826,19.0008108,18.8337721,18.5969112,18.3326292,18.0466883,17.7908679,17.4965946,17.2588562,16.9604155,16.6270537,16.1577018,,,,]},
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
