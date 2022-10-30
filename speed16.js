const plugin = ({ widgets, simulator }) => {

    const container = document.createElement("div")
    container.setAttribute("script", `https://cdn.jsdelivr.net/npm/chart.js`)
    container.innerHTML = (`<div style="height: 400px; width: 400px">
    <canvas id="myChart"></canvas>
</div>`)

    widgets.register("graph", (box) => {




box.injectNode(container)

    //     box.injectHTML(` <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    //     <div style="height: 400px; width: 400px">
    //     <canvas id="myChart"></canvas>
    // </div>`)
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

