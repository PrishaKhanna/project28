
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background.color=("255,255,255");


	ground=createSprite(400,680,800,20);
	ground.shapeColor=color("127,127,127");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stoneObj= new stone(235,420,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  stoneObj.display();

  drawSprites();
 
}



