import VObject from './vobject'
import createVAO from 'gl-vao'
import createBuffer from 'gl-buffer'
const { sin, cos, random, PI } = Math 

class CircleEnvironment {
  constructor(gl, circles) {
    this.gl = gl
    this.circles = circles
    this.vobjects = circles.map(c => {
      return new Circle(gl, c[0], c[1], c[2], 20, [0,0,0,1])
    })
  }
  draw() {
    this.vobjects.forEach(o => o.draw())
  }
}

export default CircleEnvironment

class Circle extends VObject {
  constructor(gl, x, y, size, slices, color) {
    this.vertices = [x, y, 0, 1]
    for (let s = 0; s <= slices; s++) {
      this.vertices.push(x + cos(2*PI*s/slices)*size, y + sin(2*PI*s/slices)*size, 0, 1)
    }
    let vao = createVAO(gl, [
      {
        buffer: createBuffer(gl, this.vertices),
        type: gl.FLOAT,
        size: 4,
      },
      color,
    ])
    super(vao, gl.TRIANGLE_FAN, this.vertices.length/4)
  }
  draw() {
    super.draw()
  }
}
