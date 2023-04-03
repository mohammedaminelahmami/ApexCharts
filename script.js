// Consultant "Bar chart"
var options = {
    series: [
        {
            data: [
                {
                    x: 'Adam',
                    y: 379,
                },
                {
                    x: 'Ahmed',
                    y: 650,
                },
                {
                    x: 'Dary',
                    y: 2100,
                },
                {
                    x: 'Diana',
                    y: 1200,
                },
                {
                    x: 'Habib',
                    y: 332,
                },
                {
                    x: 'Harry',
                    y: 2000,
                },
                {
                    x: 'Hicham',
                    y: 1200,
                },
                {
                    x: 'Jhon',
                    y: 1400,
                },
                {
                    x: 'Jaad',
                    y: 329,
                },
                {
                    x: 'Kenza',
                    y: 411,
                },
                {
                    x: 'Khalil',
                    y: 1500,
                },
                {
                    x: 'Mohamed',
                    y: 1800,
                }
            ]
        }
    ],
    chart: {
        height: 190,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '55%',
        },
    },
    colors: ['#6815EF'],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        markers: {
            fillColors: ['#00E396', '#775DD0']
        }
    }
};

var chart = new ApexCharts(document.querySelector("#consultantChart"), options);
chart.render();

// Area code chart "Radar chart"
var options = {
    series: [{
        name: 'Series 1',
        data: [210, 200, 80, 180, 200, 180],
    }],
    chart: {
        height: 240,
        type: 'radar',
        toolbar: {
            show: false
        }
    },
    title: {
        text: 'Area code',
        align: 'center'
    },
    xaxis: {
        categories: ['A1', 'A2', 'A4', 'A7', 'B12', 'B13', 'B18', 'C8']
    }
};

var chart = new ApexCharts(document.querySelector("#areacode"), options);
chart.render();

// Training Models chart "timeline chart"
var options = {
    series: [48, 17, 2.47, 139],
    labels: ['BE', 'CNI', 'FC', 'GK'],
    chart: {
        type: 'donut',
    },
    title: {
        text: 'Training Models',
    },
    colors: ['#37D6C9', '#DD758C', '#CCCBD1', '#6815EF'],
    legend: {
        show: true,
        markers: {
            fillColors: ['#00E396', '#775DD0', '#FF4560', '#FFB64D']
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#trainingmodels"), options);
chart.render();

// linechart chart "Line chart"
var options = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
        height: 240,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var chart = new ApexCharts(document.querySelector("#linechart"), options);
chart.render();

// adver "Line chart"
var options = {
    series: [{
        name: 'Peter',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
        name: 'Johnny',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, {
        name: 'David',
        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    }],
    chart: {
        height: 240,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        }
    },
    stroke: {
        width: [5, 5, 4],
        curve: 'straight'
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    xaxis: {
    },
};

var chart = new ApexCharts(document.querySelector("#adver"), options);
chart.render();

// total sales "Bar with markers"
var options = {
    series: [
        {
            data: [
                {
                    x: '',
                    y: 12,
                },
                {
                    x: '',
                    y: 44,
                },
                {
                    x: '',
                    y: 54,
                },
                {
                    x: '',
                    y: 66,
                },
            ]
        }
    ],
    chart: {
        height: 285,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#6814EE', '#DD758C', '#DFBF65', '#15942F'],
    dataLabels: {
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals

            if (goals && goals.length) {
                return `${val} / ${goals[0].value}`
            }
            return val
        }
    },
    legend: {
        show: true,
        markers: {
            fillColors: ['#00E396', '#775DD0']
        }
    }
};

var chart = new ApexCharts(document.querySelector("#totalsales"), options);
chart.render();

// "reversed Bar chart"
 var options = {
          series: [{
          data: [400, 430, 448, 470, 540, 580, 690]
        }],
          chart: {
          type: 'bar',
          height: 285,
          toolbar: {
            show: false
          }
        },
        annotations: {
          xaxis: [{
            x: 500,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'X annotation',
            }
          }],
          yaxis: [{
            y: 'July',
            y2: 'September',
            label: {
              text: 'Y annotation'
            }
          }]
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        yaxis: {
          reversed: true,
          axisTicks: {
            show: true
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#reversedbarchart"), options);
        chart.render();
      