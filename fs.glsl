precision highp float;

varying vec2 uv;

float scale = 25.0;

void main() {

  if (mod((uv.x+ 1.0)*scale+(uv.y+1.0)*scale, .5) > 0.25) {
    gl_FragColor = vec4(0,0,0,1);
  }
  else {
    gl_FragColor = vec4(1,1,1,1);
  }
}
