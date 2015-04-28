import PathSet from './path-set'
import Path from './path'

const { min, max, floor, random, pow } = Math 
const smallAmount = () => random()*.2-.1
const clamp = x=>min(max(x, 0), 1)

// copy nodes by value
function copyNodes(path) {
  return path.nodes.map(n => n.slice())
}

/** 
 * Return a random index from 1 up to nodes.length-2
 */
function selNode(nodes) {
  return floor(random() * (nodes.length - 2)) + 1
}

function rndVector() {
  return [random(), random()]
}

function rndVectorNear(v) {
  return [clamp(v[0]+smallAmount()), clamp(v[1]+smallAmount())]
}

function selPath(paths) {
  let i = floor(random() * paths.length)
  return paths[i]
}

function some(fn, count) {
  let arr = []
  for (let i = 0; i < count; i++) arr.push(fn())
  return arr
}

function moveBig(paths) {
  let path = selPath(paths)
  let nodes = copyNodes(path)
  let i = selNode(nodes)
  nodes[i] = rndVector()
  return new Path(path.testFn, nodes)
}
moveBig.minNodes = 1

function moveSmall(paths) {
  // copy nodes by value
  let path = selPath(paths)
  let nodes = copyNodes(path)
  let i = selNode(nodes)
  nodes[i] = rndVectorNear(nodes[i])
  return new Path(path.testFn, nodes)

  function wrap(node) {
    node[0] = ((node[0] % 1) + 1) % 1
    node[1] = ((node[1] % 1) + 1) % 1
  }
}
moveSmall.minNodes = 1

function deleteNode(paths) {
  let path = selPath(paths)
  let nodes = copyNodes(path)
  let i = selNode(nodes)
  //console.log('del', i, nodes.length)
  nodes.splice(i, 1)
  //console.log('del', i, nodes.length)
  return new Path(path.testFn, nodes)
}
deleteNode.minNodes = 1

function addNode(paths) {
  let path = selPath(paths)
  let nodes = copyNodes(path)
  let i = floor(random()*(nodes.length-1))+1

  let cnt = floor(random()*random()*5)
  nodes.splice(i, 0, ...some(rndVector, cnt))

  return new Path(path.testFn, nodes)
}
addNode.minNodes = 0

function addNodeNear(paths) {
  let path = selPath(paths)
  let nodes = copyNodes(path)
  let i = floor(random()*(nodes.length-1))+1
  let cnt = floor(random()*random()*5)
  nodes.splice(i, 0, ...some(()=>rndVectorNear(nodes[i]), cnt))
  return new Path(path.testFn, nodes)
}
addNodeNear.minNodes = 0

function crossover(paths) {
  let a = copyNodes(selPath(paths))
  let b = copyNodes(selPath(paths))

  let nodes = a.slice(0, floor(a.length/2)).concat(b.slice(floor(b.length/2)))
  //let i = selNode(nodes)
  //nodes.splice(i, 0, rndVector())
  return new Path(paths[0].testFn, nodes)
}
crossover.minNodes = 2

const operators = [
  moveBig,
  moveSmall,
  deleteNode,
  addNode,
  addNodeNear,
  crossover,
]

let t = 0

export default function mutate(pathSet) {
  //console.log(pathSet)
  let newPaths = pathSet.paths.slice()
  let d = floor((1-pow(random(), 3))*(newPaths.length-1))+1
  //console.log(d)
  newPaths.splice(d, 1)
  //console.log(newPaths)
  //let ops = operators.filter(o => (newPaths.length-2) >= o.minNodes)


  let validPaths
  let op

  let n = floor(random() * operators.length)
  let i
  for (i = 0; i < operators.length; i += 1, n = (n + 1) % operators.length) {
    op = operators[n]
    validPaths = newPaths.filter(p => (p.nodes.length-2) >= op.minNodes)
    if (validPaths.length > 0) {
      break
    }
  }
  if (i === operators.length) throw new Error('no valid operators')

  //console.log(t++, op.name)
  newPaths.push(op(validPaths))

  //newPaths.forEach(p => console.log(p.nodes[0], p.nodes[p.nodes.length-1]))
  //console.log(newPaths[0], newPaths[newPaths.length-1])
  return new PathSet(newPaths, pathSet.fitnessFn)
}
