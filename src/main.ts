import { canvas, ctx, initcanvas } from "./canvas-ctx";
import "./style.css";

initcanvas();

ctx.fillStyle = "purple";
ctx.fillRect(0, 0, canvas.width, canvas.height);
