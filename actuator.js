//     const userAction = async () => {
//   const response = await fetch('http://example.com/movies.json');
//   const myJson = await response.json(); //extract JSON from the http response
//   // do something with myJson
// }
var arr = [];
var i = 0;
//api call template
/*
const userAction = async () => {
  const response = await fetch('http://example.com/movies.json');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}
*/

var s1 = setInterval(function(){
  //api call
  if(i%2==0){
    arr[i] = false;
  }
  else{
    arr[i] = true;
  }

  var data = arr[i];
  document.querySelector('input[name= "toggle"]').checked = data;
  i++;
},3000);
