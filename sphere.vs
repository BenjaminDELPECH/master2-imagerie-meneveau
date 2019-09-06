attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;

varying vec3 vNormal;
varying vec3 vNormalize;
varying vec3 vPosition;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main(void) {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
	vNormal = aVertexNormal;
	vPosition = aVertexPosition;
	vNormalize = (aVertexNormal + 1.0)/2.0;
	
}
