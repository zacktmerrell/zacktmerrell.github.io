let weath, weath1, weath2, weath3, weath4, weath5;
let x=175;
let y=175;

let z=450;
let m=175;

let a=725;
let b=175;

let c=175;
let d=675;

let e=450;
let f=675;

let g=725;
let h=675;

function setup() {
  createCanvas(900,750);
  background(0);

  loadJSON("http://api.openweathermap.org/data/2.5/weather?lat=37&lon=122&APPID=1130dbd4abd03f16290bc09191394a37&units=imperial", gotData);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=london&APPID=1130dbd4abd03f16290bc09191394a37&units=imperial", gotData1);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=paris&APPID=1130dbd4abd03f16290bc09191394a37&units=imperial", gotData2);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=tokyo&APPID=1130dbd4abd03f16290bc09191394a37&units=imperial", gotData3);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=new,us&APPID=1130dbd4abd03f16290bc09191394a37&units=imperial", gotData4);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=barcelona&APPID=1130dbd4abd03f16290bc09191394a37&units=imperial", gotData5);


}

function gotData(data){
  weath = data;
}

function gotData1(data1){
  weath1 = data1;

}

function gotData2(data2){
  weath2 = data2;

}

function gotData3(data3){
  weath3 = data3;

}

function gotData4(data4){
  weath4 = data4;

}

function gotData5(data5){
  weath5 = data5;

}

function draw() {
  background(0);
  fill(255);
ellipseMode(CENTER);



if (weath){
  ellipse(x,y,weath.main.humidity,weath.main.humidity);


   x = x + (weath.main.temp/3);
   y = y + (weath.wind.speed/3);
   if (x > 300) {
         weath.main.temp = weath.main.temp*-1;
       }

       if (x < 50) {
         weath.main.temp = weath.main.temp*-1;
       }

       if (y > 350) {
         weath.wind.speed = weath.wind.speed*-1;
       }

       if (y < 50) {
         weath.wind.speed = weath.wind.speed*-1;
       }



}

if (weath1){
  fill(weath1.main.temp_max,0,weath1.main.temp_min)
  ellipse(z,m,weath1.main.humidity,weath1.main.humidity);


   z = z + (weath1.main.temp/3);
   m = m + (weath1.wind.speed/3);
   if (z > 525) {
         weath1.main.temp = weath1.main.temp*-1;
       }

       if (z < 375) {
         weath1.main.temp = weath1.main.temp*-1;
       }

       if (m > 350) {
         weath1.wind.speed = weath1.wind.speed*-1;
       }

       if (m < 50) {
         weath1.wind.speed = weath1.wind.speed*-1;
       }



}

if (weath2){
  fill(weath2.main.temp_max,0,weath2.main.temp_min)
  ellipse(a,b,weath2.main.humidity,weath2.main.humidity);


   a = a + (weath2.main.temp/3);
   b = b + (weath2.wind.speed/3);
   if (a > 850) {
         weath2.main.temp = weath2.main.temp*-1;
       }

       if (a < 600) {
         weath2.main.temp = weath2.main.temp*-1;
       }

       if (b > 350) {
         weath2.wind.speed = weath2.wind.speed*-1;
       }

       if (b < 50) {
         weath2.wind.speed = weath2.wind.speed*-1;
       }



}

if (weath3){
  fill(weath3.main.temp_max,0,weath3.main.temp_min)
  ellipse(c,d,weath3.main.humidity,weath3.main.humidity);


   c = c + (weath3.main.temp/3);
   d = d + (weath3.wind.speed/3);
   if (c > 300) {
         weath3.main.temp = weath3.main.temp*-1;
       }

       if (c < 50) {
         weath3.main.temp = weath3.main.temp*-1;
       }

       if (d > 700) {
         weath3.wind.speed = weath3.wind.speed*-1;
       }

       if (d < 400) {
         weath3.wind.speed = weath3.wind.speed*-1;
       }



}

if (weath4){
  fill(weath4.main.temp_max,0,weath4.main.temp_min)
  ellipse(e,f,weath4.main.humidity,weath4.main.humidity);


   e = e + (weath4.main.temp/3);
   f = f + (weath4.wind.speed/3);
   if (e > 525) {
         weath4.main.temp = weath4.main.temp*-1;
       }

       if (e < 375) {
         weath4.main.temp = weath4.main.temp*-1;
       }

       if (f > 700) {
         weath4.wind.speed = weath4.wind.speed*-1;
       }

       if (f < 400) {
         weath4.wind.speed = weath4.wind.speed*-1;
       }



}

if (weath5){
  fill(weath5.main.temp_max,0,weath5.main.temp_min)
  ellipse(g,h,weath5.main.humidity,weath5.main.humidity);


   g = g + (weath5.main.temp/3);
   h = h + (weath5.wind.speed/3);
   if (g > 850) {
         weath5.main.temp = weath5.main.temp*-1;
       }

       if (g < 600) {
         weath5.main.temp = weath5.main.temp*-1;
       }

       if (h > 700) {
         weath5.wind.speed = weath5.wind.speed*-1;
       }

       if (h < 400) {
         weath5.wind.speed = weath5.wind.speed*-1;
       }



}

if (mouseIsPressed) {

    showtext();

   }
}

function showtext() {
  push();

  fill(255);

  textSize(19);
  textAlign(CENTER);
  text("Current",100, 175, 180,20);
  text("London",375, 175, 180,20);
  text("Paris",650, 175, 180,20);
  text("Tokyo",100, 575, 180,20);
  text("New York",375, 575, 180,20);
  text("Barcelona",650, 575, 180,20);
  pop();
}
