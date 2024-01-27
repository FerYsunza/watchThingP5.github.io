//
// watchThingP5
//
// By Fer Ysunza, 26/01/24.
//

let initialDraw = true;
let lastSecond;
let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  lastSecond = second(); // Record the second when the program starts
}

function draw() {
  if (initialDraw) {
    if (second() != lastSecond) { // Wait until the second changes
      // Set up initial positions now
      startTime = millis(); // Reset the start time
      initialSecondFraction = second() / 60; // Calculate the initial fraction based on the current second
      initialDraw = false;
    } else {
      return; // Skip the rest of the draw loop until the second changes
    }
  }

  background(0);
  let h = hour();
  let m = minute();

  // Drawing the minute semi-circle
  stroke(0, 255, 0);
  strokeWeight(10);
  noFill();
  let end1 = map(m, 0, 60, 0, 360);
  arc(width / 2, height / 2, 400, 400, 270, end1 + 270);

  // Drawing the hour semi-circle
  stroke(255, 0, 0);
  strokeWeight(20);
  let end2 = map(h % 12, 0, 12, 0, 360);
  arc(width / 2, height / 2, 350, 350, 270, end2 + 270);

  // Calculate the position of the seconds semi-circle
  let elapsedTime = millis() - startTime;
  let currentSecondFraction = initialSecondFraction + (elapsedTime % 60000) / 60000;
  let secondAngle = map(currentSecondFraction % 1, 0, 1, 0, 360);

  // Drawing the seconds semi-circle
  stroke('skyblue');
  strokeWeight(2);
  arc(width / 2, height / 2, 450, 450, 270, secondAngle + 270);

  // Displaying the digital time
  noStroke();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(second(), 2), width / 2, height / 2);
}
