import Chart from './chart.js/auto';
const plugin = ({ widgets, simulator }) => {



    widgets.register("graph", (box) => {
        box.injectHTML(`<div style="height: 400px; width: 400px">
        <canvas id="myChart"></canvas>
    </div>`)
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'Speed Chart',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };
        const config = {
            type: 'line',
            data: data,
            options: {}
        };
        const myChart = new Chart(
        document.getElementById('myChart'),
            config);


        console.log("ok");
    })
};
export default plugin;

