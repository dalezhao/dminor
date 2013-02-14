/*
 * Represents a light source in the scene abstractly, which should be inherited
 * by some more specific type of light source.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the light source.
 * 
 */
function Light() {

}

/*
 * [summary]
 * Get the contribution of this light source for the shading of a surface at the
 * intersection, given the set of all surfaces.
 * 
 * [return]
 * The contribution of this light source to the shading at the given
 * intersection, represented by a Vector3 object.
 * 
 */
Light.prototype.getShade = function(inters, surfaces) {

	return new Vector3(0.0, 0.0, 0.0);
};