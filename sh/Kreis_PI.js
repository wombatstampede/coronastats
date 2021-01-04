var chdata={
labels: ["2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17","2020-10-18","2020-10-19","2020-10-20","2020-10-21","2020-10-22","2020-10-23","2020-10-24","2020-10-25","2020-10-26","2020-10-27","2020-10-28","2020-10-29","2020-10-30","2020-10-31","2020-11-01","2020-11-02","2020-11-03","2020-11-04","2020-11-05","2020-11-06","2020-11-07","2020-11-08","2020-11-09","2020-11-10","2020-11-11","2020-11-12","2020-11-13","2020-11-14","2020-11-15","2020-11-16","2020-11-17","2020-11-18","2020-11-19","2020-11-20","2020-11-21","2020-11-22","2020-11-23","2020-11-24","2020-11-25","2020-11-26","2020-11-27","2020-11-28","2020-11-29","2020-11-30","2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08","2020-12-09","2020-12-10","2020-12-11","2020-12-12","2020-12-13","2020-12-14","2020-12-15","2020-12-16","2020-12-17","2020-12-18","2020-12-19","2020-12-20","2020-12-21","2020-12-22","2020-12-23","2020-12-24","2020-12-25","2020-12-26","2020-12-27","2020-12-28","2020-12-29","2020-12-30","2020-12-31","2021-01-01","2021-01-02","2021-01-03","2021-01-04"],
datasets: [
{label: 'Fälle',
type: 'bar',
backgroundColor: window.chartColors.blue,
yAxisID: 'first-y-axis',
data: [7,7,2,17,0,9,3,8,10,6,6,7,4,2,7,6,7,4,8,3,11,12,17,9,3,0,36,10,12,34,0,73,34,8,10,0,27,36,60,67,0,32,26,49,42,43,45,24,7,36,47,34,28,43,18,0,51,51,49,47,42,31,55,50,68,43,0,73,18,32,47,59,40,42,0,12,34,75,37,98,53,92,19,17,79,62,92,53,113,32,41,100,121,58,56,49,20,47,118,115,84,14,36,26,27]},
{label: '7-Tg. Inzidenz',
type: 'line',
pointBackgroundColor: 'orange',
borderColor: 'orange',
yAxisID: 'first-y-axis',
data: [10.4300994,12.0104175,11.3782902,14.5389264,12.0104175,14.2228628,14.2228628,14.5389264,15.4871172,16.7513717,13.2746719,15.4871172,13.9067992,13.5907355,13.2746719,12.0104175,12.3264811,11.6943538,12.0104175,11.6943538,14.5389264,16.1192445,19.5959443,20.2280715,19.9120079,17.383499,27.8135983,27.4975347,27.4975347,32.8706162,30.0260436,52.1504969,62.8966598,54.0468786,54.0468786,50.2541151,48.0416698,59.41996,55.311133,65.7412324,63.2127235,70.166123,78.3837771,85.3371767,87.2335584,81.8604769,74.9070773,82.4926041,74.5910137,77.7516499,77.1195226,74.5910137,69.8500594,69.2179322,67.3215505,65.1091052,69.8500594,71.1143139,75.8552681,81.8604769,81.5444133,85.6532403,103.036739,102.720676,108.093757,106.197375,91.3423854,101.140358,97.0315305,89.7620673,88.8138765,85.9693039,85.021113,98.295785,75.2231409,86.0,87.9,97.8,89.8,107.6,109.8,127.5,129.7,124.3,125.0,113.3,129.4,112.6,83.5,77.5,72.1,155.6,169.6,164.8,168.0,149.3,144.3,143.9,135.7,146.2,152.2,140.8,136.7,137.3,132.9]},
{label: 'Hospitalisierung',
type: 'bar',
backgroundColor: window.chartColors.red,
yAxisID: 'first-y-axis',
data: [0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,-1,2,0,0,0,0,0,0,0,0,0,3,2,0,1,0,5,0,1,1,0,1,2,5,2,0,2,1,2,5,3,0,0,3,4,2,3,3,1,1,0,6,1,2,2,2,0,1,2,6,4,0,6,4,4,3,3,2,5,0,2,4,1,6,7,4,1,0,9,5,0,7,0,0,0,0,25,8,6,2,3,3,5,15,9,4,0,4,0,1]},
{label: 'Hospitalisierung (∑ 14-Tg.)',
type: 'line',
pointRadius: 0,
borderColor: 'rgba(0,128,0,0.5)',
borderWidth: 1.5,
yAxisID: 'first-y-axis',
data: [2,2,2,2,2,2,3,4,3,2,2,2,3,4,5,4,6,6,6,6,5,4,4,4,4,4,6,7,6,8,6,11,11,12,13,13,14,16,21,23,20,20,21,22,27,25,25,24,26,30,31,32,30,29,30,28,33,32,29,28,30,30,28,26,30,31,28,33,36,40,37,39,39,42,40,42,45,44,44,47,51,46,42,47,49,46,51,46,46,44,40,64,66,65,63,65,68,64,74,83,80,80,84,84,85]},
{label: 'Todesfälle',
type: 'bar',
backgroundColor: 'black',
yAxisID: 'first-y-axis',
data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,2,0,0,2,1,0,0,0,1,0,2,1,0,0,0,1,0,7,0,0,0,0,4,0,0,2,0,2,3,4,3,0,0,0,0,0]},
]};

