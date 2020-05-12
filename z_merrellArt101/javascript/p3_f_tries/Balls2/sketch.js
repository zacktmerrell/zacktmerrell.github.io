
function setup() {
  noStroke();
  createCanvas(600,500);
  background(255);

}

function draw() {
  //background(0);
  push();
  let sec = second();
  let s = map(second(), 0, 60, 0, 600);
  fill(second() * 4, second() * 5, second() * 4);
  ellipse(s, 100, second() * 5/3, second() * 5/3);
  pop();

  push();
  let min = minute();
  let m = map(minute(), 0, 60, 0, 600);
  fill(minute() * 5, minute() * 4, minute() * 4);
  ellipse(m, 250, minute() * 5/3, minute() * 5/3);
  pop();

  push();
  let hr = hour() - 2;
  let h = map(hour() - 2, 0, 23, 0, 600);
  fill(hour() * 10, hour() * 10, hour() * 12);
  ellipse(h, 400, hour() * 4.35, hour() * 4.35);
  pop();




}
