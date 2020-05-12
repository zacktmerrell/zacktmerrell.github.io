let hr, min, sec, zm;


function preload() {
  hr = hour();
  min = minute();
  sec = second();
  zm = 1;
}

function setup() {
  noStroke();
  createCanvas(600,500);
  background(255);
  rectMode(CENTER);

  let radius = 300;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = 0;
  cy = 0;


}

function draw() {
  noStroke();
  //angleMode(DEGREES)


  background(mouseX, mouseX * mouseY, mouseY);


  push();
  translate(width/2, height/2, 0, 0);
  rotate(hour());

  fill(0,0,255);
  rect(0,0, 325, 375);
  pop();

  push();
  translate(width/2, height/2, 0, 0);
  rotate(minute());

  fill(255,0,0);
  rect(0,0, 225, 300);
  pop();

  push();
  translate(width/2, height/2, 0, 0);
  rotate(second());

  fill(0,255,0);
  rect(0,0, 150, 175);
  pop();

  push();
  let sec = second();
  let s = map(second(), 0, 60, 0, 600);
  if (sec % 2 > 0) {
  fill(second(), second() * 7, second());
} else {
  fill(second(), second(), second() * 7);
}
  ellipse(s, 100, second() * 5/3, second() * 5/3);



  let min = minute();
  let m = map(minute(), 0, 60, 0, 600);
  if (min % 2 > 0) {
  fill(minute() * 7, minute(), minute());
} else {
  fill(minute(), minute() * 7, minute() * 7);
}
  ellipse(m, 250, minute() * 5/3, minute() * 5/3);



  let hr = hour();
  let h = map(hour(), 0, 23, 0, 600);
  if (hr % 2 > 0) {
  fill(hour(), hour() * 7, hour());
} else {
  fill(hour() * 7, hour(), hour() * 7);
}
  ellipse(h, 400, hour() * 4.35, hour() * 4.35);
  pop();


  fill(mouseX * zm, mouseX * mouseY * zm, mouseY * zm);
  textAlign(CENTER);
  textSize(32);
  textStyle(BOLD);
  text(nf(hr, 2, 0) + ':' + nf(min, 2, 0) + ':' + nf(sec, 2, 0), 100, 50);


  push();
  angleMode(RADIANS)
  let x = map(second(), 0,60,0, TWO_PI) - HALF_PI
  stroke(255);
  strokeWeight(3);

  translate(hour() * 26.087, 400,0,0);
  line(0, 0, cx + cos(x) * secondsRadius, cy + sin(x) * secondsRadius);
  pop();

  push();
  angleMode(RADIANS)
  let y = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  stroke(255);
  strokeWeight(1);

  translate(second() * 10, 100,0,0);
  line(0, 0, cx + cos(y) * minutesRadius, cy + sin(y) * minutesRadius);
  pop();


  push();
  angleMode(RADIANS)
  let z = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  stroke(255);
  strokeWeight(2);

  translate(minute() * 10, 250,0,0);
  line(0, 0, cx + cos(z) * hoursRadius, cy + sin(z) * hoursRadius);
  pop();



  if (mouseIsPressed) {

    showtext();

   }
}

// function keyPressed() {
//     if( key == ' ' || key == ' ' ) {
//     zm = 0;
//
// }
// }
//
// function keyReleased() {
//     if( key == ' ' || key == ' ' ){
//       zm = 1;
//     }
// }


function showtext() {
  push();
  let mint = minute();
  let sect = second();

  fill(0);
  translate(width/2,50);
  scale(3.0);
  console.log("TOD is" + " " +isAMPM(hour())) ;
  console.log("hour" + " " + convert24hrTo12(hour())) ;
  let str;
  str = nf(convert24hrTo12(hour()),2,0) + ":";
  str += nf(mint, 2, 0) + ':';
  str += nf(sect, 2, 0) + " " ;
  str += isAMPM(hour()) ;
  textSize(19);
  textAlign(CENTER);
  text(str,0, 0, 180,20);
  pop();
}


function isAMPM (hrs) {
let tod;
if (hrs < 12) {  //its AM
 tod = "AM";
} else { //otherwise PM
 tod = "PM";
}
return tod;
}

function convert24hrTo12 (hrs) {
let nuHr;
 if (hrs < 13) {  //its normal 12 hour range
   nuHr = hrs;
 } else { // switch it from 24 to 12
   nuHr = hrs-12;
 }
 return nuHr;
}
