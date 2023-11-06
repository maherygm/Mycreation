var canvas = document.getElementById("monpremiercanvas");
var context = canvas.getContext("2d");

let initwidth = window.width;

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  annimation();
}

var amplitude = 75;
var frequency = 0.005;
var phase = 0;

function annimation() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, canvas.height);

  Hauteur = canvas.height;

  for (let i = 0; i < canvas.width * 4.5; i += 2) {
    var y = amplitude * Math.sin(frequency * i + phase) + Hauteur;
    context.lineTo(i, y);

    // if (Hauteur) {
    //   break;
    // }
    Hauteur--;
  }
  context.closePath();
  context.fill();
  context.stroke();
  phase += 0.01;
}
init();
window.addEventListener("resize", () => {
  init();
});
setInterval(annimation, 16);
