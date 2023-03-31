// let particles = [];
let numParticles = 100;
let rWidth = 100;
let rHeight = 200;
let rOffset = 100;

function setup() {
  createCanvas(1000, 1000);
  
  // Create initial particles
  for (let i = 0; i < numParticles; i++) {
    let p = new Particle();
    particles.push(p);
  }
}

function draw() {
  background(0);
  stroke(255, 0, 0);
  strokeWeight(2);

  // Connect particles with lines
  for (let i = 0; i < numParticles; i++) {
    let p1 = particles[i];
    let p2 = particles[(i+1)%numParticles];
    line(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
  }

  // Update and display particles
  for (let i = 0; i < numParticles; i++) {
    particles[i].update();
    particles[i].display();
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.radius = 10;
    this.maxSpeed = 5;
  }

  update() {
    // Update velocity and position
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);

    // Bounce off edges
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }

    // Reset acceleration
    this.acceleration.mult(0);
  }

  display() {
    // Display R particle
    noStroke();
    fill(255, 0, 0);
    rect(this.position.x, this.position.y, this.radius, this.radius);
  }
}
