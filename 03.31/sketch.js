let x, y;
let distortion;

function setup() {
  createCanvas(1000, 1000);
  noFill();
  strokeWeight(10);
  textSize(400);
  textAlign(CENTER, CENTER);
  
  x = width/2;
  y = height/2;
  distortion = 0;
}

function draw() {

  stroke(random(255), random(255), random(255));

  text('R', x, y);
  
  x += random(-10, 10);
  y += random(-10, 10);
  
  distortion += random(-5, 5);
  translate(x, y);
  rotate(radians(distortion));
  translate(-x, -y);
}
