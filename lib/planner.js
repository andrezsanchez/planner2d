import characterize from './path'
import Lines from './lines'
import segmentsIntersect from 'robust-segment-intersect'

const { sin, cos, random, PI } = Math 

class Planner2D {
  /**
   * Create a planner instance
   * 
   * @argument {Function} A function that returns true for a collision, otherwise false.
   */
  constructor(gl, testFn) {
    this.testFn = testFn
    this.gl = gl
    this.vobject = null
  }
  run(start, goal) {
    let collide = this.testFn

    if (collide(start[0], start[1])) throw Error('Start location collision')
    if (collide(goal[0], goal[1])) throw Error('Goal location collision')

    let initialChromosome = randomPath(10, start, goal)

    this.vobject = linesFromChromosome(this.gl, initialChromosome)
    console.log(characterize(collide, initialChromosome))
  }
  draw() {
    if (this.vobject) this.vobject.draw()
  }
}

export default Planner2D

function generateValidRandomPath(count, start, goal) {
  for (let attempts = 0; attempts < 500; attempts++){
    let p = randomPath(count, start, goal)
    if (pathValid(p)) {
      return p
    }
  }
  throw new Error('Could not generate random path')
  return null
}

/**
 * Check that a path does not intersect itself
 */
function pathValid(p) {
  for (let i = 0; i < p.length - 1; i++) {
    for (let j = i + 2; j < p.length - 1; j++) {
      if (segmentsIntersect(p[i], p[i+1], p[j], p[j+1])) {
        //console.log(p[i], p[i+1], p[j], p[j+1])
        return false
      }
    }
  }

  return true
}

function randomPath(count, start, goal) {
  let knots = [start]
  for (let i = 0; i < count; i++) {
    knots.push([random(), random()])
  }
  knots.push(goal)

  return knots
}

function linesFromChromosome(gl, chr) {
  let arr = []
  chr.forEach(c => arr.push(c[0], c[1], 0, 1))
  return new Lines(gl, arr, [0,.7,.2, 1])
}
