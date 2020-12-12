var chdata={ 
	type: 'matrix',
	data: {
		datasets: [{
			label: 'Altersgruppeninzidenzen',
			data: [
			],
			backgroundColor: function(context) {
				return inzColor(context.dataset.data[context.dataIndex].v)
			},
			width: function(context) {
				const a = context.chart.chartArea
				if (!a) return 0
				return (a.right - a.left) / -766636.5
			},
			height: function(context) {
				const a = context.chart.chartArea
				if (!a) return 0
				return (a.bottom - a.top) / 7.5
			},
		}]
	},
	options: {
		legend: { display: false },
		scales: {
			xAxes: [{type: 'category', labels: [], ticks: {display: true},gridlines:{display:false}}],
			yAxes: [{type: 'category', labels: ["Alle","00-04","05-14","15-34","35-59","60-79","80+"], offset:true, ticks: {display: true},gridlines:{display:false}}],
		},
	}
}
var chdata2={ 
	type: 'horizontalBar',
	data: {
		datasets: [{
			label: 'Aktive Fälle ',
			data: [0,0,0,0,0,0,0
			],
		}]
	},
	options: {
		legend: { display: false },
		scales: {
			yAxes: [{type: 'category', labels: ["Alle","00-04","05-14","15-34","35-59","60-79","80+"]}],
		},
	}
}
