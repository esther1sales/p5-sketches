let r;
let dr = 0.05;
let feed = 0.05;
let kill = 0.06;
let rSize = 40;
let rotationSpeed = 10;
let rotationRadius = 20;

function setup() {
  createCanvas(1000, 1000);
  pixelDensity(1);
  textSize(rSize);
  r = [];
  for (let x = 0; x < width; x++) {
    r[x] = [];
    for (let y = 0; y < height; y++) {
      r[x][y] = random(1);
    }
  }
}

function draw() {
  background(0);
  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      let a = r[x][y];
      let b = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          b += r[x + i][y + j];
        }
      }
      b /= 9;
      let nextR = a + (dr * laplaceR(x, y) - a * b * b + feed * (1 - a) - kill * a) * 0.1;
      nextR = constrain(nextR, 0, 1);
      r[x][y] = nextR;
      push();
      translate(x * rSize + rotationRadius * sin(frameCount * rotationSpeed + x + y), y * rSize + rotationRadius * cos(frameCount * rotationSpeed + x + y));
      fill(nextR * 255);
      text("R", 0, 0);
      pop();
    }
  }
}

function laplaceR(x, y) {
  let sumR = 0;
  sumR += r[x][y] * -1;
  sumR += r[x - 1][y] * 0.2;
  sumR += r[x + 1][y] * 0.2;
  sumR += r[x][y - 1] * 0.2;
  sumR += r[x][y + 1] * 0.2;
  sumR += r[x - 1][y - 1] * 0.05;
  sumR += r[x + 1][y - 1] * 0.05;
  sumR += r[x + 1][y + 1] * 0.05;
  sumR += r[x - 1][y + 1] * 0.05;
  return sumR;
}
