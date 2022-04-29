
let xSpeed = (3, 8);
let ySpeed = (-8, -3);
let xBall = Math.floor(Math.random() * 400) + 50;
let yBall = 50;
let score = 0;
let bg;
let brick1;
let brick2;
let brick3;
let brick4;
let brickimage;
let holdL;
let resetButton;
function setup() {
   bg = loadImage('background/brickgame background.jpg')
  brickImage = loadImage('background/brickimage.png')
  holdL =loadImage('background/GameoverSMB.webp')
  createCanvas(500, 500);
  brick1 = new brick();
  //brick2 = new brick();
  //brick3 = new brick();
  //brick4 = new brick();
  resetButton = createButton("Reset");
  resetButton.size(60,25)
  resetButton.position(0,0)
  resetButton.mousePressed(reset);

 
}

function draw() {
  background(bg);
  
  fill('blue');//for color you need to have it iin ''
  rect(mouseX, 475, 90, 15); //paddle that the ball is going to bounce off of
  noStroke();
  
  //funcions
  move();
  bounce();
  ballImage();
  bounceOffPaddle();
  endgame();
  
  
  fill('black');
  rect(200,0,120,25);
  
  //need score 
  fill('white');
  textSize(20);
  text("Score: " + score, 210, 20);
  
 
  
  brick1.display();
 // brick2.display();
 // brick3.display();
 // brick4.display();
  brick1.bounceoffbrick()
 // brick2.bounceoffbrick()
 // brick3.bounceoffbrick()
 // brick4.bounceoffbrick()
  
}
function reset(){
  score =0;
  background(bg);
  xSpeed = (3, 8);
  ySpeed = (-8, -3);
  xBall = Math.floor(Math.random() * 400) + 50;
  yBall = 50
}
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}
//bounce off the walls fucntion
function bounce() {

  if (xBall < 10 || xBall > 500 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 || yBall > 500 - 10) {
    ySpeed *= -1;
  }
  
}
//the ball isn't auto seen for some reason so you gotta have this shit
function ballImage() {
  fill('red');
  ellipse(xBall, yBall, 20, 20);
}
//need stupid actual ball fucntion
//need paddle function
 function bounceOffPaddle(){
  if ((xBall > mouseX && xBall < mouseX + 90) && (yBall + 10 >= 475)) {
    xSpeed *= -1;
    ySpeed *= -1;
     
  }
}
function endgame(){
      if (yBall >= 490){
        background(holdL);
        xSpeed=0;
        ySpeed=0;
      }
    }
//need bricks
  class brick {
  constructor() {
    this.xbrick = random(25,475);
    this.ybrick = 100;
    this.diameter = 50;
    //this.brickDepth = this.
  }
    display() {
      
    image(brickImage,this.xbrick, this.ybrick, this.diameter , this.diameter );
     // fill('white');
     // circle(this.xbrick,this.ybrick,this.diameter);
  }
    bounceoffbrick(){
  if ((xBall > this.xbrick && xBall < this.xbrick + 50 ) && (yBall <= this.ybrick)){
    xSpeed *= -1;
    ySpeed *= -1;
    score++;
    this.xbrick = random(25,450);
    this.ybrick = 100;
    this.diameter = 50;
  if (yBall<= this.ybrick +50){
  
  }
     if ((xBall > this.xbrick && xBall < this.xbrick + 50 )&&(yBall > this.ybrick)){
     
     }
    }
  }
}

