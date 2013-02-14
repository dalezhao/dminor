/*
 * Represents an abstract surface in the scene, which should be inherited by
 * more specific types of surfaces/ 
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the surface.
 * 
 * [params]
 * material: The material to be assigned to the surface.
 * 
 */
function Surface(material) {

	this.material = material;
}

/*
 * [summary]
 * Compute the possible intersections of a given ray with this surface.
 * 
 * [ray]
 * The ray to test intersection with.
 * 
 * [return]
 * An array containing the intersections between the given ray and this surface,
 * ordered by the t values of the intersections along the ray. At least one
 * Intersection object is in the array, which may be an invalid one indicating
 * no intersection is present.
 * 
 */
Surface.prototype.intersect = function(ray) {
	return [new Intersection(ray, this, Infinity)];
};

/*
 * [summary]
 * Compute the normal of the surface at a given position.
 * 
 * [params]
 * pos: The position at which to compute the normal.
 * 
 * [return]
 * The normal vector of the surface at the given position.
 * 
 */
Surface.prototype.normal = function(pos) {
	
	return new Vector3(0.0, 0.0, 0.0);
};
