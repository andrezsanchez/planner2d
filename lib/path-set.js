import Lines from './lines'

class PathSet {
  constructor(paths, fitnessFn) {
    this.paths = paths.slice().sort((a,b) => fitnessFn(a) - fitnessFn(b))
    this.fitnessFn = fitnessFn
  }
  //mutation() {
    ////let newPaths = this.paths.slice(0, -1)
    ////newPaths.push(mutate(newPaths[0], this))
    //return mutate(this)
  //}
  generateVObjects(gl, colorFn) {
    return this.paths.map((p, i, arr) => {
      return linesFromPath(gl, p.nodes, colorByRank(p, i, arr))
    })
  }
}

function linesFromPath(gl, nodes, color) {
  let arr = []
  nodes.forEach(n => arr.push(n[0], n[1], 0, 1))
  return new Lines(gl, arr, color)
}

function colorByRank(p, i, arr) {
  let score = 1 - i / arr.length
  let color = [1-score, score, 0.2, .8]
  if (i === 0) color = [0, 0, .7, .9]
  return color
}

export default PathSet
