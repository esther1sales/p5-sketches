let circles = [];

function setup() {
  createCanvas(1000, 1000);
  background(220);

  let circle = {
    x: width / 2,
    y: height / 2,
    r: 100
  };
  circles.push(circle);
}

function draw() {
  let circle = {
    x: random(width),
    y: random(height),
    r: random(20, 100)
  };
  circles.push(circle);

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    noFill();
    stroke(random(255), random(255), random(255));
    strokeWeight(random(1, 10));
    ellipse(c.x, c.y, c.r * 2);

    push();
    translate(c.x, c.y);
    rotate(random(TWO_PI));
    textSize(c.r);
    textAlign(CENTER, CENTER);
    fill(random(255), random(255), random(255));
    text('R', 0, 0);
    pop();
  }

  if (circles.length > 100) {
    circles.splice(0, 1);
  }
}
function mousePressed() {
  saveCanvas("04.10", "png");
}