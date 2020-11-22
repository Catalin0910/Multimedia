
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
context.fillStyle = '#FF4124';
context.fillRect(45,25,100,50);


var canvas1 = document.getElementById('myCanvas1');
var context1 = canvas1.getContext("2d");
context1.fillStyle = '#808080';
context1.fillRect(45,25,100,50);


function Click() {
    var canvas = document.getElementById("myCanvas1");
    var ctx = canvas.getContext("2d");
    ctx.font = "10px Comic Sans MS";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

}

var effectButton1;
var paintButton;
var canvas2;
var context2;


function init() {
  var image = document.getElementById('a');
  effectButton1 = document.getElementById('EffectButton');
  paintButton = document.getElementById('PaintButton');
  canvas2 = document.getElementById('Canvas')
  context2 = canvas2.getContext('2d');
  canvas2.width = image.width;
  canvas2.height = image.height;

  paintButton.addEventListener('click', function () {
    drawImage(image);
  });
  effectButton1.addEventListener('click', addEffect);
}


function drawImage(image) {
  context2.drawImage(image, 0, 0);
}

function addEffect() {
     var imageData = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    changeToWhite(imageData.data);
    context2.putImageData(imageData, 0, 0);
}

function changeToWhite(data) {
  for (var i = 0; i < data.length; i++ ) {
    data[i] = 600;
  }
}

window.addEventListener('load', init);

function display() {
    document.getElementById("pozaNormala").style.filter = "brightness(500%)";
}



