let x, y, vx, vy, colorR, colorG, colorB;

function setup() {
  createCanvas(1000, 1000);
  x = width / 2;
  y = height / 2;
  vx = random(-5, 5);
  vy = random(-5, 5);
  colorR = random(255);
  colorG = random(255);
  colorB = random(255);
}

function draw() {
  // background(220);
  textSize(500);
  fill(colorR, colorG, colorB);
  text("R", x, y);

  // Update positiolet font;
let letterPaths;
let angle = 0;
let rotationSpeed = 0.02;
let offset = 0;
let offsetSpeed = 0.5;
let radius = 200;

function preload() {
  font = loadFont('assets/Roboto-Bold.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font);
  textSize(600);
  letterPaths = font.textToPoints("R", 200, 700, 500, {
    sampleFactor: 0.5,
    simplifyThreshold: 0
  });
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  noFill();
  stroke(0);
  strokeWeight(10);

  // Draw letter paths
  push();
  rotate(angle);
  for (let i = 0; i < letterPaths.length; i++) {
    let p = letterPaths[i];
    let x = p.x + sin(offset + i) * radius;
    let y = p.y + cos(offset + i) * radius;
    point(x, y);
  }
  pop();

  // Update variables
  angle += rotationSpeed;
  offset += offsetSpeed;
}
n
  x += vx;
  y += vy;

  // Bounce off edges
  if (x < 0 || x > width) {
    vx *= -1;
    colorR = random(255);
    colorG = random(255);
    colorB = random(255);
  }
  if (y < 0 || y > height) {
    vy *= -1;
    colorR = random(255);
    colorG = random(255);
    colorB = random(255);
  }
}
