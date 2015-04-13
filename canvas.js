'use strict';

const React = require('react')
const loop = require('./loop')

const floor = Math.floor

const Autonoma = React.createClass({
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
    //console.log(e)
  },
  renderCanvas: function() {
    var canvas = this.getDOMNode().getContext('2d')

    var width = this.props.width
    var height = this.props.height
    
    console.log(width, height)

    var x = 0
    var s = 45
    var xs = 1
    var size = this.props.size

    function render(delta) {
      //canvas.clearRect(0, 0, width, height)
      //x += delta * xs * s
      //if (x > (width-100)) xs = -1
      //if (x < 0) xs = 1
      //canvas.fillRect(floor(x), floor(x), 25, 25)
      canvas.fillRect(floor(Math.random()*width), floor(Math.random()*height), 2, 2)
      //if (Math.random() > .96) console.log(x)
    }

    function sinmap(offsetx, offsety) {
      canvas.clearRect(0, 0, width, height)
      var x,y
      var cx, cy

      for (y=0; y<height/size; y++) {
        for (x=0; x < width/size; x++) {
          cx = x + offsetx
          cy = y + offsety
          if (Math.sin(cx*cx+cy*cy) > .9) canvas.fillRect(x*size,y*size,size,size)
        }
      }
    }

    //sinmap(0, 0)

    //loop(function(delta) {
      //x += 1
      //sinmap(x, 0)
    //})
    //loop(render)
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

module.exports = Autonoma

function clamp(i, min, max) {
  return Math.max(Math.min(i, max), min)
}
