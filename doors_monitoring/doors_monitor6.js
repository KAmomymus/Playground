const plugin = ({widgets, simulator, vehicle}) => {


let statusDiv = null

widgets.register("doorstatus4", (box) => {
        const div = document.createElement("div")
        div.style = "display: flex;height: 100%;width: 100%;"

        statusDiv = div

        div.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }    
        </style>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 30px 40px; justify-content: center; color: #808080; user-select: none; background-color: #f7f7f7;">
            <div style="display: flex; align-items:center; justify-content: center; margin-bottom: 30px;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 89.034 43.825 L 74.452 27.423 c -0.725 -0.816 -1.767 -1.284 -2.859 -1.284 H 58.256 v -0.448 c 0 -3.723 -3.029 -6.752 -6.751 -6.752 H 6.752 C 3.029 18.94 0 21.969 0 25.692 v 35.098 c 0 2.219 1.805 4.024 4.023 4.024 h 10.374 c 0.827 3.573 4.029 6.247 7.85 6.247 s 7.023 -2.674 7.85 -6.247 h 25.193 h 2.967 h 10.701 c 0.827 3.573 4.029 6.247 7.85 6.247 s 7.023 -2.674 7.85 -6.247 h 1.519 c 2.109 0 3.825 -1.715 3.825 -3.825 V 46.367 C 90 45.43 89.657 44.527 89.034 43.825 z M 85.213 43.993 H 67.936 c -0.336 0 -0.609 -0.274 -0.609 -0.61 v -7.785 c 0 -0.336 0.273 -0.609 0.609 -0.609 h 9.272 L 85.213 43.993 z M 6.752 21.907 h 44.753 c 2.086 0 3.784 1.698 3.784 3.785 v 0.448 v 22.322 H 2.967 v -22.77 C 2.967 23.605 4.665 21.907 6.752 21.907 z M 22.246 68.093 c -2.81 0 -5.097 -2.286 -5.097 -5.097 s 2.287 -5.097 5.097 -5.097 s 5.097 2.286 5.097 5.097 S 25.057 68.093 22.246 68.093 z M 30.218 61.846 c -0.561 -3.902 -3.917 -6.913 -7.972 -6.913 s -7.411 3.011 -7.972 6.913 H 4.023 c -0.582 0 -1.056 -0.474 -1.056 -1.057 v -9.361 h 52.322 v 10.417 H 30.218 z M 76.807 68.093 c -2.811 0 -5.097 -2.286 -5.097 -5.097 s 2.286 -5.097 5.097 -5.097 s 5.097 2.286 5.097 5.097 S 79.617 68.093 76.807 68.093 z M 86.175 61.846 h -1.397 c -0.561 -3.902 -3.917 -6.913 -7.972 -6.913 s -7.411 3.011 -7.972 6.913 H 58.256 v -32.74 h 13.337 c 0.244 0 0.478 0.105 0.641 0.288 l 2.335 2.627 h -6.634 c -1.972 0 -3.576 1.604 -3.576 3.576 v 7.785 c 0 1.972 1.604 3.577 3.576 3.577 h 19.097 v 14.029 C 87.033 61.462 86.649 61.846 86.175 61.846 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
            </svg>
            </div>
            <div style="font-size: .8em; line-height: 1.5em;">
                <div data-cell="Status" id="r-glow" ><strong>Right Door Open: </strong><span></span></div>
                <div data-cell="Distance" id="l-glow" ><strong>Left Door Open: </strong><span></span></div>
                
            </div>
        </div>
        `

        box.injectNode(div)
    })
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
  
  
  }

export default plugin
