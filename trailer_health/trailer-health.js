// front-axle
google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(frontaxle);

function frontaxle() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Front');

  data.addRows([
    [0, 0], [1, 10], [2, 15], [3, 17], [4, 18], [5, 9],
    [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35],
    [12, 30], [13, 40], [14, 42], [15, 47], [16, 24], [17, 38],
    [18, 42], [19, 12], [20, 12], [21, 35], [22, 56], [23, 67],
    [24, 50], [25, 40], [26, 32], [27, 15], [28, 10], [29, 30],
    [30, 45], [31, 60], [32, 75], [33, 78], [34, 62], [35, 55],
    [36, 32], [37, 38], [38, 15], [39, 21], [40, 34], [41, 65],
    [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
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

  var chart = new google.visualization.LineChart(document.getElementById('f-axle'));

  chart.draw(data, options);
}

// front-axle ends

 // frontbrake

 google.charts.load('current', {packages: ['corechart', 'line']});
 google.charts.setOnLoadCallback(frontbrake);
 
 function frontbrake() {
 
       var data = new google.visualization.DataTable();
       data.addColumn('number', 'X');
       data.addColumn('number', 'Front');
 
       data.addRows([
         [0, 0],   [1, 10],  [2, 15],  [3, 17],  [4, 18],  [5, 9],
         [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
         [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
         [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
         [24, 60], [25, 70], [26, 82], [27, 91], [28, 110], [29, 130],
         [30, 55], [31, 180], [32, 201], [33, 189], [34, 162], [35, 125],
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
 
       var chart = new google.visualization.LineChart(document.getElementById('front'));
 
       chart.draw(data, options);
     }
// frontbrake ends

// rearaxle


google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(rearaxle);

function rearaxle() {

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
    // rearaxle ends

    // rearbrake
    google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(rearbrake);

function rearbrake() {

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