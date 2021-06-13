
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper, ground, launcher
var dustbinIMG,dustbin, dustbin1, dustbin2, dustbin3

function preload(){
	dustbinIMG = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = createSprite(870, 564, 200, 200)
	dustbin1 = new Dustbin(870, 675, 200, 20)
	dustbin2 = new Dustbin(960, 575, 20, 200)
	dustbin3 = new Dustbin(780, 575, 20, 200)
	paper = new Paper(100, 635, 70)
	ground = new Ground(500, 690, 1000, 20)
	launcher = new Launcher(paper.body, {x:100, y:100})


	Engine.run(engine);
  
}


function draw() {
  background(255);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  launcher.display();
  dustbin.addImage(dustbinIMG)
  dustbin.scale = 0.8

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:950, y:-950});
	}
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}