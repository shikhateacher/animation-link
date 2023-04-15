
var panda;
var panda_img;
function preload(){
    panda_img = loadAnimation('assets/tile000.png','assets/tile001.png','assets/tile002.png')
}



function setup() {
  createCanvas(800,400);
  panda = createSprite(100,100,100,100)
    panda.addAnimation('panda',panda_img)
}


function draw() {
  background('white');  
  drawSprites();
}