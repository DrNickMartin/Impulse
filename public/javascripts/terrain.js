var Vector2 = require('./vector2.js');

function getRandomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

module.exports = class Terrain {
  constructor(pos, img) {
    this.image = img;
    this.size = new Vector2(50,50);
    this.position = pos;
    this.frame = getRandomInt(0,3);
  }

  draw(canvas) {
    canvas.drawImage(
      this.image,
      this.size.x*this.frame,
      0,
      this.size.x,
      this.size.y,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

};
