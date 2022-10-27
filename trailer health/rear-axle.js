google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Rear');

      data.addRows([
        [0, 0],   [1, 10],  [2, 15],  [3, 17],  [4, 18],  [5, 39],
        [6, 11],  [7, 27],  [8, 33],  [9, 50],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 37], [16, 24], [17, 38],
        [18, 42], [19, 12], [20, 12], [21, 35], [22, 56], [23, 67],
        [24, 50], [25, 40], [26, 32], [27, 15], [28, 10], [29, 30],
        [30, 45], [31, 60], [32, 65], [33, 68], [34, 62], [35, 55],
        [36, 42], [37, 38], [38, 35], [39, 31], [40, 24], [41, 35],
        [42, 43], [43, 46], [44, 57], [45, 59], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 61], [55, 62], [56, 73], [57, 78], [58, 60], [59, 58],
        [60, 44], [61, 40], [62, 35], [63, 27], [64, 68], [65, 69]
        
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Temperature (in deg C)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('r-axle'));

      chart.draw(data, options);
    }