/*
 * Represents a camera in the 3-D scene.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * The constructor for the camera.
 * 
 * [params]
 * eye: The view position of the camera, which is a Vector3 object.
 * dir: The direction of the camera, which is a Vector3 object.
 * up: The up direction of the camera, which is a Vector3 object.
 * d: The focal length, i.e. the distance between the view plane and the view
 *     position, of the camera.
 * width: The width of the view plane.
 * height: The height of the view plane.
 * 
 */
function Camera(eye, dir, up, d, width, height) {
	
	this.eye = eye;
	this.d = d;
	
	// Construct an orthonormal coordinate frame as the camera frame,
	// using the view direction and up direction vectors.
	this.w = dir.neg().normalized();
	this.u = up.cross(this.w).normalized();
	this.v = this.w.cross(this.u).normalized();
	
	this.width = width;
	this.height = height;	
}

/*
 * [summary]
 * Get a ray emitting from the view point of the camera and going through a
 * point on the view plane.
 * 
 * [params]
 * u: The u coordinate of the point on the view plane that the ray goes through.
 * v: The v coordinate of the point on the view plane that the ray goes through. 
 * 
 * [return]
 * The ray going through the view point and the specified point on the view
 * plane.
 * 
 */
Camera.prototype.getRay = function(u, v) {
	
	return new Ray(
		this.eye,
		this.w.mult(-this.d).add(this.u.mult(u)).add(this.v.mult(v))
	);
}
