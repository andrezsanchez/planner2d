uniform vec2 u_resolution;
uniform mat4 u_camera;
uniform mat4 u_perspective;
/*uniform float tp;*/

attribute vec4 position;
attribute vec4 color;
varying vec4 v_color;

float ratio = u_resolution.y / u_resolution.x;

void main() {
  gl_Position = u_perspective * u_camera * position;
  v_color = color;
}
