var Vector2 = require('./vector2.js');

module.exports = class Bullet {
  constructor(pos,vel) {
    this.position = pos;
    this.velocity = vel;
    this.size = 4;
    this.life = 120; // number of timesteps until death
  }

  update(dt) {
    this.position.y -= this.velocity.y*dt;
    this.position.x += this.velocity.x*dt;
    this.life -= 1;
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(
      this.position.x,
      this.position.y,
      this.size,
      0,
      2*Math.PI
    );
    canvas.strokeStyle = '#ffff00';
    canvas.fillStyle = '#ffff00';
    canvas.stroke();
    canvas.fill();
  }
}
