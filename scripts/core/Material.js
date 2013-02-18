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

Material.prototype.getAmbient = function(surface, pos) {
	
	if(this.ambient instanceof Function)
		return this.ambient(surface, pos);
	else
		return this.ambient;
};

Material.prototype.getDiffuse = function(surface, pos) {
	
	if(this.diffuse instanceof Function)
		return this.diffuse(surface, pos);
	else
		return this.diffuse;
};

Material.prototype.getSpecular = function(surface, pos) {
	
	if(this.specular instanceof Function)
		return this.specular(surface, pos);
	else
		return this.specular;
};

Material.prototype.getCoSpec = function(surface, pos) {
	
	if(this.coSpec instanceof Function)
		return this.coSpec(surface, pos);
	else
		return this.coSpec;
};

Material.prototype.getReflect = function(surface, pos) {
	
	if(this.reflect instanceof Function)
		return this.reflect(surface, pos);
	else
		return this.reflect;
};

Material.prototype.getIdxRefr = function(surface, pos) {
	
	if(this.idxRefr instanceof Function)
		return this.idxRefr(surface, pos);
	else
		return this.idxRefr;
};

Material.prototype.getRefract = function(surface, pos) {
	
	if(this.refract instanceof Function)
		return this.refract(surface, pos);
	else
		return this.refract;
};