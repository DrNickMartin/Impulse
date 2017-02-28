var Vector2 = require('./vector2.js');
var globals = require('./globals.js');

function getRandomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

function isImageOkay(img) {
  if (!img.complete) {return false;}
  return true;
}

module.exports = class Enemy {
  constructor(canvas) {
    this.thrust = 50;
    this.mass = 200;
    var sz = getRandomInt(20,60);
    this.image = undefined;
    this.size = new Vector2(sz,sz);
    var side = getRandomInt(0,2);
    this.direction = this.getInitialDirection(side);
    this.position = this.getInitialPosition(canvas, side);
    this.max_speed = getRandomInt(10,20);
    this.velocity = this.getMaxVelocity();
    this.isAlive = true;
  }

  updateDirection(ship) {
    var dx = ship.position.x-this.position.x;
    var dy = (-ship.position.y)-(-this.position.y);
    this.direction = Math.atan2(dx,dy);
  }

  kill() {
    this.isAlive = false;
  }

  getMaxVelocity() {
    return new Vector2(
      this.max_speed*Math.sin(this.direction),
      this.max_speed*Math.cos(this.direction)
    );
  }

  getInitialDirection(side) {
    switch(side) {
      case 0: //left
        return Math.PI/2;
        break;
      case 1: //top
        return Math.PI;
        break;
      case 2: //right
       return 3*(Math.PI/2);
       break;
    }
  }

  getInitialPosition(canvas,side) {
    switch(side) {
      case 0: //left
        return new Vector2(65,getRandomInt(65,canvas.canvas.height-65));
        break;
      case 1: //top
        return new Vector2(getRandomInt(65,canvas.canvas.width-65), 65);
        break;
      case 2: //right
        return new Vector2(canvas.canvas.width-65,getRandomInt(65,canvas.canvas.height-65));
        break;
      }
  }

  addImage(img) {
    this.image = img;
  }

  hasImage() {
    return this.image !== undefined
  }

  imageReady() {
    if (!this.hasImage()){ return false; }
    return isImageOkay(this.image);
  }

  update(dt) {
    var a = this.getAcceleration();
    var vmax = this.getMaxVelocity();
    this.velocity.y += a.y*dt;
    this.velocity.x += a.x*dt;
    if (Math.abs(this.velocity.x) > Math.abs(vmax.x) || Math.abs(this.velocity.y) > Math.abs(vmax.y)) {
      this.velocity = vmax;
    }
    this.position.y -= this.velocity.y*dt;
    this.position.x += this.velocity.x*dt;
  }

  getAcceleration() {
    var Fx = 0;
    var Fy = 0;
    Fx = Math.sin(this.direction) * this.thrust*this.mass;
    Fy = Math.cos(this.direction) * this.thrust*this.mass;
    return new Vector2(Fx/this.mass,Fy/this.mass);
  }

  draw(canvas) {
    if (!this.imageReady()) {
      canvas.fillStyle = '#fff000';
      canvas.fillRect(
        this.position.x-this.size.x/2,
        this.position.y-this.size.y/2,
        this.size.x,
        this.size.y
      );
    } else {
      canvas.drawImage(
        this.image,
        0,
        0,
        this.image.naturalWidth,
        this.image.naturalHeight,
        this.position.x-this.size.x/2,
        this.position.y-this.size.y/2,
        this.size.x,
        this.size.y
      );
    }
  }
};
