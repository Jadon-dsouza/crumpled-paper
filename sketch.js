
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var options={
		isStatic:false,
		restitution:0:3,
		friction:0.5,
		density:1.2,

	
	}
}
var engine, world;
var box1;

function setup() {
	var createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box()
	ground = new Ground(200.390,400,20); 

function draw(){
	background(0);
	Engine.update(engine);

	box1.display()
	ground.display();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    drawSprites();
 
}

class Ground {
	constructor(x,y, width,height) {
		var options = {
			isStatic: true

		}
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height = height;
		world.add(world. this.body);
	}
	display(){
		var pos =this.body.position;
		rectMode(CENTER)
		fill(255);
		rect(pos.x, pos.y, this.width, this.height);
	}
}

