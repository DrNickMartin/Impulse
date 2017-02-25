(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Globals
class Globals {
  constructor() {
    this.FPS = 30;
    this.dt = 1/this.FPS;
    this.dtms = 1000/this.FPS;
    this.g = 9.81;
  }
}

return module.exports = new Globals();

},{}],2:[function(require,module,exports){
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

},{"./globals.js":1,"./ship.js":3}],3:[function(require,module,exports){
// Class for the ship object
'use strict'

var globals = require('./globals.js');
var Vector2 = require('./vector2.js');

var ship = class Ship {
  constructor() {
    this.size = new Vector2(20,25);
    this.position = new Vector2(50,50);
    this.velocity = new Vector2(0,20);
    this.diretion = new Vector2(0,1);
    this.color = '#00A';
    this.thrust = false;
    this.mass = 200;
    this.t_force = 2*globals.g;
  }

  draw(canvas) {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  update() {
    if (this.thrust===true) {
      var res_f = this.t_force - this.mass*globals.g;
    }
    else {
      var res_f = -this.mass*globals.g;
    }
    var a = res_f/this.mass;
    this.velocity.y += a*globals.dt;
    this.position.y -= this.velocity.y*globals.dt;
  }

}

return module.exports = ship;

},{"./globals.js":1,"./vector2.js":4}],4:[function(require,module,exports){
var vec2 = class Vector2 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
};

module.exports = vec2;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvZ2xvYmFscy5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzIiwicHVibGljL2phdmFzY3JpcHRzL3NoaXAuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvdmVjdG9yMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBHbG9iYWxzXHJcbmNsYXNzIEdsb2JhbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5GUFMgPSAzMDtcclxuICAgIHRoaXMuZHQgPSAxL3RoaXMuRlBTO1xyXG4gICAgdGhpcy5kdG1zID0gMTAwMC90aGlzLkZQUztcclxuICAgIHRoaXMuZyA9IDkuODE7XHJcbiAgfVxyXG59XHJcblxyXG5yZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBuZXcgR2xvYmFscygpO1xyXG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lX3dpbmRvd1wiKS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuL2dsb2JhbHMuanMnKTtcclxudmFyIFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcclxudmFyIHNoaXAgPSBuZXcgU2hpcCgpO1xyXG5cclxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgdXBkYXRlKCk7XHJcbiAgZHJhdygpO1xyXG59LCBnbG9iYWxzLmR0bXMpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gIHNoaXAudXBkYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgY2FudmFzLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMuY2FudmFzLndpZHRoLCBjYW52YXMuY2FudmFzLmhlaWdodCk7XHJcbiAgc2hpcC5kcmF3KGNhbnZhcyk7XHJcbn1cclxuIiwiLy8gQ2xhc3MgZm9yIHRoZSBzaGlwIG9iamVjdFxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi9nbG9iYWxzLmpzJyk7XHJcbnZhciBWZWN0b3IyID0gcmVxdWlyZSgnLi92ZWN0b3IyLmpzJyk7XHJcblxyXG52YXIgc2hpcCA9IGNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXplID0gbmV3IFZlY3RvcjIoMjAsMjUpO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDUwLDUwKTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLDIwKTtcclxuICAgIHRoaXMuZGlyZXRpb24gPSBuZXcgVmVjdG9yMigwLDEpO1xyXG4gICAgdGhpcy5jb2xvciA9ICcjMDBBJztcclxuICAgIHRoaXMudGhydXN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hc3MgPSAyMDA7XHJcbiAgICB0aGlzLnRfZm9yY2UgPSAyKmdsb2JhbHMuZztcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIGNhbnZhcy5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnRocnVzdD09PXRydWUpIHtcclxuICAgICAgdmFyIHJlc19mID0gdGhpcy50X2ZvcmNlIC0gdGhpcy5tYXNzKmdsb2JhbHMuZztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgcmVzX2YgPSAtdGhpcy5tYXNzKmdsb2JhbHMuZztcclxuICAgIH1cclxuICAgIHZhciBhID0gcmVzX2YvdGhpcy5tYXNzO1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IGEqZ2xvYmFscy5kdDtcclxuICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnkqZ2xvYmFscy5kdDtcclxuICB9XHJcblxyXG59XHJcblxyXG5yZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBzaGlwO1xyXG4iLCJ2YXIgdmVjMiA9IGNsYXNzIFZlY3RvcjIge1xyXG4gIGNvbnN0cnVjdG9yKHgseSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2ZWMyO1xyXG4iXX0=
