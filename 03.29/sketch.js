let angle = 0;
let letterSize = 50;
let swirlRadius = 200;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  // background(220);
  textSize(letterSize);
  let x = swirlRadius * cos(angle) + width / 2;
  let y = swirlRadius * sin(angle) + height / 2;
  let innerSwirlRadius = swirlRadius / 2;
  let innerX = innerSwirlRadius * cos(angle) + width / 2;
  let innerY = innerSwirlRadius * sin(angle) + height / 2;
  text("R", x, y);
  text("R", innerX, innerY);
  angle += 0.1;
}
