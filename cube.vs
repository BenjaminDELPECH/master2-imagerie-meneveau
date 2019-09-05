attribute vec3 aVertexPosition;
attribute vec2 aTexCoords;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec2 texCoords;
varying vec4 vColor;

attribute vec3 aVertexColor;
void main(void) {
	/* texCoords = aTexCoords; */
	vColor = vec4(aVertexColor,1.0);
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}


/* attribute vec3 aVertexPosition; */
/* attribute vec2 aTexCoords; */

/* uniform mat4 uMVMatrix; */
/* uniform mat4 uPMatrix; */

/* varying vec2 texCoords; */

/* void main(void) { */
/* 	texCoords = aTexCoords; */
/* 	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0); */
/* } */





