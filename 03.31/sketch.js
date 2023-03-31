let x, y;
let distortion;

function setup() {
  createCanvas(1000, 1000);
  noFill();
  strokeWeight(10);
  textSize(400);
  textAlign(CENTER, CENTER);
  
  // Initialize the R position and distortion value
  x = width/2;
  y = height/2;
  distortion = 0;
}

function draw() {
  // background(255);
  
  // Randomly change the stroke color
  stroke(random(255), random(255), random(255));
  
  // Draw the R character at the current position
  text('R', x, y);
  
  // Move the R character randomly
  x += random(-10, 10);
  y += random(-10, 10);
  
  // Apply the distortion effect
  distortion += random(-5, 5);
  translate(x, y);
  rotate(radians(distortion));
  translate(-x, -y);
}
