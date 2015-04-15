attribute vec2 a_position;
attribute vec4 a_color;
varying vec2 uv;

void main() {
  gl_Position = vec4(a_position*.9, 0, 1);
  uv = a_position.xy;
}
