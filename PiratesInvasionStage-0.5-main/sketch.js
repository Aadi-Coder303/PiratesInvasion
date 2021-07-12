const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 300, 400, 400);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(200, 200, 100, 100, 10);
  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  


  ground.display();
  

  tower.display();
  cannon.display();
  
  Engine.update(engine);
}







