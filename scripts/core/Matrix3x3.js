/*
 * Represents a 3x3 matrix.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * Constructor for Matrix3x3.
 * 
 * [params]
 * v0: The 3-D vector containing the elements for the 1st column.
 * v1: The 3-D vector containing the elements for the 2nd column.
 * v2: The 3-D vector containing the elements for the 3rd column.
 * 
 */
function Matrix3x3(v0, v1, v2) {
	
	this.v00 = v0.s0;
	this.v10 = v0.s1;
	this.v20 = v0.s2;
	this.v01 = v1.s0;
	this.v11 = v1.s1;
	this.v21 = v1.s2;
	this.v02 = v2.s0;
	this.v12 = v2.s1;
	this.v22 = v2.s2;
}


/*
 * [summary]
 * Calculate the determinant of this matrix.
 * 
 * [return]
 * The determinant of this matrix.
 * 
 */
Matrix3x3.prototype.det = function() {
	
	return this.v00 * this.v11 * this.v22
		+ this.v01 * this.v12 * this.v20
		+ this.v02 * this.v10 * this.v21
		- this.v00 * this.v12 * this.v21
		- this.v01 * this.v10 * this.v22
		- this.v02 * this.v11 * this.v20;
};