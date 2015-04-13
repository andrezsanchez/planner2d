'use strict';

var currentTime
var lastTime
var delta

var fn

function startLoop(cb) {
  // save the callback function to call
  fn = cb

  // start the loop process
  requestAnimationFrame(loop)

  // initialize time so that we don't get NaN
  currentTime = new Date().getTime()
}
function loop() {
  lastTime = currentTime
  currentTime = new Date().getTime()
  delta = (currentTime - lastTime) / 1000

  if(delta < 1.0) {
    // invoke the function given by the initial call
    fn(delta)
  }

  requestAnimationFrame(loop)
}

module.exports = startLoop
