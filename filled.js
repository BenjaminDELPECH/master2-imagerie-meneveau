

// =====================================================
// PLAN 3D, Support géométrique
// =====================================================

var Filled = { fname:'filled', loaded:-1, shader:null };

// =====================================================
Filled.initAll = function()
{
	vertices = [ -1.0,-1.0,   1.0,-1.0,   1.0,1.0,   -1.0,1.0 ];

	this.vBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	this.vBuffer.itemSize = 2;
	this.vBuffer.numItems = vertices.length/2;

	loadShaders(this);
}


// =====================================================
Filled.setShadersParams = function()
{
	gl.useProgram(this.shader);
	this.shader.vAttrib = gl.getAttribLocation(this.shader, "aVertexPosition");
	gl.enableVertexAttribArray(this.shader.vAttrib);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
	gl.vertexAttribPointer(this.shader.vAttrib, this.vBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.uniform1i(gl.getUniformLocation(this.shader, "square"), ui.dispSquare);

}


// =====================================================
Filled.draw = function()
{
	if(this.shader && this.loaded==4 && gl.framebuffer) {	
		this.setShadersParams();
		gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vBuffer.numItems);
	} else if(this.loaded < 0) {
		this.loaded = 0;
		this.initAll();
	}
}

