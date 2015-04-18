uniform vec2 u_resolution;
uniform float tp;

attribute vec4 position;
attribute vec4 color;
varying vec4 v_color;

float ratio = u_resolution.y / u_resolution.x;

void main() {
  gl_Position = vec4(position.x * ratio, position.y, position.z, 1.0);
  v_color = vec4(color.xy, color.z + tp * 0.3, color.w);
}
