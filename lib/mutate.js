
export function mutate(path, pathSet) {
  let operators = [
    moveBig,
  ]
}

function moveBig(path, pathSet) {
  // copy nodes by value
  let nodes = path.nodes.map(n => n.slice())
  let i = floor(random() * (nodes.length - 2))
  nodes[i+1][0] = random()
  nodes[i+1][1] = random()
  return new Path(path.testFn, nodes)
}

function moveSmall(path, pathSet) {
  // copy nodes by value
  let nodes = path.nodes.map(n => n.slice())
  let i = floor(random() * (nodes.length - 2))
  nodes[i+1][0] = random()
  nodes[i+1][1] = random()
  return new Path(path.testFn, nodes)
}
