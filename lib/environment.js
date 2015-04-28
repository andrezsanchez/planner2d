import Mesh from './mesh'
import inside from 'point-in-triangle'

const { sin, cos, random, PI } = Math 

let black = [0.0, 0.0, 0.0, 1.0]

class TriangleEnvironment {
  constructor(gl, count) {
    this.vertices = []
    let range = .6
    let rndLength = () => 0.055+random()*0.04
    let rndAngle = () => PI/3+random()*PI/2

    for (let i = 0; i < count; i++) {
      let p1 = [random()*range+.2, random()*range+.2, 0, 1]

      let angle1 = random() * 2 * PI
      let l1 = rndLength()
      let p2 = [p1[0] + cos(angle1)*l1, p1[1] + sin(angle1)*l1, 0, 1]

      let angle2 = angle1 + rndAngle()
      let l2 = rndLength()
      let p3 = [p2[0] + cos(angle2)*l2, p2[1] + sin(angle2)*l2, 0, 1]

      this.vertices.push(...p1, ...p2, ...p3)

      //let angle3 = (angle1 + angle2) / 2
      //let l3 = rndLength()*1.4
      //let p4 = [p1[0] + cos(angle3) * l3, p1[1] + sin(angle3) * l3, 0, 1]

      //this.vertices.push(...p2, ...p3, ...p4)
    }
    this.mesh = new Mesh(gl, this.vertices, black)
  }

  /**
   * Checks if a point collides with any feature of the environment. This function may need to be
   * opimized in the future, particularly the `inside` function, which unnecessarily requires three
   * sub-arrays which the GC will have to clean up.
   *
   * @argument {Array[2]} point
   * @return {boolean}
   */
  collide(point) {
    let count = this.vertices.length / 12
    var i
    var t
    for (i = 0; i < count; i++) {
      t = [
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
