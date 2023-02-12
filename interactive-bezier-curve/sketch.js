//
// Interactive Bezier Curve
//
// Interactive demo of a cubic bezier curve
//

let bezierCurve = new CubicBezier(50, 550, 750, 50, 100, 300, 700, 500);

let dirty = true;

let dragging = false;
let draggingPt = null;

///////////////////////////////////////
// Setup
setup = () => {
	// Create canvas
	createCanvas(800, 600);
}

///////////////////////////////////////
// Draw
// - Called every frame
draw = () => {

	// Only redraw if dirty
	if (dirty) {
	
		// Clear the background
		background(0);

		// Draw the bezier curve
		push();
		stroke(255);
		bezierCurve.drawCurve();
		pop();

		// Draw control points
		push();
		stroke(0, 255, 0);
		strokeWeight(2);
		bezierCurve.drawControlPoints(15);
		pop();
		
		// Set clean
		dirty = false;
	}
}

///////////////////////////////////////
// Events

//
// Mouse dragged
//
mouseDragged = (event) => {

	// Handle dragging
	if (dragging) {

		// Update the control point position
		bezierCurve.setControlPointPos(draggingPt, mouseX, mouseY);

		// Redraw
		dirty = true;
	}
}

//
// Mouse button down
//
mousePressed = (event) => {

	// Check if in range of a control point
	let radius = 10;
	let pointName = bezierCurve.getControlPoint(mouseX, mouseY, radius);
	if (pointName != null) {

		// Set dragging flag
		dragging = true;

		// Set control point position
		bezierCurve.setControlPointPos(pointName, mouseX, mouseY);
		draggingPt = pointName;

		// Redraw
		dirty = true;
	}
}

// Mouse button up
mouseReleased = (event) => {

	// Stop dragging
	if (dragging) {
		dragging = false;
		pointName = null;
	}
}