import {PathSet, colorByRank} from './path-set'
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

    let paths = []
    for (let i = 0; i < 10; i++) {
      let p = randomPath(4 + floor(random()*6), start, goal)
      paths.push(new Path(testFn, p))
    }
    this.pathSet = new PathSet(paths, fitness, mutate)
    this.refreshVObjects()
  }
  refreshVObjects() {
    this.vobjects.forEach(o => o.destroy())
    this.vobjects = this.pathSet.generateVObjects(this.gl, colorByRank)
  }
  iterate() {
    this.pathSet = this.pathSet.mutation()
    this.refreshVObjects()
  }
  draw() {
    for (let i = this.vobjects.length-1; i >= 0; i--) {
      this.vobjects[i].draw()
    }
  }
}

export default Planner2D

const DIST = .02

function linesFromPath(gl, nodes, color) {
  let arr = []
  nodes.forEach(n => arr.push(n[0], n[1], 0, 1))
  return new Lines(gl, arr, color)
}

function mutate(path) {
  // copy nodes by value
  let nodes = path.nodes.map(n => n.slice())
  let i = floor(random() * (nodes.length - 2))
  nodes[i+1][0] = random()
  nodes[i+1][1] = random()
  return new Path(path.testFn, nodes)
}

function fitness(p) {
  let score = 0
  if (p.collisions > 0) {
    score += 50000
    score += p.collisions * DIST
  }
  else {
    score += p.maxRoughness * .25 + p.distance * 8
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

function randomColor() {
  return [.1+random()*.6, .1+random()*.6, .1+random()*.6, 1]
}
