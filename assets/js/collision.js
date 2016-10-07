function Collision(head) {
  hitBlip();
  hitSelf(head);
  hitWall(head);
}

function hitBlip() {
  for (var i = 0; i < snake.length; i++) {
    if (snake[i].x == blip.x && snake[i].y == blip.y) {
      addNew = true;
      blip.destroy();
      SpawnBlip();
      score++;
      scoreTextValue.text = score.toString();
    }
  }
}

function hitSelf(head) {
  if (head == null)
    return;

  for (var i = 0; i < snake.length - 1; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      game.state.start("Game_Over");
    }
  }

}

function hitWall(head){
  if (head == null)
    return;

  if (head.x >= gameWidth || head.x < 0 || head.y >= gameHeight || head.y < 0) {
    game.state.start("Game_Over");
  }

}
