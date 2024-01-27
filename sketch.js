//
// watchThingP5
//
// By Fer Ysunza, 26/01/24.
//

let initialSecondFraction;
let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  startTime = millis(); // Store the start time
  initialSecondFraction = second() / 60; // Initial fraction of the minute based on current second
}

function draw() {
  background(0);
  let h = hour();
  let m = minute();

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

  // Calculate the position of the seconds semi-circle
  let elapsedTime = millis() - startTime;
  let currentSecondFraction = initialSecondFraction + (elapsedTime % 60000) / 60000;
  let secondAngle = map(currentSecondFraction, 0, 1, 0, 360);

  // Drawing the seconds semi-circle
  stroke('skyblue');
  strokeWeight(20);
  arc(width / 2, height / 2, 450, 450, 270, secondAngle + 270);

  // Displaying the digital time
  noStroke();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(second(), 2), width / 2, height / 2);
}
