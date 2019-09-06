precision mediump float;

varying vec3 vNormal;
varying vec3 vNormalize;
varying vec3 vPosition;
vec3 li, kd, source1, source2, vi1, vi2;
float costeta1;
float costeta2;
vec4 Lambert1, Lambert2;

void main(void) {

	li = vec3(3.0,3.0,3.0);
	kd = vNormalize;
	source1 = vec3(10.0,0.0,0.0);
	source2 = vec3(-10.0,0.0,0.0);
	vi1 = source1 - vPosition;
	vi2 = source2 - vPosition;
	normalize(vi1);
	normalize(vi2);
	costeta1 = dot(vi1,vNormal);
	costeta2 = dot(vi2,vNormal);
	
	Lambert1 = vec4((li * kd/3.14159* costeta1),1.0);
	Lambert2 = vec4((li * kd/3.14159* costeta2),1.0);
	
	gl_FragColor = vec4((vNormal+1.0)/2.0,1.0);
}
