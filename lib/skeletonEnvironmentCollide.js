import lineCircleCollide from 'line-circle-collision'

export default function collide(circleEnvironment, skeleton) {
  return function (jointAngles) {
    let circles = circleEnvironment.circles
    let nodes = skeleton.nodesFromJointAngles(jointAngles.map(a=>(a*(Math.PI*2)-Math.PI)))
    //console.log(jointAngles, nodes)
    for (let i = 0; i < nodes.length-1; i++) {
      for (let j = 0; j < circles.length; j++) {
        if (lineCircleCollide(nodes[i], nodes[i+1], circles[j], circles[j][2])) {
          //console.log(nodes, i, circles[j])
          return true
        }
      }
    }
    return false
  }
}
