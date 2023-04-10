
let x = 200;
let y = 500; 
let speedX = 5; 
let speedY = 3; 
let rColor; 

function setup() {
  createCanvas(1000, 1000);
  rColor = color(random(255), random(255), random(255));
}


function draw() {

  stroke(rColor);
  strokeWeight(random (100));


  line(x, y - 300, x, y);
  line(x, y - 300, x + 300, y - 300);
  line(x + 300, y - 300, x + 300, y - 150);
  line(x + 300, y - 150, x, y - 150);
  line(x, y - 150, x + 300, y);

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
