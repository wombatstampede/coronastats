var chdata={ type:'line',
last_update: '2021-01-01',
last_dk_data: '2020-12-30',
data: {
labels: ["2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17","2020-10-18","2020-10-19","2020-10-20","2020-10-21","2020-10-22","2020-10-23","2020-10-24","2020-10-25","2020-10-26","2020-10-27","2020-10-28","2020-10-29","2020-10-30","2020-10-31","2020-11-01","2020-11-02","2020-11-03","2020-11-04","2020-11-05","2020-11-06","2020-11-07","2020-11-08","2020-11-09","2020-11-10","2020-11-11","2020-11-12","2020-11-13","2020-11-14","2020-11-15","2020-11-16","2020-11-17","2020-11-18","2020-11-19","2020-11-20","2020-11-21","2020-11-22","2020-11-23","2020-11-24","2020-11-25","2020-11-26","2020-11-27","2020-11-28","2020-11-29","2020-11-30","2020-12-01","2020-12-02","2020-12-03","2020-12-04","2020-12-05","2020-12-06","2020-12-07","2020-12-08","2020-12-09","2020-12-10","2020-12-11","2020-12-12","2020-12-13","2020-12-14","2020-12-15","2020-12-16","2020-12-17","2020-12-18","2020-12-19","2020-12-20","2020-12-21","2020-12-22","2020-12-23","2020-12-24","2020-12-25","2020-12-26","2020-12-27","2020-12-28","2020-12-29","2020-12-30","2020-12-31","2021-01-01"],
datasets: [
{label: 'Hovedstaden',
backgroundColor: window.chartColors.red,
borderColor: window.chartColors.red,
fill: false,
data: [59.5,59.9,57.8,55.2,54.2,52.1,54.4,55.9,58.0,63.9,71.0,79.1,87.9,94.9,107.3,117.1,126.2,137.6,145.8,159.5,170.2,173.1,179.4,185.9,187.2,195.7,196.2,198.9,199.3,197.8,191.2,185.0,178.5,173.9,166.4,166.7,169.9,174.6,180.1,183.9,189.2,197.0,202.3,204.0,206.1,209.4,211.5,215.9,220.1,222.6,230.3,236.7,245.3,254.7,270.0,289.2,310.9,330.6,349.2,372.7,413.1,451.6,487.5,529.3,565.6,603.4,645.9,671.0,695.0,721.6,717.4,705.7,683.5,644.4,615.2,572.9,530.9,477.5,439.4,440.4,431.9,424.2,405.4,389.9]},
{label: 'Midtjylland',
backgroundColor: window.chartColors.orange,
borderColor: window.chartColors.orange,
fill: false,
data: [55.0,56.2,57.5,58.1,59.6,58.6,54.4,52.5,51.6,50.7,51.0,52.0,59.3,69.6,72.6,77.8,83.0,89.4,91.2,94.5,94.1,93.0,94.6,96.3,97.5,100.7,99.0,99.3,102.7,100.3,101.0,99.6,99.7,100.5,102.9,107.9,113.2,116.9,120.7,127.8,133.2,135.9,135.3,134.0,130.7,129.8,121.6,116.9,111.9,112.1,113.4,115.9,115.3,125.1,129.4,136.3,142.7,155.4,159.3,168.3,177.1,193.9,212.8,232.7,246.4,267.4,280.4,303.8,324.6,336.9,337.5,334.3,332.2,325.4,307.2,282.5,265.4,238.3,213.8,209.5,211.7,216.0,220.3,217.4]},
{label: 'Nordjylland',
backgroundColor: window.chartColors.green,
borderColor: window.chartColors.green,
fill: false,
data: [48.6,49.8,50.0,50.0,47.5,51.5,53.7,50.9,51.9,53.6,55.9,60.5,65.4,70.5,82.2,93.7,104.2,115.1,125.3,136.1,140.2,143.1,142.2,140.9,138.7,135.9,134.1,128.5,122.4,113.6,108.8,99.7,92.2,79.3,77.1,74.4,77.3,76.8,82.2,79.8,80.5,77.5,73.6,71.4,66.4,60.5,56.6,52.7,51.7,51.7,47.3,45.4,45.3,45.9,46.8,49.2,50.7,55.3,60.0,65.6,76.8,92.4,106.8,125.9,136.1,154.4,163.4,178.3,190.4,204.1,210.0,224.8,233.2,241.0,241.7,247.0,251.6,240.0,226.1,220.5,220.9,231.7,222.2,215.4]},
{label: 'Syddanmark',
backgroundColor: window.chartColors.blue,
borderColor: window.chartColors.blue,
fill: false,
data: [30.4,32.5,30.0,29.3,30.3,33.6,35.1,37.5,37.9,41.2,44.8,48.2,50.0,53.3,57.1,60.6,62.9,67.5,71.8,73.8,79.6,83.1,83.4,83.6,83.7,83.1,86.4,85.0,83.2,83.6,83.9,80.9,81.2,76.5,75.9,75.4,78.3,84.9,89.0,92.0,101.1,107.3,113.6,119.0,117.2,118.9,120.7,119.6,115.9,112.4,110.8,109.0,106.1,103.8,102.6,102.9,108.6,109.8,111.1,117.2,126.1,135.1,145.9,147.8,155.8,166.2,173.2,181.9,198.6,213.9,230.3,233.7,240.5,242.5,244.7,229.7,222.1,200.2,189.4,185.8,180.8,177.7,178.1,172.6]},
{label: 'Sjælland',
backgroundColor: window.chartColors.purple,
borderColor: window.chartColors.purple,
fill: false,
data: [29.4,28.1,27.2,27.0,30.6,28.7,28.5,30.1,32.2,32.6,33.4,33.2,38.7,43.5,47.8,51.5,58.8,64.0,67.6,75.0,82.6,87.9,96.1,98.4,99.0,109.0,110.5,114.2,116.4,116.0,116.8,117.5,109.9,110.2,108.2,105.8,106.9,105.5,107.7,110.7,109.7,109.2,111.5,111.8,112.7,111.1,111.1,112.4,114.6,117.8,115.0,119.2,124.9,132.1,138.8,150.5,160.6,176.1,190.6,206.2,227.4,258.3,278.3,299.5,327.5,344.8,356.7,381.7,398.6,428.4,444.7,442.2,439.4,442.2,430.0,412.1,383.5,334.6,302.4,309.3,300.7,307.4,305.4,311.5]},
{label: 'Deutschland',
backgroundColor: window.chartColors.grey,
borderColor: window.chartColors.grey,
spanGaps: true,
fill: false,
data: [,,,,24.1,,,,,,,39.6,,,,,,,67.8,,,,,,,107.6,,,,,,,140.9,,,,,,,154.4,,,,,,,154.9,,,,,,,152.1,,,,,,,153.3,,,,,,,170.6,,,,,,,196.9,,,,,,,189.6,,,,]},
{label: 'Schleswig-Holstein',
backgroundColor: '#0000AF',
borderColor: '#0000AF',
fill: false,
data: [9.3,9.4,9.4,9.5,9.7,10.1,10.4,10.9,11.6,12.6,13.1,13.3,15.4,16.7,18.5,21.3,23.7,25.8,26.8,28.4,32.1,35.6,38.6,42.2,45.4,47.4,47.7,49.3,50.8,51.3,52.0,53.7,55.0,56.5,55.2,55.5,55.1,54.8,53.9,53.1,52.3,52.7,52.5,52.0,52.7,50.8,50.1,48.5,48.7,48.4,48.5,47.5,47.1,46.7,46.4,45.7,46.5,46.9,46.9,49.0,49.1,49.5,51.8,53.1,56.9,60.4,65.1,66.2,68.0,73.1,77.1,81.2,86.0,89.1,90.4,92.1,96.0,101.7,100.1,95.8,91.6,92.4,93.4,94.7,93.8,91.3]}
]}};

