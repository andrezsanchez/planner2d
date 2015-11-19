import linkTransform from './linkTransform'

export default function aLink(alphaPrev, d, theta) {
  return function(aPrev) {
    return linkTransform(alphaPrev, aPrev, d, theta)
  }
}

