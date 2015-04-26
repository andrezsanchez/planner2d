class PathSet {
  constructor(paths, fitnessFn, pathMutationFn) {
    this.paths = paths.slice().sort((a,b) => fitnessFn(a) - fitnessFn(b))
  }
  mutation() {
    let newPaths = this.paths.slice(0, -1)
    newPaths.push(pathMutationFn(newPaths[0]))
    return new PathSet(newPaths, pathMutationFn, fitnessFn)
  }
}

export default PathSet
