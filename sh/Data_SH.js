var chdata={
labels: ["2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17","2020-10-18","2020-10-19","2020-10-20","2020-10-21","2020-10-22","2020-10-23","2020-10-24","2020-10-25","2020-10-26","2020-10-27","2020-10-28","2020-10-29","2020-10-30","2020-10-31","2020-11-01","2020-11-02","2020-11-03","2020-11-04","2020-11-05","2020-11-06","2020-11-07","2020-11-08","2020-11-09","2020-11-10","2020-11-11","2020-11-12","2020-11-13","2020-11-14","2020-11-15","2020-11-16","2020-11-17","2020-11-18","2020-11-19","2020-11-20","2020-11-21","2020-11-22","2020-11-23","2020-11-24","2020-11-25","2020-11-26","2020-11-27","2020-11-28","2020-11-29","2020-11-30","2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08","2020-12-09","2020-12-10","2020-12-11","2020-12-12","2020-12-13","2020-12-14","2020-12-15","2020-12-16","2020-12-17","2020-12-18","2020-12-19","2020-12-20","2020-12-21","2020-12-22","2020-12-23","2020-12-24","2020-12-25","2020-12-26","2020-12-27","2020-12-28","2020-12-29","2020-12-30","2020-12-31","2021-01-01","2021-01-02","2021-01-03","2021-01-04","2021-01-05","2021-01-06","2021-01-07","2021-01-08","2021-01-09","2021-01-10","2021-01-11","2021-01-12","2021-01-13","2021-01-14","2021-01-15","2021-01-16","2021-01-17","2021-01-18","2021-01-19","2021-01-20","2021-01-21","2021-01-22","2021-01-23","2021-01-24","2021-01-25","2021-01-26","2021-01-27","2021-01-28","2021-01-29","2021-01-30","2021-01-31","2021-02-01","2021-02-02","2021-02-03","2021-02-04","2021-02-05","2021-02-06","2021-02-07","2021-02-08","2021-02-09","2021-02-10","2021-02-11","2021-02-12","2021-02-13","2021-02-14","2021-02-15","2021-02-16","2021-02-17","2021-02-18","2021-02-19","2021-02-20","2021-02-21","2021-02-22","2021-02-23","2021-02-24","2021-02-25","2021-02-26","2021-02-27","2021-02-28","2021-03-01","2021-03-02","2021-03-03","2021-03-04","2021-03-05","2021-03-06","2021-03-07","2021-03-08","2021-03-09","2021-03-10"],
datasets: [
{label: 'Fälle',
type: 'bar',
backgroundColor: window.chartColors.blue,
data: [38,42,63,53,15,15,38,48,49,27,50,16,24,39,54,45,79,54,26,25,65,65,65,55,90,26,88,163,111,160,136,236,142,115,164,164,280,215,313,265,161,142,236,262,220,274,233,177,215,252,247,192,296,158,161,100,294,208,264,250,153,121,145,251,256,225,180,219,71,81,244,240,245,318,234,122,179,356,340,443,429,444,144,210,506,522,489,553,440,193,280,589,673,366,177,201,188,268,576,466,357,135,264,203,265,542,537,482,523,408,143,261,399,491,422,417,358,202,239,468,485,501,459,442,157,161,539,464,385,347,262,179,130,367,340,328,261,268,107,139,312,335,358,227,190,115,142,248,246,254,269,199,112,106,284,255,250,265,199,91,105,223,253,228,216,213,71,113,253,255]},
{label: '7-Tg. Inzidenz',
type: 'line',
fill: false,
pointBackgroundColor: 'orange',
borderColor: 'orange',
data: [7.2,7.9,8.7,9.4,9.3,9.2,9.1,9.4,9.7,8.4,8.3,8.4,8.7,8.7,8.9,8.8,10.6,10.7,11.1,11.1,12.0,12.4,13.1,12.2,13.5,13.5,15.6,19.0,20.6,23.9,26.7,31.7,35.7,36.6,36.6,38.5,42.6,45.3,48.0,52.2,53.8,53.0,55.5,54.9,55.1,53.7,52.6,53.2,55.7,56.2,55.7,54.8,55.5,52.9,52.4,48.4,49.9,48.5,51.0,49.4,49.2,47.9,49.4,47.9,49.6,48.2,45.8,48.1,46.4,44.2,43.9,43.4,44.1,48.8,49.3,51.1,54.5,58.3,61.8,68.6,72.4,79.7,80.4,81.5,86.6,92.9,94.5,98.8,98.6,100.3,102.7,105.6,110.8,106.6,93.6,85.4,85.2,84.8,84.3,77.2,76.9,75.5,77.6,78.1,78.0,76.9,79.3,83.6,97.0,101.9,99.9,99.7,94.8,93.2,91.2,87.5,85.8,87.8,87.1,89.4,89.2,91.9,93.4,96.3,94.7,92.1,94.5,93.8,89.8,85.9,79.7,80.5,79.4,73.5,69.2,67.3,64.3,64.5,62.0,62.3,60.4,60.3,61.3,60.1,57.4,57.7,57.8,55.6,52.6,49.0,50.4,50.7,50.6,49.4,50.6,50.9,50.8,50.7,50.7,49.9,49.9,47.8,47.7,47.0,45.3,45.8,45.1,45.4,46.4,46.5]},
{label: 'Hospitalisierung',
type: 'bar',
backgroundColor: window.chartColors.red,
data: [1,2,7,1,0,0,2,1,3,1,1,0,4,3,1,1,4,2,0,3,5,1,1,2,4,0,9,10,8,9,12,7,5,6,7,7,11,10,11,6,3,9,19,20,15,15,5,7,13,15,21,13,17,8,17,13,23,10,15,9,7,7,13,16,26,19,12,14,15,10,12,8,10,14,3,5,24,13,26,20,14,12,6,26,27,16,20,18,8,13,13,43,35,23,17,21,26,25,46,33,33,20,34,32,51,58,35,46,34,30,22,45,69,51,59,52,32,37,36,51,53,47,34,33,38,51,37,53,37,29,46,58,40,36,47,44,34,14,10,39,38,30,34,26,14,10,23,26,23,16,23,8,8,31,20,29,25,32,11,4,19,23,33,13,20,12,7,12,26,25]},
{label: 'Hosp. (∑ 14-Tg.)',
type: 'line',
fill: false,
hidden: true,
borderColor: 'rgba(0,255,0,0.5)',
borderWidth: 1.5,
pointRadius: 0,
data: [12,12,20,22,22,22,22,23,23,21,22,21,24,26,26,25,22,23,23,26,29,29,27,28,31,31,36,43,50,58,66,71,76,79,81,87,97,105,112,118,112,111,122,133,136,144,144,145,151,159,169,172,178,180,194,198,202,192,192,186,188,188,188,189,194,200,195,201,199,196,185,183,178,183,179,177,188,185,185,186,188,186,177,193,208,216,226,230,235,243,232,262,271,274,277,286,306,305,324,341,354,356,382,401,439,454,454,477,494,503,499,519,542,560,586,618,616,621,606,599,617,618,618,621,637,643,611,613,591,568,582,603,607,592,586,583,583,564,536,524,525,502,499,496,464,416,399,389,365,337,326,320,318,310,292,291,282,288,285,279,275,272,282,279,276,280,279,260,266,262]},
{label: 'Aktuell im Krankenhaus',
type: 'line',
fill: false,
pointBackgroundColor: 'green',
borderColor: 'green',
data: [6,6,6,6,6,6,6,11,11,11,11,14,14,15,15,14,14,14,13,13,18,18,18,21,24,24,24,24,31,31,31,31,51,51,58,58,58,58,58,58,58,94,110,114,119,118,124,120,126,116,113,119,112,116,116,148,145,151,141,141,141,141,155,142,122,113,118,118,118,124,114,110,109,114,114,114,131,122,128,132,133,133,133,177,181,194,201,212,236,250,275,271,267,262,262,262,262,309,318,322,346,346,376,376,390,412,376,379,364,364,364,384,362,373,382,398,426,473,454,457,457,438,447,461,485,499,499,494,505,485,488,506,513,501,471,473,456,442,449,445,447,420,465,444,435,435,435,391,368,360,359,348,342,343,334,314,296,283,272,279,284,284,251,238,237,229,222,223,208,209]},
{label: 'Todesfälle',
type: 'bar',
backgroundColor: 'black',
data: [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,3,0,0,3,4,1,0,2,6,7,2,2,6,0,1,4,3,5,0,5,1,3,5,0,2,2,2,1,0,3,4,1,3,3,1,4,2,3,1,4,1,0,1,4,2,5,7,7,1,2,2,6,7,11,3,2,0,9,15,4,3,4,7,10,18,17,14,2,9,7,3,29,22,17,6,14,11,9,15,25,15,15,24,3,1,23,16,16,18,16,3,11,14,25,21,19,19,24,11,29,27,23,18,21,6,4,22,24,21,18,20,7,5,24,21,13,7,8,0,6,18,16,17,10,8,2,2,20,4,8,4,4,7,1,7,10,9]},
{label: 'Todesfälle je Woche',
type: 'line',
fill: false,
spanGaps: true,
borderColor: 'rgba(128,128,128,1)',
borderWidth: 2,
pointRadius: 2,
yAxisID: 'first-y-axis',
data: [,,,,,0,,,,,,,1,,,,,,,0,,,,,,,1,,,,,,,4,,,,,,,10,,,,,,,24,,,,,,,21,,,,,,,12,,,,,,,19,,,,,,,12,,,,,,,28,,,,,,,31,,,,,,,52,,,,,,,70,,,,,,,108,,,,,,,98,,,,,,,103,,,,,,,133,,,,,,,128,,,,,,,117,,,,,,,79,,,,,,,73,,,,,,,48,,,]},
]};

