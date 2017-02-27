// Main entry point for game code
var globals = require('./globals.js');
var Ship = require('./ship.js');
var key_bind = require('./key_bindings.js');
var Background = require('./background.js');
var ImageCache = require('./image_cache.js');
var Terrain = require('./terrain.js');
var Enemy = require('./enemy.js');
var $ = require('jquery');
var Vector2 = require('./vector2.js');
var game_over = false;

var canvas = document.getElementById("game_window").getContext('2d');
canvas.canvas.width = globals.canvas_width;
canvas.canvas.height = globals.canvas_height;

var start_button = document.getElementById("start");
start_button.addEventListener("click", animloop);
start_button.disabled = false;

var ship = new Ship(canvas.canvas.width/2,canvas.canvas.height/2);
var bground = new Background();
var terr_img = new ImageCache('./images/terrain.png');
var t0 = undefined;
var dt;
var terrainElements = [];
var enemyElements = [];

$.getJSON('./level_data/level01.json',json => {
  json.terrain.forEach(obj => {
    terrainElements.push(new Terrain(new Vector2(parseInt(obj.x),parseInt(obj.y)),terr_img.image));
  });
});

ship = key_bind(ship);

function addEnemies() {
  while (enemyElements.length < globals.num_enemies) {
    enemyElements.push(new Enemy(canvas));
  }
}
addEnemies();

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
  enemyElements.forEach(ele => {
    ele.updateDirection(ship);
    ele.update(dt);
  });
  ship.update(dt);
  ship.checkInBounds();
  ship.checkCollision(enemyElements,terrainElements);
  if (!ship.isAlive) { game_over = true; }
  // remove dead enemies
  enemyElements = enemyElements.filter(item => { return item.isAlive; });
  addEnemies();
}

function draw() {
  canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  bground.draw(canvas);
  terrainElements.forEach(ele => {
    ele.draw(canvas);
  });
  enemyElements.forEach(ele => {
    ele.draw(canvas);
  });
  ship.draw(canvas);
}

function endGame(canvas) {
  canvas.font = "80px Impact";
  canvas.fillStyle = '#fff000';
  canvas.textAlign = "center";
  canvas.fillText("Game Over",canvas.canvas.width/2,canvas.canvas.height/2);
}

function animloop(){
  if (game_over) {
    endGame(canvas);
    return;
  }
  if (!start_button.disabled) {
    start_button.disabled = true;
  }
  render();
  requestAnimFrame(animloop);
};
