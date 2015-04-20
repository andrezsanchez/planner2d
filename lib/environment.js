import Mesh from './mesh'
import inside from 'point-in-triangle'

const { sin, cos, random, PI } = Math 

let black = [0.0, 0.0, 0.0, 1.0]

class TriangleEnvironment {
  constructor(gl, count) {
    this.vertices = []
    let range = .6
    let rndLength = () => 0.055+random()*0.04
    let rndAngle = () => PI/4+random()*PI/2

    for (let i = 0; i < count; i++) {
      let p1 = [random()*range+.2, random()*range+.2, 0, 1]

      let angle1 = random() * 2 * PI
      let l1 = rndLength()
      let p2 = [p1[0] + cos(angle1)*l1, p1[1] + sin(angle1)*l1, 0, 1]

      let angle2 = angle1 + rndAngle()
      let l2 = rndLength()
      let p3 = [p2[0] + cos(angle2)*l2, p2[1] + sin(angle2)*l2, 0, 1]

      this.vertices.push(...p1, ...p2, ...p3)
    }
    this.mesh = new Mesh(gl, this.vertices, black)
  }
  collide(point) {
    let count = this.vertices.length / 12
    for (let i = 0; i < count; i++) {
      let t = [
        this.vertices.slice(i*12, i*12 + 2),
        this.vertices.slice(i*12+4, i*12 + 6),
        this.vertices.slice(i*12+8, i*12 + 10)
      ]
      if (inside(point, t)) return true
    }
    return false
  }
}

export default TriangleEnvironment
