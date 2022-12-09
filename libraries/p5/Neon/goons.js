class Goon {
    constructor(x, y){
        this.position = new p5.Vector(x, y);
        this.speed = p5.Vector;
    }
    draw(){
        this.position.add(this.speed);

        push(); 
        translate(
            this.position.x,
            this.position.y
        );
        fill(250, 0, 0);
        rect(x, y, 10, 10); 
        pop(); 
    }
}