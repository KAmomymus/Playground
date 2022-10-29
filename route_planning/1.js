var msg = "Hello";  
const plugin = ({widgets, simulator}) => {
  const container = document.createElement("div");
  container.setAttribute("style", `height: 100%; width: 100%;`);
   container.innerText="Hello GoogleMaps....";
  var msg = "Hello World";
  let boxGlobal = null
  widgets.register("test_plans",function(box,msg){
    console.log(msg);
    console.log(box);
    boxGlobal = box;
    boxGlobal.injectHTML(container);
    return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
  });
  
   
  
}

export default plugin
