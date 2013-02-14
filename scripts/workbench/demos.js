var demoNone = "";

var demoSphere = "// Sphere demo currently not available.";

var demoTriangles = "// Triangles demo currently not available.";

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
			new Vector3(-1.0, -0.5, 0.0),\n\
			new Vector3(-0.8, 1.5, 2.0),\n\
			new Vector3(-1.5, -0.5, 2.0),\n\
			new Material(\n\
				new Vector3(0.2, 0.2, 0.2),\n\
				new Vector3(0.3, 0.3, 0.3),\n\
				new Vector3(1.0, 1.0, 1.0),\n\
				100,\n\
				new Vector3(0.2, 0.2, 0.2)\n\
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

var demos = {
	
	none: {
		
		format: "js",
		src: demoNone,
		desc: "Currently unavailable. Coming soon."
	},
	spheres: {
		
		format: "js",
		src: demoSphere,
		desc: "Currently unavailable. Coming soon."
	},
	triangles: {
		
		format: "js",
		vw: 160,
		vh: 120,
		src: demoTriangles,
		desc: "Currently unavailable. Coming soon."
	},
	reflection: {
		
		format: "js",
		vw: 320,
		vh: 240,
		nsubs: 1,
		nlsubs: 1,
		nrefl: 3,
		nrefr: 3,
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
		nlsubs: 3,
		src: demoSShadows,
		desc:
			"To achieve better quality, you may want to adjust \
			area light sampling to 6 - \
			which would take a LONG time to render!"
	}
};