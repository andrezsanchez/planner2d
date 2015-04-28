const createShader = require('gl-shader')
const mouseEvent = require('mouse-event')
const { mat4, vec3, vec4 } = require('gl-matrix')
let shell = require('gl-now')({preventDefaults: false})

const fs = require('fs')
let vs_src = fs.readFileSync('./vs.glsl').toString('utf-8')
let fs_src = fs.readFileSync('./fs.glsl').toString('utf-8')

import Lines from './lib/lines'
import TriangleEnvironment from './lib/environment'
import Planner2D from './lib/planner'

let shader, resolution

let xAxis = Math.PI/2
let zAxis = 0

let camera = mat4.create()
let cameraDist = mat4.create()
let rotz = mat4.create()
rotz = mat4.rotateZ(rotz, rotz, Math.PI * .005)
let mouse, mousex, mousey

let orthographic = false
let perspective = mat4.create()
const ident = mat4.create()

let environment, planner
let scene = []

let mmb = false

shell.on('gl-init', () => {
  window.gl = shell.gl
  setResolution()
  shader = createShader(shell.gl, vs_src, fs_src)

  // position the camera to look down at the X-Y plane
  mat4.lookAt(
    cameraDist,
    vec3.fromValues(0, -1, 0),
    vec3.fromValues(0, 0, 0),
    vec3.fromValues(0, -1, 1)
  )
  calculateCamera()

  shader.attributes.position.location = 0
  shader.attributes.color.location = 1

  environment = new TriangleEnvironment(shell.gl, 50)
  environment.position = mat4.translate(mat4.create(), ident, vec3.fromValues(-.5, -.5, 0))
  scene.push(environment)

  planner = new Planner2D(gl, environment.collide.bind(environment),
                          [0.08, 0.08], [.75, .75], .002)
  planner.position = mat4.translate(mat4.create(), ident, vec3.fromValues(-.5, -.5, 0))
  scene.push(planner)
  scene.push(new Lines(shell.gl, [0,0,0,1,.02,.02, 0, 1], [0,0,1,1]))

  let event = (state) => {
    return e => {
      let b = mouseEvent.buttons(e)
      if (b & 4) {
        mmb = state
      }
    }
  }
  shell.canvas.addEventListener('mouseup', event(false))
  shell.canvas.addEventListener('mousedown', event(true))

  //planner.iterate()
  setCursor(0,0)
})

let n = 0
let running = false
shell.on('tick', () => {
  if (shell.press('space')) {
    running = !running
  }
  if (shell.press('P')) {
    orthographic = !orthographic
    setResolution()
  }
  if (shell.press('S')) {
    running = false
    planner.iterate(1)
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
  mat4.identity(rotz)
})
shell.on('gl-render', t => {
  if (running) {
    n += t
    if (n > .25) {
      n = n % .3
      planner.iterate(1)
    }
  }
  shader.bind()
  shader.uniforms.u_resolution = resolution
  shader.uniforms.u_camera = camera
  shader.uniforms.u_perspective = perspective
  //shader.uniforms.tp = Math.sin(0.002 * Date.now())

  scene.forEach(ob => {
    shader.uniforms.u_position = ob.position || ident
    ob.draw()
  })
})

shell.on('gl-resize', setResolution)

function calculateCamera() {
  //mat4.mul(camera, cameraDist, xPivot)
  //mat4.mul(camera, camera, zPivot)
  mat4.copy(camera, cameraDist)
  mat4.rotateX(camera, camera, xAxis)
  mat4.rotateZ(camera, camera, zAxis)
  //mat4.mul(camera, camera, zPivot)
}

/**
 * Set up the projection matrix, which displays our vertices in a 1x1 XY plane.
 * This function must be called on initialization, and whenever the screen size
 * is changed.
 */
function setResolution() {
  resolution = [shell.width, shell.height]
  let ratio = shell.width/shell.height
  let width = ratio

  // used to center the 
  let left = -width/2
  if (orthographic) {
    mat4.ortho(perspective, left, left + width,-.5,.5,0,10)
  }
  else {
    mat4.perspective(perspective, Math.PI / 4, ratio, .1, 10)
  }
}

function setCursor(x, y) {
  mousex = x/shell.height
  mousey = 1-y/shell.height
  mouse = [mousex, mousey]
  if (environment.collide(mouse)) {
    shell.canvas.style.cursor = 'pointer'
  }
  else {
    shell.canvas.style.cursor = 'default'
  }
}
