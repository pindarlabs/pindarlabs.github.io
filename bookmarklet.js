var 3 = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//pindarlabs.github.io/bookmarklet.js';void(0);

var THREE_LOADED = false;
var BLENDER_LOADER_LOADED = false;
var three = document.createElement('script');
three.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js';

three.onload = function () { THREE_LOADER = true;}

var blenderLoader = document.createElement('script');
blenderLoader.src = 'https://cdn.jsdelivr.net/gh/mrdoob/Three.js@r92/examples/js/loaders/GLTFLoader.js';

three.blenderLoader = function () { BLENDER_LOADER_LOADE = true;}

document.body.appendChild(three);
document.body.appendChild(blenderLoader);

function init(){
 alert('LOADED!'); 
}

var loaderTimer = setInterval(() = > {
  if (THREE_LOADED == true && BLENDER_LOADER_LOADED == true) {
    init();
  }
  
}, 100);
