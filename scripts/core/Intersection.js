/*
 * Represents the intersection between a ray and a surface.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the intersection.
 * 
 * [params]
 * ray: The ray involved in the intersection.
 * surface: The surface involved in the intersection.
 * t: The t value of the intersection point along the direction of the ray.
 * 
 */
function Intersection(ray, surface, t) {
	
	this.ray = ray;
	this.surface = surface;
	this.t = t;
}

/*
 * [summary]
 * A epsilon used for avoiding the float point calculation error
 * in reflection and refraction computation.
 * 
 */
Intersection.eps = 0.001;

/*
 * [summary]
 * Get the position of the intersection point.
 * 
 * [return]
 * The position of the intersection point, represented by a Vector3 object.
 * 
 */
Intersection.prototype.pos = function() {
	
	return this.ray.pos(this.t);
};

/*
 * [summary]
 * Get the normal of the surface at the intersection.
 * 
 * [return]
 * The normal of the surface at the intersection, represented by a Vector3
 * object.
 * 
 */
Intersection.prototype.normal = function() {
	
	return this.surface.normal(this.pos());
};

/*
 * [summary]
 * Get the reflected ray of the original one involved in the intersection.
 * 
 * [return]
 * The reflected ray of the original one.
 * 
 */
Intersection.prototype.reflect = function() {
	
	var n = this.normal();
	var d = this.ray.dir;
	var r = d.sub(n.mult(2 * d.dot(n)));

	return new Ray(this.ray.pos(this.t - Intersection.eps), r);
};

/*
 * [summary]
 * Get the refracted ray of the original one involved in the intersection.
 * 
 * [return]
 * The refracted ray of the original one.
 * 
 */
Intersection.prototype.refract = function() {
	
	var d = this.ray.dir;
	var n = this.normal();
	
	// Compute the cosine of the angle between the ray direction and the normal.
	var cosnd = n.dot(d);

	// Determine which side of the surface should have a refraction index
	// of 1.0 or greater than 1.0.	
	var nr, nrt;
	if(cosnd < 0) {
		
		nr = 1.0;
		nrt = this.surface.material.idxRefr;
		
	} else {
		
		nr = this.surface.material.idxRefr;
		nrt = 1.0;
		
		// If the cosine between d and n is negative, it, as well as the normal
		// vector, shall be negated so that d and n reside on the same size of
		// the surface, and the cosine can reflect this change.
		n = n.neg();
		cosnd = -cosnd;
	}
	
	// Compute the square of the refracted angle.
	var cosPhi2 = 1 - nr * nr / (nrt * nrt) * (1 - cosnd * cosnd);
	
	// If a total internal reflection takes place,
	// there would be no refracted ray.
	if(cosPhi2 < 0)
		return new Ray(this.ray.pos(this.t + Intersection.eps), new Vector3());

	// Compute the direction of the refracted ray.
	var t = d.sub(n.mult(cosnd)).mult(nr / nrt).sub(n.mult(Math.sqrt(cosPhi2)));
	
	return new Ray(this.ray.pos(this.t + Intersection.eps), t);
};

/*
 * [summary]
 * Test if this intersection is indeed a valid one, i.e. the t value of along
 * the ray is positive and finite.
 * 
 * [return]
 * True if the intersection is valid, otherwise false.
 * 
 */
Intersection.prototype.valid = function() {
	
	return this.t < Infinity && this.t >= 0;
};

/*
 * [summary]
 * Get the string representation for the intersection.
 * 
 * [return]
 * The string representation for the intersection.
 * 
 */
Intersection.prototype.toString = function() {
	
	return "[intersection: " + this.ray.pos(this.t) + "]";
};