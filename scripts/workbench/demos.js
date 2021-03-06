var demoNone = "";

var demoSphere = "{\n\
	camera:\n\
		new Camera(\n\
			new Vector3(0.0, 0.5, 4.0),\n\
			new Vector3(0.0, -0.125, -1.0),\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			2.0, 4.0, 3.0\n\
		),\n\
	\n\
	surfaces: [\n\
		new Sphere(\n\
			new Vector3(0.0, 0.0, 0.0),\n\
			1.2,\n\
			new Material(\n\
				new Vector3(0.7, 0.1, 0.1),\n\
				new Vector3(0.7, 0.1, 0.1),\n\
				new Vector3(0.7, 0.1, 0.1),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5),\n\
				1.00,\n\
				new Vector3()\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			1.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.8, 0.8, 0.8)\n\
			)\n\
		),\n\
	],\n\
	\n\
	lights: [\n\
		new PointLight(\n\
			new Vector3(0.0, 4.0, 3.0),\n\
			new Vector3(1.0, 1.0, 1.0),\n\
			new Vector3(1.0, 1.0, 1.0)\n\
		),\n\
		new PointLight(\n\
			new Vector3(0.0, 0.5, 4.0),\n\
			new Vector3(0.7, 0.7, 0.7),\n\
			new Vector3(0.2, 0.2, 0.2)\n\
		),\n\
		new AmbientLight(\n\
			new Vector3(0.3, 0.3, 0.3)\n\
		)\n\
	]\n\
}";

var demoTriangles = "{\n\
	camera:\n\
		new Camera(\n\
			new Vector3(0.0, 0.5, 4.0),\n\
			new Vector3(0.0, -0.125, -1.0),\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			2.0, 4.0, 3.0\n\
		),\n\
	\n\
	surfaces:\n\
		(function() {\n\
			\n\
			var surfaces = [];\n\
			\n\
			surfaces.push(\n\
				new Sphere(\n\
					new Vector3(0.0, 0.0, 0.0),\n\
					1.2,\n\
					new Material(\n\
						new Vector3(0.7, 0.1, 0.1),\n\
						new Vector3(0.7, 0.1, 0.1),\n\
						new Vector3(0.7, 0.1, 0.1),\n\
						100,\n\
						new Vector3(0.5, 0.5, 0.5),\n\
						1.00,\n\
						new Vector3()\n\
					)\n\
				)\n\
			);\n\
			\n\
			var a = 1;\n\
			var h = -1.2;\n\
			\n\
			for(var i = 5; i > -5; --i) {\n\
				for(var j = 5; j > -5; --j) {\n\
					\n\
					var c = Math.abs(i + j) % 2 == 0 ? 0.2 : 1.0;\n\
					var r = 0.5;\n\
					\n\
					surfaces.push(\n\
						new Triangle(\n\
							new Vector3(a * i, h, a * j),\n\
							new Vector3(a * i, h, a * j + a),\n\
							new Vector3(a * i + a, h, a * j),\n\
							new Material(\n\
								new Vector3(c, c, c),\n\
								new Vector3(c, c, c),\n\
								new Vector3(c, c, c),\n\
								100,\n\
								new Vector3(r, r, r)\n\
							)\n\
						),\n\
						new Triangle(\n\
							new Vector3(a * i + a, h, a * j),\n\
							new Vector3(a * i, h, a * j + a),\n\
							new Vector3(a * i + a, h, a * j + a),\n\
							new Material(\n\
								new Vector3(c, c, c),\n\
								new Vector3(c, c, c),\n\
								new Vector3(c, c, c),\n\
								100,\n\
								new Vector3(r, r, r)\n\
							)\n\
						)\n\
					);\n\
				}\n\
			}\n\
			\n\
			return surfaces;\n\
			\n\
		})(),\n\
	\n\
	lights: [\n\
		new PointLight(\n\
			new Vector3(0.0, 4.0, 3.0),\n\
			new Vector3(1.0, 1.0, 1.0),\n\
			new Vector3(1.0, 1.0, 1.0)\n\
		),\n\
		new PointLight(\n\
			new Vector3(0.0, 0.5, 4.0),\n\
			new Vector3(0.7, 0.7, 0.7),\n\
			new Vector3(0.2, 0.2, 0.2)\n\
		),\n\
		new AmbientLight(\n\
			new Vector3(0.3, 0.3, 0.3)\n\
		)\n\
	]\n\
}";

var demoReflection = "{\n\
	camera:\n\
		new Camera(\n\
			new Vector3(0.0, 0.5, 4.0),\n\
			new Vector3(0.0, -0.125, -1.0),\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			2.0, 4.0, 3.0\n\
		),\n\
	\n\
	surfaces: [\n\
		new Sphere(\n\
			new Vector3(0.0, 0.0, 0.0),\n\
			1.2,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5),\n\
				1.05,\n\
				new Vector3()\n\
			)\n\
		),\n\
		new Sphere(\n\
			new Vector3(1, 1, -2.0),\n\
			2,\n\
			new Material(\n\
				new Vector3(1.0, 0.0, 0.0),\n\
				new Vector3(0.7, 0.7, 0.0),\n\
				new Vector3(0.8, 0.8, 0.8),\n\
				100,\n\
				new Vector3()\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			1.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		),\n\
		new Triangle(\n\
			\n\
			new Vector3(-2.4, -0.2, -3.0),\n\
			new Vector3(-1.8, 2.5, 0.0),\n\
			new Vector3(-2.4, -0.2, 1.0),\n\
			new Material(\n\
				new Vector3(0.2, 0.2, 0.2),\n\
				new Vector3(0.5, 0.5, 0.5),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		)\n\
	],\n\
	\n\
	lights: [\n\
		new PointLight(\n\
			new Vector3(0.0, 4.0, 3.0),\n\
			new Vector3(1.0, 1.0, 1.0),\n\
			new Vector3(1.0, 1.0, 1.0)\n\
		),\n\
		new PointLight(\n\
			new Vector3(2.0, 0.5, 5.0),\n\
			new Vector3(0.7, 0.7, 0.7),\n\
			new Vector3(0.2, 0.2, 0.2)\n\
		),\n\
		new AmbientLight(\n\
			new Vector3(0.3, 0.3, 0.3)\n\
		)\n\
	]\n\
}";

var demoRefraction = "// Refraction demo currently not available.";

var demoSShadows = "{\n\
	camera:\n\
		new Camera(\n\
			new Vector3(0.5, 1, 4.0),\n\
			new Vector3(0.0, -0.25, -1.0),\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			2.0, 4.0, 3.0\n\
		),\n\
	\n\
	surfaces: [\n\
		new Sphere(\n\
			new Vector3(0.0, 0.0, 0.0),\n\
			1.2,\n\
			new Material(\n\
				new Vector3(0.7, 0.0, 0.0),\n\
				new Vector3(0.7, 0.0, 0.0),\n\
				new Vector3(0.7, 0.0, 0.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5),\n\
				1.0,\n\
				new Vector3()\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			1.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(0.5, 0.0, 1.0),\n\
			5.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(-1.0, 0.0, 0.5),\n\
			5.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		)\n\
	],\n\
	\n\
	lights: [\n\
		new AreaLight(\n\
			new Vector3(-2.0, 4.0, -3.0),\n\
			new Vector3(2.0, -4.0, 3.0),\n\
			new Vector3(1.0, 0.0, 0.0),\n\
			1,\n\
			new Vector3(0.5, 0.5, 0.5),\n\
			new Vector3(0.5, 0.5, 0.5)\n\
		),\n\
		new AreaLight(\n\
			new Vector3(-1.0, 0.0, 3.0),\n\
			new Vector3(1.0, 0.0, -3.0),\n\
			new Vector3(1.0, 0.0, 0.0),\n\
			1,\n\
			new Vector3(0.5, 0.5, 0.5),\n\
			new Vector3(0.5, 0.5, 0.5)\n\
		),\n\
		new AmbientLight(\n\
			new Vector3(0.3, 0.3, 0.3)\n\
		)\n\
	]\n\
}";

var demoPerlinWood = "{\n\
	camera:\n\
		new Camera(\n\
			new Vector3(0.5, 1, 4.0),\n\
			new Vector3(0.0, -0.25, -1.0),\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			2.0, 4.0, 3.0\n\
		),\n\
	\n\
	surfaces: [\n\
		new Sphere(\n\
			new Vector3(-0.4, 0.0, 0.0),\n\
			1.2,\n\
			new Material(\n\
				function(surface, pos) {return this.getDiffuse(surface, pos).mult(0.2); },\n\
				(function() {\n\
					var perlinGen = noise.getPerlinGen(6);\n\
					return function(surface, pos) {\n\
						var x = (pos.s0 - surface.center.s0) / (2 * surface.radius) + 0.5;\n\
						var y = (pos.s1 - surface.center.s1) / (2 * surface.radius) + 0.5;\n\
						var z = (pos.s2 - surface.center.s2) / (2 * surface.radius) + 0.5;\n\
						var n = perlinGen(x, y, z);\n\
						var c = Math.abs(Math.sin((pos.s0 + n * 2) / 0.1)) * 1.2 + 1.5;\n\
						return new Vector3(c * 0.8, c * 0.6, c * 0.4).mult(0.8);\n\
					};\n\
				})(),\n\
				function(surface, pos) {return this.getDiffuse(surface, pos).mult(0.1); },\n\
				10,\n\
				new Vector3(0.0, 0.0, 0.0),\n\
				1.05,\n\
				new Vector3()\n\
			)\n\
		),\n\
		new Sphere(\n\
			new Vector3(1.5, -0.2, 0.5),\n\
			0.8,\n\
			new Material(\n\
				new Vector3(0.7, 0.0, 0.0),\n\
				new Vector3(0.7, 0.0, 0.0),\n\
				new Vector3(0.7, 0.0, 0.0),\n\
				100,\n\
				new Vector3(0.8, 0.8, 0.8),\n\
				1.0,\n\
				new Vector3()\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(0.0, 1.0, 0.0),\n\
			1.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(0.5, 0.0, 1.0),\n\
			5.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		),\n\
		new Plane(\n\
			new Vector3(-1.0, 0.0, 0.5),\n\
			5.0,\n\
			new Material(\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.5, 0.5, 0.5)\n\
			)\n\
		)\n\
	],\n\
	\n\
	lights: [\n\
		new AreaLight(\n\
			new Vector3(3.0, 4.0, -3.0),\n\
			new Vector3(-3.0, -4.0, 3.0),\n\
			new Vector3(1.0, 0.0, 0.0),\n\
			1,\n\
			new Vector3(0.8, 0.8, 0.8),\n\
			new Vector3(0.8, 0.8, 0.8)\n\
		),\n\
		new AreaLight(\n\
			new Vector3(2.0, 0.0, 3.0),\n\
			new Vector3(-2.0, 0.0, -3.0),\n\
			new Vector3(1.0, 0.0, 0.0),\n\
			1,\n\
			new Vector3(0.5, 0.5, 0.5),\n\
			new Vector3(0.5, 0.5, 0.5)\n\
		),\n\
		new AmbientLight(\n\
			new Vector3(0.3, 0.3, 0.3)\n\
		)\n\
	]\n\
}";

(function() {
	
	var perlinGen = noise.getPerlinGen(6);
		
	return function(surface, pos) {
		var x = pos.s0;
		var y = pos.s1;
		var z = pos.s2;
		var n = perlinGen(x, y, z);
		var c = (Math.abs(Math.sin((xi + n * 100) / 7)) * 1.2 + 1.5) * 0.5;
		return new Vector3(c * 0.8, c * 0.6, c * 0.4);
	};
})();

var demos = {
	
	none: {
		
		format: "js",
		src: demoNone,
		desc: "... Then create your own scene!"
	},
	
	spheres: {
		
		format: "js",
		src: demoSphere,
		vw: 320,
		vh: 240,
		nsubs: 3,
		nlsubs: 1,
		nrefl: 1,
		nrefr: 0,
		desc:
			"A simple test scene with a red reflective sphere\
			placed on a white reflective plane. Anti-aliasing is turned on\
			for this scene."
	},
	
	triangles: {
		
		format: "js",
		src: demoTriangles,
		vw: 160,
		vh: 120,
		nsubs: 1,
		nlsubs: 1,
		nrefl: 1,
		nrefr: 0,
		desc:
			"A sphere placed on a floor consisting of interleaved\
			black and white tiles, each of which is made of a pair of\
			triangles. It would be slow if the output image size is large."
	},
	
	reflection: {
		
		format: "js",
		vw: 320,
		vh: 240,
		nsubs: 1,
		nlsubs: 1,
		nrefl: 2,
		nrefr: 0,
		src: demoReflection,
		desc:
			"A scene with a few primitives to test reflections. \
			You may change the max number of reflections and \
			compare the rendering results."
	},
	
	refraction: {
		
		format: "js",
		src: demoRefraction,
		desc: "Currently unavailable. Coming soon."
	},
	
	sshadow: {
		
		format: "js",
		vw: 320,
		vh: 240,
		nsubs: 1,
		nlsubs: 2,
		nrefl: 2,
		nrefr: 0,
		src: demoSShadows,
		desc:
			"A sphere lit by 2 area lights and mirrored. To gain \
			better quality, you may want to increase area light sampling \
			- e.g. to 4 - which would take a LONG time to render!"
	},
	
	perlinWood: {
		
		format: "js",
		vw: 320,
		vh: 240,
		nsubs: 1,
		nlsubs: 2,
		nrefl: 2,
		nrefr: 0,
		src: demoPerlinWood,
		desc:
			"This scene contains a woodlike sphere with texture generated \
			with Perlin noise and a highly reflective sphere juxtaposed for\
			contrast. Set area light sampling higher for better image quality!"
	},

};