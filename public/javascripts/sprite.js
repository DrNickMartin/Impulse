var Vector2 = require('./Vector2.js');

module.exports = class Sprite {
  constructor(opts) {
    this.img_size = opts.width;
    this.image = opts.image;
    this.frame_width = opts.frame_width;
  }

  render(canvas, obj) {
    // move the origin to the centre of the image
    canvas.save();

    canvas.translate(
      obj.position.x+obj.size.x/2,
      obj.position.y+obj.size.y/2
    );

    canvas.rotate(obj.direction);

    canvas.drawImage(
      this.image,
      this.frame_width*obj.frame(),
      0,
      280,
      560,
      -obj.size.x/2,
      -obj.size.y/2,
      obj.size.x,
      obj.size.y
    );

    canvas.restore();
  }

};
