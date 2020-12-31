var chdata={
labels: ["2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17","2020-10-18","2020-10-19","2020-10-20","2020-10-21","2020-10-22","2020-10-23","2020-10-24","2020-10-25","2020-10-26","2020-10-27","2020-10-28","2020-10-29","2020-10-30","2020-10-31","2020-11-01","2020-11-02","2020-11-03","2020-11-04","2020-11-05","2020-11-06","2020-11-07","2020-11-08","2020-11-09","2020-11-10","2020-11-11","2020-11-12","2020-11-13","2020-11-14","2020-11-15","2020-11-16","2020-11-17","2020-11-18","2020-11-19","2020-11-20","2020-11-21","2020-11-22","2020-11-23","2020-11-24","2020-11-25","2020-11-26","2020-11-27","2020-11-28","2020-11-29","2020-11-30","2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08","2020-12-09","2020-12-10","2020-12-11","2020-12-12","2020-12-13","2020-12-14","2020-12-15","2020-12-16","2020-12-17","2020-12-18","2020-12-19","2020-12-20","2020-12-21","2020-12-22","2020-12-23","2020-12-24","2020-12-25","2020-12-26","2020-12-27","2020-12-28","2020-12-29","2020-12-30","2020-12-31"],
datasets: [
{label: 'Fälle',
type: 'bar',
backgroundColor: window.chartColors.blue,
data: [38,42,63,53,15,15,38,48,49,27,50,16,24,39,54,45,79,54,26,25,65,65,65,55,90,26,88,163,111,160,136,236,142,115,164,164,280,215,313,265,161,142,236,262,220,274,233,177,215,252,247,192,296,158,161,100,294,208,264,250,153,121,145,251,256,225,180,219,71,81,244,240,245,318,234,154,183,314,297,529,384,472,140,241,486,322,602,508,431,157,211,776,722,306,229,229,202,260,483,528,340]},
{label: '7-Tg. Inzidenz',
type: 'line',
pointBackgroundColor: 'orange',
borderColor: 'orange',
data: [7.23197027,7.88629139,8.74724023,9.40156135,9.33268544,9.16049567,9.09161977,9.4359993,9.67706498,8.43729865,8.33398478,8.36842274,8.67836432,8.71280227,8.91943,8.78167818,10.5724518,10.7102036,11.0545831,11.0890211,11.9844079,12.3632254,13.0519844,12.2254735,13.4652399,13.4652399,15.634831,19.0097504,20.5938963,23.8655019,26.6549761,31.6829174,35.67772,36.6075447,36.6419827,38.4671942,42.5997487,45.320347,47.9720694,52.2079377,53.7920836,53.0344486,55.5139813,54.8940981,55.0662879,53.7232077,52.6211932,53.1722004,55.6861711,56.2371783,55.720609,54.7563463,55.5139813,52.9311348,52.3801275,48.4197628,49.8661569,48.5230767,51.0026094,49.4184635,49.2462737,47.8687556,49.4184635,47.9376315,49.5906533,48.2475731,45.8369163,48.1098213,46.3879236,44.1838945,43.9428289,43.3918216,44.0805807,48.8330183,49.3495876,52.2079377,55.720609,58.1312658,60.0942291,69.874608,72.1475129,80.3437459,79.8616145,81.8590158,87.7823439,88.6432927,91.1572633,95.4275696,94.0156135,94.6010587,93.5679201,103.554927,117.330108,107.136474,97.5282848,90.5718181,92.121526,93.8089858,83.7186653,77.0377023,78.2085928]},
{label: 'Hospitalisierung',
type: 'bar',
backgroundColor: window.chartColors.red,
data: [1,2,7,1,0,0,2,1,3,1,1,0,4,3,1,1,4,2,0,3,5,1,1,2,4,0,9,10,8,9,12,7,5,6,7,7,11,10,11,6,3,9,19,20,15,15,5,7,13,15,21,13,17,8,17,13,23,10,15,9,7,7,13,16,26,19,12,14,15,10,12,8,10,14,3,5,24,13,26,20,14,12,6,26,27,16,20,18,8,13,13,43,35,23,17,21,26,25,46,33,33]},
{label: 'Hosp. (∑ 14-Tg.)',
type: 'line',
hidden: true,
borderColor: 'rgba(0,255,0,0.5)',
borderWidth: 1.5,
pointRadius: 0,
data: [12,12,20,22,22,22,22,23,23,21,22,21,24,26,26,25,22,23,23,26,29,29,27,28,31,31,36,43,50,58,66,71,76,79,81,87,97,105,112,118,112,111,122,133,136,144,144,145,151,159,169,172,178,180,194,198,202,192,192,186,188,188,188,189,194,200,195,201,199,196,185,183,178,183,179,177,188,185,185,186,188,186,177,193,208,216,226,230,235,243,232,262,271,274,277,286,306,305,324,341,354]},
{label: 'Aktuell im Krankenhaus',
type: 'line',
pointBackgroundColor: 'green',
borderColor: 'green',
data: [6,6,6,6,6,6,6,11,11,11,11,14,14,15,15,14,14,14,13,13,18,18,18,21,24,24,24,24,31,31,31,31,51,51,58,58,58,58,58,58,58,94,110,114,119,118,124,120,126,116,113,119,112,116,116,148,145,151,141,141,141,141,155,142,122,113,118,118,118,124,114,110,109,114,114,114,131,122,128,132,133,133,133,177,181,194,201,212,236,250,275,271,267,262,262,262,262,309,318,322,346]},
{label: 'Todesfälle',
type: 'bar',
backgroundColor: 'black',
data: [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,3,0,0,3,4,1,0,2,6,7,2,2,6,0,1,4,3,5,0,5,1,3,5,0,2,2,2,1,0,3,4,1,3,3,1,4,2,3,1,4,1,0,1,4,2,5,7,7,1,2,2,6,7,11,3,2,0,9,15,4,3,4,7,10,18,17,14,2]},
]};

