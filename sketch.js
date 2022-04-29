/***********************************
	A game based on exiting a maze.
  If you touch any obstacles, you have to start over.
  Sometimes you have to click on a door to get passed.
************************************/

var doorOpen = 0;
var ready = -1;
var endMsg = "";
var c;
var Instr = "";
var Instr2 = "";
var scope;


function setup() {
  createCanvas(600, 450);
  background(220);
  c = 'blue'
}

function draw() {
  var d = 220;
  // Reset background
	if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    background(220)
  }
  noStroke();
  // Entrance Box
  textSize(20);
  fill('blue');
  rect(0,0, 200, 30);
  fill('yellow');
  text("Entrance", 20, 20);
  
  // Exit Box
  fill('green');
  rect(530,0, 70, 30);
  fill(255);
  text("Exit", 550, 20);
  
  // Obstacles and Walls
  fill('black');
  // Big Walls
  rect(200,0, 10, 300);
  rect(200, 300, 300, 10);
  rect(100, 200, 10, 100);
  rect(150,300, 10, 100);
  rect(80, 350, 70, 10);
  rect(150, 335, 100, 10);
  rect(250, 335, 10, 70);
  rect(350, 250, 10, 150);
  rect(420, 350, 10, 100);
  ellipse(0, 300, 150);
  ellipse(250, 450, 100);
  ellipse(580, 420, 100);
  // End Maze
  rect(400,250, 210, 10);
  rect(500,120, 100, 10);
  ellipse(350, 150, 100);
  ellipse(450, 80, 80);
  // Bubble Run
  rect(100, 100, 100, 10);
  rect(40, 100, 10, 150);
  rect(50, 150, 100, 10);
  rect(100, 200, 100, 10);
  
  // Hidden door
	
  
  // Play
  if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    ready = 1;
    scope = 0;
    endMsg = "";
  }
  if(ready == 1) {
    strokeWeight(2);
    stroke('orange');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // Win Scenario
  if(ready == 1 && mouseX > 530 && mouseX < 600 && mouseY > 0 && mouseY < 30) {
      ready = 0;
      scope = 1;
    
      endMsg = "Well Done!";
    	c = 'blue';
  }
  // Opening message
  if(ready == -1) {
    c = 'green';
    endMsg = "You Got This!";
    Instr = "Your goal is to hover over the "
    Instr2 = " entrance to start, then avoid all "
    Instr3 = "obstacles to get to the exit."
  }
  	textSize(60);
    fill(c);
    text(endMsg, width/2-200, height/2);
   
    textSize(12)
    fill(0)
    text(Instr, 15, 45);
  
    textSize(12)
    fill(0)
    text(Instr2, 15, 65);
  
    textSize(12)
    fill(0)
    text(Instr3, 15, 85);
  
  // Lose Scenarios
  if (scope != 1) {
    
  	rect(340,0, 10, 30);
    if(mouseX > 340 && mouseX < 350 && mouseY > 0 && mouseY < 30) {
      ready = 0;
      endMsg = "Barrier Hit!";
      c = 'red'
  	}
  
    
  // rect(40, 100, 10, 150);
	if(mouseX > 40 && mouseX < 50 && mouseY > 100 && mouseY < 250) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  // rect(50, 150, 100, 10)
  if(mouseX > 50 && mouseX < 150 && mouseY > 150 && mouseY < 160) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 110) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 110) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 400 && mouseX < 610 && mouseY > 250 && mouseY < 260) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 500 && mouseX < 600 && mouseY > 120 && mouseY < 130) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 420 && mouseX < 430 && mouseY > 350 && mouseY < 450) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 350 && mouseX < 360 && mouseY > 250 && mouseY < 400) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 250 && mouseX < 260 && mouseY > 335 && mouseY < 405) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 150 && mouseX < 250 && mouseY > 335 && mouseY < 345) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 80 && mouseX < 150 && mouseY > 350 && mouseY < 360) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 150 && mouseX < 160 && mouseY > 300 && mouseY < 400) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 100 && mouseX < 110 && mouseY > 200 && mouseY < 300) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 200 && mouseX < 500 && mouseY > 300 && mouseY < 310) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(mouseX > 200 && mouseX < 210 && mouseY > 10 && mouseY < 300) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  // ellipse(0, 300, 150);
  if(dist(0,300, mouseX,mouseY) < 75) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  // ellipse(250 ,450, 100);
  if(dist(250,450, mouseX,mouseY) < 50) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(dist(580,420, mouseX,mouseY) < 50) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(dist(350,150, mouseX,mouseY) < 50) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  if(dist(450,80, mouseX,mouseY) < 40) {
  	ready = 0;
  	endMsg = "Barrier Hit!";
    c = 'red'
  }
  }
}
  