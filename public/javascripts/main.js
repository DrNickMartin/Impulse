// Main entry point for game code
var globals = require('./globals.js');
var Ship = require('./ship.js');
var key_bind = require('./key_bindings.js')
var Background = require('./background.js')

var canvas = document.getElementById("game_window").getContext('2d');
var ship = new Ship(canvas.canvas.width/2,canvas.canvas.height/2);
var bground = new Background();
var t0 = undefined;
var dt;

ship = key_bind(ship);

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame
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
  ship.update(dt);
}

function draw() {
  canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  bground.draw(canvas);
  ship.draw(canvas);
}

(function animloop(){
  render();
  requestAnimFrame(animloop);
})();
