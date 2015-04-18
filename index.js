'use strict';

const createShader = require('gl-shader')
const createBuffer = require('gl-buffer')
const createVAO = require('gl-vao')
const fs = require('fs')

let shell = require('gl-now')()

let shader, vao, ob, resolution

const { sin, floor, random } = Math 

let vs_src = fs.readFileSync('./vs.glsl').toString('utf-8')
let fs_src = fs.readFileSync('./fs.glsl').toString('utf-8')

import VObject from './lib/vobject'
import Square from './lib/square'

shell.on('gl-init', () => {
  let gl = shell.gl
  shader = createShader(gl, vs_src, fs_src)

  shader.attributes.position.location = 0
  shader.attributes.color.location = 1

  resolution = [shell.width, shell.height];
  ob = new Square(gl, 1.0, 1.0, [1.0, 0, .3 ,1])
  console.log(ob)
})

shell.on('gl-render', t => {
  let gl = shell.gl

  shader.bind()
  shader.uniforms.u_resolution = resolution
  shader.uniforms.tp = sin(0.001 * Date.now())
  ob.draw()
})

class Vector {
  constructor(x, y, z) {
    this.data = [x, y, z]
  }
  [0]() {
    return this.x
  }
}

class Line {
  constructor(v1, v2) {
    this.vectors = [v1, v2]
  }
}

class Point {
  constructor(vertex, color) {
    this.vectors = [v1, v2, v3]
    this.color = color
  }
}

class Vertex {
  constructor(coords, color) {
  }
}

//class Line {
  //constructor(vertex, color) {
    //let vao = createVAO(gl, [vertex, color])
  //}
//}
