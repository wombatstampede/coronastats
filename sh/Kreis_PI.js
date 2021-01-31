var chdata={
labels: ["2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17","2020-10-18","2020-10-19","2020-10-20","2020-10-21","2020-10-22","2020-10-23","2020-10-24","2020-10-25","2020-10-26","2020-10-27","2020-10-28","2020-10-29","2020-10-30","2020-10-31","2020-11-01","2020-11-02","2020-11-03","2020-11-04","2020-11-05","2020-11-06","2020-11-07","2020-11-08","2020-11-09","2020-11-10","2020-11-11","2020-11-12","2020-11-13","2020-11-14","2020-11-15","2020-11-16","2020-11-17","2020-11-18","2020-11-19","2020-11-20","2020-11-21","2020-11-22","2020-11-23","2020-11-24","2020-11-25","2020-11-26","2020-11-27","2020-11-28","2020-11-29","2020-11-30","2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08","2020-12-09","2020-12-10","2020-12-11","2020-12-12","2020-12-13","2020-12-14","2020-12-15","2020-12-16","2020-12-17","2020-12-18","2020-12-19","2020-12-20","2020-12-21","2020-12-22","2020-12-23","2020-12-24","2020-12-25","2020-12-26","2020-12-27","2020-12-28","2020-12-29","2020-12-30","2020-12-31","2021-01-01","2021-01-02","2021-01-03","2021-01-04","2021-01-05","2021-01-06","2021-01-07","2021-01-08","2021-01-09","2021-01-10","2021-01-11","2021-01-12","2021-01-13","2021-01-14","2021-01-15","2021-01-16","2021-01-17","2021-01-18","2021-01-19","2021-01-20","2021-01-21","2021-01-22","2021-01-23","2021-01-24","2021-01-25","2021-01-26","2021-01-27","2021-01-28","2021-01-29","2021-01-30","2021-01-31"],
datasets: [
{label: 'Fälle',
type: 'bar',
backgroundColor: window.chartColors.blue,
yAxisID: 'first-y-axis',
data: [7,7,2,17,0,9,3,8,10,6,6,7,4,2,7,6,7,4,8,3,11,12,17,9,3,0,36,10,12,34,0,73,34,8,10,0,27,36,60,67,0,32,26,49,42,43,45,24,7,36,47,34,28,43,18,0,51,51,49,47,42,31,55,50,68,43,0,73,18,32,47,59,40,42,0,12,34,75,37,98,53,92,19,17,79,62,92,53,113,32,41,100,121,58,56,49,20,47,118,116,82,15,36,25,28,104,77,62,132,69,38,32,93,133,71,71,70,38,50,102,97,141,106,110,29,44,109,73,62,104,65,40]},
{label: '7-Tg. Inzidenz',
type: 'line',
fill: false,
pointBackgroundColor: 'orange',
borderColor: 'orange',
yAxisID: 'first-y-axis',
data: [10.4,12.0,11.4,14.6,12.0213981,14.2,14.2,14.6,15.5,16.8,13.3,15.5,13.9,13.6,13.3,12.0,12.3,11.7,12.0,11.7,14.6,16.1,19.6,20.2,19.9,17.399392,27.8,27.5,27.5,32.9,30.0534952,52.2,63.0,54.1,54.1,50.3000604,48.1,59.5,55.4,65.8,63.2705163,70.2,78.5,85.4,87.3,81.9,75.0,82.6,74.7,77.8,77.2,74.7,69.9,69.3,67.4,65.1686317,69.9,71.2,75.9,81.9,81.6,85.7,103.1,102.8,108.2,106.3,91.425896,101.2,97.1,89.8,88.9,86.0,85.1,98.4,75.2919143,73.4,74.0,82.9,75.9,94.3,97.8,126.9,129.1,123.7,125.0,132.9,131.0,131.0,137.6,141.7,149.3,156.0,174.6,163.9,164.8,144.6,140.8,142.7,148.4,146.8,154.4,141.4,137.3,138.9,132.9,128.4,116.1,109.8,146.8,157.2,161.3,162.6,159.1,176.8,179.7,160.4,160.7,160.7,166.4,169.2,157.9,180.0,191.1,203.7,200.9,199.0,201.2,193.6,168.6,168.0,153.7,157.2]},
{label: '7-Tg. Inz. veröff.',
type: 'line',
fill: false,
pointBackgroundColor: 'rgba(255,165,0,0.5)',
borderColor: 'rgba(255,165,0,0.5)',
borderWidth: 2,
pointRadius: 2,
yAxisID: 'first-y-axis',
data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,86.0,87.9,97.8,89.8,107.6,109.8,127.5,129.7,124.3,125.0,113.3,129.4,112.6,83.5,77.5,72.1,155.6,169.6,164.8,168.0,149.3,144.3,143.9,135.7,146.2,152.2,140.8,136.7,137.3,132.9,128.4,115.2,107.6,142.0,157.2,161.3,152.5,159.1,177.2,179.4,160.7,159.4,162.3,164.8,168.0,153.4,178.7,188.9,202.1,199.0,183.2,194.2,191.1,168.3,167.4,153.7,157.2]},
{label: 'Hospitalisierung',
type: 'bar',
backgroundColor: window.chartColors.red,
yAxisID: 'first-y-axis',
data: [0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,-1,2,0,0,0,0,0,0,0,0,0,3,2,0,1,0,5,0,1,1,0,1,2,5,2,0,2,1,2,5,3,0,0,3,4,2,3,3,1,1,0,6,1,2,2,2,0,1,2,6,4,0,6,4,4,3,3,2,5,0,2,4,1,6,7,4,1,0,9,5,0,7,0,0,0,0,25,8,6,2,3,3,5,15,9,4,6,10,3,4,8,13,13,6,3,4,0,26,12,8,7,6,2,2,13,7,11,12,2,8,0,16,12,10,7,5,4]},
{label: 'Hospitalisierung (∑ 14-Tg.)',
type: 'line',
pointRadius: 0,
fill: false,
borderColor: 'rgba(0,128,0,0.5)',
borderWidth: 2,
yAxisID: 'first-y-axis',
data: [2,2,2,2,2,2,3,4,3,2,2,2,3,4,5,4,6,6,6,6,5,4,4,4,4,4,6,7,6,8,6,11,11,12,13,13,14,16,21,23,20,20,21,22,27,25,25,24,26,30,31,32,30,29,30,28,33,32,29,28,30,30,28,26,30,31,28,33,36,40,37,39,39,42,40,42,45,44,44,47,51,46,42,47,49,46,51,46,46,44,40,64,66,65,63,65,68,64,74,83,80,86,96,99,103,86,91,98,102,102,103,98,109,112,116,117,113,112,110,115,109,107,113,112,116,116,106,106,108,108,107,109]},
{label: 'Todesfälle',
type: 'bar',
backgroundColor: 'black',
yAxisID: 'first-y-axis',
data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,2,0,0,2,1,0,0,0,1,0,2,1,0,0,0,1,0,7,0,0,0,0,4,0,0,2,0,2,3,4,3,0,6,0,2,10,4,5,1,2,5,1,0,7,2,5,6,1,0,5,2,1,5,7,1,3,0,10,5,3,3,8,5]},
{label: 'Todesfälle je Woche',
type: 'line',
fill: false,
spanGaps: true,
borderColor: 'rgba(128,128,128,1)',
borderWidth: 2,
pointRadius: 2,
yAxisID: 'first-y-axis',
data: [,,,,,0,,,,,,,0,,,,,,,0,,,,,,,0,,,,,,,0,,,,,,,1,,,,,,,0,,,,,,,1,,,,,,,0,,,,,,,2,,,,,,,5,,,,,,,4,,,,,,,8,,,,,,,8,,,,,,,18,,,,,,,28,,,,,,,21,,,,,,,24,,,,,,,34]},
]};

