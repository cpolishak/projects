
// var i = 0;
// var images = [];
// // var time = 3000;

// images[0] = './images/1.jpg';
// images[1] = './images/2.jpg';
// images[2] = './images/3.jpg';
// images[3] = './images/4.jpg';
// images[4] = './images/5.jpg';
// images[5] = './images/6.jpg';

// function changeImg(){
//     document.slide.src = images[i];

//     if(i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;


var images = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg'];
var i = 0;
var img = document.getElementById('pic');

function forward() {
    i++;    
    if(i == images.length) {
        i = 0;
    }
    img.src = images[i]; 
}

function back() {
    i--;    
    if(i < 0) {
        i = images.length -1;
    }
    img.src = images[i]; 
}




// function back() {
//     // code
// }

// function change() {
//     var image = document.getElementById('pic');
//     img.src = "./images/2.jpg";

//     if(i < images.length - 1) {
//         i++;
//     }
// }


