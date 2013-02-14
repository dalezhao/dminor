/*
 * Represents a sphere.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the sphere.
 * 
 * [params]
 * center: A Vector3 object indicating coordinate of the center of the sphere.
 * radius: The radius of the sphere, which should be a positive number.
 * material: The material for the surface of the sphere.
 * 
 */
function Sphere(center, radius, material) {

	Surface.call(this, material);

	this.center = center;
	this.radius = radius;
}
// Set the prototype of this constructor (and thus its instance) to an empty
// Surface.
Sphere.prototype = new Surface();
delete Sphere.prototype.material;
Sphere.prototype.constructor = Sphere;

/*
 * [summary]
 * Compute the normal of the sphere surface at a given position.
 * 
 * [params]
 * pos:
 *   A Vector3 object specifying the position at which the normals is to be
 *   evaluated.
 * 
 * [return]
 * The normal of the sphere surface at the given position.
 * 
 */
Sphere.prototype.normal = function(pos) {
	
	return pos.sub(this.center).normalized();
};

/*
 * [summary]
 * Compute all the possible intersections between this sphere and a given ray.
 * 
 * [params]
 * ray: The ray for computing intersections.
 * 
 * [return]
 * An array containing all the intersections of this sphere and the ray,
 * ordered by increasing distance from the origin of the ray. A single
 * invalid intersection will be included in the array if no intersection exists.
 * 
 */
Sphere.prototype.intersect = function(ray) {
	
	// Compute the coefficients of the quadratic equation for the intersection.

	var a = ray.dir.dot(ray.dir);
	var b = 2 * ray.dir.dot(ray.origin.sub(this.center));
	var c = ray.origin.sub(this.center).dot(ray.origin.sub(this.center)) - this.radius * this.radius;

	// Compute the determinant.
	var det = b * b - 4 * a * c;
	
	// No intersection in the case where the determinant is negative,
	// returning an invalid intersection.
	if(det < 0) return [new Intersection(ray, this, Infinity)];
	
	// Otherwise, compute the t value for the two possible intersections.
	// If the intersection is tangent, two identical intersections would
	// be added.
	var tmp1 = ray.dir.dot(ray.origin.sub(this.center));
	var tmp2 = ray.dir.dot(ray.dir);
	
	var t1 = (-tmp1 - Math.sqrt(det / 4)) / tmp2;
	var t2 = (-tmp1 + Math.sqrt(det / 4)) / tmp2;
	
	var intersections = [];
	
	// Only when t > 0 is the intersection truly valid.
	if(t1 > 0) intersections.push(new Intersection(ray, this, t1));
	if(t2 > 0) intersections.push(new Intersection(ray, this, t2));
	
	// If the two possible intersections turn out to be invalid,
	// add an invalid intersection to the array to be returned.
	if(intersections.length == 0)
		intersections.push(
			new Intersection(ray, this, Infinity)
		);
	
	return intersections;
};

/*
 * [summary]
 * Get the string representation for this sphere.
 * 
 * [return]
 * The human-readable string representation for this sphere.
 * 
 */
Sphere.prototype.toString = function() {
	
	return "[center: " + this.center + ", radius: " + this.radius + "]";
};
