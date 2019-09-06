

// =====================================================
// PLAN 3D, Support géométrique
// =====================================================

var Sphere3D = { fname:'sphere', loaded:-1, shader:null };

// =====================================================
Sphere3D.initAll = function()
{
    // Colors (array)
    colors = [	0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0];




    theta = 0;
    phi = 0;
    r     = 0.5;
    max   = 2*Math.PI;
    
    div = 200; 
    deltaphi = max/div;

    vertices = []
    colors   = []
    normal   = []
    N = []

    for (var j = 0; j < div/2; j++) {

        for (var k = 0; k < div; k++) {

            y1 = r * Math.cos(theta);
            z1 = r * Math.sin(theta) * Math.sin(phi);
            x1 = r * Math.sin(theta) * Math.cos(phi);

            y2 = r * Math.cos(theta);
            z2 = r * Math.sin(theta) * Math.sin(phi + deltaphi);
            x2 = r * Math.sin(theta) * Math.cos(phi + deltaphi);

            y3 = r * Math.cos(theta + deltaphi);
            z3 = r * Math.sin(theta + deltaphi) * Math.sin(phi);
            x3 = r * Math.sin(theta + deltaphi) * Math.cos(phi);

            y4 = r * Math.cos(theta + deltaphi);
            z4 = r * Math.sin(theta + deltaphi) * Math.sin(phi + deltaphi);
            x4 = r * Math.sin(theta + deltaphi) * Math.cos(phi + deltaphi);

            if(j!=0) {
                vertices.push(x1);
                vertices.push(y1);
                vertices.push(z1);

                vertices.push(x2);
                vertices.push(y2);
                vertices.push(z2);

                vertices.push(x3);
                vertices.push(y3);
                vertices.push(z3);

                N[0] =x1;
                N[1] =y1;
                N[2] =z1;

                vec3.normalize(N,N);

                normal.push(N[0]);
                normal.push(N[1]);
                normal.push(N[2]);

                N[0] =x2;
                N[1] =y2;
                N[2] =z2;

                vec3.normalize(N,N);

                normal.push(N[0]);
                normal.push(N[1]);
                normal.push(N[2]);

                N[0] =x3;
                N[1] =y3;
                N[2] =z3;

                vec3.normalize(N,N);

                normal.push(N[0]);
                normal.push(N[1]);
                normal.push(N[2]);

            }

            if(j < div/2-1) {
                vertices.push(x2);
                vertices.push(y2);
                vertices.push(z2);

                vertices.push(x3);
                vertices.push(y3);
                vertices.push(z3);

                vertices.push(x4);
                vertices.push(y4);
                vertices.push(z4);

                N[0] =x2;
                N[1] =y2;
                N[2] =z2;

                vec3.normalize(N,N);

                normal.push(N[0]);
                normal.push(N[1]);
                normal.push(N[2]);

                N[0] =x3;
                N[1] =y3;
                N[2] =z3;

                vec3.normalize(N,N);

                normal.push(N[0]);
                normal.push(N[1]);
                normal.push(N[2]);

                N[0] =x4;
                N[1] =y4;
                N[2] =z4;

                vec3.normalize(N,N);

                normal.push(N[0]);
                normal.push(N[1]);
                normal.push(N[2]);


            }
            phi += deltaphi;
        }
        theta += deltaphi;
    }





    this.vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    this.vBuffer.itemSize = 3;
    this.vBuffer.numItems = vertices.length/3;

//     this.tBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, this.tBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
//     this.tBuffer.itemSize = 2;
//     this.tBuffer.numItems = 4;

//     this.cBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, this.cBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
//     this.cBuffer.itemSize = 3;
//     this.cBuffer.numItems = 4;


    loadShaders(this);
}


// =====================================================
Sphere3D.setShadersParams = function()
{
    gl.useProgram(this.shader);

    this.shader.vAttrib = gl.getAttribLocation(this.shader, "aVertexPosition");
    gl.enableVertexAttribArray(this.shader.vAttrib);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
    gl.vertexAttribPointer(this.shader.vAttrib, this.vBuffer.itemSize, gl.FLOAT, false, 0, 0);

    // this.shader.tAttrib = gl.getAttribLocation(this.shader, "aTexCoords");
    // gl.enableVertexAttribArray(this.shader.tAttrib);
    // gl.bindBuffer(gl.ARRAY_BUFFER, this.tBuffer);
    // gl.vertexAttribPointer(this.shader.tAttrib,this.tBuffer.itemSize, gl.FLOAT, false, 0, 0);


    // this.shader.cAttrib = gl.getAttribLocation(this.shader, "aVertexColor");
    // gl.enableVertexAttribArray(this.shader.cAttrib);
    // gl.bindBuffer(gl.ARRAY_BUFFER, this.cBuffer);
    // gl.vertexAttribPointer(this.shader.cAttrib,this.cBuffer.itemSize, gl.FLOAT, false, 0, 0);


    this.shader.pMatrixUniform = gl.getUniformLocation(this.shader, "uPMatrix");
    this.shader.mvMatrixUniform = gl.getUniformLocation(this.shader, "uMVMatrix");
}


// =====================================================
Sphere3D.draw = function()
{
    if(this.shader && this.loaded==4) {		
        this.setShadersParams();
        console.log("1");
        setMatrixUniforms(this);
        gl.drawArrays(gl.TRIANGLES, 0, this.vBuffer.numItems);
        // gl.drawArrays(gl.TRIANGLE_FAN, 0, this.cBuffer.numItems);

        // gl.drawArrays(gl.LINE_LOOP, 0, this.vBuffer.numItems);
    } else if(this.loaded < 0) {
        console.log("2");
        this.loaded = 0;
        this.initAll();
    }
}






