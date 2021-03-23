
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";


// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene1()  {
    var textX;
    var textY;
    var lox= 0;
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
        textX = 10;
        textY = 0;
        background("grey");
        textAlign(CENTER);
    }


    this.draw = function()
    {
        background(lox/3,lox/4,lox/2);
        fill(200,0,0);
        push();

        translate(lox,150);
        ellipse(0,0,30,30);
        if (lox > width) {
          lox = 0;
          this.sceneManager.showNextScene();
        }
         lox  ++;

        pop();


    }


}

///////////////////////  3  ////////////////////////

function scene3()  {
   this.draw = function() {
     background(255, 255, 255);

  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
   }

   this.mousePressed = function() {
     //create a sprite at the mouse position and store it in a temporary variable
 var s = createSprite(mouseX, mouseY, 30, 30);
 //if no image or animation is associated it will be a rectancle of the specified size
 //and a random color

 //now you can use the variable to set properties
 //e.g. a random velocity on the x and y coordinates
 s.velocity.x = random(-5, 5);
 s.velocity.y = random(-5, 5);
   }
}






////////////////////////////// 2 /////////////////

function scene2() {

    this.oAnim1 = null;
    var oAnim = null;

    this.setup = function()  {
        console.log("We are at setup for scene3");
        // access a different scene using the SceneManager
        oAnim1 = this.sceneManager.findScene( scene2 );






    }

    this.enter = function()
    {

     //ghosty.visible = false;
     ghosty.position.x = 100;
     ghosty.position.y = 100;


     ghosty.onMouseOver = function() {

       console.log("over");
       this.changeAnimation("stand");
       this.position.x-=5 ;
       this.position.y-=5 ;
     }

     ghosty.onMouseOut = function() {

       console.log("out");
       this.changeAnimation("stand");
       this.position.x+=5;
       this.position.y+=5;
     }


        console.log("We are at entering scene2");
    }




    this.draw = function() {
        background("lightblue");
        drawSprites();
        var r = 5

        push();
        fill("red");
        ellipse( width / 2, height / 2, r );
        if ( r < 305) {
          r + 10;
        }
        if ( r > 300 ) {
          r = 5;
          this.sceneManager.showNextScene();
        }
        pop();
        if ( oAnim1 != null )
        {
            fill("black");
            textAlign(LEFT);
            text( "Scene3 r: " + r, 10, height - 20);
        }
    }

    this.mousePressed = function()  {

       this.sceneManager.showNextScene();
    }

}
