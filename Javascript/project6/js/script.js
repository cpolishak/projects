// === This part for the clock ===

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }



// === This portion for making the background change colors ===
var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']

var theBody = document.querySelector("body");
var i = 0;

function ChgBkg() {
  theBody.style.background = colors[i];
  if(i < colors.length) { 
    i++;
  } else {
    i = 0;
  };
  console.log(i);
}

setInterval(function() {
  ChgBkg(i); }, 1000);







// setInterval(function() {
//     theBody = colors[i];

//     if(i < colors.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     // setTimeout("function", time);
// }

// window.onload = changeImg;


