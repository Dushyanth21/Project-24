const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,800,1200,20)

    box1 = new Box(800,750,70,70)
    box2 = new Box(900,750,70,70)
    pig1 = new Pig(850,750)
    log1 = new Log(850,680,250,PI/2)

    box3 = new Box(800,640,70,70)
    box4 = new Box(900,640,70,70)
    pig2 = new Pig(850,640)
    log2 = new Log(850,580,250,PI/2)
    bird1 = new Bird(10,10)

    box5 = new Box(850,540,70,70)
    log3 = new Log(800,540,150,PI/8)
    log4 = new Log(900,540,150,-PI/8)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    bird1.display();

    box5.display();
    log3.display();
    log4.display();
}