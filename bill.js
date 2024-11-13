// sketch.js
// Variables
// AME 230
//
// I added width and height variables to help position
// parts of Bill on the screen. I also used variables like arm_position
// to mirror the values to the other arm as well. Down below I changed
// up how the pupil moves to match the one similar to module 1's code.

function setup() {
  let width = 600;
  let height = 600;
  let canvas = createCanvas(width, height);
  canvas.parent(document.body);
}

function draw() {
  background(128);

  // Arms
  fill(0);
  stroke(0);
  arm_position = 155;
  arm_height_offset = 370;
  limb_width = 13;
  limb_height = 70;
  hand_width = 20;
  hand_height = 30;
  thumb_width = 20;
  thumb_height = 15;
  rect(width / 2, 340, width / 2, 13);
  fill(0);
  stroke(0);
  rect(arm_position, arm_height_offset, limb_width, limb_height);
  rect(arm_position + 290, arm_height_offset, limb_width, limb_height);
  ellipse(155, 410, hand_width, hand_height);
  ellipse(160, 405, thumb_width, thumb_height);
  ellipse(445, 410, hand_width, hand_height);
  ellipse(440, 405, thumb_width, thumb_height);

  // Legs
  fill(0);
  stroke(0);
  rect(250, 400, limb_width, limb_height + 30);
  rect(263, 450, 40, limb_width);
  rect(280, 464, limb_width, limb_height - 30);
  ellipse(280, 480, 15, 30);

  rect(350, 430, limb_width, limb_height + 10);
  rect(336, 465, 40, limb_width);
  rect(322, 480, limb_width, limb_height - 30);
  ellipse(322, 490, 15, 30);

  // Body
  fill(252, 255, 54);
  stroke(255, 255, 163);
  strokeWeight(3);
  triangle(190, 400, 300, 210, 410, 400);

  // Lines
  fill(218, 219, 114);
  stroke(0);
  strokeWeight(0);
  rect(300, 390, 210, 3);
  rect(300, 370, 185, 3);
  rect(300, 350, 165, 3);
  rect(240, 360, 3, 20);
  rect(300, 360, 3, 20);
  rect(360, 360, 3, 20);
  rect(350, 380, 3, 20);
  rect(250, 380, 3, 20);
  rect(220, 395, 3, 10);
  rect(290, 395, 3, 10);
  rect(370, 395, 3, 10);

  // Hat
  strokeWeight(0);
  fill(0);
  stroke(0);
  rect(300, 170, 20, 80);
  fill(0);
  stroke(0);
  rect(300, 210, 50, 10);

  // Bow Tie
  fill(0);
  stroke(0);
  triangle(270, 385, 270, 355, 300, 370);
  triangle(330, 385, 330, 355, 300, 370);

  // Eye Lashes
  fill(0);
  stroke(0);
  rect(293, 274, 2, 30);
  rect(279, 279, 2, 30);
  rect(307, 274, 2, 30);
  rect(321, 279, 2, 30);
  rect(293, 327, 2, 30);
  rect(279, 324, 2, 30);
  rect(307, 327, 2, 30);
  rect(321, 324, 2, 30);

  // Eyes
  stroke(0);
  strokeWeight(2);
  fill(255);
  ellipse(300, 300, 78, 60);

  // Pupil
  let pupilX = (mouseX / width) * 40 + 280;
  let pupilY = (mouseY / height) * 40 + 280;
  fill(0);
  strokeWeight(0);
  rectMode(CENTER);
  rect(pupilX, pupilY, 8, 38);
}
