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
