//
// Bounce2
// This version of the bounce includes
// gravity and a bounciness factor.

// Peyton LeDrew

let width = 800;
let height = 600;

let ball1;
let ball2;
let ball3;

function setup() {
  createCanvas(width, height);

  ball1 = new Ball();
  ball2 = new Ball();
  ball3 = new Ball();
}

function draw() {
  background(80);

  ball1.render();
  ball1.move();

  ball2.render();
  ball2.move();

  ball3.render();
  ball3.move();
}

class Ball {
  constructor() {
    this.positionX = random(0 + 25, width - 25);
    this.positionY = random(0 + 25, height - 25);
    this.velocityX = random(-5, 5);
    this.velocityY = random(-5, 5);
    this.radius = 25;
    this.size = this.radius * 2;
    this.ballR = random(0, 255);
    this.ballG = random(0, 255);
    this.ballB = random(0, 255);
    this.gravity = 1.0;
    this.bounciness = 0.98;
  }

  move() {
    // Move the Ball
    this.velocityY += this.gravity;
    this.positionX = this.positionX + this.velocityX;
    this.positionY = this.positionY + this.velocityY;

    const rightEdge = width;
    const leftEdge = 0;
    const topEdge = 0;
    const bottomEdge = height;

    // code to check if we hit right or left side
    if (this.positionX + this.radius >= rightEdge) {
      // bounce off the right edge
      this.positionX = rightEdge - this.radius;
      this.velocityX = this.velocityX * -this.bounciness;
      this.velocityY = this.velocityY * this.bounciness;
    } else if (this.positionX - this.radius <= leftEdge) {
      // bounce off the left edge
      this.positionX = leftEdge + this.radius;
      this.velocityX = this.velocityX * -this.bounciness;
      this.velocityY = this.velocityY * this.bounciness;
    }

    // code to check if we hit top or bottom
    if (this.positionY + this.radius >= bottomEdge) {
      // bounce off the bottom
      this.positionY = bottomEdge - this.radius;
      this.velocityY = this.velocityY * -this.bounciness;
      this.velocityX = this.velocityX * this.bounciness;
    } else if (this.positionY - this.radius <= topEdge) {
      // bounce off the top
      this.positionY = topEdge + this.radius;
      this.velocityY = this.velocityY * -this.bounciness;
      this.velocityX = this.velocityX * this.bounciness;
    }
  }

  render() {
    stroke(0);
    fill(this.ballR, this.ballG, this.ballB);
    ellipse(this.positionX, this.positionY, this.size, this.size);
  }
}
