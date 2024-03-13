let r, g, b;

function setup() {
  createCanvas(displayWidth, displayHeight);
  r = random(255, 255);
  g = random(255, 200);
  b = random(255, 255);
}

function draw() {
  background(r, g, b);
  console.log('draw');
}

function deviceMoved() {
  r = map(accelerationX, -90, 90, 100, 175);
  g = map(accelerationY, -90, 90, 100, 200);
  b = map(accelerationZ, -90, 90, 100, 200);
}
