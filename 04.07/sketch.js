let rSize = 200;
let angle = 0;
let scaleFactor = 1;

function setup() {
  createCanvas(1000, 1000);
  textSize(rSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  // background(255);


  scaleFactor = sin(frameCount * 0.02) * 2 + 2;
  textSize(rSize * scaleFactor);


  angle += 0.1;


  let r = sin(frameCount * 0.01) * 128 + 128;
  let g = cos(frameCount * 0.02) * 128 + 128;
  let b = sin(frameCount * 0.03) * 128 + 128;
  fill(r, g, b);


  push();
  translate(width / 2, height / 2);
  rotate(angle);
  text("R", 0, 0);
  pop();
}
function mousePressed() {
  saveCanvas("04.07", "png");
}