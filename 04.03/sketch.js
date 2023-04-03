let rSize = 50;
let rPos;
let rColor;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  rPos = createVector(random(width), random(height));
  rColor = color(random(255), random(255), random(255), 50);
}

function draw() {
  let noiseVal = noise(rPos.x/100, rPos.y/100);
  let jitter = map(noise(noiseVal), 0, 1, -5, 5);
  let rotation = map(noise(noiseVal+10), 0, 1, 0, TWO_PI);
  
  push();
  translate(rPos.x, rPos.y);
  rotate(rotation);
  fill(rColor);
  textSize(random(200));
  text("R", 0, 0);
  pop();
  
  rPos.x += jitter;
  rPos.y += jitter;
  
  if (rPos.x < 0 || rPos.x > width || rPos.y < 0 || rPos.y > height) {
    rPos = createVector(random(width), random(height));
    // rColor = color(random(255), random(255), random(255), 50);
  }
  
  rSize = map(noise(frameCount/100), 0, 1, 20, 80);
  rColor = color(map(noise(frameCount/200), 0, 1, 0, 255), map(noise(frameCount/300), 0, 1, 0, 255), map(noise(frameCount/400), 0, 1, 0, 255), 50);
}
