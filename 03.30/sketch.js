let rSize = 50; 
let rColor; 


function setup() {
  createCanvas(1000, 1000);
  rColor = color(mouseX, mouseY, 250); 
}

function draw() {

  let rX = random(rSize/2, width - rSize/2);
  let rY = random(rSize/2, height - rSize/2);


  drawR(rX, rY, rSize, rColor);
}

function drawR(x, y, size, color) {
  push();
  translate(x, y);
  rotate(random(PI*2)); 
  fill(color);
  noStroke();
  rect(-size/2, -size*2/5, size/3, size); 
  ellipse(size/6, 0, size*2/5, size*2/5); 
  rect(size/6, size/5, size*2/3, size/3); 
  pop(); 
}
