
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new box(620,570,20,120)
	box2 = new box(680,590,130,20);
	box3 = new box (720,570,20,120)
	ground1 = new ground(410,660,700,20);
	Paperobj = new Paper(100,620,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  

  //box1.display();
  box2.display();
  //box3.display();
  ground1.display();
  Paperobj.display();

  
    drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(Paperobj.body,Paperobj.body.position,{x:50,y:-55})
	
}
}


