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
      case 40: //down
        ship.tractor = true;
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
        case 40: //down
          ship.tractor = false;
          break;
      default: return;
    }
    e.preventDefault();
  });

  return ship;
};
