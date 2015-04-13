'use strict';

const React = require('react')
const Canvas = require('./canvas')
//var RulesInput = require('./inputs/rules')
//var StartInput = require('./inputs/start')

//var dotWorld = require('./dotWorld')
//var randomWorld = require('./randomWorld')

var floor = Math.floor

var Content = React.createClass({
  getInitialState: function() {
    return {
      map: [0,0,0,0,0,0,0,0],
      randomStart: false,
      width: 300,
      height: 400,
      tiledWidth: null,
      tileSize: 2,
    }
  },
  //onRulesChange: function(val) {
    //this.setState({
      //map: mapFromBinary(val)
    //})
  //},
  //onInitializationChange: function(val) {
    //this.setState({
      //randomStart: val
    //})
  //},
  onResize: function() {
    var width = floor(window.innerWidth * .8)
    var height = floor(window.innerHeight)

    this.setState({
      width: width,
      height: 600,
      //tiledWidth: floor(width / this.state.tileSize),
      ////world: world,
    })
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.onResize, false)
    this.onResize()
  },
  render: function() {
    //var world = this.state.randomStart
      //? randomWorld(this.state.width)
      //: dotWorld(this.state.width)
    //console.log(world)

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

function mapFromBinary(str) {
  var arr = []
  for (var i=str.length-1;i>=0;i--) {
    arr.push(str[i] === '1')
  }
  //console.log(arr)
  return arr
}
