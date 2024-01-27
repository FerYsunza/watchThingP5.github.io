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
      startTime = millis(); // Reset the start time once the second changes
      initialDraw = false; // Now ready to draw smoothly
    } else {
      return; // Skip this frame and wait until the second changes
    }
  }

  background(0);
  let h = hour();
  let m = minute();
  let s = second();

  // Smooth calculation for the minute semi-circle
  let totalMinutes = m + s / 60;
  let minuteAngle = map(totalMinutes, 0, 60, 0, 360);

  // Drawing the minute semi-circle
  stroke(0, 255, 0); // Green color for minutes
  strokeWeight(10); // Thinner stroke for minutes
  noFill();
  arc(width / 2, height / 2, 400, 400, 270, minuteAngle + 270);

  // Smooth calculation for the hour semi-circle
  let totalHours = h % 12 + m / 60 + s / 3600;
  let hourAngle = map(totalHours, 0, 12, 0, 360);

  // Drawing the hour semi-circle
  stroke(255, 0, 0); // Red color for hours
  strokeWeight(20); // Thicker stroke for hours
  arc(width / 2, height / 2, 350, 350, 270, hourAngle + 270);

  // Smooth calculation for the seconds semi-circle
  let elapsedTime = millis() - startTime;
  let currentSecondFraction = (elapsedTime % 60000) / 60000;
  let secondAngle = map(currentSecondFraction % 1, 0, 1, 0, 360);

  // Drawing the seconds semi-circle
  stroke('skyblue'); // Skyblue color for seconds
  strokeWeight(2); // Even thinner stroke for seconds
  arc(width / 2, height / 2, 450, 450, 270, secondAngle + 270);

  // Displaying the digital time
  noStroke();
  fill(255); // White color for text
  textSize(32);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2), width / 2, height / 2);
}
