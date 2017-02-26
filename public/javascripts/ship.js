// Class for the ship object
'use strict'

var globals = require('./globals.js');
var Vector2 = require('./vector2.js');
var Sprite = require('./sprite.js');

var ship = class Ship {
  constructor() {
    this.size = new Vector2(25,50);
    this.position = new Vector2(50,50);
    this.velocity = new Vector2(0,20);
    this.direction = 0; //Angle we're facing in radians
    this.color = '#00A';
    this.thrust = false;
    this.rotate_left = false;
    this.rotate_right = false;
    this.mass = 300;

    var image = new Image();
    image.src = './images/spaceship.png';
    this.sprite = new Sprite({
      "img_size": new Vector2(560,560),
      "image": image,
      "frame_width": 280
    });
  }

  frame() {
    if (this.thrust==true) {
      return 1;
    } else {
      return 0;
    }
  }

  draw(canvas) {
    this.sprite.render(canvas,this);
  }

  getAcceleration() {
    var Fx = 0;
    var Fy = 0;
    if (this.thrust===true) {
      Fx = Math.sin(this.direction) * globals.thrust*this.mass;
      Fy = Math.cos(this.direction) * globals.thrust*this.mass -this.mass*globals.g;
    } else {
      Fy = -this.mass*globals.g
    }
    return new Vector2(Fx/this.mass,Fy/this.mass);
  }

  rotate() {
    if (this.rotate_left) {
      this.direction -= 0.1;
    } else if (this.rotate_right) {
      this.direction += 0.1;
    }
  }

  update(dt) {
    this.rotate();
    var a = this.getAcceleration();
    this.velocity.y += a.y*dt;
    this.velocity.x += a.x*dt;
    this.position.y -= this.velocity.y*dt;
    this.position.x += this.velocity.x*dt;
  }

}

return module.exports = ship;
