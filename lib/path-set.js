import Lines from './lines'

class PathSet {
  constructor(paths, fitnessFn, pathMutationFn) {
    this.paths = paths.slice().sort((a,b) => fitnessFn(a) - fitnessFn(b))
  }
  mutation() {
    let newPaths = this.paths.slice(0, -1)
    newPaths.push(pathMutationFn(newPaths[0]))
    return new PathSet(newPaths, pathMutationFn, fitnessFn)
  }
  vobjects(gl, colorFn) {
    this.paths.map((p, i, arr) => {
      return new Lines(gl, p.nodes, colorFn(p, i, arr))
    })
  }
}

function colorByRank(p, i, arr) {
  let score = 1 - i / arr.length
  let color = [1-score, score, 0.2, .8]
  if (i === 0) color = [0, 0, .7, 1]
  return color
}

//export default PathSet
export {PathSet, colorByRank}
