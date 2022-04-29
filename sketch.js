var bubbles = [];
let bubbleAm = 10;
let screen = 1;
let timer = 60;
let bubblepopped = 0;
let Level = 0;
    

function mouseClicked() {
      if (screen == 1 || screen == 3) {
      
      if((mouseX > 275) && (mouseX < 275 + 125) &&
        (mouseY > 285) && (mouseY < 285 + 125) && (timer == 0 || 60)) {
      screen = 4;
      bubbleAm = 10;
     bubblepopped = 0;
        timer = 60;
     Level = 0;
    
       
       
      }
    }
}
function setup() {
  createCanvas(700, 700);
   //let bubbleAmount = 10;
  


  
  for (var i = 0; i < bubbleAm; i++) {
		bubbles.push({
			x: random(width),
			y: random(height),
			radius: random(50, 100)
		});
	}
 
}
function draw() {
  background(255);

  let Instr = "For this game you will pop as many bubbles as possible using your mouse, when you clear the "
  let moreInstr = "screen of bubbles you will move on to the next level with even more bubbles, clear out as many"
  let MoreInstr = " bubbles are possible with in 60 seconds. Click the start button to begin the game, goodluck."
  
  let startb = "Start"
  //let screen = 1;
  if(screen == 1) {
    
   fill(0);
  textSize(15);
  text(Instr, 45, 85);
    
    fill(0);
  textSize(15);
  text(moreInstr, 45, 115);
    
    fill(0);
  textSize(15);
  text(MoreInstr, 45, 145);
    
    fill(0,0,255)   
    rect(275, 285, 125,125)
    
    
    fill(0)
    textSize(25);
    text(startb, 310, 360)
    
    
    
   
  }
  
  

  
  if (screen != 1 && screen != 3){
    
  
  fill(0);
  textSize(25);
  text("Level: " + Level , 10, 25);
  
  fill(0);
  textSize(25);
  text("Bubbles Popped " + bubblepopped , 10, 55);
  
  fill(0);
  textSize(25);
  text("Timer: " + timer , 10, 85);
 
	
  for (var i = 0; i < bubbles.length; i++) {
		var bubble = bubbles[i];
		
    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
			if (mouseIsPressed) {
				bubbles.splice(i, 1); // remove this bubble!
                bubblepopped++;
                
			}
			fill('green');
		} else {
			fill(255,220,200,200);
		}
	
    ellipse(bubble.x, bubble.y, bubble.radius*2);
		bubble.x += random(-1,1);
		bubble.y += random(-1,1);
	}
  
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }

  if(bubbles.length == 0){
  bubbleAm+=2;
    Level++;
   setup();
 }
  }
   let String1 = "Congratulation, you're on your way to better improving your FMS skills!"
   let String2 = "Your stats are as followed: "
   let String3 = "You popped a total of "
   let String4 = "You also go through "
   let String5 = "Play Again"
   
  if(timer == 0){
    screen = 3;
    
  }
  
  if(screen == 3) {
    fill(0);
  textSize(15);
  text(String1, 45, 85);
    
    fill(0);
  textSize(15);
  text(String2, 45, 115);
    
    fill(0);
  textSize(15);
  text(String3 + bubblepopped + " Bubbles!", 45, 145);
    
    
    fill(0);
  textSize(15);
  text(String4 + Level + " Levels!", 45, 175);
    
    
    fill(0,0,255)   
    rect(275, 285, 125,125)
    
     fill(0)
    textSize(15);
    text(String5, 305, 360)
    
  }

}
 