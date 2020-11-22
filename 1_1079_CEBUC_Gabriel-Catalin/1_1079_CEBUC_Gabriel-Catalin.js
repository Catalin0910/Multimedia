var canvasFata = document.getElementById("fata-canvas");
var canvasSpate = document.getElementById("spate-canvas");
var ctxFata = canvasFata.getContext("2d");
var ctxSpate = canvasSpate.getContext("2d");
var canvasWidth = document.getElementById("canvas-width");
var canvasHeight = document.getElementById("canvas-height");
var canvasPozitie;
var mouseX;
var mouseY;
var mouseXl = document.getElementById("mouseX");
var mouseYl = document.getElementById("mouseY");
var tools = [];
var sizes = [];
var proces = false;
var operatii = [];
tools.pencil = document.getElementById("pencil");
tools.eraser = document.getElementById("eraser");
sizes.small = document.getElementById("small");
sizes.middle = document.getElementById("middle");
sizes.big = document.getElementById("big");
var eraserSize = 8;
var eraserCurosr = "url('media/small_eraser.jpg'), auto";
var color1 = [
  "#222f3e",
  "#f368e0",
  "#ee5253",
  "#0abde3",
  "#222f3e",
  "#5f27cd",
  "#6ach23",
  "#6f27cd",
];
var canvasCleare = document.getElementById("clear-canvas");
var fileImg = document.getElementById("image-file");
var proprietati = document.getElementById("propietati");
var imgWidth = document.getElementById("img-width");
var imgHeigth = document.getElementById("img-height");

var startX = 100,
  startY = 100;

window.onload = function () {
  canvasPozitie = canvasSpate.getBoundingClientRect();
};

canvasWidth.onchange = function () {
  canvasFata.width = canvasWidth.value;
  canvasSpate.width = canvasWidth.value;
};
canvasHeight.onchange = function () {
  canvasFata.height = canvasHeight.value;
  canvasSpate.height = canvasHeight.value;
};

canvasFata.onmousemove = function (e) {
  mouseX = e.clientX - canvasPozitie.left;
  mouseY = e.clientY - canvasPozitie.top;
  mouseXl.innerHTML = mouseX;
  mouseYl.innerHTML = mouseY;
};

canvasCleare.onclick = function () {
  canvasSpate.width = canvasSpate.width;
  canvasFata.width = canvasFata.width;
};

addAllHandler(tools, "tool-active");
addAllHandler(sizes, "size-active");

function addAllHandler(arr, className) {
  for (var item in arr) {
    arr[item].onmousedown = addHandler(arr[item], arr, className);
  }
}

function addHandler(element, arr, className) {
  return function () {
    removeAllClasses(arr);
    element.setAttribute("class", className);
  };
}

function removeAllClasses(arr) {
  for (var item in arr) {
    arr[item].removeAttribute("class");
  }
}
sizes.small.onclick = function () {
  ctxSpate.lineWidth = 1;
  eraserSize = 8;
  eraserCurosr = "url('media/small_eraser.jpg'), auto";
};
sizes.middle.onclick = function () {
  ctxSpate.lineWidth = 6;
  eraserSize = 16;
  eraserCurosr = "url('media/medium_eraser.jpg'), auto";
};
sizes.big.onclick = function () {
  ctxSpate.lineWidth = 20;
  eraserSize = 32;
  eraserCurosr = "url('media/large_eraser.jpg'), auto";
};

operatii["mousedown"] = function () {
  proces = true;
  ctxSpate.beginPath();
};
operatii["mouseup"] = function () {
  proces = false;
};
canvasFata.addEventListener("mousedown", function () {
  operatii["mousedown"]();
});

canvasFata.addEventListener("mouseup", function () {
  operatii["mouseup"]();
});

canvasFata.addEventListener("mousemove", function () {
  operatii["mousemove"]();
});

tools.pencil.onclick = function () {
  canvasFata.style.cursor = "pointer";
  operatii["mousemove"] = function () {
    if (proces) {
      ctxSpate.lineTo(mouseX, mouseY);
      ctxSpate.stroke();
    }
  };
};

tools.eraser.onclick = function () {
  operatii["mousemove"] = function () {
    canvasFata.style.cursor = eraserCurosr;
    if (proces) {
      ctxSpate.clearRect(mouseX, mouseY, eraserSize, eraserSize);
    }
  };
};

color.onchange = function (e) {
  ctxSpate.strokeStyle = e.srcElement.value;
};

// fileImg.onchange = function () {
//   var file = fileImg.files[0];
//   var reader = new FileReader();
//   reader.onload = function (event) {
//     var dataUrl = event.target.result;
//     img = new Image();
//     img.onload = function () {
//       ctxFata.strokeRect(startX, startY, img.width, img.height);
//       ctxFata.drawImage(img, startX, startY);
//       operatii["mousemove"] = function () {
//         if (proces) {
//           canvasFata.width = canvasFata.width;
//           ctxFata.strokeRect(mouseX, mouseY, imgWidth.value, imgHeigth.value);
//           ctxFata.drawImage(
//             img,
//             mouseX,
//             mouseY,
//             imgWidth.value,
//             imgHeigth.value
//           );
//         }
//       };
//       operatii["mouseup"] = function () {
//         proprietati.style.display = "none";
//         canvasFata.width = canvasFata.width;
//         proces = false;
//         ctxSpate.drawImage(
//           img,
//           mouseX,
//           mouseY,
//           imgWidth.value,
//           imgHeigth.value
//         );
//         operatii["mousemove"] = undefined;
//         operatii["mouseup"] = function () {
//           proces = false;
//         };
//       };
//     };
//     img.src = dataUrl;
//     proprietati.style.display = "block";
//     imgWidth.value = img.width;
//     imgHeigth.value = img.height;
//   };
//   reader.readAsDataURL(file);
// };

// imgWidth.addEventListener("change", changeImgSize);
// imgHeigth.addEventListener("change", changeImgSize);

// function changeImgSize() {
//   canvasFata.width = canvasFata.width;

//   ctxFata.strokeRect(startX, startY, imgWidth.value, imgHeigth.value);
//   ctxFata.drawImage(img, startX, startY, imgWidth.value, imgHeigth.value);
// }

function save_image() {
  var canvas = document.getElementById("spate-canvas");
  image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  var link = document.createElement("a");
  link.download = "image.png";
  link.href = image;
  link.click();
}

var i = 0;
document.querySelector("button").addEventListener("click", function () {
  i = i < color1.length ? ++i : 0;
  document.querySelector("canvas").style.background = color1[i];
});
