/* 
 * DONE triangle
 * DONE anti-aliasing
 * TODO soft-shadow/area-light
 * TODO directional light
 * TODO spotlight
 * DONE alpha blending (not necessary)
 * TODO refraction
 * TODO bounding box
 * TODO acceleration/optimization
 * DONE renderer options
 * TODO reduce redundant computations
 * DONE add progress indicating callback functionality
 */

/*
 * Represents a raytracing renderer.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the raytracing renderer.
 * 
 * [params]
 * options:
 *   An object specifying the parameters which the renderer works with.
 *   It may contain the following effective properties:
 *   - nrefl: the maximum number of reflections a ray can have.
 *   - nrefr: the maximum number of refractions a ray can have.
 *   - nsubs: nsubs x nsubs subsamples will be produced for each primary ray.
 *   - nlsubs: nlsubs x nlsubs subsamples will be taken for each area light.
 *   - callback: a callback function to be invoked after the rendering of
 *       each pixel, which may be used to track the rendering progress.
 * 
 */
function Renderer(options) {
	
	// Set the options to an empty object if it is not provided.
	options = options || {};
	
	// Set the number of reflections a ray can have.
	this.nrefl = options.nrefl || 0;
	// Set the number of refractions a ray can have.
	this.nrefr = options.nrefr || 0;
	// Set the number of subsamples of a primary ray.
	this.nsubs = options.nsubs || 1;
	// Set the number of subsamples of an area light.
	this.nsubs = options.nlsubs || 1;
	// Set the callback to be invoked during rendering process.
	this.callback = options.callback;
}

/*
 * [summary]
 * A utility function for computing the shade of a given pixel.
 * 
 * [params]
 * scene: The scene being rendered.
 * vw: The width of the viewport (image, in pixels).
 * vh: The height of the viewport (image, in pixels).
 * x: The x coordinate of the pixel being rendered.
 * y: The y coordinate of the pixel being rendered.
 * 
 * [return]
 * A Vector3 containing the three color components of the shade.
 */
Renderer.prototype.getShade = function(scene, vw, vh, x, y) {

	var camera = scene.camera;
	var nsubs = this.nsubs;
	var nlsubs = this.nlsubs;

	// If multisampling is disabled.
	if(nsubs == 1) {
		
		// Get the ray through the center of the pixel.
		var u = -0.5 * camera.width + camera.width / vw * (x + 0.5);
		var v = -0.5 * camera.height + camera.height / vh * (y + 0.5);
		var ray = camera.getRay(u, v);
		
		// Get the shade of the ray.
		var shade = ray.getShade(scene, this.nrefl, this.nrefr, this.nlsubs);
		
		return shade;
		
	} else {
		
		// Initialize the shade to black.
		var shade = new Vector3();
		
		for(var i = 0; i < nsubs; ++i) {
			for(var j = 0; j < nsubs; ++j) {
				
				// Generate the subray for the primary ray at a random location
				// within the subray grid.
				var u = -0.5 * camera.width + camera.width / vw * (x + (j + Math.random()) / nsubs);
				var v = -0.5 * camera.height + camera.height / vh * (y + (i + Math.random()) / nsubs);
				var ray = camera.getRay(u, v);
				
				// Accumulate the shade of the subray.
				shade = shade.add(ray.getShade(scene, this.nrefl, this.nrefr, this.nlsubs));
			}
		}
		
		// Average the shades of all the subrays for this primary ray.
		shade = shade.div(nsubs * nsubs);
		
		return shade;
	}
};


/*
 * [summary]
 * A utility function that returns the style text for a canvas 2-D context
 * for a given color.
 * 
 * [params]
 * r: The red component of the color, between 0.0 and 1.0.
 * g: The red component of the color, between 0.0 and 1.0.
 * b: The red component of the color, between 0.0 and 1.0.
 * 
 * [return]
 * The style text for the given color.
 * 
 */
Renderer.getStyle = function(r, g, b) {

	return "rgb(" +
		Math.ceil(255 * r) + "," +
		Math.ceil(255 * g) + "," +
		Math.ceil(255 * b) + ")";
};

/*
 * [summary]
 * Render a scene on a canvas.
 * 
 * [params]
 * scene: The scene object describing the scene to be rendered.
 * vw: The width of the viewport (image, in pixels).
 * vh: The height of the viewport (image, in pixels).
 * canvas: An optional DOM object for the HTML5 <canvas> tag, on which the
 *   rendered image will be drawn, if the parameter is not undefined.
 * 
 * [return]
 * A triple (represented by an array) for the 3 color channels (red, green and
 * blue, in sequence) of the rendered image, each being a 1-D array.
 * 
 */
Renderer.prototype.render = function(scene, vw, vh, canvas) {

	// Initialize 3 buffers for the 3 color channels (RGB).
	var r = new Array(vw * vh);
	r[0] = 0.0;
	var g = new Array(vw * vh);
	g[0] = 0.0;
	var b = new Array(vw * vh);
	b[0] = 0.0;

	// Initialize the 2-D context of the canvas.
	var context = undefined;
	if(canvas) context = canvas.getContext("2d");
	// context.clearRect(0, 0, canvas.width, canvas.height);
	
	for(var y = 0; y < vh; ++y) {
		for(var x = 0; x < vw; ++x) {
			
			// Get the shade of each pixel in Vector3 and convert it
			// into an array.
			var shade = this.getShade(scene, vw, vh, x, y).array();
			
			// Store the colors into the channel buffers.
			r[vw * y + x] = shade[0];
			g[vw * y + x] = shade[1];
			b[vw * y + x] = shade[2];
			
			// Draw the pixel onto the canvas, if the 2-D context is
			// applicable.
			if(context) {

				context.fillStyle = Renderer.getStyle(shade[0], shade[1], shade[2]);				
				context.fillRect(x, vh - y, 1, 1);
			}
			
			// Optionally invoke the callback function after rendering
			// each pixel. 
			if(this.callback)
				this.callback(this, vw, vh, x, y, canvas);
		}
	}
	
	return [r, g, b];
};