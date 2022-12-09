function setup() {
  createCanvas(windowWidth, windowHeight);  
}
function draw() {
  background(50, 40, 50);
  stroke(255,255,255);
  
  for(nTole = 0; nTole < 30000; nTole++){    
    stroke(random(255),random(255),random(255));
    //starMaquer(noise(1, nTole) * width, noise(2, nTole) * height, 65, 75);
     starMaquer(random(windowWidth), random(windowHeight), 10, 10);
  }
   
  if(mouseIsPressed){

    fill(100, 100, 100);
    rect(mouseX, mouseY, 10, 10);

  }

}

function starMaquer(x, y, w, h){
  push();

  translate(x, y);
  if(frameCount%5==0){
    line(-w/2,0,w/2,0);  
  } 
  else{
    line(0, -h/2, 0, h/2);
  }

  pop();
}
