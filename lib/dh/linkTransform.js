import ndarray from 'ndarray'

export default function linkTransform(alphaPrev, aPrev, d, theta) {
  var s = Math.sin;
  var c = Math.cos;

  var sinT = Math.sin(theta);
  var cosT = Math.cos(theta);

  var sinAl = Math.sin(alphaPrev);
  var cosAl = Math.cos(alphaPrev);

  return ndarray([
    cosT,       -sinT,      0,      aPrev,
    sinT*cosAl, cosT*cosAl, -sinAl, -sinAl*d,
    sinT*sinAl, cosT*sinAl, cosAl, -sinAl*d,
    0,          0,          0,     1
  ], [4,4]);
}

