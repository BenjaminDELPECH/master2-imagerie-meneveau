
// =====================================================
// PLAN 3D, Support géométrique
// =====================================================

var Plane3D = { fname:'plane', loaded:-1, shader:null };

// =====================================================
Plane3D.initAll = function()
{
	vertices = [ -0.9,  -0.9, -1.5,		0.9, -0.9, -1.5,
				 0.9,  0.9, -1.5,		-0.9,   0.9, -1.5 ];
	texcoords = [ 0.0,0.0,   0.0,1.0,   1.0,1.0,   1.0,0.0	];

	this.vBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	this.vBuffer.itemSize = 3;
	this.vBuffer.numItems = 4;

	this.tBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.tBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
	this.tBuffer.itemSize = 2;
	this.tBuffer.numItems = 4;



    // Colors (array)
    colors = [	1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,0.0, 0.0, 1.0

    ];
    this.cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    this.cBuffer.itemSize = 3;
    this.cBuffer.numItems = 4;

 



	loadShaders(this);
}


// =====================================================
Plane3D.setShadersParams = function()
{
	gl.useProgram(this.shader);

	this.shader.vAttrib = gl.getAttribLocation(this.shader, "aVertexPosition");
	gl.enableVertexAttribArray(this.shader.vAttrib);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
	gl.vertexAttribPointer(this.shader.vAttrib, this.vBuffer.itemSize, gl.FLOAT, false, 0, 0);

	this.shader.tAttrib = gl.getAttribLocation(this.shader, "aTexCoords");
	gl.enableVertexAttribArray(this.shader.tAttrib);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.tBuffer);
	gl.vertexAttribPointer(this.shader.tAttrib,this.tBuffer.itemSize, gl.FLOAT, false, 0, 0);


    this.shader.cAttrib = gl.getAttribLocation(this.shader, "aVertexColor");
    gl.enableVertexAttribArray(this.shader.cAttrib);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.cBuffer);
    gl.vertexAttribPointer(this.shader.cAttrib,this.cBuffer.itemSize, gl.FLOAT, false, 0, 0);


	this.shader.pMatrixUniform = gl.getUniformLocation(this.shader, "uPMatrix");
	this.shader.mvMatrixUniform = gl.getUniformLocation(this.shader, "uMVMatrix");
}


// =====================================================
Plane3D.draw = function()
{
	if(this.shader && this.loaded==4) {		
		this.setShadersParams();
		setMatrixUniforms(this);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vBuffer.numItems);
                gl.drawArrays(gl.TRIANGLE_FAN, 0, this.cBuffer.numItems);

		gl.drawArrays(gl.LINE_LOOP, 0, this.vBuffer.numItems);
	} else if(this.loaded < 0) {
		this.loaded = 0;
		this.initAll();
	}
}




