console.log("javascript running");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
//document.getElementById("reset").addEventListener("click", resetGame);

var hotwire=[];
// var end = false;
var correctWire = [0,0,0,0,0];
// console.log(correctWire[0]+1);
var image = document.getElementsByTagName("img");
for (var i = 0; i < image.length; i++) {
  var picture = image[i];
  picture.addEventListener('click', cut);
};
//to make the decision for each wire

 for (var i = 0; i < 5; i++) {
   hotwire.push(Math.floor(Math.random() *2 ));
   console.log(hotwire);
}

function cut(e) {
  // if (!end) {

  var picture = e.target;
  if (picture.id === 'blue') {
    picture.src= 'img/cut-blue-wire.png';
    explode(0);
    correctWire[0] = 1;
    diffuse();


  } else if (picture.id === 'green') {
    picture.src= 'img/cut-green-wire.png';
    explode(1);
    correctWire[1] = 1;
    diffuse();


  } else if (picture.id === 'red') {
    picture.src= 'img/cut-red-wire.png';
    explode(2);
    correctWire[2] = 1;
    diffuse();


  } else if (picture.id === 'white') {
    picture.src= 'img/cut-white-wire.png';
    explode(3);
    correctWire[3] = 1;
    diffuse();

  } else if (picture.id === 'yellow') {
    picture.src= 'img/cut-yellow-wire.png';
    explode(4);
    correctWire[4] = 1;
    diffuse();
    // console.log(correctWire);
  }
  else {
    console.log("nothing happen");
  }
 // }
};



function explode(index){
  if (hotwire[index] === 1) {
  } else {
    var sevenFifty = setTimeout(explodeImage, 750);
  }
}

function diffuse() {
  var allSame = false
  // hotwire.filter()

  for (var i = 0; i < 5; i++) {
    if (hotwire[i] === correctWire[i]) {
      console.log(hotwire,correctWire);
      // console.log('all the wires are the same');
      allSame = true
    } else {
      allSame = false
    }
  }

  if (allSame === true) {
    var pictureexplode = document.getElementsByTagName('img')
    for (var i = 0; i < 5; i++) {
      pictureexplode[i].removeEventListener('click', cut);
    }
    clearInterval(GlobalTimer)
  }
}



var explodeImage = function() {
  // end = true;
  var pictureexplode = document.getElementsByTagName('img')
  for (var i = 0; i < pictureexplode.length; i++) {
    pictureexplode[i].removeEventListener('click', cut);
  }
  // picture.removeEventListener('click', cut);
  clearTimer();
  document.getElementsByTagName('body')[0].style.backgroundImage= "url('img/explosion.jpg')";

}



function startTimer() {
  var timeLeft = 30
  GlobalTimer = setInterval(function() {
         if (timeLeft===1) {
           explodeImage();
         }
    timeLeft--
    document.getElementById('timer').textContent = timeLeft
  }, 1000)
}


startTimer();

function clearTimer(){
  clearInterval(GlobalTimer);
}


var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function()
{
  location.reload();
});


});
