
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,snd1;
// var duration;
// var  slideWidth = 500;
var img1, img2, img3, img4, img5, img6, img7;
var c1a, c1b, c1c, c1d, c1e, c1f, c1g;
var c2a, c2b, c2c, c2d, c2e, c2f, c2g;
var c3a, c3b, c3c, c3d, c3e, c3f, c3g;
var p, q;


function preload() {

   snd1 = loadSound("sound/troll.mp3");
   img1 = loadImage("assets/ant.png");
   img2 = loadImage("assets/butterfly.png");
   img3 = loadImage("assets/caterpillar.png");
   img4 = loadImage("assets/dragonfly.png");
   img5 = loadImage("assets/eyeclip_beetle.png");
   img6 = loadImage("assets/fly.png");
   img7 = loadImage("assets/grasshopper.png");

   c1a = loadSound("sound/c1a.m4a");
   c1b = loadSound("sound/c1b.m4a");
   c1c = loadSound("sound/c1c.m4a");
   c1d = loadSound("sound/c1d.m4a");
   c1e = loadSound("sound/c1e.m4a");
   c1f = loadSound("sound/c1f.m4a");
   c1g = loadSound("sound/c1g.m4a");

   c2a = loadSound("sound/c2a.m4a");
   c2b = loadSound("sound/c2b.m4a");
   c2c = loadSound("sound/c2c.m4a");
   c2d = loadSound("sound/c2d.m4a");
   c2e = loadSound("sound/c2e.m4a");
   c2f = loadSound("sound/c2f.m4a");
   c2g = loadSound("sound/c2g.m4a");

   c3a = loadSound("sound/c3a.m4a");
   c3b = loadSound("sound/c3b.m4a");
   c3c = loadSound("sound/c3c.m4a");
   c3d = loadSound("sound/c3d.m4a");
   c3e = loadSound("sound/c3e.m4a");
   c3f = loadSound("sound/c3f.m4a");
   c3g = loadSound("sound/c3g.m4a");

   p = loadImage("assets/p.png");
   q = loadImage("assets/q.png");



}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(800, 666);
  //  console.log(hell);
     mgr = new SceneManager();
     masterVolume(.01);

     // ghosty = createSprite(0, 0);
     // ghosty.addAnimation("normal", "assets/ghost_spin0001.png",  "assets/ghost_spin0003.png");
     // ghosty.addAnimation("stand", "assets/ghost_standing0001.png",  "assets/ghost_standing0007.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();


}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager

  mgr.mousePressed();


}



function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case 's':
            mgr.showScene( scene1 );
            break;
        case 'h':
            mgr.showScene( scene2 );
            break;
        case 'p':
            mgr.showScene( scene3 );
            break;
        case 'a':
            c3a.play();
            break;
        case 'b':
            c3b.play();
            break;
        case 'c':
            c3c.play();
            break;
        case 'd':
            c3d.play();
            break;
        case 'e':
            c3e.play();
            break;
        case 'f':
            c3f.play();
            break;
        case 'g':
            c3g.play();
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
