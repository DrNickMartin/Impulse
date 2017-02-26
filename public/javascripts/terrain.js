var Vector2 = require('./vector2.js');

module.exports = class Terrain {
  constructor() {
    this.image = new Image();
    this.image.src = './images/terrain.png';
    this.size = new Vector2(50,50);
  }

  draw(canvas) {
    canvas.drawImage(
      this.image,
      this.size.x/2-canvas.canvas.width/2,
      this.size.y/2-canvas.canvas.height/2,
      canvas.canvas.width,
      canvas.canvas.height,
      0,
      0,
      canvas.canvas.width,
      canvas.canvas.height
    );
  }

};
