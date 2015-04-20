import VObject from './vobject'
import createVAO from 'gl-vao'
import createBuffer from 'gl-buffer'

class Mesh extends VObject {
  constructor(gl, vertices, color) {
    let vao = createVAO(gl, [
      {
        buffer: createBuffer(gl, vertices),
        type: gl.FLOAT,
        size: 4,
      },
      color,
    ])
    super(vao, gl.TRIANGLES, vertices.length/4)
  }
  draw() {
    super.draw()
  }
}

export default Mesh
