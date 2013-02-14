/*
 * Represents a plane.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the plane.
 * 
 * [params]
 * center: A Vector3 object specifying the normal direction of the plane.
 * dist: A signed distance between the plane and the origin. 
 * material: The material for the surface of the plane.
 * 
 */
function Plane(dir, dist, material) {
	
	Surface.call(this, material);
	
	this.dir = dir.normalized();
	this.dist = dist;
}
// Set the prototype of this constructor (and thus its instance) to an empty
// Surface.
Plane.prototype = new Surface();
delete Plane.prototype.material;
Plane.prototype.constructor = Plane;

/*
 * [summary]
 * Compute the normal of the plane surface at a given position.
 * 
 * [params]
 * pos:
 *   A Vector3 object specifying the position at which the normals is to be
 *   evaluated.
 * 
 * [return]
 * The normal of the plane surface at the given position, which is constant.
 * 
 */
Plane.prototype.normal = function(pos) {
	
	return this.dir;
};

/*
 * [summary]
 * Compute the intersection between this plane and a given ray.
 * 
 * [params]
 * ray: The ray for computing intersections.
 * 
 * [return]
 * An array containing the intersection of this plane and the ray. A single
 * invalid intersection will be included in the array if no intersection exists.
 * 
 */
Plane.prototype.intersect = function(ray) {
	
	var cos = ray.dir.dot(this.dir);
	
	if(cos == 0) return [new Intersection(ray, this, Infinity)];
	
	var t = -(ray.origin.dot(this.dir) + this.dist) / cos;
	
	return [new Intersection(ray, this, t)];
};
