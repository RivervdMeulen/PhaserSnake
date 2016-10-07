var Menu = {

  preload: function() {
    game.load.image("play", "assets/images/playbutton.png");
  },

  create: function() {
    game.stage.backgroundColor = "#417505";
    this.add.button(game.world.centerX - 150, game.world.centerY - 50, "play", this.startGame, this);
  },

  startGame: function() {
    this.state.start("Game");
  }

};
