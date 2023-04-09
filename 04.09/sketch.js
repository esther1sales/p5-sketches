function setup() {
  createCanvas(1000, 1000);
  textSize(50);
}

function draw() {
  background(220);
  noStroke();

  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 50);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b, 100);
    text("R", x, y);
    textSize(size);
  }
}
function mousePressed() {
  saveCanvas("04.09", "png");
}