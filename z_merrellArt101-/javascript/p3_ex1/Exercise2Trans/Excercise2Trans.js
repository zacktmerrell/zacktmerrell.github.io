var gSize = 50;
var rand = 0;
var value = 0;
var mac;
var mac2;
//font




function setup() {
createCanvas(800, 800);
background(0);
noStroke();

mac = loadImage('data/MAC.jpeg');
mac2 = loadImage('data/miller.jpg');
}

function draw() {
if (!mouseIsPressed) {
  noTint();
  image(mac, 0, 0, width/2, height/2);
  image(mac2, width/2, height/2, width/2, height/2);
} else {

  var checkCounter = 0;

   for (var i = 0; i < height; i=+ gSize) {
     checkCounter++;

     for ( var j = 0; j < width; j+=(gSize) ) {


       if ( (checkCounter % 2) == 0 ) {
         image(mac2, j, i, gSize, gSize);
       } else {
         tint(255, 40);
         image(mac, j, i, gSize, gSize);
       }
       checkCounter++;
     }
   }
}

  zmSign1("MAC", 450, 50);
  zmSign2("miller",50,450);
  textAlign(CENTER);
  zmSign3("RIP", mouseX ,400);
  zmSign4("RIP", mouseX ,400);
  textAlign(LEFT);


fill(second() * 5);
rect(180,165,100,15);
}





function keyPressed() {

  if ( key == 'm' || key == 'M' ) {
    // example of toggle logic
    if (value == 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
}


  function zmSign1(ss , locx, loy) {
       fill(120,50);
       rect(locx,loy,300,300);
       fill(34);
       rect(locx-10,loy-10,300,300);
       var k = color(0,second() * 5,0);
       zmDrawText(ss,locx+20,loy+50,k);
       zmRanGrcs(locx,loy,color(200,255,0,30));
     }


     function zmSign2(ss,locx, loy) {
       fill(20,50);
       rect(locx,loy,300,300);
       fill(100);
       rect(locx-10,loy-10,300,300);
       var k = color(second() * 5,0,0);
       zmDrawText(ss,locx+20,loy+50,k);
       zmRanGrcs(locx+300,loy,color(255,0,0,30));
     }



   function zmDrawText( s, lx, ly, c ) {
      fill(c);
      text(s, lx, ly,20);
    }


    function zmRanGrcs( lx, ly, c) {
      fill(mouseY/3, mouseX/3, mouseY/3);
      var r = random(75);

      for (var i= 0; i < 30; i++) {
        ellipse(random(width), random(height), second() * 2, second() * 2);
      }

    }


function zmSign3(ss,locx, loy) {
       var k = color(mouseX,mouseY,mouseX);
       zmDrawText(ss,mouseX*-1+800,loy-100,k);
       zmRanGrcs(locx+300,loy,color(255,0,0,30));
     }


function zmSign4(ss,locx,loy) {
       var k = color(mouseX,mouseY,mouseX);
       zmDrawText(ss,mouseX,loy+300,k);
       zmRanGrcs(locx+300,loy,color(255,0,0,30));
     }
