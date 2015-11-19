import lineCircleCollide from 'line-circle-collision'
import getNodes from './dh/nodesFromJointAngles'

const unitsToRadians = (x) => (x*(Math.PI*2)-Math.PI)

export default function collide(circleEnvironment, skeleton) {
  return function (coordinates) {
    let circles = circleEnvironment.circles
    let skeletonNodes = getNodes(skeleton.joints, coordinates.map(unitsToRadians))

    for (let i = 0; i < skeletonNodes.length-1; i++) {
      for (let j = 0; j < circles.length; j++) {
        if (lineCircleCollide(skeletonNodes[i], skeletonNodes[i+1], circles[j], circles[j][2])) {
          return true
        }
      }
    }
    return false
  }
}
