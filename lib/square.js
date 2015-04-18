import VObject from './vobject'
import createVAO from 'gl-vao'
import createBuffer from 'gl-buffer'

class Square extends VObject {
  constructor(gl, width, height, color) {
    console.log(gl, width, height, color)
    let wd2 = width / 2
    let hd2 = height / 2

    let vao = createVAO(gl, [
      {
        buffer: createBuffer(gl, [
          -wd2, -hd2, 0.0, 1,
          wd2, -hd2, 0.0, 1,
          -wd2, hd2, 0.0, 1,
          -wd2, hd2, 0.0, 1,
          wd2, -hd2, 0.0, 1,
          wd2, hd2, 0.0, 1,
        ]),
        type: gl.FLOAT,
        size: 4,
      },
      color,
    ])
    super(vao, gl.TRIANGLES, 6)
  }
  draw() {
    super.draw()
  }
}

export default Square
