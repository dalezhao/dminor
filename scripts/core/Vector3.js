/*
 * Represents a 3-D vector.
 * 
 * by Dale Zhao
 * dale.sleepless.nyc(at)gmail.com
 * 
 */

/*
 * [summary]
 * Constructor for Vector3.
 * 
 */
function Vector3(s0, s1, s2) {

	this.s0 = s0 ? s0 : 0.0;
	this.s1 = s1 ? s1 : 0.0;
	this.s2 = s2 ? s2 : 0.0;
}

/*
 * [summary]
 * The zero 3-D vector.
 * 
 */
Vector3.zero = new Vector3();

/*
 * [summary]
 * Convert an array into a 3-D vector.
 * 
 * [params]
 * v: An array containing 3 numbers representing the 3 components of a 3-D
 *   vector.
 * 
 * [return]
 * A 3-D vector containing the elements of the array as components.
 * 
 */
Vector3.fromArray = function(v) {
	
	return new Vector3(v[0], v[1], v[2]);
};

/*
 * [summary]
 * Returns the string representation of a Vector3 object.
 * 
 * [return]
 * The string representation of a Vector3 object.
 * 
 */
Vector3.prototype.toString = function() {
	
	return "(" + this.s0 + ", " + this.s1 + ", " + this.s2 + ")";
};

/*
 * [summary]
 * Return the sum of this vector and a given vector.
 * 
 * [params]
 * v: The other vector involved in the adding.
 * 
 * [return]
 * The sum of this vector and the given vector.
 * 
 */
Vector3.prototype.add = function(v) {
	
	return new Vector3(
		this.s0 + v.s0,
		this.s1 + v.s1,
		this.s2 + v.s2
	);
};

/*
 * [summary]
 * Return the difference of this vector and a given vector (i.e. subtracting
 * 	the given vector from this one.)
 * 
 * [params]
 * v: The other vector involved in the subtraction.
 * 
 * [return]
 * The difference of this vector and the given vector.
 * 
 */
Vector3.prototype.sub = function(v) {
	
	return new Vector3(
		this.s0 - v.s0,
		this.s1 - v.s1,
		this.s2 - v.s2
	);
};

/*
 * [summary]
 * Return the product of this vector and a given scalar.
 * 
 * [params]
 * s: The scalar involved in the multiplication.
 * 
 * [return]
 * The product of this vector and the given scalar.
 * 
 */
Vector3.prototype.mult = function(s) {
	
	return new Vector3(
		this.s0 * s,
		this.s1 * s,
		this.s2 * s
	);
};

/*
 * [summary]
 * Return a quotient of this vector and a given scalar,
 * whose components are those of the original ones divided by
 * the scalar respectively.
 * 
 * [params]
 * s: The scalar involved in the division.
 * 
 * [return]
 * The quotient of this vector and the given scalar.
 * 
 */
Vector3.prototype.div = function(s) {
	
	return new Vector3(
		this.s0 / s,
		this.s1 / s,
		this.s2 / s
	);
};

/*
 * [summary]
 * Return the negation of this vector.
 * 
 * [return]
 * The negation of this vector.
 * 
 */
Vector3.prototype.neg = function() {
	
	return new Vector3(
		-this.s0, -this.s1, -this.s2
	);
}

/*
 * [summary]
 * Return the dot product of this and a given vector.
 * 
 * [params]
 * v: The other vector involved in the dot product.
 * 
 * 
 * [return]
 * The dot product of this and the given vector.
 * 
 */
Vector3.prototype.dot = function(v) {
	
	return this.s0 * v.s0 + this.s1 * v.s1 + this.s2 * v.s2;
};

/*
 * [summary]
 * Return the cross product of this and the given vector.
 * 
 * [params]
 * v: The other vector involved in the cross product.
 * 
 * [return]
 * The cross product of this and the given vector.
 * 
 */
Vector3.prototype.cross = function(v) {

	return new Vector3(
		this.s1 * v.s2 - this.s2 * v.s1,
		this.s2 * v.s0 - this.s0 * v.s2,
		this.s0 * v.s1 - this.s1 * v.s0
	);
};

/*
 * [summary]
 * Return the component-wide product of this and the given vector.
 * 
 * [params]
 * v: The other vector involved in the cross product.
 * 
 * [return]
 * The cross product of this and the given vector.
 * 
 */
Vector3.prototype.comp = function(v) {
	
	return new Vector3(
		this.s0 * v.s0,
		this.s1 * v.s1,
		this.s2 * v.s2
	);
};

/*
 * [summary]
 * Return the norm (magnitude) of this vector.
 * 
 * [return]
 * The norm (magnitude) of this vector.
 * 
 */
Vector3.prototype.norm = function() {
	
	return Math.sqrt(
		this.s0 * this.s0 +
		this.s1 * this.s1 +
		this.s2 * this.s2
	);
};

/*
 * [summary]
 * Return the normalized vector of this vector.
 * 
 * [return]
 * The normalized vector of this vector.
 * 
 */
Vector3.prototype.normalized = function() {
	
	var magnitude = this.norm();
	
	if(magnitude == 0.0) return this;
	else return this.div(this.norm());
};

/*
 * [summary]
 * Test is this vector is equal to another.
 * 
 * [params]
 * v: The other vector to test the equality with.
 * 
 * [return]
 * True if the three corresponding components of the two vectors are all
 * identical, false otherwise.
 * 
 */
Vector3.prototype.eq = function(v) {
	
	return this.s0 == v.s0 && this.s1 == v.s1 && this.s2 == v.s2;
};

/*
 * [summary]
 * Return an array containing the components of this vector
 * in sequence.
 * 
 * [return]
 * The array containing the components of this vector in sequence.
 * 
 */
Vector3.prototype.array = function() {

	return [this.s0, this.s1, this.s2];
};