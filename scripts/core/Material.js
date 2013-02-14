/*
 * Represents a material for a surface in the 3-D scene.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * Constructor for the material.
 * 
 * [params]
 * ambient: The ambient component of the material, a Vector3 object.
 * diffuse: The diffuse component of the material, a Vector3 object.
 * specular: The specular component of the material, a Vector3 object.
 * coSpec: The power (Phong exponent) of the specular component.
 * reflect: The coefficients specifying the degrees of reflectivity
 *     for the 3 colors, a Vector3 object.
 * idxRefr: The refractive index.
 * refract: The coefficients specifying the degree of refractivity
 *     for the 3 colors, a Vector3 object.
 * 
 */
function Material(
	ambient, diffuse, specular, coSpec,
	reflect, idxRefr, refract) {

	this.ambient = ambient || new Vector3();
	this.diffuse = diffuse || new Vector3();
	this.specular = specular || new Vector3();
	this.coSpec = coSpec || new Vector3();
	this.reflect = reflect || new Vector3();
	this.idxRefr = idxRefr || 1.0;
	this.refract = refract || new Vector3();
}