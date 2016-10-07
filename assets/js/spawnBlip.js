function SpawnBlip() {
  var randomX = Math.floor((Math.random() * gameWidth) / gridSize) * gridSize;
  var randomY = Math.floor((Math.random() * gameHeight) / gridSize) * gridSize;

  blip = game.add.sprite(randomX, randomY, "blip");
}
