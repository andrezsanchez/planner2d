import ndarray from 'ndarray'
import multiply from 'ndgemm'

export default function nodesFromJointAngles(joints, jointParams) {
  let position = ndarray([0,0,0,1], [4, 1])
  let nodes = []
  for (let i = 0; i < joints.length; i += 1) {
    multiply(position, joints[i](jointParams[i]), position)
    nodes.push(ndarray(position.data.slice(), [4,1]))
  }
  return nodes
}
