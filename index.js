const createShader = require('gl-shader')
const mouseEvent = require('mouse-event')
const { mat4, vec3 } = require('gl-matrix')
let shell = require('gl-now')({preventDefaults: false})

const fs = require('fs')
let vs_src = fs.readFileSync('./vs.glsl').toString('utf-8')
let fs_src = fs.readFileSync('./fs.glsl').toString('utf-8')

import Lines from './lib/lines'
import Scene from './lib/scene'
import Skeleton from './lib/skeleton'
import TriangleEnvironment from './lib/environment'
import CircleEnvironment from './lib/circleEnvironment'
import Planner2D from './lib/planner'
import collide from './lib/skeletonEnvironmentCollide'
import thetaLink from './lib/dh/thetaLink'

let shader, resolution

let xAxis = Math.PI/2
let zAxis = 0
let camera = mat4.create()
let cameraDist = mat4.create()

let orthographic = false
let perspective = mat4.create()
const ident = mat4.create()

let environment, planner
let cSpaceScene
let cartesianScene

let mmb = false

shell.on('gl-init', () => {
  setResolution()
  shader = createShader(shell.gl, vs_src, fs_src)

  // position the camera to look down at the X-Y plane
  mat4.lookAt(
    cameraDist,
    vec3.fromValues(0, -1.8, 0),
    vec3.fromValues(0, 0, 0),
    vec3.fromValues(0, -1.8, 1)
  )
  calculateCamera()
  cSpaceScene = new Scene(camera, perspective, shader)
  cartesianScene = new Scene(camera, perspective, shader)


  environment = new CircleEnvironment(shell.gl, [
    [.75, .84, .06],
    [.85, .65, .055],
  ])
  environment.position = mat4.translate(mat4.create(), ident, vec3.fromValues(-.5, -.5, 0))
  cartesianScene.push(environment)

  let startAngle = [0, .1]
  let endAngle = [1.1, -2]

  let joints = [
    thetaLink(0, 1, 0),
    thetaLink(0, 1, 0),
  ]

  let skeleton = new Skeleton(shell.gl, joints, [.9,.2,.2,1])
  let goal = new Skeleton(shell.gl, joints, [.2,.8,.8,1])
  cartesianScene.push(skeleton)
  cartesianScene.push(goal)
  skeleton.position = mat4.translate(mat4.create(), ident, vec3.fromValues(-.5, -.5, 0))
  goal.position = mat4.translate(mat4.create(), ident, vec3.fromValues(-.5, -.5, 0))

  let toUnitSpace = a => ((a + Math.PI)/(Math.PI*2))
  planner = new Planner2D(
    shell.gl,
    collide(environment, skeleton),
    startAngle.map(toUnitSpace),
    endAngle.map(toUnitSpace),
    .002
  )
  planner.position = mat4.translate(mat4.create(), ident, vec3.fromValues(-.5, -.5, 0))
  cSpaceScene.push(planner)

  let event = (state) => {
    return (e) => {
      let b = mouseEvent.buttons(e)
      if (b & 4) {
        mmb = state
      }
    }
  }
  shell.canvas.addEventListener('mouseup', event(false))
  shell.canvas.addEventListener('mousedown', event(true))
})

let n = 0
let running = false
let scene = false

let animation = false
let aWhere
let aWhichNode
let ax, ay
shell.on('tick', () => {
  if (shell.press('A')) {
    if (animation) {
      animation = false
    }
    else {
      animation = true
      aWhere = 0
      aWhichNode = 0
    }
  }
  if (animation) {
  }
  if (shell.press('space')) running = !running
  if (shell.press('1')) scene = !scene 

  if (shell.press('P')) {
    orthographic = !orthographic
    setResolution()
  }
  if (shell.press('S')) {
    running = false
    planner.iterate(1)
  }
  if (shell.press('.')) {
    console.log(planner.pathSet.paths)
  }
  let x = (shell.mouseX - shell.prevMouseX) * .02
  let y = (shell.mouseY - shell.prevMouseY) * .02
  if (mmb) {
    if (x || y) {
      zAxis += x
      xAxis = Math.min(Math.max(xAxis + y, -Math.PI/2), Math.PI/2)
      calculateCamera()
    }
  }
})
shell.on('gl-render', t => {
  if (running) {
    n += t
    if (n > .25) {
      n = n % .3
      planner.iterate(1)
    }
  }
  if (scene) {
    cSpaceScene.render()
  }
  else {
    cartesianScene.render()
  }
})

shell.on('gl-resize', setResolution)

function calculateCamera() {
  mat4.copy(camera, cameraDist)
  mat4.rotateX(camera, camera, xAxis)
  mat4.rotateZ(camera, camera, zAxis)
}

/**
 * Set up the projection matrix, depending on whether perspective or orthographic is toggled
 * This function must be called on initialization, and whenever the screen size
 * is changed.
 */
function setResolution() {
  let ratio = shell.width/shell.height
  let width = ratio * 1.7
  let height = 1.7

  if (orthographic) {
    mat4.ortho(perspective, -width/2, width/2,-height/2,height/2,0,10)
  }
  else {
    mat4.perspective(perspective, Math.PI / 4, ratio, .1, 10)
  }
}
