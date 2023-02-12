//
// Cubic Bezier class
//
class CubicBezier {

	// Control points p1, c1, c2, p2
	_points = {
		p1: {},
		c1: {},
		c2: {},
		p2: {},
	}

	//
	// Constructor
	//
	constructor(px1, py1, px2, py2, cx1, cy1, cx2, cy2) {

		// Save end and control points
		this._points.p1 = { x: px1, y: py1, type: 0 };
		this._points.c1 = { x: cx1, y: cy1, type: 1 };
		this._points.c2 = { x: cx2, y: cy2, type: 1 };
		this._points.p2 = { x: px2, y: py2, type: 0 };
	}

	//////////////////////////////////////////////////////
	// Public Methods
	//

	//
	// Draw control points
	//
	drawControlPoints = (size) => {

		// Save p5 state
		push();

		noFill();

		// Draw control points
		for (const pt of Object.values(this._points)) {
			this.#drawControlPoint(pt, size);
		}

		// Restore p5 state
		pop();
	}

	//
	// Draw curve
	//
	drawCurve = () => {

		// Get references
		let p1 = this._points.p1;
		let c1 = this._points.c1;
		let c2 = this._points.c2;
		let p2 = this._points.p2;

		// Draw curve
		let stepAmount = 0.0001;
		for (let u = 0; u < 1; u += stepAmount) {
			
			// Calculate coords
			let x = (((1 - u) ** 3) * p1.x) + ((3 * u * ((1 - u) ** 2)) * c1.x) + (3 * (1 - u) * (u ** 2) * c2.x) + ((u ** 3) * p2.x);
			let y = (((1 - u) ** 3) * p1.y) + ((3 * u * ((1 - u) ** 2)) * c1.y) + (3 * (1 - u) * (u ** 2) * c2.y) + ((u ** 3) * p2.y);

			// Draw point on curve
			point(x, y);
		}
	}

	//
	// Get closest control point to coords
	//
	getControlPoint = (x, y, radius) => {

		// Check each control point
		for (const [name, pt] of Object.entries(this._points)) {

			// Return the point name if it's within the radius
			if (dist(x, y, pt.x, pt.y) <= radius) {
				return name;
			}
		}

		// Not near any point
		return null;
	}

	//
	// Set position for named control point
	//
	setControlPointPos = (name, x, y) => {

		// Get control point
		let pt = this._points[name];
		pt.x = x;
		pt.y = y;
	}

	//////////////////////////////////////////////////////
	// Private Methods
	//

	//
	// Draw individual control point
	//
	#drawControlPoint = (pt, size) => {

		switch (pt.type) {
			case 0:
				push();
				rectMode(CENTER);
				rect(pt.x, pt.y, size, size);
				pop();
				break;
			case 1:
				ellipse(pt.x, pt.y, size, size);
				break;
			}
	}
}