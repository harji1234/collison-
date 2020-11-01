var fixedRect, movingRect
function setup() {
  createCanvas(1000,800);
  fixedRect=createSprite(400, 200, 250, 250);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(150,200,250,250)
  movingRect.shapeColor="green";
  movingRect.debug=true;
  
}

function draw() {
  background(0,0,0); 
   movingRect.x=mouseX;
   movingRect.y=mouseY;
   console.log(movingRect.x-fixedRect.x);
 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
 }
 else
 {
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
 }
  drawSprites();
}