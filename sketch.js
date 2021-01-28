var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(300,570,200,20);
    block1.shapeColor = "red";

    block2 = createSprite(100,570,200,20);
    block2.shapeColor = "blue";

    block3 = createSprite(500,570,200,20);
    block3.shapeColor = "pink";

    block4 = createSprite(700,570,200,20);
    block4.shapeColor = "orange";

    box = createSprite(random(20,750),200,20,20);
    box.shapeColor = "white";

    box.velocityX = 4;
    box.velocityY = 6;
    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();

     box.bounceOff(edges);

     if(block1.isTouching(box)|| box.bounceOff(block1)){
         box.shapeColor = "red";
         music.play();
     }

     if(block2.isTouching(box)){
         box.shapeColor = "blue";
         box.velocityX = 0;
         box.velocityY = 0;
         music.stop();

     }

      if(block3.isTouching(box)|| box.bounceOff(block3)){
         box.shapeColor = "pink";
     }

      if(block4.isTouching(box)|| box.bounceOff(block4)){
         box.shapeColor = "orange";
     }
    // if(box.x >= 0 || box.x = 800){
         
    // }
    
     
    
       
    

    
    
     

    //add condition to check if box touching surface and make it box
    drawSprites();

    
    }

