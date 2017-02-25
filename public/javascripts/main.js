var canvas = document.getElementById("game_window").getContext('2d');

var globals = require('./globals.js');
var Ship = require('./ship.js');
var ship = new Ship();

setInterval(function() {
  update();
  draw();
}, globals.dtms);

function update() {
  ship.update();
}

function draw() {
  canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  ship.draw(canvas);
}
