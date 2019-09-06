class Cube3D {
    constructor(){
        this.fname = 'cube';
        this.loaded = -1;
        this.shader = null;
    }

    sendVertices(verticesObj, verticesNumItems, colorsObj, colorsNumItems) {

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



}