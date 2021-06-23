const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var drops=[];
var random;
var maxDrops=100;

var umbrella;

function preload(){
    
}

function setup(){
    createCanvas (600,1000);
 engine=Engine.create();
 world=engine.world;

 if (frameCount% 200 === 0){
     for(var i=0; i<maxDrops; i++){
         drops.push(new Drops(random(0,600),random(0,600)));
     }
 }
   umbrella= new Umbrella(300,500);
    
}

function draw(){
    Engine.update(engine);
    background(0);

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

umbrella.display();

    drawSprites();
}   

