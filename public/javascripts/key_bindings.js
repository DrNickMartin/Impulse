// Takes and object and binds key change functions
var $ = require('jquery');

module.exports = function key_bind(ship) {

  $(document).keydown(function(e){
    switch(e.which) {
      case 37: //left
        ship.rotate_left = true;
        break;
      case 38: //up
        ship.thrust = true;
        break;
      case 39: //right
        ship.rotate_right = true;
        break;
      default: return;
    }
    e.preventDefault();
  });

  $(document).keyup(function(e){
    switch(e.which) {
      case 37: //left
        ship.rotate_left = false;
        break;
      case 38: //up
        ship.thrust = false;
        break;
      case 39: //right
        ship.rotate_right = false;
        break;
      default: return;
    }
    e.preventDefault();
  });

  $(document).keypress(function(e){
    switch(e.which) {
      case 32: //space
        ship.fire();
        break;
      default: return;
    }
    e.preventDefault();
  });

  return ship;
};
