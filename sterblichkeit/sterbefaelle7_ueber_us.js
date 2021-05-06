var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-05-05',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 624988,
maxperc: 19.1077195,
lastperc: 16.1627624,
lastcw: '2021/16',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '3',
jh_covid_sum: '579275',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12","2021/13","2021/14","2021/15","2021/16","2021/17","2021/18","2021/19"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2975,9202,14904,15252,14957,13175,12073,9851,8315,6534,5772,5035,4143,3879,3666,5400,5566,6516,7868,7384,7174,6706,6323,5876,5135,5341,5439,4948,5179,5221,5818,6012,7313,8160,11129,10822,16056,17906,19268,16386,18953,23147,23790,21968,22256,20905,17496,13328,13898,11888,8832,7159,6978,5735,6869,5040,4880,4686,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61124,59444,58176,58537,59175,58591,58385,57359,57597,56789,57163,55827,55274,54969,53168,53404,52753,52078,52580,51100,51369,51534,50933,51317,50742,51092,50122,50240,49493,50210,50364,50303,49659,50960,51111,51820,51358,51462,52235,51718,52357,52672,53822,53385,53919,54225,54913,55746,57540,59672,61251,,,61124,59444,58176,58537,59175,58591,58385,57359,57597,56789,57163,55827,55274,54969,53168,53404,52753,52078]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64820,62944,61124,61244,59931,57954,56829,57226,56480,55912,55045,55420,55360,54152,53848,53874,52215,50750,51056,51162,52123,51514,51230,50995,51813,51337,50730,50432,50811,51130,50423,50577,50745,50429,51222,51713,51098,52486,51972,53113,53881,53778,53692,54820,54981,55227,56112,56530,56671,56164,,66317,67664,64820,62944,61124,61244,59931,57954,56829,57226,56480,55912,55045,55420,55360,54152,53848,53874,52215]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58474,58514,58365,58034,58278,58654,58140,58134,58075,58684,58037,57221,56776,56713,55636,54606,53786,54118,53613,53685,53840,52858,53305,52794,52428,52325,52505,52078,51796,51827,51549,51858,51132,51163,51298,51969,51750,51910,52885,52686,53223,54437,54157,54215,55817,56036,56318,55616,57437,57776,57598,58618,,58474,58514,58365,58034,58278,58654,58140,58134,58075,58684,58037,57221,56776,56713,55636,54606,53786,54118,53613]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [61385,62486,62446,61729,61302,60693,60349,59865,59305,58953,58691,58215,57822,57333,56691,56217,55526,54663,53936,53311,52798,52455,52266,52025,51938,51783,51557,51378,51243,51142,51014,51029,51015,51087,51174,51348,51474,51778,52114,52473,52736,53144,53473,53828,54230,54565,55059,55576,56213,56653,57626,58621,59395,59905,60524,60550,60583,60524,60144,59902,59448,59017,58588,58291,57861,57427,56751,56295,55901,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60171,60736,59356,59166,58823,59470,58812,58894,59327,59685,58669,59230,63010,72288,79114,76815,73906,69306,66819,64466,61618,59668,58881,58029,57975,58510,59823,61918,63153,64247,64204,63715,63624,62536,61095,60223,59632,59703,60604,59765,61734,60606,62139,63375,67442,69129,72026,73536,77564,82184,83053,84422,86386,84889,85304,81790,77001,74295,69325,67465,64836,61722,59939,58394,58301,55370,55536,51083,45995,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.97768184,-2.39281188,-3.24930092,-3.47395241,-3.58689890,-3.32909056,-3.21940566,-3.02434447,-2.69397336,-2.31268683,-2.11254729,-1.80309587,-1.00760813,0.840259156,3.28620865,5.25274730,6.78527821,7.81322420,8.58888679,9.15051267,9.47646349,9.65215477,9.77035418,9.83706904,9.90184306,10.0096147,10.2118197,10.5453407,10.9424602,11.3868990,11.8109734,12.1826623,12.5296802,12.7962536,12.9696702,13.0806494,13.1502351,13.2033960,13.2781882,13.2929131,13.3809979,13.3961848,13.4597662,13.5549957,13.7921519,14.0707882,14.4279989,14.8050534,15.2888798,15.9024269,16.4817791,17.0449585,17.6215878,18.1049255,18.5587727,18.8808048,19.0380492,19.1077195,19.0374155,18.9226711,18.7506238,18.5093739,18.2400088,17.9461085,17.6729621,17.3428808,17.0483852,16.6597830,16.1627624,,,]},
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
