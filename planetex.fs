
precision mediump float;

varying vec2 texCoords;
uniform sampler2D uSampler;

void main(void)
{
	gl_FragColor = texture2D(uSampler, vec2(texCoords.s, texCoords.t));
//	gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}



