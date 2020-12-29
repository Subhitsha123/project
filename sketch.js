const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var boyImg,boy;

function preload()
{
	boyImg = loadImage('boy.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(470,350,25);
	mango2 = new Mango(560,300,25);
	mango3 = new Mango(700,350,25);
	mango4 = new Mango(600,250,25);
	mango5 = new Mango(700,250,25);
	mango6 = new Mango(630,350,25);

	stone = new Stone(190,500,20);

	ground = new Ground(600,700,1200,40);

	tree = new Tree(600,430,100,500);

	rope = new Rope(stone.body,{x:400,y:500});

	boy = new Boy(80,550,15,200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(220);

  tree.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  ground.display();

  stone.display();

  rope.display();

  boy.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  }

  function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
	rope.fly();
	console.log("hi")
 }
 

 function detectCollision(lstone,lmango){
	 mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if (distance<=lmango.r+lstone.r){
		 Matter.Body.setStatic(lmango.body,false)
	 }
	
	}

	function keyPressed(){
		if (keyCode === 32){
			Matter.Body.setPosition(stone.body,{x:190,y:500})
			constraint.attach(stone.body);

		}
	}

 

