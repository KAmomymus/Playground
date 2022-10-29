var msg = "Hello";  
const plugin = ({widgets, simulator}) => {
  var msg = "Hello World";
  widgets.register("test_plans",function(box,msg){
    console.log(msg);
    console.log(box);
  });
  
}

export default plugin
