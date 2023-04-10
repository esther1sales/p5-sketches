function setup() {
  createCanvas(1000, 1000);
  textSize(200);
  textAlign(CENTER, CENTER);
}

function draw() {
  // background(255);

  let x = random(width);
  let y = random(height);


  fill(random(255), random(255), random(255));
  text("R", x, y);
}
function mousePressed() {
  saveCanvas("04.08", "png");
}
