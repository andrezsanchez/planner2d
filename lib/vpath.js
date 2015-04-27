import Path from './path'
import VObject from './vobject'
import createVAO from 'gl-vao'
import createBuffer from 'gl-buffer'

class VPath extends Path {
  constructor(gl, testFn, nodes) {
    super(testFn, nodes)
    this.buffer = createBuffer(gl, vectorsFromVertices(nodes))
    this.vao = createVAO(gl, [
      {
        buffer: buffer,
        type: gl.FLOAT,
        size: 4,
      },
      color,
    ])
    this.vobject = new VObject(vao, gl.LINE_STRIP, nodes.length)
  }
  draw() {
    this.vobject.draw()
  }
}
function vectorsFromVertices(vertices) {
  let vectors = []
  nodes.forEach(n => vectors.push(n[0], n[1], 0, 1))
  return vectors
}
