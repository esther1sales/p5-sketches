let noiseScale = 0.01;
let rPos;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  rPos = createVector(random(width), random(height));
}

function draw() {
  let noiseVal = noise(rPos.x * noiseScale, rPos.y * noiseScale);
  let rColor = color(random(255), random(255), random(255), 50);
  
  push();
  translate(rPos.x, rPos.y);
  rotate(noiseVal * TWO_PI);
  fill(rColor);
  textSize(mouseX);
  text("R", 0, 0);
  pop();
  
  rPos.x += map(noise(noiseVal), 0, 1, -2, 2);
  rPos.y += map(noise(noiseVal+10), 0, 1, -2, 2);
  
  
  rPos.x = (rPos.x + width) % width;
  rPos.y = (rPos.y + height) % height;
  

  noiseScale += 0.001;
  rSize = map(noise(noiseScale), 0, 1, 30, 70);
}
function mousePressed() {
  saveCanvas("day13.1", "png");
}
  