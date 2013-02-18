var noise = noise || {};

noise.rgb = function(r, g, b) {
	
	var scale = 128;
	
	var ri = Math.floor(r * scale);
	var gi = Math.floor(g * scale);
	var bi = Math.floor(b * scale);
	
	return "rgb(" + ri + "," + gi + "," + bi + ")";
};

noise.getPerlinGen = function(t) {
	
	var p = (function() {
		
		var nums = new Array(256);
		for(var i = 0; i < 256; ++i) nums[i] = i;
		
		for(var i = 0; i < 1024; ++i) {
			var i1 = Math.floor(Math.random() * 256);
			var i2 = Math.floor(Math.random() * 256);
			var t = nums[i1];
			nums[i1] = nums[i2];
			nums[i2] = t;
		}
		
		return nums;
	})();
	
	var g = (function() {
		
		var grads = new Array(256);
		
		for(var i = 0; i < 256;) {
			
			var x = Math.random() * 2 - 1;
			var y = Math.random() * 2 - 1;
			var z = Math.random() * 2 - 1;
			
			if(x * x + y * y + z * z < 1) {
				grads[i] = [x, y, z];
				++i;
			}
		}
		
		return grads;
		
	})();
	
	var getGrad = function(i, j, k) {
		
		var idx = 0;
		idx = p[(k + idx) % p.length];		
		idx = p[(j + idx) % p.length];
		idx = p[(i + idx) % p.length];
		return g[idx];
	};
	
	var weight = function(t) {
		
		var abst = Math.abs(t);
		
		if(abst < 1) return 2 * abst * abst * abst - 3 * abst * abst + 1;
		else return 0;
	};
	
	var noise = function(x, y, z) {
				
		var x0 = Math.floor(x);
		var y0 = Math.floor(y);
		var z0 = Math.floor(z);
		
		var r = 0;
		for(var i = x0; i <= x0 + 1; ++i) {
			for(var j = y0; j <= y0 + 1; ++j) {
				for(var k = z0; k <= z0 + 1; ++k) {
				
					var u = Math.abs(x - i);
					var v = Math.abs(y - j);
					var w = Math.abs(z - k);
					var dropoff = weight(u) * weight(v) * weight(w);
					
					var grad = getGrad(i, j, k);
					var dot = grad[0] * u + grad[1] * v + grad[2] * w;
					
					r += dot * dropoff;
				}
			}
		}
		
		return r;
	};
	
	var turb = function(x, y, z) {
		
		var v = 0;
		var f = 1;
		for(var i = 0; i < t; ++i) {
			v += noise(f * x, f * y, f * z) / f;
			f *= 2;
		}
		
		return v;
	};

	return turb;
};