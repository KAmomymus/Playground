var open = []
var i = 0;
var dOpen = setInterval(function() {
    if(i%2==0){
        open[i] = true;
        document.getElementById("l-glow").style.display = "block";
        document.getElementById("r-glow").style.display = "block"
      }
      else{
        open[i] = false;
        document.getElementById("l-glow").style.display = "none";
        document.getElementById("r-glow").style.display = "none"
      }
    
      
      i++;
    },5000);






function lCloseDoor(){
    document.getElementById("l-glow").style.display = "none"
}
    
function rCloseDoor() {
    document.getElementById("r-glow").style.display = "none"

}

// current location

var cities = [
  {
      "name":  "Nuremberg",
      "longitude" : "11.0767° E",
      "latitude": "49.4521° N",
      "dist": "440 Km"

  },
  {
      "name":  "Hof",
      "longitude" : "11.9128° E",
      "latitude": "50.3135° N",
      "dist": "311 Km"
  },
  {
      "name":  "Naumburg",
      "longitude" : "11.8142° E",
      "latitude": "51.1520° N",
      "dist": "223 Km"
  },
  {
      "name":  "Leipzig",
      "longitude" : "12.3731° E",
      "latitude": "51.3397° N",
      "dist": "190 Km"
  },
  {
      "name":  "Postdam",
      "longitude" : "13.0645° E",
      "latitude": "52.3906° N",
      "dist": "35 Km"
  }
]

var j = 0;
var curLocation = setInterval(function(){
  var data = cities[j]
  
      document.getElementById('city-name').innerText = data.name;
      document.getElementById('long').innerText = data.longitude;
      document.getElementById('lat').innerText = data.latitude;
      document.getElementById('dist-left').innerText = data.dist;
      
 j++;
} , 5000);