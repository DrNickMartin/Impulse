// Globals
class Globals {
  constructor() {
    this.FPS = 30;
    this.dt = 1/this.FPS;
    this.dtms = 1000/this.FPS;
    this.g = 9.81;
    this.thrust = 50;
    this.canvas_width = 1200;
    this.canvas_height = 600;
    this.num_enemies = 15;
    this.key = "de9f82f8331a4456a200aebfa065a9de";
    this.key2 = "d71e42773e494275a30c77a45eba4784";
  }
}

return module.exports = new Globals();
