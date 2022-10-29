var msg = "Hello";  
const plugin = ({widgets, simulator}) => {
  var msg = "Hello World";
  widgets.register("test_plan",function(box,msg){
    console.log(msg);
    console.log(box);
  });
  
}

export default plugin
