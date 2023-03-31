let c;
let angle = 0;

function setup() {
    c = createCanvas(1000,1000)
    angleMode(DEGREES)
    background(0)
}

function draw() {
    rotate(angle)

    noFill()
    stroke(255)
    textSize(200)
    text("R",500,500)

    angle = angle + 0.5;
    rotate(angle)

    noFill()
    stroke(255)
    textSize(100)
    text("R",200,200)

    angle = angle + 1;
    rotate(angle)

    noFill()
    stroke(255)
    textSize(150)
    text("R",300,300)

    angle = angle + 10;
    
  }


function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}