function loadBlenderLoader() {
 var blenderLoader = document.createElement('script');
 blenderLoader.src = 'https://cdn.jsdelivr.net/gh/mrdoob/Three.js@r92/examples/js/loaders/GLTFLoader.js';

 three.blenderLoader = function () { init();}
 document.body.appendChild(blenderLoader);
}

function loadThree() {
 var three = document.createElement('script');
 three.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js';

 three.onload = function () { loadBlenderLoader();}
 document.body.appendChild(three);
}



function init(){
 alert('LOADED!'); 
}

var canvasContainer = document.createElement("div");
canvasContainer.style.display = 'block';
canvasContainer.style.width = '100%';
canvasContainer.style.textAlign = 'center';
canvasContainer.style.position = 'fixed';
canvasContainer.style.bottom = 0;
canvasContainer.innerHTML = "HELLO!";

document.body.appendChild(canvasContainer);
// var canvas = document.createElement("canvas");
// canvas.width = 400;
// canvas.height = 400;
