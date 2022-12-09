function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
function draw() {
  background(50, 40, 50)
  translate(width/2, height/2);
  
  noStroke();

  fill(100, 100, 100);
  rect(random(), random(), 25, 25);

  //rectMode(CENTER);

  //soleil

  push();
    rotate(millis() / 5);
    fill(250, 180, 90);
    rect(0, 0, 160, 160, 25);
    fill(250, 200, 100);
    rect(0, 0, 150, 150, 25);
    fill(255, 248, 131);
    rect(0, 0, 120, 120, 25);
    fill(250, 200, 100);
    rect(0, 0, 100, 100, 25);
    fill(255, 248, 131);
    rect(0, 0, 80, 80, 25);
  pop();

  //mercure

  push();
    rotate(millis() * 0.01);
    fill(200, 200, 100);
    ellipse(200, 200 , 50);
  pop();

  //Venus

  push();
    rotate(millis() * 0.009);
    fill(220, 180, 180);
    ellipse(300, 300, 80);
  pop();

  //Terre

  push();
    rotate(millis() * 0.008);
    fill(180, 180, 220);
    ellipse(450, 450, 120);
  pop();

  //Mars

  push();
    rotate(millis() * 0.007);
    fill(240, 170, 170);
    ellipse(600, 600, 110);
  pop();

  //Jupiter

  push();
    rotate(millis() * 0.006);
    fill(220, 180, 160);
    ellipse(800, 800, 200);
  pop();

  //Saturne 

  push();
    rotate(millis() * 0.005);
    fill(220, 200, 180);
    ellipse(1000, 1000, 160);
  pop();

  //Uranus

  push();
    rotate(millis() * 0.004);
    fill(220, 220, 250);
    ellipse(1200, 1200, 140);
  pop();

  //Neptune

  push();
    rotate(millis() * 0.003);
    fill(220, 220, 250);
    ellipse(1400, 1400, 140);
  pop();

}