let c;

function setup () {
noStroke();
c = createCanvas (1000,1000)
background (0)
rect(200,300,125,700)
rotate(radians(-20,))
rect(200,80,125,500)
ellipse (290,650,500,500);
fill(0);
ellipse (290,650,200,200);

// rect(350,200,125,300)
// rect(500,100,125,300)
// rect(650,200,125,300)

}
// function draw() {
//     strokeWeight(2);
//     stroke (mouseX,mouseY,230)
//     fill (255,0)
//     rect(mouseX,mouseY,125,300)
  
// }

function mousePressed () { 
saveCanvas (c,"fresh-sketch","png")
}