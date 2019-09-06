// =====================================================
// Cube en 3D
// =====================================================

var Cube3D = { fname:'cube', loaded:-1, shader:null };

// =====================================================

Cube3D.sendVertices = function (verticesObj, verticesNumItems, colorsObj, colorsNumItems) {

    this.vBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesObj), gl.STATIC_DRAW);
	this.vBuffer.itemSize = 3;
	this.vBuffer.numItems = verticesNumItems;

	// Colors (array)

	this.cBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.cBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsObj), gl.STATIC_DRAW);
	this.cBuffer.itemSize = 3;
	this.cBuffer.numItems = colorsNumItems;


    var texcoordsCube = [
        0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,
        0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,
        0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,
        0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,
        0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,
        0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0
    ];
    this.tBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.tBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoordsCube), gl.STATIC_DRAW);
    this.tBuffer.itemSize = 2;
    this.tBuffer.numItems = 24;

	loadShaders(this);
}


// =====================================================
Cube3D.setShadersParams = function()
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
Cube3D.setMatrixUniforms = function() {
    mat4.identity(mvMatrix);
    mat4.translate(mvMatrix, distCENTER);
    mat4.translate(mvMatrix, translateCustom);
    mat4.multiply(mvMatrix, rotMatrix);
    gl.uniformMatrix4fv(this.shader.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(this.shader.mvMatrixUniform, false, mvMatrix);
}


// =====================================================
Cube3D.draw = function()
{
    if(this.shader && this.loaded==4) {
        this.setShadersParams();
        setMatrixUniforms(this);
        this.setMatrixUniforms(this);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vBuffer.numItems);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.cBuffer.numItems);
        gl.drawArrays(gl.LINE_LOOP, 0, this.vBuffer.numItems);
    } else if(this.loaded < 0) {

        this.loaded = 0;
        this.sendVertices(verticesCube, verticesCubeNumItems, colorsCube, colorsNumItems);
        ui.reloadCube = false;
    }
}
