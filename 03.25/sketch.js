var circleY = 0
var circleX = 0

function setup () {
    createCanvas (1000,1000)
}
function draw () {
    // background (0)
    fill(255,255,255)
    ellipse (100, 100, 50, 50)
    ellipse (200, 100, 50, 50)
    ellipse (300, 100, 50, 50)
    ellipse (400, 100, 50, 50)
    ellipse (500, 100, 50, 50)
    ellipse (500, 100, 50, 50)
    ellipse (500, 200, 50, 50)
    ellipse (500, 300, 50, 50)
    ellipse (400, 300, 50, 50)
    ellipse (300, 300, 50, 50)
    ellipse (200, 300, 50, 50)
    ellipse (100, 200, 50, 50)
    ellipse (100, 300, 50, 50)
    ellipse (100, 400, 50, 50)
    ellipse (100, 500, 50, 50)
    ellipse (100, 600, 50, 50)
    ellipse (200, 400, 50, 50)
    ellipse (300, 500, 50, 50)
    ellipse (400, 600, 50, 50)
    fill(30,255,100)
    ellipse (100, 100, 50, 50)
    ellipse (200, 100, 50, 50)
    ellipse (300, 100, 50, 50)
    ellipse (400, 100, 50, 50)
    ellipse (500, 100, 50, 50)
    ellipse (500, 100, 50, 50)
    ellipse (500, 200, 50, 50)
    ellipse (500, 300, 50, 50)
    ellipse (400, 300, 50, 50)
    ellipse (300, 300, 50, 50)
    ellipse (200, 300, 50, 50)
    ellipse (100, 200, 50, 50)
    ellipse (100, 300, 50, 50)
    ellipse (100, 400, 50, 50)
    ellipse (100, 500, 50, 50)
    ellipse (100, 600, 50, 50)
    ellipse (200, 400, 50, 50)
    ellipse (300, 500, 50, 50)
    ellipse (400, 600, 50, 50)
    fill(255,255,255);
    circleY = circleY+1
    ellipse (circleX, 100, 50, 50)
    circleX = circleX+1
    circleY = circleY+1
    ellipse (circleX, 200, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 300, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 400, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 500, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 600, 50, 50)
    circleX = circleX+1
    fill(23,230,100);
    circleY = circleY+1
    ellipse (circleX, 150, 50, 50)
    circleX = circleX+1
    circleY = circleY+1
    ellipse (circleX, 250, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 350, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 450, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 550, 50, 50)
    circleX = circleX+1
    ellipse (circleX, 650, 50, 50)
    circleX = circleX+1
}
let = c;
function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}