var snake,
    blip,
    gridSize,
    score,
    speed,
    updateDelay,
    direction,
    new_direction,
    addNew,
    cursors,
    scoreTextValue,
    speedTextValue,
    textStyle_Key,
    textStyle_Value,
    btnU,
    btnD,
    btnL,
    btnR,
    gameWidth,
    gameHeight;

var Game = {

  preload: function() {
    game.load.image("player", "assets/images/playerblip.png");
    game.load.image("blip", "assets/images/blip.png");
  },

  create: function() {
    snake = [];
    blip = {};
    gridSize = 20;
    score = 0;
    speed = 0;
    updateDelay = 0;
    direction = "east";
    new_direction = null;
    addNew = false;
    gameWidth = (Math.floor(window.innerWidth / gridSize) * gridSize);
    gameHeight = (Math.floor(window.innerHeight / gridSize) * gridSize);

    cursors = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = "#417505";

    for (var i = 0; i < 10; i++) {
      snake[i] = game.add.sprite(200+i*gridSize, 200, "player");
    }

    SpawnBlip();

    textStyle_Key = { font: "bold 14px sans-serif", fill: "#B8E986", align: "center" };
    textStyle_Value = { font: "bold 18px sans-serif", fill: "#B8E986", align: "center" };

    game.add.text(30, 20, "SCORE", textStyle_Key);
    scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
  },

  update: function() {
    KeyboardInput(cursors);

    speed = Math.min(10, Math.floor(score/5));

    updateDelay++;

    if (updateDelay % (10 - speed) == 0) {

      var firstCell = snake[snake.length - 1];
      var lastCell = snake.shift();
      var oldLastCellx = lastCell.x;
      var oldLastCellY = lastCell.y;

      if (new_direction) {
        direction = new_direction;
        new_direction = null;
      }

      Movement(lastCell, firstCell);

      snake.push(lastCell);
      firstCell = lastCell;
    }

    if (addNew) {
      snake.unshift(game.add.sprite(oldLastCellx, oldLastCellY, "player"));
      addNew = false;
    }
    Collision(firstCell);
  },
}
