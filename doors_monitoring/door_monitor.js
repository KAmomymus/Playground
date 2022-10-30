const plugin = ({ widgets, simulator, vehicle }) => {

    let statusDiv = null

    widgets.register("doorstatus", (box) => {
        const div = document.createElement("div")

        statusDiv = div

        div.innerHTML = `
        
        <div class="doors" style="height: 340px; width: 320px; font-family: Verdana, sans-serif; margin: auto 0; background-color: #e1e8ed;">

            <div class="heading" style="text-align: center;
            padding: 10px;">
                <h1>
                    DOOR STATUS

                </h1>
            </div>

            <div class="door-img" style="display: flex;
            justify-content: center;">
                <img src="assets/truck.png" alt="door" style="height: 150px;">
            </div>
            <div class="door-indicators" style=" display: flex;
            justify-content: space-around;
            margin: 30px;
            font-size: 25px;
            
            border: none;
            color: #8da44a;">

                <button id="l-glow" onclick=lCloseDoor() style="display: none;
                background: inherit;
                border: none;
                cursor: pointer;">

                    <span style="animation: neon4 1.5s ease-in-out infinite alternate; font-family: Verdana, sans-serif;
                    font-size: large;"> Left Door Open</span>
                </button>

                <button id="r-glow" onclick=rCloseDoor() style="display: none;
                background: inherit;
                border: none;
                cursor: pointer;">
                    <span style="animation: neon4 1.5s ease-in-out infinite alternate; font-family: Verdana, sans-serif;
                    font-size: large;"> Right Door Open</span>
                </button>
            </div>

        </div>
        `

        box.injectNode(div)

        var open = []
        var i = 0;
        var dOpen = setInterval(function () {
            if (i % 2 == 0) {
                open[i] = true;
                document.getElementById("l-glow").style.display = "block";
                document.getElementById("r-glow").style.display = "block"
            }
            else {
                open[i] = false;
                document.getElementById("l-glow").style.display = "none";
                document.getElementById("r-glow").style.display = "none"
            }


            i++;
        }, 5000);






        function lCloseDoor() {
            document.getElementById("l-glow").style.display = "none"
        }

        function rCloseDoor() {
            document.getElementById("r-glow").style.display = "none"

        }
    })


}

export default plugin