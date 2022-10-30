const plugin = ({ widgets, simulator, vehicle }) => {

    let statusDiv = null

    widgets.register("doorstatus", (box) => {
        const div = document.createElement("div")

        statusDiv = div

        div.innerHTML = `
        <style>
        .doors {
            height: 340px;
            width: 320px;
            /* border: 3px solid red; */
            font-family: Verdana, sans-serif;
            background-color: #e1e8ed;
            /* margin: 45px auto; */
        }
        
        .heading {
            text-align: center;
            padding: 10px;
        }
        
        .door-img {
            display: flex;
            justify-content: center;
        }
        
        .door-img img {
            height: 150px;
        }
        
        .door-indicators {
            display: flex;
            justify-content: space-around;
            margin: 30px;
            font-size: 25px;
            /* glowing */
            border: none;
            color: #8da44a;
            /* text-shadow: 1px 5px 4px rgba(0, 0, 0, .3), 0 0 2px rgba(174, 189, 56, 0.6), 0 0 10px rgba(174, 189, 56, 0.6), 0 0 20px rgba(174, 189, 56, 0.6), 0 0 30px rgba(174, 189, 56, 0.6), 0 0 40px #aebd38, 0 0 70px #aebd38, 0 0 80px #aebd38, 0 0 100px #aebd38; */
        }
        
        .door-indicators span {
            animation: neon4 1.5s ease-in-out infinite alternate;
        }
        
        @keyframes neon4 {
            from {
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #b6ff00, 0 0 70px #b6ff00, 0 0 80px #b6ff00, 0 0 100px #b6ff00, 0 0 150px #b6ff00;
            }
            to {
                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #b6ff00, 0 0 35px #b6ff00, 0 0 40px #b6ff00, 0 0 50px #b6ff00, 0 0 75px #b6ff00;
            }
        }
        
        #l-glow {
            display: none;
            background: inherit;
            border: none;
            cursor: pointer;
        }
        
        #l-glow span {
            font-family: Verdana, sans-serif;
            font-size: large;
        }
        
        #r-glow {
            display: none;
            background: inherit;
            border: none;
            cursor: pointer;
        }
        
        #r-glow span {
            font-family: Verdana, sans-serif;
            font-size: large;
        }    
        </style>
        <div class="doors">

            <div class="heading">
                <h1>
                    DOOR STATUS

                </h1>
            </div>

            <div class="door-img">
                <img src="assets/truck.png" alt="door">
            </div>
            <div class="door-indicators">

                <button id="l-glow" onclick=lCloseDoor()>

                    <span> Left Door Open</span>
                </button>

                <button id="r-glow" onclick=rCloseDoor()>
                    <span> Right Door Open</span>
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