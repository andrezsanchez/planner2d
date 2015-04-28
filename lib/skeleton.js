const { mat4 } = require('gl-matrix')
const { sin, cos, min, max, floor, random, pow } = Math 
import linesFromPath from './linesFromPath'

const jointLength = .3

const toUnitSpace = a => ((a + Math.PI)/(Math.PI*2))


class Skeleton {
  constructor(gl, angles, color) {
    this.gl = gl
    this.position = mat4.create()
    this.jointAngles = angles
    this.nodes = []
    this.color = color
    this.generateVObject()
  }
  nodesFromJointAngles(angles) {
    let nodes = [
      [.5,.5,0,1]
    ]
    let curAng = 0
    angles.forEach((a, i) => {
      curAng += a
      nodes.push([nodes[i][0] + cos(curAng) * jointLength, nodes[i][1] + sin(curAng) * jointLength, 0, 1])
    })
    return nodes
  }
  generateVObject() {
    this.nodes = this.nodesFromJointAngles(this.jointAngles)
    this.vobject = linesFromPath(this.gl, this.nodes, this.color)
  }
  draw() {
    this.vobject.draw()
  }
}

export default Skeleton

function linkTransform(alphaPrev, aPrev, d, theta) {
  var s = Math.sin;
  var c = Math.cos;

  var sinT = s(theta);
  var cosT = c(theta);

  var sinAl = s(alphaPrev);
  var cosAl = c(alphaPrev);

  return ndarray([
    cosT,       -sinT,      0,      aPrev,
    sinT*cosAl, cosT*cosAl, -sinAl, -sinAl*d,
    sinT*sinAl, cosT*sinAl, cosAl, -sinAl*d,
    0,          0,          0,     1
  ], [4,4]);
}
