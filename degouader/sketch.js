let degwade;

function setup() {
  createCanvas(windowWidth, windowHeight);

  degwade = ligneHorizon(width, height, 

    0, 255,
    80, 120, 
    80, 120,

    255, 0, 
    120, 80, 
    120, 80);

  
    
    
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  image(degwade, 0, 0, width, height);
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

function degwaCircle(w, h, r1, r2, v1, v2, b1, b2) {
  let graphic = createGraphics(w,h);
  
  /*rectMode (CENTER);
  translate (w/2, h/2);*/

  for (let compteur = 0; compteur < height; compteur++) {
    let sup1 = map(compteur, 0, h, r1, r2);
    let sup2 = map(compteur, 0, h, v1, v2);
    let sup3 = map(compteur, 0, h, b1, b2);

    graphic.fill (sup1, sup2, sup3);
    graphic.noStroke();
    graphic.ellipse (w/2, h/2, h-compteur, h-compteur);

}
return graphic;
}
