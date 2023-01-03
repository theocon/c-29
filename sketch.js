const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground, fruit, rope, fruit_con;

function preload(){

}

function setup() {
  createCanvas(600,700);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300, 680, 650, 20);

  rope = new Rope(6, {x:300, y:30})

  fruit = Bodies.circle(300, 350, 20);
  Matter.Composite.add(rope.body, fruit);
  fruit_con = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

}

function draw() {
  background(51);

  Engine.update(engine);

  ground.show();
  rope.show();

  ellipse(fruit.position.x,fruit.position.y, 20, 20);
}

