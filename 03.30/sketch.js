let rSize = 50; // size of the letter R
let rColor; // color of the letter R
let canvasWidth = 1000; // width of the canvas
let canvasHeight = 1000; // height of the canvas

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rColor = color(mouseX, mouseY, 250); // set the color of the letter R to a darker shade
}

function draw() {
  // background(220);
  // generate random coordinates for the center of the letter R
  let rX = random(rSize/2, width - rSize/2);
  let rY = random(rSize/2, height - rSize/2);

  // draw the letter R at the random coordinates with the random color
  drawR(rX, rY, rSize, rColor);
}

function drawR(x, y, size, color) {
  push(); // save current state of the drawing context
  translate(x, y); // move to the center of the R
  rotate(random(PI*2)); // rotate randomly
  fill(color);
  noStroke();
  rect(-size/2, -size*2/5, size/3, size); // left vertical bar of R
  ellipse(size/6, 0, size*2/5, size*2/5); // rounded part of R
  rect(size/6, size/5, size*2/3, size/3); // right horizontal bar of R
  pop(); // restore previous state of the drawing context
}
