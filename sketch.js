var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var bg;

function preload(){
    bg = loadImage("bg.jpg"); 
}

function setup(){
    createCanvas(1350, 650, displayWidth - 60, displayHeight - 30); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(bg);





    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,85,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,45,0);
    pop()



    //drawing the arcs
    strokeWeight(7);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    strokeWeight(7);
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
  // strokeWeight(5);
   //stroke(0,255,0);
  
   
}
