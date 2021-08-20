const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine
var meteorGroup
var bullet, spaceShip, meteors
var collision
var flag

function preload(){
  spaceImg=loadImage("space.jpg")
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  spaceShip=new ship(200,200,150,200)
  meteors=new meteor(1100,100,50,50)
  bullet= new bomb(200,200,50,25)

  meteorGroup= new Group()
}

function draw() {
  Engine.update(engine);
  background(spaceImg);  

  spaceShip.display()
  meteors.display()
  bullet.display()


  spaceShip.body.position.y=mouseY
  spaceShip.body.position.x=200
  bullet.body.position.y=mouseY
  //collision = Matter.SAT.collides(bullet.body, meteors.body)
  distance=dist(bullet.body.position.x,bullet.body.position.y,
  meteors.body.position.x,meteors.body.position.y)

  if(distance<=50){
    Matter.Body.setVelocity(meteors.body,{x:0,y:10})
    World.remove(world,bullet.body)
  }else{
    Matter.Body.setVelocity(meteors.body,{x:-1,y:0})
  }
  console.log(distance)
  mousePressed()
  Position()
  drawSprites();

}

function Position(){
  if(bullet.body.position.x >= 1200){
    bullet.body.position.x=300
    Matter.Body.setVelocity(bullet.body,{x:0,y:0})
  }
}

function mousePressed(){
  Matter.Body.setVelocity(bullet.body,{x:15,y:0})
}