var msg = "Hello";  
const plugin = ({widgets, simulator}) => {
  const container = document.createElement("div");
  container.setAttribute("style", `height: 100%; width: 100%;`);
  let boxGlobal = null
  widgets.register("front_axle",function(box,msg){
    console.log(msg);
    console.log(box);
    boxGlobal = box;
    boxGlobal.injectHTML('<iframe src="https://front-axle.netlify.app/" width="240" height="240" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
  });
  
   
  
}

export default plugin
