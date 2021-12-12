var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaves;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg  = loadImage("apple.png");
  leavesimg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
var select_sprite=Math.round(random(1,2))
 if (frameCount%80===0){
   if (select_sprite===1){
     createApples();
   }
   else {
     createLeaves();
   }
 }
  drawSprites();

}
function createApples() {
  apple =createSprite(random(50,350),40,10,10);
  apple.addImage(appleimg);
  apple.scale = 0.07;
  apple.velocityY=3;
  apple.lifetime=150;
}
function createLeaves() {
  leaves=createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesimg);
  leaves.scale = 0.07;
  leaves.velocityY=3;
  leaves.lifetime=150;
}