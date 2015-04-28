uniform mat4 u_camera;
uniform mat4 u_perspective;
uniform mat4 u_position;

attribute vec4 position;
attribute vec4 color;
varying vec4 v_color;

void main() {
  gl_Position = u_perspective * u_camera * u_position * position;
  v_color = color;
}
