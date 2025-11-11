import { ctx, canvas, initCanvas } from "./canvas-ctx";
import GameManager from "./game-manager";
import "./style.css";

initCanvas();

let gm = new GameManager(ctx, canvas);

function gameLoop(timestamp: number) {
  gm.update(timestamp);
  gm.draw();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
