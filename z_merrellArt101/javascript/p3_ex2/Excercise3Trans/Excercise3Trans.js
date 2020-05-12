let c = random(255);

let count = 4;
var[] = posX = new float[count];
var[] = posY = new float[count];
var[] = speedX = new float[count];
var[] = speedY = new float[count];
var[] = sizeW = new float[count];
var[] = sizeH = new float[count];
var[] = colors = new int[count];

//String[] strA = new String[count];
String strA = {"Zack", "Trevor", "Lisa", "Chris"};
//String is from words. These arrays label the random shapes that are flying arround the screen


var[] shapez = new int[count];
//Shapez is an array that changes or randomises the type of shape that is spawned


function setup() {
  size(600, 600);
  for (var i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    speedX[i] = random(-10, 10);      //try using the speed in more than one way
    speedY[i] = random(-10, 10);       //use them to change the speed when they hit a wall
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    //colors[i] = int(random(150, 100));
    //strA = {"Zack", "Trevor", "Lisa", "Chris"};


    shapez[i] = int(random(0,2));

}



}
function draw() {
  background(c,c,c);
  background(random(255),random(255),random(255));
  fill(0);
  rect(40, 40, width-80, height-80);
  for (var i = 0; i < posX.length; i++) {

    posX[i] += speedX[i];
    posY[i] += speedY[i];

    fill(random(255),random(255),random(255));
    //rect(posX[i], posY[i], sizeW[i], sizeW[i]);
     text(strA[i],posX[i], posY[i]+40);


    if (shapez[i] == 1) {
      rect(posX[i], posY[i], sizeW[i], sizeW[i]);
    } else {
      ellipse(posX[i], posY[i], sizeW[i], sizeW[i]);
    }



    if (posX[i] < 40+sizeW[i]/2 || posX[i] > (width-40)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];

  if (shapez[i] == 1) {
    shapez[i] = 0;
  } else {
    shapez[i] = 1;
  }

  //^Code is toggle logic that changes shape at every x axis wall hit
  //Can use this to change the color of the objects and the background

}






    if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
    }
  }


  //saveFrame("ZMex3-#####.png");
}
