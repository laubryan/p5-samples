//
// Texture Drawing Benchmark
//
// Speed comparison drawing static using pixels vs textures
//

var staticTexture;
var texWidth;
var texHeight;
var squareSize = 5;

function setup() {

  // Create the drawing canvas
  createCanvas(400, 400);
  background(0);

  // Set some drawing defaults
  noStroke();
  textSize(22);
  textAlign(CENTER);

  // Create off-screen texture
  createTexture(100, 100, squareSize);
}

function draw() {

  // Draw real-time static using drawing functions
  var timeStart1 = millis();
  drawRealTimeStatic(0, 0, 60, 40, squareSize);
  var timeEnd1 = millis();

  // Draw static using the pre-generated texture
  var timeStart2 = millis();
  drawTextureBasedStatic(200, 0, 200, 300);
  var timeEnd2 = millis();

  // Blank the text area
  fill(0);
  rect(0, 300, 400, 100);

  // Draw the separator
  stroke(255, 0, 0);
  line(200, 0, 200, 400);

  // Display Timing 1
  noStroke();
  fill(255);
  var timeElapsed1 = round(timeEnd1-timeStart1, 2);
  text("Real-Time Drawing", 100, 330);
  text(timeElapsed1 + " ms/frame", 100, 370);

  // Display Timing 2
  var timeElapsed2 = round(timeEnd2-timeStart2, 2);
  text("Texture Drawing", 300, 330);
  text(timeElapsed2 + " ms/frame", 300, 370);
}

// Create the static texture
function createTexture(rows, cols, squareSize) {

  // Create off-screen texture
  texWidth = cols * squareSize;
  texHeight = rows * squareSize;
  staticTexture = createImage(texWidth, texHeight);

  // Get the texture's pixel buffer
  staticTexture.loadPixels();

  // Calculate some sizes
  var pixelSize = 4 * pixelDensity();
  var rowSize = cols * squareSize * pixelSize;

  // Draw the squares
  for(var row=0; row<rows; row++) {
    for(var col=0; col<cols; col++) {
      var shade = getShade();
      drawSquareTheHardWay(row, col, squareSize, rowSize, pixelSize, shade);
    }
  }

  // Update the image using the populated pixel buffer
  staticTexture.updatePixels();

  // Set the texture filter mode
  staticTexture.filter(OPAQUE);
}

// Draw static real-time using p5 drawing functions
function drawRealTimeStatic(x, y, rows, cols, squareSize) {
  noStroke();
  for(var row=0; row<rows; row++) {
    for(var col=0; col<cols; col++) {
      // Draw the square
      fill(getShade());
      rect(x + (col * squareSize), y + (row * squareSize), squareSize, squareSize);
    }
  }
}

// Draw a square by manually filling pixel buffer values
// If there's a way to use drawing functions on a created image, it would certainly be 
// much easier, but I didn't spend much time figuring it out for this test
function drawSquareTheHardWay(row, col, squareSize, rowSize, pixelSize, shade) {
  var rectWidth = squareSize * pixelSize;
  var rectStart = row * rowSize;

  // Draw each row of the square
  for(var i=0; i<squareSize; i++) {
  
    // Draw a horizontal line of the rect
    for(var j=0; j<rectWidth; j++) {

      // Populate the RGBA pixel components
      // Could you use a loop here? Sure, but it would only be 3 iterations.
      staticTexture.pixels[(rectStart * squareSize) + (rowSize * i) + (col * rectWidth) + j + 0] = shade; // R
      staticTexture.pixels[(rectStart * squareSize) + (rowSize * i) + (col * rectWidth) + j + 1] = shade; // G
      staticTexture.pixels[(rectStart * squareSize) + (rowSize * i) + (col * rectWidth) + j + 2] = shade; // B
      staticTexture.pixels[(rectStart * squareSize) + (rowSize * i) + (col * rectWidth) + j + 3] = 255; // A
    }

  }
}

// Copy a section of the texture to the screen
function drawTextureBasedStatic(x, y, w, h) {

  // Calculate some dimensions
  var maxSourceW = texWidth - w;
  var maxSourceH = texHeight - h;

  // Take a random full-size section of the texture and copy it to the output
  copy(staticTexture, int(random(0, maxSourceW)), int(random(0, maxSourceH)), w, h, x, y, w, h);
}

// Get a random shade of gray
function getShade() {
  return random(50, 200);
}