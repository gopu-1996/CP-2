class Ground{
    constructor(xposition,yposition,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(xposition,yposition,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position
        rectMode(CENTER)
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}