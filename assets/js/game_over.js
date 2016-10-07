var Game_Over = {

  preload: function() {
    //game.load.image("gameover", "assets/images/gameover.png");
    game.load.image("Breplay", "assets/images/replay.png");
  },

  create: function() {
    //this.add.button(0, 0, "gameover", this.startGame, this);
    this.add.button(game.world.centerX - 150, game.world.centerY - 50, "Breplay", this.startGame, this);

    game.add.text(game.world.centerX - 65, game.world.centerY + 75, "YOUR SCORE", {font: "bold 20px sans-serif", fill: "#B8E986", align: "center"});
    game.add.text(game.world.centerX - 10, game.world.centerY + 100, score.toString(), {font: "bold 16px sans-serif", fill: "#B8E986", align: "center"});
  },

  startGame: function() {
    this.state.start("Game");
  }
}
