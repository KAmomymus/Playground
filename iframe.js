var msg = "Hello";  
const plugin = ({widgets, simulator}) => {
  const container = document.createElement("div");
  container.setAttribute("style", `height: 100%; width: 100%;`);
   container.innerText="Hello GoogleMaps....";
  var msg = "Hello World";
  let boxGlobal = null
  widgets.register("iframe_test",function(box,msg){
    console.log(msg);
    console.log(box);
    boxGlobal = box;
    boxGlobal.injectHTML('<iframe src="https://steady-babka-78452d.netlify.app/" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
  });
  
   
  
}

export default plugin
