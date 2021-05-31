var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 80);
 movingrect=createSprite(400,200,80,30);
 fixedrect.shapeColor="yellow";
 movingrect.shapeColor="blue";
}

function draw() {
  background("black");  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      fixedrect.shapeColor="yellow";
      movingrect.shapeColor="blue";
    }
    else{
      fixedrect.shapeColor="green";
      movingrect.shapeColor="green";
    }
  drawSprites();
}