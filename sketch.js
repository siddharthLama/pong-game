var paddle,ball

var border1,border2,border3

var gameState = "serve"; 

function preload(){
ball1 = loadImage("ball.png");
paddle1 = loadImage("paddle.png")
bg = loadImage("bg.png");
}


function setup() {
  createCanvas(1200,390);
 paddle = createSprite(785, 200, 10, 70);

 paddle.addAnimation("paddle1",paddle1)

 ball= createSprite(500, 200, 15, 15);
 ball.addAnimation("ball1",ball1)
 ball.setCollider("circle",0,0 ,10)

 border1= createSprite(400, -7, 800, 15);
 border2= createSprite(400, 407, 800, 15);
 border3= createSprite(-7, 200, 15, 400);
}

function draw() {
  createCanvas(800,400)
  background(bg);  

  //paddle.y = mouseY;

 // ball.debug = true;
// paddle.debug = true;

  ball.bounceOff (paddle);
  ball.bounceOff (border1);
  ball.bounceOff (border2);
  ball.bounceOff (border3);

 paddle.collide(border1,border2,border3)

  if (keyDown("space")) {
    ball.velocityX=7;
    ball.velocityY = 7;
    
  }
  if (keyWentDown(UP_ARROW)) {
    paddle.y = paddle.y -20
  }
  if (keyWentDown(DOWN_ARROW)) {
    paddle.y = paddle.y +20
  }

  if (keyDown("space") &&  gameState === "serve") {
    serve();
 gameState = "play";
  }

  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
    
    reset();
    gameState = "serve";
  }

  if( ball.x > 800) {
    gameState = "over";
    text("press ENTER to restart",160,170);
     text("YOU LOSE",180,200);
  }
  if (keyDown("ENTER") && gameState === "over") {
    gameState = "serve";
  }

drawSprites();
 
//fill("red");
  //text(World.mouseX+":"+World.mouseY,300,100);


}

function serve() {
  ball.velocityY =7;
  ball.velocityX =7;
}

function reset() {
  ball.x = 400;
  ball.y = 200;
  paddle.x = 785; 
  paddle.y = 200;

  ball.velocityX = 0;
  ball.velocityY = 0;
}


