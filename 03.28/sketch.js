// Declare variables
let x = 200; // x-coordinate of the R
let y = 500; // y-coordinate of the R
let speedX = 5; // Speed of the animation in the x direction
let speedY = 3; // Speed of the animation in the y direction
let rColor; // Color of the R

// Set up the canvas
function setup() {
  createCanvas(1000, 1000);
  rColor = color(random(255), random(255), random(255));
}

// Draw the R
function draw() {
  // Clear the canvas
//   background(255);

  // Set the stroke color and weight
  stroke(rColor);
  strokeWeight(random (100));

  // Draw the R
  line(x, y - 300, x, y);
  line(x, y - 300, x + 300, y - 300);
  line(x + 300, y - 300, x + 300, y - 150);
  line(x + 300, y - 150, x, y - 150);
  line(x, y - 150, x + 300, y);

  // Bounce the R around the canvas
  x += speedX;
  y += speedY;
  if (x > 700 || x < 200) {
    speedX *= -1;
    rColor = color(random(255), random(255), random(255));
  }
  if (y > 800 || y < 200) {
    speedY *= -1;
    rColor = color(random(255), random(255), random(255));
  }
}
