import Path from './path'
import Lines from './lines'
import segmentsIntersect from 'robust-segment-intersect'

const { sin, cos, random, floor, PI } = Math 

class Planner2D {
  /**
   * Create a planner instance
   * 
   * @argument {Function} A function that returns true for a collision, otherwise false.
   */
  constructor(gl, testFn, start, goal, sampleStep) {
    this.testFn = testFn
    this.gl = gl
    this.vobjects = []
    this.paths = []
    this.sampleStep = sampleStep

    if (testFn(start)) throw Error('Start location collision')
    if (testFn(goal)) throw Error('Goal location collision')

    // direct path just for good measure
    //this.paths.push([start, goal])

    for (let i = 0; i < 10; i++) {
      let p = randomPath(4 + floor(random()*6), start, goal)
      this.paths.push(new Path(testFn, p))
    }
  }
  iterate(steps) {
    let collide = this.testFn

    let scoredPaths = this.paths.map(path => {
      return {
        path: path,
        fitness: fitness(path)
      }
    })
    .sort((a, b) => a.fitness-b.fitness)

    scoredPaths.forEach((s, i, arr) => {
      let score = 1 - i / arr.length
      this.vobjects.push(linesFromPath(this.gl, s.path.nodes, [1-score, score, 0.2, 1]))
    })
    
    console.log(scoredPaths)
  }
  draw() {
    this.vobjects.forEach(o => o.draw())
  }
}

export default Planner2D

const DIST = .02

function mutate(p) {
  let i = floor(random() * p.length)
  p[i][0] = random()
  p[i][1] = random()
}

function fitness(c) {
  let score = 0
  if (c.collisions > 0) {
    score += 50000
    score += c.collisions * DIST
  }
  else {
    score += c.maxRoughness * .25 + c.distance * 8
  }
  return score
}

function randomPath(count, start, goal) {
  let knots = [start]
  for (let i = 0; i < count; i++) {
    knots.push([random(), random()])
  }
  knots.push(goal)

  return knots
}

function linesFromPath(gl, chr, color) {
  let arr = []
  chr.forEach(c => arr.push(c[0], c[1], 0, 1))
  return new Lines(gl, arr, color)
}

function randomColor() {
  return [.1+random()*.6, .1+random()*.6, .1+random()*.6, 1]
}
