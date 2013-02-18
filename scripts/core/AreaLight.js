function AreaLight(pos, dir, u, length, diffuse, specular) {

	Light.call(this);
	
	this.pos = pos;
	this.dir = dir.normalized();
	this.v = dir.cross(u).normalized();
	this.u = this.v.cross(dir).normalized();
	this.length = length;
	this.diffuse = diffuse;
	this.specular = specular;
};
AreaLight.prototype = new Light();
AreaLight.prototype.constructor = AreaLight;

AreaLight.eps = 0.0001;

AreaLight.prototype.getShade = function(inters, surfaces, nlsubs) {

	var normal = inters.normal();
	var posi = inters.pos();
	var surface = inters.surface;
	var diffuse = inters.surface.material.getDiffuse(surface, posi);
	var specular = inters.surface.material.getSpecular(surface, posi);
	var coSpec = inters.surface.material.getCoSpec(surface, posi);

	var shade = new Vector3();

	for(var ui = 0; ui < nlsubs; ++ui) {
		for(var vi = 0; vi < nlsubs; ++vi) {
			
			var pos =
				this.pos
				.add(this.u.mult(-this.length / 2 + (ui + Math.random()) / nlsubs))
				.add(this.v.mult(-this.length / 2 + (vi + Math.random()) / nlsubs));
			
			// Check if there are surfaces between this point light and the intersection point.
			var rayi = new Ray(pos, posi.sub(pos));
			var testInters = rayi.intersect(surfaces);
			
			// TODO Handle the case when the material is delectric.
			if(testInters.t < posi.sub(pos).norm() - AreaLight.eps)
				continue;
			
			// Lambertian shading.
			var l = pos.sub(posi).normalized();
			var lamb = diffuse.comp(this.diffuse).mult(Math.max(0, normal.dot(l)));
			
			// Blinn-Phong shading.
			var v = inters.ray.dir.neg().normalized();
			var h = v.add(l).normalized();
			var bp = specular.comp(this.specular).mult(Math.pow(Math.max(0, normal.dot(h)), coSpec));
			
			shade = shade.add(lamb).add(bp);
		}
	}

	return shade.div(nlsubs * nlsubs);
};