/*
 * Represents a sphere.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the triangle.
 * 
 * [params]
 * p0: The coordinates of the first vertex of the triangle.
 * p1: The coordinates of the second vertex of the triangle.
 * p2: The coordinates of the third vertex of the triangle.
 * material: The material for the surface of the triangle.
 * 
 */
function Triangle(p0, p1, p2, material) {
	
	Surface.call(this, material);
	
	this.p0 = p0;
	this.p1 = p1;
	this.p2 = p2;
	this.n = this.p1.sub(this.p0).cross(this.p2.sub(this.p0)).normalized();
}
// Set the prototype of this constructor (and thus its instance) to an empty
// Surface.
Triangle.prototype = new Surface();
delete Triangle.prototype.material;
Triangle.prototype.constructor = Triangle;

/*
 * [summary]
 * Compute the normal of the triangle surface at a given position.
 * 
 * [params]
 * pos:
 *   A Vector3 object specifying the position at which the normals is to be
 *   evaluated.
 * 
 * [return]
 * The normal of the triangle surface at the given position, which is constant.
 * 
 */
Triangle.prototype.normal = function(pos) {
	
	return this.n;
};

/*
 * [summary]
 * Compute the intersection between this triangle and a given ray.
 * 
 * [params]
 * ray: The ray for computing intersections.
 * 
 * [return]
 * An array containing the intersection of this triangle and the ray. A single
 * invalid intersection will be included in the array if no intersection exists.
 * 
 */

Triangle.prototype.intersect = function(ray) {
	
	var e = ray.origin;
	var d = ray.dir;
	
	var deta = new Matrix3x3(
		this.p0.sub(this.p1), this.p0.sub(this.p2), d
	).det();
	
	if(deta == 0)
		return [new Intersection(ray, this, Infinity)];
	
	var detb = new Matrix3x3(
		this.p0.sub(e), this.p0.sub(this.p2), d
	).det();
	var detg = new Matrix3x3(
		this.p0.sub(this.p1), this.p0.sub(e), d
	).det();
	var dett = new Matrix3x3(
		this.p0.sub(this.p1), this.p0.sub(this.p2), this.p0.sub(e)
	).det();

	// Compute the coordinates of the potential intersection point in the
	// bilinear plane of the triangle.
	
	var beta = detb / deta;
	var gamma = detg / deta;
	
	if(beta >= 0 && beta <= 1 &&
		gamma >= 0 && gamma <= 1 &&
		beta + gamma <= 1)
		return [new Intersection(ray, this, dett / deta)];
	else return [new Intersection(ray, this, Infinity)];
};