precision mediump float;

varying vec4 vColor;

#define PI 3.14159

// ================================================
vec3 falseColor(float v)
{
	vec3 C0 = vec3(0.0,0.0,0.3);
	vec3 C1 = vec3(0.0,0.3,1.0);
	vec3 C2 = vec3(0.0,0.9,0.0);
	vec3 C3 = vec3(1.0,0.9,0.0);
	vec3 C4 = vec3(1.0,0.2,0.0);
	vec3 Ca, Cb;

	if(v < 0.0) return vec3(1.0,0.0,1.0);
	else if(v < (1.0/4.0)) { v *= 4.0; Ca = C0; Cb = C1; }
	else if(v < (2.0/4.0)) { v = (v-1.0/4.0)*4.0; Ca = C1; Cb = C2; }
	else if(v < (3.0/4.0)) { v = (v-2.0/4.0)*4.0; Ca = C2; Cb = C3; }
	else if(v < 1.0) { v = (v-3.0/4.0)*4.0; Ca = C3; Cb = C4; }
	else return vec3(1.0,0.8,0.8); // v > 1.0
	
	v = pow((sin(v*PI-PI/2.0)+1.0)/2.0,0.8);
	return vec3(v*Cb+(1.0-v)*Ca);
}


// ================================================
void main(void) {
	gl_FragColor = vColor;
}



