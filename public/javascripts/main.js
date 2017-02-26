// Main entry point for game code
var globals = require('./globals.js');
var Ship = require('./ship.js');
var key_bind = require('./key_bindings.js');
var Background = require('./background.js');
var ImageCache = require('./image_cache.js');
var request;

var canvas = document.getElementById("game_window").getContext('2d');
canvas.canvas.width = globals.canvas_width;
canvas.canvas.height = globals.canvas_height;
document.getElementById("start").addEventListener("click", animloop);
var ship = new Ship(canvas.canvas.width/2,canvas.canvas.height/2);
var bground = new Background();
var terr_img = new ImageCache('./images/terrain.png');
var t0 = undefined;
var dt;

ship = key_bind(ship);

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame
})();

window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame
})();

function render(t1) {
  t1 = Date.now()/1000;
  if(t0==undefined) { t0=t1; }
  dt = (t1-t0);
  t0 = t1;
  update(dt);
  draw();
}

function update(dt) {
  if(!ship.isAlive()){
    cancelRequestAnimFrame(request);
    location.reload(true);
  }
  ship.update(dt);
}

function draw() {
  canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  bground.draw(canvas);
  ship.draw(canvas);
}

function animloop(){
  render();
  request = requestAnimFrame(animloop);
};
