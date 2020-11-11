
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1, ground,paper; 

function preload()
{
  paper=loadImage("paper.png");   
}


function setup(){
    var canvas = createCanvas(1800, 695);
    engine = Engine.create();
    world = engine.world;
    paper=new Paper(20,683);
    rect1 = new Dustbin(1600,570,150,190);
    ground = new Ground(900,685,1800,15);
}

function draw(){
    background("pink");
    Engine.update(engine);
    rect1.display();
   
  paper.display();
    ground.display();
   keyPressed();
}

function keyPressed(){
 if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4.5});

 }
}

