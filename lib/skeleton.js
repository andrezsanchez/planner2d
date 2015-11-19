import linesFromPath from './linesFromPath'
import Lines from './lines'
import getNodes from './dh/nodesFromJointAngles'

const { mat4 } = require('gl-matrix')

const toUnitSpace = a => ((a + PI)/(PI*2))

export default class Skeleton {
  /**
   * Create a skeleton
   *
   * @param {glContext} gl The webgl context
   * @param {Array} joints An array of DHJoint objects
   * @param {Array[4]} color
   */
  constructor(gl, joints, color) {
    this.gl = gl
    this.position = mat4.create()
    this.joints = joints
    this.jointParams = joints.map(()=>0)
    this.nodes = []
    this.color = color
    this.generateVObject()
  }
  generateVObject() {
    this.nodes = getNodes(this.joints, this.jointParams)
    this.vobject = linesFromPath(this.gl, this.nodes, this.color)
    //this.vobject = new Lines(this.gl, this.nodes.data, this.color)
  }
  draw() {
    this.vobject.draw()
  }
}
