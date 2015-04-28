const { sin, cos, min, max, atan2, sqrt, random, PI } = Math 

class Segment {
  constructor(a, b, testFn, sampleDist) {
    this[0] = a
    this[1] = b
    this.distance = distance(a, b)
    this.collisions = 0
    sample(sampleDist, a, b, p => {
      if (testFn(p)) {
        this.sample += 1
        this.collisions += 1
      }
    })
    window.sample = window.sample || sample
    this.feasible = this.collisions === 0
  }
}

export default Segment

function distance(a, b) {
  let x = b[0]-a[0]
  let y = b[1]-a[1]
  return sqrt(x*x + y*y)
}

function sample(sampleDist, start, end, cb) {
  let dist = distance(start, end)
  let steps = dist / sampleDist
  let xInc = (end[0] - start[0]) / steps
  let yInc = (end[1] - start[1]) / steps

  // interpolate through the points and count the number of collisions
  for (let i=0,x=start[0],y=start[1]; i<steps; x+=xInc,y+=yInc,i+=1) {
    cb([x, y])
  }
}
