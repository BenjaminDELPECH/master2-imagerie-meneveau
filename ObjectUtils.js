class ObjectUtils {
    static setShadersParams()
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
}