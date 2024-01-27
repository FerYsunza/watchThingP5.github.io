//
// watchThingP5
//
// By Fer Ysunza, 26/01/24.
//

let initialDraw = true;
let lastSecond;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60); // Optional: Set for smoother animation
  lastSecond = new Date().getSeconds(); // Record the second when the program starts
}

function draw() {
  let currentSecond = new Date().getSeconds();
  if (initialDraw) {
    if (currentSecond != lastSecond) {
      // Ensure we start drawing at the beginning of a new second
      initialDraw = false;
    } else {
      return; // Skip drawing until the second changes
    }
  }

  let now = new Date(); // Get the current system time
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ms = now.getMilliseconds();

  background(0);

  // Calculate the smooth position of the minute and hour semi-circles
  let totalMinutes = m + s / 60;
  let minuteAngle = map(totalMinutes, 0, 60, 0, 360);
  let totalHours = h % 12 + totalMinutes / 60;
  let hourAngle = map(totalHours, 0, 12, 0, 360);

  // Drawing the minute semi-circle
  stroke(0, 255, 0); // Green for minutes
  strokeWeight(10);
  noFill();
  arc(width / 2, height / 2, 400, 400, 270, minuteAngle + 270);

  // Drawing the hour semi-circle
  stroke(255, 0, 0); // Red for hours
  strokeWeight(20);
  arc(width / 2, height / 2, 350, 350, 270, hourAngle + 270);

  // Calculate the smooth position of the seconds semi-circle using current time
  let totalSeconds = s + ms / 1000;
  let secondAngle = map(totalSeconds, 0, 60, 0, 360);

  // Drawing the seconds semi-circle
  stroke('skyblue'); // Skyblue for seconds
  strokeWeight(2);
  arc(width / 2, height / 2, 450, 450, 270, secondAngle + 270);

  // Displaying the digital time
  noStroke();
  fill(255); // White for text
  textSize(32);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2), width / 2, height / 2);
}
