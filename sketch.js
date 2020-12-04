
var survivalTime=0;
var monkey , monkey_running
var bananaGroup ,bananaImage, obstacleGroup, obstacleImage;
var score;
var ground;
function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(600,200);
  
  monkey=createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.09;
  
  ground=createSprite(200,171,1200,10);
  ground.velocityX=-3;
 
  
  
 bananaGroup=createGroup();
  ObstacleGroup=createGroup();
}

function draw() {
background(280);
          
  if(ground.x<0)
    {
      ground.x=ground.width/2;
    }
  
  stroke("white");
  textSize=20;
  fill("white");
  text("Score:", + score,20,10);
  
  stroke("black");
  textSize=20;
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:" + survivalTime,200,10);
  
  
  if(keyDown("space")&& monkey.y>=100)
  {
    monkey.velocityY=-7;
  }
monkey.velocityY=monkey.velocityY+0.4;  
  monkey.collide(ground);
   
  spawnbanana();
  spawnobstacle();
  
  drawSprites();
}
 
function spawnbanana()
{
  if(frameCount % 80 === 0)
  {
  var banana=createSprite(600,120,40,20);
    banana.y=Math.round(random(40,60));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=200;
    banana.scale=0.05;
  //banana.debug=true;
    bananaGroup.add(banana);
  }
}

function spawnobstacle()
{
  if(frameCount % 300 === 0)
  {
  var obstacle=createSprite(600,350,40,20);
    obstacle.y=Math.round(random(156,157));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    obstacle.scale=0.09;
    //obstacle.debug=true;
    
    ObstacleGroup.add(obstacle);
  }
}
