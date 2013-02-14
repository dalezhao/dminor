/*
 * Represents a ray in the 3-D scene.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the ray.
 * 
 * [params]
 * origin: The origin of the ray represented by a Vector3 object.
 * dir: The direction of the ray represented by a Vector3 object.
 * 
 */
function Ray(origin, dir) {
	
	this.origin = origin;
	this.dir = dir.normalized();
}

/*
 * [summary]
 * Get the position of a point along the ray.
 * 
 * [params]
 * t: The t value of the point along the ray.
 * 
 * [return]
 * The position of the point represented by a Vector3 object.
 * 
 */
Ray.prototype.pos = function(t) {
	
	return this.origin.add(this.dir.mult(t));
};

/*
 * [summary]
 * TODO Get all intersections between this ray and a set of surfaces.
 * 
 * [params]
 * surfaces: The set of surfaces to test intersections with.
 * 
 * [return]
 * An array containing all possible intersections between this ray and the set
 * of surfaces. In case of no intersections, a single invalid intersection will
 * be put into the array. 
 * 
 */
Ray.prototype.intersectAll = function(surfaces) {
	
};

/*
 * [summary]
 * Get the nearest intersection between this ray and a set of surfaces.
 * 
 * [params]
 * surfaces: The set of surfaces to test intersections with.
 * 
 * [return]
 * The nearest intersection of this ray and the set of surfaces if one is found.
 * Otherwise an invalid intersection is returned.
 * 
 */
Ray.prototype.intersect = function(surfaces) {
	
	// Initialize the t value of the intersection point to infinity,
	// and set the possible intersection invalid.
	var tNear = Infinity;
	var intersectionNear = new Intersection(this, undefined, Infinity);
	
	for(var i = 0; i < surfaces.length; ++i) {
		
		var surface = surfaces[i];
		
		var intersections = surface.intersect(this);
		var intersection = intersections[0];
		
		// If a valid intersection is found and it is nearer than the current
		// recorded intersection, then update the recorded intersection. 
		if(intersection.valid() && intersection.t < tNear) {
			tNear = intersection.t;
			intersectionNear = intersection;
		}
	}
	
	return intersectionNear;
};

/*
 * [summary]
 * Get the shade of the reversed ray.
 * 
 * [params]
 * scene: The scene, particularly containing surfaces and light sources in
 *     concern, in which this ray exists.
 * mnrefl: The maximum number of reflections this ray can generate.
 * mnrefr: The maximum number of refractions this ray can generate.
 * 
 * [return]
 * The color of the shade that the reversed ray should return, with possible
 * reflections and refractions considered.
 * 
 */
Ray.prototype.getShade = function(scene, mnrefl, mnrefr, nlsubs) {
	
	var lights = scene.lights;
	var surfaces = scene.surfaces;
	var camera = scene.camera;
	var inters = this.intersect(surfaces);

	// Initialize the accumulated shades of all sources to zero.
	var shade = new Vector3();
	var shadeRefl = new Vector3();
	var shadeRefr = new Vector3();

	if(inters.valid()) {

		var refr = inters.surface.material.refract;
		var refl = inters.surface.material.reflect;

		// Get the diffuse and specular parts of the shade.
		for(var i = 0; i < lights.length; ++i) {
			shade = shade.add(lights[i].getShade(inters, surfaces, nlsubs));
		}

		// If reflected ray tracing is requested and the reflection coefficient
		// of the surface at the intersection is positive, then compute the
		// shade of the reflected ray.
		if(mnrefl > 0 && !refl.eq(Vector3.zero)) {

			shadeRefl =
				inters.reflect().getShade(scene, mnrefl - 1, mnrefr, nlsubs);
		}

		// If refracted ray tracing is requested and the refraction coefficient
		// of the surface at the intersection is positive, then compute the
		// shade of the refracted ray.
		if(mnrefr > 0 && !refr.eq(Vector3.zero)) {

			shadeRefr =
				inters.refract().getShade(scene, mnrefl, mnrefr - 1, nlsubs);
		}
		
		// Add together the diffuse, specular, (ideal) reflection and refraction
		// parts of the shade that this ray generates.
		shade = shade.comp((new Vector3(1.0, 1.0, 1.0)).sub(refr).sub(refl)).add(shadeRefl.comp(refl)).add(shadeRefr.comp(refr));
	}
	
	return shade;
};

/*
 * [summary]
 * Returns the string representation of a ray object.
 * 
 */
Ray.prototype.toString = function() {
	
	return "[origin: " + this.origin + ", dir: " + this.dir + "]";
};
