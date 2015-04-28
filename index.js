const createShader = require('gl-shader')
const mouseEvent = require('mouse-event')
const { mat4, vec3 } = require('gl-matrix')
let shell = require('gl-now')()

const fs = require('fs')
let vs_src = fs.readFileSync('./vs.glsl').toString('utf-8')
let fs_src = fs.readFileSync('./fs.glsl').toString('utf-8')

import Lines from './lib/lines'
import TriangleEnvironment from './lib/environment'
import Planner2D from './lib/planner'

let shader, resolution, camera
let mouse, mousex, mousey
let perspective = mat4.create()
let environment, planner
let scene = []

shell.on('gl-init', () => {
  window.gl = shell.gl
  setResolution()
  shader = createShader(shell.gl, vs_src, fs_src)

  // position the camera to look down at the X-Y plane
  camera = mat4.lookAt(mat4.create(),
                       vec3.fromValues(0, 0, 1),
                       vec3.fromValues(0, 0, 0),
                       vec3.fromValues(0, 1, 1)
                      )

  shader.attributes.position.location = 0
  shader.attributes.color.location = 1

  environment = new TriangleEnvironment(shell.gl, 50)
  scene.push(environment.mesh)

  planner = new Planner2D(gl, environment.collide.bind(environment),
                          [0.08, 0.08], [.75, .75], .002)
  scene.push(planner)

  //shell.canvas.addEventListener('mousemove', e => {
    //setCursor(mouseEvent.x(e), mouseEvent.y(e))
  //})

  shell.canvas.addEventListener('click', e => {
    let b = mouseEvent.buttons(e)
    if (b & 1) running = !running
    if (b & 4) {
      console.log(planner.pathSet.paths)
      planner.iterate()
    }
  })
  scene.push(new Lines(shell.gl, [0,0,0,1,.02,.02, 0, 1], [0,0,1,1]))

  //planner.iterate()
  setCursor(0,0)
})

function linesFromPath(gl, nodes, color) {
  let arr = []
  nodes.forEach(n => arr.push(n[0], n[1], 0, 1))
  return new Lines(gl, arr, color)
}

let n = 0
let running = false
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
  scene.forEach(ob => ob.draw())
})

shell.on('gl-resize', setResolution)

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
  let left = 0//-(width-1)/2
  mat4.ortho(perspective, left, left + width,0,1,0,10)
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
