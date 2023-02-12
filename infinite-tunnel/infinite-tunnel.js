//
// Infinite Tunnel 2D
//
// Pseudo-3D infinite tunnel illusion
//

// The moving origin point for the rectangles
let originPt = { x: 400, y: 300 };

// Initial origin point rotation angle
let originRotation = 0;

// The velocity applied to the origin point
let originVelocity = { x: 0, y: 0 };

// Save the screen's center point to avoid recalculating it
let centerPt = { x: 400, y: 300 };

// The maximum size of a rectangle
let rectSize = { w: 1100, h: 900 };

// Array containing all of the rectangles
let rects = [];

// Last FPS check time
let lastFpsTime = 0;
let lastFps = "";

///////////////////////////////////////
// Setup
function setup()
{
	createCanvas(800, 600);
	frameRate(60);
}

///////////////////////////////////////
// Draw
// - Called every frame
function draw()
{
	// Clear the background
	background(0);

	// Add a new rectangle periodically
	if (frameCount % 10 == 0) {

		// Add a rect
		addNewRect(rects);

	}

	// Update rects
	updateRects(rects);

	// Draw rectangles from origin to viewer
	noFill();
	for (let i = rects.length - 1; i >= 0; i--) {

		// Save the frame's drawing context
		push();

		// Adjust the drawing color
		stroke(255 * rects[i].colorFactor, 0, 0);

		// Apply each rectangle's transformations
		translate(rects[i].x, rects[i].y);
		rotate(rects[i].rotation);

		// Draw the rectangle
		rect(-(rects[i].w / 2), -(rects[i].h / 2), rects[i].w * 1.2, rects[i].h);

		// Draw the particle if this slice has one
		if (rects[i].particle != null) {
			push();

			// Apply transformations
			translate(rects[i].particle.x, rects[i].particle.y);
			scale(rects[i].colorFactor);

			// Draw the particles
			noStroke();
			fill(100 + 155 * rects[i].colorFactor, 100 + 155 * rects[i].colorFactor, 0, 50);
			for (let j = 0; j < 10; j++) {
				ellipse(0, 0, random(2, 6));
			}

			pop();
		}

		// Restore the frame's drawing context
		pop();
	}

	// Calculate FPS
	if (frameCount % 60 == 0) {

		// Calculate elapsed time
		let elapsedTimeMs = millis() - lastFpsTime;
		let elapsedTimeS = elapsedTimeMs / 1000;

		// Display FPS
		lastFps = round(60 / elapsedTimeS);

		// Record last FPS check time
		lastFpsTime = millis();
	}

	// Draw FPS
	push();
	noStroke();
	fill(255);
	textSize(16);
	text("FPS: " + lastFps, 10, 20);
	pop();
}

///////////////////////////////////////
// Add a new rectangle to the array
function addNewRect(rectArray) {

	// Update cyclic rotation
	originRotation = sin(frameCount / 120) / 2;

	// Update origin point velocity
	let moveAmount = 5; // The max amount of velocity change
	originVelocity = {
		x: originVelocity.x + random(-moveAmount, moveAmount),
		y: originVelocity.y + random(-moveAmount, moveAmount)
	};

	// Cap the origin velocity
	let maxVelocity = 20;
	originVelocity.x = constrain(originVelocity.x, -maxVelocity, maxVelocity);
	originVelocity.y = constrain(originVelocity.y, -maxVelocity, maxVelocity);

	// Apply velocity to origin point
	originPt.x += originVelocity.x;
	originPt.y += originVelocity.y;

	// Constrain the origin to a screen area
	originPt.x = constrain(originPt.x, width * 0.2, width * 0.8);
	originPt.y = constrain(originPt.y, height * 0.2, height * 0.8);

	// Possibly add a particle in this frame
	let particle = null;
	if (random(0, 100) > 20) {
		particle = {
			x: random(-15, 15),
			y: random(-7, 7),
			rot: 0,
			rotRate: random(-0.2, 0.2)
		};
	}

	// Add a new rectangle with
	rectArray.push({
		x: originPt.x,
		y: originPt.y,
		w: 30,
		h: 15,
		rotation: originRotation,
		colorFactor: 0,
		particle: particle
	});

}

///////////////////////////////////////
// Update all rects
function updateRects(rectArray) {

	// Change rates
	let movementRate = 0.01;
	let growthRate = 2;
	let particleMovementRate = 1.02;

	// Expand rectangles
	for (let i = 0; i < rectArray.length; i++) {

		// Update rectangle properties
		rectArray[i].x += (centerPt.x - rectArray[i].x) * movementRate; // Move origin closer 
		rectArray[i].y += (centerPt.y - rectArray[i].y) * movementRate; // to center of screen
		rectArray[i].w = rectArray[i].w + growthRate; // Grow rect width
		rectArray[i].h = rectArray[i].h + growthRate; // Grow rect height
		rectArray[i].rotation *= 0.999; // Reduce rotation gradually closer to 0
		rectArray[i].colorFactor = constrain(rectArray[i].colorFactor + 0.005, 0, 255);

		// Update embedded particle (if there is one)
		if (rectArray[i].particle != null) {

			// Update particle position within the rect
			rectArray[i].particle.x *= particleMovementRate;
			rectArray[i].particle.y *= particleMovementRate;

			// Update particle rotation
			rectArray[i].particle.rot += rectArray[i].particle.rotRate;
		}
	}

	// Cull full size rectangles
	for (let i = rectArray.length - 1; i >= 0; i--) {

		if (rectArray[i].w > rectSize.w || rectArray[i].h > rectSize.h) {
			rectArray.splice(i, 1);
		}
	}
}