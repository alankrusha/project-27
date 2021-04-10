
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roofObject1, boObject1, rope1;
var bobObject2;
var bobDiameter = 40;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  roofObject1 = new Roof(150, 100, 250, 20); 

  bobObject1 = new Bobs(150, 250, 15); 
  rope1 = new Rope( bobObject1.body, { x: 200, y :200});

  bobObject2 = new Bobs(200, 250, 15);
  rope2 = new Rope(bobObject2.body, { x: 250, y: 200});

  bobObject3 = new Bobs(250, 250, 15);
  rope3 = new Rope(bobObject3.body, { x:300, y: 200});

  bobObject4 = new Bobs(300, 250, 15);
  rope4 = new Rope(bobObject4.body, { x: 350, y: 200});

  bobObject5 = new Bobs(350, 250, 15);
  rope5 = new Rope(bobObject5.body, {x: 400, y: 200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  bobObject1.display();
  
  rope2.display();
  bobObject2.display();
  
  rope3.display();
  bobObject3.display();

  rope4.display();
  bobObject4.display();

  rope5.display();
  bobObject5.display();

  roofObject1.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce (bobObject1.body, bobObject1.body.position, {x:-6, y: -3});
  }
}


