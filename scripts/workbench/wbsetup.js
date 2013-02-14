window.onload = function() {
	
	// Retrieve workbench control elements from the DOM.
	
	var sltDemos = document.getElementById("sltDemos");
	var spDemoDesc = document.getElementById("spDemoDesc");
	var txtWidth = document.getElementById("txtWidth");
	var txtHeight = document.getElementById("txtHeight");
	var txtNSubs = document.getElementById("txtNSubs");
	var txtNLSubs = document.getElementById("txtNLSubs");
	var txtNRefl = document.getElementById("txtNRefl");
	var txtNRefr = document.getElementById("txtNRefr");
	var cbCanvas = document.getElementById("cbCanvas");
	var aView = document.getElementById("aView");
	var aSave = document.getElementById("aSave");
	var sltFormat = document.getElementById("sltFormat");
	var aUpload = document.getElementById("aUpload");
	var taScene = document.getElementById("taScene");
	var aRender = document.getElementById("aRender");
	var spProg = document.getElementById("spProg");
	var cnvRender = document.getElementById("cnvRender");
	var divRender = document.getElementById("divRender");	
	
	// Set up CodeMirror editor.
	
	var cmScene = CodeMirror.fromTextArea(
		taScene, {
			lineNumbers: true
		}
	);
	cmScene.setSize(undefined, 171);
	
	// If there is an image rendered.
	var rendered = false;
	
	// Set up the canvas.
	
	var initCanvas = function() {
		
		var vw = parseInt(txtVw.value);
		var vh = parseInt(txtVh.value);
		
		cnvRender.width = vw;
		cnvRender.height = vh;
		
		var context = cnvRender.getContext("2d");
		
		context.clearRect(0, 0, cnvRender.width, cnvRender.height);
		
		context.strokeStyle = "#eee";
		
		for(var i = 0; i < cnvRender.height / 10; ++i) {
			
			context.beginPath();
			context.moveTo(0, 10 * i);
			context.lineTo(cnvRender.width, 10 * i);
			context.closePath();
			context.stroke();
		}
		for(var i = 0; i < cnvRender.width / 10; ++i) {
			
			context.beginPath();
			context.moveTo(10 * i, 0);
			context.lineTo(10 * i, cnvRender.height);
			context.closePath();
			context.stroke();
		}
		
		rendered = false;
	};
	
	initCanvas();
	
	// Load the settings and scene for a selected demo.
	
	var loadDemo = function() {
		
		var demo = demos[sltDemos.value];
		
		// Load rendering scene.
		cmScene.setValue(demo.src);
		
		// Load rendering parameters.
		
		if(demo.vw != undefined) txtVw.value = demo.vw;
		if(demo.vh != undefined) txtVh.value = demo.vh;
		if(demo.nsubs != undefined) txtNSubs.value = demo.nsubs;
		if(demo.nlsubs != undefined) txtNLSubs.value = demo.nlsubs;
		if(demo.nrefl != undefined) txtNRefl.value = demo.nrefl;
		if(demo.nrefr != undefined) txtNRefr.value = demo.nrefr;
		if(demo.desc != undefined) spDemoDesc.innerText = demo.desc;
		
		initCanvas();
	};
	sltDemos.onchange = loadDemo;
	loadDemo();
	
	// Initialize the renderer.
	
	var renderParams = {
		
		percent: 1,
		callback: function(render, vw, vh, x, y, canvas) {
			
			var p = (vw * y + x) / (vw * vh);
			if(p * 100 >= renderParams.percent) {
				++renderParams.percent;
				document.title =
					renderParams.percent < 100 ?
					"Rendering... " + renderParams.percent + "%" :
					"Dminor Workbench";
			}
		}
	};
	var renderer = new Renderer(renderParams);

	// Fill in rendering parameters with the values in the panels
	// and start rendering.

	aRender.onclick = function() {
		
		// Parse the values of the controls in the panels.
		
		var nsubs = parseInt(txtNSubs.value);
		var nlsubs = parseInt(txtNLSubs.value);
		var nrefl = parseInt(txtNRefl.value);
		var nrefr = parseInt(txtNRefr.value);
		var vw = parseInt(txtVw.value);
		var vh = parseInt(txtVh.value);
		var scene = eval("(" + cmScene.getValue() + ")");
		
		// Set up all the parameters of the renderer.
		
		renderer.nsubs = nsubs;
		renderer.nlsubs = nlsubs;
		renderer.nrefl = nrefl;
		renderer.nrefr = nrefr;
		
		// Reset the progress indicator.
		renderParams.percent = 1;
		spProg.innerText =
			"Rendering... Please see the page title for rendering progress.";

		initCanvas();

		// Start rendering.
		setTimeout(function() {
			
			// Record the time before start rendering.
			var before = Date.now();
			
			// Render!
			renderer.render(scene, vw, vh, cnvRender);
			
			// Compute the time elapse during rendering.
			var after = Date.now();
			var s = (after - before) / 1000;
	
			// Display the rendering time.
			spProg.innerText =
				"Rendering done. " + s + (s > 1 ? " seconds " : " second ") +
				"in total.";
		}, 1);
		
		rendered = true;
	};
	
	aView.onclick = function() {
		
		if(!rendered) {
			alert(
				"Please render the image first by clicking the 'Render' button below." +
				"\n\n-Dale"
			);
			return;
		}
		
		var url = cnvRender.toDataURL("image/png");
		var width = parseInt(txtVw.value);
		var height = parseInt(txtVh.value);
		var w = window.open(url, "_blank",
			"height=" + height + ", width=" + width + ", " +
			"location=no, menubar=no, toolbar=no");
	};
	
	aSave.onclick = function() {
		
		alert(
			"Sorry pal, but I haven't implemented this part yet." +
			"\n\n-Dale"
		);
	};
	
	aUpload.onclick = function() {
		
		alert(
			"Sorry pal, but I haven't implemented this part yet." +
			"\n\n-Dale"
		);
	};
};