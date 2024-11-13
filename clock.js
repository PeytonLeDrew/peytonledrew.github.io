let stars = [];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();

  // Generate stars
  for (let i = 0; i < 600; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      brightness: random(100, 255),
    });
  }
}

function draw() {
  background(0);
  drawStarField();

  let hr = hour();
  let min = minute();
  let sec = second();
  let hourRot = ((hr % 12) / 12) * 360;
  let minRot = (min / 60) * 360;
  let secRot = (sec / 60) * 360;

  // Draw the accretion disc
  push();
  translate(width / 2, height / 2);
  noStroke();

  fill(255, 0, 0, 80);
  ellipse(0, 0, 300, 300);

  fill(255, 165, 0, 90);
  ellipse(0, 0, 240, 240);

  fill(255, 255, 0, 90);
  ellipse(0, 0, 180, 180);

  // Hours
  push();
  rotate(hourRot - 90);
  fill(255, 0, 0);
  ellipse(135, 0, 30, 30);
  pop();

  // Minutes
  push();
  rotate(minRot - 90);
  fill(255, 165, 0);
  ellipse(105, 0, 30, 30);
  pop();

  // Seconds
  push();
  rotate(secRot - 90);
  fill(255, 255, 0);
  ellipse(75, 0, 30, 30);
  pop();

  // Black hole
  fill(0);
  ellipse(0, 0, 120);
  pop();
}

// Starfield
function drawStarField() {
  for (let i = 0; i < stars.length; i++) {
    stroke(255, stars[i].brightness);
    point(stars[i].x, stars[i].y);
  }
}
