'use strict';

const createShader = require('gl-shader')
const { mat4, vec3, vec4 } = require('gl-matrix')
let shell = require('gl-now')()

const fs = require('fs')
let vs_src = fs.readFileSync('./vs.glsl').toString('utf-8')
let fs_src = fs.readFileSync('./fs.glsl').toString('utf-8')

import Square from './lib/square'
import TriangleEnvironment from './lib/environment'

let shader, resolution, camera
let perspective = mat4.create()
let environment
let scene = []

shell.on('gl-init', () => {
  setResolution()
  shader = createShader(shell.gl, vs_src, fs_src)

  camera = mat4.lookAt(mat4.create(),
                       vec3.fromValues(0, 0, 1),
                       vec3.fromValues(0, 0, 0),
                       vec3.fromValues(0, 1, 1)
                      )

  shader.attributes.position.location = 0
  shader.attributes.color.location = 1
  window.shader = shader

  resolution = [shell.width, shell.height];
  environment = new TriangleEnvironment(shell.gl, 50)
  scene.push(environment.mesh)
})

shell.on('gl-render', t => {
  shader.bind()
  shader.uniforms.u_resolution = resolution
  shader.uniforms.u_camera = camera
  shader.uniforms.u_perspective = perspective
  //shader.uniforms.tp = Math.sin(0.002 * Date.now())
  scene.forEach(ob => ob.draw())

  let checkPoint = [shell.mouse[0] /shell.height, 1-shell.mouse[1]/shell.height]
  if (environment.collide(checkPoint)) {
    shell.canvas.style.cursor = 'pointer'
  }
  else {
    shell.canvas.style.cursor = 'default'
  }
})

shell.on('gl-resize', setResolution)

function setResolution() {
  resolution = [shell.width, shell.height]
  let ratio = shell.width/shell.height
  let width = ratio * 1
  mat4.ortho(perspective, 0, width,0,1,0,10)
}
