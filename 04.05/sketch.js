let letterR = "R"; 

function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {
  let gray = random(0, 255);
  stroke(gray);
  fill(gray);

  let size = random(50, 250);
  let posX = random(size/2, width-size/2);
  let posY = random(size/2, height-size/2);

  posX += random(-50, 50);
  posY += random(-50, 50);
  size += random(-50, 50);
  let rotation = radians(random(-45, 45));
  
  push();
  translate(posX, posY);
  rotate(rotation);
  textSize(size);
  textAlign(CENTER, CENTER);
  text(letterR, 0, 0);
  pop();
}
function mousePressed() {
  saveCanvas("04.05", "png");
}
