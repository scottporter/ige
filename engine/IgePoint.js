// TODO: Document
var IgePoint = function (x, y, z) {
	// Set values to the passed parameters or
	// zero if they are undefined
	this.x = x = x !== undefined ? x : 0;
	this.y = y = y !== undefined ? y : 0;
	this.z = z = z !== undefined ? z : 0;
	this.x2 = x / 2;
	this.y2 = y / 2;
	this.z2 = z / 2;

	return this;
};

IgePoint.prototype.compare = function (point) {
	return this.x === point.x && this.y === point.y && this.z === point.z;
};

/**
 * Converts the point's x, y, z to an isometric x, y 2d co-ordinate.
 * @return {Object}
 */
IgePoint.prototype.toIso = function () {
	var sx = this.x - this.y,
		sy = (-this.z) * 1.2247 + (this.x + this.y) * 0.5;

	return {x: sx, y: sy};
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgePoint; }