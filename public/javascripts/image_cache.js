var Vector2 = require('./vector2.js');

module.exports = class ImageCache {
  constructor(src) {
    this.image = new Image();
    this.image.src = src;
    this.size = new Vector2(50,50);
  }
};
