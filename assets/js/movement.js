function Movement(lastCell, firstCell) {
  if (direction == "east") {
    lastCell.x = firstCell.x + gridSize;
    lastCell.y = firstCell.y;
  } else if (direction == "west") {
    lastCell.x = firstCell.x - gridSize;
    lastCell.y = firstCell.y;
  } else if (direction == "north") {
    lastCell.x = firstCell.x;
    lastCell.y = firstCell.y - gridSize;
  } else if (direction == "south") {
    lastCell.x = firstCell.x;
    lastCell.y = firstCell.y + gridSize;
  }
}
