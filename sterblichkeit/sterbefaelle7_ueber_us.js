var ch_statsUS={
ecdc_date: '2020-12-14',
cdc_date: '2021-03-03',
}
var chdataUS=[
{
cocode: 'US',
coname: 'USA',
sumdiff: 570191,
maxperc: 18.2248447,
lastperc: 17.0588795,
lastcw: '2021/07',
lastcw_covid: '',
covid_sum: '',
jh_last_covid_dayoffset: '1',
jh_covid_sum: '525752',
labels: ["2020/01","2020/02","2020/03","2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2020/13","2020/14","2020/15","2020/16","2020/17","2020/18","2020/19","2020/20","2020/21","2020/22","2020/23","2020/24","2020/25","2020/26","2020/27","2020/28","2020/29","2020/30","2020/31","2020/32","2020/33","2020/34","2020/35","2020/36","2020/37","2020/38","2020/39","2020/40","2020/41","2020/42","2020/43","2020/44","2020/45","2020/46","2020/47","2020/48","2020/49","2020/50","2020/51","2020/52","2020/53","2021/01","2021/02","2021/03","2021/04","2021/05","2021/06","2021/07","2021/08","2021/09","2021/10","2021/11"],
type: 'line',
_ecdc_data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
_jh_data: [,,,0,0,0,0,0,1,20,49,526,2976,9202,14901,15254,14956,13169,12064,9854,8315,6535,5772,5027,4140,3881,3658,5397,5558,6510,7854,7415,7126,6710,6307,5853,5122,5345,5439,4939,5172,5222,5811,6012,7302,8156,11118,10813,16031,17905,19235,16362,18886,23049,23694,21807,22113,20642,17337,13111,13638,11742,,],
datasets: [
{label: '2017',
borderColor: 'hsl(200,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 99,
lineTension: 0,
data: [,61114,59454,58176,58537,59162,58591,58398,57359,57598,56779,57162,55837,55267,54976,53168,53404,52753,52076,52576,51106,51369,51525,50933,51317,50751,51091,50122,50241,49493,50210,50364,50303,49659,50960,51111,51820,51353,51467,52250,51703,52357,52672,53832,53385,53909,54225,54903,55747,57537,59671,61264,,,61114,59454,58176,58537,59162,58591,58398,57359,57598,56779]},
{label: '2018',
borderColor: 'hsl(245,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 98,
lineTension: 0,
data: [66317,67664,64842,62922,61124,61243,59952,57934,56829,57226,56480,55912,55045,55425,55354,54152,53848,53875,52227,50739,51055,51162,52123,51514,51230,50995,51813,51337,50730,50432,50799,51130,50435,50577,50745,50429,51215,51720,51098,52486,51983,53113,53881,53767,53692,54820,54998,55210,56096,56530,56671,56180,,66317,67664,64842,62922,61124,61243,59952,57934,56829,57226,56480]},
{label: '2019',
borderColor: 'hsl(290,30%,60%)',
pointRadius: 0,
borderWidth: 1,
fill: false,
order: 97,
lineTension: 0,
data: [58474,58514,58354,58045,58287,58655,58120,58144,58089,58684,58023,57220,56776,56714,55652,54590,53770,54134,53613,53685,53829,52869,53302,52793,52428,52329,52505,52090,51808,51803,51549,51863,51139,51151,51298,51970,51748,51910,52885,52687,53222,54437,54159,54214,55802,56051,56319,55615,57417,57776,57598,58638,,58474,58514,58354,58045,58287,58655,58120,58144,58089,58684,58023]},
{label: 'Ø Average expected #',
_tag: 'avg',
borderColor: 'black',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
order: 96,
fill: false,
data: [60936,61476,61463,61488,61075,60506,60167,59672,59016,58646,58156,57686,57234,56638,56048,55410,54725,53951,53347,52878,52491,52251,52134,51992,51973,51844,51620,51476,51327,51242,51140,51162,51183,51280,51387,51603,51748,52052,52387,52693,52963,53367,53674,54011,54387,54708,55183,55681,56316,56761,57714,58766,59547,60067,60729,60825,60887,60774,60409,60216,,,,]},
{label: '2020-',
_tag: '2020',
borderColor: 'blue',
pointRadius: 0,
borderWidth: 1.5,
order: 95,
lineTension: 0,
fill: '-1',
backgroundColor: 'rgba(255,0,0,0.25)',
data: [60167,60731,59352,59147,58821,59464,58799,58892,59305,59691,58645,59205,62991,72291,79063,76765,73883,69301,66783,64451,61609,59659,58858,58001,57961,58472,59777,61881,63114,64203,64153,63685,63576,62491,61003,60151,59878,59932,60778,59847,61782,60413,61897,63172,66350,67822,70708,72106,75644,79846,80548,81675,83759,82846,82277,77588,71255,66506,58419,51290,,,,]},
{label: 'Übersterblichkeit %',
_tag: 'excess',
borderColor: 'red',
pointRadius: 0,
borderWidth: 1.5,
lineTension: 0,
yAxisID: 'second-y-axis',
order: 94,
fill: false,
data: [-1.26197978,-1.23680685,-1.97144799,-2.43149945,-2.68243495,-2.52409087,-2.48881438,-2.34396025,-2.03756328,-1.66698376,-1.44687376,-1.12010907,-0.297226699,1.59945526,4.08410628,6.10310517,7.68437194,8.74709402,9.53883933,10.1014375,10.4159986,10.5713450,10.6634006,10.6973490,10.7274798,10.7998694,10.9692076,11.2710850,11.6398362,12.0565762,12.4523702,12.7977678,13.1166320,13.3547246,13.4970181,13.5767078,13.6308847,13.6684298,13.7258553,13.7222769,13.7912692,13.7776285,13.8127800,13.8833576,14.0624334,14.2776600,14.5747371,14.8907558,15.2981633,15.8232801,16.3125815,16.7785693,17.2658220,17.6823848,18.0380387,18.2248447,18.2017969,18.0363659,17.6437845,17.0588795,,,,]},
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
