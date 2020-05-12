
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";



////////////////////////////// 1 /////////////////
function scene1()  {
    var lox= 0;
    var instc= 0;
    var inst= 0;
    var vol= 10;
    var tempo= 1;
    var img1x= 100;
    var img1y= 50;
    var img2x= 100;
    var img2y= 125;
    var img3x= 100;
    var img3y= 200;
    var img4x= 100;
    var img4y= 275;
    var img5x= 100;
    var img5y= 350;
    var img6x= 100;
    var img6y= 425;
    var img7x= 100;
    var img7y= 500;
    var dragging1 = false;
    var dragging2 = false;
    var dragging3 = false;
    var dragging4 = false;
    var dragging5 = false;
    var dragging6 = false;
    var dragging7 = false;
    var offsetX1,offsetY1;
    var offsetX2,offsetY2;
    var offsetX3,offsetY3;
    var offsetX4,offsetY4;
    var offsetX5,offsetY5;
    var offsetX6,offsetY6;
    var offsetX7,offsetY7;


// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        background(255);
        textAlign(CENTER);
    }


    this.draw = function()
    {
      background(255);
      masterVolume(vol/10);


      fill(0);
      rect(5,5,width-10, height-75);



      fill(255);
      rect(15,610,50,50);
      image(q,-20,570,125,125);
      rect(70,610,50,50);
      image(p,71,612,48,48);

      push();
      fill(instc*122);
      rect(150,620,175,25);

      pop();

      push();
      fill(vol*25);
      rect(375,620,175,25);

      pop();

      push();
      fill(tempo*51);
      rect(600,620,175,25);

      pop();


      image(img1,img1x,img1y,50,50);
      image(img2,img2x,img2y,50,50);
      image(img3,img3x,img3y,50,50);
      image(img4,img4x,img4y,50,50);
      image(img5,img5x,img5y,50,50);
      image(img6,img6x,img6y,50,50);
      image(img7,img7x,img7y,50,50);


        //bar or slider
        fill(200,0,0);
        push();

        translate(lox * tempo,15);
        rect(5,0,5,570);
        if (lox * tempo > width-20) {
          lox = 0;
        }
         lox ++;

        pop();

        //dragging
        if (dragging1) {
          img1x = mouseX + offsetX1;
          img1y = mouseY + offsetY1;
        }
        if (dragging2) {
          img2x = mouseX + offsetX2;
          img2y = mouseY + offsetY2;
        }
        if (dragging3) {
          img3x = mouseX + offsetX3;
          img3y = mouseY + offsetY3;
        }
        if (dragging4) {
          img4x = mouseX + offsetX4;
          img4y = mouseY + offsetY4;
        }
        if (dragging5) {
          img5x = mouseX + offsetX5;
          img5y = mouseY + offsetY5;
        }
        if (dragging6) {
          img6x = mouseX + offsetX6;
          img6y = mouseY + offsetY6;
        }
        if (dragging7) {
          img7x = mouseX + offsetX7;
          img7y = mouseY + offsetY7;
        }


        //slider to play sound
        if ( lox*tempo === img1x ) {
            if ( inst == 0 ) {
              c1a.play();
            }
            if ( inst == 1 ) {
              c2a.play();
            }
            if ( inst == 2 ) {
              c3a.play();
            }

        }

        if ( lox*tempo === img2x ) {
            if ( inst == 0 ) {
              c1b.play();
            }
            if ( inst == 1 ) {
              c2b.play();
            }
            if ( inst == 2 ) {
              c3b.play();
            }

        }

        if ( lox*tempo === img3x ) {
            if ( inst == 0 ) {
              c1c.play();
            }
            if ( inst == 1 ) {
              c2c.play();
            }
            if ( inst == 2 ) {
              c3c.play();
            }

        }

        if ( lox*tempo === img4x ) {
            if ( inst == 0 ) {
              c1d.play();
            }
            if ( inst == 1 ) {
              c2d.play();
            }
            if ( inst == 2 ) {
              c3d.play();
            }

        }

        if ( lox*tempo === img5x ) {
            if ( inst == 0 ) {
              c1e.play();
            }
            if ( inst == 1 ) {
              c2e.play();
            }
            if ( inst == 2 ) {
              c3e.play();
            }

        }

        if ( lox*tempo === img6x ) {
            if ( inst == 0 ) {
              c1f.play();
            }
            if ( inst == 1 ) {
              c2f.play();
            }
            if ( inst == 2 ) {
              c3f.play();
            }

        }

        if ( lox*tempo === img7x ) {
            if ( inst == 0 ) {
              c1g.play();
            }
            if ( inst == 1 ) {
              c2g.play();
            }
            if ( inst == 2 ) {
              c3g.play();
            }

        }


    }

    this.keyPressed = function() {


    }

    this.mousePressed = function()
    {

      if (mouseX > 15 && mouseX < 65 && mouseY > 610 && mouseY < 660) {
        //this.sceneManager.showNextScene();
        mgr.showScene( scene2);
      }

      if (mouseX > 70 && mouseX < 120 && mouseY > 610 && mouseY < 660) {
        //this.sceneManager.showNextScene();
        mgr.showScene( scene3);
    }

      if (mouseX > 150 && mouseX < 325 && mouseY > 620 && mouseY < 645) {
        //this.sceneManager.showNextScene();
        //mgr.showScene( scene2);
        if (instc < 3) {
        instc ++;
        inst ++;
      }

        if (instc > 2) {
        instc = 0;
        inst = 0;
        }
    }

      if (mouseX > 375 && mouseX < 550 && mouseY > 620 && mouseY < 645) {
        //this.sceneManager.showNextScene();
        //mgr.showScene( scene2);
        if (vol > 1) {
        vol --;
      }

        if (vol < 2) {
        vol = 10;
        }
    }

      if (mouseX > 600 && mouseX < 775 && mouseY > 620 && mouseY < 645) {
        //this.sceneManager.showNextScene();
        //mgr.showScene( scene2);
        if (tempo < 6) {
        tempo ++;
      }

        if (tempo > 5) {
        tempo = 1;
        }
    }

    if (mouseX > img1x && mouseX < img1x + 40 && mouseY > img1y && mouseY< img1y + 40) {

      if (dragging1 == false) {
        dragging1 = true;

         offsetX1 = img1x-mouseX;
         offsetY1 = img1y-mouseY;
      } else {
        dragging1 = false;
        offsetX1 = 0;
        offsetY1 = 0;
      }
    }

    if (mouseX > img2x && mouseX < img2x + 40 && mouseY > img2y && mouseY< img2y + 40) {

      if (dragging2 == false) {
        dragging2 = true;

         offsetX2 = img2x-mouseX;
         offsetY2 = img2y-mouseY;
      } else {
        dragging2 = false;
        offsetX2 = 0;
        offsetY2 = 0;
      }
    }

    if (mouseX > img3x && mouseX < img3x + 40 && mouseY > img3y && mouseY< img3y + 40) {

      if (dragging3 == false) {
        dragging3 = true;

         offsetX3 = img3x-mouseX;
         offsetY3 = img3y-mouseY;
      } else {
        dragging3 = false;
        offsetX3 = 0;
        offsetY3 = 0;
      }
    }

    if (mouseX > img4x && mouseX < img4x + 40 && mouseY > img4y && mouseY< img4y + 40) {

      if (dragging4 == false) {
        dragging4 = true;

         offsetX4 = img4x-mouseX;
         offsetY4 = img4y-mouseY;
      } else {
        dragging4 = false;
        offsetX4 = 0;
        offsetY4 = 0;
      }
    }

    if (mouseX > img5x && mouseX < img5x + 40 && mouseY > img5y && mouseY< img5y + 40) {

      if (dragging5 == false) {
        dragging5 = true;

         offsetX5 = img5x-mouseX;
         offsetY5 = img5y-mouseY;
      } else {
        dragging5 = false;
        offsetX5 = 0;
        offsetY5 = 0;
      }
    }

    if (mouseX > img6x && mouseX < img6x + 40 && mouseY > img6y && mouseY< img6y + 40) {

      if (dragging6 == false) {
        dragging6 = true;

         offsetX6 = img6x-mouseX;
         offsetY6 = img6y-mouseY;
      } else {
        dragging6 = false;
        offsetX6 = 0;
        offsetY6 = 0;
      }
    }

    if (mouseX > img7x && mouseX < img7x + 40 && mouseY > img7y && mouseY< img7y + 40) {

      if (dragging7 == false) {
        dragging7 = true;

         offsetX7 = img7x-mouseX;
         offsetY7 = img7y-mouseY;
      } else {
        dragging7 = false;
        offsetX7 = 0;
        offsetY7 = 0;
      }
    }

  }

}





///////////////////////  2  ////////////////////////

function scene2()  {
  var lox= 0;
  var instc= 0;
  var inst= 0;
  var vol= 10;
  var tempo= 1;
  var img1x= 100;
  var img1y= 50;
  var img2x= 100;
  var img2y= 125;
  var img3x= 100;
  var img3y= 200;
  var img4x= 100;
  var img4y= 275;
  var img5x= 100;
  var img5y= 350;
  var img6x= 100;
  var img6y= 425;
  var img7x= 100;
  var img7y= 500;
  var dragging1 = false;
  var dragging2 = false;
  var dragging3 = false;
  var dragging4 = false;
  var dragging5 = false;
  var dragging6 = false;
  var dragging7 = false;
  var offsetX1,offsetY1;
  var offsetX2,offsetY2;
  var offsetX3,offsetY3;
  var offsetX4,offsetY4;
  var offsetX5,offsetY5;
  var offsetX6,offsetY6;
  var offsetX7,offsetY7;


// scene1.setup
  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    angleMode(DEGREES);

  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
      background(255);
      textAlign(CENTER);
  }


  this.draw = function()
  {
    background(255);
    masterVolume(.1);

    //console.log(mouseX);

    fill(0);
    rect(5,5,width-10, height-75);



    fill(255);
    rect(15,610,50,50);
    image(q,-20,570,125,125);
    rect(70,610,50,50);
    image(p,71,612,48,48);

    push();
    fill(instc*122);
    rect(150,620,175,25);

    pop();

    push();
    fill(vol*25);
    rect(375,620,175,25);

    pop();

    push();
    fill(tempo*51);
    rect(600,620,175,25);

    pop();


    image(img1,img1x,img1y,50,50);
    image(img2,img2x,img2y,50,50);
    image(img3,img3x,img3y,50,50);
    image(img4,img4x,img4y,50,50);
    image(img5,img5x,img5y,50,50);
    image(img6,img6x,img6y,50,50);
    image(img7,img7x,img7y,50,50);


      //bar or slider
      fill(200,0,0);
      push();

      translate(lox * tempo,15);
      rect(5,0,5,570);
      if (lox * tempo > width-20) {
        lox = 0;
      }
       lox ++;

      pop();

      //dragging
      if (dragging1) {
        img1x = mouseX + offsetX1;
        img1y = mouseY + offsetY1;
      }
      if (dragging2) {
        img2x = mouseX + offsetX2;
        img2y = mouseY + offsetY2;
      }
      if (dragging3) {
        img3x = mouseX + offsetX3;
        img3y = mouseY + offsetY3;
      }
      if (dragging4) {
        img4x = mouseX + offsetX4;
        img4y = mouseY + offsetY4;
      }
      if (dragging5) {
        img5x = mouseX + offsetX5;
        img5y = mouseY + offsetY5;
      }
      if (dragging6) {
        img6x = mouseX + offsetX6;
        img6y = mouseY + offsetY6;
      }
      if (dragging7) {
        img7x = mouseX + offsetX7;
        img7y = mouseY + offsetY7;
      }


      //slider to play sound
      if ( lox*tempo === img1x ) {
          if ( inst == 0 ) {
            c1a.play();
          }
          if ( inst == 1 ) {
            c2a.play();
          }
          if ( inst == 2 ) {
            c3a.play();
          }

      }

      if ( lox*tempo === img2x ) {
          if ( inst == 0 ) {
            c1b.play();
          }
          if ( inst == 1 ) {
            c2b.play();
          }
          if ( inst == 2 ) {
            c3b.play();
          }

      }

      if ( lox*tempo === img3x ) {
          if ( inst == 0 ) {
            c1c.play();
          }
          if ( inst == 1 ) {
            c2c.play();
          }
          if ( inst == 2 ) {
            c3c.play();
          }

      }

      if ( lox*tempo === img4x ) {
          if ( inst == 0 ) {
            c1d.play();
          }
          if ( inst == 1 ) {
            c2d.play();
          }
          if ( inst == 2 ) {
            c3d.play();
          }

      }

      if ( lox*tempo === img5x ) {
          if ( inst == 0 ) {
            c1e.play();
          }
          if ( inst == 1 ) {
            c2e.play();
          }
          if ( inst == 2 ) {
            c3e.play();
          }

      }

      if ( lox*tempo === img6x ) {
          if ( inst == 0 ) {
            c1f.play();
          }
          if ( inst == 1 ) {
            c2f.play();
          }
          if ( inst == 2 ) {
            c3f.play();
          }

      }

      if ( lox*tempo === img7x ) {
          if ( inst == 0 ) {
            c1g.play();
          }
          if ( inst == 1 ) {
            c2g.play();
          }
          if ( inst == 2 ) {
            c3g.play();
          }

      }





        fill(0,0,0,150);
        stroke(255);
        strokeWeight(5);
        rect(20,20,width-40,height-100);

        rect(30,30,50,50);

        push();
        rectMode(CENTER);
        rotate(45);
        fill(255);
        rect(77,0,1,40);

        pop();

        push();
        rotate(-45);
        rectMode(CENTER);
        fill(255);
        rect(0,78,1,40);

        pop();


        textSize(80);
        text("HELP!!!",100,30,200,200);
        strokeWeight(3);
        textSize(30);
        text("The 3 black buttons down at the bottom represent:",30,150);
        textSize(28);
        text("-change in octave",75,175);
        text("-volume",75,200);
        text("-tempo",75,225);
        textSize(30);
        text("Each bug represents a different basic note from A - G",30,300);
        text("The slider plays the note when it passes over the bug",30,350);
        text("Move the bugs around the screen to try and make different beats",30,400, 700, 300);

        textSize(15);
        text("*** Try using the keyboard buttons A-G!", 575, 30,150,100);




    }

    this.keyPressed = function() {


    }

    this.mousePressed = function()
    {
      if (mouseX > 30 && mouseX < 80 && mouseY > 30 && mouseY < 80) {
        //this.sceneManager.showNextScene();
        mgr.showScene( scene1);
      }


      if (mouseX > 70 && mouseX < 120 && mouseY > 435 && mouseY < 485) {
        //this.sceneManager.showNextScene();
        mgr.showScene( scene3);
    }


  }



}


////////////////////////////// 3 /////////////////

function scene3()  {
  var lox= 0;
  var instc= 0;
  var inst= 0;
  var vol= 10;
  var tempo= 1;
  var img1x= 100;
  var img1y= 50;
  var img2x= 100;
  var img2y= 125;
  var img3x= 100;
  var img3y= 200;
  var img4x= 100;
  var img4y= 275;
  var img5x= 100;
  var img5y= 350;
  var img6x= 100;
  var img6y= 425;
  var img7x= 100;
  var img7y= 500;
  var dragging1 = false;
  var dragging2 = false;
  var dragging3 = false;
  var dragging4 = false;
  var dragging5 = false;
  var dragging6 = false;
  var dragging7 = false;
  var offsetX1,offsetY1;
  var offsetX2,offsetY2;
  var offsetX3,offsetY3;
  var offsetX4,offsetY4;
  var offsetX5,offsetY5;
  var offsetX6,offsetY6;
  var offsetX7,offsetY7;


// scene1.setup
  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.

  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
      background(255);
      textAlign(CENTER);
  }


  this.draw = function()
  {
    background(255);
    masterVolume(vol/10);

    //console.log(mouseX);

    fill(0);
    rect(5,5,width-10, height-75);



    fill(255);
    rect(15,610,50,50);
    image(q,-20,570,125,125);
    rect(70,610,50,50);
    image(p,71,612,48,48);

    push();
    fill(instc*122);
    rect(150,620,175,25);

    pop();

    push();
    fill(vol*25);
    rect(375,620,175,25);

    pop();

    push();
    fill(tempo*51);
    rect(600,620,175,25);

    pop();


    image(img1,img1x,img1y,50,50);
    image(img2,img2x,img2y,50,50);
    image(img3,img3x,img3y,50,50);
    image(img4,img4x,img4y,50,50);
    image(img5,img5x,img5y,50,50);
    image(img6,img6x,img6y,50,50);
    image(img7,img7x,img7y,50,50);


      //bar or slider
      fill(200,0,0);
      push();

      rect(375,15,5,570);

      pop();

      //dragging
      if (dragging1) {
        img1x = mouseX + offsetX1;
        img1y = mouseY + offsetY1;
      }
      if (dragging2) {
        img2x = mouseX + offsetX2;
        img2y = mouseY + offsetY2;
      }
      if (dragging3) {
        img3x = mouseX + offsetX3;
        img3y = mouseY + offsetY3;
      }
      if (dragging4) {
        img4x = mouseX + offsetX4;
        img4y = mouseY + offsetY4;
      }
      if (dragging5) {
        img5x = mouseX + offsetX5;
        img5y = mouseY + offsetY5;
      }
      if (dragging6) {
        img6x = mouseX + offsetX6;
        img6y = mouseY + offsetY6;
      }
      if (dragging7) {
        img7x = mouseX + offsetX7;
        img7y = mouseY + offsetY7;
      }


      //slider to play sound
      if ( lox*tempo === img1x ) {
          if ( inst == 0 ) {
            c1a.play();
          }
          if ( inst == 1 ) {
            c2a.play();
          }
          if ( inst == 2 ) {
            c3a.play();
          }

      }

      if ( lox*tempo === img2x ) {
          if ( inst == 0 ) {
            c1b.play();
          }
          if ( inst == 1 ) {
            c2b.play();
          }
          if ( inst == 2 ) {
            c3b.play();
          }

      }

      if ( lox*tempo === img3x ) {
          if ( inst == 0 ) {
            c1c.play();
          }
          if ( inst == 1 ) {
            c2c.play();
          }
          if ( inst == 2 ) {
            c3c.play();
          }

      }

      if ( lox*tempo === img4x ) {
          if ( inst == 0 ) {
            c1d.play();
          }
          if ( inst == 1 ) {
            c2d.play();
          }
          if ( inst == 2 ) {
            c3d.play();
          }

      }

      if ( lox*tempo === img5x ) {
          if ( inst == 0 ) {
            c1e.play();
          }
          if ( inst == 1 ) {
            c2e.play();
          }
          if ( inst == 2 ) {
            c3e.play();
          }

      }

      if ( lox*tempo === img6x ) {
          if ( inst == 0 ) {
            c1f.play();
          }
          if ( inst == 1 ) {
            c2f.play();
          }
          if ( inst == 2 ) {
            c3f.play();
          }

      }

      if ( lox*tempo === img7x ) {
          if ( inst == 0 ) {
            c1g.play();
          }
          if ( inst == 1 ) {
            c2g.play();
          }
          if ( inst == 2 ) {
            c3g.play();
          }

      }


  }

  this.keyPressed = function() {


  }

  this.mousePressed = function()
  {

    if (mouseX > 15 && mouseX < 65 && mouseY > 610 && mouseY < 660) {
      //this.sceneManager.showNextScene();
      mgr.showScene( scene2);
    }

    if (mouseX > 70 && mouseX < 120 && mouseY > 610 && mouseY < 660) {
      //this.sceneManager.showNextScene();
      mgr.showScene( scene1);
  }

    if (mouseX > 150 && mouseX < 325 && mouseY > 620 && mouseY < 645) {
      //this.sceneManager.showNextScene();
      //mgr.showScene( scene2);
      if (instc < 3) {
      instc ++;
      inst ++;
    }

      if (instc > 2) {
      instc = 0;
      inst = 0;
      }
  }

    if (mouseX > 375 && mouseX < 550 && mouseY > 620 && mouseY < 645) {
      //this.sceneManager.showNextScene();
      //mgr.showScene( scene2);
      if (vol > 1) {
      vol --;
    }

      if (vol < 2) {
      vol = 10;
      }
  }

    if (mouseX > 600 && mouseX < 575 && mouseY > 620 && mouseY < 645) {
      //this.sceneManager.showNextScene();
      //mgr.showScene( scene2);
      if (tempo < 6) {
      tempo ++;
    }

      if (tempo > 5) {
      tempo = 1;
      }
  }

  if (mouseX > img1x && mouseX < img1x + 40 && mouseY > img1y && mouseY< img1y + 40) {

    if (dragging1 == false) {
      dragging1 = true;

       offsetX1 = img1x-mouseX;
       offsetY1 = img1y-mouseY;
    } else {
      dragging1 = false;
      offsetX1 = 0;
      offsetY1 = 0;
    }
  }

  if (mouseX > img2x && mouseX < img2x + 40 && mouseY > img2y && mouseY< img2y + 40) {

    if (dragging2 == false) {
      dragging2 = true;

       offsetX2 = img2x-mouseX;
       offsetY2 = img2y-mouseY;
    } else {
      dragging2 = false;
      offsetX2 = 0;
      offsetY2 = 0;
    }
  }

  if (mouseX > img3x && mouseX < img3x + 40 && mouseY > img3y && mouseY< img3y + 40) {

    if (dragging3 == false) {
      dragging3 = true;

       offsetX3 = img3x-mouseX;
       offsetY3 = img3y-mouseY;
    } else {
      dragging3 = false;
      offsetX3 = 0;
      offsetY3 = 0;
    }
  }

  if (mouseX > img4x && mouseX < img4x + 40 && mouseY > img4y && mouseY< img4y + 40) {

    if (dragging4 == false) {
      dragging4 = true;

       offsetX4 = img4x-mouseX;
       offsetY4 = img4y-mouseY;
    } else {
      dragging4 = false;
      offsetX4 = 0;
      offsetY4 = 0;
    }
  }

  if (mouseX > img5x && mouseX < img5x + 40 && mouseY > img5y && mouseY< img5y + 40) {

    if (dragging5 == false) {
      dragging5 = true;

       offsetX5 = img5x-mouseX;
       offsetY5 = img5y-mouseY;
    } else {
      dragging5 = false;
      offsetX5 = 0;
      offsetY5 = 0;
    }
  }

  if (mouseX > img6x && mouseX < img6x + 40 && mouseY > img6y && mouseY< img6y + 40) {

    if (dragging6 == false) {
      dragging6 = true;

       offsetX6 = img6x-mouseX;
       offsetY6 = img6y-mouseY;
    } else {
      dragging6 = false;
      offsetX6 = 0;
      offsetY6 = 0;
    }
  }

  if (mouseX > img7x && mouseX < img7x + 40 && mouseY > img7y && mouseY< img7y + 40) {

    if (dragging7 == false) {
      dragging7 = true;

       offsetX7 = img7x-mouseX;
       offsetY7 = img7y-mouseY;
    } else {
      dragging7 = false;
      offsetX7 = 0;
      offsetY7 = 0;
    }
  }

}

}
