//
// watchThingP5
//
// By Fer Ysunza, 26/01/24.
//

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  let h = hour();
  let m = minute();
  let s = second();

  // Drawing the minute semi-circle
  stroke(0, 255, 0);
  strokeWeight(20);
  noFill();
  let end1 = map(m, 0, 60, 0, 360);
  arc(width / 2, height / 2, 400, 400, 270, end1 + 270);

  // Drawing the hour semi-circle
  stroke(255, 0, 0);
  let end2 = map(h % 12, 0, 12, 0, 360);
  arc(width / 2, height / 2, 350, 350, 270, end2 + 270);

  // Drawing the seconds hand
  push();
  translate(width / 2, height / 2);
  rotate(frameCount / 60 * 360);
  stroke(0);
  line(0, 0, 100, 0);
  pop();

  // Displaying the digital time
  noStroke();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2), width / 2, height / 2);
}
