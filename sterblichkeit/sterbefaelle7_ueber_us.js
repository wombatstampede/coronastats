var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-04-14',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 603123,
maxperc: 18.8754650,
lastperc: 16.3185323,
lastcw: '2021/13',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '4',
jh_covid_sum: '565289',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11","2021/12","2021/13","2021/14","2021/15","2021/16"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2975,9202,14901,15254,14958,13173,12068,9856,8315,6539,5776,5029,4142,3881,3659,5397,5561,6513,7856,7421,7126,6711,6309,5855,5131,5342,5439,4940,5175,5220,5813,6014,7304,8158,11122,10817,16038,17910,19253,16371,18910,23109,23771,21908,22217,20744,17427,13242,13832,11892,9450,7173,6895,5679,6787,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59454,58176,58537,59162,58604,58385,57359,57597,56779,57173,55827,55274,54969,53168,53404,52754,52076,52581,51100,51369,51525,50933,51317,50751,51102,50122,50229,49494,50210,50371,50296,49659,50960,51111,51820,51358,51462,52235,51703,52357,52687,53822,53384,53919,54226,54903,55756,57538,59674,61251,,,61114,59454,58176,58537,59162,58604,58385,57359,57597,56779,57173,55827,55274,54969,53168]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64842,62922,61124,61243,59932,57954,56829,57226,56462,55930,55045,55425,55354,54152,53849,53874,52215,50740,51066,51162,52123,51514,51230,50995,51812,51347,50731,50422,50799,51130,50423,50589,50745,50429,51222,51713,51098,52486,51972,53113,53881,53778,53692,54820,54998,55210,56095,56530,56671,56181,,66317,67664,64842,62922,61124,61243,59932,57954,56829,57226,56462,55930,55045,55425,55354,54152]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58463,58514,58354,58045,58289,58663,58122,58144,58074,58670,58023,57220,56805,56729,55636,54606,53770,54118,53613,53696,53829,52858,53301,52798,52424,52329,52517,52090,51796,51803,51549,51856,51134,51158,51303,51960,51748,51911,52895,52686,53224,54437,54157,54214,55803,56051,56332,55601,57435,57776,57600,58618,,58463,58514,58354,58045,58289,58663,58122,58144,58074,58670,58023,57220,56805,56729,55636,54606]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [61148,62281,61672,61591,61150,60611,60296,59857,59267,58927,58632,58158,57717,57170,56486,55753,55083,54340,53680,53056,52572,52285,52134,51934,51886,51807,51631,51458,51305,51218,51080,51073,51028,51109,51221,51440,51594,51895,52242,52571,52836,53233,53570,53935,54326,54652,55130,55662,56269,56686,57620,58644,59409,59916,60550,60587,60628,60593,60227,59974,59543,59135,58735,58340,57927,57454,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60163,60725,59357,59153,58830,59460,58811,58899,59314,59706,58666,59206,63006,72307,79108,76791,73918,69292,66798,64473,61613,59661,58872,58012,57984,58481,59797,61926,63139,64212,64205,63685,63609,62543,61063,60244,59611,59701,60569,59666,61546,60176,62077,63327,67696,68945,71787,73394,76785,81052,81961,83124,85230,84225,84548,80901,76184,73729,68735,66596,63379,59416,57140,54039,51503,44991,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.61084582,-2.05867341,-2.62343261,-2.95672336,-3.12303065,-2.92167522,-2.85714952,-2.70320053,-2.40219905,-2.04054054,-1.85563664,-1.56165784,-0.769351868,1.08840195,3.54740922,5.55223642,7.12080644,8.16619330,8.95037704,9.52184253,9.85274473,10.0276631,10.1417364,10.2006832,10.2570873,10.3490182,10.5333729,10.8523287,11.2358443,11.6654452,12.0782060,12.4387190,12.7778267,13.0373479,13.2003962,13.3014835,13.3579625,13.3996645,13.4614373,13.4622639,13.5331445,13.5218240,13.5753562,13.6611139,13.9021123,14.1674891,14.5106360,14.8772336,15.3287154,15.8994734,16.4407796,16.9590778,17.4978870,17.9614626,18.3927217,18.6882186,18.8217740,18.8754650,18.7883943,18.6494878,18.4359825,18.1293224,17.7817216,17.3718733,16.9187450,16.3185323,,,]},
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
