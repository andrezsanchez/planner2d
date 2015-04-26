const { sin, cos, min, max, atan2, sqrt, random, PI } = Math 

class Segment {
  constructor(a, b, testFn, sampleDist) {
    this.distance = dist(a, b)
    this.collisions = sample(testFn, sampleDist, a, b)

    for (let p of sample(sampleDist, a, b)) {
      if (testFn(p)) {
        this.sample += 1
      }
    }
  }
}

function dist(a, b) {
  let x = b[0]-a[0]
  let y = b[1]-a[1]
  return sqrt(x*x + y*y)
}

//function* sample(collide, dist, start, end) {
function* sample(dist, start, end) {
  let ang = (atan2(end[1]-start[1], end[0]-start[0]) + PI) % PI
  let xInc = cos(ang) * dist
  let yInc = sin(ang) * dist
  let xStart = min(start[0], end[0])
  let yStart = min(start[1], end[1])
  let xEnd = max(start[0], end[0])
  let yEnd = max(start[1], end[1])

  // interpolate through the points and count the number of collisions
  let x, y
  for (x = xStart, y = yStart; x <= xEnd && y <= yEnd; x += xInc, y += yInc) {
    yield [x, y]
  }
}
