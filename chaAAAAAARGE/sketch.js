let myImage;

function preload(){
  myImage = loadImage('assets/Drem.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255, 0, 0);
  image(myImage, 0, 0);
}