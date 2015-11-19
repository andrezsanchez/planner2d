import linkTransform from './linkTransform'

export default function dLink(alphaPrev, aPrev, theta) {
  return function(d) {
    return linkTransform(alphaPrev, aPrev, d, theta)
  }
}
