window.onload = function () {
    var myImg1 = document.getElementById('poza1');
    var myImg2 = document.getElementById('poza2');
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");

    // width and height
    var w = myImg1.width;
    var h = myImg1.height;

    myCanvas.width = w;
    myCanvas.height = h;

    //ctx.globalCOmpositeOperation = "xor";

    var pixels = 4 * w * h;
    ctx.drawImage(myImg1, 0, 0);
    ctx.globalCompositeOperation='red'; //-- pentru cerinta 2 trebuie decomantat asta
    var image1 = ctx.getImageData(0, 0, w, h);
    var imageData1 = image1.data;
    ctx.drawImage(myImg2, 0, 0);
   
    var image2 = ctx.getImageData(0, 0, w, h);
    var imageData2 = image2.data;

    while (pixels--) {
       imageData1[pixels] = imageData1[pixels] * 0.8 + imageData2[pixels] * 0.3;
    }
    image1.data = image2;
    ctx.putImageData(image1, 0, 0);
   
    //document.getElementById("poza2").style.filter = "brightness(500%)";

    // var i;
    // for (i = 0; i < imageData1.lenght; i += 4) {
    //     image1.data[i] = 255 - image1.data[i];
    //     image1.data[i+1] = 255 - image1.data[i+1];
    //     image1.data[i+2] = 255 - image1.data[i+2];
    //     image1.data[i+3] = 255;
    //     }
    //     ctx.putImageData(image1, 0, 0);
        
}
