//playing more with noise :)
let xOff = 0;
let yOff = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  noStroke();
}

function draw() {
  fill(random(255), random(255), random(255), 50);
  let rSize = map(noise(xOff, yOff), 0, 1, 10, 100);
  let xPos = map(noise(xOff), 0, 1, 0, width);
  let yPos = map(noise(yOff), 0, 1, 0, height);
  xOff += 0.01;
  yOff += 0.01;

  push();
  translate(xPos, yPos);
  rotate(noise(xOff, yOff) * TWO_PI);
  textSize(mouseX);
  text("R", 0, 0);
  pop();
}
function mousePressed() {
  saveCanvas("day13", "png");
}