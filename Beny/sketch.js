function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120, 220, 220);
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 220, 220);
  fill(0);
  rect(100, 100, width - 2 * 100, height - 2 * 100);

  fill(255, 200, 255);
  textAlign(CENTER, CENTER);
  text("Bonjour", width / 2, height / 2);
}