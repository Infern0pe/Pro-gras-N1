let SFlakeSpeed = 1;
let FlowCons = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let ccp = 0; ccp < 50; ccp++) {
    FlowCons.push(new SFlake());  
  }
}

function draw() {
  background(155, 150, 155);
  
  for (let ccp = 0; ccp < 50; ccp++) {
    FlowCons[ccp].display();
      
  }

}


class SFlake{
  constructor(){
    this.posX = random(width);
    this.posY = 0;
  }
  display(){
    fill(255);
    noStroke();
    ellipse(this.posX, this.posY, 15, 15);
    this.posY = this.posY + SFlakeSpeed;
  }
}