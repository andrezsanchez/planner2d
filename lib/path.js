const { sin, cos, min, max, atan2, sqrt, random, PI } = Math 

import Segment from './segment'

class Path {
  constructor(testFn, nodes) {
    this.testFn = testFn
    this.nodes = nodes
    this.feasible = true
    this.distance = 0
    this.collisions = 0
    this.maxRoughness = 0
    //this.distances = []
    this.segments = []

    for (let i = 0; i < nodes.length - 1; i += 1) {
      let s = new Segment(nodes[i], nodes[i+1], testFn, DIST)
      this.segments.push(s)
      this.distance += s.distance
      this.collisions += s.collisions
      this.feasible = this.feasible && s.feasible
    }

    for (let i = 1; i < nodes.length - 1; i += 1) {
      let currentS = smoothness(
        this.segments[i-1].distance, this.segments[i].distance,
        nodes[i-1], nodes[i], nodes[i+1]
      )

      this.maxRoughness = max(this.maxRoughness, currentS)
    }
  }
}

export default Path

const DIST = .01

function smoothness(d1, d2, p1, p2, p3) {
  let d = min(d1, d2)
  let a1 = atan2(p2[1] - p1[1], p2[0] - p1[0])
  let a2 = atan2(p2[1] - p3[1], p2[0] - p3[0])

  let theta = ((a1 - a2) + 2 * PI) % PI

  return theta / d
}

function dist(a, b) {
  let x = b[0]-a[0]
  let y = b[1]-a[1]
  return sqrt(x*x + y*y)
}

function sample(collide, start, end, dist) {
  let ang = (atan2(end[1]-start[1], end[0]-start[0]) + PI) % PI
  let xInc = cos(ang) * dist
  let yInc = sin(ang) * dist
  let xStart = min(start[0], end[0])
  let yStart = min(start[1], end[1])
  let xEnd = max(start[0], end[0])
  let yEnd = max(start[1], end[1])

  // interpolate through the points and count the number of collisions
  let x, y
  let count = 0
  let total = 0

  for (x = xStart, y = yStart; x <= xEnd && y <= yEnd; x += xInc, y += yInc) {
    if (collide([x, y])) count += 1
    total += 1
  }
  return count
}
