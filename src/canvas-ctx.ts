export let canvas = document.querySelector<HTMLCanvasElement>("#main-game")!;
export let ctx = canvas.getContext("2d")!;

export function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener("resize", onResize);
}

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("Resized window", canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
