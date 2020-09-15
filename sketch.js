var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	
	 
	//paper=createSprite(50,650);
    

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paper=new 	Paper(110,450,30);
	 ground1=new Ground(400,670,800,10);
	 bottom=new dustbin(600,650,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 paper.display();
 ground1.display();
 bottom.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-3})
	}
}

