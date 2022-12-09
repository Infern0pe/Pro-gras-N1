function setup() {
  //alert("Houi        HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHAAAAAANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN!!!!!!");
  createCanvas(windowWidth, windowHeight); 
  background(255, 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  /*rect(100, 50, 50, 50);

  push();
  fill(100, 255, 255);
  rect(120, 70, 10, 10);
  pop();

  rect(200, 200, 70, 70)*/

  /*for (var i = 0; i < width; i += 10) {
    
  	line(i, 0, i, height);
  	line(width, i, 0, i);
  } */ 
  noSmooth();
  angleMode(DEGREES);
  //barbe
  fill(0);
  square(800,740,60,15);
  square(860,740,60,15);
  quad(920, 780, 880, 600, 1100, 520, 1100, 520);
  rect(770, 720, 100, 60);

  //Cheveux
  square(700, 100, 380, 120);

  //Tete
  fill(237, 178, 146);
  noStroke();
  ellipse(860, 490, 360, 580);
  arc(880, 250, 300, 140, 90, 0, OPEN);

  fill(223, 139, 93);
  push();
  square(700, 220, 100, 25);
  translate(width / 2, height / 2);
  rotate(45);
  pop();
  
}