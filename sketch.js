
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	box1 = new Ground(550,650,20,100)
	box2 = new Ground(700,650,20,100)
paper= new Paper(200,100,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
 // drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Body.applyForce(paper.body,paper.body.position,{x:55,y:-45})	
	}



}


