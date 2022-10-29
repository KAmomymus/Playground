var msg = "Hello";  
const plugin = ({widgets, simulator}) => {
  const container = document.createElement("div");
  container.setAttribute("style", `height: 100%; width: 100%;`);
   container.innerText="Hello GoogleMaps....";
  var msg = "Hello World";
  let boxGlobal = null
  widgets.register("google_map",function(box,msg){
    console.log(msg);
    console.log(box);
    boxGlobal = box;
    boxGlobal.injectHTML('<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2591437.395665666!2d8.68190111130662!3d50.6326788247785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!3m2!1d52.520006599999995!2d13.404954!4m5!1s0x4799db34c1ad8fd3%3A0x79d5c11c7791cfe4!2sStuttgart%2C%20Germany!3m2!1d48.7758459!2d9.1829321!5e0!3m2!1sen!2sin!4v1667068477003!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
  });
  
   
  
}

export default plugin
