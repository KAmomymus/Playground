google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Rear');

      data.addRows([
        [0, 0],   [1, 10],  [2, 15],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 65], [22, 76], [23, 107],
        [24, 60], [25, 70], [26, 82], [27, 91], [28, 110], [29, 130],
        [30, 145], [31, 160], [32, 188], [33, 178], [34, 162], [35, 125],
        [36, 112], [37, 98], [38, 85], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 93], [57, 115], [58, 120], [59, 98],
        [60, 84], [61, 70], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 60]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Temperature (in deg C)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('rear'));

      chart.draw(data, options);
    }