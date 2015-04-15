'use strict';

const React = require('react')
const Canvas = require('./canvas')

const floor = Math.floor

var Content = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  onResize: function() {
    var width = floor(window.innerWidth * .8)
    var height = floor(window.innerHeight)

    this.setState({
      width: width,
      height: 600,
    })
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.onResize, false)
    this.onResize()
  },
  render: function() {
    if (!this.state.width || !this.state.height)
      return (<div></div>)

    return (
      <div>
        <div className='sidebar'>
          <label>Sine wave graph</label>
          <input />
        </div>
        <Canvas
          width={this.state.width}
          height={this.state.height}
          size={2}
          />
      </div>
    )
  }
})

React.render(<Content />, document.body)

function randomArray(size, fn) {
  var i
  var arr = []
  for (i=0;i<size;i++) {
    arr.push(fn(i))
  }
  return arr
}

function randBool() {
  return Math.random() > .5
}
