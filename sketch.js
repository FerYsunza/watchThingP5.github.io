//
// watchThingP5
//
// By Fer Ysunza, 26/01/24.
//

let initialDraw = true;
let lastSecond;
let startTime;
let initialSecondsFraction;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  lastSecond = second(); // Record the second when the program starts
}

function draw() {
  // Delay drawing until the second changes to ensure accurate initial seconds position
  if (initialDraw) {
    let currentSecond = second();
    if (currentSecond != lastSecond) { // Check if the second has changed
      // Now that the second has changed, calculate the initial seconds fraction
      startTime = millis(); // Reset the start time
      initialSecondsFraction = currentSecond / 60; // Calculate the initial fraction of the seconds
      initialDraw = false; // Start drawing smoothly
    } else {
      return; // Skip this frame and wait until the second changes
    }
  }

  background(0);
  let h = hour();
  let m = minute();
  let s = second();

  // Calculate the total minutes including the fraction of the current second
  let totalMinutes = m + s / 60;
  let minuteAngle = map(totalMinutes, 0, 60, 0, 360);

  // Drawing the minute semi-circle
  stroke(0, 255, 0); // Green color for minutes
  strokeWeight(10); // Thinner stroke for minutes
  noFill();
  arc(width / 2, height / 2, 400, 400, 270, minuteAngle + 270);

  // Calculate the total hours including the fraction of the current minute
  let totalHours = h % 12 + totalMinutes / 60;
  let hourAngle = map(totalHours, 0, 12, 0, 360);

  // Drawing the hour semi-circle
  stroke(255, 0, 0); // Red color for hours
  strokeWeight(20); // Thicker stroke for hours
  arc(width / 2, height / 2, 350, 350, 270, hourAngle + 270);

  // Smooth calculation for the seconds semi-circle based on the initial fraction
  let elapsedTime = millis() - startTime;
  let currentSecondFraction = initialSecondsFraction + (elapsedTime % 60000) / 60000;
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
