const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var engine, world;
var engine,world
var hammer;
var rubber;
var plane;
var ground;
var line;
var c1,c2,c3,c4,c5,c6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    line= new Line(600,height,1200,50)
    hammer = new Hammer(10,100);
  plane=new Plane(600,200,40,50);
  rubber=new Rubber(900,100,10,20);
  c1=new Rubber(400,40,2);
  c2=new Rubber(450,40,2);
  c3=new Rubber(500,40,2);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);



    hammer.display();
  rubber.display();
  plane.display();
  line.display();
  c1.display();
  c2.display();
  c3.display();
}