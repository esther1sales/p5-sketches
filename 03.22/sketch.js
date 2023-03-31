function setup() {
  createCanvas(1000, 1000);
  background(255, 224, 255);
}

function draw() {
  let ferb = map (mouseX,0,1000,0,255)
  noStroke();
  ellipse(mouseX, mouseY, 150, 150);
  fill(ferb,100,100);
  console.log (mouseX)
  // stroke (mouseX,mouseY,)
  

}
function mousePressed() {
  saveCanvas("day2", "png");
}
  