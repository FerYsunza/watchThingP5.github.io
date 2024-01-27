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
  let now = new Date(); // Get the current system time
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ms = now.getMilliseconds();

  // Calculate the smooth position of the seconds, minutes, and hours
  let totalSeconds = s + ms / 1000;
  let secondsAngle = map(totalSeconds, 0, 60, 0, 360);
  
  let totalMinutes = m + s / 60;
  let minutesAngle = map(totalMinutes, 0, 60, 0, 360);
  
  let totalHours = h % 12 + totalMinutes / 60;
  let hoursAngle = map(totalHours, 0, 12, 0, 360);

  // Drawing the "slices" for seconds, minutes, and hours
  fill('skyblue'); // Skyblue color for seconds
  arc(width / 2, height / 2, 450, 450, 270, secondsAngle + 270, PIE);
  fill(0, 255, 0); // Green color for minutes
  arc(width / 2, height / 2, 400, 400, 270, minutesAngle + 270, PIE);
  fill(255, 0, 0); // Red color for hours
  arc(width / 2, height / 2, 350, 350, 270, hoursAngle + 270, PIE);

  // Displaying the digital time below the dial
  fill(255); // White color for text
  noStroke();
  textSize(32);
  textFont('monospace'); // Using monospace for a digital look
  textAlign(CENTER, CENTER);
  // Position the text below the dial by adjusting the y-coordinate
  text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2), width / 2, height / 2 + 250);
}
