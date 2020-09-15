class Paper{
    constructor(xposition,yposition,radius){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.image=loadImage("paper.png")
    this.x=xposition
    this.y=yposition
    this.radius=radius
    this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
    World.add(world, this.body);
}

display(){
push();
translate(this.body.position.x,this.body.position.y);
/*ellipseMode(RADIUS)
strokeWeight(3);
fill(255,0,255)*/
//ellipse(0,0,this.radius,this.radius);
imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop();
}

}

