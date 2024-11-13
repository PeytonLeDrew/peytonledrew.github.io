let word = "Minecraft";
let blockSize = 80;
let grid = [];
let revealBlocks = 0;
let animationDuration = 5 * 60;
let animationStarted = false;
let font;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(64);
  font = "Arial";

  for (let i = 0; i < word.length; i++) {
    let x = i * blockSize + (width / 2 - (word.length * blockSize) / 2);
    let y = height / 2;
    grid.push({
      x: x,
      y: y,
      size: blockSize,
      letter: word[i],
      revealed: false,
    });
  }
}

function draw() {
  background(200);

  for (let i = 0; i < grid.length; i++) {
    let block = grid[i];

    if (block.revealed) {
      fill(0);
      textFont(font);
      text(block.letter, block.x + blockSize / 2, block.y + blockSize / 2);
    } else {
      fill(150, 75, 0);
      stroke(100);
      rect(block.x, block.y, block.size, block.size);
      noStroke();
      fill(0, 255, 0);
      rect(block.x, block.y, block.size, block.size / 8);
      rect(block.x, block.y + 8, block.size / 8, block.size / 8);
      rect(block.x + 20, block.y + 8, block.size / 8, block.size / 8);
      rect(block.x + 20, block.y + 16, block.size / 8, block.size / 8);
      rect(block.x + 30, block.y + 8, block.size / 8, block.size / 8);
      rect(block.x + 50, block.y + 8, block.size / 8, block.size / 8);
      rect(block.x + 70, block.y + 8, block.size / 8, block.size / 8);
    }
  }

  if (animationStarted && revealBlocks < animationDuration) {
    revealBlocks++;

    let blocksToReveal = map(
      revealBlocks,
      0,
      animationDuration,
      0,
      grid.length
    );
    for (let i = 0; i < blocksToReveal; i++) {
      grid[i].revealed = true;
    }
    if (revealBlocks >= animationDuration) {
      animationStarted = false;
    }
  }
}

function mousePressed() {
  if (!animationStarted) {
    animationStarted = true;
    revealBlocks = 0;
    for (let i = 0; i < grid.length; i++) {
      grid[i].revealed = false;
    }
  }
}

function keyPressed() {
  animationStarted = false;
  revealBlocks = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i].revealed = false;
  }
}
