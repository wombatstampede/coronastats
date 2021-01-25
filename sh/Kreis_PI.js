var chdata={
labels: ["2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17","2020-10-18","2020-10-19","2020-10-20","2020-10-21","2020-10-22","2020-10-23","2020-10-24","2020-10-25","2020-10-26","2020-10-27","2020-10-28","2020-10-29","2020-10-30","2020-10-31","2020-11-01","2020-11-02","2020-11-03","2020-11-04","2020-11-05","2020-11-06","2020-11-07","2020-11-08","2020-11-09","2020-11-10","2020-11-11","2020-11-12","2020-11-13","2020-11-14","2020-11-15","2020-11-16","2020-11-17","2020-11-18","2020-11-19","2020-11-20","2020-11-21","2020-11-22","2020-11-23","2020-11-24","2020-11-25","2020-11-26","2020-11-27","2020-11-28","2020-11-29","2020-11-30","2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08","2020-12-09","2020-12-10","2020-12-11","2020-12-12","2020-12-13","2020-12-14","2020-12-15","2020-12-16","2020-12-17","2020-12-18","2020-12-19","2020-12-20","2020-12-21","2020-12-22","2020-12-23","2020-12-24","2020-12-25","2020-12-26","2020-12-27","2020-12-28","2020-12-29","2020-12-30","2020-12-31","2021-01-01","2021-01-02","2021-01-03","2021-01-04","2021-01-05","2021-01-06","2021-01-07","2021-01-08","2021-01-09","2021-01-10","2021-01-11","2021-01-12","2021-01-13","2021-01-14","2021-01-15","2021-01-16","2021-01-17","2021-01-18","2021-01-19","2021-01-20","2021-01-21","2021-01-22","2021-01-23","2021-01-24","2021-01-25"],
datasets: [
{label: 'Fälle',
type: 'bar',
backgroundColor: window.chartColors.blue,
yAxisID: 'first-y-axis',
data: [7,7,2,17,0,9,3,8,10,6,6,7,4,2,7,6,7,4,8,3,11,12,17,9,3,0,36,10,12,34,0,73,34,8,10,0,27,36,60,67,0,32,26,49,42,43,45,24,7,36,47,34,28,43,18,0,51,51,49,47,42,31,55,50,68,43,0,73,18,32,47,59,40,42,0,12,34,75,37,98,53,92,19,17,79,62,92,53,113,32,41,100,121,58,56,49,20,47,118,116,82,15,36,25,28,104,77,62,132,69,38,32,93,133,71,71,70,38,50,102,94,143,106,109,25,0]},
{label: '7-Tg. Inzidenz',
type: 'line',
fill: false,
pointBackgroundColor: 'orange',
borderColor: 'orange',
yAxisID: 'first-y-axis',
data: [10.4,12.0,11.4,14.5,12.0104175,14.2,14.2,14.5,15.5,16.8,13.3,15.5,13.9,13.6,13.3,12.0,12.3,11.7,12.0,11.7,14.5,16.1,19.6,20.2,19.9,17.383499,27.8,27.5,27.5,32.9,30.0260436,52.2,62.9,54.0,54.0,50.2541151,48.0,59.4,55.3,65.7,63.2127235,70.2,78.4,85.3,87.2,81.9,74.9,82.5,74.6,77.8,77.1,74.6,69.9,69.2,67.3,65.1091052,69.9,71.1,75.9,81.9,81.5,85.7,103.0,102.7,108.1,106.2,91.3423854,101.1,97.0,89.8,88.8,86.0,85.0,98.3,75.2231409,73.3,74.0,82.8,75.9,94.2,97.7,126.7,129.0,123.6,124.8,132.7,130.9,130.9,137.5,141.6,149.2,155.8,174.5,163.7,164.7,144.4,140.6,142.5,148.2,146.7,154.2,141.3,137.2,138.8,132.7,128.3,116.0,109.7,146.7,157.1,161.2,162.5,159.0,176.7,179.5,160.2,160.6,160.6,166.2,169.1,156.8,179.5,190.6,202.9,198.8,183.2]},
{label: 'Hospitalisierung',
type: 'bar',
backgroundColor: window.chartColors.red,
yAxisID: 'first-y-axis',
data: [0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,-1,2,0,0,0,0,0,0,0,0,0,3,2,0,1,0,5,0,1,1,0,1,2,5,2,0,2,1,2,5,3,0,0,3,4,2,3,3,1,1,0,6,1,2,2,2,0,1,2,6,4,0,6,4,4,3,3,2,5,0,2,4,1,6,7,4,1,0,9,5,0,7,0,0,0,0,25,8,6,2,3,3,5,15,9,4,6,10,3,4,8,13,13,6,3,4,0,26,12,8,7,6,2,2,13,7,11,12,2,8,0]},
{label: 'Hospitalisierung (∑ 14-Tg.)',
type: 'line',
pointRadius: 0,
fill: false,
borderColor: 'rgba(0,128,0,0.5)',
borderWidth: 2,
yAxisID: 'first-y-axis',
data: [2,2,2,2,2,2,3,4,3,2,2,2,3,4,5,4,6,6,6,6,5,4,4,4,4,4,6,7,6,8,6,11,11,12,13,13,14,16,21,23,20,20,21,22,27,25,25,24,26,30,31,32,30,29,30,28,33,32,29,28,30,30,28,26,30,31,28,33,36,40,37,39,39,42,40,42,45,44,44,47,51,46,42,47,49,46,51,46,46,44,40,64,66,65,63,65,68,64,74,83,80,86,96,99,103,86,91,98,102,102,103,98,109,112,116,117,113,112,110,115,109,107,113,112,116,116]},
{label: 'Todesfälle',
type: 'bar',
backgroundColor: 'black',
yAxisID: 'first-y-axis',
data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,2,0,0,2,1,0,0,0,1,0,2,1,0,0,0,1,0,7,0,0,0,0,4,0,0,2,0,2,3,4,3,0,6,0,2,10,4,5,1,2,5,1,0,7,2,5,6,1,0,5,2,1,5,7,1,3,0]},
{label: 'Todesfälle je Woche',
type: 'line',
fill: false,
spanGaps: true,
borderColor: 'rgba(128,128,128,1)',
borderWidth: 2,
pointRadius: 2,
yAxisID: 'first-y-axis',
data: [,,,,,0,,,,,,,0,,,,,,,0,,,,,,,0,,,,,,,0,,,,,,,1,,,,,,,0,,,,,,,1,,,,,,,0,,,,,,,2,,,,,,,5,,,,,,,4,,,,,,,8,,,,,,,8,,,,,,,18,,,,,,,28,,,,,,,21,,,,,,,24,]},
]};

