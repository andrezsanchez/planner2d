'use strict';

const React = require('react')
const loop = require('./loop')

const floor = Math.floor

var fs = require('fs')

var vs_src = fs.readFileSync('./vs.glsl').toString('utf-8')
var ps_src = fs.readFileSync('./fs.glsl').toString('utf-8')

const Canvas = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  componentDidMount: function() {
    this.renderCanvas()
  },
  componentDidUpdate: function() {
    this.renderCanvas()
  },
  onMouseEvent: function(e) {
  },
  renderCanvas: function() {
    var canvas = this.getDOMNode()
    var gl = canvas.getContext('webgl')

    window.gl = gl
    console.log(canvas)

    gl.viewport(0,0,canvas.clientWidth, canvas.clientHeight)

    var ps = compileShader(gl, ps_src, gl.FRAGMENT_SHADER)
    var vs = compileShader(gl, vs_src, gl.VERTEX_SHADER)
    
    var program = createProgram(gl, vs, ps)
    gl.useProgram(program)
    var positionLocation = gl.getAttribLocation(program, 'a_position')

    var buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
        1.0, 1.0,
        -1.0, 1.0,
        -1.0, -1.0,
        1.0, -1.0,
        1.0, 1.0,
      ]),

      gl.STATIC_DRAW
    )

    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    gl.drawArrays(gl.TRIANGLES, 0, 6)


    var width = this.props.width
    var height = this.props.height
    
  },
  render: function() {
    return (
      <canvas
        ref='canvas'
        width={this.props.width}
        height={this.props.height}
        onWheel={this.onMouseEvent}
        />
    )
  }
})

module.exports = Canvas

function clamp(i, min, max) {
  return Math.max(Math.min(i, max), min)
}

function compileShader(gl, src, type) {
  var shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error('Could not compile shader: %s', gl.getShaderInfoLog(shader))
  }

  return shader
}

function createProgram(gl, vert, frag) {
  var program = gl.createProgram()
  gl.attachShader(program, vert)
  gl.attachShader(program, frag)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error('Could not link program: %s', gl.getProgramInfoLog(program))
  }

  return program
}
