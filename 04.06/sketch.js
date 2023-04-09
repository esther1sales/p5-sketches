let rSize = 100;
let angle = 0;
let bgColor, rColor;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  textSize(rSize);
  textAlign(CENTER, CENTER);
  
  // Set initial colors
  bgColor = color(255);
  rColor = color(0, 0, 255);
}

function draw() {
  // background(bgColor);
  translate(width / 2, height / 2);

  // Draw rotating R
  push();
  rotate(angle);
  fill(rColor);
  text("R", 0, 0);
  pop();

  // Update variables
  angle += 2;
  rSize += sin(frameCount * 0.05) * 2;
  rSize = constrain(rSize, 50, min(width, height) / 2);
  textSize(rSize);

  // Change colors
  bgColor = color(sin(frameCount * 0.5) * 100 + 155);
  rColor = lerpColor(color(255, 0, 0), color(0, 0, 255), sin(frameCount * 0.5));
}
