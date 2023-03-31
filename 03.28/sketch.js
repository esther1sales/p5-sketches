let x = 50;
let y = 50;
let xSpeed = 50;
let ySpeed = 70;
let letterSize = 100;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  textSize(letterSize);
  text("R", x, y);
  
  // Check if the letter is hitting the edges of the canvas
  if (x + letterSize >= width || x <= 0) {
    xSpeed *= 0;
  }
  if (y + letterSize >= height || y <= 0) {
    ySpeed *= -1;
  }
  
  // Update the position of the letter
  x += xSpeed;
  y += ySpeed;
}
