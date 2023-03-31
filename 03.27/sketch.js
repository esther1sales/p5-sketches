function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(mouseX,mouseY,0);
  
  textSize(50);
  text("R", 0, 0);
  
  let distortionAmount = map(mouseX, 4, width, 6, 100);
  for (let i = 2; i < 100; i++) {
    let x = random(mouseX, 1000);
    let y = random(100, mouseY);
    let offsetX = sin(y * 0.5) * distortionAmount;
    let offsetY = cos(x * 0.5) * distortionAmount;
    text("R", y, x + offsetX, y + offsetY);
  }
  
}
