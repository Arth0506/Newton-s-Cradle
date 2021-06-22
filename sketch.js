
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter=100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 150, 650, 50);
	bob1 = new Bob(195, 500, 100);
	bob2 = new Bob(295, 500, 100);
	bob3 = new Bob(395, 500, 100);
	bob4 = new Bob(495, 500, 100);
	bob5 = new Bob(595, 500, 100);
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter, 0);
	rope3 = new Rope(bob3.body, roof.body, -bobDiameter/100, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  textSize(20);
	text("Use your mouse to drag the first bob", 350, 100);

}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}



