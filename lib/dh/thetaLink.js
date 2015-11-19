import linkTransform from './linkTransform'

export default function thetaLink(alphaPrev, aPrev, d) {
  return function(theta) {
    return linkTransform(alphaPrev, aPrev, d, theta)
  }
}
