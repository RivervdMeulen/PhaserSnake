var game;

var gameWidth, gameHeight;

gameWidth = (Math.floor(window.innerWidth / 20) * 20);
gameHeight = (Math.floor(window.innerHeight / 20) * 20);

//Create a new game instance
game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "");

//First param is how our state will be called
//Second param is an object containing the needed methods for state funtionality
game.state.add("Menu", Menu);
game.state.add("Game", Game);
game.state.add("Game_Over", Game_Over);

game.state.start("Menu");
