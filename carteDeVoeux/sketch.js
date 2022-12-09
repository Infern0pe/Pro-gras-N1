/* Faire une carte de voeux de bon rétablissement où on écrit son nom et cela déclenche une série de texte */

let degrade; 
let myFont;

function preload(){
  myFont = loadFont('assets/Parisienne.ttf');
}

function setup() {
  let nomType = createInput ("");

  createCanvas (windowWidth, windowHeight);

  degrade = ligneHorizon(width, height,
                          240, 190,
                          150, 150, 
                          180, 180,
                          
                          190, 240,
                          150, 150,
                          180, 180);
  
  
  nomType.position(windowWidth/2, 2*windowHeight/3);
  nomType.size(100);
  nomType.input(quandNomIsTyped);
  

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let diffW = windowWidth/20
  let diffH = windowHeight/20
  
  image(degrade, 0, 0);

  noFill();
  strokeWeight(5);
  stroke (200, 180, 240);
  rect (diffW, diffH, width - 2 * diffW, height - 2 * diffH, 10);
 
  push (); //Bien placer le texte au centre
  fill (255, 0, 0);
  noStroke();
  textFont(myFont, 30);
  translate (width/2, height/2);
  text ("Bon rétablissement", -20, -6);
  pop ();
  if (quandNomIsTyped = false){
    console.log('thank god');
    starMaquer();
  }
}

/*Faut corriger cette fonction pour que quand on depasse les 3 caractères l'animation se lance */
function quandNomIsTyped (){
  
  /*let nombreNom = [];
  let newLength;
  while (nombreNom.length < 3) {
    console.log('you are typing: ', this.value());
    newLength = nombreNom.push('this.value()');
    console.log('longueur:', nombreNom.length);
  }
  console.log('yoooo');
  return false;*/

  
}

function ligneHorizon(w, h, r1, r2, v1, v2, b1, b2, ir1, ir2, iv1, iv2, ib1, ib2) {
  let graphic = createGraphics(w,h);
  
  
  for (let compteur = 0; compteur < height; compteur++) {
    let sup1 = map(compteur, 0, h/2, r1, r2);
    let sup2 = map(compteur, 0, h/2, v1, v2);
    let sup3 = map(compteur, 0, h/2, b1, b2);
  
    let inf1 = map(compteur, h/2, h, ir1, ir2);
    let inf2 = map(compteur, h/2, h, iv1, iv2);
    let inf3 = map(compteur, h/2, h, ib1, ib2);

  if(compteur < h/2){
    graphic.stroke(sup1, sup2, sup3); 
  }
  else {
    graphic.stroke(inf1, inf2, inf3);
  }
  graphic.line (0, compteur, w, compteur);
}
return graphic;
}
/*Faut simplifier la fonction*/ 
function mesEtoiles(){
  for(nTole = 0; nTole < 30000; nTole++){    
    stroke(random(255),random(255),random(255));
    //starMaquer(noise(1, nTole) * width, noise(2, nTole) * height, 65, 75);
     starMaquer(random(windowWidth), random(windowHeight), 10, 10);
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