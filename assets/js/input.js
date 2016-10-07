console.log("Input Loaded");

var btnU,
    btnD,
    btnL,
    btnR;

document.getElementById("btnU").onclick = function() {
  if (direction!="south") {
    new_direction = "north";
  }
}

document.getElementById("btnD").onclick = function() {
  if (direction!="north") {
    new_direction = "south";
  }
}

document.getElementById("btnL").onclick = function() {
  if (direction!="east") {
    new_direction = "west";
  }
}

document.getElementById("btnR").onclick = function() {
  if (direction!="west") {
    new_direction = "east";
  }
}

function KeyboardInput(arrows){
  if(arrows.right.isDown && direction!="west") {
    new_direction = "east";
  } else if (arrows.left.isDown && direction!="east") {
    new_direction = "west";
  } else if (arrows.up.isDown && direction!="south") {
    new_direction = "north";
  } else if (arrows.down.isDown && direction!="north") {
    new_direction = "south";
  }
}
