/*
 * Represents an ambient light in the scene.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the ambient light.
 * 
 * [params]
 * intensity: A Vector3 object representing the intensity of the ambient light.
 * 
 */
function AmbientLight(intensity) {

	Light.call(this);
	
	this.intensity = intensity;
}
this.prototype = new Light();
AmbientLight.prototype.constructor = AmbientLight;

/*
 * [summary]
 * Get the contribution of this ambient light for the shading of a surface at
 * the intersection, given the set of all surfaces.
 * 
 * [return]
 * The contribution of this light source to the shading at the given
 * intersection, represented by a Vector3 object.
 * 
 */
AmbientLight.prototype.getShade = function(inters, surfaces) {
	
	var surface = inters.surface;
	var pos = inters.pos();
	
	return this.intensity.comp(inters.surface.material.getAmbient(surface, pos));
};