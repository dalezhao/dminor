function PointLight(pos, diffuse, specular) {

	Light.call(this);
	
	this.pos = pos;
	this.diffuse = diffuse;
	this.specular = specular;
};
PointLight.prototype = new Light();
PointLight.prototype.constructor = PointLight;

PointLight.eps = 0.0001;

PointLight.prototype.getShade = function(inters, surfaces) {

	var normal = inters.normal();
	var pos = inters.pos();
	var diffuse = inters.surface.material.diffuse;
	var specular = inters.surface.material.specular;
	var coSpec = inters.surface.material.coSpec;

	// Check if there are surfaces between this point light and the intersection point.
	var rayi = new Ray(this.pos, pos.sub(this.pos));
	var testInters = rayi.intersect(surfaces);

	// TODO Handle the case when the material is delectric.
	if(testInters.t < pos.sub(this.pos).norm() - PointLight.eps)
		return new Vector3(0.0, 0.0, 0.0);
	
	// Lambertian shading.
	var l = this.pos.sub(pos).normalized();
	var lamb = diffuse.comp(this.diffuse).mult(Math.max(0, normal.dot(l)));
	
	// Blinn-Phong shading.
	var v = inters.ray.dir.neg().normalized();
	var h = v.add(l).normalized();
	var bp = specular.comp(this.specular).mult(Math.pow(Math.max(0, normal.dot(h)), coSpec));

	return lamb.add(bp);
};