let x = 300;
let y = 500;
let diameter = 20;
let dragging = false;
let timer = 2;

function preload(){ 
doggo = loadImage("LeImage/doggo.jpg")
apple = loadImage("LeImage/apple.jpg")
orang = loadImage("LeImage/orange.jpg")  
doge = loadImage("LeImage/doge.jpg")
Restart = loadImage("LeImage/Restart.png")
}
function setup() {
  createCanvas(550, 600);
  back = color(255, 160, 0);
}
//Declare variables n stuff
var winMsg = "";
var win = 0;
var loseMsg = "";
var apple;
var cat;
var dog;
var choice;
var imgWidth = 100;
var imgHeight = 100;
let sources
let buttonArray
var lvlMsg = "";
var complete = "";
var startMsg = "";
var done;
var round2 = "";

  


function draw() {
  background("lightgreen");
  textSize(20);
  rect(20, 0, 200, 200);
  fill(255, 255, 255);
  rect(330,0,200,200);
  fill(255, 255, 255);
  image(doggo,20,0,200,200);
image(doge,330,0,200,200);
  noStroke();
  ellipse(x, y, diameter, diameter);
  fill('black');
  if(x == 300 && y == 500){
    text(startMsg, 100, 280);
    textSize(10);
    startMsg = "Drag the circle over doge!";
  }
  
  if(win == 1){
    
  background("lightgreen");
  textSize(20);
  //rect(20, 0, 200, 200);
  fill(255, 255, 255);
  //rect(330,0,200,200);
  fill(255, 255, 255);
  image(apple,20,400,200,200);
image(orang,330,400,200,200);
  noStroke();
  ellipse(x, y, diameter, diameter);
  fill('black');
    //if(x <)
  }
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  if(win == 1){
    if(timer != 0){fill(0);
    text(winMsg, 100, 280);
    textSize(10);
    win = 1;
    winMsg = "You matched it! Now select the orange!";
      
      
    }
    if(x > 20 && x < 220 && y > 400 && y < 600){
      fill('red');
      text(loseMsg, 200, 300);
      loseMsg = "Try again.";
    }
  }
  
  if(dragging){
    x = mouseX;
    y = mouseY;
  }
  //Win scenario
  noStroke();
  ellipse(x, y, diameter, diameter);
  fill(0, 0, 0);
  if(x > 330 && x < 600 && y > 0 && y < 200) {
    print('Match');
    fill(0);
    text(winMsg, 100, 280);
    textSize(10);
    win = 1;
    winMsg = "You matched it! Now the orange!";
  }
    if(x > 330 && x < 600 && y > 400 && y < 600) {
    print('Complete');
    fill(0);
    text(complete, 100, 280);
    textSize(10);
    complete = "Yay!";
      done = 1;
}
    
    }
      
  
    //Lose scenario
    if(x > 0 && x < 200 && y > 0 && y < 200) {
      print('Mismatch');
      fill('red');
      text(loseMsg, 200, 300)
      loseMsg = "Try again.";
  }
  
  
//Drag ellipse

function mousePressed() {
  
  if(dist(x, y, mouseX, mouseY) < diameter/2){
    dragging = true;
  }
}

function mouseReleased(){
  dragging = false;
}







