(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (Buffer){
"use strict";
var $__3;
var $__lib_47_vobject__,
    $__lib_47_square__;
'use strict';
var createShader = require('gl-shader');
var createBuffer = require('gl-buffer');
var createVAO = require('gl-vao');

var shell = require('gl-now')();
var shader,
    vao,
    ob,
    resolution;
var $__4 = Math,
    sin = $__4.sin,
    floor = $__4.floor,
    random = $__4.random;
var vs_src = Buffer("dW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjsKdW5pZm9ybSBmbG9hdCB0cDsKCmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uOwphdHRyaWJ1dGUgdmVjNCBjb2xvcjsKdmFyeWluZyB2ZWM0IHZfY29sb3I7CgpmbG9hdCByYXRpbyA9IHVfcmVzb2x1dGlvbi55IC8gdV9yZXNvbHV0aW9uLng7Cgp2b2lkIG1haW4oKSB7CiAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLnggKiByYXRpbywgcG9zaXRpb24ueSwgcG9zaXRpb24ueiwgMS4wKTsKICB2X2NvbG9yID0gdmVjNChjb2xvci54eSwgY29sb3IueiArIHRwICogMC4zLCBjb2xvci53KTsKfQo=","base64").toString('utf-8');
var fs_src = Buffer("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoKdmFyeWluZyB2ZWM0IHZfY29sb3I7Cgp2b2lkIG1haW4oKSB7CiAgZ2xfRnJhZ0NvbG9yID0gdl9jb2xvcjsKfQo=","base64").toString('utf-8');
var VObject = ($__lib_47_vobject__ = require("./lib/vobject"), $__lib_47_vobject__ && $__lib_47_vobject__.__esModule && $__lib_47_vobject__ || {default: $__lib_47_vobject__}).default;
var Square = ($__lib_47_square__ = require("./lib/square"), $__lib_47_square__ && $__lib_47_square__.__esModule && $__lib_47_square__ || {default: $__lib_47_square__}).default;
shell.on('gl-init', (function() {
  var gl = shell.gl;
  shader = createShader(gl, vs_src, fs_src);
  shader.attributes.position.location = 0;
  shader.attributes.color.location = 1;
  resolution = [shell.width, shell.height];
  ob = new Square(gl, 1.0, 1.0, [1.0, 0, .3, 1]);
  console.log(ob);
}));
shell.on('gl-render', (function(t) {
  var gl = shell.gl;
  shader.bind();
  shader.uniforms.u_resolution = resolution;
  shader.uniforms.tp = sin(0.001 * Date.now());
  ob.draw();
}));
var Vector = function Vector(x, y, z) {
  this.data = [x, y, z];
};
($traceurRuntime.createClass)(Vector, ($__3 = {}, Object.defineProperty($__3, 0, {
  value: function() {
    return this.x;
  },
  configurable: true,
  enumerable: true,
  writable: true
}), $__3), {});
var Line = function Line(v1, v2) {
  this.vectors = [v1, v2];
};
($traceurRuntime.createClass)(Line, {}, {});
var Point = function Point(vertex, color) {
  this.vectors = [v1, v2, v3];
  this.color = color;
};
($traceurRuntime.createClass)(Point, {}, {});
var Vertex = function Vertex(coords, color) {};
($traceurRuntime.createClass)(Vertex, {}, {});


//# sourceURL=/home/andre/code/js/epn/index.js
}).call(this,require("buffer").Buffer)

},{"./lib/square":2,"./lib/vobject":3,"buffer":4,"gl-buffer":15,"gl-now":28,"gl-shader":41,"gl-vao":55}],2:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__vobject__,
    $__gl_45_vao__,
    $__gl_45_buffer__;
var VObject = ($__vobject__ = require("./vobject"), $__vobject__ && $__vobject__.__esModule && $__vobject__ || {default: $__vobject__}).default;
var createVAO = ($__gl_45_vao__ = require("gl-vao"), $__gl_45_vao__ && $__gl_45_vao__.__esModule && $__gl_45_vao__ || {default: $__gl_45_vao__}).default;
var createBuffer = ($__gl_45_buffer__ = require("gl-buffer"), $__gl_45_buffer__ && $__gl_45_buffer__.__esModule && $__gl_45_buffer__ || {default: $__gl_45_buffer__}).default;
var Square = function Square(gl, width, height, color) {
  console.log(gl, width, height, color);
  var wd2 = width / 2;
  var hd2 = height / 2;
  var vao = createVAO(gl, [{
    buffer: createBuffer(gl, [-wd2, -hd2, 0.0, 1, wd2, -hd2, 0.0, 1, -wd2, hd2, 0.0, 1, -wd2, hd2, 0.0, 1, wd2, -hd2, 0.0, 1, wd2, hd2, 0.0, 1]),
    type: gl.FLOAT,
    size: 4
  }, color]);
  $traceurRuntime.superConstructor($Square).call(this, vao, gl.TRIANGLES, 6);
};
var $Square = Square;
($traceurRuntime.createClass)(Square, {draw: function() {
    $traceurRuntime.superGet(this, $Square.prototype, "draw").call(this);
  }}, {}, VObject);
var $__default = Square;


//# sourceURL=/home/andre/code/js/epn/lib/square.js
},{"./vobject":3,"gl-buffer":15,"gl-vao":55}],3:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var VObject = function VObject(vao, drawType, drawCount) {
  console.log(vao, drawType, drawCount);
  this.vao = vao;
  this.drawType = drawType;
  this.drawCount = drawCount;
};
($traceurRuntime.createClass)(VObject, {draw: function() {
    this.vao.bind();
    this.vao.draw(this.drawType, this.drawCount);
    this.vao.unbind();
  }}, {});
var $__default = VObject;


//# sourceURL=/home/andre/code/js/epn/lib/vobject.js
},{}],4:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff
var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding) {
  var self = this
  if (!(self instanceof Buffer)) return new Buffer(subject, encoding)

  var type = typeof subject
  var length

  if (type === 'number') {
    length = +subject
  } else if (type === 'string') {
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) {
    // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data)) subject = subject.data
    length = +subject.length
  } else {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (length > kMaxLength) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' +
      kMaxLength.toString(16) + ' bytes')
  }

  if (length < 0) length = 0
  else length >>>= 0 // coerce to uint32

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    self = Buffer._augment(new Uint8Array(length)) // eslint-disable-line consistent-this
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    self.length = length
    self._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    self._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++) {
        self[i] = subject.readUInt8(i)
      }
    } else {
      for (i = 0; i < length; i++) {
        self[i] = ((subject[i] % 256) + 256) % 256
      }
    }
  } else if (type === 'string') {
    self.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < length; i++) {
      self[i] = 0
    }
  }

  if (length > 0 && length <= Buffer.poolSize) self.parent = rootParent

  return self
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, totalLength) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function byteLength (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function toString (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0

  if (length < 0 || offset < 0 || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) >>> 0 & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) >>> 0 & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkInt(
      this, value, offset, byteLength,
      Math.pow(2, 8 * byteLength - 1) - 1,
      -Math.pow(2, 8 * byteLength - 1)
    )
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkInt(
      this, value, offset, byteLength,
      Math.pow(2, 8 * byteLength - 1) - 1,
      -Math.pow(2, 8 * byteLength - 1)
    )
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, target_start, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (target_start >= target.length) target_start = target.length
  if (!target_start) target_start = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (target_start < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - target_start < end - start) {
    end = target.length - target_start + start
  }

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []
  var i = 0

  for (; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (leadSurrogate) {
        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        } else {
          // valid surrogate pair
          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
          leadSurrogate = null
        }
      } else {
        // no lead yet

        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else {
          // valid lead
          leadSurrogate = codePoint
          continue
        }
      }
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      leadSurrogate = null
    }

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x200000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":5,"ieee754":6,"is-array":7}],5:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],6:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],7:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],8:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],9:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],10:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))

},{"_process":11}],11:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],12:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],13:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":12,"_process":11,"inherits":9}],14:[function(require,module,exports){
(function (process,global){
(function(global) {
  'use strict';
  if (global.$traceurRuntime) {
    return;
  }
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $Object.defineProperties;
  var $defineProperty = $Object.defineProperty;
  var $freeze = $Object.freeze;
  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
  var $keys = $Object.keys;
  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
  var $toString = $Object.prototype.toString;
  var $preventExtensions = Object.preventExtensions;
  var $seal = Object.seal;
  var $isExtensible = Object.isExtensible;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var method = nonEnum;
  var counter = 0;
  function newUniqueString() {
    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
  }
  var symbolInternalProperty = newUniqueString();
  var symbolDescriptionProperty = newUniqueString();
  var symbolDataProperty = newUniqueString();
  var symbolValues = $create(null);
  var privateNames = $create(null);
  function isPrivateName(s) {
    return privateNames[s];
  }
  function createPrivateName() {
    var s = newUniqueString();
    privateNames[s] = true;
    return s;
  }
  function isShimSymbol(symbol) {
    return typeof symbol === 'object' && symbol instanceof SymbolValue;
  }
  function typeOf(v) {
    if (isShimSymbol(v))
      return 'symbol';
    return typeof v;
  }
  function Symbol(description) {
    var value = new SymbolValue(description);
    if (!(this instanceof Symbol))
      return value;
    throw new TypeError('Symbol cannot be new\'ed');
  }
  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(Symbol.prototype, 'toString', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    var desc = symbolValue[symbolDescriptionProperty];
    if (desc === undefined)
      desc = '';
    return 'Symbol(' + desc + ')';
  }));
  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    return symbolValue;
  }));
  function SymbolValue(description) {
    var key = newUniqueString();
    $defineProperty(this, symbolDataProperty, {value: this});
    $defineProperty(this, symbolInternalProperty, {value: key});
    $defineProperty(this, symbolDescriptionProperty, {value: description});
    freeze(this);
    symbolValues[key] = this;
  }
  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(SymbolValue.prototype, 'toString', {
    value: Symbol.prototype.toString,
    enumerable: false
  });
  $defineProperty(SymbolValue.prototype, 'valueOf', {
    value: Symbol.prototype.valueOf,
    enumerable: false
  });
  var hashProperty = createPrivateName();
  var hashPropertyDescriptor = {value: undefined};
  var hashObjectProperties = {
    hash: {value: undefined},
    self: {value: undefined}
  };
  var hashCounter = 0;
  function getOwnHashObject(object) {
    var hashObject = object[hashProperty];
    if (hashObject && hashObject.self === object)
      return hashObject;
    if ($isExtensible(object)) {
      hashObjectProperties.hash.value = hashCounter++;
      hashObjectProperties.self.value = object;
      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
      $defineProperty(object, hashProperty, hashPropertyDescriptor);
      return hashPropertyDescriptor.value;
    }
    return undefined;
  }
  function freeze(object) {
    getOwnHashObject(object);
    return $freeze.apply(this, arguments);
  }
  function preventExtensions(object) {
    getOwnHashObject(object);
    return $preventExtensions.apply(this, arguments);
  }
  function seal(object) {
    getOwnHashObject(object);
    return $seal.apply(this, arguments);
  }
  freeze(SymbolValue.prototype);
  function isSymbolString(s) {
    return symbolValues[s] || privateNames[s];
  }
  function toProperty(name) {
    if (isShimSymbol(name))
      return name[symbolInternalProperty];
    return name;
  }
  function removeSymbolKeys(array) {
    var rv = [];
    for (var i = 0; i < array.length; i++) {
      if (!isSymbolString(array[i])) {
        rv.push(array[i]);
      }
    }
    return rv;
  }
  function getOwnPropertyNames(object) {
    return removeSymbolKeys($getOwnPropertyNames(object));
  }
  function keys(object) {
    return removeSymbolKeys($keys(object));
  }
  function getOwnPropertySymbols(object) {
    var rv = [];
    var names = $getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var symbol = symbolValues[names[i]];
      if (symbol) {
        rv.push(symbol);
      }
    }
    return rv;
  }
  function getOwnPropertyDescriptor(object, name) {
    return $getOwnPropertyDescriptor(object, toProperty(name));
  }
  function hasOwnProperty(name) {
    return $hasOwnProperty.call(this, toProperty(name));
  }
  function getOption(name) {
    return global.traceur && global.traceur.options[name];
  }
  function defineProperty(object, name, descriptor) {
    if (isShimSymbol(name)) {
      name = name[symbolInternalProperty];
    }
    $defineProperty(object, name, descriptor);
    return object;
  }
  function polyfillObject(Object) {
    $defineProperty(Object, 'defineProperty', {value: defineProperty});
    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
    $defineProperty(Object, 'freeze', {value: freeze});
    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
    $defineProperty(Object, 'seal', {value: seal});
    $defineProperty(Object, 'keys', {value: keys});
  }
  function exportStar(object) {
    for (var i = 1; i < arguments.length; i++) {
      var names = $getOwnPropertyNames(arguments[i]);
      for (var j = 0; j < names.length; j++) {
        var name = names[j];
        if (isSymbolString(name))
          continue;
        (function(mod, name) {
          $defineProperty(object, name, {
            get: function() {
              return mod[name];
            },
            enumerable: true
          });
        })(arguments[i], names[j]);
      }
    }
    return object;
  }
  function isObject(x) {
    return x != null && (typeof x === 'object' || typeof x === 'function');
  }
  function toObject(x) {
    if (x == null)
      throw $TypeError();
    return $Object(x);
  }
  function checkObjectCoercible(argument) {
    if (argument == null) {
      throw new TypeError('Value cannot be converted to an Object');
    }
    return argument;
  }
  function polyfillSymbol(global, Symbol) {
    if (!global.Symbol) {
      global.Symbol = Symbol;
      Object.getOwnPropertySymbols = getOwnPropertySymbols;
    }
    if (!global.Symbol.iterator) {
      global.Symbol.iterator = Symbol('Symbol.iterator');
    }
  }
  function setupGlobals(global) {
    polyfillSymbol(global, Symbol);
    global.Reflect = global.Reflect || {};
    global.Reflect.global = global.Reflect.global || global;
    polyfillObject(global.Object);
  }
  setupGlobals(global);
  global.$traceurRuntime = {
    checkObjectCoercible: checkObjectCoercible,
    createPrivateName: createPrivateName,
    defineProperties: $defineProperties,
    defineProperty: $defineProperty,
    exportStar: exportStar,
    getOwnHashObject: getOwnHashObject,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    isObject: isObject,
    isPrivateName: isPrivateName,
    isSymbolString: isSymbolString,
    keys: $keys,
    setupGlobals: setupGlobals,
    toObject: toObject,
    toProperty: toProperty,
    typeof: typeOf
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
(function() {
  'use strict';
  var path;
  function relativeRequire(callerPath, requiredPath) {
    path = path || typeof require !== 'undefined' && require('path');
    function isDirectory(path) {
      return path.slice(-1) === '/';
    }
    function isAbsolute(path) {
      return path[0] === '/';
    }
    function isRelative(path) {
      return path[0] === '.';
    }
    if (isDirectory(requiredPath) || isAbsolute(requiredPath))
      return;
    return isRelative(requiredPath) ? require(path.resolve(path.dirname(callerPath), requiredPath)) : require(requiredPath);
  }
  $traceurRuntime.require = relativeRequire;
})();
(function() {
  'use strict';
  function spread() {
    var rv = [],
        j = 0,
        iterResult;
    for (var i = 0; i < arguments.length; i++) {
      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
        throw new TypeError('Cannot spread non-iterable object.');
      }
      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
      while (!(iterResult = iter.next()).done) {
        rv[j++] = iterResult.value;
      }
    }
    return rv;
  }
  $traceurRuntime.spread = spread;
})();
(function() {
  'use strict';
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
  var $getPrototypeOf = Object.getPrototypeOf;
  var $__0 = Object,
      getOwnPropertyNames = $__0.getOwnPropertyNames,
      getOwnPropertySymbols = $__0.getOwnPropertySymbols;
  function superDescriptor(homeObject, name) {
    var proto = $getPrototypeOf(homeObject);
    do {
      var result = $getOwnPropertyDescriptor(proto, name);
      if (result)
        return result;
      proto = $getPrototypeOf(proto);
    } while (proto);
    return undefined;
  }
  function superConstructor(ctor) {
    return ctor.__proto__;
  }
  function superCall(self, homeObject, name, args) {
    return superGet(self, homeObject, name).apply(self, args);
  }
  function superGet(self, homeObject, name) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor) {
      if (!descriptor.get)
        return descriptor.value;
      return descriptor.get.call(self);
    }
    return undefined;
  }
  function superSet(self, homeObject, name, value) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor && descriptor.set) {
      descriptor.set.call(self, value);
      return value;
    }
    throw $TypeError(("super has no setter '" + name + "'."));
  }
  function getDescriptors(object) {
    var descriptors = {};
    var names = getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      descriptors[name] = $getOwnPropertyDescriptor(object, name);
    }
    var symbols = getOwnPropertySymbols(object);
    for (var i = 0; i < symbols.length; i++) {
      var symbol = symbols[i];
      descriptors[$traceurRuntime.toProperty(symbol)] = $getOwnPropertyDescriptor(object, $traceurRuntime.toProperty(symbol));
    }
    return descriptors;
  }
  function createClass(ctor, object, staticObject, superClass) {
    $defineProperty(object, 'constructor', {
      value: ctor,
      configurable: true,
      enumerable: false,
      writable: true
    });
    if (arguments.length > 3) {
      if (typeof superClass === 'function')
        ctor.__proto__ = superClass;
      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
    } else {
      ctor.prototype = object;
    }
    $defineProperty(ctor, 'prototype', {
      configurable: false,
      writable: false
    });
    return $defineProperties(ctor, getDescriptors(staticObject));
  }
  function getProtoParent(superClass) {
    if (typeof superClass === 'function') {
      var prototype = superClass.prototype;
      if ($Object(prototype) === prototype || prototype === null)
        return superClass.prototype;
      throw new $TypeError('super prototype must be an Object or null');
    }
    if (superClass === null)
      return null;
    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
  }
  function defaultSuperCall(self, homeObject, args) {
    if ($getPrototypeOf(homeObject) !== null)
      superCall(self, homeObject, 'constructor', args);
  }
  $traceurRuntime.createClass = createClass;
  $traceurRuntime.defaultSuperCall = defaultSuperCall;
  $traceurRuntime.superCall = superCall;
  $traceurRuntime.superConstructor = superConstructor;
  $traceurRuntime.superGet = superGet;
  $traceurRuntime.superSet = superSet;
})();
(function() {
  'use strict';
  if (typeof $traceurRuntime !== 'object') {
    throw new Error('traceur runtime not found.');
  }
  var createPrivateName = $traceurRuntime.createPrivateName;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $create = Object.create;
  var $TypeError = TypeError;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var ST_NEWBORN = 0;
  var ST_EXECUTING = 1;
  var ST_SUSPENDED = 2;
  var ST_CLOSED = 3;
  var END_STATE = -2;
  var RETHROW_STATE = -3;
  function getInternalError(state) {
    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
  }
  function GeneratorContext() {
    this.state = 0;
    this.GState = ST_NEWBORN;
    this.storedException = undefined;
    this.finallyFallThrough = undefined;
    this.sent_ = undefined;
    this.returnValue = undefined;
    this.tryStack_ = [];
  }
  GeneratorContext.prototype = {
    pushTry: function(catchState, finallyState) {
      if (finallyState !== null) {
        var finallyFallThrough = null;
        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
          if (this.tryStack_[i].catch !== undefined) {
            finallyFallThrough = this.tryStack_[i].catch;
            break;
          }
        }
        if (finallyFallThrough === null)
          finallyFallThrough = RETHROW_STATE;
        this.tryStack_.push({
          finally: finallyState,
          finallyFallThrough: finallyFallThrough
        });
      }
      if (catchState !== null) {
        this.tryStack_.push({catch: catchState});
      }
    },
    popTry: function() {
      this.tryStack_.pop();
    },
    get sent() {
      this.maybeThrow();
      return this.sent_;
    },
    set sent(v) {
      this.sent_ = v;
    },
    get sentIgnoreThrow() {
      return this.sent_;
    },
    maybeThrow: function() {
      if (this.action === 'throw') {
        this.action = 'next';
        throw this.sent_;
      }
    },
    end: function() {
      switch (this.state) {
        case END_STATE:
          return this;
        case RETHROW_STATE:
          throw this.storedException;
        default:
          throw getInternalError(this.state);
      }
    },
    handleException: function(ex) {
      this.GState = ST_CLOSED;
      this.state = END_STATE;
      throw ex;
    }
  };
  function nextOrThrow(ctx, moveNext, action, x) {
    switch (ctx.GState) {
      case ST_EXECUTING:
        throw new Error(("\"" + action + "\" on executing generator"));
      case ST_CLOSED:
        if (action == 'next') {
          return {
            value: undefined,
            done: true
          };
        }
        throw x;
      case ST_NEWBORN:
        if (action === 'throw') {
          ctx.GState = ST_CLOSED;
          throw x;
        }
        if (x !== undefined)
          throw $TypeError('Sent value to newborn generator');
      case ST_SUSPENDED:
        ctx.GState = ST_EXECUTING;
        ctx.action = action;
        ctx.sent = x;
        var value = moveNext(ctx);
        var done = value === ctx;
        if (done)
          value = ctx.returnValue;
        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
        return {
          value: value,
          done: done
        };
    }
  }
  var ctxName = createPrivateName();
  var moveNextName = createPrivateName();
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
  GeneratorFunctionPrototype.prototype = {
    constructor: GeneratorFunctionPrototype,
    next: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
    },
    throw: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
    }
  };
  $defineProperties(GeneratorFunctionPrototype.prototype, {
    constructor: {enumerable: false},
    next: {enumerable: false},
    throw: {enumerable: false}
  });
  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
    return this;
  }));
  function createGeneratorInstance(innerFunction, functionObject, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new GeneratorContext();
    var object = $create(functionObject.prototype);
    object[ctxName] = ctx;
    object[moveNextName] = moveNext;
    return object;
  }
  function initGeneratorFunction(functionObject) {
    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
    functionObject.__proto__ = GeneratorFunctionPrototype;
    return functionObject;
  }
  function AsyncFunctionContext() {
    GeneratorContext.call(this);
    this.err = undefined;
    var ctx = this;
    ctx.result = new Promise(function(resolve, reject) {
      ctx.resolve = resolve;
      ctx.reject = reject;
    });
  }
  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
  AsyncFunctionContext.prototype.end = function() {
    switch (this.state) {
      case END_STATE:
        this.resolve(this.returnValue);
        break;
      case RETHROW_STATE:
        this.reject(this.storedException);
        break;
      default:
        this.reject(getInternalError(this.state));
    }
  };
  AsyncFunctionContext.prototype.handleException = function() {
    this.state = RETHROW_STATE;
  };
  function asyncWrap(innerFunction, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new AsyncFunctionContext();
    ctx.createCallback = function(newState) {
      return function(value) {
        ctx.state = newState;
        ctx.value = value;
        moveNext(ctx);
      };
    };
    ctx.errback = function(err) {
      handleCatch(ctx, err);
      moveNext(ctx);
    };
    moveNext(ctx);
    return ctx.result;
  }
  function getMoveNext(innerFunction, self) {
    return function(ctx) {
      while (true) {
        try {
          return innerFunction.call(self, ctx);
        } catch (ex) {
          handleCatch(ctx, ex);
        }
      }
    };
  }
  function handleCatch(ctx, ex) {
    ctx.storedException = ex;
    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
    if (!last) {
      ctx.handleException(ex);
      return;
    }
    ctx.state = last.catch !== undefined ? last.catch : last.finally;
    if (last.finallyFallThrough !== undefined)
      ctx.finallyFallThrough = last.finallyFallThrough;
  }
  $traceurRuntime.asyncWrap = asyncWrap;
  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
})();
(function() {
  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
    var out = [];
    if (opt_scheme) {
      out.push(opt_scheme, ':');
    }
    if (opt_domain) {
      out.push('//');
      if (opt_userInfo) {
        out.push(opt_userInfo, '@');
      }
      out.push(opt_domain);
      if (opt_port) {
        out.push(':', opt_port);
      }
    }
    if (opt_path) {
      out.push(opt_path);
    }
    if (opt_queryData) {
      out.push('?', opt_queryData);
    }
    if (opt_fragment) {
      out.push('#', opt_fragment);
    }
    return out.join('');
  }
  ;
  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
  var ComponentIndex = {
    SCHEME: 1,
    USER_INFO: 2,
    DOMAIN: 3,
    PORT: 4,
    PATH: 5,
    QUERY_DATA: 6,
    FRAGMENT: 7
  };
  function split(uri) {
    return (uri.match(splitRe));
  }
  function removeDotSegments(path) {
    if (path === '/')
      return '/';
    var leadingSlash = path[0] === '/' ? '/' : '';
    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
    var segments = path.split('/');
    var out = [];
    var up = 0;
    for (var pos = 0; pos < segments.length; pos++) {
      var segment = segments[pos];
      switch (segment) {
        case '':
        case '.':
          break;
        case '..':
          if (out.length)
            out.pop();
          else
            up++;
          break;
        default:
          out.push(segment);
      }
    }
    if (!leadingSlash) {
      while (up-- > 0) {
        out.unshift('..');
      }
      if (out.length === 0)
        out.push('.');
    }
    return leadingSlash + out.join('/') + trailingSlash;
  }
  function joinAndCanonicalizePath(parts) {
    var path = parts[ComponentIndex.PATH] || '';
    path = removeDotSegments(path);
    parts[ComponentIndex.PATH] = path;
    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
  }
  function canonicalizeUrl(url) {
    var parts = split(url);
    return joinAndCanonicalizePath(parts);
  }
  function resolveUrl(base, url) {
    var parts = split(url);
    var baseParts = split(base);
    if (parts[ComponentIndex.SCHEME]) {
      return joinAndCanonicalizePath(parts);
    } else {
      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
    }
    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
      if (!parts[i]) {
        parts[i] = baseParts[i];
      }
    }
    if (parts[ComponentIndex.PATH][0] == '/') {
      return joinAndCanonicalizePath(parts);
    }
    var path = baseParts[ComponentIndex.PATH];
    var index = path.lastIndexOf('/');
    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
    parts[ComponentIndex.PATH] = path;
    return joinAndCanonicalizePath(parts);
  }
  function isAbsolute(name) {
    if (!name)
      return false;
    if (name[0] === '/')
      return true;
    var parts = split(name);
    if (parts[ComponentIndex.SCHEME])
      return true;
    return false;
  }
  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
  $traceurRuntime.isAbsolute = isAbsolute;
  $traceurRuntime.removeDotSegments = removeDotSegments;
  $traceurRuntime.resolveUrl = resolveUrl;
})();
(function() {
  'use strict';
  var types = {
    any: {name: 'any'},
    boolean: {name: 'boolean'},
    number: {name: 'number'},
    string: {name: 'string'},
    symbol: {name: 'symbol'},
    void: {name: 'void'}
  };
  var GenericType = function GenericType(type, argumentTypes) {
    this.type = type;
    this.argumentTypes = argumentTypes;
  };
  ($traceurRuntime.createClass)(GenericType, {}, {});
  var typeRegister = Object.create(null);
  function genericType(type) {
    for (var argumentTypes = [],
        $__1 = 1; $__1 < arguments.length; $__1++)
      argumentTypes[$__1 - 1] = arguments[$__1];
    var typeMap = typeRegister;
    var key = $traceurRuntime.getOwnHashObject(type).hash;
    if (!typeMap[key]) {
      typeMap[key] = Object.create(null);
    }
    typeMap = typeMap[key];
    for (var i = 0; i < argumentTypes.length - 1; i++) {
      key = $traceurRuntime.getOwnHashObject(argumentTypes[i]).hash;
      if (!typeMap[key]) {
        typeMap[key] = Object.create(null);
      }
      typeMap = typeMap[key];
    }
    var tail = argumentTypes[argumentTypes.length - 1];
    key = $traceurRuntime.getOwnHashObject(tail).hash;
    if (!typeMap[key]) {
      typeMap[key] = new GenericType(type, argumentTypes);
    }
    return typeMap[key];
  }
  $traceurRuntime.GenericType = GenericType;
  $traceurRuntime.genericType = genericType;
  $traceurRuntime.type = types;
})();
(function(global) {
  'use strict';
  var $__2 = $traceurRuntime,
      canonicalizeUrl = $__2.canonicalizeUrl,
      resolveUrl = $__2.resolveUrl,
      isAbsolute = $__2.isAbsolute;
  var moduleInstantiators = Object.create(null);
  var baseURL;
  if (global.location && global.location.href)
    baseURL = resolveUrl(global.location.href, './');
  else
    baseURL = '';
  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
    this.url = url;
    this.value_ = uncoatedModule;
  };
  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
    this.message = this.constructor.name + ': ' + this.stripCause(cause) + ' in ' + erroneousModuleName;
    if (!(cause instanceof $ModuleEvaluationError) && cause.stack)
      this.stack = this.stripStack(cause.stack);
    else
      this.stack = '';
  };
  var $ModuleEvaluationError = ModuleEvaluationError;
  ($traceurRuntime.createClass)(ModuleEvaluationError, {
    stripError: function(message) {
      return message.replace(/.*Error:/, this.constructor.name + ':');
    },
    stripCause: function(cause) {
      if (!cause)
        return '';
      if (!cause.message)
        return cause + '';
      return this.stripError(cause.message);
    },
    loadedBy: function(moduleName) {
      this.stack += '\n loaded by ' + moduleName;
    },
    stripStack: function(causeStack) {
      var stack = [];
      causeStack.split('\n').some((function(frame) {
        if (/UncoatedModuleInstantiator/.test(frame))
          return true;
        stack.push(frame);
      }));
      stack[0] = this.stripError(stack[0]);
      return stack.join('\n');
    }
  }, {}, Error);
  function beforeLines(lines, number) {
    var result = [];
    var first = number - 3;
    if (first < 0)
      first = 0;
    for (var i = first; i < number; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function afterLines(lines, number) {
    var last = number + 1;
    if (last > lines.length - 1)
      last = lines.length - 1;
    var result = [];
    for (var i = number; i <= last; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function columnSpacing(columns) {
    var result = '';
    for (var i = 0; i < columns - 1; i++) {
      result += '-';
    }
    return result;
  }
  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
    $traceurRuntime.superConstructor($UncoatedModuleInstantiator).call(this, url, null);
    this.func = func;
  };
  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
      if (this.value_)
        return this.value_;
      try {
        var relativeRequire;
        if (typeof $traceurRuntime !== undefined) {
          relativeRequire = $traceurRuntime.require.bind(null, this.url);
        }
        return this.value_ = this.func.call(global, relativeRequire);
      } catch (ex) {
        if (ex instanceof ModuleEvaluationError) {
          ex.loadedBy(this.url);
          throw ex;
        }
        if (ex.stack) {
          var lines = this.func.toString().split('\n');
          var evaled = [];
          ex.stack.split('\n').some(function(frame) {
            if (frame.indexOf('UncoatedModuleInstantiator.getUncoatedModule') > 0)
              return true;
            var m = /(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(frame);
            if (m) {
              var line = parseInt(m[2], 10);
              evaled = evaled.concat(beforeLines(lines, line));
              evaled.push(columnSpacing(m[3]) + '^');
              evaled = evaled.concat(afterLines(lines, line));
              evaled.push('= = = = = = = = =');
            } else {
              evaled.push(frame);
            }
          });
          ex.stack = evaled.join('\n');
        }
        throw new ModuleEvaluationError(this.url, ex);
      }
    }}, {}, UncoatedModuleEntry);
  function getUncoatedModuleInstantiator(name) {
    if (!name)
      return;
    var url = ModuleStore.normalize(name);
    return moduleInstantiators[url];
  }
  ;
  var moduleInstances = Object.create(null);
  var liveModuleSentinel = {};
  function Module(uncoatedModule) {
    var isLive = arguments[1];
    var coatedModule = Object.create(null);
    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
      var getter,
          value;
      if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
          getter = descr.get;
      }
      if (!getter) {
        value = uncoatedModule[name];
        getter = function() {
          return value;
        };
      }
      Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
      });
    }));
    Object.preventExtensions(coatedModule);
    return coatedModule;
  }
  var ModuleStore = {
    normalize: function(name, refererName, refererAddress) {
      if (typeof name !== 'string')
        throw new TypeError('module name must be a string, not ' + typeof name);
      if (isAbsolute(name))
        return canonicalizeUrl(name);
      if (/[^\.]\/\.\.\//.test(name)) {
        throw new Error('module name embeds /../: ' + name);
      }
      if (name[0] === '.' && refererName)
        return resolveUrl(refererName, name);
      return canonicalizeUrl(name);
    },
    get: function(normalizedName) {
      var m = getUncoatedModuleInstantiator(normalizedName);
      if (!m)
        return undefined;
      var moduleInstance = moduleInstances[m.url];
      if (moduleInstance)
        return moduleInstance;
      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
      return moduleInstances[m.url] = moduleInstance;
    },
    set: function(normalizedName, module) {
      normalizedName = String(normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
        return module;
      }));
      moduleInstances[normalizedName] = module;
    },
    get baseURL() {
      return baseURL;
    },
    set baseURL(v) {
      baseURL = String(v);
    },
    registerModule: function(name, deps, func) {
      var normalizedName = ModuleStore.normalize(name);
      if (moduleInstantiators[normalizedName])
        throw new Error('duplicate module named ' + normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
    },
    bundleStore: Object.create(null),
    register: function(name, deps, func) {
      if (!deps || !deps.length && !func.length) {
        this.registerModule(name, deps, func);
      } else {
        this.bundleStore[name] = {
          deps: deps,
          execute: function() {
            var $__0 = arguments;
            var depMap = {};
            deps.forEach((function(dep, index) {
              return depMap[dep] = $__0[index];
            }));
            var registryEntry = func.call(this, depMap);
            registryEntry.execute.call(this);
            return registryEntry.exports;
          }
        };
      }
    },
    getAnonymousModule: function(func) {
      return new Module(func.call(global), liveModuleSentinel);
    },
    getForTesting: function(name) {
      var $__0 = this;
      if (!this.testingPrefix_) {
        Object.keys(moduleInstances).some((function(key) {
          var m = /(traceur@[^\/]*\/)/.exec(key);
          if (m) {
            $__0.testingPrefix_ = m[1];
            return true;
          }
        }));
      }
      return this.get(this.testingPrefix_ + name);
    }
  };
  var moduleStoreModule = new Module({ModuleStore: ModuleStore});
  ModuleStore.set('@traceur/src/runtime/ModuleStore', moduleStoreModule);
  ModuleStore.set('@traceur/src/runtime/ModuleStore.js', moduleStoreModule);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
  };
  $traceurRuntime.ModuleStore = ModuleStore;
  global.System = {
    register: ModuleStore.register.bind(ModuleStore),
    registerModule: ModuleStore.registerModule.bind(ModuleStore),
    get: ModuleStore.get,
    set: ModuleStore.set,
    normalize: ModuleStore.normalize
  };
  $traceurRuntime.getModuleImpl = function(name) {
    var instantiator = getUncoatedModuleInstantiator(name);
    return instantiator && instantiator.getUncoatedModule();
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/utils.js";
  var $ceil = Math.ceil;
  var $floor = Math.floor;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var $pow = Math.pow;
  var $min = Math.min;
  var toObject = $traceurRuntime.toObject;
  function toUint32(x) {
    return x >>> 0;
  }
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function isCallable(x) {
    return typeof x === 'function';
  }
  function isNumber(x) {
    return typeof x === 'number';
  }
  function toInteger(x) {
    x = +x;
    if ($isNaN(x))
      return 0;
    if (x === 0 || !$isFinite(x))
      return x;
    return x > 0 ? $floor(x) : $ceil(x);
  }
  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
  function toLength(x) {
    var len = toInteger(x);
    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
  }
  function checkIterable(x) {
    return !isObject(x) ? undefined : x[Symbol.iterator];
  }
  function isConstructor(x) {
    return isCallable(x);
  }
  function createIteratorResultObject(value, done) {
    return {
      value: value,
      done: done
    };
  }
  function maybeDefine(object, name, descr) {
    if (!(name in object)) {
      Object.defineProperty(object, name, descr);
    }
  }
  function maybeDefineMethod(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  function maybeDefineConst(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: false,
      enumerable: false,
      writable: false
    });
  }
  function maybeAddFunctions(object, functions) {
    for (var i = 0; i < functions.length; i += 2) {
      var name = functions[i];
      var value = functions[i + 1];
      maybeDefineMethod(object, name, value);
    }
  }
  function maybeAddConsts(object, consts) {
    for (var i = 0; i < consts.length; i += 2) {
      var name = consts[i];
      var value = consts[i + 1];
      maybeDefineConst(object, name, value);
    }
  }
  function maybeAddIterator(object, func, Symbol) {
    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
      return;
    if (object['@@iterator'])
      func = object['@@iterator'];
    Object.defineProperty(object, Symbol.iterator, {
      value: func,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  var polyfills = [];
  function registerPolyfill(func) {
    polyfills.push(func);
  }
  function polyfillAll(global) {
    polyfills.forEach((function(f) {
      return f(global);
    }));
  }
  return {
    get toObject() {
      return toObject;
    },
    get toUint32() {
      return toUint32;
    },
    get isObject() {
      return isObject;
    },
    get isCallable() {
      return isCallable;
    },
    get isNumber() {
      return isNumber;
    },
    get toInteger() {
      return toInteger;
    },
    get toLength() {
      return toLength;
    },
    get checkIterable() {
      return checkIterable;
    },
    get isConstructor() {
      return isConstructor;
    },
    get createIteratorResultObject() {
      return createIteratorResultObject;
    },
    get maybeDefine() {
      return maybeDefine;
    },
    get maybeDefineMethod() {
      return maybeDefineMethod;
    },
    get maybeDefineConst() {
      return maybeDefineConst;
    },
    get maybeAddFunctions() {
      return maybeAddFunctions;
    },
    get maybeAddConsts() {
      return maybeAddConsts;
    },
    get maybeAddIterator() {
      return maybeAddIterator;
    },
    get registerPolyfill() {
      return registerPolyfill;
    },
    get polyfillAll() {
      return polyfillAll;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Map.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  var deletedSentinel = {};
  function lookupIndex(map, key) {
    if (isObject(key)) {
      var hashObject = getOwnHashObject(key);
      return hashObject && map.objectIndex_[hashObject.hash];
    }
    if (typeof key === 'string')
      return map.stringIndex_[key];
    return map.primitiveIndex_[key];
  }
  function initMap(map) {
    map.entries_ = [];
    map.objectIndex_ = Object.create(null);
    map.stringIndex_ = Object.create(null);
    map.primitiveIndex_ = Object.create(null);
    map.deletedCount_ = 0;
  }
  var Map = function Map() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Map called on incompatible type');
    if ($hasOwnProperty.call(this, 'entries_')) {
      throw new TypeError('Map can not be reentrantly initialised');
    }
    initMap(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__2 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var $__4 = $__3.value,
            key = $__4[0],
            value = $__4[1];
        {
          this.set(key, value);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Map, {
    get size() {
      return this.entries_.length / 2 - this.deletedCount_;
    },
    get: function(key) {
      var index = lookupIndex(this, key);
      if (index !== undefined)
        return this.entries_[index + 1];
    },
    set: function(key, value) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index = lookupIndex(this, key);
      if (index !== undefined) {
        this.entries_[index + 1] = value;
      } else {
        index = this.entries_.length;
        this.entries_[index] = key;
        this.entries_[index + 1] = value;
        if (objectMode) {
          var hashObject = getOwnHashObject(key);
          var hash = hashObject.hash;
          this.objectIndex_[hash] = index;
        } else if (stringMode) {
          this.stringIndex_[key] = index;
        } else {
          this.primitiveIndex_[key] = index;
        }
      }
      return this;
    },
    has: function(key) {
      return lookupIndex(this, key) !== undefined;
    },
    delete: function(key) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index;
      var hash;
      if (objectMode) {
        var hashObject = getOwnHashObject(key);
        if (hashObject) {
          index = this.objectIndex_[hash = hashObject.hash];
          delete this.objectIndex_[hash];
        }
      } else if (stringMode) {
        index = this.stringIndex_[key];
        delete this.stringIndex_[key];
      } else {
        index = this.primitiveIndex_[key];
        delete this.primitiveIndex_[key];
      }
      if (index !== undefined) {
        this.entries_[index] = deletedSentinel;
        this.entries_[index + 1] = undefined;
        this.deletedCount_++;
        return true;
      }
      return false;
    },
    clear: function() {
      initMap(this);
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      for (var i = 0; i < this.entries_.length; i += 2) {
        var key = this.entries_[i];
        var value = this.entries_[i + 1];
        if (key === deletedSentinel)
          continue;
        callbackFn.call(thisArg, value, key, this);
      }
    },
    entries: $traceurRuntime.initGeneratorFunction(function $__5() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return [key, value];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    }),
    keys: $traceurRuntime.initGeneratorFunction(function $__6() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return key;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    }),
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return value;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    })
  }, {});
  Object.defineProperty(Map.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Map.prototype.entries
  });
  function polyfillMap(global) {
    var $__4 = global,
        Object = $__4.Object,
        Symbol = $__4.Symbol;
    if (!global.Map)
      global.Map = Map;
    var mapPrototype = global.Map.prototype;
    if (mapPrototype.entries === undefined)
      global.Map = Map;
    if (mapPrototype.entries) {
      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillMap);
  return {
    get Map() {
      return Map;
    },
    get polyfillMap() {
      return polyfillMap;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Set.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var Map = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js").Map;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  function initSet(set) {
    set.map_ = new Map();
  }
  var Set = function Set() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Set called on incompatible type');
    if ($hasOwnProperty.call(this, 'map_')) {
      throw new TypeError('Set can not be reentrantly initialised');
    }
    initSet(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__4 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__5; !($__5 = $__4.next()).done; ) {
        var item = $__5.value;
        {
          this.add(item);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Set, {
    get size() {
      return this.map_.size;
    },
    has: function(key) {
      return this.map_.has(key);
    },
    add: function(key) {
      this.map_.set(key, key);
      return this;
    },
    delete: function(key) {
      return this.map_.delete(key);
    },
    clear: function() {
      return this.map_.clear();
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      var $__2 = this;
      return this.map_.forEach((function(value, key) {
        callbackFn.call(thisArg, key, key, $__2);
      }));
    },
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var $__8,
          $__9;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = this.map_.keys()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__9.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__9.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__9.value;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }),
    entries: $traceurRuntime.initGeneratorFunction(function $__10() {
      var $__11,
          $__12;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__11 = this.map_.entries()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__12.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__12.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__12.value;
            default:
              return $ctx.end();
          }
      }, $__10, this);
    })
  }, {});
  Object.defineProperty(Set.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  Object.defineProperty(Set.prototype, 'keys', {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  function polyfillSet(global) {
    var $__6 = global,
        Object = $__6.Object,
        Symbol = $__6.Symbol;
    if (!global.Set)
      global.Set = Set;
    var setPrototype = global.Set.prototype;
    if (setPrototype.values) {
      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillSet);
  return {
    get Set() {
      return Set;
    },
    get polyfillSet() {
      return polyfillSet;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js" + '');
System.registerModule("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js";
  var len = 0;
  function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      scheduleFlush();
    }
  }
  var $__default = asap;
  var browserGlobal = (typeof window !== 'undefined') ? window : {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
  function useNextTick() {
    return function() {
      process.nextTick(flush);
    };
  }
  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, {characterData: true});
    return function() {
      node.data = (iterations = ++iterations % 2);
    };
  }
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function() {
      channel.port2.postMessage(0);
    };
  }
  function useSetTimeout() {
    return function() {
      setTimeout(flush, 1);
    };
  }
  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];
      callback(arg);
      queue[i] = undefined;
      queue[i + 1] = undefined;
    }
    len = 0;
  }
  var scheduleFlush;
  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else {
    scheduleFlush = useSetTimeout();
  }
  return {get default() {
      return $__default;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js";
  var async = System.get("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js").default;
  var registerPolyfill = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").registerPolyfill;
  var promiseRaw = {};
  function isPromise(x) {
    return x && typeof x === 'object' && x.status_ !== undefined;
  }
  function idResolveHandler(x) {
    return x;
  }
  function idRejectHandler(x) {
    throw x;
  }
  function chain(promise) {
    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
    var deferred = getDeferred(promise.constructor);
    switch (promise.status_) {
      case undefined:
        throw TypeError;
      case 0:
        promise.onResolve_.push(onResolve, deferred);
        promise.onReject_.push(onReject, deferred);
        break;
      case +1:
        promiseEnqueue(promise.value_, [onResolve, deferred]);
        break;
      case -1:
        promiseEnqueue(promise.value_, [onReject, deferred]);
        break;
    }
    return deferred.promise;
  }
  function getDeferred(C) {
    if (this === $Promise) {
      var promise = promiseInit(new $Promise(promiseRaw));
      return {
        promise: promise,
        resolve: (function(x) {
          promiseResolve(promise, x);
        }),
        reject: (function(r) {
          promiseReject(promise, r);
        })
      };
    } else {
      var result = {};
      result.promise = new C((function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      }));
      return result;
    }
  }
  function promiseSet(promise, status, value, onResolve, onReject) {
    promise.status_ = status;
    promise.value_ = value;
    promise.onResolve_ = onResolve;
    promise.onReject_ = onReject;
    return promise;
  }
  function promiseInit(promise) {
    return promiseSet(promise, 0, undefined, [], []);
  }
  var Promise = function Promise(resolver) {
    if (resolver === promiseRaw)
      return;
    if (typeof resolver !== 'function')
      throw new TypeError;
    var promise = promiseInit(this);
    try {
      resolver((function(x) {
        promiseResolve(promise, x);
      }), (function(r) {
        promiseReject(promise, r);
      }));
    } catch (e) {
      promiseReject(promise, e);
    }
  };
  ($traceurRuntime.createClass)(Promise, {
    catch: function(onReject) {
      return this.then(undefined, onReject);
    },
    then: function(onResolve, onReject) {
      if (typeof onResolve !== 'function')
        onResolve = idResolveHandler;
      if (typeof onReject !== 'function')
        onReject = idRejectHandler;
      var that = this;
      var constructor = this.constructor;
      return chain(this, function(x) {
        x = promiseCoerce(constructor, x);
        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
      }, onReject);
    }
  }, {
    resolve: function(x) {
      if (this === $Promise) {
        if (isPromise(x)) {
          return x;
        }
        return promiseSet(new $Promise(promiseRaw), +1, x);
      } else {
        return new this(function(resolve, reject) {
          resolve(x);
        });
      }
    },
    reject: function(r) {
      if (this === $Promise) {
        return promiseSet(new $Promise(promiseRaw), -1, r);
      } else {
        return new this((function(resolve, reject) {
          reject(r);
        }));
      }
    },
    all: function(values) {
      var deferred = getDeferred(this);
      var resolutions = [];
      try {
        var count = values.length;
        if (count === 0) {
          deferred.resolve(resolutions);
        } else {
          for (var i = 0; i < values.length; i++) {
            this.resolve(values[i]).then(function(i, x) {
              resolutions[i] = x;
              if (--count === 0)
                deferred.resolve(resolutions);
            }.bind(undefined, i), (function(r) {
              deferred.reject(r);
            }));
          }
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    },
    race: function(values) {
      var deferred = getDeferred(this);
      try {
        for (var i = 0; i < values.length; i++) {
          this.resolve(values[i]).then((function(x) {
            deferred.resolve(x);
          }), (function(r) {
            deferred.reject(r);
          }));
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }
  });
  var $Promise = Promise;
  var $PromiseReject = $Promise.reject;
  function promiseResolve(promise, x) {
    promiseDone(promise, +1, x, promise.onResolve_);
  }
  function promiseReject(promise, r) {
    promiseDone(promise, -1, r, promise.onReject_);
  }
  function promiseDone(promise, status, value, reactions) {
    if (promise.status_ !== 0)
      return;
    promiseEnqueue(value, reactions);
    promiseSet(promise, status, value);
  }
  function promiseEnqueue(value, tasks) {
    async((function() {
      for (var i = 0; i < tasks.length; i += 2) {
        promiseHandle(value, tasks[i], tasks[i + 1]);
      }
    }));
  }
  function promiseHandle(value, handler, deferred) {
    try {
      var result = handler(value);
      if (result === deferred.promise)
        throw new TypeError;
      else if (isPromise(result))
        chain(result, deferred.resolve, deferred.reject);
      else
        deferred.resolve(result);
    } catch (e) {
      try {
        deferred.reject(e);
      } catch (e) {}
    }
  }
  var thenableSymbol = '@@thenable';
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function promiseCoerce(constructor, x) {
    if (!isPromise(x) && isObject(x)) {
      var then;
      try {
        then = x.then;
      } catch (r) {
        var promise = $PromiseReject.call(constructor, r);
        x[thenableSymbol] = promise;
        return promise;
      }
      if (typeof then === 'function') {
        var p = x[thenableSymbol];
        if (p) {
          return p;
        } else {
          var deferred = getDeferred(constructor);
          x[thenableSymbol] = deferred.promise;
          try {
            then.call(x, deferred.resolve, deferred.reject);
          } catch (r) {
            deferred.reject(r);
          }
          return deferred.promise;
        }
      }
    }
    return x;
  }
  function polyfillPromise(global) {
    if (!global.Promise)
      global.Promise = Promise;
  }
  registerPolyfill(polyfillPromise);
  return {
    get Promise() {
      return Promise;
    },
    get polyfillPromise() {
      return polyfillPromise;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      createIteratorResultObject = $__0.createIteratorResultObject,
      isObject = $__0.isObject;
  var toProperty = $traceurRuntime.toProperty;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var iteratedString = Symbol('iteratedString');
  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
  var StringIterator = function StringIterator() {};
  ($traceurRuntime.createClass)(StringIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var o = this;
      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
        throw new TypeError('this must be a StringIterator object');
      }
      var s = o[toProperty(iteratedString)];
      if (s === undefined) {
        return createIteratorResultObject(undefined, true);
      }
      var position = o[toProperty(stringIteratorNextIndex)];
      var len = s.length;
      if (position >= len) {
        o[toProperty(iteratedString)] = undefined;
        return createIteratorResultObject(undefined, true);
      }
      var first = s.charCodeAt(position);
      var resultString;
      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
        resultString = String.fromCharCode(first);
      } else {
        var second = s.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          resultString = String.fromCharCode(first);
        } else {
          resultString = String.fromCharCode(first) + String.fromCharCode(second);
        }
      }
      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
      return createIteratorResultObject(resultString, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createStringIterator(string) {
    var s = String(string);
    var iterator = Object.create(StringIterator.prototype);
    iterator[toProperty(iteratedString)] = s;
    iterator[toProperty(stringIteratorNextIndex)] = 0;
    return iterator;
  }
  return {get createStringIterator() {
      return createStringIterator;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/String.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/String.js";
  var createStringIterator = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js").createStringIterator;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill;
  var $toString = Object.prototype.toString;
  var $indexOf = String.prototype.indexOf;
  var $lastIndexOf = String.prototype.lastIndexOf;
  function startsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (isNaN(pos)) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    return $indexOf.call(string, searchString, pos) == start;
  }
  function endsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var pos = stringLength;
    if (arguments.length > 1) {
      var position = arguments[1];
      if (position !== undefined) {
        pos = position ? Number(position) : 0;
        if (isNaN(pos)) {
          pos = 0;
        }
      }
    }
    var end = Math.min(Math.max(pos, 0), stringLength);
    var start = end - searchLength;
    if (start < 0) {
      return false;
    }
    return $lastIndexOf.call(string, searchString, start) == start;
  }
  function includes(search) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    if (search && $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (pos != pos) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    if (searchLength + start > stringLength) {
      return false;
    }
    return $indexOf.call(string, searchString, pos) != -1;
  }
  function repeat(count) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var n = count ? Number(count) : 0;
    if (isNaN(n)) {
      n = 0;
    }
    if (n < 0 || n == Infinity) {
      throw RangeError();
    }
    if (n == 0) {
      return '';
    }
    var result = '';
    while (n--) {
      result += string;
    }
    return result;
  }
  function codePointAt(position) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (isNaN(index)) {
      index = 0;
    }
    if (index < 0 || index >= size) {
      return undefined;
    }
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  }
  function raw(callsite) {
    var raw = callsite.raw;
    var len = raw.length >>> 0;
    if (len === 0)
      return '';
    var s = '';
    var i = 0;
    while (true) {
      s += raw[i];
      if (i + 1 === len)
        return s;
      s += arguments[++i];
    }
  }
  function fromCodePoint() {
    var codeUnits = [];
    var floor = Math.floor;
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return '';
    }
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
      if (codePoint <= 0xFFFF) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = (codePoint % 0x400) + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
    }
    return String.fromCharCode.apply(null, codeUnits);
  }
  function stringPrototypeIterator() {
    var o = $traceurRuntime.checkObjectCoercible(this);
    var s = String(o);
    return createStringIterator(s);
  }
  function polyfillString(global) {
    var String = global.String;
    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'endsWith', endsWith, 'includes', includes, 'repeat', repeat, 'startsWith', startsWith]);
    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
  }
  registerPolyfill(polyfillString);
  return {
    get startsWith() {
      return startsWith;
    },
    get endsWith() {
      return endsWith;
    },
    get includes() {
      return includes;
    },
    get repeat() {
      return repeat;
    },
    get codePointAt() {
      return codePointAt;
    },
    get raw() {
      return raw;
    },
    get fromCodePoint() {
      return fromCodePoint;
    },
    get stringPrototypeIterator() {
      return stringPrototypeIterator;
    },
    get polyfillString() {
      return polyfillString;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/String.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      toObject = $__0.toObject,
      toUint32 = $__0.toUint32,
      createIteratorResultObject = $__0.createIteratorResultObject;
  var ARRAY_ITERATOR_KIND_KEYS = 1;
  var ARRAY_ITERATOR_KIND_VALUES = 2;
  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
  var ArrayIterator = function ArrayIterator() {};
  ($traceurRuntime.createClass)(ArrayIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var iterator = toObject(this);
      var array = iterator.iteratorObject_;
      if (!array) {
        throw new TypeError('Object is not an ArrayIterator');
      }
      var index = iterator.arrayIteratorNextIndex_;
      var itemKind = iterator.arrayIterationKind_;
      var length = toUint32(array.length);
      if (index >= length) {
        iterator.arrayIteratorNextIndex_ = Infinity;
        return createIteratorResultObject(undefined, true);
      }
      iterator.arrayIteratorNextIndex_ = index + 1;
      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
        return createIteratorResultObject(array[index], false);
      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
        return createIteratorResultObject([index, array[index]], false);
      return createIteratorResultObject(index, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createArrayIterator(array, kind) {
    var object = toObject(array);
    var iterator = new ArrayIterator;
    iterator.iteratorObject_ = object;
    iterator.arrayIteratorNextIndex_ = 0;
    iterator.arrayIterationKind_ = kind;
    return iterator;
  }
  function entries() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
  }
  function keys() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
  }
  function values() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
  }
  return {
    get entries() {
      return entries;
    },
    get keys() {
      return keys;
    },
    get values() {
      return values;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Array.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js"),
      entries = $__0.entries,
      keys = $__0.keys,
      values = $__0.values;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      checkIterable = $__1.checkIterable,
      isCallable = $__1.isCallable,
      isConstructor = $__1.isConstructor,
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill,
      toInteger = $__1.toInteger,
      toLength = $__1.toLength,
      toObject = $__1.toObject;
  function from(arrLike) {
    var mapFn = arguments[1];
    var thisArg = arguments[2];
    var C = this;
    var items = toObject(arrLike);
    var mapping = mapFn !== undefined;
    var k = 0;
    var arr,
        len;
    if (mapping && !isCallable(mapFn)) {
      throw TypeError();
    }
    if (checkIterable(items)) {
      arr = isConstructor(C) ? new C() : [];
      for (var $__2 = items[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var item = $__3.value;
        {
          if (mapping) {
            arr[k] = mapFn.call(thisArg, item, k);
          } else {
            arr[k] = item;
          }
          k++;
        }
      }
      arr.length = k;
      return arr;
    }
    len = toLength(items.length);
    arr = isConstructor(C) ? new C(len) : new Array(len);
    for (; k < len; k++) {
      if (mapping) {
        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
      } else {
        arr[k] = items[k];
      }
    }
    arr.length = len;
    return arr;
  }
  function of() {
    for (var items = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      items[$__4] = arguments[$__4];
    var C = this;
    var len = items.length;
    var arr = isConstructor(C) ? new C(len) : new Array(len);
    for (var k = 0; k < len; k++) {
      arr[k] = items[k];
    }
    arr.length = len;
    return arr;
  }
  function fill(value) {
    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
    var end = arguments[2];
    var object = toObject(this);
    var len = toLength(object.length);
    var fillStart = toInteger(start);
    var fillEnd = end !== undefined ? toInteger(end) : len;
    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
    while (fillStart < fillEnd) {
      object[fillStart] = value;
      fillStart++;
    }
    return object;
  }
  function find(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg);
  }
  function findIndex(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg, true);
  }
  function findHelper(self, predicate) {
    var thisArg = arguments[2];
    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
    var object = toObject(self);
    var len = toLength(object.length);
    if (!isCallable(predicate)) {
      throw TypeError();
    }
    for (var i = 0; i < len; i++) {
      var value = object[i];
      if (predicate.call(thisArg, value, i, object)) {
        return returnIndex ? i : value;
      }
    }
    return returnIndex ? -1 : undefined;
  }
  function polyfillArray(global) {
    var $__5 = global,
        Array = $__5.Array,
        Object = $__5.Object,
        Symbol = $__5.Symbol;
    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
    maybeAddFunctions(Array, ['from', from, 'of', of]);
    maybeAddIterator(Array.prototype, values, Symbol);
    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
      return this;
    }, Symbol);
  }
  registerPolyfill(polyfillArray);
  return {
    get from() {
      return from;
    },
    get of() {
      return of;
    },
    get fill() {
      return fill;
    },
    get find() {
      return find;
    },
    get findIndex() {
      return findIndex;
    },
    get polyfillArray() {
      return polyfillArray;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Object.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill;
  var $__1 = $traceurRuntime,
      defineProperty = $__1.defineProperty,
      getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
      getOwnPropertyNames = $__1.getOwnPropertyNames,
      isPrivateName = $__1.isPrivateName,
      keys = $__1.keys;
  function is(left, right) {
    if (left === right)
      return left !== 0 || 1 / left === 1 / right;
    return left !== left && right !== right;
  }
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      var props = source == null ? [] : keys(source);
      var p,
          length = props.length;
      for (p = 0; p < length; p++) {
        var name = props[p];
        if (isPrivateName(name))
          continue;
        target[name] = source[name];
      }
    }
    return target;
  }
  function mixin(target, source) {
    var props = getOwnPropertyNames(source);
    var p,
        descriptor,
        length = props.length;
    for (p = 0; p < length; p++) {
      var name = props[p];
      if (isPrivateName(name))
        continue;
      descriptor = getOwnPropertyDescriptor(source, props[p]);
      defineProperty(target, props[p], descriptor);
    }
    return target;
  }
  function polyfillObject(global) {
    var Object = global.Object;
    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
  }
  registerPolyfill(polyfillObject);
  return {
    get is() {
      return is;
    },
    get assign() {
      return assign;
    },
    get mixin() {
      return mixin;
    },
    get polyfillObject() {
      return polyfillObject;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Number.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isNumber = $__0.isNumber,
      maybeAddConsts = $__0.maybeAddConsts,
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill,
      toInteger = $__0.toInteger;
  var $abs = Math.abs;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
  var EPSILON = Math.pow(2, -52);
  function NumberIsFinite(number) {
    return isNumber(number) && $isFinite(number);
  }
  ;
  function isInteger(number) {
    return NumberIsFinite(number) && toInteger(number) === number;
  }
  function NumberIsNaN(number) {
    return isNumber(number) && $isNaN(number);
  }
  ;
  function isSafeInteger(number) {
    if (NumberIsFinite(number)) {
      var integral = toInteger(number);
      if (integral === number)
        return $abs(integral) <= MAX_SAFE_INTEGER;
    }
    return false;
  }
  function polyfillNumber(global) {
    var Number = global.Number;
    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
  }
  registerPolyfill(polyfillNumber);
  return {
    get MAX_SAFE_INTEGER() {
      return MAX_SAFE_INTEGER;
    },
    get MIN_SAFE_INTEGER() {
      return MIN_SAFE_INTEGER;
    },
    get EPSILON() {
      return EPSILON;
    },
    get isFinite() {
      return NumberIsFinite;
    },
    get isInteger() {
      return isInteger;
    },
    get isNaN() {
      return NumberIsNaN;
    },
    get isSafeInteger() {
      return isSafeInteger;
    },
    get polyfillNumber() {
      return polyfillNumber;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js";
  var polyfillAll = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").polyfillAll;
  polyfillAll(Reflect.global);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
    polyfillAll(global);
  };
  return {};
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js" + '');

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":11,"path":10}],15:[function(require,module,exports){
"use strict";
"use strict";
var pool = require("typedarray-pool");
var ops = require("ndarray-ops");
var ndarray = require("ndarray");
var webglew = require("webglew");
var SUPPORTED_TYPES = ["uint8", "uint8_clamped", "uint16", "uint32", "int8", "int16", "int32", "float32"];
function GLBuffer(gl, type, handle, length, usage) {
  this.gl = gl;
  this.type = type;
  this.handle = handle;
  this.length = length;
  this.usage = usage;
}
var proto = GLBuffer.prototype;
proto.bind = function() {
  this.gl.bindBuffer(this.type, this.handle);
};
proto.unbind = function() {
  this.gl.bindBuffer(this.type, null);
};
proto.dispose = function() {
  this.gl.deleteBuffer(this.handle);
};
function updateTypeArray(gl, type, len, usage, data, offset) {
  var dataLen = data.length * data.BYTES_PER_ELEMENT;
  if (offset < 0) {
    gl.bufferData(type, data, usage);
    return dataLen;
  }
  if (dataLen + offset > len) {
    throw new Error("gl-buffer: If resizing buffer, must not specify offset");
  }
  gl.bufferSubData(type, offset, data);
  return len;
}
function makeScratchTypeArray(array, dtype) {
  var res = pool.malloc(array.length, dtype);
  var n = array.length;
  for (var i = 0; i < n; ++i) {
    res[i] = array[i];
  }
  return res;
}
function isPacked(shape, stride) {
  var n = 1;
  for (var i = stride.length - 1; i >= 0; --i) {
    if (stride[i] !== n) {
      return false;
    }
    n *= shape[i];
  }
  return true;
}
proto.update = function(array, offset) {
  if (typeof offset !== "number") {
    offset = -1;
  }
  this.bind();
  if (typeof array === "object" && typeof array.shape !== "undefined") {
    var dtype = array.dtype;
    if (SUPPORTED_TYPES.indexOf(dtype) < 0) {
      dtype = "float32";
    }
    if (this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      var wgl = webglew(this.gl);
      var ext = wgl.OES_element_index_uint;
      if (ext && dtype !== "uint16") {
        dtype = "uint32";
      } else {
        dtype = "uint16";
      }
    }
    if (dtype === array.dtype && isPacked(array.shape, array.stride)) {
      if (array.offset === 0 && array.data.length === array.shape[0]) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data, offset);
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data.subarray(array.offset, array.shape[0]), offset);
      }
    } else {
      var tmp = pool.malloc(array.size, dtype);
      var ndt = ndarray(tmp, array.shape);
      ops.assign(ndt, array);
      if (offset < 0) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp, offset);
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp.subarray(0, array.size), offset);
      }
      pool.free(tmp);
    }
  } else if (Array.isArray(array)) {
    var t;
    if (this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      t = makeScratchTypeArray(array, "uint16");
    } else {
      t = makeScratchTypeArray(array, "float32");
    }
    if (offset < 0) {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t, offset);
    } else {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t.subarray(0, array.length), offset);
    }
    pool.free(t);
  } else if (typeof array === "object" && typeof array.length === "number") {
    this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array, offset);
  } else if (typeof array === "number" || array === undefined) {
    if (offset >= 0) {
      throw new Error("gl-buffer: Cannot specify offset when resizing buffer");
    }
    array = array | 0;
    if (array <= 0) {
      array = 1;
    }
    this.gl.bufferData(this.type, array | 0, this.usage);
    this.length = array;
  } else {
    throw new Error("gl-buffer: Invalid data type");
  }
};
function createBuffer(gl, data, type, usage) {
  webglew(gl);
  type = type || gl.ARRAY_BUFFER;
  usage = usage || gl.DYNAMIC_DRAW;
  if (type !== gl.ARRAY_BUFFER && type !== gl.ELEMENT_ARRAY_BUFFER) {
    throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER");
  }
  if (usage !== gl.DYNAMIC_DRAW && usage !== gl.STATIC_DRAW && usage !== gl.STREAM_DRAW) {
    throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW");
  }
  var handle = gl.createBuffer();
  var result = new GLBuffer(gl, type, handle, 0, usage);
  result.update(data);
  return result;
}
module.exports = createBuffer;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-buffer/buffer.js
},{"ndarray":21,"ndarray-ops":16,"typedarray-pool":25,"webglew":27}],16:[function(require,module,exports){
"use strict"

var compile = require("cwise-compiler")

var EmptyProc = {
  body: "",
  args: [],
  thisVars: [],
  localVars: []
}

function fixup(x) {
  if(!x) {
    return EmptyProc
  }
  for(var i=0; i<x.args.length; ++i) {
    var a = x.args[i]
    if(i === 0) {
      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
    } else {
      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
    }
  }
  if(!x.thisVars) {
    x.thisVars = []
  }
  if(!x.localVars) {
    x.localVars = []
  }
  return x
}

function pcompile(user_args) {
  return compile({
    args:     user_args.args,
    pre:      fixup(user_args.pre),
    body:     fixup(user_args.body),
    post:     fixup(user_args.proc),
    funcName: user_args.funcName
  })
}

function makeOp(user_args) {
  var args = []
  for(var i=0; i<user_args.args.length; ++i) {
    args.push("a"+i)
  }
  var wrapper = new Function("P", [
    "return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"
  ].join(""))
  return wrapper(pcompile(user_args))
}

var assign_ops = {
  add:  "+",
  sub:  "-",
  mul:  "*",
  div:  "/",
  mod:  "%",
  band: "&",
  bor:  "|",
  bxor: "^",
  lshift: "<<",
  rshift: ">>",
  rrshift: ">>>"
}
;(function(){
  for(var id in assign_ops) {
    var op = assign_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a","b","c"],
             body: "a=b"+op+"c"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array","array"],
      body: {args:["a","b"],
             body:"a"+op+"=b"},
      rvalue: true,
      funcName: id+"eq"
    })
    exports[id+"s"] = makeOp({
      args: ["array", "array", "scalar"],
      body: {args:["a","b","s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"seq"] = makeOp({
      args: ["array","scalar"],
      body: {args:["a","s"],
             body:"a"+op+"=s"},
      rvalue: true,
      funcName: id+"seq"
    })
  }
})();

var unary_ops = {
  not: "!",
  bnot: "~",
  neg: "-",
  recip: "1.0/"
}
;(function(){
  for(var id in unary_ops) {
    var op = unary_ops[id]
    exports[id] = makeOp({
      args: ["array", "array"],
      body: {args:["a","b"],
             body:"a="+op+"b"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array"],
      body: {args:["a"],
             body:"a="+op+"a"},
      rvalue: true,
      count: 2,
      funcName: id+"eq"
    })
  }
})();

var binary_ops = {
  and: "&&",
  or: "||",
  eq: "===",
  neq: "!==",
  lt: "<",
  gt: ">",
  leq: "<=",
  geq: ">="
}
;(function() {
  for(var id in binary_ops) {
    var op = binary_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a", "b", "c"],
             body:"a=b"+op+"c"},
      funcName: id
    })
    exports[id+"s"] = makeOp({
      args: ["array","array","scalar"],
      body: {args:["a", "b", "s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"eq"] = makeOp({
      args: ["array", "array"],
      body: {args:["a", "b"],
             body:"a=a"+op+"b"},
      rvalue:true,
      count:2,
      funcName: id+"eq"
    })
    exports[id+"seq"] = makeOp({
      args: ["array", "scalar"],
      body: {args:["a","s"],
             body:"a=a"+op+"s"},
      rvalue:true,
      count:2,
      funcName: id+"seq"
    })
  }
})();

var math_unary = [
  "abs",
  "acos",
  "asin",
  "atan",
  "ceil",
  "cos",
  "exp",
  "floor",
  "log",
  "round",
  "sin",
  "sqrt",
  "tan"
]
;(function() {
  for(var i=0; i<math_unary.length; ++i) {
    var f = math_unary[i]
    exports[f] = makeOp({
                    args: ["array", "array"],
                    pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                    body: {args:["a","b"], body:"a=this_f(b)", thisVars:["this_f"]},
                    funcName: f
                  })
    exports[f+"eq"] = makeOp({
                      args: ["array"],
                      pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                      body: {args: ["a"], body:"a=this_f(a)", thisVars:["this_f"]},
                      rvalue: true,
                      count: 2,
                      funcName: f+"eq"
                    })
  }
})();

var math_comm = [
  "max",
  "min",
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_comm.length; ++i) {
    var f= math_comm[i]
    exports[f] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f
                })
    exports[f+"s"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f+"s"
                  })
    exports[f+"eq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"eq"
                  })
    exports[f+"seq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"seq"
                  })
  }
})();

var math_noncomm = [
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_noncomm.length; ++i) {
    var f= math_noncomm[i]
    exports[f+"op"] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"op"
                })
    exports[f+"ops"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"ops"
                  })
    exports[f+"opeq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"opeq"
                  })
    exports[f+"opseq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"opseq"
                  })
  }
})();

exports.any = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "if(a){return true}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return false"},
  funcName: "any"
})

exports.all = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1}], body: "if(!x){return false}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "all"
})

exports.sum = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s+=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "sum"
})

exports.prod = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=1"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s*=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "prod"
})

exports.norm2squared = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm2squared"
})
  
exports.norm2 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return Math.sqrt(this_s)"},
  funcName: "norm2"
})
  

exports.norminf = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:4}], body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norminf"
})

exports.norm1 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:3}], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm1"
})

exports.sup = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=-Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.inf = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.argmin = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})

exports.argmax = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})  

exports.random = makeOp({
  args: ["array"],
  pre: {args:[], body:"this_f=Math.random", thisVars:["this_f"]},
  body: {args: ["a"], body:"a=this_f()", thisVars:["this_f"]},
  funcName: "random"
})

exports.assign = makeOp({
  args:["array", "array"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assign" })

exports.assigns = makeOp({
  args:["array", "scalar"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assigns" })


exports.equals = compile({
  args:["array", "array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1},
               {name:"y", lvalue:false, rvalue:true, count:1}], 
        body: "if(x!==y){return false}", 
        localVars: [], 
        thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "equals"
})



},{"cwise-compiler":17}],17:[function(require,module,exports){
"use strict"

var createThunk = require("./lib/thunk.js")

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.arrayBlockIndices = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()
  
  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array" || (typeof arg_type === "object" && arg_type.blockIndices)) {
      proc.argTypes[i] = "array"
      proc.arrayArgs.push(i)
      proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }
  
  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }
  
  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug
  
  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"
  
  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

module.exports = compileCwise

},{"./lib/thunk.js":19}],18:[function(require,module,exports){
"use strict"

var uniq = require("uniq")

// This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
// TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
function innerFill(order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , has_index = proc.indexArgs.length>0
    , code = []
    , vars = []
    , idx=0, pidx=0, i, j
  for(i=0; i<dimension; ++i) { // Iteration variables
    vars.push(["i",i,"=0"].join(""))
  }
  //Compute scan deltas
  for(j=0; j<nargs; ++j) {
    for(i=0; i<dimension; ++i) {
      pidx = idx
      idx = order[i]
      if(i === 0) { // The innermost/fastest dimension's delta is simply its stride
        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
      } else { // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
      }
    }
  }
  code.push("var " + vars.join(","))
  //Scan loop
  for(i=dimension-1; i>=0; --i) { // Start at largest stride and work your way inwards
    idx = order[i]
    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
  }
  //Push body of inner loop
  code.push(body)
  //Advance scan pointers
  for(i=0; i<dimension; ++i) {
    pidx = idx
    idx = order[i]
    for(j=0; j<nargs; ++j) {
      code.push(["p",j,"+=d",j,"s",i].join(""))
    }
    if(has_index) {
      if(i > 0) {
        code.push(["index[",pidx,"]-=s",pidx].join(""))
      }
      code.push(["++index[",idx,"]"].join(""))
    }
    code.push("}")
  }
  return code.join("\n")
}

// Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
// TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
//       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
function outerFill(matched, order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , blockSize = proc.blockSize
    , has_index = proc.indexArgs.length > 0
    , code = []
  for(var i=0; i<nargs; ++i) {
    code.push(["var offset",i,"=p",i].join(""))
  }
  //Generate loops for unmatched dimensions
  // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
  // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
  for(var i=matched; i<dimension; ++i) {
    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join("")) // Iterate back to front
    code.push(["if(j",i,"<",blockSize,"){"].join("")) // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
    code.push(["s",order[i],"=j",i].join(""))
    code.push(["j",i,"=0"].join(""))
    code.push(["}else{s",order[i],"=",blockSize].join(""))
    code.push(["j",i,"-=",blockSize,"}"].join(""))
    if(has_index) {
      code.push(["index[",order[i],"]=j",i].join(""))
    }
  }
  for(var i=0; i<nargs; ++i) {
    var indexStr = ["offset"+i]
    for(var j=matched; j<dimension; ++j) {
      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
    }
    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
  }
  code.push(innerFill(order, proc, body))
  for(var i=matched; i<dimension; ++i) {
    code.push("}")
  }
  return code.join("\n")
}

//Count the number of compatible inner orders
// This is the length of the longest common prefix of the arrays in orders.
// Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
// This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
function countMatches(orders) {
  var matched = 0, dimension = orders[0].length
  while(matched < dimension) {
    for(var j=1; j<orders.length; ++j) {
      if(orders[j][matched] !== orders[0][matched]) {
        return matched
      }
    }
    ++matched
  }
  return matched
}

//Processes a block according to the given data types
// Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
function processBlock(block, proc, dtypes) {
  var code = block.body
  var pre = []
  var post = []
  for(var i=0; i<block.args.length; ++i) {
    var carg = block.args[i]
    if(carg.count <= 0) {
      continue
    }
    var re = new RegExp(carg.name, "g")
    var ptrStr = ""
    var arrNum = proc.arrayArgs.indexOf(i)
    switch(proc.argTypes[i]) {
      case "offset":
        var offArgIndex = proc.offsetArgIndex.indexOf(i)
        var offArg = proc.offsetArgs[offArgIndex]
        arrNum = offArg.array
        ptrStr = "+q" + offArgIndex // Adds offset to the "pointer" in the array
      case "array":
        ptrStr = "p" + arrNum + ptrStr
        var localStr = "l" + i
        var arrStr = "a" + arrNum
        if (proc.arrayBlockIndices[arrNum] === 0) { // Argument to body is just a single value from this array
          if(carg.count === 1) { // Argument/array used only once(?)
            if(dtypes[arrNum] === "generic") {
              if(carg.lvalue) {
                pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                code = code.replace(re, localStr)
                post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
              } else {
                code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
              }
            } else {
              code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
            }
          } else if(dtypes[arrNum] === "generic") {
            pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            }
          } else {
            pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
            }
          }
        } else { // Argument to body is a "block"
          var reStrArr = [carg.name], ptrStrArr = [ptrStr]
          for(var j=0; j<Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
            reStrArr.push("\\s*\\[([^\\]]+)\\]")
            ptrStrArr.push("$" + (j+1) + "*t" + arrNum + "b" + j) // Matched index times stride
          }
          re = new RegExp(reStrArr.join(""), "g")
          ptrStr = ptrStrArr.join("+")
          if(dtypes[arrNum] === "generic") {
            /*if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }*/
            throw new Error("cwise: Generic arrays not supported in combination with blocks!")
          } else {
            // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
          }
        }
      break
      case "scalar":
        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
      break
      case "index":
        code = code.replace(re, "index")
      break
      case "shape":
        code = code.replace(re, "shape")
      break
    }
  }
  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
}

function typeSummary(dtypes) {
  var summary = new Array(dtypes.length)
  var allEqual = true
  for(var i=0; i<dtypes.length; ++i) {
    var t = dtypes[i]
    var digits = t.match(/\d+/)
    if(!digits) {
      digits = ""
    } else {
      digits = digits[0]
    }
    if(t.charAt(0) === 0) {
      summary[i] = "u" + t.charAt(1) + digits
    } else {
      summary[i] = t.charAt(0) + digits
    }
    if(i > 0) {
      allEqual = allEqual && summary[i] === summary[i-1]
    }
  }
  if(allEqual) {
    return summary[0]
  }
  return summary.join("")
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {

  //Compute dimension
  // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
  var dimension = (typesig[1].length - Math.abs(proc.arrayBlockIndices[0]))|0
  var orders = new Array(proc.arrayArgs.length)
  var dtypes = new Array(proc.arrayArgs.length)
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    dtypes[i] = typesig[2*i]
    orders[i] = typesig[2*i+1]
  }
  
  //Determine where block and loop indices start and end
  var blockBegin = [], blockEnd = [] // These indices are exposed as blocks
  var loopBegin = [], loopEnd = [] // These indices are iterated over
  var loopOrders = [] // orders restricted to the loop indices
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    if (proc.arrayBlockIndices[i]<0) {
      loopBegin.push(0)
      loopEnd.push(dimension)
      blockBegin.push(dimension)
      blockEnd.push(dimension+proc.arrayBlockIndices[i])
    } else {
      loopBegin.push(proc.arrayBlockIndices[i]) // Non-negative
      loopEnd.push(proc.arrayBlockIndices[i]+dimension)
      blockBegin.push(0)
      blockEnd.push(proc.arrayBlockIndices[i])
    }
    var newOrder = []
    for(var j=0; j<orders[i].length; j++) {
      if (loopBegin[i]<=orders[i][j] && orders[i][j]<loopEnd[i]) {
        newOrder.push(orders[i][j]-loopBegin[i]) // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
      }
    }
    loopOrders.push(newOrder)
  }

  //First create arguments for procedure
  var arglist = ["SS"] // SS is the overall shape over which we iterate
  var code = ["'use strict'"]
  var vars = []
  
  for(var j=0; j<dimension; ++j) {
    vars.push(["s", j, "=SS[", j, "]"].join("")) // The limits for each dimension.
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    arglist.push("a"+i) // Actual data array
    arglist.push("t"+i) // Strides
    arglist.push("p"+i) // Offset in the array at which the data starts (also used for iterating over the data)
    
    for(var j=0; j<dimension; ++j) { // Unpack the strides into vars for looping
      vars.push(["t",i,"p",j,"=t",i,"[",loopBegin[i]+j,"]"].join(""))
    }
    
    for(var j=0; j<Math.abs(proc.arrayBlockIndices[i]); ++j) { // Unpack the strides into vars for block iteration
      vars.push(["t",i,"b",j,"=t",i,"[",blockBegin[i]+j,"]"].join(""))
    }
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    arglist.push("Y" + i)
  }
  if(proc.shapeArgs.length > 0) {
    vars.push("shape=SS.slice(0)") // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
  }
  if(proc.indexArgs.length > 0) {
    // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
    var zeros = new Array(dimension)
    for(var i=0; i<dimension; ++i) {
      zeros[i] = "0"
    }
    vars.push(["index=[", zeros.join(","), "]"].join(""))
  }
  for(var i=0; i<proc.offsetArgs.length; ++i) { // Offset arguments used for stencil operations
    var off_arg = proc.offsetArgs[i]
    var init_string = []
    for(var j=0; j<off_arg.offset.length; ++j) {
      if(off_arg.offset[j] === 0) {
        continue
      } else if(off_arg.offset[j] === 1) {
        init_string.push(["t", off_arg.array, "p", j].join(""))      
      } else {
        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
      }
    }
    if(init_string.length === 0) {
      vars.push("q" + i + "=0")
    } else {
      vars.push(["q", i, "=", init_string.join("+")].join(""))
    }
  }

  //Prepare this variables
  var thisVars = uniq([].concat(proc.pre.thisVars)
                      .concat(proc.body.thisVars)
                      .concat(proc.post.thisVars))
  vars = vars.concat(thisVars)
  code.push("var " + vars.join(","))
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    code.push("p"+i+"|=0")
  }
  
  //Inline prelude
  if(proc.pre.body.length > 3) {
    code.push(processBlock(proc.pre, proc, dtypes))
  }

  //Process body
  var body = processBlock(proc.body, proc, dtypes)
  var matched = countMatches(loopOrders)
  if(matched < dimension) {
    code.push(outerFill(matched, loopOrders[0], proc, body)) // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
  } else {
    code.push(innerFill(loopOrders[0], proc, body))
  }

  //Inline epilog
  if(proc.post.body.length > 3) {
    code.push(processBlock(proc.post, proc, dtypes))
  }
  
  if(proc.debug) {
    console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------")
  }
  
  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
  return f()
}
module.exports = generateCWiseOp

},{"uniq":20}],19:[function(require,module,exports){
"use strict"

// The function below is called when constructing a cwise function object, and does the following:
// A function object is constructed which accepts as argument a compilation function and returns another function.
// It is this other function that is eventually returned by createThunk, and this function is the one that actually
// checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
// The compilation passed to the first function object is used for compiling new functions.
// Once this function object is created, it is called with compile as argument, where the first argument of compile
// is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
// So createThunk roughly works like this:
// function createThunk(proc) {
//   var thunk = function(compileBound) {
//     var CACHED = {}
//     return function(arrays and scalars) {
//       if (dtype and order of arrays in CACHED) {
//         var func = CACHED[dtype and order of arrays]
//       } else {
//         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
//       }
//       return func(arrays and scalars)
//     }
//   }
//   return thunk(compile.bind1(proc))
// }

var compile = require("./compile.js")

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"
  
  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
                    Math.max(0,proc.arrayBlockIndices[i]),proc.arrayBlockIndices[i]<0?(","+proc.arrayBlockIndices[i]+")"):")"].join("")]
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))
  
  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------")
  }
  
  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

module.exports = createThunk

},{"./compile.js":18}],20:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],21:[function(require,module,exports){
(function (Buffer){
var iota = require("iota-array")

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")
var hasBuffer       = ((typeof Buffer) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")
  
  if(dimension === -1) {
    //Special case for trivial arrays
    var code = 
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]
    
  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)
  
  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }
  
  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }
  
  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }
  
  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")
  
  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")
  
  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")
  
  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")
  
  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")
    
  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(hasBuffer) {
    if(Buffer.isBuffer(data)) {
      return "buffer"
    }
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor
}).call(this,require("buffer").Buffer)

},{"buffer":4,"iota-array":22}],22:[function(require,module,exports){
"use strict"

function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota
},{}],23:[function(require,module,exports){
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use strict"; "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}


},{}],24:[function(require,module,exports){
"use strict"

function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe
},{}],25:[function(require,module,exports){
(function (global,Buffer){
'use strict'

var bits = require('bit-twiddle')
var dup = require('dup')

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8   : dup([32, 0])
    , UINT16  : dup([32, 0])
    , UINT32  : dup([32, 0])
    , INT8    : dup([32, 0])
    , INT16   : dup([32, 0])
    , INT32   : dup([32, 0])
    , FLOAT   : dup([32, 0])
    , DOUBLE  : dup([32, 0])
    , DATA    : dup([32, 0])
    , UINT8C  : dup([32, 0])
    , BUFFER  : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(Buffer.isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'buffer':
        return mallocBuffer(n)
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

function mallocBuffer(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var cache = BUFFER[log_n]
  if(cache.length > 0) {
    return cache.pop()
  }
  return new Buffer(n)
}
exports.mallocBuffer = mallocBuffer

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)

},{"bit-twiddle":23,"buffer":4,"dup":24}],26:[function(require,module,exports){
// Copyright (C) 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Install a leaky WeakMap emulation on platforms that
 * don't provide a built-in one.
 *
 * <p>Assumes that an ES5 platform where, if {@code WeakMap} is
 * already present, then it conforms to the anticipated ES6
 * specification. To run this file on an ES5 or almost ES5
 * implementation where the {@code WeakMap} specification does not
 * quite conform, run <code>repairES5.js</code> first.
 *
 * <p>Even though WeakMapModule is not global, the linter thinks it
 * is, which is why it is in the overrides list below.
 *
 * <p>NOTE: Before using this WeakMap emulation in a non-SES
 * environment, see the note below about hiddenRecord.
 *
 * @author Mark S. Miller
 * @requires crypto, ArrayBuffer, Uint8Array, navigator, console
 * @overrides WeakMap, ses, Proxy
 * @overrides WeakMapModule
 */

/**
 * This {@code WeakMap} emulation is observably equivalent to the
 * ES-Harmony WeakMap, but with leakier garbage collection properties.
 *
 * <p>As with true WeakMaps, in this emulation, a key does not
 * retain maps indexed by that key and (crucially) a map does not
 * retain the keys it indexes. A map by itself also does not retain
 * the values associated with that map.
 *
 * <p>However, the values associated with a key in some map are
 * retained so long as that key is retained and those associations are
 * not overridden. For example, when used to support membranes, all
 * values exported from a given membrane will live for the lifetime
 * they would have had in the absence of an interposed membrane. Even
 * when the membrane is revoked, all objects that would have been
 * reachable in the absence of revocation will still be reachable, as
 * far as the GC can tell, even though they will no longer be relevant
 * to ongoing computation.
 *
 * <p>The API implemented here is approximately the API as implemented
 * in FF6.0a1 and agreed to by MarkM, Andreas Gal, and Dave Herman,
 * rather than the offially approved proposal page. TODO(erights):
 * upgrade the ecmascript WeakMap proposal page to explain this API
 * change and present to EcmaScript committee for their approval.
 *
 * <p>The first difference between the emulation here and that in
 * FF6.0a1 is the presence of non enumerable {@code get___, has___,
 * set___, and delete___} methods on WeakMap instances to represent
 * what would be the hidden internal properties of a primitive
 * implementation. Whereas the FF6.0a1 WeakMap.prototype methods
 * require their {@code this} to be a genuine WeakMap instance (i.e.,
 * an object of {@code [[Class]]} "WeakMap}), since there is nothing
 * unforgeable about the pseudo-internal method names used here,
 * nothing prevents these emulated prototype methods from being
 * applied to non-WeakMaps with pseudo-internal methods of the same
 * names.
 *
 * <p>Another difference is that our emulated {@code
 * WeakMap.prototype} is not itself a WeakMap. A problem with the
 * current FF6.0a1 API is that WeakMap.prototype is itself a WeakMap
 * providing ambient mutability and an ambient communications
 * channel. Thus, if a WeakMap is already present and has this
 * problem, repairES5.js wraps it in a safe wrappper in order to
 * prevent access to this channel. (See
 * PATCH_MUTABLE_FROZEN_WEAKMAP_PROTO in repairES5.js).
 */

/**
 * If this is a full <a href=
 * "http://code.google.com/p/es-lab/wiki/SecureableES5"
 * >secureable ES5</a> platform and the ES-Harmony {@code WeakMap} is
 * absent, install an approximate emulation.
 *
 * <p>If WeakMap is present but cannot store some objects, use our approximate
 * emulation as a wrapper.
 *
 * <p>If this is almost a secureable ES5 platform, then WeakMap.js
 * should be run after repairES5.js.
 *
 * <p>See {@code WeakMap} for documentation of the garbage collection
 * properties of this WeakMap emulation.
 */
(function WeakMapModule() {
  "use strict";

  if (typeof ses !== 'undefined' && ses.ok && !ses.ok()) {
    // already too broken, so give up
    return;
  }

  /**
   * In some cases (current Firefox), we must make a choice betweeen a
   * WeakMap which is capable of using all varieties of host objects as
   * keys and one which is capable of safely using proxies as keys. See
   * comments below about HostWeakMap and DoubleWeakMap for details.
   *
   * This function (which is a global, not exposed to guests) marks a
   * WeakMap as permitted to do what is necessary to index all host
   * objects, at the cost of making it unsafe for proxies.
   *
   * Do not apply this function to anything which is not a genuine
   * fresh WeakMap.
   */
  function weakMapPermitHostObjects(map) {
    // identity of function used as a secret -- good enough and cheap
    if (map.permitHostObjects___) {
      map.permitHostObjects___(weakMapPermitHostObjects);
    }
  }
  if (typeof ses !== 'undefined') {
    ses.weakMapPermitHostObjects = weakMapPermitHostObjects;
  }

  // IE 11 has no Proxy but has a broken WeakMap such that we need to patch
  // it using DoubleWeakMap; this flag tells DoubleWeakMap so.
  var doubleWeakMapCheckSilentFailure = false;

  // Check if there is already a good-enough WeakMap implementation, and if so
  // exit without replacing it.
  if (typeof WeakMap === 'function') {
    var HostWeakMap = WeakMap;
    // There is a WeakMap -- is it good enough?
    if (typeof navigator !== 'undefined' &&
        /Firefox/.test(navigator.userAgent)) {
      // We're now *assuming not*, because as of this writing (2013-05-06)
      // Firefox's WeakMaps have a miscellany of objects they won't accept, and
      // we don't want to make an exhaustive list, and testing for just one
      // will be a problem if that one is fixed alone (as they did for Event).

      // If there is a platform that we *can* reliably test on, here's how to
      // do it:
      //  var problematic = ... ;
      //  var testHostMap = new HostWeakMap();
      //  try {
      //    testHostMap.set(problematic, 1);  // Firefox 20 will throw here
      //    if (testHostMap.get(problematic) === 1) {
      //      return;
      //    }
      //  } catch (e) {}

    } else {
      // IE 11 bug: WeakMaps silently fail to store frozen objects.
      var testMap = new HostWeakMap();
      var testObject = Object.freeze({});
      testMap.set(testObject, 1);
      if (testMap.get(testObject) !== 1) {
        doubleWeakMapCheckSilentFailure = true;
        // Fall through to installing our WeakMap.
      } else {
        module.exports = WeakMap;
        return;
      }
    }
  }

  var hop = Object.prototype.hasOwnProperty;
  var gopn = Object.getOwnPropertyNames;
  var defProp = Object.defineProperty;
  var isExtensible = Object.isExtensible;

  /**
   * Security depends on HIDDEN_NAME being both <i>unguessable</i> and
   * <i>undiscoverable</i> by untrusted code.
   *
   * <p>Given the known weaknesses of Math.random() on existing
   * browsers, it does not generate unguessability we can be confident
   * of.
   *
   * <p>It is the monkey patching logic in this file that is intended
   * to ensure undiscoverability. The basic idea is that there are
   * three fundamental means of discovering properties of an object:
   * The for/in loop, Object.keys(), and Object.getOwnPropertyNames(),
   * as well as some proposed ES6 extensions that appear on our
   * whitelist. The first two only discover enumerable properties, and
   * we only use HIDDEN_NAME to name a non-enumerable property, so the
   * only remaining threat should be getOwnPropertyNames and some
   * proposed ES6 extensions that appear on our whitelist. We monkey
   * patch them to remove HIDDEN_NAME from the list of properties they
   * returns.
   *
   * <p>TODO(erights): On a platform with built-in Proxies, proxies
   * could be used to trap and thereby discover the HIDDEN_NAME, so we
   * need to monkey patch Proxy.create, Proxy.createFunction, etc, in
   * order to wrap the provided handler with the real handler which
   * filters out all traps using HIDDEN_NAME.
   *
   * <p>TODO(erights): Revisit Mike Stay's suggestion that we use an
   * encapsulated function at a not-necessarily-secret name, which
   * uses the Stiegler shared-state rights amplification pattern to
   * reveal the associated value only to the WeakMap in which this key
   * is associated with that value. Since only the key retains the
   * function, the function can also remember the key without causing
   * leakage of the key, so this doesn't violate our general gc
   * goals. In addition, because the name need not be a guarded
   * secret, we could efficiently handle cross-frame frozen keys.
   */
  var HIDDEN_NAME_PREFIX = 'weakmap:';
  var HIDDEN_NAME = HIDDEN_NAME_PREFIX + 'ident:' + Math.random() + '___';

  if (typeof crypto !== 'undefined' &&
      typeof crypto.getRandomValues === 'function' &&
      typeof ArrayBuffer === 'function' &&
      typeof Uint8Array === 'function') {
    var ab = new ArrayBuffer(25);
    var u8s = new Uint8Array(ab);
    crypto.getRandomValues(u8s);
    HIDDEN_NAME = HIDDEN_NAME_PREFIX + 'rand:' +
      Array.prototype.map.call(u8s, function(u8) {
        return (u8 % 36).toString(36);
      }).join('') + '___';
  }

  function isNotHiddenName(name) {
    return !(
        name.substr(0, HIDDEN_NAME_PREFIX.length) == HIDDEN_NAME_PREFIX &&
        name.substr(name.length - 3) === '___');
  }

  /**
   * Monkey patch getOwnPropertyNames to avoid revealing the
   * HIDDEN_NAME.
   *
   * <p>The ES5.1 spec requires each name to appear only once, but as
   * of this writing, this requirement is controversial for ES6, so we
   * made this code robust against this case. If the resulting extra
   * search turns out to be expensive, we can probably relax this once
   * ES6 is adequately supported on all major browsers, iff no browser
   * versions we support at that time have relaxed this constraint
   * without providing built-in ES6 WeakMaps.
   */
  defProp(Object, 'getOwnPropertyNames', {
    value: function fakeGetOwnPropertyNames(obj) {
      return gopn(obj).filter(isNotHiddenName);
    }
  });

  /**
   * getPropertyNames is not in ES5 but it is proposed for ES6 and
   * does appear in our whitelist, so we need to clean it too.
   */
  if ('getPropertyNames' in Object) {
    var originalGetPropertyNames = Object.getPropertyNames;
    defProp(Object, 'getPropertyNames', {
      value: function fakeGetPropertyNames(obj) {
        return originalGetPropertyNames(obj).filter(isNotHiddenName);
      }
    });
  }

  /**
   * <p>To treat objects as identity-keys with reasonable efficiency
   * on ES5 by itself (i.e., without any object-keyed collections), we
   * need to add a hidden property to such key objects when we
   * can. This raises several issues:
   * <ul>
   * <li>Arranging to add this property to objects before we lose the
   *     chance, and
   * <li>Hiding the existence of this new property from most
   *     JavaScript code.
   * <li>Preventing <i>certification theft</i>, where one object is
   *     created falsely claiming to be the key of an association
   *     actually keyed by another object.
   * <li>Preventing <i>value theft</i>, where untrusted code with
   *     access to a key object but not a weak map nevertheless
   *     obtains access to the value associated with that key in that
   *     weak map.
   * </ul>
   * We do so by
   * <ul>
   * <li>Making the name of the hidden property unguessable, so "[]"
   *     indexing, which we cannot intercept, cannot be used to access
   *     a property without knowing the name.
   * <li>Making the hidden property non-enumerable, so we need not
   *     worry about for-in loops or {@code Object.keys},
   * <li>monkey patching those reflective methods that would
   *     prevent extensions, to add this hidden property first,
   * <li>monkey patching those methods that would reveal this
   *     hidden property.
   * </ul>
   * Unfortunately, because of same-origin iframes, we cannot reliably
   * add this hidden property before an object becomes
   * non-extensible. Instead, if we encounter a non-extensible object
   * without a hidden record that we can detect (whether or not it has
   * a hidden record stored under a name secret to us), then we just
   * use the key object itself to represent its identity in a brute
   * force leaky map stored in the weak map, losing all the advantages
   * of weakness for these.
   */
  function getHiddenRecord(key) {
    if (key !== Object(key)) {
      throw new TypeError('Not an object: ' + key);
    }
    var hiddenRecord = key[HIDDEN_NAME];
    if (hiddenRecord && hiddenRecord.key === key) { return hiddenRecord; }
    if (!isExtensible(key)) {
      // Weak map must brute force, as explained in doc-comment above.
      return void 0;
    }

    // The hiddenRecord and the key point directly at each other, via
    // the "key" and HIDDEN_NAME properties respectively. The key
    // field is for quickly verifying that this hidden record is an
    // own property, not a hidden record from up the prototype chain.
    //
    // NOTE: Because this WeakMap emulation is meant only for systems like
    // SES where Object.prototype is frozen without any numeric
    // properties, it is ok to use an object literal for the hiddenRecord.
    // This has two advantages:
    // * It is much faster in a performance critical place
    // * It avoids relying on Object.create(null), which had been
    //   problematic on Chrome 28.0.1480.0. See
    //   https://code.google.com/p/google-caja/issues/detail?id=1687
    hiddenRecord = { key: key };

    // When using this WeakMap emulation on platforms where
    // Object.prototype might not be frozen and Object.create(null) is
    // reliable, use the following two commented out lines instead.
    // hiddenRecord = Object.create(null);
    // hiddenRecord.key = key;

    // Please contact us if you need this to work on platforms where
    // Object.prototype might not be frozen and
    // Object.create(null) might not be reliable.

    try {
      defProp(key, HIDDEN_NAME, {
        value: hiddenRecord,
        writable: false,
        enumerable: false,
        configurable: false
      });
      return hiddenRecord;
    } catch (error) {
      // Under some circumstances, isExtensible seems to misreport whether
      // the HIDDEN_NAME can be defined.
      // The circumstances have not been isolated, but at least affect
      // Node.js v0.10.26 on TravisCI / Linux, but not the same version of
      // Node.js on OS X.
      return void 0;
    }
  }

  /**
   * Monkey patch operations that would make their argument
   * non-extensible.
   *
   * <p>The monkey patched versions throw a TypeError if their
   * argument is not an object, so it should only be done to functions
   * that should throw a TypeError anyway if their argument is not an
   * object.
   */
  (function(){
    var oldFreeze = Object.freeze;
    defProp(Object, 'freeze', {
      value: function identifyingFreeze(obj) {
        getHiddenRecord(obj);
        return oldFreeze(obj);
      }
    });
    var oldSeal = Object.seal;
    defProp(Object, 'seal', {
      value: function identifyingSeal(obj) {
        getHiddenRecord(obj);
        return oldSeal(obj);
      }
    });
    var oldPreventExtensions = Object.preventExtensions;
    defProp(Object, 'preventExtensions', {
      value: function identifyingPreventExtensions(obj) {
        getHiddenRecord(obj);
        return oldPreventExtensions(obj);
      }
    });
  })();

  function constFunc(func) {
    func.prototype = null;
    return Object.freeze(func);
  }

  var calledAsFunctionWarningDone = false;
  function calledAsFunctionWarning() {
    // Future ES6 WeakMap is currently (2013-09-10) expected to reject WeakMap()
    // but we used to permit it and do it ourselves, so warn only.
    if (!calledAsFunctionWarningDone && typeof console !== 'undefined') {
      calledAsFunctionWarningDone = true;
      console.warn('WeakMap should be invoked as new WeakMap(), not ' +
          'WeakMap(). This will be an error in the future.');
    }
  }

  var nextId = 0;

  var OurWeakMap = function() {
    if (!(this instanceof OurWeakMap)) {  // approximate test for new ...()
      calledAsFunctionWarning();
    }

    // We are currently (12/25/2012) never encountering any prematurely
    // non-extensible keys.
    var keys = []; // brute force for prematurely non-extensible keys.
    var values = []; // brute force for corresponding values.
    var id = nextId++;

    function get___(key, opt_default) {
      var index;
      var hiddenRecord = getHiddenRecord(key);
      if (hiddenRecord) {
        return id in hiddenRecord ? hiddenRecord[id] : opt_default;
      } else {
        index = keys.indexOf(key);
        return index >= 0 ? values[index] : opt_default;
      }
    }

    function has___(key) {
      var hiddenRecord = getHiddenRecord(key);
      if (hiddenRecord) {
        return id in hiddenRecord;
      } else {
        return keys.indexOf(key) >= 0;
      }
    }

    function set___(key, value) {
      var index;
      var hiddenRecord = getHiddenRecord(key);
      if (hiddenRecord) {
        hiddenRecord[id] = value;
      } else {
        index = keys.indexOf(key);
        if (index >= 0) {
          values[index] = value;
        } else {
          // Since some browsers preemptively terminate slow turns but
          // then continue computing with presumably corrupted heap
          // state, we here defensively get keys.length first and then
          // use it to update both the values and keys arrays, keeping
          // them in sync.
          index = keys.length;
          values[index] = value;
          // If we crash here, values will be one longer than keys.
          keys[index] = key;
        }
      }
      return this;
    }

    function delete___(key) {
      var hiddenRecord = getHiddenRecord(key);
      var index, lastIndex;
      if (hiddenRecord) {
        return id in hiddenRecord && delete hiddenRecord[id];
      } else {
        index = keys.indexOf(key);
        if (index < 0) {
          return false;
        }
        // Since some browsers preemptively terminate slow turns but
        // then continue computing with potentially corrupted heap
        // state, we here defensively get keys.length first and then use
        // it to update both the keys and the values array, keeping
        // them in sync. We update the two with an order of assignments,
        // such that any prefix of these assignments will preserve the
        // key/value correspondence, either before or after the delete.
        // Note that this needs to work correctly when index === lastIndex.
        lastIndex = keys.length - 1;
        keys[index] = void 0;
        // If we crash here, there's a void 0 in the keys array, but
        // no operation will cause a "keys.indexOf(void 0)", since
        // getHiddenRecord(void 0) will always throw an error first.
        values[index] = values[lastIndex];
        // If we crash here, values[index] cannot be found here,
        // because keys[index] is void 0.
        keys[index] = keys[lastIndex];
        // If index === lastIndex and we crash here, then keys[index]
        // is still void 0, since the aliasing killed the previous key.
        keys.length = lastIndex;
        // If we crash here, keys will be one shorter than values.
        values.length = lastIndex;
        return true;
      }
    }

    return Object.create(OurWeakMap.prototype, {
      get___:    { value: constFunc(get___) },
      has___:    { value: constFunc(has___) },
      set___:    { value: constFunc(set___) },
      delete___: { value: constFunc(delete___) }
    });
  };

  OurWeakMap.prototype = Object.create(Object.prototype, {
    get: {
      /**
       * Return the value most recently associated with key, or
       * opt_default if none.
       */
      value: function get(key, opt_default) {
        return this.get___(key, opt_default);
      },
      writable: true,
      configurable: true
    },

    has: {
      /**
       * Is there a value associated with key in this WeakMap?
       */
      value: function has(key) {
        return this.has___(key);
      },
      writable: true,
      configurable: true
    },

    set: {
      /**
       * Associate value with key in this WeakMap, overwriting any
       * previous association if present.
       */
      value: function set(key, value) {
        return this.set___(key, value);
      },
      writable: true,
      configurable: true
    },

    'delete': {
      /**
       * Remove any association for key in this WeakMap, returning
       * whether there was one.
       *
       * <p>Note that the boolean return here does not work like the
       * {@code delete} operator. The {@code delete} operator returns
       * whether the deletion succeeds at bringing about a state in
       * which the deleted property is absent. The {@code delete}
       * operator therefore returns true if the property was already
       * absent, whereas this {@code delete} method returns false if
       * the association was already absent.
       */
      value: function remove(key) {
        return this.delete___(key);
      },
      writable: true,
      configurable: true
    }
  });

  if (typeof HostWeakMap === 'function') {
    (function() {
      // If we got here, then the platform has a WeakMap but we are concerned
      // that it may refuse to store some key types. Therefore, make a map
      // implementation which makes use of both as possible.

      // In this mode we are always using double maps, so we are not proxy-safe.
      // This combination does not occur in any known browser, but we had best
      // be safe.
      if (doubleWeakMapCheckSilentFailure && typeof Proxy !== 'undefined') {
        Proxy = undefined;
      }

      function DoubleWeakMap() {
        if (!(this instanceof OurWeakMap)) {  // approximate test for new ...()
          calledAsFunctionWarning();
        }

        // Preferable, truly weak map.
        var hmap = new HostWeakMap();

        // Our hidden-property-based pseudo-weak-map. Lazily initialized in the
        // 'set' implementation; thus we can avoid performing extra lookups if
        // we know all entries actually stored are entered in 'hmap'.
        var omap = undefined;

        // Hidden-property maps are not compatible with proxies because proxies
        // can observe the hidden name and either accidentally expose it or fail
        // to allow the hidden property to be set. Therefore, we do not allow
        // arbitrary WeakMaps to switch to using hidden properties, but only
        // those which need the ability, and unprivileged code is not allowed
        // to set the flag.
        //
        // (Except in doubleWeakMapCheckSilentFailure mode in which case we
        // disable proxies.)
        var enableSwitching = false;

        function dget(key, opt_default) {
          if (omap) {
            return hmap.has(key) ? hmap.get(key)
                : omap.get___(key, opt_default);
          } else {
            return hmap.get(key, opt_default);
          }
        }

        function dhas(key) {
          return hmap.has(key) || (omap ? omap.has___(key) : false);
        }

        var dset;
        if (doubleWeakMapCheckSilentFailure) {
          dset = function(key, value) {
            hmap.set(key, value);
            if (!hmap.has(key)) {
              if (!omap) { omap = new OurWeakMap(); }
              omap.set(key, value);
            }
            return this;
          };
        } else {
          dset = function(key, value) {
            if (enableSwitching) {
              try {
                hmap.set(key, value);
              } catch (e) {
                if (!omap) { omap = new OurWeakMap(); }
                omap.set___(key, value);
              }
            } else {
              hmap.set(key, value);
            }
            return this;
          };
        }

        function ddelete(key) {
          var result = !!hmap['delete'](key);
          if (omap) { return omap.delete___(key) || result; }
          return result;
        }

        return Object.create(OurWeakMap.prototype, {
          get___:    { value: constFunc(dget) },
          has___:    { value: constFunc(dhas) },
          set___:    { value: constFunc(dset) },
          delete___: { value: constFunc(ddelete) },
          permitHostObjects___: { value: constFunc(function(token) {
            if (token === weakMapPermitHostObjects) {
              enableSwitching = true;
            } else {
              throw new Error('bogus call to permitHostObjects___');
            }
          })}
        });
      }
      DoubleWeakMap.prototype = OurWeakMap.prototype;
      module.exports = DoubleWeakMap;

      // define .constructor to hide OurWeakMap ctor
      Object.defineProperty(WeakMap.prototype, 'constructor', {
        value: WeakMap,
        enumerable: false,  // as default .constructor is
        configurable: true,
        writable: true
      });
    })();
  } else {
    // There is no host WeakMap, so we must use the emulation.

    // Emulated WeakMaps are incompatible with native proxies (because proxies
    // can observe the hidden name), so we must disable Proxy usage (in
    // ArrayLike and Domado, currently).
    if (typeof Proxy !== 'undefined') {
      Proxy = undefined;
    }

    module.exports = OurWeakMap;
  }
})();

},{}],27:[function(require,module,exports){
'use strict'

var weakMap = typeof WeakMap === 'undefined' ? require('weak-map') : WeakMap

var WebGLEWStruct = new weakMap()

function baseName(ext_name) {
  return ext_name.replace(/^[A-Z]+_/, '')
}

function initWebGLEW(gl) {
  var struct = WebGLEWStruct.get(gl)
  if(struct) {
    return struct
  }
  var extensions = {}
  var supported = gl.getSupportedExtensions()
  for(var i=0; i<supported.length; ++i) {
    var extName = supported[i]

    //Skip MOZ_ extensions
    if(extName.indexOf('MOZ_') === 0) {
      continue
    }
    var ext = gl.getExtension(supported[i])
    if(!ext) {
      continue
    }
    while(true) {
      extensions[extName] = ext
      var base = baseName(extName)
      if(base === extName) {
        break
      }
      extName = base
    }
  }
  WebGLEWStruct.set(gl, extensions)
  return extensions
}
module.exports = initWebGLEW
},{"weak-map":26}],28:[function(require,module,exports){
"use strict";
"use strict";
var makeGameShell = require("game-shell");
var webglew = require("webglew");
function createGLShell(options) {
  options = options || {};
  var extensions = options.extensions || [];
  var shell = makeGameShell(options);
  var scale = shell.scale || 1;
  var contextOptions = options.glOptions;
  shell.on("init", function initGLNow() {
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext("webgl", contextOptions) || canvas.getContext("experimental-webgl", contextOptions);
    if (!gl) {
      shell.emit("gl-error", new Error("Unable to initialize WebGL"));
      return;
    }
    var ext = webglew(gl);
    for (var i = 0; i < extensions.length; ++i) {
      if (!(extensions[i] in ext)) {
        shell.emit("gl-error", new Error("Missing extension: " + extensions[i]));
        return;
      }
    }
    canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    shell.element.appendChild(canvas);
    shell.canvas = canvas;
    shell.gl = gl;
    resize();
    shell.clearFlags = options.clearFlags === undefined ? (gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT) : options.clearFlags;
    shell.clearColor = options.clearColor || [0, 0, 0, 0];
    shell.clearDepth = options.clearDepth || 1.0;
    shell.clearStencil = options.clearStencil || 0;
    shell.on("resize", resize);
    shell.on("render", function renderGLNow(t) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, (shell._width / scale) | 0, (shell._height / scale) | 0);
      if (shell.clearFlags & gl.STENCIL_BUFFER_BIT) {
        gl.clearStencil(shell.clearStencil);
      }
      if (shell.clearFlags & gl.COLOR_BUFFER_BIT) {
        gl.clearColor(shell.clearColor[0], shell.clearColor[1], shell.clearColor[2], shell.clearColor[3]);
      }
      if (shell.clearFlags & gl.DEPTH_BUFFER_BIT) {
        gl.clearDepth(shell.clearDepth);
      }
      if (shell.clearFlags) {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
      }
      shell.emit("gl-render", t);
    });
    shell.emit("gl-init");
  });
  function resize() {
    var nw = (shell._width / scale) | 0;
    var nh = (shell._height / scale) | 0;
    shell.canvas.width = nw;
    shell.canvas.height = nh;
    shell.canvas.style.width = shell._width + 'px';
    shell.canvas.style.height = shell._height + 'px';
    shell.emit("gl-resize", nw, nh);
  }
  Object.defineProperty(shell, 'scale', {
    get: function() {
      return scale;
    },
    set: function(_scale) {
      _scale = +_scale;
      if ((_scale <= 0) || isNaN(_scale) || (scale === _scale)) {
        return scale;
      }
      scale = _scale;
      resize();
      return scale;
    }
  });
  Object.defineProperty(shell, "width", {get: function() {
      return (shell._width / scale) | 0;
    }});
  Object.defineProperty(shell, "height", {get: function() {
      return (shell._height / scale) | 0;
    }});
  Object.defineProperty(shell, "mouse", {get: function() {
      return [shell.mouseX / scale, shell.mouseY / scale];
    }});
  Object.defineProperty(shell, "prevMouse", {get: function() {
      return [shell.prevMouseX / scale, shell.prevMouseY / scale];
    }});
  return shell;
}
module.exports = createGLShell;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-now/index.js
},{"game-shell":38,"webglew":40}],29:[function(require,module,exports){
if(typeof window.performance === "object") {
  if(window.performance.now) {
    module.exports = function() { return window.performance.now() }
  } else if(window.performance.webkitNow) {
    module.exports = function() { return window.performance.webkitNow() }
  }
} else if(Date.now) {
  module.exports = Date.now
} else {
  module.exports = function() { return (new Date()).getTime() }
}

},{}],30:[function(require,module,exports){
//Adapted from here: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel?redirectlocale=en-US&redirectslug=DOM%2FMozilla_event_reference%2Fwheel

var prefix = "", _addEventListener, onwheel, support;

// detect event model
if ( window.addEventListener ) {
  _addEventListener = "addEventListener";
} else {
  _addEventListener = "attachEvent";
  prefix = "on";
}

// detect available wheel event
support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
          document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
          "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

function _addWheelListener( elem, eventName, callback, useCapture ) {
  elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
    !originalEvent && ( originalEvent = window.event );

    // create a normalized event object
    var event = {
      // keep a ref to the original event object
      originalEvent: originalEvent,
      target: originalEvent.target || originalEvent.srcElement,
      type: "wheel",
      deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
      deltaX: 0,
      delatZ: 0,
      preventDefault: function() {
        originalEvent.preventDefault ?
          originalEvent.preventDefault() :
          originalEvent.returnValue = false;
      }
    };
    
    // calculate deltaY (and deltaX) according to the event
    if ( support == "mousewheel" ) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
      // Webkit also support wheelDeltaX
      originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
    } else {
      event.deltaY = originalEvent.detail;
    }

    // it's time to fire the callback
    return callback( event );
  }, useCapture || false );
}

module.exports = function( elem, callback, useCapture ) {
  _addWheelListener( elem, support, callback, useCapture );

  // handle MozMousePixelScroll in older Firefox
  if( support == "DOMMouseScroll" ) {
    _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
  }
};
},{}],31:[function(require,module,exports){
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                               || window[vendors[x]+'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };

},{}],32:[function(require,module,exports){
"use strict"

function compileSearch(funcName, predicate, reversed, extraArgs, useNdarray, earlyOut) {
  var code = [
    "function ", funcName, "(a,l,h,", extraArgs.join(","),  "){",
earlyOut ? "" : "var i=", (reversed ? "l-1" : "h+1"),
";while(l<=h){\
var m=(l+h)>>>1,x=a", useNdarray ? ".get(m)" : "[m]"]
  if(earlyOut) {
    if(predicate.indexOf("c") < 0) {
      code.push(";if(x===y){return m}else if(x<=y){")
    } else {
      code.push(";var p=c(x,y);if(p===0){return m}else if(p<=0){")
    }
  } else {
    code.push(";if(", predicate, "){i=m;")
  }
  if(reversed) {
    code.push("l=m+1}else{h=m-1}")
  } else {
    code.push("h=m-1}else{l=m+1}")
  }
  code.push("}")
  if(earlyOut) {
    code.push("return -1};")
  } else {
    code.push("return i};")
  }
  return code.join("")
}

function compileBoundsSearch(predicate, reversed, suffix, earlyOut) {
  var result = new Function([
  compileSearch("A", "x" + predicate + "y", reversed, ["y"], false, earlyOut),
  compileSearch("B", "x" + predicate + "y", reversed, ["y"], true, earlyOut),
  compileSearch("P", "c(x,y)" + predicate + "0", reversed, ["y", "c"], false, earlyOut),
  compileSearch("Q", "c(x,y)" + predicate + "0", reversed, ["y", "c"], true, earlyOut),
"function dispatchBsearch", suffix, "(a,y,c,l,h){\
if(a.shape){\
if(typeof(c)==='function'){\
return Q(a,(l===undefined)?0:l|0,(h===undefined)?a.shape[0]-1:h|0,y,c)\
}else{\
return B(a,(c===undefined)?0:c|0,(l===undefined)?a.shape[0]-1:l|0,y)\
}}else{\
if(typeof(c)==='function'){\
return P(a,(l===undefined)?0:l|0,(h===undefined)?a.length-1:h|0,y,c)\
}else{\
return A(a,(c===undefined)?0:c|0,(l===undefined)?a.length-1:l|0,y)\
}}}\
return dispatchBsearch", suffix].join(""))
  return result()
}

module.exports = {
  ge: compileBoundsSearch(">=", false, "GE"),
  gt: compileBoundsSearch(">", false, "GT"),
  lt: compileBoundsSearch("<", true, "LT"),
  le: compileBoundsSearch("<=", true, "LE"),
  eq: compileBoundsSearch("-", true, "EQ", true)
}

},{}],33:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? fn() : fns.push(fn)
  }

});

},{}],34:[function(require,module,exports){
"use strict"

function invert(hash) {
  var result = {}
  for(var i in hash) {
    if(hash.hasOwnProperty(i)) {
      result[hash[i]] = i
    }
  }
  return result
}

module.exports = invert
},{}],35:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],36:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],37:[function(require,module,exports){
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
  , isOSX = /OS X/.test(ua)
  , isOpera = /Opera/.test(ua)
  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera

var i, output = module.exports = {
  0:  isOSX ? '<menu>' : '<UNK>'
, 1:  '<mouse 1>'
, 2:  '<mouse 2>'
, 3:  '<break>'
, 4:  '<mouse 3>'
, 5:  '<mouse 4>'
, 6:  '<mouse 5>'
, 8:  '<backspace>'
, 9:  '<tab>'
, 12: '<clear>'
, 13: '<enter>'
, 16: '<shift>'
, 17: '<control>'
, 18: '<alt>'
, 19: '<pause>'
, 20: '<caps-lock>'
, 21: '<ime-hangul>'
, 23: '<ime-junja>'
, 24: '<ime-final>'
, 25: '<ime-kanji>'
, 27: '<escape>'
, 28: '<ime-convert>'
, 29: '<ime-nonconvert>'
, 30: '<ime-accept>'
, 31: '<ime-mode-change>'
, 27: '<escape>'
, 32: '<space>'
, 33: '<page-up>'
, 34: '<page-down>'
, 35: '<end>'
, 36: '<home>'
, 37: '<left>'
, 38: '<up>'
, 39: '<right>'
, 40: '<down>'
, 41: '<select>'
, 42: '<print>'
, 43: '<execute>'
, 44: '<snapshot>'
, 45: '<insert>'
, 46: '<delete>'
, 47: '<help>'
, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
, 92: '<meta>'  // meta-right
, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
, 95: '<sleep>'
, 106: '<num-*>'
, 107: '<num-+>'
, 108: '<num-enter>'
, 109: '<num-->'
, 110: '<num-.>'
, 111: '<num-/>'
, 144: '<num-lock>'
, 145: '<scroll-lock>'
, 160: '<shift-left>'
, 161: '<shift-right>'
, 162: '<control-left>'
, 163: '<control-right>'
, 164: '<alt-left>'
, 165: '<alt-right>'
, 166: '<browser-back>'
, 167: '<browser-forward>'
, 168: '<browser-refresh>'
, 169: '<browser-stop>'
, 170: '<browser-search>'
, 171: '<browser-favorites>'
, 172: '<browser-home>'

  // ff/osx reports '<volume-mute>' for '-'
, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
, 174: '<volume-down>'
, 175: '<volume-up>'
, 176: '<next-track>'
, 177: '<prev-track>'
, 178: '<stop>'
, 179: '<play-pause>'
, 180: '<launch-mail>'
, 181: '<launch-media-select>'
, 182: '<launch-app 1>'
, 183: '<launch-app 2>'
, 186: ';'
, 187: '='
, 188: ','
, 189: '-'
, 190: '.'
, 191: '/'
, 192: '`'
, 219: '['
, 220: '\\'
, 221: ']'
, 222: "'"
, 223: '<meta>'
, 224: '<meta>'       // firefox reports meta here.
, 226: '<alt-gr>'
, 229: '<ime-process>'
, 231: isOpera ? '`' : '<unicode>'
, 246: '<attention>'
, 247: '<crsel>'
, 248: '<exsel>'
, 249: '<erase-eof>'
, 250: '<play>'
, 251: '<zoom>'
, 252: '<no-name>'
, 253: '<pa-1>'
, 254: '<clear>'
}

for(i = 58; i < 65; ++i) {
  output[i] = String.fromCharCode(i)
}

// 0-9
for(i = 48; i < 58; ++i) {
  output[i] = (i - 48)+''
}

// A-Z
for(i = 65; i < 91; ++i) {
  output[i] = String.fromCharCode(i)
}

// num0-9
for(i = 96; i < 106; ++i) {
  output[i] = '<num-'+(i - 96)+'>'
}

// F1-F24
for(i = 112; i < 136; ++i) {
  output[i] = 'F'+(i-111)
}

},{}],38:[function(require,module,exports){
"use strict"

var EventEmitter = require("events").EventEmitter
  , util         = require("util")
  , domready     = require("domready")
  , vkey         = require("vkey")
  , invert       = require("invert-hash")
  , uniq         = require("uniq")
  , bsearch      = require("binary-search-bounds")
  , iota         = require("iota-array")
  , min          = Math.min

//Browser compatibility hacks
require("./lib/raf-polyfill.js")
var addMouseWheel = require("./lib/mousewheel-polyfill.js")
var hrtime = require("./lib/hrtime-polyfill.js")

//Remove angle braces and other useless crap
var filtered_vkey = (function() {
  var result = new Array(256)
    , i, j, k
  for(i=0; i<256; ++i) {
    result[i] = "UNK"
  }
  for(i in vkey) {
    k = vkey[i]
    if(k.charAt(0) === '<' && k.charAt(k.length-1) === '>') {
      k = k.substring(1, k.length-1)
    }
    k = k.replace(/\s/g, "-")
    result[parseInt(i)] = k
  }
  return result
})()

//Compute minimal common set of keyboard functions
var keyNames = uniq(Object.keys(invert(filtered_vkey)))

//Translates a virtual keycode to a normalized keycode
function virtualKeyCode(key) {
  return bsearch.eq(keyNames, key)
}

//Maps a physical keycode to a normalized keycode
function physicalKeyCode(key) {
  return virtualKeyCode(filtered_vkey[key])
}

//Game shell
function GameShell() {
  EventEmitter.call(this)
  this._curKeyState  = new Array(keyNames.length)
  this._pressCount   = new Array(keyNames.length)
  this._releaseCount = new Array(keyNames.length)
  
  this._tickInterval = null
  this._rafHandle = null
  this._tickRate = 0
  this._lastTick = hrtime()
  this._frameTime = 0.0
  this._paused = true
  this._width = 0
  this._height = 0
  
  this._wantFullscreen = false
  this._wantPointerLock = false
  this._fullscreenActive = false
  this._pointerLockActive = false
  
  this._render = render.bind(undefined, this)

  this.preventDefaults = true
  this.stopPropagation = false
  
  for(var i=0; i<keyNames.length; ++i) {
    this._curKeyState[i] = false
    this._pressCount[i] = this._releaseCount[i] = 0
  }
  
  //Public members
  this.element = null
  this.bindings = {}
  this.frameSkip = 100.0
  this.tickCount = 0
  this.frameCount = 0
  this.startTime = hrtime()
  this.tickTime = this._tickRate
  this.frameTime = 10.0
  this.stickyFullscreen = false
  this.stickyPointLock = false
  
  //Scroll stuff
  this.scroll = [0,0,0]
    
  //Mouse state
  this.mouseX = 0
  this.mouseY = 0
  this.prevMouseX = 0
  this.prevMouseY = 0
}

util.inherits(GameShell, EventEmitter)

var proto = GameShell.prototype

//Bind keynames
proto.keyNames = keyNames

//Binds a virtual keyboard event to a physical key
proto.bind = function(virtual_key) {
  //Look up previous key bindings
  var arr
  if(virtual_key in this.bindings) {
    arr = this.bindings[virtual_key]
  } else {
    arr = []
  }
  //Add keys to list
  var physical_key
  for(var i=1, n=arguments.length; i<n; ++i) {
    physical_key = arguments[i]
    if(virtualKeyCode(physical_key) >= 0) {
      arr.push(physical_key)
    } else if(physical_key in this.bindings) {
      var keybinds = this.bindings[physical_key]
      for(var j=0; j<keybinds.length; ++j) {
        arr.push(keybinds[j])
      }
    }
  }
  //Remove any duplicate keys
  arr = uniq(arr)
  if(arr.length > 0) {
    this.bindings[virtual_key] = arr
  }
  this.emit('bind', virtual_key, arr)
}

//Unbinds a virtual keyboard event
proto.unbind = function(virtual_key) {
  if(virtual_key in this.bindings) {
    delete this.bindings[virtual_key]
  }
  this.emit('unbind', virtual_key)
}

//Checks if a key is set in a given state
function lookupKey(state, bindings, key) {
  if(key in bindings) {
    var arr = bindings[key]
    for(var i=0, n=arr.length; i<n; ++i) {
      if(state[virtualKeyCode(arr[i])]) {
        return true
      }
    }
    return false
  }
  var kc = virtualKeyCode(key)
  if(kc >= 0) {
    return state[kc]
  }
  return false
}

//Checks if a key is set in a given state
function lookupCount(state, bindings, key) {
  if(key in bindings) {
    var arr = bindings[key], r = 0
    for(var i=0, n=arr.length; i<n; ++i) {
      r += state[virtualKeyCode(arr[i])]
    }
    return r
  }
  var kc = virtualKeyCode(key)
  if(kc >= 0) {
    return state[kc]
  }
  return 0
}

//Checks if a key (either physical or virtual) is currently held down
proto.down = function(key) {
  return lookupKey(this._curKeyState, this.bindings, key)
}

//Checks if a key was ever down
proto.wasDown = function(key) {
  return this.down(key) || !!this.press(key)
}

//Opposite of down
proto.up = function(key) {
  return !this.down(key)
}

//Checks if a key was released during previous frame
proto.wasUp = function(key) {
  return this.up(key) || !!this.release(key)
}

//Returns the number of times a key was pressed since last tick
proto.press = function(key) {
  return lookupCount(this._pressCount, this.bindings, key)
}

//Returns the number of times a key was released since last tick
proto.release = function(key) {
  return lookupCount(this._releaseCount, this.bindings, key)
}

//Pause/unpause the game loop
Object.defineProperty(proto, "paused", {
  get: function() {
    return this._paused
  },
  set: function(state) {
    var ns = !!state
    if(ns !== this._paused) {
      if(!this._paused) {
        this._paused = true
        this._frameTime = min(1.0, (hrtime() - this._lastTick) / this._tickRate)
        clearInterval(this._tickInterval)
        //cancelAnimationFrame(this._rafHandle)
      } else {
        this._paused = false
        this._lastTick = hrtime() - Math.floor(this._frameTime * this._tickRate)
        this._tickInterval = setInterval(tick, this._tickRate, this)
        this._rafHandle = requestAnimationFrame(this._render)
      }
    }
  }
})

//Fullscreen state toggle

function tryFullscreen(shell) {
  //Request full screen
  var elem = shell.element
  
  if(shell._wantFullscreen && !shell._fullscreenActive) {
    var fs = elem.requestFullscreen ||
             elem.requestFullScreen ||
             elem.webkitRequestFullscreen ||
             elem.webkitRequestFullScreen ||
             elem.mozRequestFullscreen ||
             elem.mozRequestFullScreen ||
             function() {}
    fs.call(elem)
  }
  if(shell._wantPointerLock && !shell._pointerLockActive) {
    var pl =  elem.requestPointerLock ||
              elem.webkitRequestPointerLock ||
              elem.mozRequestPointerLock ||
              elem.msRequestPointerLock ||
              elem.oRequestPointerLock ||
              function() {}
    pl.call(elem)
  }
}

var cancelFullscreen = document.exitFullscreen ||
                       document.cancelFullscreen ||  //Why can no one agree on this?
                       document.cancelFullScreen ||
                       document.webkitCancelFullscreen ||
                       document.webkitCancelFullScreen ||
                       document.mozCancelFullscreen ||
                       document.mozCancelFullScreen ||
                       function(){}

Object.defineProperty(proto, "fullscreen", {
  get: function() {
    return this._fullscreenActive
  },
  set: function(state) {
    var ns = !!state
    if(!ns) {
      this._wantFullscreen = false
      cancelFullscreen.call(document)
    } else {
      this._wantFullscreen = true
      tryFullscreen(this)
    }
    return this._fullscreenActive
  }
})

function handleFullscreen(shell) {
  shell._fullscreenActive = document.fullscreen ||
                            document.mozFullScreen ||
                            document.webkitIsFullScreen ||
                            false
  if(!shell.stickyFullscreen && shell._fullscreenActive) {
    shell._wantFullscreen = false
  }
}

//Pointer lock state toggle
var exitPointerLock = document.exitPointerLock ||
                      document.webkitExitPointerLock ||
                      document.mozExitPointerLock ||
                      function() {}

Object.defineProperty(proto, "pointerLock", {
  get: function() {
    return this._pointerLockActive
  },
  set: function(state) {
    var ns = !!state
    if(!ns) {
      this._wantPointerLock = false
      exitPointerLock.call(document)
    } else {
      this._wantPointerLock = true
      tryFullscreen(this)
    }
    return this._pointerLockActive
  }
})

function handlePointerLockChange(shell, event) {
  shell._pointerLockActive = shell.element === (
      document.pointerLockElement ||
      document.mozPointerLockElement ||
      document.webkitPointerLockElement ||
      null)
  if(!shell.stickyPointerLock && shell._pointerLockActive) {
    shell._wantPointerLock = false
  }
}

//Width and height
Object.defineProperty(proto, "width", {
  get: function() {
    return this.element.clientWidth
  }
})
Object.defineProperty(proto, "height", {
  get: function() {
    return this.element.clientHeight
  }
})

//Set key state
function setKeyState(shell, key, state) {
  var ps = shell._curKeyState[key]
  if(ps !== state) {
    if(state) {
      shell._pressCount[key]++
    } else {
      shell._releaseCount[key]++
    }
    shell._curKeyState[key] = state
  }
}

//Ticks the game state one update
function tick(shell) {
  var skip = hrtime() + shell.frameSkip
    , pCount = shell._pressCount
    , rCount = shell._releaseCount
    , i, s, t
    , tr = shell._tickRate
    , n = keyNames.length
  while(!shell._paused &&
        hrtime() >= shell._lastTick + tr) {
    
    //Skip frames if we are over budget
    if(hrtime() > skip) {
      shell._lastTick = hrtime() + tr
      return
    }
    
    //Tick the game
    s = hrtime()
    shell.emit("tick")
    t = hrtime()
    shell.tickTime = t - s
    
    //Update counters and time
    ++shell.tickCount
    shell._lastTick += tr
    
    //Shift input state
    for(i=0; i<n; ++i) {
      pCount[i] = rCount[i] = 0
    }
    if(shell._pointerLockActive) {
      shell.prevMouseX = shell.mouseX = shell.width>>1
      shell.prevMouseY = shell.mouseY = shell.height>>1
    } else {
      shell.prevMouseX = shell.mouseX
      shell.prevMouseY = shell.mouseY
    }
    shell.scroll[0] = shell.scroll[1] = shell.scroll[2] = 0
  }
}

//Render stuff
function render(shell) {

  //Request next frame
  shell._rafHandle = requestAnimationFrame(shell._render)

  //Tick the shell
  tick(shell)
  
  //Compute frame time
  var dt
  if(shell._paused) {
    dt = shell._frameTime
  } else {
    dt = min(1.0, (hrtime() - shell._lastTick) / shell._tickRate)
  }
  
  //Draw a frame
  ++shell.frameCount
  var s = hrtime()
  shell.emit("render", dt)
  var t = hrtime()
  shell.frameTime = t - s
  
}

function isFocused(shell) {
  return (document.activeElement === document.body) ||
         (document.activeElement === shell.element)
}

function handleEvent(shell, ev) {
  if(shell.preventDefaults) {
    ev.preventDefault()
  }
  if(shell.stopPropagation) {
    ev.stopPropagation()
  }
}

//Set key up
function handleKeyUp(shell, ev) {
  handleEvent(shell, ev)
  var kc = physicalKeyCode(ev.keyCode || ev.char || ev.which || ev.charCode)
  if(kc >= 0) {
    setKeyState(shell, kc, false)
  }
}

//Set key down
function handleKeyDown(shell, ev) {
  if(!isFocused(shell)) {
    return
  }
  handleEvent(shell, ev)
  if(ev.metaKey) {
    //Hack: Clear key state when meta gets pressed to prevent keys sticking
    handleBlur(shell, ev)
  } else {
    var kc = physicalKeyCode(ev.keyCode || ev.char || ev.which || ev.charCode)
    if(kc >= 0) {
      setKeyState(shell, kc, true)
    }
  }
}

//Mouse events are really annoying
var mouseCodes = iota(32).map(function(n) {
  return virtualKeyCode("mouse-" + (n+1))
})

function setMouseButtons(shell, buttons) {
  for(var i=0; i<32; ++i) {
    setKeyState(shell, mouseCodes[i], !!(buttons & (1<<i)))
  }
}

function handleMouseMove(shell, ev) {
  handleEvent(shell, ev)
  if(shell._pointerLockActive) {
    var movementX = ev.movementX       ||
                    ev.mozMovementX    ||
                    ev.webkitMovementX ||
                    0,
        movementY = ev.movementY       ||
                    ev.mozMovementY    ||
                    ev.webkitMovementY ||
                    0
    shell.mouseX += movementX
    shell.mouseY += movementY
  } else {
    shell.mouseX = ev.clientX - shell.element.offsetLeft
    shell.mouseY = ev.clientY - shell.element.offsetTop
  }
  return false
}

function handleMouseDown(shell, ev) {
  handleEvent(shell, ev)
  setKeyState(shell, mouseCodes[ev.button], true)
  return false
}

function handleMouseUp(shell, ev) {
  handleEvent(shell, ev)
  setKeyState(shell, mouseCodes[ev.button], false)
  return false
}

function handleMouseEnter(shell, ev) {
  handleEvent(shell, ev)
  if(shell._pointerLockActive) {
    shell.prevMouseX = shell.mouseX = shell.width>>1
    shell.prevMouseY = shell.mouseY = shell.height>>1
  } else {
    shell.prevMouseX = shell.mouseX = ev.clientX - shell.element.offsetLeft
    shell.prevMouseY = shell.mouseY = ev.clientY - shell.element.offsetTop
  }
  return false
}

function handleMouseLeave(shell, ev) {
  handleEvent(shell, ev)
  setMouseButtons(shell, 0)
  return false
}

//Handle mouse wheel events
function handleMouseWheel(shell, ev) {
  handleEvent(shell, ev)
  var scale = 1
  switch(ev.deltaMode) {
    case 0: //Pixel
      scale = 1
    break
    case 1: //Line
      scale = 12
    break
    case 2: //Page
       scale = shell.height
    break
  }
  //Add scroll
  shell.scroll[0] +=  ev.deltaX * scale
  shell.scroll[1] +=  ev.deltaY * scale
  shell.scroll[2] += (ev.deltaZ * scale)||0.0
  return false
}

function handleContexMenu(shell, ev) {
  handleEvent(shell, ev)
  return false
}

function handleBlur(shell, ev) {
  var n = keyNames.length
    , c = shell._curKeyState
    , r = shell._releaseCount
    , i
  for(i=0; i<n; ++i) {
    if(c[i]) {
      ++r[i]
    }
    c[i] = false
  }
  return false
}

function handleResizeElement(shell, ev) {
  var w = shell.element.clientWidth|0
  var h = shell.element.clientHeight|0
  if((w !== shell._width) || (h !== shell._height)) {
    shell._width = w
    shell._height = h
    shell.emit("resize", w, h)
  }
}

function makeDefaultContainer() {
  var container = document.createElement("div")
  container.tabindex = 1
  container.style.position = "absolute"
  container.style.left = "0px"
  container.style.right = "0px"
  container.style.top = "0px"
  container.style.bottom = "0px"
  container.style.height = "100%"
  container.style.overflow = "hidden"
  document.body.appendChild(container)
  document.body.style.overflow = "hidden" //Prevent bounce
  document.body.style.height = "100%"
  return container
}

function createShell(options) {
  options = options || {}
  
  //Check fullscreen and pointer lock flags
  var useFullscreen = !!options.fullscreen
  var usePointerLock = useFullscreen
  if(typeof options.pointerLock !== undefined) {
    usePointerLock = !!options.pointerLock
  }
  
  //Create initial shell
  var shell = new GameShell()
  shell._tickRate = options.tickRate || 30
  shell.frameSkip = options.frameSkip || (shell._tickRate+5) * 5
  shell.stickyFullscreen = !!options.stickyFullscreen || !!options.sticky
  shell.stickyPointerLock = !!options.stickPointerLock || !options.sticky
  
  //Set bindings
  if(options.bindings) {
    shell.bindings = options.bindings
  }
  
  //Wait for dom to intiailize
  setTimeout(function() { domready(function initGameShell() {
    
    //Retrieve element
    var element = options.element
    if(typeof element === "string") {
      var e = document.querySelector(element)
      if(!e) {
        e = document.getElementById(element)
      }
      if(!e) {
        e = document.getElementByClass(element)[0]
      }
      if(!e) {
        e = makeDefaultContainer()
      }
      shell.element = e
    } else if(typeof element === "object" && !!element) {
      shell.element = element
    } else if(typeof element === "function") {
      shell.element = element()
    } else {
      shell.element = makeDefaultContainer()
    }
    
    //Disable user-select
    if(shell.element.style) {
      shell.element.style["-webkit-touch-callout"] = "none"
      shell.element.style["-webkit-user-select"] = "none"
      shell.element.style["-khtml-user-select"] = "none"
      shell.element.style["-moz-user-select"] = "none"
      shell.element.style["-ms-user-select"] = "none"
      shell.element.style["user-select"] = "none"
    }
    
    //Hook resize handler
    shell._width = shell.element.clientWidth
    shell._height = shell.element.clientHeight
    var handleResize = handleResizeElement.bind(undefined, shell)
    if(typeof MutationObserver !== "undefined") {
      var observer = new MutationObserver(handleResize)
      observer.observe(shell.element, {
        attributes: true,
        subtree: true
      })
    } else {
      shell.element.addEventListener("DOMSubtreeModified", handleResize, false)
    }
    window.addEventListener("resize", handleResize, false)
    
    //Hook keyboard listener
    window.addEventListener("keydown", handleKeyDown.bind(undefined, shell), false)
    window.addEventListener("keyup", handleKeyUp.bind(undefined, shell), false)
    
    //Disable right click
    shell.element.oncontextmenu = handleContexMenu.bind(undefined, shell)
    
    //Hook mouse listeners
    shell.element.addEventListener("mousedown", handleMouseDown.bind(undefined, shell), false)
    shell.element.addEventListener("mouseup", handleMouseUp.bind(undefined, shell), false)
    shell.element.addEventListener("mousemove", handleMouseMove.bind(undefined, shell), false)
    shell.element.addEventListener("mouseenter", handleMouseEnter.bind(undefined, shell), false)
    
    //Mouse leave
    var leave = handleMouseLeave.bind(undefined, shell)
    shell.element.addEventListener("mouseleave", leave, false)
    shell.element.addEventListener("mouseout", leave, false)
    window.addEventListener("mouseleave", leave, false)
    window.addEventListener("mouseout", leave, false)
    
    //Blur event 
    var blur = handleBlur.bind(undefined, shell)
    shell.element.addEventListener("blur", blur, false)
    shell.element.addEventListener("focusout", blur, false)
    shell.element.addEventListener("focus", blur, false)
    window.addEventListener("blur", blur, false)
    window.addEventListener("focusout", blur, false)
    window.addEventListener("focus", blur, false)

    //Mouse wheel handler
    addMouseWheel(shell.element, handleMouseWheel.bind(undefined, shell), false)

    //Fullscreen handler
    var fullscreenChange = handleFullscreen.bind(undefined, shell)
    document.addEventListener("fullscreenchange", fullscreenChange, false)
    document.addEventListener("mozfullscreenchange", fullscreenChange, false)
    document.addEventListener("webkitfullscreenchange", fullscreenChange, false)

    //Stupid fullscreen hack
    shell.element.addEventListener("click", tryFullscreen.bind(undefined, shell), false)

    //Pointer lock change handler
    var pointerLockChange = handlePointerLockChange.bind(undefined, shell)
    document.addEventListener("pointerlockchange", pointerLockChange, false)
    document.addEventListener("mozpointerlockchange", pointerLockChange, false)
    document.addEventListener("webkitpointerlockchange", pointerLockChange, false)
    document.addEventListener("pointerlocklost", pointerLockChange, false)
    document.addEventListener("webkitpointerlocklost", pointerLockChange, false)
    document.addEventListener("mozpointerlocklost", pointerLockChange, false)
    
    //Update flags
    shell.fullscreen = useFullscreen
    shell.pointerLock = usePointerLock
  
    //Default mouse button aliases
    shell.bind("mouse-left",   "mouse-1")
    shell.bind("mouse-right",  "mouse-3")
    shell.bind("mouse-middle", "mouse-2")
    
    //Initialize tick counter
    shell._lastTick = hrtime()
    shell.startTime = hrtime()

    //Unpause shell
    shell.paused = false
    
    //Emit initialize event
    shell.emit("init")
  })}, 0)
  
  return shell
}

module.exports = createShell

},{"./lib/hrtime-polyfill.js":29,"./lib/mousewheel-polyfill.js":30,"./lib/raf-polyfill.js":31,"binary-search-bounds":32,"domready":33,"events":8,"invert-hash":34,"iota-array":35,"uniq":36,"util":13,"vkey":37}],39:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],40:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"dup":27,"weak-map":39}],41:[function(require,module,exports){
"use strict";
'use strict';
var createUniformWrapper = require('./lib/create-uniforms');
var createAttributeWrapper = require('./lib/create-attributes');
var makeReflect = require('./lib/reflect');
var shaderCache = require('./lib/shader-cache');
var runtime = require('./lib/runtime-reflect');
function Shader(gl) {
  this.gl = gl;
  this._vref = this._fref = this._relink = this.vertShader = this.fragShader = this.program = this.attributes = this.uniforms = this.types = null;
}
var proto = Shader.prototype;
proto.bind = function() {
  if (!this.program) {
    this._relink();
  }
  this.gl.useProgram(this.program);
};
proto.dispose = function() {
  if (this._fref) {
    this._fref.dispose();
  }
  if (this._vref) {
    this._vref.dispose();
  }
  this.attributes = this.types = this.vertShader = this.fragShader = this.program = this._relink = this._fref = this._vref = null;
};
function compareAttributes(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  return 1;
}
proto.update = function(vertSource, fragSource, uniforms, attributes) {
  if (!fragSource || arguments.length === 1) {
    var obj = vertSource;
    vertSource = obj.vertex;
    fragSource = obj.fragment;
    uniforms = obj.uniforms;
    attributes = obj.attributes;
  }
  var wrapper = this;
  var gl = wrapper.gl;
  var pvref = wrapper._vref;
  wrapper._vref = shaderCache.shader(gl, gl.VERTEX_SHADER, vertSource);
  if (pvref) {
    pvref.dispose();
  }
  wrapper.vertShader = wrapper._vref.shader;
  var pfref = this._fref;
  wrapper._fref = shaderCache.shader(gl, gl.FRAGMENT_SHADER, fragSource);
  if (pfref) {
    pfref.dispose();
  }
  wrapper.fragShader = wrapper._fref.shader;
  if (!uniforms || !attributes) {
    var testProgram = gl.createProgram();
    gl.attachShader(testProgram, wrapper.fragShader);
    gl.attachShader(testProgram, wrapper.vertShader);
    gl.linkProgram(testProgram);
    if (!gl.getProgramParameter(testProgram, gl.LINK_STATUS)) {
      var errLog = gl.getProgramInfoLog(testProgram);
      console.error('gl-shader: Error linking program:', errLog);
      throw new Error('gl-shader: Error linking program:' + errLog);
    }
    uniforms = uniforms || runtime.uniforms(gl, testProgram);
    attributes = attributes || runtime.attributes(gl, testProgram);
    gl.deleteProgram(testProgram);
  }
  attributes = attributes.slice();
  attributes.sort(compareAttributes);
  var attributeUnpacked = [];
  var attributeNames = [];
  var attributeLocations = [];
  for (var i = 0; i < attributes.length; ++i) {
    var attr = attributes[i];
    if (attr.type.indexOf('mat') >= 0) {
      var size = attr.type.charAt(attr.type.length - 1) | 0;
      var locVector = new Array(size);
      for (var j = 0; j < size; ++j) {
        locVector[j] = attributeLocations.length;
        attributeNames.push(attr.name + '[' + j + ']');
        if (typeof attr.location === 'number') {
          attributeLocations.push(attr.location + j);
        } else if (Array.isArray(attr.location) && attr.location.length === size && typeof attr.location[j] === 'number') {
          attributeLocations.push(attr.location[j] | 0);
        } else {
          attributeLocations.push(-1);
        }
      }
      attributeUnpacked.push({
        name: attr.name,
        type: attr.type,
        locations: locVector
      });
    } else {
      attributeUnpacked.push({
        name: attr.name,
        type: attr.type,
        locations: [attributeLocations.length]
      });
      attributeNames.push(attr.name);
      if (typeof attr.location === 'number') {
        attributeLocations.push(attr.location | 0);
      } else {
        attributeLocations.push(-1);
      }
    }
  }
  var curLocation = 0;
  for (var i = 0; i < attributeLocations.length; ++i) {
    if (attributeLocations[i] < 0) {
      while (attributeLocations.indexOf(curLocation) >= 0) {
        curLocation += 1;
      }
      attributeLocations[i] = curLocation;
    }
  }
  var uniformLocations = new Array(uniforms.length);
  function relink() {
    wrapper.program = shaderCache.program(gl, wrapper._vref, wrapper._fref, attributeNames, attributeLocations);
    for (var i = 0; i < uniforms.length; ++i) {
      uniformLocations[i] = gl.getUniformLocation(wrapper.program, uniforms[i].name);
    }
  }
  relink();
  wrapper._relink = relink;
  wrapper.types = {
    uniforms: makeReflect(uniforms),
    attributes: makeReflect(attributes)
  };
  wrapper.attributes = createAttributeWrapper(gl, wrapper, attributeUnpacked, attributeLocations);
  Object.defineProperty(wrapper, 'uniforms', createUniformWrapper(gl, wrapper, uniforms, uniformLocations));
};
function createShader(gl, vertSource, fragSource, uniforms, attributes) {
  var shader = new Shader(gl);
  shader.update(vertSource, fragSource, uniforms, attributes);
  return shader;
}
module.exports = createShader;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-shader/index.js
},{"./lib/create-attributes":42,"./lib/create-uniforms":43,"./lib/reflect":44,"./lib/runtime-reflect":45,"./lib/shader-cache":46}],42:[function(require,module,exports){
"use strict";
'use strict';
module.exports = createAttributeWrapper;
function ShaderAttribute(gl, wrapper, index, locations, dimension, constFunc) {
  this._gl = gl;
  this._wrapper = wrapper;
  this._index = index;
  this._locations = locations;
  this._dimension = dimension;
  this._constFunc = constFunc;
}
var proto = ShaderAttribute.prototype;
proto.pointer = function setAttribPointer(type, normalized, stride, offset) {
  var self = this;
  var gl = self._gl;
  var location = self._locations[self._index];
  gl.vertexAttribPointer(location, self._dimension, type || gl.FLOAT, !!normalized, stride || 0, offset || 0);
  gl.enableVertexAttribArray(location);
};
proto.set = function(x0, x1, x2, x3) {
  return this._constFunc(this._locations[this._index], x0, x1, x2, x3);
};
Object.defineProperty(proto, 'location', {
  get: function() {
    return this._locations[this._index];
  },
  set: function(v) {
    if (v !== this._locations[this._index]) {
      this._locations[this._index] = v | 0;
      this._wrapper.program = null;
    }
    return v | 0;
  }
});
function addVectorAttribute(gl, wrapper, index, locations, dimension, obj, name) {
  var constFuncArgs = ['gl', 'v'];
  var varNames = [];
  for (var i = 0; i < dimension; ++i) {
    constFuncArgs.push('x' + i);
    varNames.push('x' + i);
  }
  constFuncArgs.push('if(x0.length===void 0){return gl.vertexAttrib' + dimension + 'f(v,' + varNames.join() + ')}else{return gl.vertexAttrib' + dimension + 'fv(v,x0)}');
  var constFunc = Function.apply(null, constFuncArgs);
  var attr = new ShaderAttribute(gl, wrapper, index, locations, dimension, constFunc);
  Object.defineProperty(obj, name, {
    set: function(x) {
      gl.disableVertexAttribArray(locations[index]);
      constFunc(gl, locations[index], x);
      return x;
    },
    get: function() {
      return attr;
    },
    enumerable: true
  });
}
function addMatrixAttribute(gl, wrapper, index, locations, dimension, obj, name) {
  var parts = new Array(dimension);
  var attrs = new Array(dimension);
  for (var i = 0; i < dimension; ++i) {
    addVectorAttribute(gl, wrapper, index[i], locations, dimension, parts, i);
    attrs[i] = parts[i];
  }
  Object.defineProperty(parts, 'location', {
    set: function(v) {
      if (Array.isArray) {
        for (var i = 0; i < dimension; ++i) {
          attrs[i].location = v[i];
        }
      } else {
        for (var i = 0; i < dimension; ++i) {
          result[i] = attrs[i].location = v + i;
        }
      }
      return v;
    },
    get: function() {
      var result = new Array(dimension);
      for (var i = 0; i < dimension; ++i) {
        result[i] = locations[index[i]];
      }
      return result;
    },
    enumerable: true
  });
  parts.pointer = function(type, normalized, stride, offset) {
    type = type || gl.FLOAT;
    normalized = !!normalized;
    stride = stride || (dimension * dimension);
    offset = offset || 0;
    for (var i = 0; i < dimension; ++i) {
      var location = locations[index[i]];
      gl.vertexAttribPointer(location, dimension, type, normalized, stride, offset + i * dimension);
      gl.enableVertexAttribArray(location);
    }
  };
  var scratch = new Array(dimension);
  var vertexAttrib = gl['vertexAttrib' + dimension + 'fv'];
  Object.defineProperty(obj, name, {
    set: function(x) {
      for (var i = 0; i < dimension; ++i) {
        var loc = locations[index[i]];
        gl.disableVertexAttribArray(loc);
        if (Array.isArray(x[0])) {
          vertexAttrib.call(gl, loc, x[i]);
        } else {
          for (var j = 0; j < dimension; ++j) {
            scratch[j] = x[dimension * i + j];
          }
          vertexAttrib.call(gl, loc, scratch);
        }
      }
      return x;
    },
    get: function() {
      return parts;
    },
    enumerable: true
  });
}
function createAttributeWrapper(gl, wrapper, attributes, locations) {
  var obj = {};
  for (var i = 0,
      n = attributes.length; i < n; ++i) {
    var a = attributes[i];
    var name = a.name;
    var type = a.type;
    var locs = a.locations;
    switch (type) {
      case 'bool':
      case 'int':
      case 'float':
        addVectorAttribute(gl, wrapper, locs[0], locations, 1, obj, name);
        break;
      default:
        if (type.indexOf('vec') >= 0) {
          var d = type.charCodeAt(type.length - 1) - 48;
          if (d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type for attribute ' + name + ': ' + type);
          }
          addVectorAttribute(gl, wrapper, locs[0], locations, d, obj, name);
        } else if (type.indexOf('mat') >= 0) {
          var d = type.charCodeAt(type.length - 1) - 48;
          if (d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type for attribute ' + name + ': ' + type);
          }
          addMatrixAttribute(gl, wrapper, locs, locations, d, obj, name);
        } else {
          throw new Error('gl-shader: Unknown data type for attribute ' + name + ': ' + type);
        }
        break;
    }
  }
  return obj;
}


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-shader/lib/create-attributes.js
},{}],43:[function(require,module,exports){
"use strict";
'use strict';
var coallesceUniforms = require('./reflect');
module.exports = createUniformWrapper;
function identity(x) {
  var c = new Function('y', 'return function(){return y}');
  return c(x);
}
function makeVector(length, fill) {
  var result = new Array(length);
  for (var i = 0; i < length; ++i) {
    result[i] = fill;
  }
  return result;
}
function createUniformWrapper(gl, wrapper, uniforms, locations) {
  function makeGetter(index) {
    var proc = new Function('gl', 'wrapper', 'locations', 'return function(){return gl.getUniform(wrapper.program,locations[' + index + '])}');
    return proc(gl, wrapper, locations);
  }
  function makePropSetter(path, index, type) {
    switch (type) {
      case 'bool':
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 'gl.uniform1i(locations[' + index + '],obj' + path + ')';
      case 'float':
        return 'gl.uniform1f(locations[' + index + '],obj' + path + ')';
      default:
        var vidx = type.indexOf('vec');
        if (0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length - 1) - 48;
          if (d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type');
          }
          switch (type.charAt(0)) {
            case 'b':
            case 'i':
              return 'gl.uniform' + d + 'iv(locations[' + index + '],obj' + path + ')';
            case 'v':
              return 'gl.uniform' + d + 'fv(locations[' + index + '],obj' + path + ')';
            default:
              throw new Error('gl-shader: Unrecognized data type for vector ' + name + ': ' + type);
          }
        } else if (type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length - 1) - 48;
          if (d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid uniform dimension type for matrix ' + name + ': ' + type);
          }
          return 'gl.uniformMatrix' + d + 'fv(locations[' + index + '],false,obj' + path + ')';
        } else {
          throw new Error('gl-shader: Unknown uniform data type for ' + name + ': ' + type);
        }
        break;
    }
  }
  function enumerateIndices(prefix, type) {
    if (typeof type !== 'object') {
      return [[prefix, type]];
    }
    var indices = [];
    for (var id in type) {
      var prop = type[id];
      var tprefix = prefix;
      if (parseInt(id) + '' === id) {
        tprefix += '[' + id + ']';
      } else {
        tprefix += '.' + id;
      }
      if (typeof prop === 'object') {
        indices.push.apply(indices, enumerateIndices(tprefix, prop));
      } else {
        indices.push([tprefix, prop]);
      }
    }
    return indices;
  }
  function makeSetter(type) {
    var code = ['return function updateProperty(obj){'];
    var indices = enumerateIndices('', type);
    for (var i = 0; i < indices.length; ++i) {
      var item = indices[i];
      var path = item[0];
      var idx = item[1];
      if (locations[idx]) {
        code.push(makePropSetter(path, idx, uniforms[idx].type));
      }
    }
    code.push('return obj}');
    var proc = new Function('gl', 'locations', code.join('\n'));
    return proc(gl, locations);
  }
  function defaultValue(type) {
    switch (type) {
      case 'bool':
        return false;
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 0;
      case 'float':
        return 0.0;
      default:
        var vidx = type.indexOf('vec');
        if (0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length - 1) - 48;
          if (d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type');
          }
          if (type.charAt(0) === 'b') {
            return makeVector(d, false);
          }
          return makeVector(d, 0);
        } else if (type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length - 1) - 48;
          if (d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid uniform dimension type for matrix ' + name + ': ' + type);
          }
          return makeVector(d * d, 0);
        } else {
          throw new Error('gl-shader: Unknown uniform data type for ' + name + ': ' + type);
        }
        break;
    }
  }
  function storeProperty(obj, prop, type) {
    if (typeof type === 'object') {
      var child = processObject(type);
      Object.defineProperty(obj, prop, {
        get: identity(child),
        set: makeSetter(type),
        enumerable: true,
        configurable: false
      });
    } else {
      if (locations[type]) {
        Object.defineProperty(obj, prop, {
          get: makeGetter(type),
          set: makeSetter(type),
          enumerable: true,
          configurable: false
        });
      } else {
        obj[prop] = defaultValue(uniforms[type].type);
      }
    }
  }
  function processObject(obj) {
    var result;
    if (Array.isArray(obj)) {
      result = new Array(obj.length);
      for (var i = 0; i < obj.length; ++i) {
        storeProperty(result, i, obj[i]);
      }
    } else {
      result = {};
      for (var id in obj) {
        storeProperty(result, id, obj[id]);
      }
    }
    return result;
  }
  var coallesced = coallesceUniforms(uniforms, true);
  return {
    get: identity(processObject(coallesced)),
    set: makeSetter(coallesced),
    enumerable: true,
    configurable: true
  };
}


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-shader/lib/create-uniforms.js
},{"./reflect":44}],44:[function(require,module,exports){
"use strict";
'use strict';
module.exports = makeReflectTypes;
function makeReflectTypes(uniforms, useIndex) {
  var obj = {};
  for (var i = 0; i < uniforms.length; ++i) {
    var n = uniforms[i].name;
    var parts = n.split(".");
    var o = obj;
    for (var j = 0; j < parts.length; ++j) {
      var x = parts[j].split("[");
      if (x.length > 1) {
        if (!(x[0] in o)) {
          o[x[0]] = [];
        }
        o = o[x[0]];
        for (var k = 1; k < x.length; ++k) {
          var y = parseInt(x[k]);
          if (k < x.length - 1 || j < parts.length - 1) {
            if (!(y in o)) {
              if (k < x.length - 1) {
                o[y] = [];
              } else {
                o[y] = {};
              }
            }
            o = o[y];
          } else {
            if (useIndex) {
              o[y] = i;
            } else {
              o[y] = uniforms[i].type;
            }
          }
        }
      } else if (j < parts.length - 1) {
        if (!(x[0] in o)) {
          o[x[0]] = {};
        }
        o = o[x[0]];
      } else {
        if (useIndex) {
          o[x[0]] = i;
        } else {
          o[x[0]] = uniforms[i].type;
        }
      }
    }
  }
  return obj;
}


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-shader/lib/reflect.js
},{}],45:[function(require,module,exports){
"use strict";
'use strict';
exports.uniforms = runtimeUniforms;
exports.attributes = runtimeAttributes;
var GL_TO_GLSL_TYPES = {
  'FLOAT': 'float',
  'FLOAT_VEC2': 'vec2',
  'FLOAT_VEC3': 'vec3',
  'FLOAT_VEC4': 'vec4',
  'INT': 'int',
  'INT_VEC2': 'ivec2',
  'INT_VEC3': 'ivec3',
  'INT_VEC4': 'ivec4',
  'BOOL': 'bool',
  'BOOL_VEC2': 'bvec2',
  'BOOL_VEC3': 'bvec3',
  'BOOL_VEC4': 'bvec4',
  'FLOAT_MAT2': 'mat2',
  'FLOAT_MAT3': 'mat3',
  'FLOAT_MAT4': 'mat4',
  'SAMPLER_2D': 'sampler2D',
  'SAMPLER_CUBE': 'samplerCube'
};
var GL_TABLE = null;
function getType(gl, type) {
  if (!GL_TABLE) {
    var typeNames = Object.keys(GL_TO_GLSL_TYPES);
    GL_TABLE = {};
    for (var i = 0; i < typeNames.length; ++i) {
      var tn = typeNames[i];
      GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
    }
  }
  return GL_TABLE[type];
}
function runtimeUniforms(gl, program) {
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  var result = [];
  for (var i = 0; i < numUniforms; ++i) {
    var info = gl.getActiveUniform(program, i);
    if (info) {
      result.push({
        name: info.name,
        type: getType(gl, info.type)
      });
    }
  }
  return result;
}
function runtimeAttributes(gl, program) {
  var numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
  var result = [];
  for (var i = 0; i < numAttributes; ++i) {
    var info = gl.getActiveAttrib(program, i);
    if (info) {
      result.push({
        name: info.name,
        type: getType(gl, info.type)
      });
    }
  }
  return result;
}


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-shader/lib/runtime-reflect.js
},{}],46:[function(require,module,exports){
"use strict";
'use strict';
exports.shader = getShaderReference;
exports.program = createProgram;
var weakMap = typeof WeakMap === 'undefined' ? require('weakmap-shim') : WeakMap;
var CACHE = new weakMap();
var SHADER_COUNTER = 0;
function ShaderReference(id, src, type, shader, programs, count, cache) {
  this.id = id;
  this.src = src;
  this.type = type;
  this.shader = shader;
  this.count = count;
  this.programs = [];
  this.cache = cache;
}
ShaderReference.prototype.dispose = function() {
  if (--this.count === 0) {
    var cache = this.cache;
    var gl = cache.gl;
    var programs = this.programs;
    for (var i = 0,
        n = programs.length; i < n; ++i) {
      var p = cache.programs[programs[i]];
      if (p) {
        delete cache.programs[i];
        gl.deleteProgram(p);
      }
    }
    gl.deleteShader(this.shader);
    delete cache.shaders[(this.type === gl.FRAGMENT_SHADER) | 0][this.src];
  }
};
function ContextCache(gl) {
  this.gl = gl;
  this.shaders = [{}, {}];
  this.programs = {};
}
var proto = ContextCache.prototype;
function compileShader(gl, type, src) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(shader);
    console.error('gl-shader: Error compiling shader:', errLog);
    throw new Error('gl-shader: Error compiling shader:' + errLog);
  }
  return shader;
}
proto.getShaderReference = function(type, src) {
  var gl = this.gl;
  var shaders = this.shaders[(type === gl.FRAGMENT_SHADER) | 0];
  var shader = shaders[src];
  if (!shader) {
    var shaderObj = compileShader(gl, type, src);
    shader = shaders[src] = new ShaderReference(SHADER_COUNTER++, src, type, shaderObj, [], 1, this);
  } else {
    shader.count += 1;
  }
  return shader;
};
function linkProgram(gl, vshader, fshader, attribs, locations) {
  var program = gl.createProgram();
  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  for (var i = 0; i < attribs.length; ++i) {
    gl.bindAttribLocation(program, locations[i], attribs[i]);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var errLog = gl.getProgramInfoLog(program);
    console.error('gl-shader: Error linking program:', errLog);
    throw new Error('gl-shader: Error linking program:' + errLog);
  }
  return program;
}
proto.getProgram = function(vref, fref, attribs, locations) {
  var token = [vref.id, fref.id, attribs.join(':'), locations.join(':')].join('@');
  var prog = this.programs[token];
  if (!prog) {
    this.programs[token] = prog = linkProgram(this.gl, vref.shader, fref.shader, attribs, locations);
    vref.programs.push(token);
    fref.programs.push(token);
  }
  return prog;
};
function getCache(gl) {
  var ctxCache = CACHE.get(gl);
  if (!ctxCache) {
    ctxCache = new ContextCache(gl);
    CACHE.set(gl, ctxCache);
  }
  return ctxCache;
}
function getShaderReference(gl, type, src) {
  return getCache(gl).getShaderReference(type, src);
}
function createProgram(gl, vref, fref, attribs, locations) {
  return getCache(gl).getProgram(vref, fref, attribs, locations);
}


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-shader/lib/shader-cache.js
},{"weakmap-shim":49}],47:[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":48}],48:[function(require,module,exports){
module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}

},{}],49:[function(require,module,exports){
// Original - @Gozola. 
// https://gist.github.com/Gozala/1269991
// This is a reimplemented version (with a few bug fixes).

var createStore = require('./create-store.js');

module.exports = weakMap;

function weakMap() {
    var privates = createStore();

    return {
        'get': function (key, fallback) {
            var store = privates(key)
            return store.hasOwnProperty('value') ?
                store.value : fallback
        },
        'set': function (key, value) {
            privates(key).value = value;
        },
        'has': function(key) {
            return 'value' in privates(key);
        },
        'delete': function (key) {
            return delete privates(key).value;
        }
    }
}

},{"./create-store.js":47}],50:[function(require,module,exports){
"use strict";
"use strict";
function doBind(gl, elements, attributes) {
  if (elements) {
    elements.bind();
  } else {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }
  var nattribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS) | 0;
  if (attributes) {
    if (attributes.length > nattribs) {
      throw new Error("gl-vao: Too many vertex attributes");
    }
    for (var i = 0; i < attributes.length; ++i) {
      var attrib = attributes[i];
      if (attrib.buffer) {
        var buffer = attrib.buffer;
        var size = attrib.size || 4;
        var type = attrib.type || gl.FLOAT;
        var normalized = !!attrib.normalized;
        var stride = attrib.stride || 0;
        var offset = attrib.offset || 0;
        buffer.bind();
        gl.enableVertexAttribArray(i);
        gl.vertexAttribPointer(i, size, type, normalized, stride, offset);
      } else {
        if (typeof attrib === "number") {
          gl.vertexAttrib1f(i, attrib);
        } else if (attrib.length === 1) {
          gl.vertexAttrib1f(i, attrib[0]);
        } else if (attrib.length === 2) {
          gl.vertexAttrib2f(i, attrib[0], attrib[1]);
        } else if (attrib.length === 3) {
          gl.vertexAttrib3f(i, attrib[0], attrib[1], attrib[2]);
        } else if (attrib.length === 4) {
          gl.vertexAttrib4f(i, attrib[0], attrib[1], attrib[2], attrib[3]);
        } else {
          throw new Error("gl-vao: Invalid vertex attribute");
        }
        gl.disableVertexAttribArray(i);
      }
    }
    for (; i < nattribs; ++i) {
      gl.disableVertexAttribArray(i);
    }
  } else {
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    for (var i = 0; i < nattribs; ++i) {
      gl.disableVertexAttribArray(i);
    }
  }
}
module.exports = doBind;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-vao/lib/do-bind.js
},{}],51:[function(require,module,exports){
"use strict";
"use strict";
var bindAttribs = require("./do-bind.js");
function VAOEmulated(gl) {
  this.gl = gl;
  this._elements = null;
  this._attributes = null;
  this._elementsType = gl.UNSIGNED_SHORT;
}
VAOEmulated.prototype.bind = function() {
  bindAttribs(this.gl, this._elements, this._attributes);
};
VAOEmulated.prototype.update = function(attributes, elements, elementsType) {
  this._elements = elements;
  this._attributes = attributes;
  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT;
};
VAOEmulated.prototype.dispose = function() {};
VAOEmulated.prototype.unbind = function() {};
VAOEmulated.prototype.draw = function(mode, count, offset) {
  offset = offset || 0;
  var gl = this.gl;
  if (this._elements) {
    gl.drawElements(mode, count, this._elementsType, offset);
  } else {
    gl.drawArrays(mode, offset, count);
  }
};
function createVAOEmulated(gl) {
  return new VAOEmulated(gl);
}
module.exports = createVAOEmulated;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-vao/lib/vao-emulated.js
},{"./do-bind.js":50}],52:[function(require,module,exports){
"use strict";
"use strict";
var bindAttribs = require("./do-bind.js");
function VertexAttribute(location, dimension, a, b, c, d) {
  this.location = location;
  this.dimension = dimension;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
VertexAttribute.prototype.bind = function(gl) {
  switch (this.dimension) {
    case 1:
      gl.vertexAttrib1f(this.location, this.a);
      break;
    case 2:
      gl.vertexAttrib2f(this.location, this.a, this.b);
      break;
    case 3:
      gl.vertexAttrib3f(this.location, this.a, this.b, this.c);
      break;
    case 4:
      gl.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d);
      break;
  }
};
function VAONative(gl, ext, handle) {
  this.gl = gl;
  this._ext = ext;
  this.handle = handle;
  this._attribs = [];
  this._useElements = false;
  this._elementsType = gl.UNSIGNED_SHORT;
}
VAONative.prototype.bind = function() {
  this._ext.bindVertexArrayOES(this.handle);
  for (var i = 0; i < this._attribs.length; ++i) {
    this._attribs[i].bind(this.gl);
  }
};
VAONative.prototype.unbind = function() {
  this._ext.bindVertexArrayOES(null);
};
VAONative.prototype.dispose = function() {
  this._ext.deleteVertexArrayOES(this.handle);
};
VAONative.prototype.update = function(attributes, elements, elementsType) {
  this.bind();
  bindAttribs(this.gl, elements, attributes);
  this.unbind();
  this._attribs.length = 0;
  if (attributes)
    for (var i = 0; i < attributes.length; ++i) {
      var a = attributes[i];
      if (typeof a === "number") {
        this._attribs.push(new VertexAttribute(i, 1, a));
      } else if (Array.isArray(a)) {
        this._attribs.push(new VertexAttribute(i, a.length, a[0], a[1], a[2], a[3]));
      }
    }
  this._useElements = !!elements;
  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT;
};
VAONative.prototype.draw = function(mode, count, offset) {
  offset = offset || 0;
  var gl = this.gl;
  if (this._useElements) {
    gl.drawElements(mode, count, this._elementsType, offset);
  } else {
    gl.drawArrays(mode, offset, count);
  }
};
function createVAONative(gl, ext) {
  return new VAONative(gl, ext, ext.createVertexArrayOES());
}
module.exports = createVAONative;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-vao/lib/vao-native.js
},{"./do-bind.js":50}],53:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],54:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"dup":27,"weak-map":53}],55:[function(require,module,exports){
"use strict";
"use strict";
var webglew = require("webglew");
var createVAONative = require("./lib/vao-native.js");
var createVAOEmulated = require("./lib/vao-emulated.js");
function createVAO(gl, attributes, elements, elementsType) {
  var ext = webglew(gl).OES_vertex_array_object;
  var vao;
  if (ext) {
    vao = createVAONative(gl, ext);
  } else {
    vao = createVAOEmulated(gl);
  }
  vao.update(attributes, elements, elementsType);
  return vao;
}
module.exports = createVAO;


//# sourceURL=/home/andre/code/js/epn/node_modules/gl-vao/vao.js
},{"./lib/vao-emulated.js":51,"./lib/vao-native.js":52,"webglew":54}]},{},[14,1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9pbmRleC5qcyIsIi9ob21lL2FuZHJlL2NvZGUvanMvZXBuL2xpYi9zcXVhcmUuanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9saWIvdm9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pcy1hcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9lczZpZnkvbm9kZV9tb2R1bGVzL3RyYWNldXIvYmluL3RyYWNldXItcnVudGltZS5qcyIsIi9ob21lL2FuZHJlL2NvZGUvanMvZXBuL25vZGVfbW9kdWxlcy9nbC1idWZmZXIvYnVmZmVyLmpzIiwibm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbmRhcnJheS1vcHMuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbGliL2NvbXBpbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbGliL3RodW5rLmpzIiwibm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbm9kZV9tb2R1bGVzL2N3aXNlLWNvbXBpbGVyL25vZGVfbW9kdWxlcy91bmlxL3VuaXEuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5L25kYXJyYXkuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy9uZGFycmF5L25vZGVfbW9kdWxlcy9pb3RhLWFycmF5L2lvdGEuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy90eXBlZGFycmF5LXBvb2wvbm9kZV9tb2R1bGVzL2JpdC10d2lkZGxlL3R3aWRkbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy90eXBlZGFycmF5LXBvb2wvbm9kZV9tb2R1bGVzL2R1cC9kdXAuanMiLCJub2RlX21vZHVsZXMvZ2wtYnVmZmVyL25vZGVfbW9kdWxlcy90eXBlZGFycmF5LXBvb2wvcG9vbC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1idWZmZXIvbm9kZV9tb2R1bGVzL3dlYmdsZXcvbm9kZV9tb2R1bGVzL3dlYWstbWFwL3dlYWstbWFwLmpzIiwibm9kZV9tb2R1bGVzL2dsLWJ1ZmZlci9ub2RlX21vZHVsZXMvd2ViZ2xldy93ZWJnbGV3LmpzIiwiL2hvbWUvYW5kcmUvY29kZS9qcy9lcG4vbm9kZV9tb2R1bGVzL2dsLW5vdy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1ub3cvbm9kZV9tb2R1bGVzL2dhbWUtc2hlbGwvbGliL2hydGltZS1wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1ub3cvbm9kZV9tb2R1bGVzL2dhbWUtc2hlbGwvbGliL21vdXNld2hlZWwtcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvZ2wtbm93L25vZGVfbW9kdWxlcy9nYW1lLXNoZWxsL2xpYi9yYWYtcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvZ2wtbm93L25vZGVfbW9kdWxlcy9nYW1lLXNoZWxsL25vZGVfbW9kdWxlcy9iaW5hcnktc2VhcmNoLWJvdW5kcy9zZWFyY2gtYm91bmRzLmpzIiwibm9kZV9tb2R1bGVzL2dsLW5vdy9ub2RlX21vZHVsZXMvZ2FtZS1zaGVsbC9ub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbm93L25vZGVfbW9kdWxlcy9nYW1lLXNoZWxsL25vZGVfbW9kdWxlcy9pbnZlcnQtaGFzaC9pbnZlcnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbm93L25vZGVfbW9kdWxlcy9nYW1lLXNoZWxsL25vZGVfbW9kdWxlcy92a2V5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW5vdy9ub2RlX21vZHVsZXMvZ2FtZS1zaGVsbC9zaGVsbC5qcyIsIi9ob21lL2FuZHJlL2NvZGUvanMvZXBuL25vZGVfbW9kdWxlcy9nbC1zaGFkZXIvaW5kZXguanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyL2xpYi9jcmVhdGUtYXR0cmlidXRlcy5qcyIsIi9ob21lL2FuZHJlL2NvZGUvanMvZXBuL25vZGVfbW9kdWxlcy9nbC1zaGFkZXIvbGliL2NyZWF0ZS11bmlmb3Jtcy5qcyIsIi9ob21lL2FuZHJlL2NvZGUvanMvZXBuL25vZGVfbW9kdWxlcy9nbC1zaGFkZXIvbGliL3JlZmxlY3QuanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyL2xpYi9ydW50aW1lLXJlZmxlY3QuanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9ub2RlX21vZHVsZXMvZ2wtc2hhZGVyL2xpYi9zaGFkZXItY2FjaGUuanMiLCJub2RlX21vZHVsZXMvZ2wtc2hhZGVyL25vZGVfbW9kdWxlcy93ZWFrbWFwLXNoaW0vY3JlYXRlLXN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNoYWRlci9ub2RlX21vZHVsZXMvd2Vha21hcC1zaGltL2hpZGRlbi1zdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXIvbm9kZV9tb2R1bGVzL3dlYWttYXAtc2hpbS9pbmRleC5qcyIsIi9ob21lL2FuZHJlL2NvZGUvanMvZXBuL25vZGVfbW9kdWxlcy9nbC12YW8vbGliL2RvLWJpbmQuanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9ub2RlX21vZHVsZXMvZ2wtdmFvL2xpYi92YW8tZW11bGF0ZWQuanMiLCIvaG9tZS9hbmRyZS9jb2RlL2pzL2Vwbi9ub2RlX21vZHVsZXMvZ2wtdmFvL2xpYi92YW8tbmF0aXZlLmpzIiwiL2hvbWUvYW5kcmUvY29kZS9qcy9lcG4vbm9kZV9tb2R1bGVzL2dsLXZhby92YW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7Ozs7QUFBQSxXQUFXLENBQUM7QUFFWixBQUFNLEVBQUEsQ0FBQSxZQUFXLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxXQUFVLENBQUMsQ0FBQTtBQUN4QyxBQUFNLEVBQUEsQ0FBQSxZQUFXLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxXQUFVLENB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QVMsQ0FBRyxDQUFBLElBQUcsVUFBVSxDQUFDLENBQUE7QUFDM0MsT0FBRyxJQUFJLE9BQU8sQUFBQyxFQUFDLENBQUE7RUFDbEIsTUFYbUY7QUFBckYsQUFBSSxFQUFBLENBQUEsVUFBUyxFQWNFLFFBQU0sQUFkWSxDQUFBO0FBZWpDOzs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ256Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyZ0ZBO0FBQUEsV0FBVyxDQUFBO0FBRVgsQUFBSSxFQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsaUJBQWdCLENBQUMsQ0FBQTtBQUNwQyxBQUFJLEVBQUEsQ0FB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QUFBOzs7O0FDMUo1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN2NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFHLENBQUEsR0FBRSxxQkFBcUIsQUFBQyxFQUFDLENBQUMsQ0FBQTtBQUMxRDtBQUFBLEFBRUEsS0FBSyxRQUFRLEVBQUksZ0JBQWMsQ0FBQTtBQUFBOzs7Ozs7OztBQ3RGL0I7QUFBQSxXQUFXLENBQUE7QUFFWCxBQUFJLEVBQUEsQ0FBQSxPQUFNLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQTtBQUMvQixBQUFJLEVBQUEsQ0FBQSxlQUFjLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELEFBQUksRUFBQSxDQUFBLGlCQUFnQixFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsdUJBQXNCLENBQUMsQ0FBQTtBQUV2RCxPQUFTLFVBQVEsQ0FBRSxFQUFDLENBQUcsQ0FBQSxVQUFTLENBQUcsQ0FBQSxRQUFPLENBQUcsQ0FBQSxZQUFXLENBQUc7QUFDekQsQUFBSSxJQUFBLENBQUEsR0FBRSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixDQUFBO0FBQzVDLEFBQUksSUFBQSxDQUFBLEdBQUUsQ0FBQTtBQUNOLEtBQUcsR0FBRSxDQUFHO0FBQ04sTUFBRSxFQUFJLENBQUEsZUFBYyxBQUFDLENBQUMsRUFBQyxDQUFHLElBQUUsQ0FBQyxDQUFBO0VBQy9CLEtBQU87QUFDTCxNQUFFLEVBQUksQ0FBQSxpQkFBZ0IsQUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0VBQzVCO0FBQUEsQUFDQSxJQUFFLE9BQU8sQUFBQyxDQUFDLFVBQVMsQ0FBRyxTQUFPLENBQUcsYUFBVyxDQUFDLENBQUE7QUFDN0MsT0FBTyxJQUFFLENBQUE7QUFDWDtBQUFBLEFBRUEsS0FBSyxRQUFRLEVBQUksVUFBUSxDQUFBO0FBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVTaGFkZXIgPSByZXF1aXJlKCdnbC1zaGFkZXInKVxuY29uc3QgY3JlYXRlQnVmZmVyID0gcmVxdWlyZSgnZ2wtYnVmZmVyJylcbmNvbnN0IGNyZWF0ZVZBTyA9IHJlcXVpcmUoJ2dsLXZhbycpXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxubGV0IHNoZWxsID0gcmVxdWlyZSgnZ2wtbm93JykoKVxuXG5sZXQgc2hhZGVyLCB2YW8sIG9iLCByZXNvbHV0aW9uXG5cbmNvbnN0IHsgc2luLCBmbG9vciwgcmFuZG9tIH0gPSBNYXRoIFxuXG5sZXQgdnNfc3JjID0gZnMucmVhZEZpbGVTeW5jKCcuL3ZzLmdsc2wnKS50b1N0cmluZygndXRmLTgnKVxubGV0IGZzX3NyYyA9IGZzLnJlYWRGaWxlU3luYygnLi9mcy5nbHNsJykudG9TdHJpbmcoJ3V0Zi04JylcblxuaW1wb3J0IFZPYmplY3QgZnJvbSAnLi9saWIvdm9iamVjdCdcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9saWIvc3F1YXJlJ1xuXG5zaGVsbC5vbignZ2wtaW5pdCcsICgpID0+IHtcbiAgbGV0IGdsID0gc2hlbGwuZ2xcbiAgc2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCB2c19zcmMsIGZzX3NyYylcblxuICBzaGFkZXIuYXR0cmlidXRlcy5wb3NpdGlvbi5sb2NhdGlvbiA9IDBcbiAgc2hhZGVyLmF0dHJpYnV0ZXMuY29sb3IubG9jYXRpb24gPSAxXG5cbiAgcmVzb2x1dGlvbiA9IFtzaGVsbC53aWR0aCwgc2hlbGwuaGVpZ2h0XTtcbiAgb2IgPSBuZXcgU3F1YXJlKGdsLCAxLjAsIDEuMCwgWzEuMCwgMCwgLjMgLDFdKVxuICBjb25zb2xlLmxvZyhvYilcbn0pXG5cbnNoZWxsLm9uKCdnbC1yZW5kZXInLCB0ID0+IHtcbiAgbGV0IGdsID0gc2hlbGwuZ2xcblxuICBzaGFkZXIuYmluZCgpXG4gIHNoYWRlci51bmlmb3Jtcy51X3Jlc29sdXRpb24gPSByZXNvbHV0aW9uXG4gIHNoYWRlci51bmlmb3Jtcy50cCA9IHNpbigwLjAwMSAqIERhdGUubm93KCkpXG4gIG9iLmRyYXcoKVxufSlcblxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgIHRoaXMuZGF0YSA9IFt4LCB5LCB6XVxuICB9XG4gIFswXSgpIHtcbiAgICByZXR1cm4gdGhpcy54XG4gIH1cbn1cblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKHYxLCB2Mikge1xuICAgIHRoaXMudmVjdG9ycyA9IFt2MSwgdjJdXG4gIH1cbn1cblxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXgsIGNvbG9yKSB7XG4gICAgdGhpcy52ZWN0b3JzID0gW3YxLCB2MiwgdjNdXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gIH1cbn1cblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IoY29vcmRzLCBjb2xvcikge1xuICB9XG59XG5cbi8vY2xhc3MgTGluZSB7XG4gIC8vY29uc3RydWN0b3IodmVydGV4LCBjb2xvcikge1xuICAgIC8vbGV0IHZhbyA9IGNyZWF0ZVZBTyhnbCwgW3ZlcnRleCwgY29sb3JdKVxuICAvL31cbi8vfVxuIiwiaW1wb3J0IFZPYmplY3QgZnJvbSAnLi92b2JqZWN0J1xuaW1wb3J0IGNyZWF0ZVZBTyBmcm9tICdnbC12YW8nXG5pbXBvcnQgY3JlYXRlQnVmZmVyIGZyb20gJ2dsLWJ1ZmZlcidcblxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgVk9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKGdsLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgIGNvbnNvbGUubG9nKGdsLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcilcbiAgICBsZXQgd2QyID0gd2lkdGggLyAyXG4gICAgbGV0IGhkMiA9IGhlaWdodCAvIDJcblxuICAgIGxldCB2YW8gPSBjcmVhdGVWQU8oZ2wsIFtcbiAgICAgIHtcbiAgICAgICAgYnVmZmVyOiBjcmVhdGVCdWZmZXIoZ2wsIFtcbiAgICAgICAgICAtd2QyLCAtaGQyLCAwLjAsIDEsXG4gICAgICAgICAgd2QyLCAtaGQyLCAwLjAsIDEsXG4gICAgICAgICAgLXdkMiwgaGQyLCAwLjAsIDEsXG4gICAgICAgICAgLXdkMiwgaGQyLCAwLjAsIDEsXG4gICAgICAgICAgd2QyLCAtaGQyLCAwLjAsIDEsXG4gICAgICAgICAgd2QyLCBoZDIsIDAuMCwgMSxcbiAgICAgICAgXSksXG4gICAgICAgIHR5cGU6IGdsLkZMT0FULFxuICAgICAgICBzaXplOiA0LFxuICAgICAgfSxcbiAgICAgIGNvbG9yLFxuICAgIF0pXG4gICAgc3VwZXIodmFvLCBnbC5UUklBTkdMRVMsIDYpXG4gIH1cbiAgZHJhdygpIHtcbiAgICBzdXBlci5kcmF3KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmVcbiIsImNsYXNzIFZPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih2YW8sIGRyYXdUeXBlLCBkcmF3Q291bnQpIHtcbiAgICBjb25zb2xlLmxvZyh2YW8sIGRyYXdUeXBlLCBkcmF3Q291bnQpXG4gICAgdGhpcy52YW8gPSB2YW9cbiAgICB0aGlzLmRyYXdUeXBlID0gZHJhd1R5cGVcbiAgICB0aGlzLmRyYXdDb3VudCA9IGRyYXdDb3VudFxuICB9XG4gIGRyYXcoKSB7XG4gICAgdGhpcy52YW8uYmluZCgpXG4gICAgdGhpcy52YW8uZHJhdyh0aGlzLmRyYXdUeXBlLCB0aGlzLmRyYXdDb3VudClcbiAgICB0aGlzLnZhby51bmJpbmQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZPYmplY3RcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpcy1hcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIga01heExlbmd0aCA9IDB4M2ZmZmZmZmZcbnZhciByb290UGFyZW50ID0ge31cblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleSB3aWxsXG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBuZXcgVWludDhBcnJheSgxKS5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIEJ1ZmZlcikpIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgIGxlbmd0aCA9ICtzdWJqZWN0XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0ICE9PSBudWxsKSB7XG4gICAgLy8gYXNzdW1lIG9iamVjdCBpcyBhcnJheS1saWtlXG4gICAgaWYgKHN1YmplY3QudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShzdWJqZWN0LmRhdGEpKSBzdWJqZWN0ID0gc3ViamVjdC5kYXRhXG4gICAgbGVuZ3RoID0gK3N1YmplY3QubGVuZ3RoXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcnKVxuICB9XG5cbiAgaWYgKGxlbmd0aCA+IGtNYXhMZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSBzaXplOiAweCcgK1xuICAgICAga01heExlbmd0aC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuXG4gIGlmIChsZW5ndGggPCAwKSBsZW5ndGggPSAwXG4gIGVsc2UgbGVuZ3RoID4+Pj0gMCAvLyBjb2VyY2UgdG8gdWludDMyXG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHNlbGYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIHNlbGYubGVuZ3RoID0gbGVuZ3RoXG4gICAgc2VsZi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIHNlbGYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxmW2ldID0gKChzdWJqZWN0W2ldICUgMjU2KSArIDI1NikgJSAyNTZcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzZWxmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2VsZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICBpZiAobGVuZ3RoID4gMCAmJiBsZW5ndGggPD0gQnVmZmVyLnBvb2xTaXplKSBzZWxmLnBhcmVudCA9IHJvb3RQYXJlbnRcblxuICByZXR1cm4gc2VsZlxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2xvd0J1ZmZlcikpIHJldHVybiBuZXcgU2xvd0J1ZmZlcihzdWJqZWN0LCBlbmNvZGluZylcblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZylcbiAgZGVsZXRlIGJ1Zi5wYXJlbnRcbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbiAmJiBhW2ldID09PSBiW2ldOyBpKyspIHt9XG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2xpc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzLicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoID4+PiAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vLyBwcmUtc2V0IGZvciB2YWx1ZXMgdGhhdCBtYXkgZXhpc3QgaW4gdGhlIGZ1dHVyZVxuQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSB1bmRlZmluZWRcbkJ1ZmZlci5wcm90b3R5cGUucGFyZW50ID0gdW5kZWZpbmVkXG5cbi8vIHRvU3RyaW5nKGVuY29kaW5nLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG4gIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmIChlbmQgPD0gc3RhcnQpIHJldHVybiAnJ1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGJpbmFyeVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gMFxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0KSB7XG4gIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgYnl0ZU9mZnNldCA+Pj0gMFxuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG4gIGlmIChieXRlT2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm4gLTFcblxuICAvLyBOZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IE1hdGgubWF4KHRoaXMubGVuZ3RoICsgYnl0ZU9mZnNldCwgMClcblxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xIC8vIHNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nIGFsd2F5cyBmYWlsc1xuICAgIHJldHVybiBTdHJpbmcucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCB2YWwsIGJ5dGVPZmZzZXQpXG4gIH1cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKHRoaXMsIFsgdmFsIF0sIGJ5dGVPZmZzZXQpXG4gIH1cblxuICBmdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0KSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAodmFyIGkgPSAwOyBieXRlT2Zmc2V0ICsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycltieXRlT2Zmc2V0ICsgaV0gPT09IHZhbFtmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleF0pIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWwubGVuZ3RoKSByZXR1cm4gYnl0ZU9mZnNldCArIGZvdW5kSW5kZXhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQgKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcblxuICBpZiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSB1dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIGlmIChuZXdCdWYubGVuZ3RoKSBuZXdCdWYucGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpc1xuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpLCAwKVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSA+Pj4gMCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSwgMClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgPj4+IDAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJbnQoXG4gICAgICB0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLFxuICAgICAgTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKSAtIDEsXG4gICAgICAtTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuICAgIClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gdmFsdWUgPCAwID8gMSA6IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0ludChcbiAgICAgIHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsXG4gICAgICBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpIC0gMSxcbiAgICAgIC1NYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG4gICAgKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gdmFsdWUgPCAwID8gMSA6IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRfc3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0X3N0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldF9zdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gdXRmOFRvQnl0ZXModmFsdWUudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gdG9BcnJheUJ1ZmZlciAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gX2F1Z21lbnQgKGFycikge1xuICBhcnIuY29uc3RydWN0b3IgPSBCdWZmZXJcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IHNldCBtZXRob2QgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmluZGV4T2YgPSBCUC5pbmRleE9mXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnRMRSA9IEJQLnJlYWRVSW50TEVcbiAgYXJyLnJlYWRVSW50QkUgPSBCUC5yZWFkVUludEJFXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludExFID0gQlAucmVhZEludExFXG4gIGFyci5yZWFkSW50QkUgPSBCUC5yZWFkSW50QkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50TEUgPSBCUC53cml0ZVVJbnRMRVxuICBhcnIud3JpdGVVSW50QkUgPSBCUC53cml0ZVVJbnRCRVxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50TEUgPSBCUC53cml0ZUludExFXG4gIGFyci53cml0ZUludEJFID0gQlAud3JpdGVJbnRCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLXpcXC1dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cbiAgdmFyIGkgPSAwXG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgICAgIGNvZGVQb2ludCA9IGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDAgfCAweDEwMDAwXG4gICAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcblxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICAgIH1cblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MjAwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuIiwidmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVNfVVJMX1NBRkUgPSAnLScuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0hfVVJMX1NBRkUgPSAnXycuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTIHx8XG5cdFx0ICAgIGNvZGUgPT09IFBMVVNfVVJMX1NBRkUpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIIHx8XG5cdFx0ICAgIGNvZGUgPT09IFNMQVNIX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIiwiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmIChnbG9iYWwuJHRyYWNldXJSdW50aW1lKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuICB2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgdmFyICRjcmVhdGUgPSAkT2JqZWN0LmNyZWF0ZTtcbiAgdmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xuICB2YXIgJGRlZmluZVByb3BlcnR5ID0gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyICRmcmVlemUgPSAkT2JqZWN0LmZyZWV6ZTtcbiAgdmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgdmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICB2YXIgJGtleXMgPSAkT2JqZWN0LmtleXM7XG4gIHZhciAkaGFzT3duUHJvcGVydHkgPSAkT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyICR0b1N0cmluZyA9ICRPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuICB2YXIgJHNlYWwgPSBPYmplY3Quc2VhbDtcbiAgdmFyICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuICBmdW5jdGlvbiBub25FbnVtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICB9XG4gIHZhciBtZXRob2QgPSBub25FbnVtO1xuICB2YXIgY291bnRlciA9IDA7XG4gIGZ1bmN0aW9uIG5ld1VuaXF1ZVN0cmluZygpIHtcbiAgICByZXR1cm4gJ19fJCcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTkpICsgJyQnICsgKytjb3VudGVyICsgJyRfXyc7XG4gIH1cbiAgdmFyIHN5bWJvbEludGVybmFsUHJvcGVydHkgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgdmFyIHN5bWJvbERlc2NyaXB0aW9uUHJvcGVydHkgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgdmFyIHN5bWJvbERhdGFQcm9wZXJ0eSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICB2YXIgc3ltYm9sVmFsdWVzID0gJGNyZWF0ZShudWxsKTtcbiAgdmFyIHByaXZhdGVOYW1lcyA9ICRjcmVhdGUobnVsbCk7XG4gIGZ1bmN0aW9uIGlzUHJpdmF0ZU5hbWUocykge1xuICAgIHJldHVybiBwcml2YXRlTmFtZXNbc107XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUHJpdmF0ZU5hbWUoKSB7XG4gICAgdmFyIHMgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgICBwcml2YXRlTmFtZXNbc10gPSB0cnVlO1xuICAgIHJldHVybiBzO1xuICB9XG4gIGZ1bmN0aW9uIGlzU2hpbVN5bWJvbChzeW1ib2wpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN5bWJvbCA9PT0gJ29iamVjdCcgJiYgc3ltYm9sIGluc3RhbmNlb2YgU3ltYm9sVmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gdHlwZU9mKHYpIHtcbiAgICBpZiAoaXNTaGltU3ltYm9sKHYpKVxuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIHJldHVybiB0eXBlb2YgdjtcbiAgfVxuICBmdW5jdGlvbiBTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgdmFsdWUgPSBuZXcgU3ltYm9sVmFsdWUoZGVzY3JpcHRpb24pO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTeW1ib2wpKVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N5bWJvbCBjYW5ub3QgYmUgbmV3XFwnZWQnKTtcbiAgfVxuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgbm9uRW51bShTeW1ib2wpKTtcbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbC5wcm90b3R5cGUsICd0b1N0cmluZycsIG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3ltYm9sVmFsdWUgPSB0aGlzW3N5bWJvbERhdGFQcm9wZXJ0eV07XG4gICAgaWYgKCFnZXRPcHRpb24oJ3N5bWJvbHMnKSlcbiAgICAgIHJldHVybiBzeW1ib2xWYWx1ZVtzeW1ib2xJbnRlcm5hbFByb3BlcnR5XTtcbiAgICBpZiAoIXN5bWJvbFZhbHVlKVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdDb252ZXJzaW9uIGZyb20gc3ltYm9sIHRvIHN0cmluZycpO1xuICAgIHZhciBkZXNjID0gc3ltYm9sVmFsdWVbc3ltYm9sRGVzY3JpcHRpb25Qcm9wZXJ0eV07XG4gICAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZClcbiAgICAgIGRlc2MgPSAnJztcbiAgICByZXR1cm4gJ1N5bWJvbCgnICsgZGVzYyArICcpJztcbiAgfSkpO1xuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sLnByb3RvdHlwZSwgJ3ZhbHVlT2YnLCBtZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN5bWJvbFZhbHVlID0gdGhpc1tzeW1ib2xEYXRhUHJvcGVydHldO1xuICAgIGlmICghc3ltYm9sVmFsdWUpXG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0NvbnZlcnNpb24gZnJvbSBzeW1ib2wgdG8gc3RyaW5nJyk7XG4gICAgaWYgKCFnZXRPcHRpb24oJ3N5bWJvbHMnKSlcbiAgICAgIHJldHVybiBzeW1ib2xWYWx1ZVtzeW1ib2xJbnRlcm5hbFByb3BlcnR5XTtcbiAgICByZXR1cm4gc3ltYm9sVmFsdWU7XG4gIH0pKTtcbiAgZnVuY3Rpb24gU3ltYm9sVmFsdWUoZGVzY3JpcHRpb24pIHtcbiAgICB2YXIga2V5ID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsIHN5bWJvbERhdGFQcm9wZXJ0eSwge3ZhbHVlOiB0aGlzfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsIHN5bWJvbEludGVybmFsUHJvcGVydHksIHt2YWx1ZToga2V5fSk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsIHN5bWJvbERlc2NyaXB0aW9uUHJvcGVydHksIHt2YWx1ZTogZGVzY3JpcHRpb259KTtcbiAgICBmcmVlemUodGhpcyk7XG4gICAgc3ltYm9sVmFsdWVzW2tleV0gPSB0aGlzO1xuICB9XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2xWYWx1ZS5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIG5vbkVudW0oU3ltYm9sKSk7XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2xWYWx1ZS5wcm90b3R5cGUsICd0b1N0cmluZycsIHtcbiAgICB2YWx1ZTogU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICB9KTtcbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbFZhbHVlLnByb3RvdHlwZSwgJ3ZhbHVlT2YnLCB7XG4gICAgdmFsdWU6IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZixcbiAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICB9KTtcbiAgdmFyIGhhc2hQcm9wZXJ0eSA9IGNyZWF0ZVByaXZhdGVOYW1lKCk7XG4gIHZhciBoYXNoUHJvcGVydHlEZXNjcmlwdG9yID0ge3ZhbHVlOiB1bmRlZmluZWR9O1xuICB2YXIgaGFzaE9iamVjdFByb3BlcnRpZXMgPSB7XG4gICAgaGFzaDoge3ZhbHVlOiB1bmRlZmluZWR9LFxuICAgIHNlbGY6IHt2YWx1ZTogdW5kZWZpbmVkfVxuICB9O1xuICB2YXIgaGFzaENvdW50ZXIgPSAwO1xuICBmdW5jdGlvbiBnZXRPd25IYXNoT2JqZWN0KG9iamVjdCkge1xuICAgIHZhciBoYXNoT2JqZWN0ID0gb2JqZWN0W2hhc2hQcm9wZXJ0eV07XG4gICAgaWYgKGhhc2hPYmplY3QgJiYgaGFzaE9iamVjdC5zZWxmID09PSBvYmplY3QpXG4gICAgICByZXR1cm4gaGFzaE9iamVjdDtcbiAgICBpZiAoJGlzRXh0ZW5zaWJsZShvYmplY3QpKSB7XG4gICAgICBoYXNoT2JqZWN0UHJvcGVydGllcy5oYXNoLnZhbHVlID0gaGFzaENvdW50ZXIrKztcbiAgICAgIGhhc2hPYmplY3RQcm9wZXJ0aWVzLnNlbGYudmFsdWUgPSBvYmplY3Q7XG4gICAgICBoYXNoUHJvcGVydHlEZXNjcmlwdG9yLnZhbHVlID0gJGNyZWF0ZShudWxsLCBoYXNoT2JqZWN0UHJvcGVydGllcyk7XG4gICAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBoYXNoUHJvcGVydHksIGhhc2hQcm9wZXJ0eURlc2NyaXB0b3IpO1xuICAgICAgcmV0dXJuIGhhc2hQcm9wZXJ0eURlc2NyaXB0b3IudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gZnJlZXplKG9iamVjdCkge1xuICAgIGdldE93bkhhc2hPYmplY3Qob2JqZWN0KTtcbiAgICByZXR1cm4gJGZyZWV6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKG9iamVjdCkge1xuICAgIGdldE93bkhhc2hPYmplY3Qob2JqZWN0KTtcbiAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gc2VhbChvYmplY3QpIHtcbiAgICBnZXRPd25IYXNoT2JqZWN0KG9iamVjdCk7XG4gICAgcmV0dXJuICRzZWFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnJlZXplKFN5bWJvbFZhbHVlLnByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGlzU3ltYm9sU3RyaW5nKHMpIHtcbiAgICByZXR1cm4gc3ltYm9sVmFsdWVzW3NdIHx8IHByaXZhdGVOYW1lc1tzXTtcbiAgfVxuICBmdW5jdGlvbiB0b1Byb3BlcnR5KG5hbWUpIHtcbiAgICBpZiAoaXNTaGltU3ltYm9sKG5hbWUpKVxuICAgICAgcmV0dXJuIG5hbWVbc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eV07XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlU3ltYm9sS2V5cyhhcnJheSkge1xuICAgIHZhciBydiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghaXNTeW1ib2xTdHJpbmcoYXJyYXlbaV0pKSB7XG4gICAgICAgIHJ2LnB1c2goYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnY7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpIHtcbiAgICByZXR1cm4gcmVtb3ZlU3ltYm9sS2V5cygkZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpKTtcbiAgfVxuICBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICAgIHJldHVybiByZW1vdmVTeW1ib2xLZXlzKCRrZXlzKG9iamVjdCkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpIHtcbiAgICB2YXIgcnYgPSBbXTtcbiAgICB2YXIgbmFtZXMgPSAkZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzeW1ib2wgPSBzeW1ib2xWYWx1ZXNbbmFtZXNbaV1dO1xuICAgICAgaWYgKHN5bWJvbCkge1xuICAgICAgICBydi5wdXNoKHN5bWJvbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydjtcbiAgfVxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBuYW1lKSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCB0b1Byb3BlcnR5KG5hbWUpKTtcbiAgfVxuICBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShuYW1lKSB7XG4gICAgcmV0dXJuICRoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIHRvUHJvcGVydHkobmFtZSkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldE9wdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIGdsb2JhbC50cmFjZXVyICYmIGdsb2JhbC50cmFjZXVyLm9wdGlvbnNbbmFtZV07XG4gIH1cbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgaWYgKGlzU2hpbVN5bWJvbChuYW1lKSkge1xuICAgICAgbmFtZSA9IG5hbWVbc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eV07XG4gICAgfVxuICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxPYmplY3QoT2JqZWN0KSB7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jywge3ZhbHVlOiBkZWZpbmVQcm9wZXJ0eX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdnZXRPd25Qcm9wZXJ0eU5hbWVzJywge3ZhbHVlOiBnZXRPd25Qcm9wZXJ0eU5hbWVzfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIHt2YWx1ZTogZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsICdoYXNPd25Qcm9wZXJ0eScsIHt2YWx1ZTogaGFzT3duUHJvcGVydHl9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZnJlZXplJywge3ZhbHVlOiBmcmVlemV9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAncHJldmVudEV4dGVuc2lvbnMnLCB7dmFsdWU6IHByZXZlbnRFeHRlbnNpb25zfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ3NlYWwnLCB7dmFsdWU6IHNlYWx9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAna2V5cycsIHt2YWx1ZToga2V5c30pO1xuICB9XG4gIGZ1bmN0aW9uIGV4cG9ydFN0YXIob2JqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBuYW1lcyA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzKGFyZ3VtZW50c1tpXSk7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZXNbal07XG4gICAgICAgIGlmIChpc1N5bWJvbFN0cmluZyhuYW1lKSlcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgKGZ1bmN0aW9uKG1vZCwgbmFtZSkge1xuICAgICAgICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtb2RbbmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KShhcmd1bWVudHNbaV0sIG5hbWVzW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggIT0gbnVsbCAmJiAodHlwZW9mIHggPT09ICdvYmplY3QnIHx8IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKTtcbiAgfVxuICBmdW5jdGlvbiB0b09iamVjdCh4KSB7XG4gICAgaWYgKHggPT0gbnVsbClcbiAgICAgIHRocm93ICRUeXBlRXJyb3IoKTtcbiAgICByZXR1cm4gJE9iamVjdCh4KTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja09iamVjdENvZXJjaWJsZShhcmd1bWVudCkge1xuICAgIGlmIChhcmd1bWVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGFuIE9iamVjdCcpO1xuICAgIH1cbiAgICByZXR1cm4gYXJndW1lbnQ7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxTeW1ib2woZ2xvYmFsLCBTeW1ib2wpIHtcbiAgICBpZiAoIWdsb2JhbC5TeW1ib2wpIHtcbiAgICAgIGdsb2JhbC5TeW1ib2wgPSBTeW1ib2w7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuICAgIH1cbiAgICBpZiAoIWdsb2JhbC5TeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIGdsb2JhbC5TeW1ib2wuaXRlcmF0b3IgPSBTeW1ib2woJ1N5bWJvbC5pdGVyYXRvcicpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXR1cEdsb2JhbHMoZ2xvYmFsKSB7XG4gICAgcG9seWZpbGxTeW1ib2woZ2xvYmFsLCBTeW1ib2wpO1xuICAgIGdsb2JhbC5SZWZsZWN0ID0gZ2xvYmFsLlJlZmxlY3QgfHwge307XG4gICAgZ2xvYmFsLlJlZmxlY3QuZ2xvYmFsID0gZ2xvYmFsLlJlZmxlY3QuZ2xvYmFsIHx8IGdsb2JhbDtcbiAgICBwb2x5ZmlsbE9iamVjdChnbG9iYWwuT2JqZWN0KTtcbiAgfVxuICBzZXR1cEdsb2JhbHMoZ2xvYmFsKTtcbiAgZ2xvYmFsLiR0cmFjZXVyUnVudGltZSA9IHtcbiAgICBjaGVja09iamVjdENvZXJjaWJsZTogY2hlY2tPYmplY3RDb2VyY2libGUsXG4gICAgY3JlYXRlUHJpdmF0ZU5hbWU6IGNyZWF0ZVByaXZhdGVOYW1lLFxuICAgIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAgIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gICAgZXhwb3J0U3RhcjogZXhwb3J0U3RhcixcbiAgICBnZXRPd25IYXNoT2JqZWN0OiBnZXRPd25IYXNoT2JqZWN0LFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICBpc09iamVjdDogaXNPYmplY3QsXG4gICAgaXNQcml2YXRlTmFtZTogaXNQcml2YXRlTmFtZSxcbiAgICBpc1N5bWJvbFN0cmluZzogaXNTeW1ib2xTdHJpbmcsXG4gICAga2V5czogJGtleXMsXG4gICAgc2V0dXBHbG9iYWxzOiBzZXR1cEdsb2JhbHMsXG4gICAgdG9PYmplY3Q6IHRvT2JqZWN0LFxuICAgIHRvUHJvcGVydHk6IHRvUHJvcGVydHksXG4gICAgdHlwZW9mOiB0eXBlT2ZcbiAgfTtcbn0pKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHBhdGg7XG4gIGZ1bmN0aW9uIHJlbGF0aXZlUmVxdWlyZShjYWxsZXJQYXRoLCByZXF1aXJlZFBhdGgpIHtcbiAgICBwYXRoID0gcGF0aCB8fCB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVxdWlyZSgncGF0aCcpO1xuICAgIGZ1bmN0aW9uIGlzRGlyZWN0b3J5KHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLnNsaWNlKC0xKSA9PT0gJy8nO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoWzBdID09PSAnLyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUmVsYXRpdmUocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGhbMF0gPT09ICcuJztcbiAgICB9XG4gICAgaWYgKGlzRGlyZWN0b3J5KHJlcXVpcmVkUGF0aCkgfHwgaXNBYnNvbHV0ZShyZXF1aXJlZFBhdGgpKVxuICAgICAgcmV0dXJuO1xuICAgIHJldHVybiBpc1JlbGF0aXZlKHJlcXVpcmVkUGF0aCkgPyByZXF1aXJlKHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoY2FsbGVyUGF0aCksIHJlcXVpcmVkUGF0aCkpIDogcmVxdWlyZShyZXF1aXJlZFBhdGgpO1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5yZXF1aXJlID0gcmVsYXRpdmVSZXF1aXJlO1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBmdW5jdGlvbiBzcHJlYWQoKSB7XG4gICAgdmFyIHJ2ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBpdGVyUmVzdWx0O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWVUb1NwcmVhZCA9ICR0cmFjZXVyUnVudGltZS5jaGVja09iamVjdENvZXJjaWJsZShhcmd1bWVudHNbaV0pO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZVRvU3ByZWFkWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KFN5bWJvbC5pdGVyYXRvcildICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBzcHJlYWQgbm9uLWl0ZXJhYmxlIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyID0gdmFsdWVUb1NwcmVhZFskdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShTeW1ib2wuaXRlcmF0b3IpXSgpO1xuICAgICAgd2hpbGUgKCEoaXRlclJlc3VsdCA9IGl0ZXIubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIHJ2W2orK10gPSBpdGVyUmVzdWx0LnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnY7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLnNwcmVhZCA9IHNwcmVhZDtcbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyICRPYmplY3QgPSBPYmplY3Q7XG4gIHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICB2YXIgJGNyZWF0ZSA9ICRPYmplY3QuY3JlYXRlO1xuICB2YXIgJGRlZmluZVByb3BlcnRpZXMgPSAkdHJhY2V1clJ1bnRpbWUuZGVmaW5lUHJvcGVydGllcztcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9ICR0cmFjZXVyUnVudGltZS5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICB2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyICRnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyICRfXzAgPSBPYmplY3QsXG4gICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gJF9fMC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gJF9fMC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gIGZ1bmN0aW9uIHN1cGVyRGVzY3JpcHRvcihob21lT2JqZWN0LCBuYW1lKSB7XG4gICAgdmFyIHByb3RvID0gJGdldFByb3RvdHlwZU9mKGhvbWVPYmplY3QpO1xuICAgIGRvIHtcbiAgICAgIHZhciByZXN1bHQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcbiAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICBwcm90byA9ICRnZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgfSB3aGlsZSAocHJvdG8pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc3VwZXJDb25zdHJ1Y3RvcihjdG9yKSB7XG4gICAgcmV0dXJuIGN0b3IuX19wcm90b19fO1xuICB9XG4gIGZ1bmN0aW9uIHN1cGVyQ2FsbChzZWxmLCBob21lT2JqZWN0LCBuYW1lLCBhcmdzKSB7XG4gICAgcmV0dXJuIHN1cGVyR2V0KHNlbGYsIGhvbWVPYmplY3QsIG5hbWUpLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG4gIGZ1bmN0aW9uIHN1cGVyR2V0KHNlbGYsIGhvbWVPYmplY3QsIG5hbWUpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHN1cGVyRGVzY3JpcHRvcihob21lT2JqZWN0LCBuYW1lKTtcbiAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgaWYgKCFkZXNjcmlwdG9yLmdldClcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChzZWxmKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzdXBlclNldChzZWxmLCBob21lT2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBkZXNjcmlwdG9yID0gc3VwZXJEZXNjcmlwdG9yKGhvbWVPYmplY3QsIG5hbWUpO1xuICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHNlbGYsIHZhbHVlKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdGhyb3cgJFR5cGVFcnJvcigoXCJzdXBlciBoYXMgbm8gc2V0dGVyICdcIiArIG5hbWUgKyBcIicuXCIpKTtcbiAgfVxuICBmdW5jdGlvbiBnZXREZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICB2YXIgbmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgIGRlc2NyaXB0b3JzW25hbWVdID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIG5hbWUpO1xuICAgIH1cbiAgICB2YXIgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICBkZXNjcmlwdG9yc1skdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShzeW1ib2wpXSA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCAkdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShzeW1ib2wpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGN0b3IsIG9iamVjdCwgc3RhdGljT2JqZWN0LCBzdXBlckNsYXNzKSB7XG4gICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgJ2NvbnN0cnVjdG9yJywge1xuICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAzKSB7XG4gICAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIGN0b3IuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICAgIGN0b3IucHJvdG90eXBlID0gJGNyZWF0ZShnZXRQcm90b1BhcmVudChzdXBlckNsYXNzKSwgZ2V0RGVzY3JpcHRvcnMob2JqZWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gb2JqZWN0O1xuICAgIH1cbiAgICAkZGVmaW5lUHJvcGVydHkoY3RvciwgJ3Byb3RvdHlwZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnRpZXMoY3RvciwgZ2V0RGVzY3JpcHRvcnMoc3RhdGljT2JqZWN0KSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UHJvdG9QYXJlbnQoc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHByb3RvdHlwZSA9IHN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgICAgaWYgKCRPYmplY3QocHJvdG90eXBlKSA9PT0gcHJvdG90eXBlIHx8IHByb3RvdHlwZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ3N1cGVyIHByb3RvdHlwZSBtdXN0IGJlIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIGlmIChzdXBlckNsYXNzID09PSBudWxsKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzICsgXCIuXCIpKTtcbiAgfVxuICBmdW5jdGlvbiBkZWZhdWx0U3VwZXJDYWxsKHNlbGYsIGhvbWVPYmplY3QsIGFyZ3MpIHtcbiAgICBpZiAoJGdldFByb3RvdHlwZU9mKGhvbWVPYmplY3QpICE9PSBudWxsKVxuICAgICAgc3VwZXJDYWxsKHNlbGYsIGhvbWVPYmplY3QsICdjb25zdHJ1Y3RvcicsIGFyZ3MpO1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcyA9IGNyZWF0ZUNsYXNzO1xuICAkdHJhY2V1clJ1bnRpbWUuZGVmYXVsdFN1cGVyQ2FsbCA9IGRlZmF1bHRTdXBlckNhbGw7XG4gICR0cmFjZXVyUnVudGltZS5zdXBlckNhbGwgPSBzdXBlckNhbGw7XG4gICR0cmFjZXVyUnVudGltZS5zdXBlckNvbnN0cnVjdG9yID0gc3VwZXJDb25zdHJ1Y3RvcjtcbiAgJHRyYWNldXJSdW50aW1lLnN1cGVyR2V0ID0gc3VwZXJHZXQ7XG4gICR0cmFjZXVyUnVudGltZS5zdXBlclNldCA9IHN1cGVyU2V0O1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAodHlwZW9mICR0cmFjZXVyUnVudGltZSAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RyYWNldXIgcnVudGltZSBub3QgZm91bmQuJyk7XG4gIH1cbiAgdmFyIGNyZWF0ZVByaXZhdGVOYW1lID0gJHRyYWNldXJSdW50aW1lLmNyZWF0ZVByaXZhdGVOYW1lO1xuICB2YXIgJGRlZmluZVByb3BlcnRpZXMgPSAkdHJhY2V1clJ1bnRpbWUuZGVmaW5lUHJvcGVydGllcztcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9ICR0cmFjZXVyUnVudGltZS5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyICRjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICB2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgZnVuY3Rpb24gbm9uRW51bSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuICB2YXIgU1RfTkVXQk9STiA9IDA7XG4gIHZhciBTVF9FWEVDVVRJTkcgPSAxO1xuICB2YXIgU1RfU1VTUEVOREVEID0gMjtcbiAgdmFyIFNUX0NMT1NFRCA9IDM7XG4gIHZhciBFTkRfU1RBVEUgPSAtMjtcbiAgdmFyIFJFVEhST1dfU1RBVEUgPSAtMztcbiAgZnVuY3Rpb24gZ2V0SW50ZXJuYWxFcnJvcihzdGF0ZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ1RyYWNldXIgY29tcGlsZXIgYnVnOiBpbnZhbGlkIHN0YXRlIGluIHN0YXRlIG1hY2hpbmU6ICcgKyBzdGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gR2VuZXJhdG9yQ29udGV4dCgpIHtcbiAgICB0aGlzLnN0YXRlID0gMDtcbiAgICB0aGlzLkdTdGF0ZSA9IFNUX05FV0JPUk47XG4gICAgdGhpcy5zdG9yZWRFeGNlcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maW5hbGx5RmFsbFRocm91Z2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZW50XyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJ5U3RhY2tfID0gW107XG4gIH1cbiAgR2VuZXJhdG9yQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgcHVzaFRyeTogZnVuY3Rpb24oY2F0Y2hTdGF0ZSwgZmluYWxseVN0YXRlKSB7XG4gICAgICBpZiAoZmluYWxseVN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBmaW5hbGx5RmFsbFRocm91Z2ggPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlTdGFja18ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAodGhpcy50cnlTdGFja19baV0uY2F0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmluYWxseUZhbGxUaHJvdWdoID0gdGhpcy50cnlTdGFja19baV0uY2F0Y2g7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbmFsbHlGYWxsVGhyb3VnaCA9PT0gbnVsbClcbiAgICAgICAgICBmaW5hbGx5RmFsbFRocm91Z2ggPSBSRVRIUk9XX1NUQVRFO1xuICAgICAgICB0aGlzLnRyeVN0YWNrXy5wdXNoKHtcbiAgICAgICAgICBmaW5hbGx5OiBmaW5hbGx5U3RhdGUsXG4gICAgICAgICAgZmluYWxseUZhbGxUaHJvdWdoOiBmaW5hbGx5RmFsbFRocm91Z2hcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2F0Y2hTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRyeVN0YWNrXy5wdXNoKHtjYXRjaDogY2F0Y2hTdGF0ZX0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcG9wVHJ5OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudHJ5U3RhY2tfLnBvcCgpO1xuICAgIH0sXG4gICAgZ2V0IHNlbnQoKSB7XG4gICAgICB0aGlzLm1heWJlVGhyb3coKTtcbiAgICAgIHJldHVybiB0aGlzLnNlbnRfO1xuICAgIH0sXG4gICAgc2V0IHNlbnQodikge1xuICAgICAgdGhpcy5zZW50XyA9IHY7XG4gICAgfSxcbiAgICBnZXQgc2VudElnbm9yZVRocm93KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VudF87XG4gICAgfSxcbiAgICBtYXliZVRocm93OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3Rocm93Jykge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICduZXh0JztcbiAgICAgICAgdGhyb3cgdGhpcy5zZW50XztcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSBFTkRfU1RBVEU6XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNhc2UgUkVUSFJPV19TVEFURTpcbiAgICAgICAgICB0aHJvdyB0aGlzLnN0b3JlZEV4Y2VwdGlvbjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBnZXRJbnRlcm5hbEVycm9yKHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlRXhjZXB0aW9uOiBmdW5jdGlvbihleCkge1xuICAgICAgdGhpcy5HU3RhdGUgPSBTVF9DTE9TRUQ7XG4gICAgICB0aGlzLnN0YXRlID0gRU5EX1NUQVRFO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBuZXh0T3JUaHJvdyhjdHgsIG1vdmVOZXh0LCBhY3Rpb24sIHgpIHtcbiAgICBzd2l0Y2ggKGN0eC5HU3RhdGUpIHtcbiAgICAgIGNhc2UgU1RfRVhFQ1VUSU5HOlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiXFxcIlwiICsgYWN0aW9uICsgXCJcXFwiIG9uIGV4ZWN1dGluZyBnZW5lcmF0b3JcIikpO1xuICAgICAgY2FzZSBTVF9DTE9TRUQ6XG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB4O1xuICAgICAgY2FzZSBTVF9ORVdCT1JOOlxuICAgICAgICBpZiAoYWN0aW9uID09PSAndGhyb3cnKSB7XG4gICAgICAgICAgY3R4LkdTdGF0ZSA9IFNUX0NMT1NFRDtcbiAgICAgICAgICB0aHJvdyB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhyb3cgJFR5cGVFcnJvcignU2VudCB2YWx1ZSB0byBuZXdib3JuIGdlbmVyYXRvcicpO1xuICAgICAgY2FzZSBTVF9TVVNQRU5ERUQ6XG4gICAgICAgIGN0eC5HU3RhdGUgPSBTVF9FWEVDVVRJTkc7XG4gICAgICAgIGN0eC5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIGN0eC5zZW50ID0geDtcbiAgICAgICAgdmFyIHZhbHVlID0gbW92ZU5leHQoY3R4KTtcbiAgICAgICAgdmFyIGRvbmUgPSB2YWx1ZSA9PT0gY3R4O1xuICAgICAgICBpZiAoZG9uZSlcbiAgICAgICAgICB2YWx1ZSA9IGN0eC5yZXR1cm5WYWx1ZTtcbiAgICAgICAgY3R4LkdTdGF0ZSA9IGRvbmUgPyBTVF9DTE9TRUQgOiBTVF9TVVNQRU5ERUQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGRvbmVcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cbiAgdmFyIGN0eE5hbWUgPSBjcmVhdGVQcml2YXRlTmFtZSgpO1xuICB2YXIgbW92ZU5leHROYW1lID0gY3JlYXRlUHJpdmF0ZU5hbWUoKTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAkZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIG5vbkVudW0oR2VuZXJhdG9yRnVuY3Rpb24pKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBuZXh0OiBmdW5jdGlvbih2KSB7XG4gICAgICByZXR1cm4gbmV4dE9yVGhyb3codGhpc1tjdHhOYW1lXSwgdGhpc1ttb3ZlTmV4dE5hbWVdLCAnbmV4dCcsIHYpO1xuICAgIH0sXG4gICAgdGhyb3c6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHJldHVybiBuZXh0T3JUaHJvdyh0aGlzW2N0eE5hbWVdLCB0aGlzW21vdmVOZXh0TmFtZV0sICd0aHJvdycsIHYpO1xuICAgIH1cbiAgfTtcbiAgJGRlZmluZVByb3BlcnRpZXMoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtlbnVtZXJhYmxlOiBmYWxzZX0sXG4gICAgbmV4dDoge2VudW1lcmFibGU6IGZhbHNlfSxcbiAgICB0aHJvdzoge2VudW1lcmFibGU6IGZhbHNlfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSwgU3ltYm9sLml0ZXJhdG9yLCBub25FbnVtKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGlubmVyRnVuY3Rpb24sIGZ1bmN0aW9uT2JqZWN0LCBzZWxmKSB7XG4gICAgdmFyIG1vdmVOZXh0ID0gZ2V0TW92ZU5leHQoaW5uZXJGdW5jdGlvbiwgc2VsZik7XG4gICAgdmFyIGN0eCA9IG5ldyBHZW5lcmF0b3JDb250ZXh0KCk7XG4gICAgdmFyIG9iamVjdCA9ICRjcmVhdGUoZnVuY3Rpb25PYmplY3QucHJvdG90eXBlKTtcbiAgICBvYmplY3RbY3R4TmFtZV0gPSBjdHg7XG4gICAgb2JqZWN0W21vdmVOZXh0TmFtZV0gPSBtb3ZlTmV4dDtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIGluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbk9iamVjdCkge1xuICAgIGZ1bmN0aW9uT2JqZWN0LnByb3RvdHlwZSA9ICRjcmVhdGUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlKTtcbiAgICBmdW5jdGlvbk9iamVjdC5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICByZXR1cm4gZnVuY3Rpb25PYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNGdW5jdGlvbkNvbnRleHQoKSB7XG4gICAgR2VuZXJhdG9yQ29udGV4dC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuZXJyID0gdW5kZWZpbmVkO1xuICAgIHZhciBjdHggPSB0aGlzO1xuICAgIGN0eC5yZXN1bHQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGN0eC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIGN0eC5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbiAgQXN5bmNGdW5jdGlvbkNvbnRleHQucHJvdG90eXBlID0gJGNyZWF0ZShHZW5lcmF0b3JDb250ZXh0LnByb3RvdHlwZSk7XG4gIEFzeW5jRnVuY3Rpb25Db250ZXh0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgRU5EX1NUQVRFOlxuICAgICAgICB0aGlzLnJlc29sdmUodGhpcy5yZXR1cm5WYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVRIUk9XX1NUQVRFOlxuICAgICAgICB0aGlzLnJlamVjdCh0aGlzLnN0b3JlZEV4Y2VwdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5yZWplY3QoZ2V0SW50ZXJuYWxFcnJvcih0aGlzLnN0YXRlKSk7XG4gICAgfVxuICB9O1xuICBBc3luY0Z1bmN0aW9uQ29udGV4dC5wcm90b3R5cGUuaGFuZGxlRXhjZXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFJFVEhST1dfU1RBVEU7XG4gIH07XG4gIGZ1bmN0aW9uIGFzeW5jV3JhcChpbm5lckZ1bmN0aW9uLCBzZWxmKSB7XG4gICAgdmFyIG1vdmVOZXh0ID0gZ2V0TW92ZU5leHQoaW5uZXJGdW5jdGlvbiwgc2VsZik7XG4gICAgdmFyIGN0eCA9IG5ldyBBc3luY0Z1bmN0aW9uQ29udGV4dCgpO1xuICAgIGN0eC5jcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgY3R4LnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIGN0eC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBtb3ZlTmV4dChjdHgpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGN0eC5lcnJiYWNrID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICBoYW5kbGVDYXRjaChjdHgsIGVycik7XG4gICAgICBtb3ZlTmV4dChjdHgpO1xuICAgIH07XG4gICAgbW92ZU5leHQoY3R4KTtcbiAgICByZXR1cm4gY3R4LnJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBnZXRNb3ZlTmV4dChpbm5lckZ1bmN0aW9uLCBzZWxmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJGdW5jdGlvbi5jYWxsKHNlbGYsIGN0eCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgaGFuZGxlQ2F0Y2goY3R4LCBleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUNhdGNoKGN0eCwgZXgpIHtcbiAgICBjdHguc3RvcmVkRXhjZXB0aW9uID0gZXg7XG4gICAgdmFyIGxhc3QgPSBjdHgudHJ5U3RhY2tfW2N0eC50cnlTdGFja18ubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFsYXN0KSB7XG4gICAgICBjdHguaGFuZGxlRXhjZXB0aW9uKGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3R4LnN0YXRlID0gbGFzdC5jYXRjaCAhPT0gdW5kZWZpbmVkID8gbGFzdC5jYXRjaCA6IGxhc3QuZmluYWxseTtcbiAgICBpZiAobGFzdC5maW5hbGx5RmFsbFRocm91Z2ggIT09IHVuZGVmaW5lZClcbiAgICAgIGN0eC5maW5hbGx5RmFsbFRocm91Z2ggPSBsYXN0LmZpbmFsbHlGYWxsVGhyb3VnaDtcbiAgfVxuICAkdHJhY2V1clJ1bnRpbWUuYXN5bmNXcmFwID0gYXN5bmNXcmFwO1xuICAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uID0gaW5pdEdlbmVyYXRvckZ1bmN0aW9uO1xuICAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UgPSBjcmVhdGVHZW5lcmF0b3JJbnN0YW5jZTtcbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkRnJvbUVuY29kZWRQYXJ0cyhvcHRfc2NoZW1lLCBvcHRfdXNlckluZm8sIG9wdF9kb21haW4sIG9wdF9wb3J0LCBvcHRfcGF0aCwgb3B0X3F1ZXJ5RGF0YSwgb3B0X2ZyYWdtZW50KSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGlmIChvcHRfc2NoZW1lKSB7XG4gICAgICBvdXQucHVzaChvcHRfc2NoZW1lLCAnOicpO1xuICAgIH1cbiAgICBpZiAob3B0X2RvbWFpbikge1xuICAgICAgb3V0LnB1c2goJy8vJyk7XG4gICAgICBpZiAob3B0X3VzZXJJbmZvKSB7XG4gICAgICAgIG91dC5wdXNoKG9wdF91c2VySW5mbywgJ0AnKTtcbiAgICAgIH1cbiAgICAgIG91dC5wdXNoKG9wdF9kb21haW4pO1xuICAgICAgaWYgKG9wdF9wb3J0KSB7XG4gICAgICAgIG91dC5wdXNoKCc6Jywgb3B0X3BvcnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0X3BhdGgpIHtcbiAgICAgIG91dC5wdXNoKG9wdF9wYXRoKTtcbiAgICB9XG4gICAgaWYgKG9wdF9xdWVyeURhdGEpIHtcbiAgICAgIG91dC5wdXNoKCc/Jywgb3B0X3F1ZXJ5RGF0YSk7XG4gICAgfVxuICAgIGlmIChvcHRfZnJhZ21lbnQpIHtcbiAgICAgIG91dC5wdXNoKCcjJywgb3B0X2ZyYWdtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbiAgfVxuICA7XG4gIHZhciBzcGxpdFJlID0gbmV3IFJlZ0V4cCgnXicgKyAnKD86JyArICcoW146Lz8jLl0rKScgKyAnOik/JyArICcoPzovLycgKyAnKD86KFteLz8jXSopQCk/JyArICcoW1xcXFx3XFxcXGRcXFxcLVxcXFx1MDEwMC1cXFxcdWZmZmYuJV0qKScgKyAnKD86OihbMC05XSspKT8nICsgJyk/JyArICcoW14/I10rKT8nICsgJyg/OlxcXFw/KFteI10qKSk/JyArICcoPzojKC4qKSk/JyArICckJyk7XG4gIHZhciBDb21wb25lbnRJbmRleCA9IHtcbiAgICBTQ0hFTUU6IDEsXG4gICAgVVNFUl9JTkZPOiAyLFxuICAgIERPTUFJTjogMyxcbiAgICBQT1JUOiA0LFxuICAgIFBBVEg6IDUsXG4gICAgUVVFUllfREFUQTogNixcbiAgICBGUkFHTUVOVDogN1xuICB9O1xuICBmdW5jdGlvbiBzcGxpdCh1cmkpIHtcbiAgICByZXR1cm4gKHVyaS5tYXRjaChzcGxpdFJlKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlRG90U2VnbWVudHMocGF0aCkge1xuICAgIGlmIChwYXRoID09PSAnLycpXG4gICAgICByZXR1cm4gJy8nO1xuICAgIHZhciBsZWFkaW5nU2xhc2ggPSBwYXRoWzBdID09PSAnLycgPyAnLycgOiAnJztcbiAgICB2YXIgdHJhaWxpbmdTbGFzaCA9IHBhdGguc2xpY2UoLTEpID09PSAnLycgPyAnLycgOiAnJztcbiAgICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIHZhciB1cCA9IDA7XG4gICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgc2VnbWVudHMubGVuZ3RoOyBwb3MrKykge1xuICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1twb3NdO1xuICAgICAgc3dpdGNoIChzZWdtZW50KSB7XG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcuLic6XG4gICAgICAgICAgaWYgKG91dC5sZW5ndGgpXG4gICAgICAgICAgICBvdXQucG9wKCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdXArKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBvdXQucHVzaChzZWdtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsZWFkaW5nU2xhc2gpIHtcbiAgICAgIHdoaWxlICh1cC0tID4gMCkge1xuICAgICAgICBvdXQudW5zaGlmdCgnLi4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChvdXQubGVuZ3RoID09PSAwKVxuICAgICAgICBvdXQucHVzaCgnLicpO1xuICAgIH1cbiAgICByZXR1cm4gbGVhZGluZ1NsYXNoICsgb3V0LmpvaW4oJy8nKSArIHRyYWlsaW5nU2xhc2g7XG4gIH1cbiAgZnVuY3Rpb24gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpIHtcbiAgICB2YXIgcGF0aCA9IHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdIHx8ICcnO1xuICAgIHBhdGggPSByZW1vdmVEb3RTZWdtZW50cyhwYXRoKTtcbiAgICBwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXSA9IHBhdGg7XG4gICAgcmV0dXJuIGJ1aWxkRnJvbUVuY29kZWRQYXJ0cyhwYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdLCBwYXJ0c1tDb21wb25lbnRJbmRleC5VU0VSX0lORk9dLCBwYXJ0c1tDb21wb25lbnRJbmRleC5ET01BSU5dLCBwYXJ0c1tDb21wb25lbnRJbmRleC5QT1JUXSwgcGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF0sIHBhcnRzW0NvbXBvbmVudEluZGV4LlFVRVJZX0RBVEFdLCBwYXJ0c1tDb21wb25lbnRJbmRleC5GUkFHTUVOVF0pO1xuICB9XG4gIGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZVVybCh1cmwpIHtcbiAgICB2YXIgcGFydHMgPSBzcGxpdCh1cmwpO1xuICAgIHJldHVybiBqb2luQW5kQ2Fub25pY2FsaXplUGF0aChwYXJ0cyk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlLCB1cmwpIHtcbiAgICB2YXIgcGFydHMgPSBzcGxpdCh1cmwpO1xuICAgIHZhciBiYXNlUGFydHMgPSBzcGxpdChiYXNlKTtcbiAgICBpZiAocGFydHNbQ29tcG9uZW50SW5kZXguU0NIRU1FXSkge1xuICAgICAgcmV0dXJuIGpvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydHNbQ29tcG9uZW50SW5kZXguU0NIRU1FXSA9IGJhc2VQYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gQ29tcG9uZW50SW5kZXguU0NIRU1FOyBpIDw9IENvbXBvbmVudEluZGV4LlBPUlQ7IGkrKykge1xuICAgICAgaWYgKCFwYXJ0c1tpXSkge1xuICAgICAgICBwYXJ0c1tpXSA9IGJhc2VQYXJ0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdWzBdID09ICcvJykge1xuICAgICAgcmV0dXJuIGpvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgICB9XG4gICAgdmFyIHBhdGggPSBiYXNlUGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF07XG4gICAgdmFyIGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGluZGV4ICsgMSkgKyBwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXTtcbiAgICBwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXSA9IHBhdGg7XG4gICAgcmV0dXJuIGpvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgfVxuICBmdW5jdGlvbiBpc0Fic29sdXRlKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5hbWVbMF0gPT09ICcvJylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0KG5hbWUpO1xuICAgIGlmIChwYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5jYW5vbmljYWxpemVVcmwgPSBjYW5vbmljYWxpemVVcmw7XG4gICR0cmFjZXVyUnVudGltZS5pc0Fic29sdXRlID0gaXNBYnNvbHV0ZTtcbiAgJHRyYWNldXJSdW50aW1lLnJlbW92ZURvdFNlZ21lbnRzID0gcmVtb3ZlRG90U2VnbWVudHM7XG4gICR0cmFjZXVyUnVudGltZS5yZXNvbHZlVXJsID0gcmVzb2x2ZVVybDtcbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHR5cGVzID0ge1xuICAgIGFueToge25hbWU6ICdhbnknfSxcbiAgICBib29sZWFuOiB7bmFtZTogJ2Jvb2xlYW4nfSxcbiAgICBudW1iZXI6IHtuYW1lOiAnbnVtYmVyJ30sXG4gICAgc3RyaW5nOiB7bmFtZTogJ3N0cmluZyd9LFxuICAgIHN5bWJvbDoge25hbWU6ICdzeW1ib2wnfSxcbiAgICB2b2lkOiB7bmFtZTogJ3ZvaWQnfVxuICB9O1xuICB2YXIgR2VuZXJpY1R5cGUgPSBmdW5jdGlvbiBHZW5lcmljVHlwZSh0eXBlLCBhcmd1bWVudFR5cGVzKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmFyZ3VtZW50VHlwZXMgPSBhcmd1bWVudFR5cGVzO1xuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShHZW5lcmljVHlwZSwge30sIHt9KTtcbiAgdmFyIHR5cGVSZWdpc3RlciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZ1bmN0aW9uIGdlbmVyaWNUeXBlKHR5cGUpIHtcbiAgICBmb3IgKHZhciBhcmd1bWVudFR5cGVzID0gW10sXG4gICAgICAgICRfXzEgPSAxOyAkX18xIDwgYXJndW1lbnRzLmxlbmd0aDsgJF9fMSsrKVxuICAgICAgYXJndW1lbnRUeXBlc1skX18xIC0gMV0gPSBhcmd1bWVudHNbJF9fMV07XG4gICAgdmFyIHR5cGVNYXAgPSB0eXBlUmVnaXN0ZXI7XG4gICAgdmFyIGtleSA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25IYXNoT2JqZWN0KHR5cGUpLmhhc2g7XG4gICAgaWYgKCF0eXBlTWFwW2tleV0pIHtcbiAgICAgIHR5cGVNYXBba2V5XSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIHR5cGVNYXAgPSB0eXBlTWFwW2tleV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudFR5cGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAga2V5ID0gJHRyYWNldXJSdW50aW1lLmdldE93bkhhc2hPYmplY3QoYXJndW1lbnRUeXBlc1tpXSkuaGFzaDtcbiAgICAgIGlmICghdHlwZU1hcFtrZXldKSB7XG4gICAgICAgIHR5cGVNYXBba2V5XSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB9XG4gICAgICB0eXBlTWFwID0gdHlwZU1hcFtrZXldO1xuICAgIH1cbiAgICB2YXIgdGFpbCA9IGFyZ3VtZW50VHlwZXNbYXJndW1lbnRUeXBlcy5sZW5ndGggLSAxXTtcbiAgICBrZXkgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duSGFzaE9iamVjdCh0YWlsKS5oYXNoO1xuICAgIGlmICghdHlwZU1hcFtrZXldKSB7XG4gICAgICB0eXBlTWFwW2tleV0gPSBuZXcgR2VuZXJpY1R5cGUodHlwZSwgYXJndW1lbnRUeXBlcyk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlTWFwW2tleV07XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLkdlbmVyaWNUeXBlID0gR2VuZXJpY1R5cGU7XG4gICR0cmFjZXVyUnVudGltZS5nZW5lcmljVHlwZSA9IGdlbmVyaWNUeXBlO1xuICAkdHJhY2V1clJ1bnRpbWUudHlwZSA9IHR5cGVzO1xufSkoKTtcbihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgJF9fMiA9ICR0cmFjZXVyUnVudGltZSxcbiAgICAgIGNhbm9uaWNhbGl6ZVVybCA9ICRfXzIuY2Fub25pY2FsaXplVXJsLFxuICAgICAgcmVzb2x2ZVVybCA9ICRfXzIucmVzb2x2ZVVybCxcbiAgICAgIGlzQWJzb2x1dGUgPSAkX18yLmlzQWJzb2x1dGU7XG4gIHZhciBtb2R1bGVJbnN0YW50aWF0b3JzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGJhc2VVUkw7XG4gIGlmIChnbG9iYWwubG9jYXRpb24gJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWYpXG4gICAgYmFzZVVSTCA9IHJlc29sdmVVcmwoZ2xvYmFsLmxvY2F0aW9uLmhyZWYsICcuLycpO1xuICBlbHNlXG4gICAgYmFzZVVSTCA9ICcnO1xuICB2YXIgVW5jb2F0ZWRNb2R1bGVFbnRyeSA9IGZ1bmN0aW9uIFVuY29hdGVkTW9kdWxlRW50cnkodXJsLCB1bmNvYXRlZE1vZHVsZSkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudmFsdWVfID0gdW5jb2F0ZWRNb2R1bGU7XG4gIH07XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFVuY29hdGVkTW9kdWxlRW50cnksIHt9LCB7fSk7XG4gIHZhciBNb2R1bGVFdmFsdWF0aW9uRXJyb3IgPSBmdW5jdGlvbiBNb2R1bGVFdmFsdWF0aW9uRXJyb3IoZXJyb25lb3VzTW9kdWxlTmFtZSwgY2F1c2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnOiAnICsgdGhpcy5zdHJpcENhdXNlKGNhdXNlKSArICcgaW4gJyArIGVycm9uZW91c01vZHVsZU5hbWU7XG4gICAgaWYgKCEoY2F1c2UgaW5zdGFuY2VvZiAkTW9kdWxlRXZhbHVhdGlvbkVycm9yKSAmJiBjYXVzZS5zdGFjaylcbiAgICAgIHRoaXMuc3RhY2sgPSB0aGlzLnN0cmlwU3RhY2soY2F1c2Uuc3RhY2spO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfTtcbiAgdmFyICRNb2R1bGVFdmFsdWF0aW9uRXJyb3IgPSBNb2R1bGVFdmFsdWF0aW9uRXJyb3I7XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKE1vZHVsZUV2YWx1YXRpb25FcnJvciwge1xuICAgIHN0cmlwRXJyb3I6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLy4qRXJyb3I6LywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgJzonKTtcbiAgICB9LFxuICAgIHN0cmlwQ2F1c2U6IGZ1bmN0aW9uKGNhdXNlKSB7XG4gICAgICBpZiAoIWNhdXNlKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICBpZiAoIWNhdXNlLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBjYXVzZSArICcnO1xuICAgICAgcmV0dXJuIHRoaXMuc3RyaXBFcnJvcihjYXVzZS5tZXNzYWdlKTtcbiAgICB9LFxuICAgIGxvYWRlZEJ5OiBmdW5jdGlvbihtb2R1bGVOYW1lKSB7XG4gICAgICB0aGlzLnN0YWNrICs9ICdcXG4gbG9hZGVkIGJ5ICcgKyBtb2R1bGVOYW1lO1xuICAgIH0sXG4gICAgc3RyaXBTdGFjazogZnVuY3Rpb24oY2F1c2VTdGFjaykge1xuICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICBjYXVzZVN0YWNrLnNwbGl0KCdcXG4nKS5zb21lKChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgICBpZiAoL1VuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yLy50ZXN0KGZyYW1lKSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgc3RhY2sucHVzaChmcmFtZSk7XG4gICAgICB9KSk7XG4gICAgICBzdGFja1swXSA9IHRoaXMuc3RyaXBFcnJvcihzdGFja1swXSk7XG4gICAgICByZXR1cm4gc3RhY2suam9pbignXFxuJyk7XG4gICAgfVxuICB9LCB7fSwgRXJyb3IpO1xuICBmdW5jdGlvbiBiZWZvcmVMaW5lcyhsaW5lcywgbnVtYmVyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBmaXJzdCA9IG51bWJlciAtIDM7XG4gICAgaWYgKGZpcnN0IDwgMClcbiAgICAgIGZpcnN0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gZmlyc3Q7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2gobGluZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGFmdGVyTGluZXMobGluZXMsIG51bWJlcikge1xuICAgIHZhciBsYXN0ID0gbnVtYmVyICsgMTtcbiAgICBpZiAobGFzdCA+IGxpbmVzLmxlbmd0aCAtIDEpXG4gICAgICBsYXN0ID0gbGluZXMubGVuZ3RoIC0gMTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IG51bWJlcjsgaSA8PSBsYXN0OyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBjb2x1bW5TcGFjaW5nKGNvbHVtbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zIC0gMTsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gJy0nO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHZhciBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvciA9IGZ1bmN0aW9uIFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKHVybCwgZnVuYykge1xuICAgICR0cmFjZXVyUnVudGltZS5zdXBlckNvbnN0cnVjdG9yKCRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcikuY2FsbCh0aGlzLCB1cmwsIG51bGwpO1xuICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG4gIH07XG4gIHZhciAkVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IgPSBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcjtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IsIHtnZXRVbmNvYXRlZE1vZHVsZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZV8pXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlXztcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZWxhdGl2ZVJlcXVpcmU7XG4gICAgICAgIGlmICh0eXBlb2YgJHRyYWNldXJSdW50aW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZWxhdGl2ZVJlcXVpcmUgPSAkdHJhY2V1clJ1bnRpbWUucmVxdWlyZS5iaW5kKG51bGwsIHRoaXMudXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZV8gPSB0aGlzLmZ1bmMuY2FsbChnbG9iYWwsIHJlbGF0aXZlUmVxdWlyZSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBpZiAoZXggaW5zdGFuY2VvZiBNb2R1bGVFdmFsdWF0aW9uRXJyb3IpIHtcbiAgICAgICAgICBleC5sb2FkZWRCeSh0aGlzLnVybCk7XG4gICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4LnN0YWNrKSB7XG4gICAgICAgICAgdmFyIGxpbmVzID0gdGhpcy5mdW5jLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgIHZhciBldmFsZWQgPSBbXTtcbiAgICAgICAgICBleC5zdGFjay5zcGxpdCgnXFxuJykuc29tZShmdW5jdGlvbihmcmFtZSkge1xuICAgICAgICAgICAgaWYgKGZyYW1lLmluZGV4T2YoJ1VuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yLmdldFVuY29hdGVkTW9kdWxlJykgPiAwKVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBtID0gLyhhdFxcc1teXFxzXSpcXHMpLio+OihcXGQqKTooXFxkKilcXCkvLmV4ZWMoZnJhbWUpO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgdmFyIGxpbmUgPSBwYXJzZUludChtWzJdLCAxMCk7XG4gICAgICAgICAgICAgIGV2YWxlZCA9IGV2YWxlZC5jb25jYXQoYmVmb3JlTGluZXMobGluZXMsIGxpbmUpKTtcbiAgICAgICAgICAgICAgZXZhbGVkLnB1c2goY29sdW1uU3BhY2luZyhtWzNdKSArICdeJyk7XG4gICAgICAgICAgICAgIGV2YWxlZCA9IGV2YWxlZC5jb25jYXQoYWZ0ZXJMaW5lcyhsaW5lcywgbGluZSkpO1xuICAgICAgICAgICAgICBldmFsZWQucHVzaCgnPSA9ID0gPSA9ID0gPSA9ID0nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV2YWxlZC5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBleC5zdGFjayA9IGV2YWxlZC5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXZhbHVhdGlvbkVycm9yKHRoaXMudXJsLCBleCk7XG4gICAgICB9XG4gICAgfX0sIHt9LCBVbmNvYXRlZE1vZHVsZUVudHJ5KTtcbiAgZnVuY3Rpb24gZ2V0VW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IobmFtZSkge1xuICAgIGlmICghbmFtZSlcbiAgICAgIHJldHVybjtcbiAgICB2YXIgdXJsID0gTW9kdWxlU3RvcmUubm9ybWFsaXplKG5hbWUpO1xuICAgIHJldHVybiBtb2R1bGVJbnN0YW50aWF0b3JzW3VybF07XG4gIH1cbiAgO1xuICB2YXIgbW9kdWxlSW5zdGFuY2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpdmVNb2R1bGVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBNb2R1bGUodW5jb2F0ZWRNb2R1bGUpIHtcbiAgICB2YXIgaXNMaXZlID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBjb2F0ZWRNb2R1bGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHVuY29hdGVkTW9kdWxlKS5mb3JFYWNoKChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZ2V0dGVyLFxuICAgICAgICAgIHZhbHVlO1xuICAgICAgaWYgKGlzTGl2ZSA9PT0gbGl2ZU1vZHVsZVNlbnRpbmVsKSB7XG4gICAgICAgIHZhciBkZXNjciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodW5jb2F0ZWRNb2R1bGUsIG5hbWUpO1xuICAgICAgICBpZiAoZGVzY3IuZ2V0KVxuICAgICAgICAgIGdldHRlciA9IGRlc2NyLmdldDtcbiAgICAgIH1cbiAgICAgIGlmICghZ2V0dGVyKSB7XG4gICAgICAgIHZhbHVlID0gdW5jb2F0ZWRNb2R1bGVbbmFtZV07XG4gICAgICAgIGdldHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb2F0ZWRNb2R1bGUsIG5hbWUsIHtcbiAgICAgICAgZ2V0OiBnZXR0ZXIsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoY29hdGVkTW9kdWxlKTtcbiAgICByZXR1cm4gY29hdGVkTW9kdWxlO1xuICB9XG4gIHZhciBNb2R1bGVTdG9yZSA9IHtcbiAgICBub3JtYWxpemU6IGZ1bmN0aW9uKG5hbWUsIHJlZmVyZXJOYW1lLCByZWZlcmVyQWRkcmVzcykge1xuICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbW9kdWxlIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgbm90ICcgKyB0eXBlb2YgbmFtZSk7XG4gICAgICBpZiAoaXNBYnNvbHV0ZShuYW1lKSlcbiAgICAgICAgcmV0dXJuIGNhbm9uaWNhbGl6ZVVybChuYW1lKTtcbiAgICAgIGlmICgvW15cXC5dXFwvXFwuXFwuXFwvLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbW9kdWxlIG5hbWUgZW1iZWRzIC8uLi86ICcgKyBuYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lWzBdID09PSAnLicgJiYgcmVmZXJlck5hbWUpXG4gICAgICAgIHJldHVybiByZXNvbHZlVXJsKHJlZmVyZXJOYW1lLCBuYW1lKTtcbiAgICAgIHJldHVybiBjYW5vbmljYWxpemVVcmwobmFtZSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKG5vcm1hbGl6ZWROYW1lKSB7XG4gICAgICB2YXIgbSA9IGdldFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgIGlmICghbSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHZhciBtb2R1bGVJbnN0YW5jZSA9IG1vZHVsZUluc3RhbmNlc1ttLnVybF07XG4gICAgICBpZiAobW9kdWxlSW5zdGFuY2UpXG4gICAgICAgIHJldHVybiBtb2R1bGVJbnN0YW5jZTtcbiAgICAgIG1vZHVsZUluc3RhbmNlID0gTW9kdWxlKG0uZ2V0VW5jb2F0ZWRNb2R1bGUoKSwgbGl2ZU1vZHVsZVNlbnRpbmVsKTtcbiAgICAgIHJldHVybiBtb2R1bGVJbnN0YW5jZXNbbS51cmxdID0gbW9kdWxlSW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKG5vcm1hbGl6ZWROYW1lLCBtb2R1bGUpIHtcbiAgICAgIG5vcm1hbGl6ZWROYW1lID0gU3RyaW5nKG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgIG1vZHVsZUluc3RhbnRpYXRvcnNbbm9ybWFsaXplZE5hbWVdID0gbmV3IFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKG5vcm1hbGl6ZWROYW1lLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICB9KSk7XG4gICAgICBtb2R1bGVJbnN0YW5jZXNbbm9ybWFsaXplZE5hbWVdID0gbW9kdWxlO1xuICAgIH0sXG4gICAgZ2V0IGJhc2VVUkwoKSB7XG4gICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9LFxuICAgIHNldCBiYXNlVVJMKHYpIHtcbiAgICAgIGJhc2VVUkwgPSBTdHJpbmcodik7XG4gICAgfSxcbiAgICByZWdpc3Rlck1vZHVsZTogZnVuY3Rpb24obmFtZSwgZGVwcywgZnVuYykge1xuICAgICAgdmFyIG5vcm1hbGl6ZWROYW1lID0gTW9kdWxlU3RvcmUubm9ybWFsaXplKG5hbWUpO1xuICAgICAgaWYgKG1vZHVsZUluc3RhbnRpYXRvcnNbbm9ybWFsaXplZE5hbWVdKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2R1cGxpY2F0ZSBtb2R1bGUgbmFtZWQgJyArIG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgIG1vZHVsZUluc3RhbnRpYXRvcnNbbm9ybWFsaXplZE5hbWVdID0gbmV3IFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKG5vcm1hbGl6ZWROYW1lLCBmdW5jKTtcbiAgICB9LFxuICAgIGJ1bmRsZVN0b3JlOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbihuYW1lLCBkZXBzLCBmdW5jKSB7XG4gICAgICBpZiAoIWRlcHMgfHwgIWRlcHMubGVuZ3RoICYmICFmdW5jLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kdWxlKG5hbWUsIGRlcHMsIGZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idW5kbGVTdG9yZVtuYW1lXSA9IHtcbiAgICAgICAgICBkZXBzOiBkZXBzLFxuICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRfXzAgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgZGVwTWFwID0ge307XG4gICAgICAgICAgICBkZXBzLmZvckVhY2goKGZ1bmN0aW9uKGRlcCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRlcE1hcFtkZXBdID0gJF9fMFtpbmRleF07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB2YXIgcmVnaXN0cnlFbnRyeSA9IGZ1bmMuY2FsbCh0aGlzLCBkZXBNYXApO1xuICAgICAgICAgICAgcmVnaXN0cnlFbnRyeS5leGVjdXRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cnlFbnRyeS5leHBvcnRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEFub255bW91c01vZHVsZTogZnVuY3Rpb24oZnVuYykge1xuICAgICAgcmV0dXJuIG5ldyBNb2R1bGUoZnVuYy5jYWxsKGdsb2JhbCksIGxpdmVNb2R1bGVTZW50aW5lbCk7XG4gICAgfSxcbiAgICBnZXRGb3JUZXN0aW5nOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgJF9fMCA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMudGVzdGluZ1ByZWZpeF8pIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlSW5zdGFuY2VzKS5zb21lKChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICB2YXIgbSA9IC8odHJhY2V1ckBbXlxcL10qXFwvKS8uZXhlYyhrZXkpO1xuICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAkX18wLnRlc3RpbmdQcmVmaXhfID0gbVsxXTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMudGVzdGluZ1ByZWZpeF8gKyBuYW1lKTtcbiAgICB9XG4gIH07XG4gIHZhciBtb2R1bGVTdG9yZU1vZHVsZSA9IG5ldyBNb2R1bGUoe01vZHVsZVN0b3JlOiBNb2R1bGVTdG9yZX0pO1xuICBNb2R1bGVTdG9yZS5zZXQoJ0B0cmFjZXVyL3NyYy9ydW50aW1lL01vZHVsZVN0b3JlJywgbW9kdWxlU3RvcmVNb2R1bGUpO1xuICBNb2R1bGVTdG9yZS5zZXQoJ0B0cmFjZXVyL3NyYy9ydW50aW1lL01vZHVsZVN0b3JlLmpzJywgbW9kdWxlU3RvcmVNb2R1bGUpO1xuICB2YXIgc2V0dXBHbG9iYWxzID0gJHRyYWNldXJSdW50aW1lLnNldHVwR2xvYmFscztcbiAgJHRyYWNldXJSdW50aW1lLnNldHVwR2xvYmFscyA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHNldHVwR2xvYmFscyhnbG9iYWwpO1xuICB9O1xuICAkdHJhY2V1clJ1bnRpbWUuTW9kdWxlU3RvcmUgPSBNb2R1bGVTdG9yZTtcbiAgZ2xvYmFsLlN5c3RlbSA9IHtcbiAgICByZWdpc3RlcjogTW9kdWxlU3RvcmUucmVnaXN0ZXIuYmluZChNb2R1bGVTdG9yZSksXG4gICAgcmVnaXN0ZXJNb2R1bGU6IE1vZHVsZVN0b3JlLnJlZ2lzdGVyTW9kdWxlLmJpbmQoTW9kdWxlU3RvcmUpLFxuICAgIGdldDogTW9kdWxlU3RvcmUuZ2V0LFxuICAgIHNldDogTW9kdWxlU3RvcmUuc2V0LFxuICAgIG5vcm1hbGl6ZTogTW9kdWxlU3RvcmUubm9ybWFsaXplXG4gIH07XG4gICR0cmFjZXVyUnVudGltZS5nZXRNb2R1bGVJbXBsID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpbnN0YW50aWF0b3IgPSBnZXRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcihuYW1lKTtcbiAgICByZXR1cm4gaW5zdGFudGlhdG9yICYmIGluc3RhbnRpYXRvci5nZXRVbmNvYXRlZE1vZHVsZSgpO1xuICB9O1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCI7XG4gIHZhciAkY2VpbCA9IE1hdGguY2VpbDtcbiAgdmFyICRmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciAkaXNGaW5pdGUgPSBpc0Zpbml0ZTtcbiAgdmFyICRpc05hTiA9IGlzTmFOO1xuICB2YXIgJHBvdyA9IE1hdGgucG93O1xuICB2YXIgJG1pbiA9IE1hdGgubWluO1xuICB2YXIgdG9PYmplY3QgPSAkdHJhY2V1clJ1bnRpbWUudG9PYmplY3Q7XG4gIGZ1bmN0aW9uIHRvVWludDMyKHgpIHtcbiAgICByZXR1cm4geCA+Pj4gMDtcbiAgfVxuICBmdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggJiYgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH1cbiAgZnVuY3Rpb24gaXNDYWxsYWJsZSh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICB9XG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInO1xuICB9XG4gIGZ1bmN0aW9uIHRvSW50ZWdlcih4KSB7XG4gICAgeCA9ICt4O1xuICAgIGlmICgkaXNOYU4oeCkpXG4gICAgICByZXR1cm4gMDtcbiAgICBpZiAoeCA9PT0gMCB8fCAhJGlzRmluaXRlKHgpKVxuICAgICAgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHggPiAwID8gJGZsb29yKHgpIDogJGNlaWwoeCk7XG4gIH1cbiAgdmFyIE1BWF9TQUZFX0xFTkdUSCA9ICRwb3coMiwgNTMpIC0gMTtcbiAgZnVuY3Rpb24gdG9MZW5ndGgoeCkge1xuICAgIHZhciBsZW4gPSB0b0ludGVnZXIoeCk7XG4gICAgcmV0dXJuIGxlbiA8IDAgPyAwIDogJG1pbihsZW4sIE1BWF9TQUZFX0xFTkdUSCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tJdGVyYWJsZSh4KSB7XG4gICAgcmV0dXJuICFpc09iamVjdCh4KSA/IHVuZGVmaW5lZCA6IHhbU3ltYm9sLml0ZXJhdG9yXTtcbiAgfVxuICBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKHgpIHtcbiAgICByZXR1cm4gaXNDYWxsYWJsZSh4KTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh2YWx1ZSwgZG9uZSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkb25lOiBkb25lXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZURlZmluZShvYmplY3QsIG5hbWUsIGRlc2NyKSB7XG4gICAgaWYgKCEobmFtZSBpbiBvYmplY3QpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1heWJlRGVmaW5lTWV0aG9kKG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBtYXliZURlZmluZShvYmplY3QsIG5hbWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZURlZmluZUNvbnN0KG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBtYXliZURlZmluZShvYmplY3QsIG5hbWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlQWRkRnVuY3Rpb25zKG9iamVjdCwgZnVuY3Rpb25zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHZhciBuYW1lID0gZnVuY3Rpb25zW2ldO1xuICAgICAgdmFyIHZhbHVlID0gZnVuY3Rpb25zW2kgKyAxXTtcbiAgICAgIG1heWJlRGVmaW5lTWV0aG9kKG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtYXliZUFkZENvbnN0cyhvYmplY3QsIGNvbnN0cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uc3RzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB2YXIgbmFtZSA9IGNvbnN0c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IGNvbnN0c1tpICsgMV07XG4gICAgICBtYXliZURlZmluZUNvbnN0KG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtYXliZUFkZEl0ZXJhdG9yKG9iamVjdCwgZnVuYywgU3ltYm9sKSB7XG4gICAgaWYgKCFTeW1ib2wgfHwgIVN5bWJvbC5pdGVyYXRvciB8fCBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAob2JqZWN0WydAQGl0ZXJhdG9yJ10pXG4gICAgICBmdW5jID0gb2JqZWN0WydAQGl0ZXJhdG9yJ107XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgICB2YWx1ZTogZnVuYyxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICB2YXIgcG9seWZpbGxzID0gW107XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUG9seWZpbGwoZnVuYykge1xuICAgIHBvbHlmaWxscy5wdXNoKGZ1bmMpO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsQWxsKGdsb2JhbCkge1xuICAgIHBvbHlmaWxscy5mb3JFYWNoKChmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gZihnbG9iYWwpO1xuICAgIH0pKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldCB0b09iamVjdCgpIHtcbiAgICAgIHJldHVybiB0b09iamVjdDtcbiAgICB9LFxuICAgIGdldCB0b1VpbnQzMigpIHtcbiAgICAgIHJldHVybiB0b1VpbnQzMjtcbiAgICB9LFxuICAgIGdldCBpc09iamVjdCgpIHtcbiAgICAgIHJldHVybiBpc09iamVjdDtcbiAgICB9LFxuICAgIGdldCBpc0NhbGxhYmxlKCkge1xuICAgICAgcmV0dXJuIGlzQ2FsbGFibGU7XG4gICAgfSxcbiAgICBnZXQgaXNOdW1iZXIoKSB7XG4gICAgICByZXR1cm4gaXNOdW1iZXI7XG4gICAgfSxcbiAgICBnZXQgdG9JbnRlZ2VyKCkge1xuICAgICAgcmV0dXJuIHRvSW50ZWdlcjtcbiAgICB9LFxuICAgIGdldCB0b0xlbmd0aCgpIHtcbiAgICAgIHJldHVybiB0b0xlbmd0aDtcbiAgICB9LFxuICAgIGdldCBjaGVja0l0ZXJhYmxlKCkge1xuICAgICAgcmV0dXJuIGNoZWNrSXRlcmFibGU7XG4gICAgfSxcbiAgICBnZXQgaXNDb25zdHJ1Y3RvcigpIHtcbiAgICAgIHJldHVybiBpc0NvbnN0cnVjdG9yO1xuICAgIH0sXG4gICAgZ2V0IGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0O1xuICAgIH0sXG4gICAgZ2V0IG1heWJlRGVmaW5lKCkge1xuICAgICAgcmV0dXJuIG1heWJlRGVmaW5lO1xuICAgIH0sXG4gICAgZ2V0IG1heWJlRGVmaW5lTWV0aG9kKCkge1xuICAgICAgcmV0dXJuIG1heWJlRGVmaW5lTWV0aG9kO1xuICAgIH0sXG4gICAgZ2V0IG1heWJlRGVmaW5lQ29uc3QoKSB7XG4gICAgICByZXR1cm4gbWF5YmVEZWZpbmVDb25zdDtcbiAgICB9LFxuICAgIGdldCBtYXliZUFkZEZ1bmN0aW9ucygpIHtcbiAgICAgIHJldHVybiBtYXliZUFkZEZ1bmN0aW9ucztcbiAgICB9LFxuICAgIGdldCBtYXliZUFkZENvbnN0cygpIHtcbiAgICAgIHJldHVybiBtYXliZUFkZENvbnN0cztcbiAgICB9LFxuICAgIGdldCBtYXliZUFkZEl0ZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIG1heWJlQWRkSXRlcmF0b3I7XG4gICAgfSxcbiAgICBnZXQgcmVnaXN0ZXJQb2x5ZmlsbCgpIHtcbiAgICAgIHJldHVybiByZWdpc3RlclBvbHlmaWxsO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsQWxsKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsQWxsO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL01hcC5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIGlzT2JqZWN0ID0gJF9fMC5pc09iamVjdCxcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IgPSAkX18wLm1heWJlQWRkSXRlcmF0b3IsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMC5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgZ2V0T3duSGFzaE9iamVjdCA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25IYXNoT2JqZWN0O1xuICB2YXIgJGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGRlbGV0ZWRTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBsb29rdXBJbmRleChtYXAsIGtleSkge1xuICAgIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICB2YXIgaGFzaE9iamVjdCA9IGdldE93bkhhc2hPYmplY3Qoa2V5KTtcbiAgICAgIHJldHVybiBoYXNoT2JqZWN0ICYmIG1hcC5vYmplY3RJbmRleF9baGFzaE9iamVjdC5oYXNoXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKVxuICAgICAgcmV0dXJuIG1hcC5zdHJpbmdJbmRleF9ba2V5XTtcbiAgICByZXR1cm4gbWFwLnByaW1pdGl2ZUluZGV4X1trZXldO1xuICB9XG4gIGZ1bmN0aW9uIGluaXRNYXAobWFwKSB7XG4gICAgbWFwLmVudHJpZXNfID0gW107XG4gICAgbWFwLm9iamVjdEluZGV4XyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbWFwLnN0cmluZ0luZGV4XyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbWFwLnByaW1pdGl2ZUluZGV4XyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbWFwLmRlbGV0ZWRDb3VudF8gPSAwO1xuICB9XG4gIHZhciBNYXAgPSBmdW5jdGlvbiBNYXAoKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xuICAgIGlmICghaXNPYmplY3QodGhpcykpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNYXAgY2FsbGVkIG9uIGluY29tcGF0aWJsZSB0eXBlJyk7XG4gICAgaWYgKCRoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdlbnRyaWVzXycpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNYXAgY2FuIG5vdCBiZSByZWVudHJhbnRseSBpbml0aWFsaXNlZCcpO1xuICAgIH1cbiAgICBpbml0TWFwKHRoaXMpO1xuICAgIGlmIChpdGVyYWJsZSAhPT0gbnVsbCAmJiBpdGVyYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciAkX18yID0gaXRlcmFibGVbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoU3ltYm9sLml0ZXJhdG9yKV0oKSxcbiAgICAgICAgICAkX18zOyAhKCRfXzMgPSAkX18yLm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICAgIHZhciAkX180ID0gJF9fMy52YWx1ZSxcbiAgICAgICAgICAgIGtleSA9ICRfXzRbMF0sXG4gICAgICAgICAgICB2YWx1ZSA9ICRfXzRbMV07XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoTWFwLCB7XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRyaWVzXy5sZW5ndGggLyAyIC0gdGhpcy5kZWxldGVkQ291bnRfO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGxvb2t1cEluZGV4KHRoaXMsIGtleSk7XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc19baW5kZXggKyAxXTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIG9iamVjdE1vZGUgPSBpc09iamVjdChrZXkpO1xuICAgICAgdmFyIHN0cmluZ01vZGUgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBpbmRleCA9IGxvb2t1cEluZGV4KHRoaXMsIGtleSk7XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmVudHJpZXNfW2luZGV4ICsgMV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy5lbnRyaWVzXy5sZW5ndGg7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXhdID0ga2V5O1xuICAgICAgICB0aGlzLmVudHJpZXNfW2luZGV4ICsgMV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKG9iamVjdE1vZGUpIHtcbiAgICAgICAgICB2YXIgaGFzaE9iamVjdCA9IGdldE93bkhhc2hPYmplY3Qoa2V5KTtcbiAgICAgICAgICB2YXIgaGFzaCA9IGhhc2hPYmplY3QuaGFzaDtcbiAgICAgICAgICB0aGlzLm9iamVjdEluZGV4X1toYXNoXSA9IGluZGV4O1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgICAgICB0aGlzLnN0cmluZ0luZGV4X1trZXldID0gaW5kZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcmltaXRpdmVJbmRleF9ba2V5XSA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gbG9va3VwSW5kZXgodGhpcywga2V5KSAhPT0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBvYmplY3RNb2RlID0gaXNPYmplY3Qoa2V5KTtcbiAgICAgIHZhciBzdHJpbmdNb2RlID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZyc7XG4gICAgICB2YXIgaW5kZXg7XG4gICAgICB2YXIgaGFzaDtcbiAgICAgIGlmIChvYmplY3RNb2RlKSB7XG4gICAgICAgIHZhciBoYXNoT2JqZWN0ID0gZ2V0T3duSGFzaE9iamVjdChrZXkpO1xuICAgICAgICBpZiAoaGFzaE9iamVjdCkge1xuICAgICAgICAgIGluZGV4ID0gdGhpcy5vYmplY3RJbmRleF9baGFzaCA9IGhhc2hPYmplY3QuaGFzaF07XG4gICAgICAgICAgZGVsZXRlIHRoaXMub2JqZWN0SW5kZXhfW2hhc2hdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLnN0cmluZ0luZGV4X1trZXldO1xuICAgICAgICBkZWxldGUgdGhpcy5zdHJpbmdJbmRleF9ba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy5wcmltaXRpdmVJbmRleF9ba2V5XTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJpbWl0aXZlSW5kZXhfW2tleV07XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmVudHJpZXNfW2luZGV4XSA9IGRlbGV0ZWRTZW50aW5lbDtcbiAgICAgICAgdGhpcy5lbnRyaWVzX1tpbmRleCArIDFdID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRlbGV0ZWRDb3VudF8rKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBpbml0TWFwKHRoaXMpO1xuICAgIH0sXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oY2FsbGJhY2tGbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50cmllc18ubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZW50cmllc19baV07XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZW50cmllc19baSArIDFdO1xuICAgICAgICBpZiAoa2V5ID09PSBkZWxldGVkU2VudGluZWwpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCB2YWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVudHJpZXM6ICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb24gJF9fNSgpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgIHJldHVybiAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoZnVuY3Rpb24oJGN0eCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSlcbiAgICAgICAgICBzd2l0Y2ggKCRjdHguc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGkgPCB0aGlzLmVudHJpZXNfLmxlbmd0aCkgPyA4IDogLTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIGtleSA9IHRoaXMuZW50cmllc19baV07XG4gICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5lbnRyaWVzX1tpICsgMV07XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChrZXkgPT09IGRlbGV0ZWRTZW50aW5lbCkgPyA0IDogNjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAyO1xuICAgICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAkY3R4Lm1heWJlVGhyb3coKTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICRjdHguZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgJF9fNSwgdGhpcyk7XG4gICAgfSksXG4gICAga2V5czogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX182KCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlO1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoaSA8IHRoaXMuZW50cmllc18ubGVuZ3RoKSA/IDggOiAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVudHJpZXNfW2kgKyAxXTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGtleSA9PT0gZGVsZXRlZFNlbnRpbmVsKSA/IDQgOiA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICRjdHgubWF5YmVUaHJvdygpO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX182LCB0aGlzKTtcbiAgICB9KSxcbiAgICB2YWx1ZXM6ICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb24gJF9fNygpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgIHJldHVybiAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoZnVuY3Rpb24oJGN0eCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSlcbiAgICAgICAgICBzd2l0Y2ggKCRjdHguc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGkgPCB0aGlzLmVudHJpZXNfLmxlbmd0aCkgPyA4IDogLTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIGtleSA9IHRoaXMuZW50cmllc19baV07XG4gICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5lbnRyaWVzX1tpICsgMV07XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChrZXkgPT09IGRlbGV0ZWRTZW50aW5lbCkgPyA0IDogNjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAyO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICRjdHgubWF5YmVUaHJvdygpO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX183LCB0aGlzKTtcbiAgICB9KVxuICB9LCB7fSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXAucHJvdG90eXBlLCBTeW1ib2wuaXRlcmF0b3IsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IE1hcC5wcm90b3R5cGUuZW50cmllc1xuICB9KTtcbiAgZnVuY3Rpb24gcG9seWZpbGxNYXAoZ2xvYmFsKSB7XG4gICAgdmFyICRfXzQgPSBnbG9iYWwsXG4gICAgICAgIE9iamVjdCA9ICRfXzQuT2JqZWN0LFxuICAgICAgICBTeW1ib2wgPSAkX180LlN5bWJvbDtcbiAgICBpZiAoIWdsb2JhbC5NYXApXG4gICAgICBnbG9iYWwuTWFwID0gTWFwO1xuICAgIHZhciBtYXBQcm90b3R5cGUgPSBnbG9iYWwuTWFwLnByb3RvdHlwZTtcbiAgICBpZiAobWFwUHJvdG90eXBlLmVudHJpZXMgPT09IHVuZGVmaW5lZClcbiAgICAgIGdsb2JhbC5NYXAgPSBNYXA7XG4gICAgaWYgKG1hcFByb3RvdHlwZS5lbnRyaWVzKSB7XG4gICAgICBtYXliZUFkZEl0ZXJhdG9yKG1hcFByb3RvdHlwZSwgbWFwUHJvdG90eXBlLmVudHJpZXMsIFN5bWJvbCk7XG4gICAgICBtYXliZUFkZEl0ZXJhdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgZ2xvYmFsLk1hcCgpLmVudHJpZXMoKSksIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFN5bWJvbCk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxNYXApO1xuICByZXR1cm4ge1xuICAgIGdldCBNYXAoKSB7XG4gICAgICByZXR1cm4gTWFwO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsTWFwKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsTWFwO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL01hcC5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU2V0LmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1NldC5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIGlzT2JqZWN0ID0gJF9fMC5pc09iamVjdCxcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IgPSAkX18wLm1heWJlQWRkSXRlcmF0b3IsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMC5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgTWFwID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL01hcC5qc1wiKS5NYXA7XG4gIHZhciBnZXRPd25IYXNoT2JqZWN0ID0gJHRyYWNldXJSdW50aW1lLmdldE93bkhhc2hPYmplY3Q7XG4gIHZhciAkaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmdW5jdGlvbiBpbml0U2V0KHNldCkge1xuICAgIHNldC5tYXBfID0gbmV3IE1hcCgpO1xuICB9XG4gIHZhciBTZXQgPSBmdW5jdGlvbiBTZXQoKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xuICAgIGlmICghaXNPYmplY3QodGhpcykpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZXQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSB0eXBlJyk7XG4gICAgaWYgKCRoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdtYXBfJykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NldCBjYW4gbm90IGJlIHJlZW50cmFudGx5IGluaXRpYWxpc2VkJyk7XG4gICAgfVxuICAgIGluaXRTZXQodGhpcyk7XG4gICAgaWYgKGl0ZXJhYmxlICE9PSBudWxsICYmIGl0ZXJhYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyICRfXzQgPSBpdGVyYWJsZVskdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShTeW1ib2wuaXRlcmF0b3IpXSgpLFxuICAgICAgICAgICRfXzU7ICEoJF9fNSA9ICRfXzQubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkX181LnZhbHVlO1xuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5hZGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFNldCwge1xuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5zaXplO1xuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uaGFzKGtleSk7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdGhpcy5tYXBfLnNldChrZXksIGtleSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBfLmRlbGV0ZShrZXkpO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5jbGVhcigpO1xuICAgIH0sXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oY2FsbGJhY2tGbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgICB2YXIgJF9fMiA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5tYXBfLmZvckVhY2goKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIGtleSwga2V5LCAkX18yKTtcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIHZhbHVlczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX183KCkge1xuICAgICAgdmFyICRfXzgsXG4gICAgICAgICAgJF9fOTtcbiAgICAgIHJldHVybiAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoZnVuY3Rpb24oJGN0eCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSlcbiAgICAgICAgICBzd2l0Y2ggKCRjdHguc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgJF9fOCA9IHRoaXMubWFwXy5rZXlzKClbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgICAkY3R4LnNlbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICRjdHguYWN0aW9uID0gJ25leHQnO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgJF9fOSA9ICRfXzhbJGN0eC5hY3Rpb25dKCRjdHguc2VudElnbm9yZVRocm93KTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKCRfXzkuZG9uZSkgPyAzIDogMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICRjdHguc2VudCA9ICRfXzkudmFsdWU7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgcmV0dXJuICRfXzkudmFsdWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX183LCB0aGlzKTtcbiAgICB9KSxcbiAgICBlbnRyaWVzOiAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uICRfXzEwKCkge1xuICAgICAgdmFyICRfXzExLFxuICAgICAgICAgICRfXzEyO1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAkX18xMSA9IHRoaXMubWFwXy5lbnRyaWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgICAkY3R4LnNlbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICRjdHguYWN0aW9uID0gJ25leHQnO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgJF9fMTIgPSAkX18xMVskY3R4LmFjdGlvbl0oJGN0eC5zZW50SWdub3JlVGhyb3cpO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoJF9fMTIuZG9uZSkgPyAzIDogMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICRjdHguc2VudCA9ICRfXzEyLnZhbHVlO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gLTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIHJldHVybiAkX18xMi52YWx1ZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzEwLCB0aGlzKTtcbiAgICB9KVxuICB9LCB7fSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBTeW1ib2wuaXRlcmF0b3IsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IFNldC5wcm90b3R5cGUudmFsdWVzXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgJ2tleXMnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBTZXQucHJvdG90eXBlLnZhbHVlc1xuICB9KTtcbiAgZnVuY3Rpb24gcG9seWZpbGxTZXQoZ2xvYmFsKSB7XG4gICAgdmFyICRfXzYgPSBnbG9iYWwsXG4gICAgICAgIE9iamVjdCA9ICRfXzYuT2JqZWN0LFxuICAgICAgICBTeW1ib2wgPSAkX182LlN5bWJvbDtcbiAgICBpZiAoIWdsb2JhbC5TZXQpXG4gICAgICBnbG9iYWwuU2V0ID0gU2V0O1xuICAgIHZhciBzZXRQcm90b3R5cGUgPSBnbG9iYWwuU2V0LnByb3RvdHlwZTtcbiAgICBpZiAoc2V0UHJvdG90eXBlLnZhbHVlcykge1xuICAgICAgbWF5YmVBZGRJdGVyYXRvcihzZXRQcm90b3R5cGUsIHNldFByb3RvdHlwZS52YWx1ZXMsIFN5bWJvbCk7XG4gICAgICBtYXliZUFkZEl0ZXJhdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgZ2xvYmFsLlNldCgpLnZhbHVlcygpKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSwgU3ltYm9sKTtcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbFNldCk7XG4gIHJldHVybiB7XG4gICAgZ2V0IFNldCgpIHtcbiAgICAgIHJldHVybiBTZXQ7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxTZXQoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxTZXQ7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU2V0LmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L25vZGVfbW9kdWxlcy9yc3ZwL2xpYi9yc3ZwL2FzYXAuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9ub2RlX21vZHVsZXMvcnN2cC9saWIvcnN2cC9hc2FwLmpzXCI7XG4gIHZhciBsZW4gPSAwO1xuICBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICBxdWV1ZVtsZW5dID0gY2FsbGJhY2s7XG4gICAgcXVldWVbbGVuICsgMV0gPSBhcmc7XG4gICAgbGVuICs9IDI7XG4gICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgc2NoZWR1bGVGbHVzaCgpO1xuICAgIH1cbiAgfVxuICB2YXIgJF9fZGVmYXVsdCA9IGFzYXA7XG4gIHZhciBicm93c2VyR2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHt9O1xuICB2YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuICB2YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuICBmdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2g7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHVzZVNldFRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmbHVzaCwgMSk7XG4gICAgfTtcbiAgfVxuICB2YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgICAgdmFyIGFyZyA9IHF1ZXVlW2kgKyAxXTtcbiAgICAgIGNhbGxiYWNrKGFyZyk7XG4gICAgICBxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgIHF1ZXVlW2kgKyAxXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGVuID0gMDtcbiAgfVxuICB2YXIgc2NoZWR1bGVGbHVzaDtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTmV4dFRpY2soKTtcbiAgfSBlbHNlIGlmIChCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gIH0gZWxzZSBpZiAoaXNXb3JrZXIpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgfSBlbHNlIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlU2V0VGltZW91dCgpO1xuICB9XG4gIHJldHVybiB7Z2V0IGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gJF9fZGVmYXVsdDtcbiAgICB9fTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvUHJvbWlzZS5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9Qcm9taXNlLmpzXCI7XG4gIHZhciBhc3luYyA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L25vZGVfbW9kdWxlcy9yc3ZwL2xpYi9yc3ZwL2FzYXAuanNcIikuZGVmYXVsdDtcbiAgdmFyIHJlZ2lzdGVyUG9seWZpbGwgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIikucmVnaXN0ZXJQb2x5ZmlsbDtcbiAgdmFyIHByb21pc2VSYXcgPSB7fTtcbiAgZnVuY3Rpb24gaXNQcm9taXNlKHgpIHtcbiAgICByZXR1cm4geCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeC5zdGF0dXNfICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gaWRSZXNvbHZlSGFuZGxlcih4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgZnVuY3Rpb24gaWRSZWplY3RIYW5kbGVyKHgpIHtcbiAgICB0aHJvdyB4O1xuICB9XG4gIGZ1bmN0aW9uIGNoYWluKHByb21pc2UpIHtcbiAgICB2YXIgb25SZXNvbHZlID0gYXJndW1lbnRzWzFdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1sxXSA6IGlkUmVzb2x2ZUhhbmRsZXI7XG4gICAgdmFyIG9uUmVqZWN0ID0gYXJndW1lbnRzWzJdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1syXSA6IGlkUmVqZWN0SGFuZGxlcjtcbiAgICB2YXIgZGVmZXJyZWQgPSBnZXREZWZlcnJlZChwcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICBzd2l0Y2ggKHByb21pc2Uuc3RhdHVzXykge1xuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHRocm93IFR5cGVFcnJvcjtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcHJvbWlzZS5vblJlc29sdmVfLnB1c2gob25SZXNvbHZlLCBkZWZlcnJlZCk7XG4gICAgICAgIHByb21pc2Uub25SZWplY3RfLnB1c2gob25SZWplY3QsIGRlZmVycmVkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICsxOlxuICAgICAgICBwcm9taXNlRW5xdWV1ZShwcm9taXNlLnZhbHVlXywgW29uUmVzb2x2ZSwgZGVmZXJyZWRdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBwcm9taXNlRW5xdWV1ZShwcm9taXNlLnZhbHVlXywgW29uUmVqZWN0LCBkZWZlcnJlZF0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RGVmZXJyZWQoQykge1xuICAgIGlmICh0aGlzID09PSAkUHJvbWlzZSkge1xuICAgICAgdmFyIHByb21pc2UgPSBwcm9taXNlSW5pdChuZXcgJFByb21pc2UocHJvbWlzZVJhdykpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgcmVzb2x2ZTogKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZShwcm9taXNlLCB4KTtcbiAgICAgICAgfSksXG4gICAgICAgIHJlamVjdDogKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICBwcm9taXNlUmVqZWN0KHByb21pc2UsIHIpO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgcmVzdWx0LnByb21pc2UgPSBuZXcgQygoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc3VsdC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgcmVzdWx0LnJlamVjdCA9IHJlamVjdDtcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VTZXQocHJvbWlzZSwgc3RhdHVzLCB2YWx1ZSwgb25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgIHByb21pc2Uuc3RhdHVzXyA9IHN0YXR1cztcbiAgICBwcm9taXNlLnZhbHVlXyA9IHZhbHVlO1xuICAgIHByb21pc2Uub25SZXNvbHZlXyA9IG9uUmVzb2x2ZTtcbiAgICBwcm9taXNlLm9uUmVqZWN0XyA9IG9uUmVqZWN0O1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VJbml0KHByb21pc2UpIHtcbiAgICByZXR1cm4gcHJvbWlzZVNldChwcm9taXNlLCAwLCB1bmRlZmluZWQsIFtdLCBbXSk7XG4gIH1cbiAgdmFyIFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgaWYgKHJlc29sdmVyID09PSBwcm9taXNlUmF3KVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgIHZhciBwcm9taXNlID0gcHJvbWlzZUluaXQodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc29sdmVyKChmdW5jdGlvbih4KSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHByb21pc2UsIHgpO1xuICAgICAgfSksIChmdW5jdGlvbihyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QocHJvbWlzZSwgcik7XG4gICAgICB9KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcHJvbWlzZVJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gIH07XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFByb21pc2UsIHtcbiAgICBjYXRjaDogZnVuY3Rpb24ob25SZWplY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdCk7XG4gICAgfSxcbiAgICB0aGVuOiBmdW5jdGlvbihvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIG9uUmVzb2x2ZSAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgb25SZXNvbHZlID0gaWRSZXNvbHZlSGFuZGxlcjtcbiAgICAgIGlmICh0eXBlb2Ygb25SZWplY3QgIT09ICdmdW5jdGlvbicpXG4gICAgICAgIG9uUmVqZWN0ID0gaWRSZWplY3RIYW5kbGVyO1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgIHJldHVybiBjaGFpbih0aGlzLCBmdW5jdGlvbih4KSB7XG4gICAgICAgIHggPSBwcm9taXNlQ29lcmNlKGNvbnN0cnVjdG9yLCB4KTtcbiAgICAgICAgcmV0dXJuIHggPT09IHRoYXQgPyBvblJlamVjdChuZXcgVHlwZUVycm9yKSA6IGlzUHJvbWlzZSh4KSA/IHgudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KSA6IG9uUmVzb2x2ZSh4KTtcbiAgICAgIH0sIG9uUmVqZWN0KTtcbiAgICB9XG4gIH0sIHtcbiAgICByZXNvbHZlOiBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAodGhpcyA9PT0gJFByb21pc2UpIHtcbiAgICAgICAgaWYgKGlzUHJvbWlzZSh4KSkge1xuICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlU2V0KG5ldyAkUHJvbWlzZShwcm9taXNlUmF3KSwgKzEsIHgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlc29sdmUoeCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVqZWN0OiBmdW5jdGlvbihyKSB7XG4gICAgICBpZiAodGhpcyA9PT0gJFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VTZXQobmV3ICRQcm9taXNlKHByb21pc2VSYXcpLCAtMSwgcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChyKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxsOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IGdldERlZmVycmVkKHRoaXMpO1xuICAgICAgdmFyIHJlc29sdXRpb25zID0gW107XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc29sdXRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlc1tpXSkudGhlbihmdW5jdGlvbihpLCB4KSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb25zW2ldID0geDtcbiAgICAgICAgICAgICAgaWYgKC0tY291bnQgPT09IDApXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNvbHV0aW9ucyk7XG4gICAgICAgICAgICB9LmJpbmQodW5kZWZpbmVkLCBpKSwgKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHIpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9LFxuICAgIHJhY2U6IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgdmFyIGRlZmVycmVkID0gZ2V0RGVmZXJyZWQodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZXNbaV0pLnRoZW4oKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoeCk7XG4gICAgICAgICAgfSksIChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qocik7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cbiAgfSk7XG4gIHZhciAkUHJvbWlzZSA9IFByb21pc2U7XG4gIHZhciAkUHJvbWlzZVJlamVjdCA9ICRQcm9taXNlLnJlamVjdDtcbiAgZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUocHJvbWlzZSwgeCkge1xuICAgIHByb21pc2VEb25lKHByb21pc2UsICsxLCB4LCBwcm9taXNlLm9uUmVzb2x2ZV8pO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VSZWplY3QocHJvbWlzZSwgcikge1xuICAgIHByb21pc2VEb25lKHByb21pc2UsIC0xLCByLCBwcm9taXNlLm9uUmVqZWN0Xyk7XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZURvbmUocHJvbWlzZSwgc3RhdHVzLCB2YWx1ZSwgcmVhY3Rpb25zKSB7XG4gICAgaWYgKHByb21pc2Uuc3RhdHVzXyAhPT0gMClcbiAgICAgIHJldHVybjtcbiAgICBwcm9taXNlRW5xdWV1ZSh2YWx1ZSwgcmVhY3Rpb25zKTtcbiAgICBwcm9taXNlU2V0KHByb21pc2UsIHN0YXR1cywgdmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VFbnF1ZXVlKHZhbHVlLCB0YXNrcykge1xuICAgIGFzeW5jKChmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgcHJvbWlzZUhhbmRsZSh2YWx1ZSwgdGFza3NbaV0sIHRhc2tzW2kgKyAxXSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VIYW5kbGUodmFsdWUsIGhhbmRsZXIsIGRlZmVycmVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGRlZmVycmVkLnByb21pc2UpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3I7XG4gICAgICBlbHNlIGlmIChpc1Byb21pc2UocmVzdWx0KSlcbiAgICAgICAgY2hhaW4ocmVzdWx0LCBkZWZlcnJlZC5yZXNvbHZlLCBkZWZlcnJlZC5yZWplY3QpO1xuICAgICAgZWxzZVxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgdmFyIHRoZW5hYmxlU3ltYm9sID0gJ0BAdGhlbmFibGUnO1xuICBmdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggJiYgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZUNvZXJjZShjb25zdHJ1Y3RvciwgeCkge1xuICAgIGlmICghaXNQcm9taXNlKHgpICYmIGlzT2JqZWN0KHgpKSB7XG4gICAgICB2YXIgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4gPSB4LnRoZW47XG4gICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJFByb21pc2VSZWplY3QuY2FsbChjb25zdHJ1Y3Rvciwgcik7XG4gICAgICAgIHhbdGhlbmFibGVTeW1ib2xdID0gcHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHAgPSB4W3RoZW5hYmxlU3ltYm9sXTtcbiAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBnZXREZWZlcnJlZChjb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgeFt0aGVuYWJsZVN5bWJvbF0gPSBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwoeCwgZGVmZXJyZWQucmVzb2x2ZSwgZGVmZXJyZWQucmVqZWN0KTtcbiAgICAgICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsUHJvbWlzZShnbG9iYWwpIHtcbiAgICBpZiAoIWdsb2JhbC5Qcm9taXNlKVxuICAgICAgZ2xvYmFsLlByb21pc2UgPSBQcm9taXNlO1xuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxQcm9taXNlKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgUHJvbWlzZSgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsUHJvbWlzZSgpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbFByb21pc2U7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvUHJvbWlzZS5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nSXRlcmF0b3IuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyICRfXzI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZ0l0ZXJhdG9yLmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QgPSAkX18wLmNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0LFxuICAgICAgaXNPYmplY3QgPSAkX18wLmlzT2JqZWN0O1xuICB2YXIgdG9Qcm9wZXJ0eSA9ICR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5O1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgaXRlcmF0ZWRTdHJpbmcgPSBTeW1ib2woJ2l0ZXJhdGVkU3RyaW5nJyk7XG4gIHZhciBzdHJpbmdJdGVyYXRvck5leHRJbmRleCA9IFN5bWJvbCgnc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXgnKTtcbiAgdmFyIFN0cmluZ0l0ZXJhdG9yID0gZnVuY3Rpb24gU3RyaW5nSXRlcmF0b3IoKSB7fTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoU3RyaW5nSXRlcmF0b3IsICgkX18yID0ge30sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkX18yLCBcIm5leHRcIiwge1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvID0gdGhpcztcbiAgICAgIGlmICghaXNPYmplY3QobykgfHwgIWhhc093blByb3BlcnR5LmNhbGwobywgaXRlcmF0ZWRTdHJpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgbXVzdCBiZSBhIFN0cmluZ0l0ZXJhdG9yIG9iamVjdCcpO1xuICAgICAgfVxuICAgICAgdmFyIHMgPSBvW3RvUHJvcGVydHkoaXRlcmF0ZWRTdHJpbmcpXTtcbiAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgcG9zaXRpb24gPSBvW3RvUHJvcGVydHkoc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXgpXTtcbiAgICAgIHZhciBsZW4gPSBzLmxlbmd0aDtcbiAgICAgIGlmIChwb3NpdGlvbiA+PSBsZW4pIHtcbiAgICAgICAgb1t0b1Byb3BlcnR5KGl0ZXJhdGVkU3RyaW5nKV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgdmFyIGZpcnN0ID0gcy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICAgIHZhciByZXN1bHRTdHJpbmc7XG4gICAgICBpZiAoZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBsZW4pIHtcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZShmaXJzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2Vjb25kID0gcy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSk7XG4gICAgICAgIGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7XG4gICAgICAgICAgcmVzdWx0U3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZShmaXJzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0U3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZShmaXJzdCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHNlY29uZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9bdG9Qcm9wZXJ0eShzdHJpbmdJdGVyYXRvck5leHRJbmRleCldID0gcG9zaXRpb24gKyByZXN1bHRTdHJpbmcubGVuZ3RoO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KHJlc3VsdFN0cmluZywgZmFsc2UpO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkX18yLCBTeW1ib2wuaXRlcmF0b3IsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCAkX18yKSwge30pO1xuICBmdW5jdGlvbiBjcmVhdGVTdHJpbmdJdGVyYXRvcihzdHJpbmcpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhzdHJpbmcpO1xuICAgIHZhciBpdGVyYXRvciA9IE9iamVjdC5jcmVhdGUoU3RyaW5nSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgICBpdGVyYXRvclt0b1Byb3BlcnR5KGl0ZXJhdGVkU3RyaW5nKV0gPSBzO1xuICAgIGl0ZXJhdG9yW3RvUHJvcGVydHkoc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXgpXSA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiB7Z2V0IGNyZWF0ZVN0cmluZ0l0ZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0l0ZXJhdG9yO1xuICAgIH19O1xufSk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmcuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nLmpzXCI7XG4gIHZhciBjcmVhdGVTdHJpbmdJdGVyYXRvciA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmdJdGVyYXRvci5qc1wiKS5jcmVhdGVTdHJpbmdJdGVyYXRvcjtcbiAgdmFyICRfXzEgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBtYXliZUFkZEZ1bmN0aW9ucyA9ICRfXzEubWF5YmVBZGRGdW5jdGlvbnMsXG4gICAgICBtYXliZUFkZEl0ZXJhdG9yID0gJF9fMS5tYXliZUFkZEl0ZXJhdG9yLFxuICAgICAgcmVnaXN0ZXJQb2x5ZmlsbCA9ICRfXzEucmVnaXN0ZXJQb2x5ZmlsbDtcbiAgdmFyICR0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciAkaW5kZXhPZiA9IFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZjtcbiAgdmFyICRsYXN0SW5kZXhPZiA9IFN0cmluZy5wcm90b3R5cGUubGFzdEluZGV4T2Y7XG4gIGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICBpZiAodGhpcyA9PSBudWxsIHx8ICR0b1N0cmluZy5jYWxsKHNlYXJjaCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgc2VhcmNoU3RyaW5nID0gU3RyaW5nKHNlYXJjaCk7XG4gICAgdmFyIHNlYXJjaExlbmd0aCA9IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uID8gTnVtYmVyKHBvc2l0aW9uKSA6IDA7XG4gICAgaWYgKGlzTmFOKHBvcykpIHtcbiAgICAgIHBvcyA9IDA7XG4gICAgfVxuICAgIHZhciBzdGFydCA9IE1hdGgubWluKE1hdGgubWF4KHBvcywgMCksIHN0cmluZ0xlbmd0aCk7XG4gICAgcmV0dXJuICRpbmRleE9mLmNhbGwoc3RyaW5nLCBzZWFyY2hTdHJpbmcsIHBvcykgPT0gc3RhcnQ7XG4gIH1cbiAgZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICBpZiAodGhpcyA9PSBudWxsIHx8ICR0b1N0cmluZy5jYWxsKHNlYXJjaCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgc2VhcmNoU3RyaW5nID0gU3RyaW5nKHNlYXJjaCk7XG4gICAgdmFyIHNlYXJjaExlbmd0aCA9IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHBvcyA9IHN0cmluZ0xlbmd0aDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcyA9IHBvc2l0aW9uID8gTnVtYmVyKHBvc2l0aW9uKSA6IDA7XG4gICAgICAgIGlmIChpc05hTihwb3MpKSB7XG4gICAgICAgICAgcG9zID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZW5kID0gTWF0aC5taW4oTWF0aC5tYXgocG9zLCAwKSwgc3RyaW5nTGVuZ3RoKTtcbiAgICB2YXIgc3RhcnQgPSBlbmQgLSBzZWFyY2hMZW5ndGg7XG4gICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gJGxhc3RJbmRleE9mLmNhbGwoc3RyaW5nLCBzZWFyY2hTdHJpbmcsIHN0YXJ0KSA9PSBzdGFydDtcbiAgfVxuICBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2gpIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICBpZiAoc2VhcmNoICYmICR0b1N0cmluZy5jYWxsKHNlYXJjaCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgc2VhcmNoU3RyaW5nID0gU3RyaW5nKHNlYXJjaCk7XG4gICAgdmFyIHNlYXJjaExlbmd0aCA9IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uID8gTnVtYmVyKHBvc2l0aW9uKSA6IDA7XG4gICAgaWYgKHBvcyAhPSBwb3MpIHtcbiAgICAgIHBvcyA9IDA7XG4gICAgfVxuICAgIHZhciBzdGFydCA9IE1hdGgubWluKE1hdGgubWF4KHBvcywgMCksIHN0cmluZ0xlbmd0aCk7XG4gICAgaWYgKHNlYXJjaExlbmd0aCArIHN0YXJ0ID4gc3RyaW5nTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAkaW5kZXhPZi5jYWxsKHN0cmluZywgc2VhcmNoU3RyaW5nLCBwb3MpICE9IC0xO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgIHZhciBuID0gY291bnQgPyBOdW1iZXIoY291bnQpIDogMDtcbiAgICBpZiAoaXNOYU4obikpIHtcbiAgICAgIG4gPSAwO1xuICAgIH1cbiAgICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkge1xuICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgIH1cbiAgICBpZiAobiA9PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB3aGlsZSAobi0tKSB7XG4gICAgICByZXN1bHQgKz0gc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgdmFyIHNpemUgPSBzdHJpbmcubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IHBvc2l0aW9uID8gTnVtYmVyKHBvc2l0aW9uKSA6IDA7XG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNpemUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBmaXJzdCA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICB2YXIgc2Vjb25kO1xuICAgIGlmIChmaXJzdCA+PSAweEQ4MDAgJiYgZmlyc3QgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHNlY29uZCA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG4gICAgICBpZiAoc2Vjb25kID49IDB4REMwMCAmJiBzZWNvbmQgPD0gMHhERkZGKSB7XG4gICAgICAgIHJldHVybiAoZmlyc3QgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlyc3Q7XG4gIH1cbiAgZnVuY3Rpb24gcmF3KGNhbGxzaXRlKSB7XG4gICAgdmFyIHJhdyA9IGNhbGxzaXRlLnJhdztcbiAgICB2YXIgbGVuID0gcmF3Lmxlbmd0aCA+Pj4gMDtcbiAgICBpZiAobGVuID09PSAwKVxuICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBzID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBzICs9IHJhd1tpXTtcbiAgICAgIGlmIChpICsgMSA9PT0gbGVuKVxuICAgICAgICByZXR1cm4gcztcbiAgICAgIHMgKz0gYXJndW1lbnRzWysraV07XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoKSB7XG4gICAgdmFyIGNvZGVVbml0cyA9IFtdO1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIGhpZ2hTdXJyb2dhdGU7XG4gICAgdmFyIGxvd1N1cnJvZ2F0ZTtcbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKTtcbiAgICAgIGlmICghaXNGaW5pdGUoY29kZVBvaW50KSB8fCBjb2RlUG9pbnQgPCAwIHx8IGNvZGVQb2ludCA+IDB4MTBGRkZGIHx8IGZsb29yKGNvZGVQb2ludCkgIT0gY29kZVBvaW50KSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludDogJyArIGNvZGVQb2ludCk7XG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4RkZGRikge1xuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4RDgwMDtcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4REMwMDtcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKTtcbiAgfVxuICBmdW5jdGlvbiBzdHJpbmdQcm90b3R5cGVJdGVyYXRvcigpIHtcbiAgICB2YXIgbyA9ICR0cmFjZXVyUnVudGltZS5jaGVja09iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICB2YXIgcyA9IFN0cmluZyhvKTtcbiAgICByZXR1cm4gY3JlYXRlU3RyaW5nSXRlcmF0b3Iocyk7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxTdHJpbmcoZ2xvYmFsKSB7XG4gICAgdmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoU3RyaW5nLnByb3RvdHlwZSwgWydjb2RlUG9pbnRBdCcsIGNvZGVQb2ludEF0LCAnZW5kc1dpdGgnLCBlbmRzV2l0aCwgJ2luY2x1ZGVzJywgaW5jbHVkZXMsICdyZXBlYXQnLCByZXBlYXQsICdzdGFydHNXaXRoJywgc3RhcnRzV2l0aF0pO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKFN0cmluZywgWydmcm9tQ29kZVBvaW50JywgZnJvbUNvZGVQb2ludCwgJ3JhdycsIHJhd10pO1xuICAgIG1heWJlQWRkSXRlcmF0b3IoU3RyaW5nLnByb3RvdHlwZSwgc3RyaW5nUHJvdG90eXBlSXRlcmF0b3IsIFN5bWJvbCk7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbFN0cmluZyk7XG4gIHJldHVybiB7XG4gICAgZ2V0IHN0YXJ0c1dpdGgoKSB7XG4gICAgICByZXR1cm4gc3RhcnRzV2l0aDtcbiAgICB9LFxuICAgIGdldCBlbmRzV2l0aCgpIHtcbiAgICAgIHJldHVybiBlbmRzV2l0aDtcbiAgICB9LFxuICAgIGdldCBpbmNsdWRlcygpIHtcbiAgICAgIHJldHVybiBpbmNsdWRlcztcbiAgICB9LFxuICAgIGdldCByZXBlYXQoKSB7XG4gICAgICByZXR1cm4gcmVwZWF0O1xuICAgIH0sXG4gICAgZ2V0IGNvZGVQb2ludEF0KCkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludEF0O1xuICAgIH0sXG4gICAgZ2V0IHJhdygpIHtcbiAgICAgIHJldHVybiByYXc7XG4gICAgfSxcbiAgICBnZXQgZnJvbUNvZGVQb2ludCgpIHtcbiAgICAgIHJldHVybiBmcm9tQ29kZVBvaW50O1xuICAgIH0sXG4gICAgZ2V0IHN0cmluZ1Byb3RvdHlwZUl0ZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIHN0cmluZ1Byb3RvdHlwZUl0ZXJhdG9yO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsU3RyaW5nO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZy5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlJdGVyYXRvci5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgJF9fMjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlJdGVyYXRvci5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIHRvT2JqZWN0ID0gJF9fMC50b09iamVjdCxcbiAgICAgIHRvVWludDMyID0gJF9fMC50b1VpbnQzMixcbiAgICAgIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0ID0gJF9fMC5jcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdDtcbiAgdmFyIEFSUkFZX0lURVJBVE9SX0tJTkRfS0VZUyA9IDE7XG4gIHZhciBBUlJBWV9JVEVSQVRPUl9LSU5EX1ZBTFVFUyA9IDI7XG4gIHZhciBBUlJBWV9JVEVSQVRPUl9LSU5EX0VOVFJJRVMgPSAzO1xuICB2YXIgQXJyYXlJdGVyYXRvciA9IGZ1bmN0aW9uIEFycmF5SXRlcmF0b3IoKSB7fTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoQXJyYXlJdGVyYXRvciwgKCRfXzIgPSB7fSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCRfXzIsIFwibmV4dFwiLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdG9PYmplY3QodGhpcyk7XG4gICAgICB2YXIgYXJyYXkgPSBpdGVyYXRvci5pdGVyYXRvck9iamVjdF87XG4gICAgICBpZiAoIWFycmF5KSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdCBpcyBub3QgYW4gQXJyYXlJdGVyYXRvcicpO1xuICAgICAgfVxuICAgICAgdmFyIGluZGV4ID0gaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF87XG4gICAgICB2YXIgaXRlbUtpbmQgPSBpdGVyYXRvci5hcnJheUl0ZXJhdGlvbktpbmRfO1xuICAgICAgdmFyIGxlbmd0aCA9IHRvVWludDMyKGFycmF5Lmxlbmd0aCk7XG4gICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIGl0ZXJhdG9yLmFycmF5SXRlcmF0b3JOZXh0SW5kZXhfID0gSW5maW5pdHk7XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF8gPSBpbmRleCArIDE7XG4gICAgICBpZiAoaXRlbUtpbmQgPT0gQVJSQVlfSVRFUkFUT1JfS0lORF9WQUxVRVMpXG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChhcnJheVtpbmRleF0sIGZhbHNlKTtcbiAgICAgIGlmIChpdGVtS2luZCA9PSBBUlJBWV9JVEVSQVRPUl9LSU5EX0VOVFJJRVMpXG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChbaW5kZXgsIGFycmF5W2luZGV4XV0sIGZhbHNlKTtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChpbmRleCwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkX18yLCBTeW1ib2wuaXRlcmF0b3IsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCAkX18yKSwge30pO1xuICBmdW5jdGlvbiBjcmVhdGVBcnJheUl0ZXJhdG9yKGFycmF5LCBraW5kKSB7XG4gICAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KGFycmF5KTtcbiAgICB2YXIgaXRlcmF0b3IgPSBuZXcgQXJyYXlJdGVyYXRvcjtcbiAgICBpdGVyYXRvci5pdGVyYXRvck9iamVjdF8gPSBvYmplY3Q7XG4gICAgaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF8gPSAwO1xuICAgIGl0ZXJhdG9yLmFycmF5SXRlcmF0aW9uS2luZF8gPSBraW5kO1xuICAgIHJldHVybiBpdGVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgIHJldHVybiBjcmVhdGVBcnJheUl0ZXJhdG9yKHRoaXMsIEFSUkFZX0lURVJBVE9SX0tJTkRfRU5UUklFUyk7XG4gIH1cbiAgZnVuY3Rpb24ga2V5cygpIHtcbiAgICByZXR1cm4gY3JlYXRlQXJyYXlJdGVyYXRvcih0aGlzLCBBUlJBWV9JVEVSQVRPUl9LSU5EX0tFWVMpO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICByZXR1cm4gY3JlYXRlQXJyYXlJdGVyYXRvcih0aGlzLCBBUlJBWV9JVEVSQVRPUl9LSU5EX1ZBTFVFUyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXQgZW50cmllcygpIHtcbiAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH0sXG4gICAgZ2V0IGtleXMoKSB7XG4gICAgICByZXR1cm4ga2V5cztcbiAgICB9LFxuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXkuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXkuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlJdGVyYXRvci5qc1wiKSxcbiAgICAgIGVudHJpZXMgPSAkX18wLmVudHJpZXMsXG4gICAgICBrZXlzID0gJF9fMC5rZXlzLFxuICAgICAgdmFsdWVzID0gJF9fMC52YWx1ZXM7XG4gIHZhciAkX18xID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgY2hlY2tJdGVyYWJsZSA9ICRfXzEuY2hlY2tJdGVyYWJsZSxcbiAgICAgIGlzQ2FsbGFibGUgPSAkX18xLmlzQ2FsbGFibGUsXG4gICAgICBpc0NvbnN0cnVjdG9yID0gJF9fMS5pc0NvbnN0cnVjdG9yLFxuICAgICAgbWF5YmVBZGRGdW5jdGlvbnMgPSAkX18xLm1heWJlQWRkRnVuY3Rpb25zLFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzEubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18xLnJlZ2lzdGVyUG9seWZpbGwsXG4gICAgICB0b0ludGVnZXIgPSAkX18xLnRvSW50ZWdlcixcbiAgICAgIHRvTGVuZ3RoID0gJF9fMS50b0xlbmd0aCxcbiAgICAgIHRvT2JqZWN0ID0gJF9fMS50b09iamVjdDtcbiAgZnVuY3Rpb24gZnJvbShhcnJMaWtlKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzJdO1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgaXRlbXMgPSB0b09iamVjdChhcnJMaWtlKTtcbiAgICB2YXIgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGsgPSAwO1xuICAgIHZhciBhcnIsXG4gICAgICAgIGxlbjtcbiAgICBpZiAobWFwcGluZyAmJiAhaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tJdGVyYWJsZShpdGVtcykpIHtcbiAgICAgIGFyciA9IGlzQ29uc3RydWN0b3IoQykgPyBuZXcgQygpIDogW107XG4gICAgICBmb3IgKHZhciAkX18yID0gaXRlbXNbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoU3ltYm9sLml0ZXJhdG9yKV0oKSxcbiAgICAgICAgICAkX18zOyAhKCRfXzMgPSAkX18yLm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICAgIHZhciBpdGVtID0gJF9fMy52YWx1ZTtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICAgICAgICBhcnJba10gPSBtYXBGbi5jYWxsKHRoaXNBcmcsIGl0ZW0sIGspO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJba10gPSBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyci5sZW5ndGggPSBrO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcbiAgICBhcnIgPSBpc0NvbnN0cnVjdG9yKEMpID8gbmV3IEMobGVuKSA6IG5ldyBBcnJheShsZW4pO1xuICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICAgIGFycltrXSA9IHR5cGVvZiB0aGlzQXJnID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGl0ZW1zW2tdLCBrKSA6IG1hcEZuLmNhbGwodGhpc0FyZywgaXRlbXNba10sIGspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyW2tdID0gaXRlbXNba107XG4gICAgICB9XG4gICAgfVxuICAgIGFyci5sZW5ndGggPSBsZW47XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBvZigpIHtcbiAgICBmb3IgKHZhciBpdGVtcyA9IFtdLFxuICAgICAgICAkX180ID0gMDsgJF9fNCA8IGFyZ3VtZW50cy5sZW5ndGg7ICRfXzQrKylcbiAgICAgIGl0ZW1zWyRfXzRdID0gYXJndW1lbnRzWyRfXzRdO1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgbGVuID0gaXRlbXMubGVuZ3RoO1xuICAgIHZhciBhcnIgPSBpc0NvbnN0cnVjdG9yKEMpID8gbmV3IEMobGVuKSA6IG5ldyBBcnJheShsZW4pO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgIGFycltrXSA9IGl0ZW1zW2tdO1xuICAgIH1cbiAgICBhcnIubGVuZ3RoID0gbGVuO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgZnVuY3Rpb24gZmlsbCh2YWx1ZSkge1xuICAgIHZhciBzdGFydCA9IGFyZ3VtZW50c1sxXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHZhciBlbmQgPSBhcmd1bWVudHNbMl07XG4gICAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aChvYmplY3QubGVuZ3RoKTtcbiAgICB2YXIgZmlsbFN0YXJ0ID0gdG9JbnRlZ2VyKHN0YXJ0KTtcbiAgICB2YXIgZmlsbEVuZCA9IGVuZCAhPT0gdW5kZWZpbmVkID8gdG9JbnRlZ2VyKGVuZCkgOiBsZW47XG4gICAgZmlsbFN0YXJ0ID0gZmlsbFN0YXJ0IDwgMCA/IE1hdGgubWF4KGxlbiArIGZpbGxTdGFydCwgMCkgOiBNYXRoLm1pbihmaWxsU3RhcnQsIGxlbik7XG4gICAgZmlsbEVuZCA9IGZpbGxFbmQgPCAwID8gTWF0aC5tYXgobGVuICsgZmlsbEVuZCwgMCkgOiBNYXRoLm1pbihmaWxsRW5kLCBsZW4pO1xuICAgIHdoaWxlIChmaWxsU3RhcnQgPCBmaWxsRW5kKSB7XG4gICAgICBvYmplY3RbZmlsbFN0YXJ0XSA9IHZhbHVlO1xuICAgICAgZmlsbFN0YXJ0Kys7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gZmluZEhlbHBlcih0aGlzLCBwcmVkaWNhdGUsIHRoaXNBcmcpO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gZmluZEhlbHBlcih0aGlzLCBwcmVkaWNhdGUsIHRoaXNBcmcsIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRIZWxwZXIoc2VsZiwgcHJlZGljYXRlKSB7XG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMl07XG4gICAgdmFyIHJldHVybkluZGV4ID0gYXJndW1lbnRzWzNdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgIHZhciBvYmplY3QgPSB0b09iamVjdChzZWxmKTtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgob2JqZWN0Lmxlbmd0aCk7XG4gICAgaWYgKCFpc0NhbGxhYmxlKHByZWRpY2F0ZSkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmplY3RbaV07XG4gICAgICBpZiAocHJlZGljYXRlLmNhbGwodGhpc0FyZywgdmFsdWUsIGksIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkluZGV4ID8gaSA6IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuSW5kZXggPyAtMSA6IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbEFycmF5KGdsb2JhbCkge1xuICAgIHZhciAkX181ID0gZ2xvYmFsLFxuICAgICAgICBBcnJheSA9ICRfXzUuQXJyYXksXG4gICAgICAgIE9iamVjdCA9ICRfXzUuT2JqZWN0LFxuICAgICAgICBTeW1ib2wgPSAkX181LlN5bWJvbDtcbiAgICBtYXliZUFkZEZ1bmN0aW9ucyhBcnJheS5wcm90b3R5cGUsIFsnZW50cmllcycsIGVudHJpZXMsICdrZXlzJywga2V5cywgJ3ZhbHVlcycsIHZhbHVlcywgJ2ZpbGwnLCBmaWxsLCAnZmluZCcsIGZpbmQsICdmaW5kSW5kZXgnLCBmaW5kSW5kZXhdKTtcbiAgICBtYXliZUFkZEZ1bmN0aW9ucyhBcnJheSwgWydmcm9tJywgZnJvbSwgJ29mJywgb2ZdKTtcbiAgICBtYXliZUFkZEl0ZXJhdG9yKEFycmF5LnByb3RvdHlwZSwgdmFsdWVzLCBTeW1ib2wpO1xuICAgIG1heWJlQWRkSXRlcmF0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKFtdLnZhbHVlcygpKSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBTeW1ib2wpO1xuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxBcnJheSk7XG4gIHJldHVybiB7XG4gICAgZ2V0IGZyb20oKSB7XG4gICAgICByZXR1cm4gZnJvbTtcbiAgICB9LFxuICAgIGdldCBvZigpIHtcbiAgICAgIHJldHVybiBvZjtcbiAgICB9LFxuICAgIGdldCBmaWxsKCkge1xuICAgICAgcmV0dXJuIGZpbGw7XG4gICAgfSxcbiAgICBnZXQgZmluZCgpIHtcbiAgICAgIHJldHVybiBmaW5kO1xuICAgIH0sXG4gICAgZ2V0IGZpbmRJbmRleCgpIHtcbiAgICAgIHJldHVybiBmaW5kSW5kZXg7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxBcnJheSgpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbEFycmF5O1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL0FycmF5LmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9PYmplY3QuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvT2JqZWN0LmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgbWF5YmVBZGRGdW5jdGlvbnMgPSAkX18wLm1heWJlQWRkRnVuY3Rpb25zLFxuICAgICAgcmVnaXN0ZXJQb2x5ZmlsbCA9ICRfXzAucmVnaXN0ZXJQb2x5ZmlsbDtcbiAgdmFyICRfXzEgPSAkdHJhY2V1clJ1bnRpbWUsXG4gICAgICBkZWZpbmVQcm9wZXJ0eSA9ICRfXzEuZGVmaW5lUHJvcGVydHksXG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSAkX18xLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgIGdldE93blByb3BlcnR5TmFtZXMgPSAkX18xLmdldE93blByb3BlcnR5TmFtZXMsXG4gICAgICBpc1ByaXZhdGVOYW1lID0gJF9fMS5pc1ByaXZhdGVOYW1lLFxuICAgICAga2V5cyA9ICRfXzEua2V5cztcbiAgZnVuY3Rpb24gaXMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAobGVmdCA9PT0gcmlnaHQpXG4gICAgICByZXR1cm4gbGVmdCAhPT0gMCB8fCAxIC8gbGVmdCA9PT0gMSAvIHJpZ2h0O1xuICAgIHJldHVybiBsZWZ0ICE9PSBsZWZ0ICYmIHJpZ2h0ICE9PSByaWdodDtcbiAgfVxuICBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgcHJvcHMgPSBzb3VyY2UgPT0gbnVsbCA/IFtdIDoga2V5cyhzb3VyY2UpO1xuICAgICAgdmFyIHAsXG4gICAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuICAgICAgZm9yIChwID0gMDsgcCA8IGxlbmd0aDsgcCsrKSB7XG4gICAgICAgIHZhciBuYW1lID0gcHJvcHNbcF07XG4gICAgICAgIGlmIChpc1ByaXZhdGVOYW1lKG5hbWUpKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSBzb3VyY2VbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgZnVuY3Rpb24gbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgcHJvcHMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XG4gICAgdmFyIHAsXG4gICAgICAgIGRlc2NyaXB0b3IsXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcbiAgICBmb3IgKHAgPSAwOyBwIDwgbGVuZ3RoOyBwKyspIHtcbiAgICAgIHZhciBuYW1lID0gcHJvcHNbcF07XG4gICAgICBpZiAoaXNQcml2YXRlTmFtZShuYW1lKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgcHJvcHNbcF0pO1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wc1twXSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxPYmplY3QoZ2xvYmFsKSB7XG4gICAgdmFyIE9iamVjdCA9IGdsb2JhbC5PYmplY3Q7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoT2JqZWN0LCBbJ2Fzc2lnbicsIGFzc2lnbiwgJ2lzJywgaXMsICdtaXhpbicsIG1peGluXSk7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbE9iamVjdCk7XG4gIHJldHVybiB7XG4gICAgZ2V0IGlzKCkge1xuICAgICAgcmV0dXJuIGlzO1xuICAgIH0sXG4gICAgZ2V0IGFzc2lnbigpIHtcbiAgICAgIHJldHVybiBhc3NpZ247XG4gICAgfSxcbiAgICBnZXQgbWl4aW4oKSB7XG4gICAgICByZXR1cm4gbWl4aW47XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxPYmplY3QoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxPYmplY3Q7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvT2JqZWN0LmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9OdW1iZXIuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTnVtYmVyLmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgaXNOdW1iZXIgPSAkX18wLmlzTnVtYmVyLFxuICAgICAgbWF5YmVBZGRDb25zdHMgPSAkX18wLm1heWJlQWRkQ29uc3RzLFxuICAgICAgbWF5YmVBZGRGdW5jdGlvbnMgPSAkX18wLm1heWJlQWRkRnVuY3Rpb25zLFxuICAgICAgcmVnaXN0ZXJQb2x5ZmlsbCA9ICRfXzAucmVnaXN0ZXJQb2x5ZmlsbCxcbiAgICAgIHRvSW50ZWdlciA9ICRfXzAudG9JbnRlZ2VyO1xuICB2YXIgJGFicyA9IE1hdGguYWJzO1xuICB2YXIgJGlzRmluaXRlID0gaXNGaW5pdGU7XG4gIHZhciAkaXNOYU4gPSBpc05hTjtcbiAgdmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICB2YXIgTUlOX1NBRkVfSU5URUdFUiA9IC1NYXRoLnBvdygyLCA1MykgKyAxO1xuICB2YXIgRVBTSUxPTiA9IE1hdGgucG93KDIsIC01Mik7XG4gIGZ1bmN0aW9uIE51bWJlcklzRmluaXRlKG51bWJlcikge1xuICAgIHJldHVybiBpc051bWJlcihudW1iZXIpICYmICRpc0Zpbml0ZShudW1iZXIpO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gaXNJbnRlZ2VyKG51bWJlcikge1xuICAgIHJldHVybiBOdW1iZXJJc0Zpbml0ZShudW1iZXIpICYmIHRvSW50ZWdlcihudW1iZXIpID09PSBudW1iZXI7XG4gIH1cbiAgZnVuY3Rpb24gTnVtYmVySXNOYU4obnVtYmVyKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKG51bWJlcikgJiYgJGlzTmFOKG51bWJlcik7XG4gIH1cbiAgO1xuICBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcikge1xuICAgIGlmIChOdW1iZXJJc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICB2YXIgaW50ZWdyYWwgPSB0b0ludGVnZXIobnVtYmVyKTtcbiAgICAgIGlmIChpbnRlZ3JhbCA9PT0gbnVtYmVyKVxuICAgICAgICByZXR1cm4gJGFicyhpbnRlZ3JhbCkgPD0gTUFYX1NBRkVfSU5URUdFUjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsTnVtYmVyKGdsb2JhbCkge1xuICAgIHZhciBOdW1iZXIgPSBnbG9iYWwuTnVtYmVyO1xuICAgIG1heWJlQWRkQ29uc3RzKE51bWJlciwgWydNQVhfU0FGRV9JTlRFR0VSJywgTUFYX1NBRkVfSU5URUdFUiwgJ01JTl9TQUZFX0lOVEVHRVInLCBNSU5fU0FGRV9JTlRFR0VSLCAnRVBTSUxPTicsIEVQU0lMT05dKTtcbiAgICBtYXliZUFkZEZ1bmN0aW9ucyhOdW1iZXIsIFsnaXNGaW5pdGUnLCBOdW1iZXJJc0Zpbml0ZSwgJ2lzSW50ZWdlcicsIGlzSW50ZWdlciwgJ2lzTmFOJywgTnVtYmVySXNOYU4sICdpc1NhZmVJbnRlZ2VyJywgaXNTYWZlSW50ZWdlcl0pO1xuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxOdW1iZXIpO1xuICByZXR1cm4ge1xuICAgIGdldCBNQVhfU0FGRV9JTlRFR0VSKCkge1xuICAgICAgcmV0dXJuIE1BWF9TQUZFX0lOVEVHRVI7XG4gICAgfSxcbiAgICBnZXQgTUlOX1NBRkVfSU5URUdFUigpIHtcbiAgICAgIHJldHVybiBNSU5fU0FGRV9JTlRFR0VSO1xuICAgIH0sXG4gICAgZ2V0IEVQU0lMT04oKSB7XG4gICAgICByZXR1cm4gRVBTSUxPTjtcbiAgICB9LFxuICAgIGdldCBpc0Zpbml0ZSgpIHtcbiAgICAgIHJldHVybiBOdW1iZXJJc0Zpbml0ZTtcbiAgICB9LFxuICAgIGdldCBpc0ludGVnZXIoKSB7XG4gICAgICByZXR1cm4gaXNJbnRlZ2VyO1xuICAgIH0sXG4gICAgZ2V0IGlzTmFOKCkge1xuICAgICAgcmV0dXJuIE51bWJlcklzTmFOO1xuICAgIH0sXG4gICAgZ2V0IGlzU2FmZUludGVnZXIoKSB7XG4gICAgICByZXR1cm4gaXNTYWZlSW50ZWdlcjtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbE51bWJlcigpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbE51bWJlcjtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9OdW1iZXIuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3BvbHlmaWxscy5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9wb2x5ZmlsbHMuanNcIjtcbiAgdmFyIHBvbHlmaWxsQWxsID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLnBvbHlmaWxsQWxsO1xuICBwb2x5ZmlsbEFsbChSZWZsZWN0Lmdsb2JhbCk7XG4gIHZhciBzZXR1cEdsb2JhbHMgPSAkdHJhY2V1clJ1bnRpbWUuc2V0dXBHbG9iYWxzO1xuICAkdHJhY2V1clJ1bnRpbWUuc2V0dXBHbG9iYWxzID0gZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgc2V0dXBHbG9iYWxzKGdsb2JhbCk7XG4gICAgcG9seWZpbGxBbGwoZ2xvYmFsKTtcbiAgfTtcbiAgcmV0dXJuIHt9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvcG9seWZpbGxzLmpzXCIgKyAnJyk7XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcG9vbCA9IHJlcXVpcmUoXCJ0eXBlZGFycmF5LXBvb2xcIilcbnZhciBvcHMgPSByZXF1aXJlKFwibmRhcnJheS1vcHNcIilcbnZhciBuZGFycmF5ID0gcmVxdWlyZShcIm5kYXJyYXlcIilcbnZhciB3ZWJnbGV3ID0gcmVxdWlyZShcIndlYmdsZXdcIilcblxudmFyIFNVUFBPUlRFRF9UWVBFUyA9IFtcbiAgXCJ1aW50OFwiLFxuICBcInVpbnQ4X2NsYW1wZWRcIixcbiAgXCJ1aW50MTZcIixcbiAgXCJ1aW50MzJcIixcbiAgXCJpbnQ4XCIsXG4gIFwiaW50MTZcIixcbiAgXCJpbnQzMlwiLFxuICBcImZsb2F0MzJcIiBdXG5cbmZ1bmN0aW9uIEdMQnVmZmVyKGdsLCB0eXBlLCBoYW5kbGUsIGxlbmd0aCwgdXNhZ2UpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5oYW5kbGUgPSBoYW5kbGVcbiAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgdGhpcy51c2FnZSA9IHVzYWdlXG59XG5cbnZhciBwcm90byA9IEdMQnVmZmVyLnByb3RvdHlwZVxuXG5wcm90by5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLnR5cGUsIHRoaXMuaGFuZGxlKVxufVxuXG5wcm90by51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMudHlwZSwgbnVsbClcbn1cblxucHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmhhbmRsZSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVHlwZUFycmF5KGdsLCB0eXBlLCBsZW4sIHVzYWdlLCBkYXRhLCBvZmZzZXQpIHtcbiAgdmFyIGRhdGFMZW4gPSBkYXRhLmxlbmd0aCAqIGRhdGEuQllURVNfUEVSX0VMRU1FTlQgXG4gIGlmKG9mZnNldCA8IDApIHtcbiAgICBnbC5idWZmZXJEYXRhKHR5cGUsIGRhdGEsIHVzYWdlKVxuICAgIHJldHVybiBkYXRhTGVuXG4gIH1cbiAgaWYoZGF0YUxlbiArIG9mZnNldCA+IGxlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSWYgcmVzaXppbmcgYnVmZmVyLCBtdXN0IG5vdCBzcGVjaWZ5IG9mZnNldFwiKVxuICB9XG4gIGdsLmJ1ZmZlclN1YkRhdGEodHlwZSwgb2Zmc2V0LCBkYXRhKVxuICByZXR1cm4gbGVuXG59XG5cbmZ1bmN0aW9uIG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBkdHlwZSkge1xuICB2YXIgcmVzID0gcG9vbC5tYWxsb2MoYXJyYXkubGVuZ3RoLCBkdHlwZSlcbiAgdmFyIG4gPSBhcnJheS5sZW5ndGhcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzW2ldID0gYXJyYXlbaV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGlzUGFja2VkKHNoYXBlLCBzdHJpZGUpIHtcbiAgdmFyIG4gPSAxXG4gIGZvcih2YXIgaT1zdHJpZGUubGVuZ3RoLTE7IGk+PTA7IC0taSkge1xuICAgIGlmKHN0cmlkZVtpXSAhPT0gbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIG4gKj0gc2hhcGVbaV1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5wcm90by51cGRhdGUgPSBmdW5jdGlvbihhcnJheSwgb2Zmc2V0KSB7XG4gIGlmKHR5cGVvZiBvZmZzZXQgIT09IFwibnVtYmVyXCIpIHtcbiAgICBvZmZzZXQgPSAtMVxuICB9XG4gIHRoaXMuYmluZCgpXG4gIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJyYXkuc2hhcGUgIT09IFwidW5kZWZpbmVkXCIpIHsgLy9uZGFycmF5XG4gICAgdmFyIGR0eXBlID0gYXJyYXkuZHR5cGVcbiAgICBpZihTVVBQT1JURURfVFlQRVMuaW5kZXhPZihkdHlwZSkgPCAwKSB7XG4gICAgICBkdHlwZSA9IFwiZmxvYXQzMlwiXG4gICAgfVxuICAgIGlmKHRoaXMudHlwZSA9PT0gdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgICAgdmFyIHdnbCA9IHdlYmdsZXcodGhpcy5nbClcbiAgICAgIHZhciBleHQgPSB3Z2wuT0VTX2VsZW1lbnRfaW5kZXhfdWludFxuICAgICAgaWYoZXh0ICYmIGR0eXBlICE9PSBcInVpbnQxNlwiKSB7XG4gICAgICAgIGR0eXBlID0gXCJ1aW50MzJcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHR5cGUgPSBcInVpbnQxNlwiXG4gICAgICB9XG4gICAgfVxuICAgIGlmKGR0eXBlID09PSBhcnJheS5kdHlwZSAmJiBpc1BhY2tlZChhcnJheS5zaGFwZSwgYXJyYXkuc3RyaWRlKSkge1xuICAgICAgaWYoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBhcnJheS5zaGFwZVswXSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheS5kYXRhLCBvZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkuc2hhcGVbMF0pLCBvZmZzZXQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0bXAgPSBwb29sLm1hbGxvYyhhcnJheS5zaXplLCBkdHlwZSlcbiAgICAgIHZhciBuZHQgPSBuZGFycmF5KHRtcCwgYXJyYXkuc2hhcGUpXG4gICAgICBvcHMuYXNzaWduKG5kdCwgYXJyYXkpXG4gICAgICBpZihvZmZzZXQgPCAwKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHRtcCwgb2Zmc2V0KSAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0bXAuc3ViYXJyYXkoMCwgYXJyYXkuc2l6ZSksIG9mZnNldCkgIFxuICAgICAgfVxuICAgICAgcG9vbC5mcmVlKHRtcClcbiAgICB9XG4gIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KGFycmF5KSkgeyAvL1ZhbmlsbGEgYXJyYXlcbiAgICB2YXIgdFxuICAgIGlmKHRoaXMudHlwZSA9PT0gdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgICAgdCA9IG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBcInVpbnQxNlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gbWFrZVNjcmF0Y2hUeXBlQXJyYXkoYXJyYXksIFwiZmxvYXQzMlwiKVxuICAgIH1cbiAgICBpZihvZmZzZXQgPCAwKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0LCBvZmZzZXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHQuc3ViYXJyYXkoMCwgYXJyYXkubGVuZ3RoKSwgb2Zmc2V0KVxuICAgIH1cbiAgICBwb29sLmZyZWUodClcbiAgfSBlbHNlIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJyYXkubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IC8vVHlwZWQgYXJyYXlcbiAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheSwgb2Zmc2V0KVxuICB9IGVsc2UgaWYodHlwZW9mIGFycmF5ID09PSBcIm51bWJlclwiIHx8IGFycmF5ID09PSB1bmRlZmluZWQpIHsgLy9OdW1iZXIvZGVmYXVsdFxuICAgIGlmKG9mZnNldCA+PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IENhbm5vdCBzcGVjaWZ5IG9mZnNldCB3aGVuIHJlc2l6aW5nIGJ1ZmZlclwiKVxuICAgIH1cbiAgICBhcnJheSA9IGFycmF5IHwgMFxuICAgIGlmKGFycmF5IDw9IDApIHtcbiAgICAgIGFycmF5ID0gMVxuICAgIH1cbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy50eXBlLCBhcnJheXwwLCB0aGlzLnVzYWdlKVxuICAgIHRoaXMubGVuZ3RoID0gYXJyYXlcbiAgfSBlbHNlIHsgLy9FcnJvciwgY2FzZSBzaG91bGQgbm90IGhhcHBlblxuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSW52YWxpZCBkYXRhIHR5cGVcIilcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZ2wsIGRhdGEsIHR5cGUsIHVzYWdlKSB7XG4gIHdlYmdsZXcoZ2wpXG4gIHR5cGUgPSB0eXBlIHx8IGdsLkFSUkFZX0JVRkZFUlxuICB1c2FnZSA9IHVzYWdlIHx8IGdsLkRZTkFNSUNfRFJBV1xuICBpZih0eXBlICE9PSBnbC5BUlJBWV9CVUZGRVIgJiYgdHlwZSAhPT0gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgdHlwZSBmb3Igd2ViZ2wgYnVmZmVyLCBtdXN0IGJlIGVpdGhlciBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVJcIilcbiAgfVxuICBpZih1c2FnZSAhPT0gZ2wuRFlOQU1JQ19EUkFXICYmIHVzYWdlICE9PSBnbC5TVEFUSUNfRFJBVyAmJiB1c2FnZSAhPT0gZ2wuU1RSRUFNX0RSQVcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgdXNhZ2UgZm9yIGJ1ZmZlciwgbXVzdCBiZSBlaXRoZXIgZ2wuRFlOQU1JQ19EUkFXLCBnbC5TVEFUSUNfRFJBVyBvciBnbC5TVFJFQU1fRFJBV1wiKVxuICB9XG4gIHZhciBoYW5kbGUgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICB2YXIgcmVzdWx0ID0gbmV3IEdMQnVmZmVyKGdsLCB0eXBlLCBoYW5kbGUsIDAsIHVzYWdlKVxuICByZXN1bHQudXBkYXRlKGRhdGEpXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXIiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY29tcGlsZSA9IHJlcXVpcmUoXCJjd2lzZS1jb21waWxlclwiKVxuXG52YXIgRW1wdHlQcm9jID0ge1xuICBib2R5OiBcIlwiLFxuICBhcmdzOiBbXSxcbiAgdGhpc1ZhcnM6IFtdLFxuICBsb2NhbFZhcnM6IFtdXG59XG5cbmZ1bmN0aW9uIGZpeHVwKHgpIHtcbiAgaWYoIXgpIHtcbiAgICByZXR1cm4gRW1wdHlQcm9jXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8eC5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGEgPSB4LmFyZ3NbaV1cbiAgICBpZihpID09PSAwKSB7XG4gICAgICB4LmFyZ3NbaV0gPSB7bmFtZTogYSwgbHZhbHVlOnRydWUsIHJ2YWx1ZTogISF4LnJ2YWx1ZSwgY291bnQ6eC5jb3VudHx8MSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHguYXJnc1tpXSA9IHtuYW1lOiBhLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDogMX1cbiAgICB9XG4gIH1cbiAgaWYoIXgudGhpc1ZhcnMpIHtcbiAgICB4LnRoaXNWYXJzID0gW11cbiAgfVxuICBpZigheC5sb2NhbFZhcnMpIHtcbiAgICB4LmxvY2FsVmFycyA9IFtdXG4gIH1cbiAgcmV0dXJuIHhcbn1cblxuZnVuY3Rpb24gcGNvbXBpbGUodXNlcl9hcmdzKSB7XG4gIHJldHVybiBjb21waWxlKHtcbiAgICBhcmdzOiAgICAgdXNlcl9hcmdzLmFyZ3MsXG4gICAgcHJlOiAgICAgIGZpeHVwKHVzZXJfYXJncy5wcmUpLFxuICAgIGJvZHk6ICAgICBmaXh1cCh1c2VyX2FyZ3MuYm9keSksXG4gICAgcG9zdDogICAgIGZpeHVwKHVzZXJfYXJncy5wcm9jKSxcbiAgICBmdW5jTmFtZTogdXNlcl9hcmdzLmZ1bmNOYW1lXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG1ha2VPcCh1c2VyX2FyZ3MpIHtcbiAgdmFyIGFyZ3MgPSBbXVxuICBmb3IodmFyIGk9MDsgaTx1c2VyX2FyZ3MuYXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ3MucHVzaChcImFcIitpKVxuICB9XG4gIHZhciB3cmFwcGVyID0gbmV3IEZ1bmN0aW9uKFwiUFwiLCBbXG4gICAgXCJyZXR1cm4gZnVuY3Rpb24gXCIsIHVzZXJfYXJncy5mdW5jTmFtZSwgXCJfbmRhcnJheW9wcyhcIiwgYXJncy5qb2luKFwiLFwiKSwgXCIpIHtQKFwiLCBhcmdzLmpvaW4oXCIsXCIpLCBcIik7cmV0dXJuIGEwfVwiXG4gIF0uam9pbihcIlwiKSlcbiAgcmV0dXJuIHdyYXBwZXIocGNvbXBpbGUodXNlcl9hcmdzKSlcbn1cblxudmFyIGFzc2lnbl9vcHMgPSB7XG4gIGFkZDogIFwiK1wiLFxuICBzdWI6ICBcIi1cIixcbiAgbXVsOiAgXCIqXCIsXG4gIGRpdjogIFwiL1wiLFxuICBtb2Q6ICBcIiVcIixcbiAgYmFuZDogXCImXCIsXG4gIGJvcjogIFwifFwiLFxuICBieG9yOiBcIl5cIixcbiAgbHNoaWZ0OiBcIjw8XCIsXG4gIHJzaGlmdDogXCI+PlwiLFxuICBycnNoaWZ0OiBcIj4+PlwiXG59XG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaWQgaW4gYXNzaWduX29wcykge1xuICAgIHZhciBvcCA9IGFzc2lnbl9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sXG4gICAgICAgICAgICAgYm9keTogXCJhPWJcIitvcCtcImNcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhXCIrb3ArXCI9YlwifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcInNcIn0sXG4gICAgICBmdW5jTmFtZTogaWQrXCJzXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImFcIitvcCtcIj1zXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgZnVuY05hbWU6IGlkK1wic2VxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgdW5hcnlfb3BzID0ge1xuICBub3Q6IFwiIVwiLFxuICBibm90OiBcIn5cIixcbiAgbmVnOiBcIi1cIixcbiAgcmVjaXA6IFwiMS4wL1wiXG59XG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaWQgaW4gdW5hcnlfb3BzKSB7XG4gICAgdmFyIG9wID0gdW5hcnlfb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPVwiK29wK1wiYlwifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1cIitvcCtcImFcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBjb3VudDogMixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgYmluYXJ5X29wcyA9IHtcbiAgYW5kOiBcIiYmXCIsXG4gIG9yOiBcInx8XCIsXG4gIGVxOiBcIj09PVwiLFxuICBuZXE6IFwiIT09XCIsXG4gIGx0OiBcIjxcIixcbiAgZ3Q6IFwiPlwiLFxuICBsZXE6IFwiPD1cIixcbiAgZ2VxOiBcIj49XCJcbn1cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaWQgaW4gYmluYXJ5X29wcykge1xuICAgIHZhciBvcCA9IGJpbmFyeV9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCIsIFwiY1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJjXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCIsIFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJzXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkK1wic1wiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWFcIitvcCtcImJcIn0sXG4gICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgIGNvdW50OjIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic2VxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1hXCIrb3ArXCJzXCJ9LFxuICAgICAgcnZhbHVlOnRydWUsXG4gICAgICBjb3VudDoyLFxuICAgICAgZnVuY05hbWU6IGlkK1wic2VxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF91bmFyeSA9IFtcbiAgXCJhYnNcIixcbiAgXCJhY29zXCIsXG4gIFwiYXNpblwiLFxuICBcImF0YW5cIixcbiAgXCJjZWlsXCIsXG4gIFwiY29zXCIsXG4gIFwiZXhwXCIsXG4gIFwiZmxvb3JcIixcbiAgXCJsb2dcIixcbiAgXCJyb3VuZFwiLFxuICBcInNpblwiLFxuICBcInNxcnRcIixcbiAgXCJ0YW5cIlxuXVxuOyhmdW5jdGlvbigpIHtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF91bmFyeS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmID0gbWF0aF91bmFyeVtpXVxuICAgIGV4cG9ydHNbZl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczogW1wiYVwiXSwgYm9keTpcImE9dGhpc19mKGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wiZXFcIlxuICAgICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF9jb21tID0gW1xuICBcIm1heFwiLFxuICBcIm1pblwiLFxuICBcImF0YW4yXCIsXG4gIFwicG93XCJcbl1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF9jb21tLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGY9IG1hdGhfY29tbVtpXVxuICAgIGV4cG9ydHNbZl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGMpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZlxuICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGMpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcInNcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGEsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcInNlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihhLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OjIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcInNlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF9ub25jb21tID0gW1xuICBcImF0YW4yXCIsXG4gIFwicG93XCJcbl1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF9ub25jb21tLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGY9IG1hdGhfbm9uY29tbVtpXVxuICAgIGV4cG9ydHNbZitcIm9wXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYyxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcHNcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYyxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcHNcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcGVxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYixhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcHNlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OjIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wc2VxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbmV4cG9ydHMuYW55ID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJpZihhKXtyZXR1cm4gdHJ1ZX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gZmFsc2VcIn0sXG4gIGZ1bmNOYW1lOiBcImFueVwiXG59KVxuXG5leHBvcnRzLmFsbCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwieFwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwiaWYoIXgpe3JldHVybiBmYWxzZX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gdHJ1ZVwifSxcbiAgZnVuY05hbWU6IFwiYWxsXCJcbn0pXG5cbmV4cG9ydHMuc3VtID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcInRoaXNfcys9YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwic3VtXCJcbn0pXG5cbmV4cG9ydHMucHJvZCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0xXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJ0aGlzX3MqPWFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcInByb2RcIlxufSlcblxuZXhwb3J0cy5ub3JtMnNxdWFyZWQgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoyfV0sIGJvZHk6IFwidGhpc19zKz1hKmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0yc3F1YXJlZFwiXG59KVxuICBcbmV4cG9ydHMubm9ybTIgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoyfV0sIGJvZHk6IFwidGhpc19zKz1hKmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiBNYXRoLnNxcnQodGhpc19zKVwifSxcbiAgZnVuY05hbWU6IFwibm9ybTJcIlxufSlcbiAgXG5cbmV4cG9ydHMubm9ybWluZiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjR9XSwgYm9keTpcImlmKC1hPnRoaXNfcyl7dGhpc19zPS1hfWVsc2UgaWYoYT50aGlzX3Mpe3RoaXNfcz1hfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybWluZlwiXG59KVxuXG5leHBvcnRzLm5vcm0xID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6M31dLCBib2R5OiBcInRoaXNfcys9YTwwPy1hOmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0xXCJcbn0pXG5cbmV4cG9ydHMuc3VwID0gY29tcGlsZSh7XG4gIGFyZ3M6IFsgXCJhcnJheVwiIF0sXG4gIHByZTpcbiAgIHsgYm9keTogXCJ0aGlzX2g9LUluZmluaXR5XCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgYm9keTpcbiAgIHsgYm9keTogXCJpZihfaW5saW5lXzFfYXJnMF8+dGhpc19oKXRoaXNfaD1faW5saW5lXzFfYXJnMF9cIixcbiAgICAgYXJnczogW3tcIm5hbWVcIjpcIl9pbmxpbmVfMV9hcmcwX1wiLFwibHZhbHVlXCI6ZmFsc2UsXCJydmFsdWVcIjp0cnVlLFwiY291bnRcIjoyfSBdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgcG9zdDpcbiAgIHsgYm9keTogXCJyZXR1cm4gdGhpc19oXCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfVxuIH0pXG5cbmV4cG9ydHMuaW5mID0gY29tcGlsZSh7XG4gIGFyZ3M6IFsgXCJhcnJheVwiIF0sXG4gIHByZTpcbiAgIHsgYm9keTogXCJ0aGlzX2g9SW5maW5pdHlcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBib2R5OlxuICAgeyBib2R5OiBcImlmKF9pbmxpbmVfMV9hcmcwXzx0aGlzX2gpdGhpc19oPV9pbmxpbmVfMV9hcmcwX1wiLFxuICAgICBhcmdzOiBbe1wibmFtZVwiOlwiX2lubGluZV8xX2FyZzBfXCIsXCJsdmFsdWVcIjpmYWxzZSxcInJ2YWx1ZVwiOnRydWUsXCJjb3VudFwiOjJ9IF0sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBwb3N0OlxuICAgeyBib2R5OiBcInJldHVybiB0aGlzX2hcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9XG4gfSlcblxuZXhwb3J0cy5hcmdtaW4gPSBjb21waWxlKHtcbiAgYXJnczpbXCJpbmRleFwiLFwiYXJyYXlcIixcInNoYXBlXCJdLFxuICBwcmU6e1xuICAgIGJvZHk6XCJ7dGhpc192PUluZmluaXR5O3RoaXNfaT1faW5saW5lXzBfYXJnMl8uc2xpY2UoMCl9XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcyX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoxfVxuICAgICAgXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W119LFxuICBib2R5OntcbiAgICBib2R5Olwie2lmKF9pbmxpbmVfMV9hcmcxXzx0aGlzX3Ype3RoaXNfdj1faW5saW5lXzFfYXJnMV87Zm9yKHZhciBfaW5saW5lXzFfaz0wO19pbmxpbmVfMV9rPF9pbmxpbmVfMV9hcmcwXy5sZW5ndGg7KytfaW5saW5lXzFfayl7dGhpc19pW19pbmxpbmVfMV9rXT1faW5saW5lXzFfYXJnMF9bX2lubGluZV8xX2tdfX19XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9XSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W1wiX2lubGluZV8xX2tcIl19LFxuICBwb3N0OntcbiAgICBib2R5Olwie3JldHVybiB0aGlzX2l9XCIsXG4gICAgYXJnczpbXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIl0sXG4gICAgbG9jYWxWYXJzOltdfVxufSlcblxuZXhwb3J0cy5hcmdtYXggPSBjb21waWxlKHtcbiAgYXJnczpbXCJpbmRleFwiLFwiYXJyYXlcIixcInNoYXBlXCJdLFxuICBwcmU6e1xuICAgIGJvZHk6XCJ7dGhpc192PS1JbmZpbml0eTt0aGlzX2k9X2lubGluZV8wX2FyZzJfLnNsaWNlKDApfVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMl9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6MX1cbiAgICAgIF0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltdfSxcbiAgYm9keTp7XG4gICAgYm9keTpcIntpZihfaW5saW5lXzFfYXJnMV8+dGhpc192KXt0aGlzX3Y9X2lubGluZV8xX2FyZzFfO2Zvcih2YXIgX2lubGluZV8xX2s9MDtfaW5saW5lXzFfazxfaW5saW5lXzFfYXJnMF8ubGVuZ3RoOysrX2lubGluZV8xX2spe3RoaXNfaVtfaW5saW5lXzFfa109X2lubGluZV8xX2FyZzBfW19pbmxpbmVfMV9rXX19fVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfV0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltcIl9pbmxpbmVfMV9rXCJdfSxcbiAgcG9zdDp7XG4gICAgYm9keTpcIntyZXR1cm4gdGhpc19pfVwiLFxuICAgIGFyZ3M6W10sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCJdLFxuICAgIGxvY2FsVmFyczpbXX1cbn0pICBcblxuZXhwb3J0cy5yYW5kb20gPSBtYWtlT3Aoe1xuICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLnJhbmRvbVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICBib2R5OiB7YXJnczogW1wiYVwiXSwgYm9keTpcImE9dGhpc19mKClcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgZnVuY05hbWU6IFwicmFuZG9tXCJcbn0pXG5cbmV4cG9ydHMuYXNzaWduID0gbWFrZU9wKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSwgYm9keTpcImE9YlwifSxcbiAgZnVuY05hbWU6IFwiYXNzaWduXCIgfSlcblxuZXhwb3J0cy5hc3NpZ25zID0gbWFrZU9wKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sIGJvZHk6XCJhPWJcIn0sXG4gIGZ1bmNOYW1lOiBcImFzc2lnbnNcIiB9KVxuXG5cbmV4cG9ydHMuZXF1YWxzID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcInhcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX0sXG4gICAgICAgICAgICAgICB7bmFtZTpcInlcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBcbiAgICAgICAgYm9keTogXCJpZih4IT09eSl7cmV0dXJuIGZhbHNlfVwiLCBcbiAgICAgICAgbG9jYWxWYXJzOiBbXSwgXG4gICAgICAgIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIHRydWVcIn0sXG4gIGZ1bmNOYW1lOiBcImVxdWFsc1wiXG59KVxuXG5cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjcmVhdGVUaHVuayA9IHJlcXVpcmUoXCIuL2xpYi90aHVuay5qc1wiKVxuXG5mdW5jdGlvbiBQcm9jZWR1cmUoKSB7XG4gIHRoaXMuYXJnVHlwZXMgPSBbXVxuICB0aGlzLnNoaW1BcmdzID0gW11cbiAgdGhpcy5hcnJheUFyZ3MgPSBbXVxuICB0aGlzLmFycmF5QmxvY2tJbmRpY2VzID0gW11cbiAgdGhpcy5zY2FsYXJBcmdzID0gW11cbiAgdGhpcy5vZmZzZXRBcmdzID0gW11cbiAgdGhpcy5vZmZzZXRBcmdJbmRleCA9IFtdXG4gIHRoaXMuaW5kZXhBcmdzID0gW11cbiAgdGhpcy5zaGFwZUFyZ3MgPSBbXVxuICB0aGlzLmZ1bmNOYW1lID0gXCJcIlxuICB0aGlzLnByZSA9IG51bGxcbiAgdGhpcy5ib2R5ID0gbnVsbFxuICB0aGlzLnBvc3QgPSBudWxsXG4gIHRoaXMuZGVidWcgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiBjb21waWxlQ3dpc2UodXNlcl9hcmdzKSB7XG4gIC8vQ3JlYXRlIHByb2NlZHVyZVxuICB2YXIgcHJvYyA9IG5ldyBQcm9jZWR1cmUoKVxuICBcbiAgLy9QYXJzZSBibG9ja3NcbiAgcHJvYy5wcmUgICAgPSB1c2VyX2FyZ3MucHJlXG4gIHByb2MuYm9keSAgID0gdXNlcl9hcmdzLmJvZHlcbiAgcHJvYy5wb3N0ICAgPSB1c2VyX2FyZ3MucG9zdFxuXG4gIC8vUGFyc2UgYXJndW1lbnRzXG4gIHZhciBwcm9jX2FyZ3MgPSB1c2VyX2FyZ3MuYXJncy5zbGljZSgwKVxuICBwcm9jLmFyZ1R5cGVzID0gcHJvY19hcmdzXG4gIGZvcih2YXIgaT0wOyBpPHByb2NfYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhcmdfdHlwZSA9IHByb2NfYXJnc1tpXVxuICAgIGlmKGFyZ190eXBlID09PSBcImFycmF5XCIgfHwgKHR5cGVvZiBhcmdfdHlwZSA9PT0gXCJvYmplY3RcIiAmJiBhcmdfdHlwZS5ibG9ja0luZGljZXMpKSB7XG4gICAgICBwcm9jLmFyZ1R5cGVzW2ldID0gXCJhcnJheVwiXG4gICAgICBwcm9jLmFycmF5QXJncy5wdXNoKGkpXG4gICAgICBwcm9jLmFycmF5QmxvY2tJbmRpY2VzLnB1c2goYXJnX3R5cGUuYmxvY2tJbmRpY2VzID8gYXJnX3R5cGUuYmxvY2tJbmRpY2VzIDogMClcbiAgICAgIHByb2Muc2hpbUFyZ3MucHVzaChcImFycmF5XCIgKyBpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0uY291bnQ+MCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgYXJnc1wiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MucG9zdC5hcmdzLmxlbmd0aCAmJiBwcm9jLnBvc3QuYXJnc1tpXS5jb3VudD4wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgYXJnc1wiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJzY2FsYXJcIikge1xuICAgICAgcHJvYy5zY2FsYXJBcmdzLnB1c2goaSlcbiAgICAgIHByb2Muc2hpbUFyZ3MucHVzaChcInNjYWxhclwiICsgaSlcbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwiaW5kZXhcIikge1xuICAgICAgcHJvYy5pbmRleEFyZ3MucHVzaChpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0uY291bnQgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBpbmRleFwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MuYm9keS5hcmdzLmxlbmd0aCAmJiBwcm9jLmJvZHkuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IGJvZHkoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmNvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcInNoYXBlXCIpIHtcbiAgICAgIHByb2Muc2hhcGVBcmdzLnB1c2goaSlcbiAgICAgIGlmKGkgPCBwcm9jLnByZS5hcmdzLmxlbmd0aCAmJiBwcm9jLnByZS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MuYm9keS5hcmdzLmxlbmd0aCAmJiBwcm9jLmJvZHkuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IGJvZHkoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodHlwZW9mIGFyZ190eXBlID09PSBcIm9iamVjdFwiICYmIGFyZ190eXBlLm9mZnNldCkge1xuICAgICAgcHJvYy5hcmdUeXBlc1tpXSA9IFwib2Zmc2V0XCJcbiAgICAgIHByb2Mub2Zmc2V0QXJncy5wdXNoKHsgYXJyYXk6IGFyZ190eXBlLmFycmF5LCBvZmZzZXQ6YXJnX3R5cGUub2Zmc2V0IH0pXG4gICAgICBwcm9jLm9mZnNldEFyZ0luZGV4LnB1c2goaSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFVua25vd24gYXJndW1lbnQgdHlwZSBcIiArIHByb2NfYXJnc1tpXSlcbiAgICB9XG4gIH1cbiAgXG4gIC8vTWFrZSBzdXJlIGF0IGxlYXN0IG9uZSBhcnJheSBhcmd1bWVudCB3YXMgc3BlY2lmaWVkXG4gIGlmKHByb2MuYXJyYXlBcmdzLmxlbmd0aCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IE5vIGFycmF5IGFyZ3VtZW50cyBzcGVjaWZpZWRcIilcbiAgfVxuICBcbiAgLy9NYWtlIHN1cmUgYXJndW1lbnRzIGFyZSBjb3JyZWN0XG4gIGlmKHByb2MucHJlLmFyZ3MubGVuZ3RoID4gcHJvY19hcmdzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBUb28gbWFueSBhcmd1bWVudHMgaW4gcHJlKCkgYmxvY2tcIilcbiAgfVxuICBpZihwcm9jLmJvZHkuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBib2R5KCkgYmxvY2tcIilcbiAgfVxuICBpZihwcm9jLnBvc3QuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBwb3N0KCkgYmxvY2tcIilcbiAgfVxuXG4gIC8vQ2hlY2sgZGVidWcgZmxhZ1xuICBwcm9jLmRlYnVnID0gISF1c2VyX2FyZ3MucHJpbnRDb2RlIHx8ICEhdXNlcl9hcmdzLmRlYnVnXG4gIFxuICAvL1JldHJpZXZlIG5hbWVcbiAgcHJvYy5mdW5jTmFtZSA9IHVzZXJfYXJncy5mdW5jTmFtZSB8fCBcImN3aXNlXCJcbiAgXG4gIC8vUmVhZCBpbiBibG9jayBzaXplXG4gIHByb2MuYmxvY2tTaXplID0gdXNlcl9hcmdzLmJsb2NrU2l6ZSB8fCA2NFxuXG4gIHJldHVybiBjcmVhdGVUaHVuayhwcm9jKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVDd2lzZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHVuaXEgPSByZXF1aXJlKFwidW5pcVwiKVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB2ZXJ5IHNpbXBsZSBsb29wcyBhbmFsb2dvdXMgdG8gaG93IHlvdSB0eXBpY2FsbHkgdHJhdmVyc2UgYXJyYXlzICh0aGUgb3V0ZXJtb3N0IGxvb3AgY29ycmVzcG9uZHMgdG8gdGhlIHNsb3dlc3QgY2hhbmdpbmcgaW5kZXgsIHRoZSBpbm5lcm1vc3QgbG9vcCB0byB0aGUgZmFzdGVzdCBjaGFuZ2luZyBpbmRleClcbi8vIFRPRE86IElmIHR3byBhcnJheXMgaGF2ZSB0aGUgc2FtZSBzdHJpZGVzIChhbmQgb2Zmc2V0cykgdGhlcmUgaXMgcG90ZW50aWFsIGZvciBkZWNyZWFzaW5nIHRoZSBudW1iZXIgb2YgXCJwb2ludGVyc1wiIGFuZCByZWxhdGVkIHZhcmlhYmxlcy4gVGhlIGRyYXdiYWNrIGlzIHRoYXQgdGhlIHR5cGUgc2lnbmF0dXJlIHdvdWxkIGJlY29tZSBtb3JlIHNwZWNpZmljIGFuZCB0aGF0IHRoZXJlIHdvdWxkIHRodXMgYmUgbGVzcyBwb3RlbnRpYWwgZm9yIGNhY2hpbmcsIGJ1dCBpdCBtaWdodCBzdGlsbCBiZSB3b3J0aCBpdCwgZXNwZWNpYWxseSB3aGVuIGRlYWxpbmcgd2l0aCBsYXJnZSBudW1iZXJzIG9mIGFyZ3VtZW50cy5cbmZ1bmN0aW9uIGlubmVyRmlsbChvcmRlciwgcHJvYywgYm9keSkge1xuICB2YXIgZGltZW5zaW9uID0gb3JkZXIubGVuZ3RoXG4gICAgLCBuYXJncyA9IHByb2MuYXJyYXlBcmdzLmxlbmd0aFxuICAgICwgaGFzX2luZGV4ID0gcHJvYy5pbmRleEFyZ3MubGVuZ3RoPjBcbiAgICAsIGNvZGUgPSBbXVxuICAgICwgdmFycyA9IFtdXG4gICAgLCBpZHg9MCwgcGlkeD0wLCBpLCBqXG4gIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHsgLy8gSXRlcmF0aW9uIHZhcmlhYmxlc1xuICAgIHZhcnMucHVzaChbXCJpXCIsaSxcIj0wXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgLy9Db21wdXRlIHNjYW4gZGVsdGFzXG4gIGZvcihqPTA7IGo8bmFyZ3M7ICsraikge1xuICAgIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIHBpZHggPSBpZHhcbiAgICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgICBpZihpID09PSAwKSB7IC8vIFRoZSBpbm5lcm1vc3QvZmFzdGVzdCBkaW1lbnNpb24ncyBkZWx0YSBpcyBzaW1wbHkgaXRzIHN0cmlkZVxuICAgICAgICB2YXJzLnB1c2goW1wiZFwiLGosXCJzXCIsaSxcIj10XCIsaixcInBcIixpZHhdLmpvaW4oXCJcIikpXG4gICAgICB9IGVsc2UgeyAvLyBGb3Igb3RoZXIgZGltZW5zaW9ucyB0aGUgZGVsdGEgaXMgYmFzaWNhbGx5IHRoZSBzdHJpZGUgbWludXMgc29tZXRoaW5nIHdoaWNoIGVzc2VudGlhbGx5IFwicmV3aW5kc1wiIHRoZSBwcmV2aW91cyAobW9yZSBpbm5lcikgZGltZW5zaW9uXG4gICAgICAgIHZhcnMucHVzaChbXCJkXCIsaixcInNcIixpLFwiPSh0XCIsaixcInBcIixpZHgsXCItc1wiLHBpZHgsXCIqdFwiLGosXCJwXCIscGlkeCxcIilcIl0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29kZS5wdXNoKFwidmFyIFwiICsgdmFycy5qb2luKFwiLFwiKSlcbiAgLy9TY2FuIGxvb3BcbiAgZm9yKGk9ZGltZW5zaW9uLTE7IGk+PTA7IC0taSkgeyAvLyBTdGFydCBhdCBsYXJnZXN0IHN0cmlkZSBhbmQgd29yayB5b3VyIHdheSBpbndhcmRzXG4gICAgaWR4ID0gb3JkZXJbaV1cbiAgICBjb2RlLnB1c2goW1wiZm9yKGlcIixpLFwiPTA7aVwiLGksXCI8c1wiLGlkeCxcIjsrK2lcIixpLFwiKXtcIl0uam9pbihcIlwiKSlcbiAgfVxuICAvL1B1c2ggYm9keSBvZiBpbm5lciBsb29wXG4gIGNvZGUucHVzaChib2R5KVxuICAvL0FkdmFuY2Ugc2NhbiBwb2ludGVyc1xuICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgcGlkeCA9IGlkeFxuICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgZm9yKGo9MDsgajxuYXJnczsgKytqKSB7XG4gICAgICBjb2RlLnB1c2goW1wicFwiLGosXCIrPWRcIixqLFwic1wiLGldLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGlmKGhhc19pbmRleCkge1xuICAgICAgaWYoaSA+IDApIHtcbiAgICAgICAgY29kZS5wdXNoKFtcImluZGV4W1wiLHBpZHgsXCJdLT1zXCIscGlkeF0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICAgIGNvZGUucHVzaChbXCIrK2luZGV4W1wiLGlkeCxcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFwifVwiKVxuICB9XG4gIHJldHVybiBjb2RlLmpvaW4oXCJcXG5cIilcbn1cblxuLy8gR2VuZXJhdGUgXCJvdXRlclwiIGxvb3BzIHRoYXQgbG9vcCBvdmVyIGJsb2NrcyBvZiBkYXRhLCBhcHBseWluZyBcImlubmVyXCIgbG9vcHMgdG8gdGhlIGJsb2NrcyBieSBtYW5pcHVsYXRpbmcgdGhlIGxvY2FsIHZhcmlhYmxlcyBpbiBzdWNoIGEgd2F5IHRoYXQgdGhlIGlubmVyIGxvb3Agb25seSBcInNlZXNcIiB0aGUgY3VycmVudCBibG9jay5cbi8vIFRPRE86IElmIHRoaXMgaXMgdXNlZCwgdGhlbiB0aGUgcHJldmlvdXMgZGVjbGFyYXRpb24gKGRvbmUgYnkgZ2VuZXJhdGVDd2lzZU9wKSBvZiBzKiBpcyBlc3NlbnRpYWxseSB1bm5lY2Vzc2FyeS5cbi8vICAgICAgIEkgYmVsaWV2ZSB0aGUgcyogYXJlIG5vdCB1c2VkIGVsc2V3aGVyZSAoaW4gcGFydGljdWxhciwgSSBkb24ndCB0aGluayB0aGV5J3JlIHVzZWQgaW4gdGhlIHByZS9wb3N0IHBhcnRzIGFuZCBcInNoYXBlXCIgaXMgZGVmaW5lZCBpbmRlcGVuZGVudGx5KSwgc28gaXQgd291bGQgYmUgcG9zc2libGUgdG8gbWFrZSBkZWZpbmluZyB0aGUgcyogZGVwZW5kZW50IG9uIHdoYXQgbG9vcCBtZXRob2QgaXMgYmVpbmcgdXNlZC5cbmZ1bmN0aW9uIG91dGVyRmlsbChtYXRjaGVkLCBvcmRlciwgcHJvYywgYm9keSkge1xuICB2YXIgZGltZW5zaW9uID0gb3JkZXIubGVuZ3RoXG4gICAgLCBuYXJncyA9IHByb2MuYXJyYXlBcmdzLmxlbmd0aFxuICAgICwgYmxvY2tTaXplID0gcHJvYy5ibG9ja1NpemVcbiAgICAsIGhhc19pbmRleCA9IHByb2MuaW5kZXhBcmdzLmxlbmd0aCA+IDBcbiAgICAsIGNvZGUgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxuYXJnczsgKytpKSB7XG4gICAgY29kZS5wdXNoKFtcInZhciBvZmZzZXRcIixpLFwiPXBcIixpXS5qb2luKFwiXCIpKVxuICB9XG4gIC8vR2VuZXJhdGUgbG9vcHMgZm9yIHVubWF0Y2hlZCBkaW1lbnNpb25zXG4gIC8vIFRoZSBvcmRlciBpbiB3aGljaCB0aGVzZSBkaW1lbnNpb25zIGFyZSB0cmF2ZXJzZWQgaXMgZmFpcmx5IGFyYml0cmFyeSAoZnJvbSBzbWFsbCBzdHJpZGUgdG8gbGFyZ2Ugc3RyaWRlLCBmb3IgdGhlIGZpcnN0IGFyZ3VtZW50KVxuICAvLyBUT0RPOiBJdCB3b3VsZCBiZSBuaWNlIGlmIHRoZSBvcmRlciBpbiB3aGljaCB0aGVzZSBsb29wcyBhcmUgcGxhY2VkIHdvdWxkIGFsc28gYmUgc29tZWhvdyBcIm9wdGltYWxcIiAoYXQgdGhlIHZlcnkgbGVhc3Qgd2Ugc2hvdWxkIGNoZWNrIHRoYXQgaXQgcmVhbGx5IGRvZXNuJ3QgaHVydCB1cyBpZiB0aGV5J3JlIG5vdCkuXG4gIGZvcih2YXIgaT1tYXRjaGVkOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFtcImZvcih2YXIgalwiK2krXCI9U1NbXCIsIG9yZGVyW2ldLCBcIl18MDtqXCIsIGksIFwiPjA7KXtcIl0uam9pbihcIlwiKSkgLy8gSXRlcmF0ZSBiYWNrIHRvIGZyb250XG4gICAgY29kZS5wdXNoKFtcImlmKGpcIixpLFwiPFwiLGJsb2NrU2l6ZSxcIil7XCJdLmpvaW4oXCJcIikpIC8vIEVpdGhlciBkZWNyZWFzZSBqIGJ5IGJsb2NrU2l6ZSAocyA9IGJsb2NrU2l6ZSksIG9yIHNldCBpdCB0byB6ZXJvIChhZnRlciBzZXR0aW5nIHMgPSBqKS5cbiAgICBjb2RlLnB1c2goW1wic1wiLG9yZGVyW2ldLFwiPWpcIixpXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJqXCIsaSxcIj0wXCJdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcIn1lbHNle3NcIixvcmRlcltpXSxcIj1cIixibG9ja1NpemVdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcImpcIixpLFwiLT1cIixibG9ja1NpemUsXCJ9XCJdLmpvaW4oXCJcIikpXG4gICAgaWYoaGFzX2luZGV4KSB7XG4gICAgICBjb2RlLnB1c2goW1wiaW5kZXhbXCIsb3JkZXJbaV0sXCJdPWpcIixpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgfVxuICBmb3IodmFyIGk9MDsgaTxuYXJnczsgKytpKSB7XG4gICAgdmFyIGluZGV4U3RyID0gW1wib2Zmc2V0XCIraV1cbiAgICBmb3IodmFyIGo9bWF0Y2hlZDsgajxkaW1lbnNpb247ICsraikge1xuICAgICAgaW5kZXhTdHIucHVzaChbXCJqXCIsaixcIip0XCIsaSxcInBcIixvcmRlcltqXV0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFtcInBcIixpLFwiPShcIixpbmRleFN0ci5qb2luKFwiK1wiKSxcIilcIl0uam9pbihcIlwiKSlcbiAgfVxuICBjb2RlLnB1c2goaW5uZXJGaWxsKG9yZGVyLCBwcm9jLCBib2R5KSlcbiAgZm9yKHZhciBpPW1hdGNoZWQ7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJ9XCIpXG4gIH1cbiAgcmV0dXJuIGNvZGUuam9pbihcIlxcblwiKVxufVxuXG4vL0NvdW50IHRoZSBudW1iZXIgb2YgY29tcGF0aWJsZSBpbm5lciBvcmRlcnNcbi8vIFRoaXMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbG9uZ2VzdCBjb21tb24gcHJlZml4IG9mIHRoZSBhcnJheXMgaW4gb3JkZXJzLlxuLy8gRWFjaCBhcnJheSBpbiBvcmRlcnMgbGlzdHMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGNvcnJlc3BvbmQgbmRhcnJheSBpbiBvcmRlciBvZiBpbmNyZWFzaW5nIHN0cmlkZS5cbi8vIFRoaXMgaXMgdGh1cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyB0aGF0IGNhbiBiZSBlZmZpY2llbnRseSB0cmF2ZXJzZWQgYnkgc2ltcGxlIG5lc3RlZCBsb29wcyBmb3IgYWxsIGFycmF5cy5cbmZ1bmN0aW9uIGNvdW50TWF0Y2hlcyhvcmRlcnMpIHtcbiAgdmFyIG1hdGNoZWQgPSAwLCBkaW1lbnNpb24gPSBvcmRlcnNbMF0ubGVuZ3RoXG4gIHdoaWxlKG1hdGNoZWQgPCBkaW1lbnNpb24pIHtcbiAgICBmb3IodmFyIGo9MTsgajxvcmRlcnMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmKG9yZGVyc1tqXVttYXRjaGVkXSAhPT0gb3JkZXJzWzBdW21hdGNoZWRdKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkXG4gICAgICB9XG4gICAgfVxuICAgICsrbWF0Y2hlZFxuICB9XG4gIHJldHVybiBtYXRjaGVkXG59XG5cbi8vUHJvY2Vzc2VzIGEgYmxvY2sgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBkYXRhIHR5cGVzXG4vLyBSZXBsYWNlcyB2YXJpYWJsZSBuYW1lcyBieSBkaWZmZXJlbnQgb25lcywgZWl0aGVyIFwibG9jYWxcIiBvbmVzICh0aGF0IGFyZSB0aGVuIGZlcnJpZWQgaW4gYW5kIG91dCBvZiB0aGUgZ2l2ZW4gYXJyYXkpIG9yIG9uZXMgbWF0Y2hpbmcgdGhlIGFyZ3VtZW50cyB0aGF0IHRoZSBmdW5jdGlvbiBwZXJmb3JtaW5nIHRoZSB1bHRpbWF0ZSBsb29wIHdpbGwgYWNjZXB0LlxuZnVuY3Rpb24gcHJvY2Vzc0Jsb2NrKGJsb2NrLCBwcm9jLCBkdHlwZXMpIHtcbiAgdmFyIGNvZGUgPSBibG9jay5ib2R5XG4gIHZhciBwcmUgPSBbXVxuICB2YXIgcG9zdCA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPGJsb2NrLmFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY2FyZyA9IGJsb2NrLmFyZ3NbaV1cbiAgICBpZihjYXJnLmNvdW50IDw9IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoY2FyZy5uYW1lLCBcImdcIilcbiAgICB2YXIgcHRyU3RyID0gXCJcIlxuICAgIHZhciBhcnJOdW0gPSBwcm9jLmFycmF5QXJncy5pbmRleE9mKGkpXG4gICAgc3dpdGNoKHByb2MuYXJnVHlwZXNbaV0pIHtcbiAgICAgIGNhc2UgXCJvZmZzZXRcIjpcbiAgICAgICAgdmFyIG9mZkFyZ0luZGV4ID0gcHJvYy5vZmZzZXRBcmdJbmRleC5pbmRleE9mKGkpXG4gICAgICAgIHZhciBvZmZBcmcgPSBwcm9jLm9mZnNldEFyZ3Nbb2ZmQXJnSW5kZXhdXG4gICAgICAgIGFyck51bSA9IG9mZkFyZy5hcnJheVxuICAgICAgICBwdHJTdHIgPSBcIitxXCIgKyBvZmZBcmdJbmRleCAvLyBBZGRzIG9mZnNldCB0byB0aGUgXCJwb2ludGVyXCIgaW4gdGhlIGFycmF5XG4gICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgcHRyU3RyID0gXCJwXCIgKyBhcnJOdW0gKyBwdHJTdHJcbiAgICAgICAgdmFyIGxvY2FsU3RyID0gXCJsXCIgKyBpXG4gICAgICAgIHZhciBhcnJTdHIgPSBcImFcIiArIGFyck51bVxuICAgICAgICBpZiAocHJvYy5hcnJheUJsb2NrSW5kaWNlc1thcnJOdW1dID09PSAwKSB7IC8vIEFyZ3VtZW50IHRvIGJvZHkgaXMganVzdCBhIHNpbmdsZSB2YWx1ZSBmcm9tIHRoaXMgYXJyYXlcbiAgICAgICAgICBpZihjYXJnLmNvdW50ID09PSAxKSB7IC8vIEFyZ3VtZW50L2FycmF5IHVzZWQgb25seSBvbmNlKD8pXG4gICAgICAgICAgICBpZihkdHlwZXNbYXJyTnVtXSA9PT0gXCJnZW5lcmljXCIpIHtcbiAgICAgICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpIC8vIElzIHRoaXMgbmVjZXNzYXJ5IGlmIHRoZSBhcmd1bWVudCBpcyBPTkxZIHVzZWQgYXMgYW4gbHZhbHVlPyAoa2VlcCBpbiBtaW5kIHRoYXQgd2UgY2FuIGhhdmUgYSArPSBzb21ldGhpbmcsIHNvIHdlIHdvdWxkIGFjdHVhbGx5IG5lZWQgdG8gY2hlY2sgY2FyZy5ydmFsdWUpXG4gICAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiLnNldChcIiwgcHRyU3RyLCBcIixcIiwgbG9jYWxTdHIsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgW2FyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYoZHR5cGVzW2Fyck51bV0gPT09IFwiZ2VuZXJpY1wiKSB7XG4gICAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpIC8vIFRPRE86IENvdWxkIHdlIG9wdGltaXplIGJ5IGNoZWNraW5nIGZvciBjYXJnLnJ2YWx1ZT9cbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiLnNldChcIiwgcHRyU3RyLCBcIixcIiwgbG9jYWxTdHIsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZS5wdXNoKFtcInZhciBcIiwgbG9jYWxTdHIsIFwiPVwiLCBhcnJTdHIsIFwiW1wiLCBwdHJTdHIsIFwiXVwiXS5qb2luKFwiXCIpKSAvLyBUT0RPOiBDb3VsZCB3ZSBvcHRpbWl6ZSBieSBjaGVja2luZyBmb3IgY2FyZy5ydmFsdWU/XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl09XCIsIGxvY2FsU3RyXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gQXJndW1lbnQgdG8gYm9keSBpcyBhIFwiYmxvY2tcIlxuICAgICAgICAgIHZhciByZVN0ckFyciA9IFtjYXJnLm5hbWVdLCBwdHJTdHJBcnIgPSBbcHRyU3RyXVxuICAgICAgICAgIGZvcih2YXIgaj0wOyBqPE1hdGguYWJzKHByb2MuYXJyYXlCbG9ja0luZGljZXNbYXJyTnVtXSk7IGorKykge1xuICAgICAgICAgICAgcmVTdHJBcnIucHVzaChcIlxcXFxzKlxcXFxbKFteXFxcXF1dKylcXFxcXVwiKVxuICAgICAgICAgICAgcHRyU3RyQXJyLnB1c2goXCIkXCIgKyAoaisxKSArIFwiKnRcIiArIGFyck51bSArIFwiYlwiICsgaikgLy8gTWF0Y2hlZCBpbmRleCB0aW1lcyBzdHJpZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgcmUgPSBuZXcgUmVnRXhwKHJlU3RyQXJyLmpvaW4oXCJcIiksIFwiZ1wiKVxuICAgICAgICAgIHB0clN0ciA9IHB0clN0ckFyci5qb2luKFwiK1wiKVxuICAgICAgICAgIGlmKGR0eXBlc1thcnJOdW1dID09PSBcImdlbmVyaWNcIikge1xuICAgICAgICAgICAgLyppZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpIC8vIElzIHRoaXMgbmVjZXNzYXJ5IGlmIHRoZSBhcmd1bWVudCBpcyBPTkxZIHVzZWQgYXMgYW4gbHZhbHVlPyAoa2VlcCBpbiBtaW5kIHRoYXQgd2UgY2FuIGhhdmUgYSArPSBzb21ldGhpbmcsIHNvIHdlIHdvdWxkIGFjdHVhbGx5IG5lZWQgdG8gY2hlY2sgY2FyZy5ydmFsdWUpXG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCIuc2V0KFwiLCBwdHJTdHIsIFwiLFwiLCBsb2NhbFN0cixcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFthcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IEdlbmVyaWMgYXJyYXlzIG5vdCBzdXBwb3J0ZWQgaW4gY29tYmluYXRpb24gd2l0aCBibG9ja3MhXCIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3QgcHJvZHVjZSBhbnkgbG9jYWwgdmFyaWFibGVzLCBldmVuIGlmIHZhcmlhYmxlcyBhcmUgdXNlZCBtdWx0aXBsZSB0aW1lcy4gSXQgd291bGQgYmUgcG9zc2libGUgdG8gZG8gc28sIGJ1dCBpdCB3b3VsZCBjb21wbGljYXRlIHRoaW5ncyBxdWl0ZSBhIGJpdC5cbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFthcnJTdHIsIFwiW1wiLCBwdHJTdHIsIFwiXVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzY2FsYXJcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJZXCIgKyBwcm9jLnNjYWxhckFyZ3MuaW5kZXhPZihpKSlcbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiaW5kZXhcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJpbmRleFwiKVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzaGFwZVwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcInNoYXBlXCIpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3ByZS5qb2luKFwiXFxuXCIpLCBjb2RlLCBwb3N0LmpvaW4oXCJcXG5cIildLmpvaW4oXCJcXG5cIikudHJpbSgpXG59XG5cbmZ1bmN0aW9uIHR5cGVTdW1tYXJ5KGR0eXBlcykge1xuICB2YXIgc3VtbWFyeSA9IG5ldyBBcnJheShkdHlwZXMubGVuZ3RoKVxuICB2YXIgYWxsRXF1YWwgPSB0cnVlXG4gIGZvcih2YXIgaT0wOyBpPGR0eXBlcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciB0ID0gZHR5cGVzW2ldXG4gICAgdmFyIGRpZ2l0cyA9IHQubWF0Y2goL1xcZCsvKVxuICAgIGlmKCFkaWdpdHMpIHtcbiAgICAgIGRpZ2l0cyA9IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgZGlnaXRzID0gZGlnaXRzWzBdXG4gICAgfVxuICAgIGlmKHQuY2hhckF0KDApID09PSAwKSB7XG4gICAgICBzdW1tYXJ5W2ldID0gXCJ1XCIgKyB0LmNoYXJBdCgxKSArIGRpZ2l0c1xuICAgIH0gZWxzZSB7XG4gICAgICBzdW1tYXJ5W2ldID0gdC5jaGFyQXQoMCkgKyBkaWdpdHNcbiAgICB9XG4gICAgaWYoaSA+IDApIHtcbiAgICAgIGFsbEVxdWFsID0gYWxsRXF1YWwgJiYgc3VtbWFyeVtpXSA9PT0gc3VtbWFyeVtpLTFdXG4gICAgfVxuICB9XG4gIGlmKGFsbEVxdWFsKSB7XG4gICAgcmV0dXJuIHN1bW1hcnlbMF1cbiAgfVxuICByZXR1cm4gc3VtbWFyeS5qb2luKFwiXCIpXG59XG5cbi8vR2VuZXJhdGVzIGEgY3dpc2Ugb3BlcmF0b3JcbmZ1bmN0aW9uIGdlbmVyYXRlQ1dpc2VPcChwcm9jLCB0eXBlc2lnKSB7XG5cbiAgLy9Db21wdXRlIGRpbWVuc2lvblxuICAvLyBBcnJheXMgZ2V0IHB1dCBmaXJzdCBpbiB0eXBlc2lnLCBhbmQgdGhlcmUgYXJlIHR3byBlbnRyaWVzIHBlciBhcnJheSAoZHR5cGUgYW5kIG9yZGVyKSwgc28gdGhpcyBnZXRzIHRoZSBudW1iZXIgb2YgZGltZW5zaW9ucyBpbiB0aGUgZmlyc3QgYXJyYXkgYXJnLlxuICB2YXIgZGltZW5zaW9uID0gKHR5cGVzaWdbMV0ubGVuZ3RoIC0gTWF0aC5hYnMocHJvYy5hcnJheUJsb2NrSW5kaWNlc1swXSkpfDBcbiAgdmFyIG9yZGVycyA9IG5ldyBBcnJheShwcm9jLmFycmF5QXJncy5sZW5ndGgpXG4gIHZhciBkdHlwZXMgPSBuZXcgQXJyYXkocHJvYy5hcnJheUFyZ3MubGVuZ3RoKVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIGR0eXBlc1tpXSA9IHR5cGVzaWdbMippXVxuICAgIG9yZGVyc1tpXSA9IHR5cGVzaWdbMippKzFdXG4gIH1cbiAgXG4gIC8vRGV0ZXJtaW5lIHdoZXJlIGJsb2NrIGFuZCBsb29wIGluZGljZXMgc3RhcnQgYW5kIGVuZFxuICB2YXIgYmxvY2tCZWdpbiA9IFtdLCBibG9ja0VuZCA9IFtdIC8vIFRoZXNlIGluZGljZXMgYXJlIGV4cG9zZWQgYXMgYmxvY2tzXG4gIHZhciBsb29wQmVnaW4gPSBbXSwgbG9vcEVuZCA9IFtdIC8vIFRoZXNlIGluZGljZXMgYXJlIGl0ZXJhdGVkIG92ZXJcbiAgdmFyIGxvb3BPcmRlcnMgPSBbXSAvLyBvcmRlcnMgcmVzdHJpY3RlZCB0byB0aGUgbG9vcCBpbmRpY2VzXG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHByb2MuYXJyYXlCbG9ja0luZGljZXNbaV08MCkge1xuICAgICAgbG9vcEJlZ2luLnB1c2goMClcbiAgICAgIGxvb3BFbmQucHVzaChkaW1lbnNpb24pXG4gICAgICBibG9ja0JlZ2luLnB1c2goZGltZW5zaW9uKVxuICAgICAgYmxvY2tFbmQucHVzaChkaW1lbnNpb24rcHJvYy5hcnJheUJsb2NrSW5kaWNlc1tpXSlcbiAgICB9IGVsc2Uge1xuICAgICAgbG9vcEJlZ2luLnB1c2gocHJvYy5hcnJheUJsb2NrSW5kaWNlc1tpXSkgLy8gTm9uLW5lZ2F0aXZlXG4gICAgICBsb29wRW5kLnB1c2gocHJvYy5hcnJheUJsb2NrSW5kaWNlc1tpXStkaW1lbnNpb24pXG4gICAgICBibG9ja0JlZ2luLnB1c2goMClcbiAgICAgIGJsb2NrRW5kLnB1c2gocHJvYy5hcnJheUJsb2NrSW5kaWNlc1tpXSlcbiAgICB9XG4gICAgdmFyIG5ld09yZGVyID0gW11cbiAgICBmb3IodmFyIGo9MDsgajxvcmRlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChsb29wQmVnaW5baV08PW9yZGVyc1tpXVtqXSAmJiBvcmRlcnNbaV1bal08bG9vcEVuZFtpXSkge1xuICAgICAgICBuZXdPcmRlci5wdXNoKG9yZGVyc1tpXVtqXS1sb29wQmVnaW5baV0pIC8vIElmIHRoaXMgaXMgYSBsb29wIGluZGV4LCBwdXQgaXQgaW4gbmV3T3JkZXIsIHN1YnRyYWN0aW5nIGxvb3BCZWdpbiwgdG8gbWFrZSBzdXJlIHRoYXQgYWxsIGxvb3BPcmRlcnMgYXJlIHVzaW5nIGEgY29tbW9uIHNldCBvZiBpbmRpY2VzLlxuICAgICAgfVxuICAgIH1cbiAgICBsb29wT3JkZXJzLnB1c2gobmV3T3JkZXIpXG4gIH1cblxuICAvL0ZpcnN0IGNyZWF0ZSBhcmd1bWVudHMgZm9yIHByb2NlZHVyZVxuICB2YXIgYXJnbGlzdCA9IFtcIlNTXCJdIC8vIFNTIGlzIHRoZSBvdmVyYWxsIHNoYXBlIG92ZXIgd2hpY2ggd2UgaXRlcmF0ZVxuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiXVxuICB2YXIgdmFycyA9IFtdXG4gIFxuICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikge1xuICAgIHZhcnMucHVzaChbXCJzXCIsIGosIFwiPVNTW1wiLCBqLCBcIl1cIl0uam9pbihcIlwiKSkgLy8gVGhlIGxpbWl0cyBmb3IgZWFjaCBkaW1lbnNpb24uXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5hcnJheUFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBhcmdsaXN0LnB1c2goXCJhXCIraSkgLy8gQWN0dWFsIGRhdGEgYXJyYXlcbiAgICBhcmdsaXN0LnB1c2goXCJ0XCIraSkgLy8gU3RyaWRlc1xuICAgIGFyZ2xpc3QucHVzaChcInBcIitpKSAvLyBPZmZzZXQgaW4gdGhlIGFycmF5IGF0IHdoaWNoIHRoZSBkYXRhIHN0YXJ0cyAoYWxzbyB1c2VkIGZvciBpdGVyYXRpbmcgb3ZlciB0aGUgZGF0YSlcbiAgICBcbiAgICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikgeyAvLyBVbnBhY2sgdGhlIHN0cmlkZXMgaW50byB2YXJzIGZvciBsb29waW5nXG4gICAgICB2YXJzLnB1c2goW1widFwiLGksXCJwXCIsaixcIj10XCIsaSxcIltcIixsb29wQmVnaW5baV0raixcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgXG4gICAgZm9yKHZhciBqPTA7IGo8TWF0aC5hYnMocHJvYy5hcnJheUJsb2NrSW5kaWNlc1tpXSk7ICsraikgeyAvLyBVbnBhY2sgdGhlIHN0cmlkZXMgaW50byB2YXJzIGZvciBibG9jayBpdGVyYXRpb25cbiAgICAgIHZhcnMucHVzaChbXCJ0XCIsaSxcImJcIixqLFwiPXRcIixpLFwiW1wiLGJsb2NrQmVnaW5baV0raixcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5zY2FsYXJBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJnbGlzdC5wdXNoKFwiWVwiICsgaSlcbiAgfVxuICBpZihwcm9jLnNoYXBlQXJncy5sZW5ndGggPiAwKSB7XG4gICAgdmFycy5wdXNoKFwic2hhcGU9U1Muc2xpY2UoMClcIikgLy8gTWFrZXMgdGhlIHNoYXBlIG92ZXIgd2hpY2ggd2UgaXRlcmF0ZSBhdmFpbGFibGUgdG8gdGhlIHVzZXIgZGVmaW5lZCBmdW5jdGlvbnMgKHNvIHlvdSBjYW4gdXNlIHdpZHRoL2hlaWdodCBmb3IgZXhhbXBsZSlcbiAgfVxuICBpZihwcm9jLmluZGV4QXJncy5sZW5ndGggPiAwKSB7XG4gICAgLy8gUHJlcGFyZSBhbiBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSAobG9naWNhbCkgaW5kaWNlcywgaW5pdGlhbGl6ZWQgdG8gZGltZW5zaW9uIHplcm9lcy5cbiAgICB2YXIgemVyb3MgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICB6ZXJvc1tpXSA9IFwiMFwiXG4gICAgfVxuICAgIHZhcnMucHVzaChbXCJpbmRleD1bXCIsIHplcm9zLmpvaW4oXCIsXCIpLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgfVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLm9mZnNldEFyZ3MubGVuZ3RoOyArK2kpIHsgLy8gT2Zmc2V0IGFyZ3VtZW50cyB1c2VkIGZvciBzdGVuY2lsIG9wZXJhdGlvbnNcbiAgICB2YXIgb2ZmX2FyZyA9IHByb2Mub2Zmc2V0QXJnc1tpXVxuICAgIHZhciBpbml0X3N0cmluZyA9IFtdXG4gICAgZm9yKHZhciBqPTA7IGo8b2ZmX2FyZy5vZmZzZXQubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmKG9mZl9hcmcub2Zmc2V0W2pdID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYob2ZmX2FyZy5vZmZzZXRbal0gPT09IDEpIHtcbiAgICAgICAgaW5pdF9zdHJpbmcucHVzaChbXCJ0XCIsIG9mZl9hcmcuYXJyYXksIFwicFwiLCBqXS5qb2luKFwiXCIpKSAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdF9zdHJpbmcucHVzaChbb2ZmX2FyZy5vZmZzZXRbal0sIFwiKnRcIiwgb2ZmX2FyZy5hcnJheSwgXCJwXCIsIGpdLmpvaW4oXCJcIikpXG4gICAgICB9XG4gICAgfVxuICAgIGlmKGluaXRfc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFycy5wdXNoKFwicVwiICsgaSArIFwiPTBcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFycy5wdXNoKFtcInFcIiwgaSwgXCI9XCIsIGluaXRfc3RyaW5nLmpvaW4oXCIrXCIpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgfVxuXG4gIC8vUHJlcGFyZSB0aGlzIHZhcmlhYmxlc1xuICB2YXIgdGhpc1ZhcnMgPSB1bmlxKFtdLmNvbmNhdChwcm9jLnByZS50aGlzVmFycylcbiAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHByb2MuYm9keS50aGlzVmFycylcbiAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHByb2MucG9zdC50aGlzVmFycykpXG4gIHZhcnMgPSB2YXJzLmNvbmNhdCh0aGlzVmFycylcbiAgY29kZS5wdXNoKFwidmFyIFwiICsgdmFycy5qb2luKFwiLFwiKSlcbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5hcnJheUFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJwXCIraStcInw9MFwiKVxuICB9XG4gIFxuICAvL0lubGluZSBwcmVsdWRlXG4gIGlmKHByb2MucHJlLmJvZHkubGVuZ3RoID4gMykge1xuICAgIGNvZGUucHVzaChwcm9jZXNzQmxvY2socHJvYy5wcmUsIHByb2MsIGR0eXBlcykpXG4gIH1cblxuICAvL1Byb2Nlc3MgYm9keVxuICB2YXIgYm9keSA9IHByb2Nlc3NCbG9jayhwcm9jLmJvZHksIHByb2MsIGR0eXBlcylcbiAgdmFyIG1hdGNoZWQgPSBjb3VudE1hdGNoZXMobG9vcE9yZGVycylcbiAgaWYobWF0Y2hlZCA8IGRpbWVuc2lvbikge1xuICAgIGNvZGUucHVzaChvdXRlckZpbGwobWF0Y2hlZCwgbG9vcE9yZGVyc1swXSwgcHJvYywgYm9keSkpIC8vIFRPRE86IFJhdGhlciB0aGFuIHBhc3NpbmcgbG9vcE9yZGVyc1swXSwgaXQgbWlnaHQgYmUgaW50ZXJlc3RpbmcgdG8gbG9vayBhdCBwYXNzaW5nIGFuIG9yZGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgbWFqb3JpdHkgb2YgdGhlIGFyZ3VtZW50cyBmb3IgZXhhbXBsZS5cbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goaW5uZXJGaWxsKGxvb3BPcmRlcnNbMF0sIHByb2MsIGJvZHkpKVxuICB9XG5cbiAgLy9JbmxpbmUgZXBpbG9nXG4gIGlmKHByb2MucG9zdC5ib2R5Lmxlbmd0aCA+IDMpIHtcbiAgICBjb2RlLnB1c2gocHJvY2Vzc0Jsb2NrKHByb2MucG9zdCwgcHJvYywgZHR5cGVzKSlcbiAgfVxuICBcbiAgaWYocHJvYy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS1HZW5lcmF0ZWQgY3dpc2Ugcm91dGluZSBmb3IgXCIsIHR5cGVzaWcsIFwiOlxcblwiICsgY29kZS5qb2luKFwiXFxuXCIpICsgXCJcXG4tLS0tLS0tLS0tXCIpXG4gIH1cbiAgXG4gIHZhciBsb29wTmFtZSA9IFsocHJvYy5mdW5jTmFtZXx8XCJ1bm5hbWVkXCIpLCBcIl9jd2lzZV9sb29wX1wiLCBvcmRlcnNbMF0uam9pbihcInNcIiksXCJtXCIsbWF0Y2hlZCx0eXBlU3VtbWFyeShkdHlwZXMpXS5qb2luKFwiXCIpXG4gIHZhciBmID0gbmV3IEZ1bmN0aW9uKFtcImZ1bmN0aW9uIFwiLGxvb3BOYW1lLFwiKFwiLCBhcmdsaXN0LmpvaW4oXCIsXCIpLFwiKXtcIiwgY29kZS5qb2luKFwiXFxuXCIpLFwifSByZXR1cm4gXCIsIGxvb3BOYW1lXS5qb2luKFwiXCIpKVxuICByZXR1cm4gZigpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlQ1dpc2VPcFxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCB3aGVuIGNvbnN0cnVjdGluZyBhIGN3aXNlIGZ1bmN0aW9uIG9iamVjdCwgYW5kIGRvZXMgdGhlIGZvbGxvd2luZzpcbi8vIEEgZnVuY3Rpb24gb2JqZWN0IGlzIGNvbnN0cnVjdGVkIHdoaWNoIGFjY2VwdHMgYXMgYXJndW1lbnQgYSBjb21waWxhdGlvbiBmdW5jdGlvbiBhbmQgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLlxuLy8gSXQgaXMgdGhpcyBvdGhlciBmdW5jdGlvbiB0aGF0IGlzIGV2ZW50dWFsbHkgcmV0dXJuZWQgYnkgY3JlYXRlVGh1bmssIGFuZCB0aGlzIGZ1bmN0aW9uIGlzIHRoZSBvbmUgdGhhdCBhY3R1YWxseVxuLy8gY2hlY2tzIHdoZXRoZXIgYSBjZXJ0YWluIHBhdHRlcm4gb2YgYXJndW1lbnRzIGhhcyBhbHJlYWR5IGJlZW4gdXNlZCBiZWZvcmUgYW5kIGNvbXBpbGVzIG5ldyBsb29wcyBhcyBuZWVkZWQuXG4vLyBUaGUgY29tcGlsYXRpb24gcGFzc2VkIHRvIHRoZSBmaXJzdCBmdW5jdGlvbiBvYmplY3QgaXMgdXNlZCBmb3IgY29tcGlsaW5nIG5ldyBmdW5jdGlvbnMuXG4vLyBPbmNlIHRoaXMgZnVuY3Rpb24gb2JqZWN0IGlzIGNyZWF0ZWQsIGl0IGlzIGNhbGxlZCB3aXRoIGNvbXBpbGUgYXMgYXJndW1lbnQsIHdoZXJlIHRoZSBmaXJzdCBhcmd1bWVudCBvZiBjb21waWxlXG4vLyBpcyBib3VuZCB0byBcInByb2NcIiAoZXNzZW50aWFsbHkgY29udGFpbmluZyBhIHByZXByb2Nlc3NlZCB2ZXJzaW9uIG9mIHRoZSB1c2VyIGFyZ3VtZW50cyB0byBjd2lzZSkuXG4vLyBTbyBjcmVhdGVUaHVuayByb3VnaGx5IHdvcmtzIGxpa2UgdGhpczpcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRodW5rKHByb2MpIHtcbi8vICAgdmFyIHRodW5rID0gZnVuY3Rpb24oY29tcGlsZUJvdW5kKSB7XG4vLyAgICAgdmFyIENBQ0hFRCA9IHt9XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5cyBhbmQgc2NhbGFycykge1xuLy8gICAgICAgaWYgKGR0eXBlIGFuZCBvcmRlciBvZiBhcnJheXMgaW4gQ0FDSEVEKSB7XG4vLyAgICAgICAgIHZhciBmdW5jID0gQ0FDSEVEW2R0eXBlIGFuZCBvcmRlciBvZiBhcnJheXNdXG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICB2YXIgZnVuYyA9IENBQ0hFRFtkdHlwZSBhbmQgb3JkZXIgb2YgYXJyYXlzXSA9IGNvbXBpbGVCb3VuZChkdHlwZSBhbmQgb3JkZXIgb2YgYXJyYXlzKVxuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIGZ1bmMoYXJyYXlzIGFuZCBzY2FsYXJzKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gdGh1bmsoY29tcGlsZS5iaW5kMShwcm9jKSlcbi8vIH1cblxudmFyIGNvbXBpbGUgPSByZXF1aXJlKFwiLi9jb21waWxlLmpzXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVRodW5rKHByb2MpIHtcbiAgdmFyIGNvZGUgPSBbXCIndXNlIHN0cmljdCdcIiwgXCJ2YXIgQ0FDSEVEPXt9XCJdXG4gIHZhciB2YXJzID0gW11cbiAgdmFyIHRodW5rTmFtZSA9IHByb2MuZnVuY05hbWUgKyBcIl9jd2lzZV90aHVua1wiXG4gIFxuICAvL0J1aWxkIHRodW5rXG4gIGNvZGUucHVzaChbXCJyZXR1cm4gZnVuY3Rpb24gXCIsIHRodW5rTmFtZSwgXCIoXCIsIHByb2Muc2hpbUFyZ3Muam9pbihcIixcIiksIFwiKXtcIl0uam9pbihcIlwiKSlcbiAgdmFyIHR5cGVzaWcgPSBbXVxuICB2YXIgc3RyaW5nX3R5cGVzaWcgPSBbXVxuICB2YXIgcHJvY19hcmdzID0gW1tcImFycmF5XCIscHJvYy5hcnJheUFyZ3NbMF0sXCIuc2hhcGUuc2xpY2UoXCIsIC8vIFNsaWNlIHNoYXBlIHNvIHRoYXQgd2Ugb25seSByZXRhaW4gdGhlIHNoYXBlIG92ZXIgd2hpY2ggd2UgaXRlcmF0ZSAod2hpY2ggZ2V0cyBwYXNzZWQgdG8gdGhlIGN3aXNlIG9wZXJhdG9yIGFzIFNTKS5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMCxwcm9jLmFycmF5QmxvY2tJbmRpY2VzW2ldKSxwcm9jLmFycmF5QmxvY2tJbmRpY2VzW2ldPDA/KFwiLFwiK3Byb2MuYXJyYXlCbG9ja0luZGljZXNbaV0rXCIpXCIpOlwiKVwiXS5qb2luKFwiXCIpXVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBqID0gcHJvYy5hcnJheUFyZ3NbaV1cbiAgICB2YXJzLnB1c2goW1widFwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5kdHlwZSxcIixcbiAgICAgICAgICAgICAgIFwiclwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5vcmRlclwiXS5qb2luKFwiXCIpKVxuICAgIHR5cGVzaWcucHVzaChcInRcIiArIGopXG4gICAgdHlwZXNpZy5wdXNoKFwiclwiICsgailcbiAgICBzdHJpbmdfdHlwZXNpZy5wdXNoKFwidFwiK2opXG4gICAgc3RyaW5nX3R5cGVzaWcucHVzaChcInJcIitqK1wiLmpvaW4oKVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5kYXRhXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLnN0cmlkZVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5vZmZzZXR8MFwiKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Muc2NhbGFyQXJncy5sZW5ndGg7ICsraSkge1xuICAgIHByb2NfYXJncy5wdXNoKFwic2NhbGFyXCIgKyBwcm9jLnNjYWxhckFyZ3NbaV0pXG4gIH1cbiAgdmFycy5wdXNoKFtcInR5cGU9W1wiLCBzdHJpbmdfdHlwZXNpZy5qb2luKFwiLFwiKSwgXCJdLmpvaW4oKVwiXS5qb2luKFwiXCIpKVxuICB2YXJzLnB1c2goXCJwcm9jPUNBQ0hFRFt0eXBlXVwiKVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICBcbiAgY29kZS5wdXNoKFtcImlmKCFwcm9jKXtcIixcbiAgICAgICAgICAgICBcIkNBQ0hFRFt0eXBlXT1wcm9jPWNvbXBpbGUoW1wiLCB0eXBlc2lnLmpvaW4oXCIsXCIpLCBcIl0pfVwiLFxuICAgICAgICAgICAgIFwicmV0dXJuIHByb2MoXCIsIHByb2NfYXJncy5qb2luKFwiLFwiKSwgXCIpfVwiXS5qb2luKFwiXCIpKVxuXG4gIGlmKHByb2MuZGVidWcpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tR2VuZXJhdGVkIHRodW5rOlxcblwiICsgY29kZS5qb2luKFwiXFxuXCIpICsgXCJcXG4tLS0tLS0tLS0tXCIpXG4gIH1cbiAgXG4gIC8vQ29tcGlsZSB0aHVua1xuICB2YXIgdGh1bmsgPSBuZXcgRnVuY3Rpb24oXCJjb21waWxlXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgcmV0dXJuIHRodW5rKGNvbXBpbGUuYmluZCh1bmRlZmluZWQsIHByb2MpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRodW5rXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiB1bmlxdWVfcHJlZChsaXN0LCBjb21wYXJlKSB7XG4gIHZhciBwdHIgPSAxXG4gICAgLCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgICwgYT1saXN0WzBdLCBiPWxpc3RbMF1cbiAgZm9yKHZhciBpPTE7IGk8bGVuOyArK2kpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoY29tcGFyZShhLCBiKSkge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlX2VxKGxpc3QpIHtcbiAgdmFyIHB0ciA9IDFcbiAgICAsIGxlbiA9IGxpc3QubGVuZ3RoXG4gICAgLCBhPWxpc3RbMF0sIGIgPSBsaXN0WzBdXG4gIGZvcih2YXIgaT0xOyBpPGxlbjsgKytpLCBiPWEpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoYSAhPT0gYikge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGxpc3QsIGNvbXBhcmUsIHNvcnRlZCkge1xuICBpZihsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgaWYoY29tcGFyZSkge1xuICAgIGlmKCFzb3J0ZWQpIHtcbiAgICAgIGxpc3Quc29ydChjb21wYXJlKVxuICAgIH1cbiAgICByZXR1cm4gdW5pcXVlX3ByZWQobGlzdCwgY29tcGFyZSlcbiAgfVxuICBpZighc29ydGVkKSB7XG4gICAgbGlzdC5zb3J0KClcbiAgfVxuICByZXR1cm4gdW5pcXVlX2VxKGxpc3QpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcXVlXG4iLCJ2YXIgaW90YSA9IHJlcXVpcmUoXCJpb3RhLWFycmF5XCIpXG5cbnZhciBoYXNUeXBlZEFycmF5cyAgPSAoKHR5cGVvZiBGbG9hdDY0QXJyYXkpICE9PSBcInVuZGVmaW5lZFwiKVxudmFyIGhhc0J1ZmZlciAgICAgICA9ICgodHlwZW9mIEJ1ZmZlcikgIT09IFwidW5kZWZpbmVkXCIpXG5cbmZ1bmN0aW9uIGNvbXBhcmUxc3QoYSwgYikge1xuICByZXR1cm4gYVswXSAtIGJbMF1cbn1cblxuZnVuY3Rpb24gb3JkZXIoKSB7XG4gIHZhciBzdHJpZGUgPSB0aGlzLnN0cmlkZVxuICB2YXIgdGVybXMgPSBuZXcgQXJyYXkoc3RyaWRlLmxlbmd0aClcbiAgdmFyIGlcbiAgZm9yKGk9MDsgaTx0ZXJtcy5sZW5ndGg7ICsraSkge1xuICAgIHRlcm1zW2ldID0gW01hdGguYWJzKHN0cmlkZVtpXSksIGldXG4gIH1cbiAgdGVybXMuc29ydChjb21wYXJlMXN0KVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHRlcm1zLmxlbmd0aClcbiAgZm9yKGk9MDsgaTxyZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICByZXN1bHRbaV0gPSB0ZXJtc1tpXVsxXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBkaW1lbnNpb24pIHtcbiAgdmFyIGNsYXNzTmFtZSA9IFtcIlZpZXdcIiwgZGltZW5zaW9uLCBcImRcIiwgZHR5cGVdLmpvaW4oXCJcIilcbiAgaWYoZGltZW5zaW9uIDwgMCkge1xuICAgIGNsYXNzTmFtZSA9IFwiVmlld19OaWxcIiArIGR0eXBlXG4gIH1cbiAgdmFyIHVzZUdldHRlcnMgPSAoZHR5cGUgPT09IFwiZ2VuZXJpY1wiKVxuICBcbiAgaWYoZGltZW5zaW9uID09PSAtMSkge1xuICAgIC8vU3BlY2lhbCBjYXNlIGZvciB0cml2aWFsIGFycmF5c1xuICAgIHZhciBjb2RlID0gXG4gICAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhKXt0aGlzLmRhdGE9YTt9O1xcXG52YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZTtcXFxucHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJztcXFxucHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gLTF9O1xcXG5wcm90by5zaXplPTA7XFxcbnByb3RvLmRpbWVuc2lvbj0tMTtcXFxucHJvdG8uc2hhcGU9cHJvdG8uc3RyaWRlPXByb3RvLm9yZGVyPVtdO1xcXG5wcm90by5sbz1wcm90by5oaT1wcm90by50cmFuc3Bvc2U9cHJvdG8uc3RlcD1cXFxuZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEpO307XFxcbnByb3RvLmdldD1wcm90by5zZXQ9ZnVuY3Rpb24oKXt9O1xcXG5wcm90by5waWNrPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O1xcXG5yZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihhKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihhKTt9XCJcbiAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKGNvZGUpXG4gICAgcmV0dXJuIHByb2NlZHVyZSgpXG4gIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDApIHtcbiAgICAvL1NwZWNpYWwgY2FzZSBmb3IgMGQgYXJyYXlzXG4gICAgdmFyIGNvZGUgPVxuICAgICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSxkKSB7XFxcbnRoaXMuZGF0YSA9IGE7XFxcbnRoaXMub2Zmc2V0ID0gZFxcXG59O1xcXG52YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZTtcXFxucHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJztcXFxucHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXR9O1xcXG5wcm90by5kaW1lbnNpb249MDtcXFxucHJvdG8uc2l6ZT0xO1xcXG5wcm90by5zaGFwZT1cXFxucHJvdG8uc3RyaWRlPVxcXG5wcm90by5vcmRlcj1bXTtcXFxucHJvdG8ubG89XFxcbnByb3RvLmhpPVxcXG5wcm90by50cmFuc3Bvc2U9XFxcbnByb3RvLnN0ZXA9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2NvcHkoKSB7XFxcbnJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSx0aGlzLm9mZnNldClcXFxufTtcXFxucHJvdG8ucGljaz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfcGljaygpe1xcXG5yZXR1cm4gVHJpdmlhbEFycmF5KHRoaXMuZGF0YSk7XFxcbn07XFxcbnByb3RvLnZhbHVlT2Y9cHJvdG8uZ2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9nZXQoKXtcXFxucmV0dXJuIFwiKyh1c2VHZXR0ZXJzID8gXCJ0aGlzLmRhdGEuZ2V0KHRoaXMub2Zmc2V0KVwiIDogXCJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdXCIpK1xuXCJ9O1xcXG5wcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldCh2KXtcXFxucmV0dXJuIFwiKyh1c2VHZXR0ZXJzID8gXCJ0aGlzLmRhdGEuc2V0KHRoaXMub2Zmc2V0LHYpXCIgOiBcInRoaXMuZGF0YVt0aGlzLm9mZnNldF09dlwiKStcIlxcXG59O1xcXG5yZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihhLGIsYyxkKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihhLGQpfVwiXG4gICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihcIlRyaXZpYWxBcnJheVwiLCBjb2RlKVxuICAgIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1bMF0pXG4gIH1cblxuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiXVxuICAgIFxuICAvL0NyZWF0ZSBjb25zdHJ1Y3RvciBmb3Igdmlld1xuICB2YXIgaW5kaWNlcyA9IGlvdGEoZGltZW5zaW9uKVxuICB2YXIgYXJncyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwiaVwiK2kgfSlcbiAgdmFyIGluZGV4X3N0ciA9IFwidGhpcy5vZmZzZXQrXCIgKyBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBcInRoaXMuc3RyaWRlW1wiICsgaSArIFwiXSppXCIgKyBpXG4gICAgICB9KS5qb2luKFwiK1wiKVxuICB2YXIgc2hhcGVBcmcgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpXG4gIHZhciBzdHJpZGVBcmcgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJjXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpXG4gIGNvZGUucHVzaChcbiAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhLFwiICsgc2hhcGVBcmcgKyBcIixcIiArIHN0cmlkZUFyZyArIFwiLGQpe3RoaXMuZGF0YT1hXCIsXG4gICAgICBcInRoaXMuc2hhcGU9W1wiICsgc2hhcGVBcmcgKyBcIl1cIixcbiAgICAgIFwidGhpcy5zdHJpZGU9W1wiICsgc3RyaWRlQXJnICsgXCJdXCIsXG4gICAgICBcInRoaXMub2Zmc2V0PWR8MH1cIixcbiAgICBcInZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlXCIsXG4gICAgXCJwcm90by5kdHlwZT0nXCIrZHR5cGUrXCInXCIsXG4gICAgXCJwcm90by5kaW1lbnNpb249XCIrZGltZW5zaW9uKVxuICBcbiAgLy92aWV3LnNpemU6XG4gIGNvZGUucHVzaChcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnc2l6ZScse2dldDpmdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc2l6ZSgpe1xcXG5yZXR1cm4gXCIraW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJ0aGlzLnNoYXBlW1wiK2krXCJdXCIgfSkuam9pbihcIipcIiksXG5cIn19KVwiKVxuXG4gIC8vdmlldy5vcmRlcjpcbiAgaWYoZGltZW5zaW9uID09PSAxKSB7XG4gICAgY29kZS5wdXNoKFwicHJvdG8ub3JkZXI9WzBdXCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdvcmRlcicse2dldDpcIilcbiAgICBpZihkaW1lbnNpb24gPCA0KSB7XG4gICAgICBjb2RlLnB1c2goXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfb3JkZXIoKXtcIilcbiAgICAgIGlmKGRpbWVuc2lvbiA9PT0gMikge1xuICAgICAgICBjb2RlLnB1c2goXCJyZXR1cm4gKE1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKT5NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSkpP1sxLDBdOlswLDFdfX0pXCIpXG4gICAgICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAzKSB7XG4gICAgICAgIGNvZGUucHVzaChcblwidmFyIHMwPU1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKSxzMT1NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSksczI9TWF0aC5hYnModGhpcy5zdHJpZGVbMl0pO1xcXG5pZihzMD5zMSl7XFxcbmlmKHMxPnMyKXtcXFxucmV0dXJuIFsyLDEsMF07XFxcbn1lbHNlIGlmKHMwPnMyKXtcXFxucmV0dXJuIFsxLDIsMF07XFxcbn1lbHNle1xcXG5yZXR1cm4gWzEsMCwyXTtcXFxufVxcXG59ZWxzZSBpZihzMD5zMil7XFxcbnJldHVybiBbMiwwLDFdO1xcXG59ZWxzZSBpZihzMj5zMSl7XFxcbnJldHVybiBbMCwxLDJdO1xcXG59ZWxzZXtcXFxucmV0dXJuIFswLDIsMV07XFxcbn19fSlcIilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29kZS5wdXNoKFwiT1JERVJ9KVwiKVxuICAgIH1cbiAgfVxuICBcbiAgLy92aWV3LnNldChpMCwgLi4uLCB2KTpcbiAgY29kZS5wdXNoKFxuXCJwcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldChcIithcmdzLmpvaW4oXCIsXCIpK1wiLHYpe1wiKVxuICBpZih1c2VHZXR0ZXJzKSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YS5zZXQoXCIraW5kZXhfc3RyK1wiLHYpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXT12fVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuZ2V0KGkwLCAuLi4pOlxuICBjb2RlLnB1c2goXCJwcm90by5nZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2dldChcIithcmdzLmpvaW4oXCIsXCIpK1wiKXtcIilcbiAgaWYodXNlR2V0dGVycykge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGEuZ2V0KFwiK2luZGV4X3N0citcIil9XCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YVtcIitpbmRleF9zdHIrXCJdfVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuaW5kZXg6XG4gIGNvZGUucHVzaChcbiAgICBcInByb3RvLmluZGV4PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9pbmRleChcIiwgYXJncy5qb2luKCksIFwiKXtyZXR1cm4gXCIraW5kZXhfc3RyK1wifVwiKVxuXG4gIC8vdmlldy5oaSgpOlxuICBjb2RlLnB1c2goXCJwcm90by5oaT1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfaGkoXCIrYXJncy5qb2luKFwiLFwiKStcIil7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBbXCIodHlwZW9mIGlcIixpLFwiIT09J251bWJlcid8fGlcIixpLFwiPDApP3RoaXMuc2hhcGVbXCIsIGksIFwiXTppXCIsIGksXCJ8MFwiXS5qb2luKFwiXCIpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwidGhpcy5zdHJpZGVbXCIraSArIFwiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsdGhpcy5vZmZzZXQpfVwiKVxuICBcbiAgLy92aWV3LmxvKCk6XG4gIHZhciBhX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImFcIitpK1wiPXRoaXMuc2hhcGVbXCIraStcIl1cIiB9KVxuICB2YXIgY192YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJjXCIraStcIj10aGlzLnN0cmlkZVtcIitpK1wiXVwiIH0pXG4gIGNvZGUucHVzaChcInByb3RvLmxvPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9sbyhcIithcmdzLmpvaW4oXCIsXCIpK1wiKXt2YXIgYj10aGlzLm9mZnNldCxkPTAsXCIrYV92YXJzLmpvaW4oXCIsXCIpK1wiLFwiK2NfdmFycy5qb2luKFwiLFwiKSlcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7XFxcbmQ9aVwiK2krXCJ8MDtcXFxuYis9Y1wiK2krXCIqZDtcXFxuYVwiK2krXCItPWR9XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixiKX1cIilcbiAgXG4gIC8vdmlldy5zdGVwKCk6XG4gIGNvZGUucHVzaChcInByb3RvLnN0ZXA9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3N0ZXAoXCIrYXJncy5qb2luKFwiLFwiKStcIil7dmFyIFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpK1wiPXRoaXMuc2hhcGVbXCIraStcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImJcIitpK1wiPXRoaXMuc3RyaWRlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixjPXRoaXMub2Zmc2V0LGQ9MCxjZWlsPU1hdGguY2VpbFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcblwiaWYodHlwZW9mIGlcIitpK1wiPT09J251bWJlcicpe1xcXG5kPWlcIitpK1wifDA7XFxcbmlmKGQ8MCl7XFxcbmMrPWJcIitpK1wiKihhXCIraStcIi0xKTtcXFxuYVwiK2krXCI9Y2VpbCgtYVwiK2krXCIvZClcXFxufWVsc2V7XFxcbmFcIitpK1wiPWNlaWwoYVwiK2krXCIvZClcXFxufVxcXG5iXCIraStcIio9ZFxcXG59XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIiArIGlcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIgKyBpXG4gICAgfSkuam9pbihcIixcIikrXCIsYyl9XCIpXG4gIFxuICAvL3ZpZXcudHJhbnNwb3NlKCk6XG4gIHZhciB0U2hhcGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICB2YXIgdFN0cmlkZSA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgdFNoYXBlW2ldID0gXCJhW2lcIitpK1wiXVwiXG4gICAgdFN0cmlkZVtpXSA9IFwiYltpXCIraStcIl1cIlxuICB9XG4gIGNvZGUucHVzaChcInByb3RvLnRyYW5zcG9zZT1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfdHJhbnNwb3NlKFwiK2FyZ3MrXCIpe1wiK1xuICAgIGFyZ3MubWFwKGZ1bmN0aW9uKG4saWR4KSB7IHJldHVybiBuICsgXCI9KFwiICsgbiArIFwiPT09dW5kZWZpbmVkP1wiICsgaWR4ICsgXCI6XCIgKyBuICsgXCJ8MClcIn0pLmpvaW4oXCI7XCIpLFxuICAgIFwidmFyIGE9dGhpcy5zaGFwZSxiPXRoaXMuc3RyaWRlO3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIit0U2hhcGUuam9pbihcIixcIikrXCIsXCIrdFN0cmlkZS5qb2luKFwiLFwiKStcIix0aGlzLm9mZnNldCl9XCIpXG4gIFxuICAvL3ZpZXcucGljaygpOlxuICBjb2RlLnB1c2goXCJwcm90by5waWNrPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9waWNrKFwiK2FyZ3MrXCIpe3ZhciBhPVtdLGI9W10sYz10aGlzLm9mZnNldFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7Yz0oYyt0aGlzLnN0cmlkZVtcIitpK1wiXSppXCIraStcIil8MH1lbHNle2EucHVzaCh0aGlzLnNoYXBlW1wiK2krXCJdKTtiLnB1c2godGhpcy5zdHJpZGVbXCIraStcIl0pfVwiKVxuICB9XG4gIGNvZGUucHVzaChcInZhciBjdG9yPUNUT1JfTElTVFthLmxlbmd0aCsxXTtyZXR1cm4gY3Rvcih0aGlzLmRhdGEsYSxiLGMpfVwiKVxuICAgIFxuICAvL0FkZCByZXR1cm4gc3RhdGVtZW50XG4gIGNvZGUucHVzaChcInJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGRhdGEsc2hhcGUsc3RyaWRlLG9mZnNldCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJzaGFwZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwic3RyaWRlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixvZmZzZXQpfVwiKVxuXG4gIC8vQ29tcGlsZSBwcm9jZWR1cmVcbiAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihcIkNUT1JfTElTVFwiLCBcIk9SREVSXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXSwgb3JkZXIpXG59XG5cbmZ1bmN0aW9uIGFycmF5RFR5cGUoZGF0YSkge1xuICBpZihoYXNCdWZmZXIpIHtcbiAgICBpZihCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgIHJldHVybiBcImJ1ZmZlclwiXG4gICAgfVxuICB9XG4gIGlmKGhhc1R5cGVkQXJyYXlzKSB7XG4gICAgc3dpdGNoKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSkge1xuICAgICAgY2FzZSBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJmbG9hdDY0XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxvYXQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBJbnQ4QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDhcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50MTZBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50MTZcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDhBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDhcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDE2QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQxNlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50OF9jbGFtcGVkXCJcbiAgICB9XG4gIH1cbiAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBcImFycmF5XCJcbiAgfVxuICByZXR1cm4gXCJnZW5lcmljXCJcbn1cblxudmFyIENBQ0hFRF9DT05TVFJVQ1RPUlMgPSB7XG4gIFwiZmxvYXQzMlwiOltdLFxuICBcImZsb2F0NjRcIjpbXSxcbiAgXCJpbnQ4XCI6W10sXG4gIFwiaW50MTZcIjpbXSxcbiAgXCJpbnQzMlwiOltdLFxuICBcInVpbnQ4XCI6W10sXG4gIFwidWludDE2XCI6W10sXG4gIFwidWludDMyXCI6W10sXG4gIFwiYXJyYXlcIjpbXSxcbiAgXCJ1aW50OF9jbGFtcGVkXCI6W10sXG4gIFwiYnVmZmVyXCI6W10sXG4gIFwiZ2VuZXJpY1wiOltdXG59XG5cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaWQgaW4gQ0FDSEVEX0NPTlNUUlVDVE9SUykge1xuICAgIENBQ0hFRF9DT05TVFJVQ1RPUlNbaWRdLnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGlkLCAtMSkpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB3cmFwcGVkTkRBcnJheUN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdG9yID0gQ0FDSEVEX0NPTlNUUlVDVE9SUy5hcnJheVswXVxuICAgIHJldHVybiBjdG9yKFtdKVxuICB9IGVsc2UgaWYodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICBkYXRhID0gW2RhdGFdXG4gIH1cbiAgaWYoc2hhcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHNoYXBlID0gWyBkYXRhLmxlbmd0aCBdXG4gIH1cbiAgdmFyIGQgPSBzaGFwZS5sZW5ndGhcbiAgaWYoc3RyaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpZGUgPSBuZXcgQXJyYXkoZClcbiAgICBmb3IodmFyIGk9ZC0xLCBzej0xOyBpPj0wOyAtLWkpIHtcbiAgICAgIHN0cmlkZVtpXSA9IHN6XG4gICAgICBzeiAqPSBzaGFwZVtpXVxuICAgIH1cbiAgfVxuICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIG9mZnNldCA9IDBcbiAgICBmb3IodmFyIGk9MDsgaTxkOyArK2kpIHtcbiAgICAgIGlmKHN0cmlkZVtpXSA8IDApIHtcbiAgICAgICAgb2Zmc2V0IC09IChzaGFwZVtpXS0xKSpzdHJpZGVbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGR0eXBlID0gYXJyYXlEVHlwZShkYXRhKVxuICB2YXIgY3Rvcl9saXN0ID0gQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1cbiAgd2hpbGUoY3Rvcl9saXN0Lmxlbmd0aCA8PSBkKzEpIHtcbiAgICBjdG9yX2xpc3QucHVzaChjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGN0b3JfbGlzdC5sZW5ndGgtMSkpXG4gIH1cbiAgdmFyIGN0b3IgPSBjdG9yX2xpc3RbZCsxXVxuICByZXR1cm4gY3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlZE5EQXJyYXlDdG9yIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gaW90YShuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobilcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gaVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpb3RhIiwiLyoqXG4gKiBCaXQgdHdpZGRsaW5nIGhhY2tzIGZvciBKYXZhU2NyaXB0LlxuICpcbiAqIEF1dGhvcjogTWlrb2xhIEx5c2Vua29cbiAqXG4gKiBQb3J0ZWQgZnJvbSBTdGFuZm9yZCBiaXQgdHdpZGRsaW5nIGhhY2sgbGlicmFyeTpcbiAqICAgIGh0dHA6Ly9ncmFwaGljcy5zdGFuZm9yZC5lZHUvfnNlYW5kZXIvYml0aGFja3MuaHRtbFxuICovXG5cblwidXNlIHN0cmljdFwiOyBcInVzZSByZXN0cmljdFwiO1xuXG4vL051bWJlciBvZiBiaXRzIGluIGFuIGludGVnZXJcbnZhciBJTlRfQklUUyA9IDMyO1xuXG4vL0NvbnN0YW50c1xuZXhwb3J0cy5JTlRfQklUUyAgPSBJTlRfQklUUztcbmV4cG9ydHMuSU5UX01BWCAgID0gIDB4N2ZmZmZmZmY7XG5leHBvcnRzLklOVF9NSU4gICA9IC0xPDwoSU5UX0JJVFMtMSk7XG5cbi8vUmV0dXJucyAtMSwgMCwgKzEgZGVwZW5kaW5nIG9uIHNpZ24gb2YgeFxuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gKHYgPiAwKSAtICh2IDwgMCk7XG59XG5cbi8vQ29tcHV0ZXMgYWJzb2x1dGUgdmFsdWUgb2YgaW50ZWdlclxuZXhwb3J0cy5hYnMgPSBmdW5jdGlvbih2KSB7XG4gIHZhciBtYXNrID0gdiA+PiAoSU5UX0JJVFMtMSk7XG4gIHJldHVybiAodiBeIG1hc2spIC0gbWFzaztcbn1cblxuLy9Db21wdXRlcyBtaW5pbXVtIG9mIGludGVnZXJzIHggYW5kIHlcbmV4cG9ydHMubWluID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4geSBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xufVxuXG4vL0NvbXB1dGVzIG1heGltdW0gb2YgaW50ZWdlcnMgeCBhbmQgeVxuZXhwb3J0cy5tYXggPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB4IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG59XG5cbi8vQ2hlY2tzIGlmIGEgbnVtYmVyIGlzIGEgcG93ZXIgb2YgdHdvXG5leHBvcnRzLmlzUG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICEodiAmICh2LTEpKSAmJiAoISF2KTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAyIG9mIHZcbmV4cG9ydHMubG9nMiA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHIsIHNoaWZ0O1xuICByID0gICAgICh2ID4gMHhGRkZGKSA8PCA0OyB2ID4+Pj0gcjtcbiAgc2hpZnQgPSAodiA+IDB4RkYgICkgPDwgMzsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICBzaGlmdCA9ICh2ID4gMHhGICAgKSA8PCAyOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHNoaWZ0ID0gKHYgPiAweDMgICApIDw8IDE7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgcmV0dXJuIHIgfCAodiA+PiAxKTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAxMCBvZiB2XG5leHBvcnRzLmxvZzEwID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gICh2ID49IDEwMDAwMDAwMDApID8gOSA6ICh2ID49IDEwMDAwMDAwMCkgPyA4IDogKHYgPj0gMTAwMDAwMDApID8gNyA6XG4gICAgICAgICAgKHYgPj0gMTAwMDAwMCkgPyA2IDogKHYgPj0gMTAwMDAwKSA/IDUgOiAodiA+PSAxMDAwMCkgPyA0IDpcbiAgICAgICAgICAodiA+PSAxMDAwKSA/IDMgOiAodiA+PSAxMDApID8gMiA6ICh2ID49IDEwKSA/IDEgOiAwO1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgYml0c1xuZXhwb3J0cy5wb3BDb3VudCA9IGZ1bmN0aW9uKHYpIHtcbiAgdiA9IHYgLSAoKHYgPj4+IDEpICYgMHg1NTU1NTU1NSk7XG4gIHYgPSAodiAmIDB4MzMzMzMzMzMpICsgKCh2ID4+PiAyKSAmIDB4MzMzMzMzMzMpO1xuICByZXR1cm4gKCh2ICsgKHYgPj4+IDQpICYgMHhGMEYwRjBGKSAqIDB4MTAxMDEwMSkgPj4+IDI0O1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgdHJhaWxpbmcgemVyb3NcbmZ1bmN0aW9uIGNvdW50VHJhaWxpbmdaZXJvcyh2KSB7XG4gIHZhciBjID0gMzI7XG4gIHYgJj0gLXY7XG4gIGlmICh2KSBjLS07XG4gIGlmICh2ICYgMHgwMDAwRkZGRikgYyAtPSAxNjtcbiAgaWYgKHYgJiAweDAwRkYwMEZGKSBjIC09IDg7XG4gIGlmICh2ICYgMHgwRjBGMEYwRikgYyAtPSA0O1xuICBpZiAodiAmIDB4MzMzMzMzMzMpIGMgLT0gMjtcbiAgaWYgKHYgJiAweDU1NTU1NTU1KSBjIC09IDE7XG4gIHJldHVybiBjO1xufVxuZXhwb3J0cy5jb3VudFRyYWlsaW5nWmVyb3MgPSBjb3VudFRyYWlsaW5nWmVyb3M7XG5cbi8vUm91bmRzIHRvIG5leHQgcG93ZXIgb2YgMlxuZXhwb3J0cy5uZXh0UG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgdiArPSB2ID09PSAwO1xuICAtLXY7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgKyAxO1xufVxuXG4vL1JvdW5kcyBkb3duIHRvIHByZXZpb3VzIHBvd2VyIG9mIDJcbmV4cG9ydHMucHJldlBvdzIgPSBmdW5jdGlvbih2KSB7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgLSAodj4+PjEpO1xufVxuXG4vL0NvbXB1dGVzIHBhcml0eSBvZiB3b3JkXG5leHBvcnRzLnBhcml0eSA9IGZ1bmN0aW9uKHYpIHtcbiAgdiBePSB2ID4+PiAxNjtcbiAgdiBePSB2ID4+PiA4O1xuICB2IF49IHYgPj4+IDQ7XG4gIHYgJj0gMHhmO1xuICByZXR1cm4gKDB4Njk5NiA+Pj4gdikgJiAxO1xufVxuXG52YXIgUkVWRVJTRV9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xuXG4oZnVuY3Rpb24odGFiKSB7XG4gIGZvcih2YXIgaT0wOyBpPDI1NjsgKytpKSB7XG4gICAgdmFyIHYgPSBpLCByID0gaSwgcyA9IDc7XG4gICAgZm9yICh2ID4+Pj0gMTsgdjsgdiA+Pj49IDEpIHtcbiAgICAgIHIgPDw9IDE7XG4gICAgICByIHw9IHYgJiAxO1xuICAgICAgLS1zO1xuICAgIH1cbiAgICB0YWJbaV0gPSAociA8PCBzKSAmIDB4ZmY7XG4gIH1cbn0pKFJFVkVSU0VfVEFCTEUpO1xuXG4vL1JldmVyc2UgYml0cyBpbiBhIDMyIGJpdCB3b3JkXG5leHBvcnRzLnJldmVyc2UgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAgKFJFVkVSU0VfVEFCTEVbIHYgICAgICAgICAmIDB4ZmZdIDw8IDI0KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDgpICAmIDB4ZmZdIDw8IDE2KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDE2KSAmIDB4ZmZdIDw8IDgpICB8XG4gICAgICAgICAgIFJFVkVSU0VfVEFCTEVbKHYgPj4+IDI0KSAmIDB4ZmZdO1xufVxuXG4vL0ludGVybGVhdmUgYml0cyBvZiAyIGNvb3JkaW5hdGVzIHdpdGggMTYgYml0cy4gIFVzZWZ1bCBmb3IgZmFzdCBxdWFkdHJlZSBjb2Rlc1xuZXhwb3J0cy5pbnRlcmxlYXZlMiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgeCAmPSAweEZGRkY7XG4gIHggPSAoeCB8ICh4IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHggPSAoeCB8ICh4IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHggPSAoeCB8ICh4IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHggPSAoeCB8ICh4IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgeSAmPSAweEZGRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHkgPSAoeSB8ICh5IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHkgPSAoeSB8ICh5IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgcmV0dXJuIHggfCAoeSA8PCAxKTtcbn1cblxuLy9FeHRyYWN0cyB0aGUgbnRoIGludGVybGVhdmVkIGNvbXBvbmVudFxuZXhwb3J0cy5kZWludGVybGVhdmUyID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICYgMHg1NTU1NTU1NTtcbiAgdiA9ICh2IHwgKHYgPj4+IDEpKSAgJiAweDMzMzMzMzMzO1xuICB2ID0gKHYgfCAodiA+Pj4gMikpICAmIDB4MEYwRjBGMEY7XG4gIHYgPSAodiB8ICh2ID4+PiA0KSkgICYgMHgwMEZGMDBGRjtcbiAgdiA9ICh2IHwgKHYgPj4+IDE2KSkgJiAweDAwMEZGRkY7XG4gIHJldHVybiAodiA8PCAxNikgPj4gMTY7XG59XG5cblxuLy9JbnRlcmxlYXZlIGJpdHMgb2YgMyBjb29yZGluYXRlcywgZWFjaCB3aXRoIDEwIGJpdHMuICBVc2VmdWwgZm9yIGZhc3Qgb2N0cmVlIGNvZGVzXG5leHBvcnRzLmludGVybGVhdmUzID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICB4ICY9IDB4M0ZGO1xuICB4ICA9ICh4IHwgKHg8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB4ICA9ICh4IHwgKHg8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHggID0gKHggfCAoeDw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHggID0gKHggfCAoeDw8MikpICAmIDEyMjcxMzM1MTM7XG5cbiAgeSAmPSAweDNGRjtcbiAgeSAgPSAoeSB8ICh5PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeSAgPSAoeSB8ICh5PDw4KSkgICYgMjUxNzE5Njk1O1xuICB5ICA9ICh5IHwgKHk8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB5ICA9ICh5IHwgKHk8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICB4IHw9ICh5IDw8IDEpO1xuICBcbiAgeiAmPSAweDNGRjtcbiAgeiAgPSAoeiB8ICh6PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeiAgPSAoeiB8ICh6PDw4KSkgICYgMjUxNzE5Njk1O1xuICB6ICA9ICh6IHwgKHo8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB6ICA9ICh6IHwgKHo8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICBcbiAgcmV0dXJuIHggfCAoeiA8PCAyKTtcbn1cblxuLy9FeHRyYWN0cyBudGggaW50ZXJsZWF2ZWQgY29tcG9uZW50IG9mIGEgMy10dXBsZVxuZXhwb3J0cy5kZWludGVybGVhdmUzID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICAgICAgICYgMTIyNzEzMzUxMztcbiAgdiA9ICh2IHwgKHY+Pj4yKSkgICAmIDMyNzIzNTYwMzU7XG4gIHYgPSAodiB8ICh2Pj4+NCkpICAgJiAyNTE3MTk2OTU7XG4gIHYgPSAodiB8ICh2Pj4+OCkpICAgJiA0Mjc4MTkwMzM1O1xuICB2ID0gKHYgfCAodj4+PjE2KSkgICYgMHgzRkY7XG4gIHJldHVybiAodjw8MjIpPj4yMjtcbn1cblxuLy9Db21wdXRlcyBuZXh0IGNvbWJpbmF0aW9uIGluIGNvbGV4aWNvZ3JhcGhpYyBvcmRlciAodGhpcyBpcyBtaXN0YWtlbmx5IGNhbGxlZCBuZXh0UGVybXV0YXRpb24gb24gdGhlIGJpdCB0d2lkZGxpbmcgaGFja3MgcGFnZSlcbmV4cG9ydHMubmV4dENvbWJpbmF0aW9uID0gZnVuY3Rpb24odikge1xuICB2YXIgdCA9IHYgfCAodiAtIDEpO1xuICByZXR1cm4gKHQgKyAxKSB8ICgoKH50ICYgLX50KSAtIDEpID4+PiAoY291bnRUcmFpbGluZ1plcm9zKHYpICsgMSkpO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgaSkge1xuICB2YXIgYyA9IGNvdW50W2ldfDBcbiAgaWYoYyA8PSAwKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShjKSwgalxuICBpZihpID09PSBjb3VudC5sZW5ndGgtMSkge1xuICAgIGZvcihqPTA7IGo8YzsgKytqKSB7XG4gICAgICByZXN1bHRbal0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3Ioaj0wOyBqPGM7ICsraikge1xuICAgICAgcmVzdWx0W2pdID0gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIGkrMSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBkdXBlX251bWJlcihjb3VudCwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCwgaVxuICByZXN1bHQgPSBuZXcgQXJyYXkoY291bnQpXG4gIGZvcihpPTA7IGk8Y291bnQ7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBkdXBlKGNvdW50LCB2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YWx1ZSA9IDBcbiAgfVxuICBzd2l0Y2godHlwZW9mIGNvdW50KSB7XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgaWYoY291bnQgPiAwKSB7XG4gICAgICAgIHJldHVybiBkdXBlX251bWJlcihjb3VudHwwLCB2YWx1ZSlcbiAgICAgIH1cbiAgICBicmVha1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIGlmKHR5cGVvZiAoY291bnQubGVuZ3RoKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIDApXG4gICAgICB9XG4gICAgYnJlYWtcbiAgfVxuICByZXR1cm4gW11cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkdXBlIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBiaXRzID0gcmVxdWlyZSgnYml0LXR3aWRkbGUnKVxudmFyIGR1cCA9IHJlcXVpcmUoJ2R1cCcpXG5cbi8vTGVnYWN5IHBvb2wgc3VwcG9ydFxuaWYoIWdsb2JhbC5fX1RZUEVEQVJSQVlfUE9PTCkge1xuICBnbG9iYWwuX19UWVBFREFSUkFZX1BPT0wgPSB7XG4gICAgICBVSU5UOCAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UMTYgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UMzIgIDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQ4ICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQxNiAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBJTlQzMiAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBGTE9BVCAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBET1VCTEUgIDogZHVwKFszMiwgMF0pXG4gICAgLCBEQVRBICAgIDogZHVwKFszMiwgMF0pXG4gICAgLCBVSU5UOEMgIDogZHVwKFszMiwgMF0pXG4gICAgLCBCVUZGRVIgIDogZHVwKFszMiwgMF0pXG4gIH1cbn1cblxudmFyIGhhc1VpbnQ4QyA9ICh0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkpICE9PSAndW5kZWZpbmVkJ1xudmFyIFBPT0wgPSBnbG9iYWwuX19UWVBFREFSUkFZX1BPT0xcblxuLy9VcGdyYWRlIHBvb2xcbmlmKCFQT09MLlVJTlQ4Qykge1xuICBQT09MLlVJTlQ4QyA9IGR1cChbMzIsIDBdKVxufVxuaWYoIVBPT0wuQlVGRkVSKSB7XG4gIFBPT0wuQlVGRkVSID0gZHVwKFszMiwgMF0pXG59XG5cbi8vTmV3IHRlY2huaXF1ZTogT25seSBhbGxvY2F0ZSBmcm9tIEFycmF5QnVmZmVyVmlldyBhbmQgQnVmZmVyXG52YXIgREFUQSAgICA9IFBPT0wuREFUQVxuICAsIEJVRkZFUiAgPSBQT09MLkJVRkZFUlxuXG5leHBvcnRzLmZyZWUgPSBmdW5jdGlvbiBmcmVlKGFycmF5KSB7XG4gIGlmKEJ1ZmZlci5pc0J1ZmZlcihhcnJheSkpIHtcbiAgICBCVUZGRVJbYml0cy5sb2cyKGFycmF5Lmxlbmd0aCldLnB1c2goYXJyYXkpXG4gIH0gZWxzZSB7XG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSAhPT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgYXJyYXkgPSBhcnJheS5idWZmZXJcbiAgICB9XG4gICAgaWYoIWFycmF5KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG4gPSBhcnJheS5sZW5ndGggfHwgYXJyYXkuYnl0ZUxlbmd0aFxuICAgIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKXwwXG4gICAgREFUQVtsb2dfbl0ucHVzaChhcnJheSlcbiAgfVxufVxuXG5mdW5jdGlvbiBmcmVlQXJyYXlCdWZmZXIoYnVmZmVyKSB7XG4gIGlmKCFidWZmZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IGJ1ZmZlci5sZW5ndGggfHwgYnVmZmVyLmJ5dGVMZW5ndGhcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIERBVEFbbG9nX25dLnB1c2goYnVmZmVyKVxufVxuXG5mdW5jdGlvbiBmcmVlVHlwZWRBcnJheShhcnJheSkge1xuICBmcmVlQXJyYXlCdWZmZXIoYXJyYXkuYnVmZmVyKVxufVxuXG5leHBvcnRzLmZyZWVVaW50OCA9XG5leHBvcnRzLmZyZWVVaW50MTYgPVxuZXhwb3J0cy5mcmVlVWludDMyID1cbmV4cG9ydHMuZnJlZUludDggPVxuZXhwb3J0cy5mcmVlSW50MTYgPVxuZXhwb3J0cy5mcmVlSW50MzIgPVxuZXhwb3J0cy5mcmVlRmxvYXQzMiA9IFxuZXhwb3J0cy5mcmVlRmxvYXQgPVxuZXhwb3J0cy5mcmVlRmxvYXQ2NCA9IFxuZXhwb3J0cy5mcmVlRG91YmxlID0gXG5leHBvcnRzLmZyZWVVaW50OENsYW1wZWQgPSBcbmV4cG9ydHMuZnJlZURhdGFWaWV3ID0gZnJlZVR5cGVkQXJyYXlcblxuZXhwb3J0cy5mcmVlQXJyYXlCdWZmZXIgPSBmcmVlQXJyYXlCdWZmZXJcblxuZXhwb3J0cy5mcmVlQnVmZmVyID0gZnVuY3Rpb24gZnJlZUJ1ZmZlcihhcnJheSkge1xuICBCVUZGRVJbYml0cy5sb2cyKGFycmF5Lmxlbmd0aCldLnB1c2goYXJyYXkpXG59XG5cbmV4cG9ydHMubWFsbG9jID0gZnVuY3Rpb24gbWFsbG9jKG4sIGR0eXBlKSB7XG4gIGlmKGR0eXBlID09PSB1bmRlZmluZWQgfHwgZHR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICByZXR1cm4gbWFsbG9jQXJyYXlCdWZmZXIobilcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2goZHR5cGUpIHtcbiAgICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQ4KG4pXG4gICAgICBjYXNlICd1aW50MTYnOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDE2KG4pXG4gICAgICBjYXNlICd1aW50MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDMyKG4pXG4gICAgICBjYXNlICdpbnQ4JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0ludDgobilcbiAgICAgIGNhc2UgJ2ludDE2JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0ludDE2KG4pXG4gICAgICBjYXNlICdpbnQzMic6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQzMihuKVxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICAgIHJldHVybiBtYWxsb2NGbG9hdChuKVxuICAgICAgY2FzZSAnZG91YmxlJzpcbiAgICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgICByZXR1cm4gbWFsbG9jRG91YmxlKG4pXG4gICAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQ4Q2xhbXBlZChuKVxuICAgICAgY2FzZSAnYnVmZmVyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0J1ZmZlcihuKVxuICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICBjYXNlICdkYXRhdmlldyc6XG4gICAgICAgIHJldHVybiBtYWxsb2NEYXRhVmlldyhuKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBtYWxsb2NBcnJheUJ1ZmZlcihuKSB7XG4gIHZhciBuID0gYml0cy5uZXh0UG93MihuKVxuICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobilcbiAgdmFyIGQgPSBEQVRBW2xvZ19uXVxuICBpZihkLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZC5wb3AoKVxuICB9XG4gIHJldHVybiBuZXcgQXJyYXlCdWZmZXIobilcbn1cbmV4cG9ydHMubWFsbG9jQXJyYXlCdWZmZXIgPSBtYWxsb2NBcnJheUJ1ZmZlclxuXG5mdW5jdGlvbiBtYWxsb2NVaW50OChuKSB7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDggPSBtYWxsb2NVaW50OFxuXG5mdW5jdGlvbiBtYWxsb2NVaW50MTYobikge1xuICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDIqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY1VpbnQxNiA9IG1hbGxvY1VpbnQxNlxuXG5mdW5jdGlvbiBtYWxsb2NVaW50MzIobikge1xuICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDQqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY1VpbnQzMiA9IG1hbGxvY1VpbnQzMlxuXG5mdW5jdGlvbiBtYWxsb2NJbnQ4KG4pIHtcbiAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0ludDggPSBtYWxsb2NJbnQ4XG5cbmZ1bmN0aW9uIG1hbGxvY0ludDE2KG4pIHtcbiAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDIqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0ludDE2ID0gbWFsbG9jSW50MTZcblxuZnVuY3Rpb24gbWFsbG9jSW50MzIobikge1xuICByZXR1cm4gbmV3IEludDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50MzIgPSBtYWxsb2NJbnQzMlxuXG5mdW5jdGlvbiBtYWxsb2NGbG9hdChuKSB7XG4gIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDQqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0Zsb2F0MzIgPSBleHBvcnRzLm1hbGxvY0Zsb2F0ID0gbWFsbG9jRmxvYXRcblxuZnVuY3Rpb24gbWFsbG9jRG91YmxlKG4pIHtcbiAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoOCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRmxvYXQ2NCA9IGV4cG9ydHMubWFsbG9jRG91YmxlID0gbWFsbG9jRG91YmxlXG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQ4Q2xhbXBlZChuKSB7XG4gIGlmKGhhc1VpbnQ4Qykge1xuICAgIHJldHVybiBuZXcgVWludDhDbGFtcGVkQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1hbGxvY1VpbnQ4KG4pXG4gIH1cbn1cbmV4cG9ydHMubWFsbG9jVWludDhDbGFtcGVkID0gbWFsbG9jVWludDhDbGFtcGVkXG5cbmZ1bmN0aW9uIG1hbGxvY0RhdGFWaWV3KG4pIHtcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRGF0YVZpZXcgPSBtYWxsb2NEYXRhVmlld1xuXG5mdW5jdGlvbiBtYWxsb2NCdWZmZXIobikge1xuICBuID0gYml0cy5uZXh0UG93MihuKVxuICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobilcbiAgdmFyIGNhY2hlID0gQlVGRkVSW2xvZ19uXVxuICBpZihjYWNoZS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGNhY2hlLnBvcCgpXG4gIH1cbiAgcmV0dXJuIG5ldyBCdWZmZXIobilcbn1cbmV4cG9ydHMubWFsbG9jQnVmZmVyID0gbWFsbG9jQnVmZmVyXG5cbmV4cG9ydHMuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUoKSB7XG4gIGZvcih2YXIgaT0wOyBpPDMyOyArK2kpIHtcbiAgICBQT09MLlVJTlQ4W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQxNltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5VSU5UMzJbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuSU5UOFtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQxNltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQzMltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5GTE9BVFtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5ET1VCTEVbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDhDW2ldLmxlbmd0aCA9IDBcbiAgICBEQVRBW2ldLmxlbmd0aCA9IDBcbiAgICBCVUZGRVJbaV0ubGVuZ3RoID0gMFxuICB9XG59IiwiLy8gQ29weXJpZ2h0IChDKSAyMDExIEdvb2dsZSBJbmMuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBJbnN0YWxsIGEgbGVha3kgV2Vha01hcCBlbXVsYXRpb24gb24gcGxhdGZvcm1zIHRoYXRcbiAqIGRvbid0IHByb3ZpZGUgYSBidWlsdC1pbiBvbmUuXG4gKlxuICogPHA+QXNzdW1lcyB0aGF0IGFuIEVTNSBwbGF0Zm9ybSB3aGVyZSwgaWYge0Bjb2RlIFdlYWtNYXB9IGlzXG4gKiBhbHJlYWR5IHByZXNlbnQsIHRoZW4gaXQgY29uZm9ybXMgdG8gdGhlIGFudGljaXBhdGVkIEVTNlxuICogc3BlY2lmaWNhdGlvbi4gVG8gcnVuIHRoaXMgZmlsZSBvbiBhbiBFUzUgb3IgYWxtb3N0IEVTNVxuICogaW1wbGVtZW50YXRpb24gd2hlcmUgdGhlIHtAY29kZSBXZWFrTWFwfSBzcGVjaWZpY2F0aW9uIGRvZXMgbm90XG4gKiBxdWl0ZSBjb25mb3JtLCBydW4gPGNvZGU+cmVwYWlyRVM1LmpzPC9jb2RlPiBmaXJzdC5cbiAqXG4gKiA8cD5FdmVuIHRob3VnaCBXZWFrTWFwTW9kdWxlIGlzIG5vdCBnbG9iYWwsIHRoZSBsaW50ZXIgdGhpbmtzIGl0XG4gKiBpcywgd2hpY2ggaXMgd2h5IGl0IGlzIGluIHRoZSBvdmVycmlkZXMgbGlzdCBiZWxvdy5cbiAqXG4gKiA8cD5OT1RFOiBCZWZvcmUgdXNpbmcgdGhpcyBXZWFrTWFwIGVtdWxhdGlvbiBpbiBhIG5vbi1TRVNcbiAqIGVudmlyb25tZW50LCBzZWUgdGhlIG5vdGUgYmVsb3cgYWJvdXQgaGlkZGVuUmVjb3JkLlxuICpcbiAqIEBhdXRob3IgTWFyayBTLiBNaWxsZXJcbiAqIEByZXF1aXJlcyBjcnlwdG8sIEFycmF5QnVmZmVyLCBVaW50OEFycmF5LCBuYXZpZ2F0b3IsIGNvbnNvbGVcbiAqIEBvdmVycmlkZXMgV2Vha01hcCwgc2VzLCBQcm94eVxuICogQG92ZXJyaWRlcyBXZWFrTWFwTW9kdWxlXG4gKi9cblxuLyoqXG4gKiBUaGlzIHtAY29kZSBXZWFrTWFwfSBlbXVsYXRpb24gaXMgb2JzZXJ2YWJseSBlcXVpdmFsZW50IHRvIHRoZVxuICogRVMtSGFybW9ueSBXZWFrTWFwLCBidXQgd2l0aCBsZWFraWVyIGdhcmJhZ2UgY29sbGVjdGlvbiBwcm9wZXJ0aWVzLlxuICpcbiAqIDxwPkFzIHdpdGggdHJ1ZSBXZWFrTWFwcywgaW4gdGhpcyBlbXVsYXRpb24sIGEga2V5IGRvZXMgbm90XG4gKiByZXRhaW4gbWFwcyBpbmRleGVkIGJ5IHRoYXQga2V5IGFuZCAoY3J1Y2lhbGx5KSBhIG1hcCBkb2VzIG5vdFxuICogcmV0YWluIHRoZSBrZXlzIGl0IGluZGV4ZXMuIEEgbWFwIGJ5IGl0c2VsZiBhbHNvIGRvZXMgbm90IHJldGFpblxuICogdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhhdCBtYXAuXG4gKlxuICogPHA+SG93ZXZlciwgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggYSBrZXkgaW4gc29tZSBtYXAgYXJlXG4gKiByZXRhaW5lZCBzbyBsb25nIGFzIHRoYXQga2V5IGlzIHJldGFpbmVkIGFuZCB0aG9zZSBhc3NvY2lhdGlvbnMgYXJlXG4gKiBub3Qgb3ZlcnJpZGRlbi4gRm9yIGV4YW1wbGUsIHdoZW4gdXNlZCB0byBzdXBwb3J0IG1lbWJyYW5lcywgYWxsXG4gKiB2YWx1ZXMgZXhwb3J0ZWQgZnJvbSBhIGdpdmVuIG1lbWJyYW5lIHdpbGwgbGl2ZSBmb3IgdGhlIGxpZmV0aW1lXG4gKiB0aGV5IHdvdWxkIGhhdmUgaGFkIGluIHRoZSBhYnNlbmNlIG9mIGFuIGludGVycG9zZWQgbWVtYnJhbmUuIEV2ZW5cbiAqIHdoZW4gdGhlIG1lbWJyYW5lIGlzIHJldm9rZWQsIGFsbCBvYmplY3RzIHRoYXQgd291bGQgaGF2ZSBiZWVuXG4gKiByZWFjaGFibGUgaW4gdGhlIGFic2VuY2Ugb2YgcmV2b2NhdGlvbiB3aWxsIHN0aWxsIGJlIHJlYWNoYWJsZSwgYXNcbiAqIGZhciBhcyB0aGUgR0MgY2FuIHRlbGwsIGV2ZW4gdGhvdWdoIHRoZXkgd2lsbCBubyBsb25nZXIgYmUgcmVsZXZhbnRcbiAqIHRvIG9uZ29pbmcgY29tcHV0YXRpb24uXG4gKlxuICogPHA+VGhlIEFQSSBpbXBsZW1lbnRlZCBoZXJlIGlzIGFwcHJveGltYXRlbHkgdGhlIEFQSSBhcyBpbXBsZW1lbnRlZFxuICogaW4gRkY2LjBhMSBhbmQgYWdyZWVkIHRvIGJ5IE1hcmtNLCBBbmRyZWFzIEdhbCwgYW5kIERhdmUgSGVybWFuLFxuICogcmF0aGVyIHRoYW4gdGhlIG9mZmlhbGx5IGFwcHJvdmVkIHByb3Bvc2FsIHBhZ2UuIFRPRE8oZXJpZ2h0cyk6XG4gKiB1cGdyYWRlIHRoZSBlY21hc2NyaXB0IFdlYWtNYXAgcHJvcG9zYWwgcGFnZSB0byBleHBsYWluIHRoaXMgQVBJXG4gKiBjaGFuZ2UgYW5kIHByZXNlbnQgdG8gRWNtYVNjcmlwdCBjb21taXR0ZWUgZm9yIHRoZWlyIGFwcHJvdmFsLlxuICpcbiAqIDxwPlRoZSBmaXJzdCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGVtdWxhdGlvbiBoZXJlIGFuZCB0aGF0IGluXG4gKiBGRjYuMGExIGlzIHRoZSBwcmVzZW5jZSBvZiBub24gZW51bWVyYWJsZSB7QGNvZGUgZ2V0X19fLCBoYXNfX18sXG4gKiBzZXRfX18sIGFuZCBkZWxldGVfX199IG1ldGhvZHMgb24gV2Vha01hcCBpbnN0YW5jZXMgdG8gcmVwcmVzZW50XG4gKiB3aGF0IHdvdWxkIGJlIHRoZSBoaWRkZW4gaW50ZXJuYWwgcHJvcGVydGllcyBvZiBhIHByaW1pdGl2ZVxuICogaW1wbGVtZW50YXRpb24uIFdoZXJlYXMgdGhlIEZGNi4wYTEgV2Vha01hcC5wcm90b3R5cGUgbWV0aG9kc1xuICogcmVxdWlyZSB0aGVpciB7QGNvZGUgdGhpc30gdG8gYmUgYSBnZW51aW5lIFdlYWtNYXAgaW5zdGFuY2UgKGkuZS4sXG4gKiBhbiBvYmplY3Qgb2Yge0Bjb2RlIFtbQ2xhc3NdXX0gXCJXZWFrTWFwfSksIHNpbmNlIHRoZXJlIGlzIG5vdGhpbmdcbiAqIHVuZm9yZ2VhYmxlIGFib3V0IHRoZSBwc2V1ZG8taW50ZXJuYWwgbWV0aG9kIG5hbWVzIHVzZWQgaGVyZSxcbiAqIG5vdGhpbmcgcHJldmVudHMgdGhlc2UgZW11bGF0ZWQgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBiZWluZ1xuICogYXBwbGllZCB0byBub24tV2Vha01hcHMgd2l0aCBwc2V1ZG8taW50ZXJuYWwgbWV0aG9kcyBvZiB0aGUgc2FtZVxuICogbmFtZXMuXG4gKlxuICogPHA+QW5vdGhlciBkaWZmZXJlbmNlIGlzIHRoYXQgb3VyIGVtdWxhdGVkIHtAY29kZVxuICogV2Vha01hcC5wcm90b3R5cGV9IGlzIG5vdCBpdHNlbGYgYSBXZWFrTWFwLiBBIHByb2JsZW0gd2l0aCB0aGVcbiAqIGN1cnJlbnQgRkY2LjBhMSBBUEkgaXMgdGhhdCBXZWFrTWFwLnByb3RvdHlwZSBpcyBpdHNlbGYgYSBXZWFrTWFwXG4gKiBwcm92aWRpbmcgYW1iaWVudCBtdXRhYmlsaXR5IGFuZCBhbiBhbWJpZW50IGNvbW11bmljYXRpb25zXG4gKiBjaGFubmVsLiBUaHVzLCBpZiBhIFdlYWtNYXAgaXMgYWxyZWFkeSBwcmVzZW50IGFuZCBoYXMgdGhpc1xuICogcHJvYmxlbSwgcmVwYWlyRVM1LmpzIHdyYXBzIGl0IGluIGEgc2FmZSB3cmFwcHBlciBpbiBvcmRlciB0b1xuICogcHJldmVudCBhY2Nlc3MgdG8gdGhpcyBjaGFubmVsLiAoU2VlXG4gKiBQQVRDSF9NVVRBQkxFX0ZST1pFTl9XRUFLTUFQX1BST1RPIGluIHJlcGFpckVTNS5qcykuXG4gKi9cblxuLyoqXG4gKiBJZiB0aGlzIGlzIGEgZnVsbCA8YSBocmVmPVxuICogXCJodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZXMtbGFiL3dpa2kvU2VjdXJlYWJsZUVTNVwiXG4gKiA+c2VjdXJlYWJsZSBFUzU8L2E+IHBsYXRmb3JtIGFuZCB0aGUgRVMtSGFybW9ueSB7QGNvZGUgV2Vha01hcH0gaXNcbiAqIGFic2VudCwgaW5zdGFsbCBhbiBhcHByb3hpbWF0ZSBlbXVsYXRpb24uXG4gKlxuICogPHA+SWYgV2Vha01hcCBpcyBwcmVzZW50IGJ1dCBjYW5ub3Qgc3RvcmUgc29tZSBvYmplY3RzLCB1c2Ugb3VyIGFwcHJveGltYXRlXG4gKiBlbXVsYXRpb24gYXMgYSB3cmFwcGVyLlxuICpcbiAqIDxwPklmIHRoaXMgaXMgYWxtb3N0IGEgc2VjdXJlYWJsZSBFUzUgcGxhdGZvcm0sIHRoZW4gV2Vha01hcC5qc1xuICogc2hvdWxkIGJlIHJ1biBhZnRlciByZXBhaXJFUzUuanMuXG4gKlxuICogPHA+U2VlIHtAY29kZSBXZWFrTWFwfSBmb3IgZG9jdW1lbnRhdGlvbiBvZiB0aGUgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gKiBwcm9wZXJ0aWVzIG9mIHRoaXMgV2Vha01hcCBlbXVsYXRpb24uXG4gKi9cbihmdW5jdGlvbiBXZWFrTWFwTW9kdWxlKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAodHlwZW9mIHNlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VzLm9rICYmICFzZXMub2soKSkge1xuICAgIC8vIGFscmVhZHkgdG9vIGJyb2tlbiwgc28gZ2l2ZSB1cFxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBzb21lIGNhc2VzIChjdXJyZW50IEZpcmVmb3gpLCB3ZSBtdXN0IG1ha2UgYSBjaG9pY2UgYmV0d2VlZW4gYVxuICAgKiBXZWFrTWFwIHdoaWNoIGlzIGNhcGFibGUgb2YgdXNpbmcgYWxsIHZhcmlldGllcyBvZiBob3N0IG9iamVjdHMgYXNcbiAgICoga2V5cyBhbmQgb25lIHdoaWNoIGlzIGNhcGFibGUgb2Ygc2FmZWx5IHVzaW5nIHByb3hpZXMgYXMga2V5cy4gU2VlXG4gICAqIGNvbW1lbnRzIGJlbG93IGFib3V0IEhvc3RXZWFrTWFwIGFuZCBEb3VibGVXZWFrTWFwIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uICh3aGljaCBpcyBhIGdsb2JhbCwgbm90IGV4cG9zZWQgdG8gZ3Vlc3RzKSBtYXJrcyBhXG4gICAqIFdlYWtNYXAgYXMgcGVybWl0dGVkIHRvIGRvIHdoYXQgaXMgbmVjZXNzYXJ5IHRvIGluZGV4IGFsbCBob3N0XG4gICAqIG9iamVjdHMsIGF0IHRoZSBjb3N0IG9mIG1ha2luZyBpdCB1bnNhZmUgZm9yIHByb3hpZXMuXG4gICAqXG4gICAqIERvIG5vdCBhcHBseSB0aGlzIGZ1bmN0aW9uIHRvIGFueXRoaW5nIHdoaWNoIGlzIG5vdCBhIGdlbnVpbmVcbiAgICogZnJlc2ggV2Vha01hcC5cbiAgICovXG4gIGZ1bmN0aW9uIHdlYWtNYXBQZXJtaXRIb3N0T2JqZWN0cyhtYXApIHtcbiAgICAvLyBpZGVudGl0eSBvZiBmdW5jdGlvbiB1c2VkIGFzIGEgc2VjcmV0IC0tIGdvb2QgZW5vdWdoIGFuZCBjaGVhcFxuICAgIGlmIChtYXAucGVybWl0SG9zdE9iamVjdHNfX18pIHtcbiAgICAgIG1hcC5wZXJtaXRIb3N0T2JqZWN0c19fXyh3ZWFrTWFwUGVybWl0SG9zdE9iamVjdHMpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHNlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZXMud2Vha01hcFBlcm1pdEhvc3RPYmplY3RzID0gd2Vha01hcFBlcm1pdEhvc3RPYmplY3RzO1xuICB9XG5cbiAgLy8gSUUgMTEgaGFzIG5vIFByb3h5IGJ1dCBoYXMgYSBicm9rZW4gV2Vha01hcCBzdWNoIHRoYXQgd2UgbmVlZCB0byBwYXRjaFxuICAvLyBpdCB1c2luZyBEb3VibGVXZWFrTWFwOyB0aGlzIGZsYWcgdGVsbHMgRG91YmxlV2Vha01hcCBzby5cbiAgdmFyIGRvdWJsZVdlYWtNYXBDaGVja1NpbGVudEZhaWx1cmUgPSBmYWxzZTtcblxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgZ29vZC1lbm91Z2ggV2Vha01hcCBpbXBsZW1lbnRhdGlvbiwgYW5kIGlmIHNvXG4gIC8vIGV4aXQgd2l0aG91dCByZXBsYWNpbmcgaXQuXG4gIGlmICh0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBIb3N0V2Vha01hcCA9IFdlYWtNYXA7XG4gICAgLy8gVGhlcmUgaXMgYSBXZWFrTWFwIC0tIGlzIGl0IGdvb2QgZW5vdWdoP1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgLy8gV2UncmUgbm93ICphc3N1bWluZyBub3QqLCBiZWNhdXNlIGFzIG9mIHRoaXMgd3JpdGluZyAoMjAxMy0wNS0wNilcbiAgICAgIC8vIEZpcmVmb3gncyBXZWFrTWFwcyBoYXZlIGEgbWlzY2VsbGFueSBvZiBvYmplY3RzIHRoZXkgd29uJ3QgYWNjZXB0LCBhbmRcbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gbWFrZSBhbiBleGhhdXN0aXZlIGxpc3QsIGFuZCB0ZXN0aW5nIGZvciBqdXN0IG9uZVxuICAgICAgLy8gd2lsbCBiZSBhIHByb2JsZW0gaWYgdGhhdCBvbmUgaXMgZml4ZWQgYWxvbmUgKGFzIHRoZXkgZGlkIGZvciBFdmVudCkuXG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgcGxhdGZvcm0gdGhhdCB3ZSAqY2FuKiByZWxpYWJseSB0ZXN0IG9uLCBoZXJlJ3MgaG93IHRvXG4gICAgICAvLyBkbyBpdDpcbiAgICAgIC8vICB2YXIgcHJvYmxlbWF0aWMgPSAuLi4gO1xuICAgICAgLy8gIHZhciB0ZXN0SG9zdE1hcCA9IG5ldyBIb3N0V2Vha01hcCgpO1xuICAgICAgLy8gIHRyeSB7XG4gICAgICAvLyAgICB0ZXN0SG9zdE1hcC5zZXQocHJvYmxlbWF0aWMsIDEpOyAgLy8gRmlyZWZveCAyMCB3aWxsIHRocm93IGhlcmVcbiAgICAgIC8vICAgIGlmICh0ZXN0SG9zdE1hcC5nZXQocHJvYmxlbWF0aWMpID09PSAxKSB7XG4gICAgICAvLyAgICAgIHJldHVybjtcbiAgICAgIC8vICAgIH1cbiAgICAgIC8vICB9IGNhdGNoIChlKSB7fVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFIDExIGJ1ZzogV2Vha01hcHMgc2lsZW50bHkgZmFpbCB0byBzdG9yZSBmcm96ZW4gb2JqZWN0cy5cbiAgICAgIHZhciB0ZXN0TWFwID0gbmV3IEhvc3RXZWFrTWFwKCk7XG4gICAgICB2YXIgdGVzdE9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgICAgdGVzdE1hcC5zZXQodGVzdE9iamVjdCwgMSk7XG4gICAgICBpZiAodGVzdE1hcC5nZXQodGVzdE9iamVjdCkgIT09IDEpIHtcbiAgICAgICAgZG91YmxlV2Vha01hcENoZWNrU2lsZW50RmFpbHVyZSA9IHRydWU7XG4gICAgICAgIC8vIEZhbGwgdGhyb3VnaCB0byBpbnN0YWxsaW5nIG91ciBXZWFrTWFwLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBnb3BuID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gIHZhciBkZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICB2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuICAvKipcbiAgICogU2VjdXJpdHkgZGVwZW5kcyBvbiBISURERU5fTkFNRSBiZWluZyBib3RoIDxpPnVuZ3Vlc3NhYmxlPC9pPiBhbmRcbiAgICogPGk+dW5kaXNjb3ZlcmFibGU8L2k+IGJ5IHVudHJ1c3RlZCBjb2RlLlxuICAgKlxuICAgKiA8cD5HaXZlbiB0aGUga25vd24gd2Vha25lc3NlcyBvZiBNYXRoLnJhbmRvbSgpIG9uIGV4aXN0aW5nXG4gICAqIGJyb3dzZXJzLCBpdCBkb2VzIG5vdCBnZW5lcmF0ZSB1bmd1ZXNzYWJpbGl0eSB3ZSBjYW4gYmUgY29uZmlkZW50XG4gICAqIG9mLlxuICAgKlxuICAgKiA8cD5JdCBpcyB0aGUgbW9ua2V5IHBhdGNoaW5nIGxvZ2ljIGluIHRoaXMgZmlsZSB0aGF0IGlzIGludGVuZGVkXG4gICAqIHRvIGVuc3VyZSB1bmRpc2NvdmVyYWJpbGl0eS4gVGhlIGJhc2ljIGlkZWEgaXMgdGhhdCB0aGVyZSBhcmVcbiAgICogdGhyZWUgZnVuZGFtZW50YWwgbWVhbnMgb2YgZGlzY292ZXJpbmcgcHJvcGVydGllcyBvZiBhbiBvYmplY3Q6XG4gICAqIFRoZSBmb3IvaW4gbG9vcCwgT2JqZWN0LmtleXMoKSwgYW5kIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCksXG4gICAqIGFzIHdlbGwgYXMgc29tZSBwcm9wb3NlZCBFUzYgZXh0ZW5zaW9ucyB0aGF0IGFwcGVhciBvbiBvdXJcbiAgICogd2hpdGVsaXN0LiBUaGUgZmlyc3QgdHdvIG9ubHkgZGlzY292ZXIgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLCBhbmRcbiAgICogd2Ugb25seSB1c2UgSElEREVOX05BTUUgdG8gbmFtZSBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5LCBzbyB0aGVcbiAgICogb25seSByZW1haW5pbmcgdGhyZWF0IHNob3VsZCBiZSBnZXRPd25Qcm9wZXJ0eU5hbWVzIGFuZCBzb21lXG4gICAqIHByb3Bvc2VkIEVTNiBleHRlbnNpb25zIHRoYXQgYXBwZWFyIG9uIG91ciB3aGl0ZWxpc3QuIFdlIG1vbmtleVxuICAgKiBwYXRjaCB0aGVtIHRvIHJlbW92ZSBISURERU5fTkFNRSBmcm9tIHRoZSBsaXN0IG9mIHByb3BlcnRpZXMgdGhleVxuICAgKiByZXR1cm5zLlxuICAgKlxuICAgKiA8cD5UT0RPKGVyaWdodHMpOiBPbiBhIHBsYXRmb3JtIHdpdGggYnVpbHQtaW4gUHJveGllcywgcHJveGllc1xuICAgKiBjb3VsZCBiZSB1c2VkIHRvIHRyYXAgYW5kIHRoZXJlYnkgZGlzY292ZXIgdGhlIEhJRERFTl9OQU1FLCBzbyB3ZVxuICAgKiBuZWVkIHRvIG1vbmtleSBwYXRjaCBQcm94eS5jcmVhdGUsIFByb3h5LmNyZWF0ZUZ1bmN0aW9uLCBldGMsIGluXG4gICAqIG9yZGVyIHRvIHdyYXAgdGhlIHByb3ZpZGVkIGhhbmRsZXIgd2l0aCB0aGUgcmVhbCBoYW5kbGVyIHdoaWNoXG4gICAqIGZpbHRlcnMgb3V0IGFsbCB0cmFwcyB1c2luZyBISURERU5fTkFNRS5cbiAgICpcbiAgICogPHA+VE9ETyhlcmlnaHRzKTogUmV2aXNpdCBNaWtlIFN0YXkncyBzdWdnZXN0aW9uIHRoYXQgd2UgdXNlIGFuXG4gICAqIGVuY2Fwc3VsYXRlZCBmdW5jdGlvbiBhdCBhIG5vdC1uZWNlc3NhcmlseS1zZWNyZXQgbmFtZSwgd2hpY2hcbiAgICogdXNlcyB0aGUgU3RpZWdsZXIgc2hhcmVkLXN0YXRlIHJpZ2h0cyBhbXBsaWZpY2F0aW9uIHBhdHRlcm4gdG9cbiAgICogcmV2ZWFsIHRoZSBhc3NvY2lhdGVkIHZhbHVlIG9ubHkgdG8gdGhlIFdlYWtNYXAgaW4gd2hpY2ggdGhpcyBrZXlcbiAgICogaXMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgdmFsdWUuIFNpbmNlIG9ubHkgdGhlIGtleSByZXRhaW5zIHRoZVxuICAgKiBmdW5jdGlvbiwgdGhlIGZ1bmN0aW9uIGNhbiBhbHNvIHJlbWVtYmVyIHRoZSBrZXkgd2l0aG91dCBjYXVzaW5nXG4gICAqIGxlYWthZ2Ugb2YgdGhlIGtleSwgc28gdGhpcyBkb2Vzbid0IHZpb2xhdGUgb3VyIGdlbmVyYWwgZ2NcbiAgICogZ29hbHMuIEluIGFkZGl0aW9uLCBiZWNhdXNlIHRoZSBuYW1lIG5lZWQgbm90IGJlIGEgZ3VhcmRlZFxuICAgKiBzZWNyZXQsIHdlIGNvdWxkIGVmZmljaWVudGx5IGhhbmRsZSBjcm9zcy1mcmFtZSBmcm96ZW4ga2V5cy5cbiAgICovXG4gIHZhciBISURERU5fTkFNRV9QUkVGSVggPSAnd2Vha21hcDonO1xuICB2YXIgSElEREVOX05BTUUgPSBISURERU5fTkFNRV9QUkVGSVggKyAnaWRlbnQ6JyArIE1hdGgucmFuZG9tKCkgKyAnX19fJztcblxuICBpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHR5cGVvZiBVaW50OEFycmF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGFiID0gbmV3IEFycmF5QnVmZmVyKDI1KTtcbiAgICB2YXIgdThzID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXModThzKTtcbiAgICBISURERU5fTkFNRSA9IEhJRERFTl9OQU1FX1BSRUZJWCArICdyYW5kOicgK1xuICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHU4cywgZnVuY3Rpb24odTgpIHtcbiAgICAgICAgcmV0dXJuICh1OCAlIDM2KS50b1N0cmluZygzNik7XG4gICAgICB9KS5qb2luKCcnKSArICdfX18nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb3RIaWRkZW5OYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gIShcbiAgICAgICAgbmFtZS5zdWJzdHIoMCwgSElEREVOX05BTUVfUFJFRklYLmxlbmd0aCkgPT0gSElEREVOX05BTUVfUFJFRklYICYmXG4gICAgICAgIG5hbWUuc3Vic3RyKG5hbWUubGVuZ3RoIC0gMykgPT09ICdfX18nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb25rZXkgcGF0Y2ggZ2V0T3duUHJvcGVydHlOYW1lcyB0byBhdm9pZCByZXZlYWxpbmcgdGhlXG4gICAqIEhJRERFTl9OQU1FLlxuICAgKlxuICAgKiA8cD5UaGUgRVM1LjEgc3BlYyByZXF1aXJlcyBlYWNoIG5hbWUgdG8gYXBwZWFyIG9ubHkgb25jZSwgYnV0IGFzXG4gICAqIG9mIHRoaXMgd3JpdGluZywgdGhpcyByZXF1aXJlbWVudCBpcyBjb250cm92ZXJzaWFsIGZvciBFUzYsIHNvIHdlXG4gICAqIG1hZGUgdGhpcyBjb2RlIHJvYnVzdCBhZ2FpbnN0IHRoaXMgY2FzZS4gSWYgdGhlIHJlc3VsdGluZyBleHRyYVxuICAgKiBzZWFyY2ggdHVybnMgb3V0IHRvIGJlIGV4cGVuc2l2ZSwgd2UgY2FuIHByb2JhYmx5IHJlbGF4IHRoaXMgb25jZVxuICAgKiBFUzYgaXMgYWRlcXVhdGVseSBzdXBwb3J0ZWQgb24gYWxsIG1ham9yIGJyb3dzZXJzLCBpZmYgbm8gYnJvd3NlclxuICAgKiB2ZXJzaW9ucyB3ZSBzdXBwb3J0IGF0IHRoYXQgdGltZSBoYXZlIHJlbGF4ZWQgdGhpcyBjb25zdHJhaW50XG4gICAqIHdpdGhvdXQgcHJvdmlkaW5nIGJ1aWx0LWluIEVTNiBXZWFrTWFwcy5cbiAgICovXG4gIGRlZlByb3AoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlOYW1lcycsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmFrZUdldE93blByb3BlcnR5TmFtZXMob2JqKSB7XG4gICAgICByZXR1cm4gZ29wbihvYmopLmZpbHRlcihpc05vdEhpZGRlbk5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGdldFByb3BlcnR5TmFtZXMgaXMgbm90IGluIEVTNSBidXQgaXQgaXMgcHJvcG9zZWQgZm9yIEVTNiBhbmRcbiAgICogZG9lcyBhcHBlYXIgaW4gb3VyIHdoaXRlbGlzdCwgc28gd2UgbmVlZCB0byBjbGVhbiBpdCB0b28uXG4gICAqL1xuICBpZiAoJ2dldFByb3BlcnR5TmFtZXMnIGluIE9iamVjdCkge1xuICAgIHZhciBvcmlnaW5hbEdldFByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0UHJvcGVydHlOYW1lcztcbiAgICBkZWZQcm9wKE9iamVjdCwgJ2dldFByb3BlcnR5TmFtZXMnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmFrZUdldFByb3BlcnR5TmFtZXMob2JqKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEdldFByb3BlcnR5TmFtZXMob2JqKS5maWx0ZXIoaXNOb3RIaWRkZW5OYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiA8cD5UbyB0cmVhdCBvYmplY3RzIGFzIGlkZW50aXR5LWtleXMgd2l0aCByZWFzb25hYmxlIGVmZmljaWVuY3lcbiAgICogb24gRVM1IGJ5IGl0c2VsZiAoaS5lLiwgd2l0aG91dCBhbnkgb2JqZWN0LWtleWVkIGNvbGxlY3Rpb25zKSwgd2VcbiAgICogbmVlZCB0byBhZGQgYSBoaWRkZW4gcHJvcGVydHkgdG8gc3VjaCBrZXkgb2JqZWN0cyB3aGVuIHdlXG4gICAqIGNhbi4gVGhpcyByYWlzZXMgc2V2ZXJhbCBpc3N1ZXM6XG4gICAqIDx1bD5cbiAgICogPGxpPkFycmFuZ2luZyB0byBhZGQgdGhpcyBwcm9wZXJ0eSB0byBvYmplY3RzIGJlZm9yZSB3ZSBsb3NlIHRoZVxuICAgKiAgICAgY2hhbmNlLCBhbmRcbiAgICogPGxpPkhpZGluZyB0aGUgZXhpc3RlbmNlIG9mIHRoaXMgbmV3IHByb3BlcnR5IGZyb20gbW9zdFxuICAgKiAgICAgSmF2YVNjcmlwdCBjb2RlLlxuICAgKiA8bGk+UHJldmVudGluZyA8aT5jZXJ0aWZpY2F0aW9uIHRoZWZ0PC9pPiwgd2hlcmUgb25lIG9iamVjdCBpc1xuICAgKiAgICAgY3JlYXRlZCBmYWxzZWx5IGNsYWltaW5nIHRvIGJlIHRoZSBrZXkgb2YgYW4gYXNzb2NpYXRpb25cbiAgICogICAgIGFjdHVhbGx5IGtleWVkIGJ5IGFub3RoZXIgb2JqZWN0LlxuICAgKiA8bGk+UHJldmVudGluZyA8aT52YWx1ZSB0aGVmdDwvaT4sIHdoZXJlIHVudHJ1c3RlZCBjb2RlIHdpdGhcbiAgICogICAgIGFjY2VzcyB0byBhIGtleSBvYmplY3QgYnV0IG5vdCBhIHdlYWsgbWFwIG5ldmVydGhlbGVzc1xuICAgKiAgICAgb2J0YWlucyBhY2Nlc3MgdG8gdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGF0IGtleSBpbiB0aGF0XG4gICAqICAgICB3ZWFrIG1hcC5cbiAgICogPC91bD5cbiAgICogV2UgZG8gc28gYnlcbiAgICogPHVsPlxuICAgKiA8bGk+TWFraW5nIHRoZSBuYW1lIG9mIHRoZSBoaWRkZW4gcHJvcGVydHkgdW5ndWVzc2FibGUsIHNvIFwiW11cIlxuICAgKiAgICAgaW5kZXhpbmcsIHdoaWNoIHdlIGNhbm5vdCBpbnRlcmNlcHQsIGNhbm5vdCBiZSB1c2VkIHRvIGFjY2Vzc1xuICAgKiAgICAgYSBwcm9wZXJ0eSB3aXRob3V0IGtub3dpbmcgdGhlIG5hbWUuXG4gICAqIDxsaT5NYWtpbmcgdGhlIGhpZGRlbiBwcm9wZXJ0eSBub24tZW51bWVyYWJsZSwgc28gd2UgbmVlZCBub3RcbiAgICogICAgIHdvcnJ5IGFib3V0IGZvci1pbiBsb29wcyBvciB7QGNvZGUgT2JqZWN0LmtleXN9LFxuICAgKiA8bGk+bW9ua2V5IHBhdGNoaW5nIHRob3NlIHJlZmxlY3RpdmUgbWV0aG9kcyB0aGF0IHdvdWxkXG4gICAqICAgICBwcmV2ZW50IGV4dGVuc2lvbnMsIHRvIGFkZCB0aGlzIGhpZGRlbiBwcm9wZXJ0eSBmaXJzdCxcbiAgICogPGxpPm1vbmtleSBwYXRjaGluZyB0aG9zZSBtZXRob2RzIHRoYXQgd291bGQgcmV2ZWFsIHRoaXNcbiAgICogICAgIGhpZGRlbiBwcm9wZXJ0eS5cbiAgICogPC91bD5cbiAgICogVW5mb3J0dW5hdGVseSwgYmVjYXVzZSBvZiBzYW1lLW9yaWdpbiBpZnJhbWVzLCB3ZSBjYW5ub3QgcmVsaWFibHlcbiAgICogYWRkIHRoaXMgaGlkZGVuIHByb3BlcnR5IGJlZm9yZSBhbiBvYmplY3QgYmVjb21lc1xuICAgKiBub24tZXh0ZW5zaWJsZS4gSW5zdGVhZCwgaWYgd2UgZW5jb3VudGVyIGEgbm9uLWV4dGVuc2libGUgb2JqZWN0XG4gICAqIHdpdGhvdXQgYSBoaWRkZW4gcmVjb3JkIHRoYXQgd2UgY2FuIGRldGVjdCAod2hldGhlciBvciBub3QgaXQgaGFzXG4gICAqIGEgaGlkZGVuIHJlY29yZCBzdG9yZWQgdW5kZXIgYSBuYW1lIHNlY3JldCB0byB1cyksIHRoZW4gd2UganVzdFxuICAgKiB1c2UgdGhlIGtleSBvYmplY3QgaXRzZWxmIHRvIHJlcHJlc2VudCBpdHMgaWRlbnRpdHkgaW4gYSBicnV0ZVxuICAgKiBmb3JjZSBsZWFreSBtYXAgc3RvcmVkIGluIHRoZSB3ZWFrIG1hcCwgbG9zaW5nIGFsbCB0aGUgYWR2YW50YWdlc1xuICAgKiBvZiB3ZWFrbmVzcyBmb3IgdGhlc2UuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRIaWRkZW5SZWNvcmQoa2V5KSB7XG4gICAgaWYgKGtleSAhPT0gT2JqZWN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBhbiBvYmplY3Q6ICcgKyBrZXkpO1xuICAgIH1cbiAgICB2YXIgaGlkZGVuUmVjb3JkID0ga2V5W0hJRERFTl9OQU1FXTtcbiAgICBpZiAoaGlkZGVuUmVjb3JkICYmIGhpZGRlblJlY29yZC5rZXkgPT09IGtleSkgeyByZXR1cm4gaGlkZGVuUmVjb3JkOyB9XG4gICAgaWYgKCFpc0V4dGVuc2libGUoa2V5KSkge1xuICAgICAgLy8gV2VhayBtYXAgbXVzdCBicnV0ZSBmb3JjZSwgYXMgZXhwbGFpbmVkIGluIGRvYy1jb21tZW50IGFib3ZlLlxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgaGlkZGVuUmVjb3JkIGFuZCB0aGUga2V5IHBvaW50IGRpcmVjdGx5IGF0IGVhY2ggb3RoZXIsIHZpYVxuICAgIC8vIHRoZSBcImtleVwiIGFuZCBISURERU5fTkFNRSBwcm9wZXJ0aWVzIHJlc3BlY3RpdmVseS4gVGhlIGtleVxuICAgIC8vIGZpZWxkIGlzIGZvciBxdWlja2x5IHZlcmlmeWluZyB0aGF0IHRoaXMgaGlkZGVuIHJlY29yZCBpcyBhblxuICAgIC8vIG93biBwcm9wZXJ0eSwgbm90IGEgaGlkZGVuIHJlY29yZCBmcm9tIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG4gICAgLy9cbiAgICAvLyBOT1RFOiBCZWNhdXNlIHRoaXMgV2Vha01hcCBlbXVsYXRpb24gaXMgbWVhbnQgb25seSBmb3Igc3lzdGVtcyBsaWtlXG4gICAgLy8gU0VTIHdoZXJlIE9iamVjdC5wcm90b3R5cGUgaXMgZnJvemVuIHdpdGhvdXQgYW55IG51bWVyaWNcbiAgICAvLyBwcm9wZXJ0aWVzLCBpdCBpcyBvayB0byB1c2UgYW4gb2JqZWN0IGxpdGVyYWwgZm9yIHRoZSBoaWRkZW5SZWNvcmQuXG4gICAgLy8gVGhpcyBoYXMgdHdvIGFkdmFudGFnZXM6XG4gICAgLy8gKiBJdCBpcyBtdWNoIGZhc3RlciBpbiBhIHBlcmZvcm1hbmNlIGNyaXRpY2FsIHBsYWNlXG4gICAgLy8gKiBJdCBhdm9pZHMgcmVseWluZyBvbiBPYmplY3QuY3JlYXRlKG51bGwpLCB3aGljaCBoYWQgYmVlblxuICAgIC8vICAgcHJvYmxlbWF0aWMgb24gQ2hyb21lIDI4LjAuMTQ4MC4wLiBTZWVcbiAgICAvLyAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWNhamEvaXNzdWVzL2RldGFpbD9pZD0xNjg3XG4gICAgaGlkZGVuUmVjb3JkID0geyBrZXk6IGtleSB9O1xuXG4gICAgLy8gV2hlbiB1c2luZyB0aGlzIFdlYWtNYXAgZW11bGF0aW9uIG9uIHBsYXRmb3JtcyB3aGVyZVxuICAgIC8vIE9iamVjdC5wcm90b3R5cGUgbWlnaHQgbm90IGJlIGZyb3plbiBhbmQgT2JqZWN0LmNyZWF0ZShudWxsKSBpc1xuICAgIC8vIHJlbGlhYmxlLCB1c2UgdGhlIGZvbGxvd2luZyB0d28gY29tbWVudGVkIG91dCBsaW5lcyBpbnN0ZWFkLlxuICAgIC8vIGhpZGRlblJlY29yZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgLy8gaGlkZGVuUmVjb3JkLmtleSA9IGtleTtcblxuICAgIC8vIFBsZWFzZSBjb250YWN0IHVzIGlmIHlvdSBuZWVkIHRoaXMgdG8gd29yayBvbiBwbGF0Zm9ybXMgd2hlcmVcbiAgICAvLyBPYmplY3QucHJvdG90eXBlIG1pZ2h0IG5vdCBiZSBmcm96ZW4gYW5kXG4gICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBtaWdodCBub3QgYmUgcmVsaWFibGUuXG5cbiAgICB0cnkge1xuICAgICAgZGVmUHJvcChrZXksIEhJRERFTl9OQU1FLCB7XG4gICAgICAgIHZhbHVlOiBoaWRkZW5SZWNvcmQsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpZGRlblJlY29yZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gVW5kZXIgc29tZSBjaXJjdW1zdGFuY2VzLCBpc0V4dGVuc2libGUgc2VlbXMgdG8gbWlzcmVwb3J0IHdoZXRoZXJcbiAgICAgIC8vIHRoZSBISURERU5fTkFNRSBjYW4gYmUgZGVmaW5lZC5cbiAgICAgIC8vIFRoZSBjaXJjdW1zdGFuY2VzIGhhdmUgbm90IGJlZW4gaXNvbGF0ZWQsIGJ1dCBhdCBsZWFzdCBhZmZlY3RcbiAgICAgIC8vIE5vZGUuanMgdjAuMTAuMjYgb24gVHJhdmlzQ0kgLyBMaW51eCwgYnV0IG5vdCB0aGUgc2FtZSB2ZXJzaW9uIG9mXG4gICAgICAvLyBOb2RlLmpzIG9uIE9TIFguXG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb25rZXkgcGF0Y2ggb3BlcmF0aW9ucyB0aGF0IHdvdWxkIG1ha2UgdGhlaXIgYXJndW1lbnRcbiAgICogbm9uLWV4dGVuc2libGUuXG4gICAqXG4gICAqIDxwPlRoZSBtb25rZXkgcGF0Y2hlZCB2ZXJzaW9ucyB0aHJvdyBhIFR5cGVFcnJvciBpZiB0aGVpclxuICAgKiBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0LCBzbyBpdCBzaG91bGQgb25seSBiZSBkb25lIHRvIGZ1bmN0aW9uc1xuICAgKiB0aGF0IHNob3VsZCB0aHJvdyBhIFR5cGVFcnJvciBhbnl3YXkgaWYgdGhlaXIgYXJndW1lbnQgaXMgbm90IGFuXG4gICAqIG9iamVjdC5cbiAgICovXG4gIChmdW5jdGlvbigpe1xuICAgIHZhciBvbGRGcmVlemUgPSBPYmplY3QuZnJlZXplO1xuICAgIGRlZlByb3AoT2JqZWN0LCAnZnJlZXplJywge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlkZW50aWZ5aW5nRnJlZXplKG9iaikge1xuICAgICAgICBnZXRIaWRkZW5SZWNvcmQob2JqKTtcbiAgICAgICAgcmV0dXJuIG9sZEZyZWV6ZShvYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBvbGRTZWFsID0gT2JqZWN0LnNlYWw7XG4gICAgZGVmUHJvcChPYmplY3QsICdzZWFsJywge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlkZW50aWZ5aW5nU2VhbChvYmopIHtcbiAgICAgICAgZ2V0SGlkZGVuUmVjb3JkKG9iaik7XG4gICAgICAgIHJldHVybiBvbGRTZWFsKG9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIG9sZFByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuICAgIGRlZlByb3AoT2JqZWN0LCAncHJldmVudEV4dGVuc2lvbnMnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaWRlbnRpZnlpbmdQcmV2ZW50RXh0ZW5zaW9ucyhvYmopIHtcbiAgICAgICAgZ2V0SGlkZGVuUmVjb3JkKG9iaik7XG4gICAgICAgIHJldHVybiBvbGRQcmV2ZW50RXh0ZW5zaW9ucyhvYmopO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGNvbnN0RnVuYyhmdW5jKSB7XG4gICAgZnVuYy5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKGZ1bmMpO1xuICB9XG5cbiAgdmFyIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nRG9uZSA9IGZhbHNlO1xuICBmdW5jdGlvbiBjYWxsZWRBc0Z1bmN0aW9uV2FybmluZygpIHtcbiAgICAvLyBGdXR1cmUgRVM2IFdlYWtNYXAgaXMgY3VycmVudGx5ICgyMDEzLTA5LTEwKSBleHBlY3RlZCB0byByZWplY3QgV2Vha01hcCgpXG4gICAgLy8gYnV0IHdlIHVzZWQgdG8gcGVybWl0IGl0IGFuZCBkbyBpdCBvdXJzZWx2ZXMsIHNvIHdhcm4gb25seS5cbiAgICBpZiAoIWNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nRG9uZSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nRG9uZSA9IHRydWU7XG4gICAgICBjb25zb2xlLndhcm4oJ1dlYWtNYXAgc2hvdWxkIGJlIGludm9rZWQgYXMgbmV3IFdlYWtNYXAoKSwgbm90ICcgK1xuICAgICAgICAgICdXZWFrTWFwKCkuIFRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiB0aGUgZnV0dXJlLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBuZXh0SWQgPSAwO1xuXG4gIHZhciBPdXJXZWFrTWFwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE91cldlYWtNYXApKSB7ICAvLyBhcHByb3hpbWF0ZSB0ZXN0IGZvciBuZXcgLi4uKClcbiAgICAgIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIGN1cnJlbnRseSAoMTIvMjUvMjAxMikgbmV2ZXIgZW5jb3VudGVyaW5nIGFueSBwcmVtYXR1cmVseVxuICAgIC8vIG5vbi1leHRlbnNpYmxlIGtleXMuXG4gICAgdmFyIGtleXMgPSBbXTsgLy8gYnJ1dGUgZm9yY2UgZm9yIHByZW1hdHVyZWx5IG5vbi1leHRlbnNpYmxlIGtleXMuXG4gICAgdmFyIHZhbHVlcyA9IFtdOyAvLyBicnV0ZSBmb3JjZSBmb3IgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gICAgdmFyIGlkID0gbmV4dElkKys7XG5cbiAgICBmdW5jdGlvbiBnZXRfX18oa2V5LCBvcHRfZGVmYXVsdCkge1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgdmFyIGhpZGRlblJlY29yZCA9IGdldEhpZGRlblJlY29yZChrZXkpO1xuICAgICAgaWYgKGhpZGRlblJlY29yZCkge1xuICAgICAgICByZXR1cm4gaWQgaW4gaGlkZGVuUmVjb3JkID8gaGlkZGVuUmVjb3JkW2lkXSA6IG9wdF9kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB2YWx1ZXNbaW5kZXhdIDogb3B0X2RlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzX19fKGtleSkge1xuICAgICAgdmFyIGhpZGRlblJlY29yZCA9IGdldEhpZGRlblJlY29yZChrZXkpO1xuICAgICAgaWYgKGhpZGRlblJlY29yZCkge1xuICAgICAgICByZXR1cm4gaWQgaW4gaGlkZGVuUmVjb3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtleXMuaW5kZXhPZihrZXkpID49IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0X19fKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBpbmRleDtcbiAgICAgIHZhciBoaWRkZW5SZWNvcmQgPSBnZXRIaWRkZW5SZWNvcmQoa2V5KTtcbiAgICAgIGlmIChoaWRkZW5SZWNvcmQpIHtcbiAgICAgICAgaGlkZGVuUmVjb3JkW2lkXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2luY2Ugc29tZSBicm93c2VycyBwcmVlbXB0aXZlbHkgdGVybWluYXRlIHNsb3cgdHVybnMgYnV0XG4gICAgICAgICAgLy8gdGhlbiBjb250aW51ZSBjb21wdXRpbmcgd2l0aCBwcmVzdW1hYmx5IGNvcnJ1cHRlZCBoZWFwXG4gICAgICAgICAgLy8gc3RhdGUsIHdlIGhlcmUgZGVmZW5zaXZlbHkgZ2V0IGtleXMubGVuZ3RoIGZpcnN0IGFuZCB0aGVuXG4gICAgICAgICAgLy8gdXNlIGl0IHRvIHVwZGF0ZSBib3RoIHRoZSB2YWx1ZXMgYW5kIGtleXMgYXJyYXlzLCBrZWVwaW5nXG4gICAgICAgICAgLy8gdGhlbSBpbiBzeW5jLlxuICAgICAgICAgIGluZGV4ID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC8vIElmIHdlIGNyYXNoIGhlcmUsIHZhbHVlcyB3aWxsIGJlIG9uZSBsb25nZXIgdGhhbiBrZXlzLlxuICAgICAgICAgIGtleXNbaW5kZXhdID0ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVfX18oa2V5KSB7XG4gICAgICB2YXIgaGlkZGVuUmVjb3JkID0gZ2V0SGlkZGVuUmVjb3JkKGtleSk7XG4gICAgICB2YXIgaW5kZXgsIGxhc3RJbmRleDtcbiAgICAgIGlmIChoaWRkZW5SZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIGlkIGluIGhpZGRlblJlY29yZCAmJiBkZWxldGUgaGlkZGVuUmVjb3JkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2Ugc29tZSBicm93c2VycyBwcmVlbXB0aXZlbHkgdGVybWluYXRlIHNsb3cgdHVybnMgYnV0XG4gICAgICAgIC8vIHRoZW4gY29udGludWUgY29tcHV0aW5nIHdpdGggcG90ZW50aWFsbHkgY29ycnVwdGVkIGhlYXBcbiAgICAgICAgLy8gc3RhdGUsIHdlIGhlcmUgZGVmZW5zaXZlbHkgZ2V0IGtleXMubGVuZ3RoIGZpcnN0IGFuZCB0aGVuIHVzZVxuICAgICAgICAvLyBpdCB0byB1cGRhdGUgYm90aCB0aGUga2V5cyBhbmQgdGhlIHZhbHVlcyBhcnJheSwga2VlcGluZ1xuICAgICAgICAvLyB0aGVtIGluIHN5bmMuIFdlIHVwZGF0ZSB0aGUgdHdvIHdpdGggYW4gb3JkZXIgb2YgYXNzaWdubWVudHMsXG4gICAgICAgIC8vIHN1Y2ggdGhhdCBhbnkgcHJlZml4IG9mIHRoZXNlIGFzc2lnbm1lbnRzIHdpbGwgcHJlc2VydmUgdGhlXG4gICAgICAgIC8vIGtleS92YWx1ZSBjb3JyZXNwb25kZW5jZSwgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgZGVsZXRlLlxuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBuZWVkcyB0byB3b3JrIGNvcnJlY3RseSB3aGVuIGluZGV4ID09PSBsYXN0SW5kZXguXG4gICAgICAgIGxhc3RJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgICAgICAga2V5c1tpbmRleF0gPSB2b2lkIDA7XG4gICAgICAgIC8vIElmIHdlIGNyYXNoIGhlcmUsIHRoZXJlJ3MgYSB2b2lkIDAgaW4gdGhlIGtleXMgYXJyYXksIGJ1dFxuICAgICAgICAvLyBubyBvcGVyYXRpb24gd2lsbCBjYXVzZSBhIFwia2V5cy5pbmRleE9mKHZvaWQgMClcIiwgc2luY2VcbiAgICAgICAgLy8gZ2V0SGlkZGVuUmVjb3JkKHZvaWQgMCkgd2lsbCBhbHdheXMgdGhyb3cgYW4gZXJyb3IgZmlyc3QuXG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZXNbbGFzdEluZGV4XTtcbiAgICAgICAgLy8gSWYgd2UgY3Jhc2ggaGVyZSwgdmFsdWVzW2luZGV4XSBjYW5ub3QgYmUgZm91bmQgaGVyZSxcbiAgICAgICAgLy8gYmVjYXVzZSBrZXlzW2luZGV4XSBpcyB2b2lkIDAuXG4gICAgICAgIGtleXNbaW5kZXhdID0ga2V5c1tsYXN0SW5kZXhdO1xuICAgICAgICAvLyBJZiBpbmRleCA9PT0gbGFzdEluZGV4IGFuZCB3ZSBjcmFzaCBoZXJlLCB0aGVuIGtleXNbaW5kZXhdXG4gICAgICAgIC8vIGlzIHN0aWxsIHZvaWQgMCwgc2luY2UgdGhlIGFsaWFzaW5nIGtpbGxlZCB0aGUgcHJldmlvdXMga2V5LlxuICAgICAgICBrZXlzLmxlbmd0aCA9IGxhc3RJbmRleDtcbiAgICAgICAgLy8gSWYgd2UgY3Jhc2ggaGVyZSwga2V5cyB3aWxsIGJlIG9uZSBzaG9ydGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICB2YWx1ZXMubGVuZ3RoID0gbGFzdEluZGV4O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShPdXJXZWFrTWFwLnByb3RvdHlwZSwge1xuICAgICAgZ2V0X19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoZ2V0X19fKSB9LFxuICAgICAgaGFzX19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoaGFzX19fKSB9LFxuICAgICAgc2V0X19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoc2V0X19fKSB9LFxuICAgICAgZGVsZXRlX19fOiB7IHZhbHVlOiBjb25zdEZ1bmMoZGVsZXRlX19fKSB9XG4gICAgfSk7XG4gIH07XG5cbiAgT3VyV2Vha01hcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUsIHtcbiAgICBnZXQ6IHtcbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJuIHRoZSB2YWx1ZSBtb3N0IHJlY2VudGx5IGFzc29jaWF0ZWQgd2l0aCBrZXksIG9yXG4gICAgICAgKiBvcHRfZGVmYXVsdCBpZiBub25lLlxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSwgb3B0X2RlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X19fKGtleSwgb3B0X2RlZmF1bHQpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIGhhczoge1xuICAgICAgLyoqXG4gICAgICAgKiBJcyB0aGVyZSBhIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBrZXkgaW4gdGhpcyBXZWFrTWFwP1xuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNfX18oa2V5KTtcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBzZXQ6IHtcbiAgICAgIC8qKlxuICAgICAgICogQXNzb2NpYXRlIHZhbHVlIHdpdGgga2V5IGluIHRoaXMgV2Vha01hcCwgb3ZlcndyaXRpbmcgYW55XG4gICAgICAgKiBwcmV2aW91cyBhc3NvY2lhdGlvbiBpZiBwcmVzZW50LlxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0X19fKGtleSwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgICdkZWxldGUnOiB7XG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBhbnkgYXNzb2NpYXRpb24gZm9yIGtleSBpbiB0aGlzIFdlYWtNYXAsIHJldHVybmluZ1xuICAgICAgICogd2hldGhlciB0aGVyZSB3YXMgb25lLlxuICAgICAgICpcbiAgICAgICAqIDxwPk5vdGUgdGhhdCB0aGUgYm9vbGVhbiByZXR1cm4gaGVyZSBkb2VzIG5vdCB3b3JrIGxpa2UgdGhlXG4gICAgICAgKiB7QGNvZGUgZGVsZXRlfSBvcGVyYXRvci4gVGhlIHtAY29kZSBkZWxldGV9IG9wZXJhdG9yIHJldHVybnNcbiAgICAgICAqIHdoZXRoZXIgdGhlIGRlbGV0aW9uIHN1Y2NlZWRzIGF0IGJyaW5naW5nIGFib3V0IGEgc3RhdGUgaW5cbiAgICAgICAqIHdoaWNoIHRoZSBkZWxldGVkIHByb3BlcnR5IGlzIGFic2VudC4gVGhlIHtAY29kZSBkZWxldGV9XG4gICAgICAgKiBvcGVyYXRvciB0aGVyZWZvcmUgcmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSB3YXMgYWxyZWFkeVxuICAgICAgICogYWJzZW50LCB3aGVyZWFzIHRoaXMge0Bjb2RlIGRlbGV0ZX0gbWV0aG9kIHJldHVybnMgZmFsc2UgaWZcbiAgICAgICAqIHRoZSBhc3NvY2lhdGlvbiB3YXMgYWxyZWFkeSBhYnNlbnQuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZV9fXyhrZXkpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZW9mIEhvc3RXZWFrTWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gSWYgd2UgZ290IGhlcmUsIHRoZW4gdGhlIHBsYXRmb3JtIGhhcyBhIFdlYWtNYXAgYnV0IHdlIGFyZSBjb25jZXJuZWRcbiAgICAgIC8vIHRoYXQgaXQgbWF5IHJlZnVzZSB0byBzdG9yZSBzb21lIGtleSB0eXBlcy4gVGhlcmVmb3JlLCBtYWtlIGEgbWFwXG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiB3aGljaCBtYWtlcyB1c2Ugb2YgYm90aCBhcyBwb3NzaWJsZS5cblxuICAgICAgLy8gSW4gdGhpcyBtb2RlIHdlIGFyZSBhbHdheXMgdXNpbmcgZG91YmxlIG1hcHMsIHNvIHdlIGFyZSBub3QgcHJveHktc2FmZS5cbiAgICAgIC8vIFRoaXMgY29tYmluYXRpb24gZG9lcyBub3Qgb2NjdXIgaW4gYW55IGtub3duIGJyb3dzZXIsIGJ1dCB3ZSBoYWQgYmVzdFxuICAgICAgLy8gYmUgc2FmZS5cbiAgICAgIGlmIChkb3VibGVXZWFrTWFwQ2hlY2tTaWxlbnRGYWlsdXJlICYmIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgUHJveHkgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIERvdWJsZVdlYWtNYXAoKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBPdXJXZWFrTWFwKSkgeyAgLy8gYXBwcm94aW1hdGUgdGVzdCBmb3IgbmV3IC4uLigpXG4gICAgICAgICAgY2FsbGVkQXNGdW5jdGlvbldhcm5pbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZWZlcmFibGUsIHRydWx5IHdlYWsgbWFwLlxuICAgICAgICB2YXIgaG1hcCA9IG5ldyBIb3N0V2Vha01hcCgpO1xuXG4gICAgICAgIC8vIE91ciBoaWRkZW4tcHJvcGVydHktYmFzZWQgcHNldWRvLXdlYWstbWFwLiBMYXppbHkgaW5pdGlhbGl6ZWQgaW4gdGhlXG4gICAgICAgIC8vICdzZXQnIGltcGxlbWVudGF0aW9uOyB0aHVzIHdlIGNhbiBhdm9pZCBwZXJmb3JtaW5nIGV4dHJhIGxvb2t1cHMgaWZcbiAgICAgICAgLy8gd2Uga25vdyBhbGwgZW50cmllcyBhY3R1YWxseSBzdG9yZWQgYXJlIGVudGVyZWQgaW4gJ2htYXAnLlxuICAgICAgICB2YXIgb21hcCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBIaWRkZW4tcHJvcGVydHkgbWFwcyBhcmUgbm90IGNvbXBhdGlibGUgd2l0aCBwcm94aWVzIGJlY2F1c2UgcHJveGllc1xuICAgICAgICAvLyBjYW4gb2JzZXJ2ZSB0aGUgaGlkZGVuIG5hbWUgYW5kIGVpdGhlciBhY2NpZGVudGFsbHkgZXhwb3NlIGl0IG9yIGZhaWxcbiAgICAgICAgLy8gdG8gYWxsb3cgdGhlIGhpZGRlbiBwcm9wZXJ0eSB0byBiZSBzZXQuIFRoZXJlZm9yZSwgd2UgZG8gbm90IGFsbG93XG4gICAgICAgIC8vIGFyYml0cmFyeSBXZWFrTWFwcyB0byBzd2l0Y2ggdG8gdXNpbmcgaGlkZGVuIHByb3BlcnRpZXMsIGJ1dCBvbmx5XG4gICAgICAgIC8vIHRob3NlIHdoaWNoIG5lZWQgdGhlIGFiaWxpdHksIGFuZCB1bnByaXZpbGVnZWQgY29kZSBpcyBub3QgYWxsb3dlZFxuICAgICAgICAvLyB0byBzZXQgdGhlIGZsYWcuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIChFeGNlcHQgaW4gZG91YmxlV2Vha01hcENoZWNrU2lsZW50RmFpbHVyZSBtb2RlIGluIHdoaWNoIGNhc2Ugd2VcbiAgICAgICAgLy8gZGlzYWJsZSBwcm94aWVzLilcbiAgICAgICAgdmFyIGVuYWJsZVN3aXRjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRnZXQoa2V5LCBvcHRfZGVmYXVsdCkge1xuICAgICAgICAgIGlmIChvbWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gaG1hcC5oYXMoa2V5KSA/IGhtYXAuZ2V0KGtleSlcbiAgICAgICAgICAgICAgICA6IG9tYXAuZ2V0X19fKGtleSwgb3B0X2RlZmF1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaG1hcC5nZXQoa2V5LCBvcHRfZGVmYXVsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGhhcyhrZXkpIHtcbiAgICAgICAgICByZXR1cm4gaG1hcC5oYXMoa2V5KSB8fCAob21hcCA/IG9tYXAuaGFzX19fKGtleSkgOiBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHNldDtcbiAgICAgICAgaWYgKGRvdWJsZVdlYWtNYXBDaGVja1NpbGVudEZhaWx1cmUpIHtcbiAgICAgICAgICBkc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIWhtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgaWYgKCFvbWFwKSB7IG9tYXAgPSBuZXcgT3VyV2Vha01hcCgpOyB9XG4gICAgICAgICAgICAgIG9tYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGVuYWJsZVN3aXRjaGluZykge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbWFwKSB7IG9tYXAgPSBuZXcgT3VyV2Vha01hcCgpOyB9XG4gICAgICAgICAgICAgICAgb21hcC5zZXRfX18oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRkZWxldGUoa2V5KSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9ICEhaG1hcFsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgICBpZiAob21hcCkgeyByZXR1cm4gb21hcC5kZWxldGVfX18oa2V5KSB8fCByZXN1bHQ7IH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT3VyV2Vha01hcC5wcm90b3R5cGUsIHtcbiAgICAgICAgICBnZXRfX186ICAgIHsgdmFsdWU6IGNvbnN0RnVuYyhkZ2V0KSB9LFxuICAgICAgICAgIGhhc19fXzogICAgeyB2YWx1ZTogY29uc3RGdW5jKGRoYXMpIH0sXG4gICAgICAgICAgc2V0X19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoZHNldCkgfSxcbiAgICAgICAgICBkZWxldGVfX186IHsgdmFsdWU6IGNvbnN0RnVuYyhkZGVsZXRlKSB9LFxuICAgICAgICAgIHBlcm1pdEhvc3RPYmplY3RzX19fOiB7IHZhbHVlOiBjb25zdEZ1bmMoZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gd2Vha01hcFBlcm1pdEhvc3RPYmplY3RzKSB7XG4gICAgICAgICAgICAgIGVuYWJsZVN3aXRjaGluZyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvZ3VzIGNhbGwgdG8gcGVybWl0SG9zdE9iamVjdHNfX18nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBEb3VibGVXZWFrTWFwLnByb3RvdHlwZSA9IE91cldlYWtNYXAucHJvdG90eXBlO1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBEb3VibGVXZWFrTWFwO1xuXG4gICAgICAvLyBkZWZpbmUgLmNvbnN0cnVjdG9yIHRvIGhpZGUgT3VyV2Vha01hcCBjdG9yXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2Vha01hcC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgICAgICAgdmFsdWU6IFdlYWtNYXAsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLCAgLy8gYXMgZGVmYXVsdCAuY29uc3RydWN0b3IgaXNcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGVyZSBpcyBubyBob3N0IFdlYWtNYXAsIHNvIHdlIG11c3QgdXNlIHRoZSBlbXVsYXRpb24uXG5cbiAgICAvLyBFbXVsYXRlZCBXZWFrTWFwcyBhcmUgaW5jb21wYXRpYmxlIHdpdGggbmF0aXZlIHByb3hpZXMgKGJlY2F1c2UgcHJveGllc1xuICAgIC8vIGNhbiBvYnNlcnZlIHRoZSBoaWRkZW4gbmFtZSksIHNvIHdlIG11c3QgZGlzYWJsZSBQcm94eSB1c2FnZSAoaW5cbiAgICAvLyBBcnJheUxpa2UgYW5kIERvbWFkbywgY3VycmVudGx5KS5cbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgUHJveHkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBPdXJXZWFrTWFwO1xuICB9XG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3ZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnd2Vhay1tYXAnKSA6IFdlYWtNYXBcblxudmFyIFdlYkdMRVdTdHJ1Y3QgPSBuZXcgd2Vha01hcCgpXG5cbmZ1bmN0aW9uIGJhc2VOYW1lKGV4dF9uYW1lKSB7XG4gIHJldHVybiBleHRfbmFtZS5yZXBsYWNlKC9eW0EtWl0rXy8sICcnKVxufVxuXG5mdW5jdGlvbiBpbml0V2ViR0xFVyhnbCkge1xuICB2YXIgc3RydWN0ID0gV2ViR0xFV1N0cnVjdC5nZXQoZ2wpXG4gIGlmKHN0cnVjdCkge1xuICAgIHJldHVybiBzdHJ1Y3RcbiAgfVxuICB2YXIgZXh0ZW5zaW9ucyA9IHt9XG4gIHZhciBzdXBwb3J0ZWQgPSBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKClcbiAgZm9yKHZhciBpPTA7IGk8c3VwcG9ydGVkLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGV4dE5hbWUgPSBzdXBwb3J0ZWRbaV1cblxuICAgIC8vU2tpcCBNT1pfIGV4dGVuc2lvbnNcbiAgICBpZihleHROYW1lLmluZGV4T2YoJ01PWl8nKSA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgdmFyIGV4dCA9IGdsLmdldEV4dGVuc2lvbihzdXBwb3J0ZWRbaV0pXG4gICAgaWYoIWV4dCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZXh0ZW5zaW9uc1tleHROYW1lXSA9IGV4dFxuICAgICAgdmFyIGJhc2UgPSBiYXNlTmFtZShleHROYW1lKVxuICAgICAgaWYoYmFzZSA9PT0gZXh0TmFtZSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZXh0TmFtZSA9IGJhc2VcbiAgICB9XG4gIH1cbiAgV2ViR0xFV1N0cnVjdC5zZXQoZ2wsIGV4dGVuc2lvbnMpXG4gIHJldHVybiBleHRlbnNpb25zXG59XG5tb2R1bGUuZXhwb3J0cyA9IGluaXRXZWJHTEVXIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIG1ha2VHYW1lU2hlbGwgPSByZXF1aXJlKFwiZ2FtZS1zaGVsbFwiKVxudmFyIHdlYmdsZXcgPSByZXF1aXJlKFwid2ViZ2xld1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVHTFNoZWxsKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgXG4gIHZhciBleHRlbnNpb25zID0gb3B0aW9ucy5leHRlbnNpb25zIHx8IFtdXG5cbiAgLy9GaXJzdCBjcmVhdGUgc2hlbGxcbiAgdmFyIHNoZWxsID0gbWFrZUdhbWVTaGVsbChvcHRpb25zKVxuICB2YXIgc2NhbGUgPSBzaGVsbC5zY2FsZSB8fCAxXG4gIHZhciBjb250ZXh0T3B0aW9ucyA9IG9wdGlvbnMuZ2xPcHRpb25zXG5cbiAgc2hlbGwub24oXCJpbml0XCIsIGZ1bmN0aW9uIGluaXRHTE5vdygpIHtcbiAgXG4gICAgLy9DcmVhdGUgY2FudmFzXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICBcbiAgICAvL1RyeSBpbml0aWFsaXppbmcgV2ViR0xcbiAgICB2YXIgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIsIGNvbnRleHRPcHRpb25zKSB8fCBcbiAgICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiLCBjb250ZXh0T3B0aW9ucylcbiAgICBpZighZ2wpIHtcbiAgICAgIHNoZWxsLmVtaXQoXCJnbC1lcnJvclwiLCBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTFwiKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICAvL0NoZWNrIGV4dGVuc2lvbnNcbiAgICB2YXIgZXh0ID0gd2ViZ2xldyhnbClcbiAgICBmb3IodmFyIGk9MDsgaTxleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZighKGV4dGVuc2lvbnNbaV0gaW4gZXh0KSkge1xuICAgICAgICBzaGVsbC5lbWl0KFwiZ2wtZXJyb3JcIiwgbmV3IEVycm9yKFwiTWlzc2luZyBleHRlbnNpb246IFwiICsgZXh0ZW5zaW9uc1tpXSkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vU2V0IGNhbnZhcyBzdHlsZVxuICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIlxuICAgIGNhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiXG4gICAgc2hlbGwuZWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpXG5cbiAgICAvL0FkZCB2YXJpYWJsZXMgdG8gZ2FtZS1zaGVsbFxuICAgIHNoZWxsLmNhbnZhcyA9IGNhbnZhc1xuICAgIHNoZWxsLmdsID0gZ2xcblxuICAgIC8vTG9hZCB3aWR0aC9oZWlnaHRcbiAgICByZXNpemUoKVxuXG4gICAgLy9Mb2FkIGRlZmF1bHQgcGFyYW1ldGVyc1xuICAgIHNoZWxsLmNsZWFyRmxhZ3MgPSBvcHRpb25zLmNsZWFyRmxhZ3MgPT09IHVuZGVmaW5lZCA/IChnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCkgOiBvcHRpb25zLmNsZWFyRmxhZ3NcbiAgICBzaGVsbC5jbGVhckNvbG9yID0gb3B0aW9ucy5jbGVhckNvbG9yIHx8IFswLDAsMCwwXVxuICAgIHNoZWxsLmNsZWFyRGVwdGggPSBvcHRpb25zLmNsZWFyRGVwdGggfHwgMS4wXG4gICAgc2hlbGwuY2xlYXJTdGVuY2lsID0gb3B0aW9ucy5jbGVhclN0ZW5jaWwgfHwgMFxuXG4gICAgc2hlbGwub24oXCJyZXNpemVcIiwgcmVzaXplKVxuXG4gICAgLy9Ib29rIHJlbmRlciBldmVudFxuICAgIHNoZWxsLm9uKFwicmVuZGVyXCIsIGZ1bmN0aW9uIHJlbmRlckdMTm93KHQpIHtcbiAgICBcbiAgICAgIC8vQmluZCBkZWZhdWx0IGZyYW1lYnVmZmVyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXG4gICAgICBcbiAgICAgIC8vU2V0IHZpZXdwb3J0XG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCAoc2hlbGwuX3dpZHRoIC8gc2NhbGUpfDAsIChzaGVsbC5faGVpZ2h0IC8gc2NhbGUpfDApXG5cbiAgICAgIC8vQ2xlYXIgYnVmZmVyc1xuICAgICAgaWYoc2hlbGwuY2xlYXJGbGFncyAmIGdsLlNURU5DSUxfQlVGRkVSX0JJVCkge1xuICAgICAgICBnbC5jbGVhclN0ZW5jaWwoc2hlbGwuY2xlYXJTdGVuY2lsKVxuICAgICAgfVxuICAgICAgaWYoc2hlbGwuY2xlYXJGbGFncyAmIGdsLkNPTE9SX0JVRkZFUl9CSVQpIHtcbiAgICAgICAgZ2wuY2xlYXJDb2xvcihzaGVsbC5jbGVhckNvbG9yWzBdLCBzaGVsbC5jbGVhckNvbG9yWzFdLCBzaGVsbC5jbGVhckNvbG9yWzJdLCBzaGVsbC5jbGVhckNvbG9yWzNdKVxuICAgICAgfVxuICAgICAgaWYoc2hlbGwuY2xlYXJGbGFncyAmIGdsLkRFUFRIX0JVRkZFUl9CSVQpIHtcbiAgICAgICAgZ2wuY2xlYXJEZXB0aChzaGVsbC5jbGVhckRlcHRoKVxuICAgICAgfVxuICAgICAgaWYoc2hlbGwuY2xlYXJGbGFncykge1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLlNURU5DSUxfQlVGRkVSX0JJVClcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vUmVuZGVyIGZyYW1lXG4gICAgICBzaGVsbC5lbWl0KFwiZ2wtcmVuZGVyXCIsIHQpXG4gICAgfSlcbiAgICBcbiAgICAvL1dlYkdMIGluaXRpYWxpemVkXG4gICAgc2hlbGwuZW1pdChcImdsLWluaXRcIilcbiAgfSlcblxuICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgdmFyIG53ID0gKHNoZWxsLl93aWR0aC9zY2FsZSl8MFxuICAgIHZhciBuaCA9IChzaGVsbC5faGVpZ2h0L3NjYWxlKXwwXG4gICAgc2hlbGwuY2FudmFzLndpZHRoID0gbndcbiAgICBzaGVsbC5jYW52YXMuaGVpZ2h0ID0gbmhcbiAgICBzaGVsbC5jYW52YXMuc3R5bGUud2lkdGggPSBzaGVsbC5fd2lkdGggKyAncHgnXG4gICAgc2hlbGwuY2FudmFzLnN0eWxlLmhlaWdodCA9IHNoZWxsLl9oZWlnaHQgKyAncHgnXG4gICAgc2hlbGwuZW1pdChcImdsLXJlc2l6ZVwiLCBudywgbmgpXG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2hlbGwsICdzY2FsZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNjYWxlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKF9zY2FsZSkge1xuICAgICAgX3NjYWxlID0gK19zY2FsZVxuICAgICAgaWYoKF9zY2FsZSA8PSAwKSB8fCBpc05hTihfc2NhbGUpIHx8IChzY2FsZSA9PT0gX3NjYWxlKSkge1xuICAgICAgICByZXR1cm4gc2NhbGVcbiAgICAgIH1cbiAgICAgIHNjYWxlID0gX3NjYWxlXG4gICAgICByZXNpemUoKVxuICAgICAgcmV0dXJuIHNjYWxlXG4gICAgfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaGVsbCwgXCJ3aWR0aFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoc2hlbGwuX3dpZHRoIC8gc2NhbGUpfDBcbiAgICB9XG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNoZWxsLCBcImhlaWdodFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoc2hlbGwuX2hlaWdodCAvIHNjYWxlKXwwXG4gICAgfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaGVsbCwgXCJtb3VzZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbc2hlbGwubW91c2VYL3NjYWxlLCBzaGVsbC5tb3VzZVkvc2NhbGVdXG4gICAgfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaGVsbCwgXCJwcmV2TW91c2VcIiwge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3NoZWxsLnByZXZNb3VzZVgvc2NhbGUsIHNoZWxsLnByZXZNb3VzZVkvc2NhbGVdXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBzaGVsbFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUdMU2hlbGwiLCJpZih0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiKSB7XG4gIGlmKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIH1cbiAgfSBlbHNlIGlmKHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdygpIH1cbiAgfVxufSBlbHNlIGlmKERhdGUubm93KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRGF0ZS5ub3dcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIH1cbn1cbiIsIi8vQWRhcHRlZCBmcm9tIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1JlZmVyZW5jZS9FdmVudHMvd2hlZWw/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPURPTSUyRk1vemlsbGFfZXZlbnRfcmVmZXJlbmNlJTJGd2hlZWxcblxudmFyIHByZWZpeCA9IFwiXCIsIF9hZGRFdmVudExpc3RlbmVyLCBvbndoZWVsLCBzdXBwb3J0O1xuXG4vLyBkZXRlY3QgZXZlbnQgbW9kZWxcbmlmICggd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gIF9hZGRFdmVudExpc3RlbmVyID0gXCJhZGRFdmVudExpc3RlbmVyXCI7XG59IGVsc2Uge1xuICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYXR0YWNoRXZlbnRcIjtcbiAgcHJlZml4ID0gXCJvblwiO1xufVxuXG4vLyBkZXRlY3QgYXZhaWxhYmxlIHdoZWVsIGV2ZW50XG5zdXBwb3J0ID0gXCJvbndoZWVsXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSA/IFwid2hlZWxcIiA6IC8vIE1vZGVybiBicm93c2VycyBzdXBwb3J0IFwid2hlZWxcIlxuICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gXCJtb3VzZXdoZWVsXCIgOiAvLyBXZWJraXQgYW5kIElFIHN1cHBvcnQgYXQgbGVhc3QgXCJtb3VzZXdoZWVsXCJcbiAgICAgICAgICBcIkRPTU1vdXNlU2Nyb2xsXCI7IC8vIGxldCdzIGFzc3VtZSB0aGF0IHJlbWFpbmluZyBicm93c2VycyBhcmUgb2xkZXIgRmlyZWZveFxuXG5mdW5jdGlvbiBfYWRkV2hlZWxMaXN0ZW5lciggZWxlbSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSApIHtcbiAgZWxlbVsgX2FkZEV2ZW50TGlzdGVuZXIgXSggcHJlZml4ICsgZXZlbnROYW1lLCBzdXBwb3J0ID09IFwid2hlZWxcIiA/IGNhbGxiYWNrIDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG4gICAgIW9yaWdpbmFsRXZlbnQgJiYgKCBvcmlnaW5hbEV2ZW50ID0gd2luZG93LmV2ZW50ICk7XG5cbiAgICAvLyBjcmVhdGUgYSBub3JtYWxpemVkIGV2ZW50IG9iamVjdFxuICAgIHZhciBldmVudCA9IHtcbiAgICAgIC8vIGtlZXAgYSByZWYgdG8gdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgIHRhcmdldDogb3JpZ2luYWxFdmVudC50YXJnZXQgfHwgb3JpZ2luYWxFdmVudC5zcmNFbGVtZW50LFxuICAgICAgdHlwZTogXCJ3aGVlbFwiLFxuICAgICAgZGVsdGFNb2RlOiBvcmlnaW5hbEV2ZW50LnR5cGUgPT0gXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIgPyAwIDogMSxcbiAgICAgIGRlbHRhWDogMCxcbiAgICAgIGRlbGF0WjogMCxcbiAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCA/XG4gICAgICAgICAgb3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBjYWxjdWxhdGUgZGVsdGFZIChhbmQgZGVsdGFYKSBhY2NvcmRpbmcgdG8gdGhlIGV2ZW50XG4gICAgaWYgKCBzdXBwb3J0ID09IFwibW91c2V3aGVlbFwiICkge1xuICAgICAgZXZlbnQuZGVsdGFZID0gLSAxLzQwICogb3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xuICAgICAgLy8gV2Via2l0IGFsc28gc3VwcG9ydCB3aGVlbERlbHRhWFxuICAgICAgb3JpZ2luYWxFdmVudC53aGVlbERlbHRhWCAmJiAoIGV2ZW50LmRlbHRhWCA9IC0gMS80MCAqIG9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YVggKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQuZGVsdGFZID0gb3JpZ2luYWxFdmVudC5kZXRhaWw7XG4gICAgfVxuXG4gICAgLy8gaXQncyB0aW1lIHRvIGZpcmUgdGhlIGNhbGxiYWNrXG4gICAgcmV0dXJuIGNhbGxiYWNrKCBldmVudCApO1xuICB9LCB1c2VDYXB0dXJlIHx8IGZhbHNlICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIGVsZW0sIGNhbGxiYWNrLCB1c2VDYXB0dXJlICkge1xuICBfYWRkV2hlZWxMaXN0ZW5lciggZWxlbSwgc3VwcG9ydCwgY2FsbGJhY2ssIHVzZUNhcHR1cmUgKTtcblxuICAvLyBoYW5kbGUgTW96TW91c2VQaXhlbFNjcm9sbCBpbiBvbGRlciBGaXJlZm94XG4gIGlmKCBzdXBwb3J0ID09IFwiRE9NTW91c2VTY3JvbGxcIiApIHtcbiAgICBfYWRkV2hlZWxMaXN0ZW5lciggZWxlbSwgXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsIGNhbGxiYWNrLCB1c2VDYXB0dXJlICk7XG4gIH1cbn07IiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiBcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiBcbi8vIE1JVCBsaWNlbnNlXG52YXIgbGFzdFRpbWUgPSAwO1xudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbn1cblxuaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCBcbiAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG5pZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBjb21waWxlU2VhcmNoKGZ1bmNOYW1lLCBwcmVkaWNhdGUsIHJldmVyc2VkLCBleHRyYUFyZ3MsIHVzZU5kYXJyYXksIGVhcmx5T3V0KSB7XG4gIHZhciBjb2RlID0gW1xuICAgIFwiZnVuY3Rpb24gXCIsIGZ1bmNOYW1lLCBcIihhLGwsaCxcIiwgZXh0cmFBcmdzLmpvaW4oXCIsXCIpLCAgXCIpe1wiLFxuZWFybHlPdXQgPyBcIlwiIDogXCJ2YXIgaT1cIiwgKHJldmVyc2VkID8gXCJsLTFcIiA6IFwiaCsxXCIpLFxuXCI7d2hpbGUobDw9aCl7XFxcbnZhciBtPShsK2gpPj4+MSx4PWFcIiwgdXNlTmRhcnJheSA/IFwiLmdldChtKVwiIDogXCJbbV1cIl1cbiAgaWYoZWFybHlPdXQpIHtcbiAgICBpZihwcmVkaWNhdGUuaW5kZXhPZihcImNcIikgPCAwKSB7XG4gICAgICBjb2RlLnB1c2goXCI7aWYoeD09PXkpe3JldHVybiBtfWVsc2UgaWYoeDw9eSl7XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZGUucHVzaChcIjt2YXIgcD1jKHgseSk7aWYocD09PTApe3JldHVybiBtfWVsc2UgaWYocDw9MCl7XCIpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcIjtpZihcIiwgcHJlZGljYXRlLCBcIil7aT1tO1wiKVxuICB9XG4gIGlmKHJldmVyc2VkKSB7XG4gICAgY29kZS5wdXNoKFwibD1tKzF9ZWxzZXtoPW0tMX1cIilcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goXCJoPW0tMX1lbHNle2w9bSsxfVwiKVxuICB9XG4gIGNvZGUucHVzaChcIn1cIilcbiAgaWYoZWFybHlPdXQpIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gLTF9O1wiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiBpfTtcIilcbiAgfVxuICByZXR1cm4gY29kZS5qb2luKFwiXCIpXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVCb3VuZHNTZWFyY2gocHJlZGljYXRlLCByZXZlcnNlZCwgc3VmZml4LCBlYXJseU91dCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IEZ1bmN0aW9uKFtcbiAgY29tcGlsZVNlYXJjaChcIkFcIiwgXCJ4XCIgKyBwcmVkaWNhdGUgKyBcInlcIiwgcmV2ZXJzZWQsIFtcInlcIl0sIGZhbHNlLCBlYXJseU91dCksXG4gIGNvbXBpbGVTZWFyY2goXCJCXCIsIFwieFwiICsgcHJlZGljYXRlICsgXCJ5XCIsIHJldmVyc2VkLCBbXCJ5XCJdLCB0cnVlLCBlYXJseU91dCksXG4gIGNvbXBpbGVTZWFyY2goXCJQXCIsIFwiYyh4LHkpXCIgKyBwcmVkaWNhdGUgKyBcIjBcIiwgcmV2ZXJzZWQsIFtcInlcIiwgXCJjXCJdLCBmYWxzZSwgZWFybHlPdXQpLFxuICBjb21waWxlU2VhcmNoKFwiUVwiLCBcImMoeCx5KVwiICsgcHJlZGljYXRlICsgXCIwXCIsIHJldmVyc2VkLCBbXCJ5XCIsIFwiY1wiXSwgdHJ1ZSwgZWFybHlPdXQpLFxuXCJmdW5jdGlvbiBkaXNwYXRjaEJzZWFyY2hcIiwgc3VmZml4LCBcIihhLHksYyxsLGgpe1xcXG5pZihhLnNoYXBlKXtcXFxuaWYodHlwZW9mKGMpPT09J2Z1bmN0aW9uJyl7XFxcbnJldHVybiBRKGEsKGw9PT11bmRlZmluZWQpPzA6bHwwLChoPT09dW5kZWZpbmVkKT9hLnNoYXBlWzBdLTE6aHwwLHksYylcXFxufWVsc2V7XFxcbnJldHVybiBCKGEsKGM9PT11bmRlZmluZWQpPzA6Y3wwLChsPT09dW5kZWZpbmVkKT9hLnNoYXBlWzBdLTE6bHwwLHkpXFxcbn19ZWxzZXtcXFxuaWYodHlwZW9mKGMpPT09J2Z1bmN0aW9uJyl7XFxcbnJldHVybiBQKGEsKGw9PT11bmRlZmluZWQpPzA6bHwwLChoPT09dW5kZWZpbmVkKT9hLmxlbmd0aC0xOmh8MCx5LGMpXFxcbn1lbHNle1xcXG5yZXR1cm4gQShhLChjPT09dW5kZWZpbmVkKT8wOmN8MCwobD09PXVuZGVmaW5lZCk/YS5sZW5ndGgtMTpsfDAseSlcXFxufX19XFxcbnJldHVybiBkaXNwYXRjaEJzZWFyY2hcIiwgc3VmZml4XS5qb2luKFwiXCIpKVxuICByZXR1cm4gcmVzdWx0KClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdlOiBjb21waWxlQm91bmRzU2VhcmNoKFwiPj1cIiwgZmFsc2UsIFwiR0VcIiksXG4gIGd0OiBjb21waWxlQm91bmRzU2VhcmNoKFwiPlwiLCBmYWxzZSwgXCJHVFwiKSxcbiAgbHQ6IGNvbXBpbGVCb3VuZHNTZWFyY2goXCI8XCIsIHRydWUsIFwiTFRcIiksXG4gIGxlOiBjb21waWxlQm91bmRzU2VhcmNoKFwiPD1cIiwgdHJ1ZSwgXCJMRVwiKSxcbiAgZXE6IGNvbXBpbGVCb3VuZHNTZWFyY2goXCItXCIsIHRydWUsIFwiRVFcIiwgdHJ1ZSlcbn1cbiIsIi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSlcblxuXG4gIGlmICghbG9hZGVkKVxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcilcbiAgICBsb2FkZWQgPSAxXG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIGxpc3RlbmVyKClcbiAgfSlcblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgbG9hZGVkID8gZm4oKSA6IGZucy5wdXNoKGZuKVxuICB9XG5cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gaW52ZXJ0KGhhc2gpIHtcbiAgdmFyIHJlc3VsdCA9IHt9XG4gIGZvcih2YXIgaSBpbiBoYXNoKSB7XG4gICAgaWYoaGFzaC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgcmVzdWx0W2hhc2hbaV1dID0gaVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0IiwidmFyIHVhID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCA6ICcnXG4gICwgaXNPU1ggPSAvT1MgWC8udGVzdCh1YSlcbiAgLCBpc09wZXJhID0gL09wZXJhLy50ZXN0KHVhKVxuICAsIG1heWJlRmlyZWZveCA9ICEvbGlrZSBHZWNrby8udGVzdCh1YSkgJiYgIWlzT3BlcmFcblxudmFyIGksIG91dHB1dCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAwOiAgaXNPU1ggPyAnPG1lbnU+JyA6ICc8VU5LPidcbiwgMTogICc8bW91c2UgMT4nXG4sIDI6ICAnPG1vdXNlIDI+J1xuLCAzOiAgJzxicmVhaz4nXG4sIDQ6ICAnPG1vdXNlIDM+J1xuLCA1OiAgJzxtb3VzZSA0PidcbiwgNjogICc8bW91c2UgNT4nXG4sIDg6ICAnPGJhY2tzcGFjZT4nXG4sIDk6ICAnPHRhYj4nXG4sIDEyOiAnPGNsZWFyPidcbiwgMTM6ICc8ZW50ZXI+J1xuLCAxNjogJzxzaGlmdD4nXG4sIDE3OiAnPGNvbnRyb2w+J1xuLCAxODogJzxhbHQ+J1xuLCAxOTogJzxwYXVzZT4nXG4sIDIwOiAnPGNhcHMtbG9jaz4nXG4sIDIxOiAnPGltZS1oYW5ndWw+J1xuLCAyMzogJzxpbWUtanVuamE+J1xuLCAyNDogJzxpbWUtZmluYWw+J1xuLCAyNTogJzxpbWUta2Fuamk+J1xuLCAyNzogJzxlc2NhcGU+J1xuLCAyODogJzxpbWUtY29udmVydD4nXG4sIDI5OiAnPGltZS1ub25jb252ZXJ0PidcbiwgMzA6ICc8aW1lLWFjY2VwdD4nXG4sIDMxOiAnPGltZS1tb2RlLWNoYW5nZT4nXG4sIDI3OiAnPGVzY2FwZT4nXG4sIDMyOiAnPHNwYWNlPidcbiwgMzM6ICc8cGFnZS11cD4nXG4sIDM0OiAnPHBhZ2UtZG93bj4nXG4sIDM1OiAnPGVuZD4nXG4sIDM2OiAnPGhvbWU+J1xuLCAzNzogJzxsZWZ0PidcbiwgMzg6ICc8dXA+J1xuLCAzOTogJzxyaWdodD4nXG4sIDQwOiAnPGRvd24+J1xuLCA0MTogJzxzZWxlY3Q+J1xuLCA0MjogJzxwcmludD4nXG4sIDQzOiAnPGV4ZWN1dGU+J1xuLCA0NDogJzxzbmFwc2hvdD4nXG4sIDQ1OiAnPGluc2VydD4nXG4sIDQ2OiAnPGRlbGV0ZT4nXG4sIDQ3OiAnPGhlbHA+J1xuLCA5MTogJzxtZXRhPicgIC8vIG1ldGEtbGVmdCAtLSBubyBvbmUgaGFuZGxlcyBsZWZ0IGFuZCByaWdodCBwcm9wZXJseSwgc28gd2UgY29lcmNlIGludG8gb25lLlxuLCA5MjogJzxtZXRhPicgIC8vIG1ldGEtcmlnaHRcbiwgOTM6IGlzT1NYID8gJzxtZXRhPicgOiAnPG1lbnU+JyAgICAgIC8vIGNocm9tZSxvcGVyYSxzYWZhcmkgYWxsIHJlcG9ydCB0aGlzIGZvciBtZXRhLXJpZ2h0IChvc3ggbWJwKS5cbiwgOTU6ICc8c2xlZXA+J1xuLCAxMDY6ICc8bnVtLSo+J1xuLCAxMDc6ICc8bnVtLSs+J1xuLCAxMDg6ICc8bnVtLWVudGVyPidcbiwgMTA5OiAnPG51bS0tPidcbiwgMTEwOiAnPG51bS0uPidcbiwgMTExOiAnPG51bS0vPidcbiwgMTQ0OiAnPG51bS1sb2NrPidcbiwgMTQ1OiAnPHNjcm9sbC1sb2NrPidcbiwgMTYwOiAnPHNoaWZ0LWxlZnQ+J1xuLCAxNjE6ICc8c2hpZnQtcmlnaHQ+J1xuLCAxNjI6ICc8Y29udHJvbC1sZWZ0PidcbiwgMTYzOiAnPGNvbnRyb2wtcmlnaHQ+J1xuLCAxNjQ6ICc8YWx0LWxlZnQ+J1xuLCAxNjU6ICc8YWx0LXJpZ2h0PidcbiwgMTY2OiAnPGJyb3dzZXItYmFjaz4nXG4sIDE2NzogJzxicm93c2VyLWZvcndhcmQ+J1xuLCAxNjg6ICc8YnJvd3Nlci1yZWZyZXNoPidcbiwgMTY5OiAnPGJyb3dzZXItc3RvcD4nXG4sIDE3MDogJzxicm93c2VyLXNlYXJjaD4nXG4sIDE3MTogJzxicm93c2VyLWZhdm9yaXRlcz4nXG4sIDE3MjogJzxicm93c2VyLWhvbWU+J1xuXG4gIC8vIGZmL29zeCByZXBvcnRzICc8dm9sdW1lLW11dGU+JyBmb3IgJy0nXG4sIDE3MzogaXNPU1ggJiYgbWF5YmVGaXJlZm94ID8gJy0nIDogJzx2b2x1bWUtbXV0ZT4nXG4sIDE3NDogJzx2b2x1bWUtZG93bj4nXG4sIDE3NTogJzx2b2x1bWUtdXA+J1xuLCAxNzY6ICc8bmV4dC10cmFjaz4nXG4sIDE3NzogJzxwcmV2LXRyYWNrPidcbiwgMTc4OiAnPHN0b3A+J1xuLCAxNzk6ICc8cGxheS1wYXVzZT4nXG4sIDE4MDogJzxsYXVuY2gtbWFpbD4nXG4sIDE4MTogJzxsYXVuY2gtbWVkaWEtc2VsZWN0PidcbiwgMTgyOiAnPGxhdW5jaC1hcHAgMT4nXG4sIDE4MzogJzxsYXVuY2gtYXBwIDI+J1xuLCAxODY6ICc7J1xuLCAxODc6ICc9J1xuLCAxODg6ICcsJ1xuLCAxODk6ICctJ1xuLCAxOTA6ICcuJ1xuLCAxOTE6ICcvJ1xuLCAxOTI6ICdgJ1xuLCAyMTk6ICdbJ1xuLCAyMjA6ICdcXFxcJ1xuLCAyMjE6ICddJ1xuLCAyMjI6IFwiJ1wiXG4sIDIyMzogJzxtZXRhPidcbiwgMjI0OiAnPG1ldGE+JyAgICAgICAvLyBmaXJlZm94IHJlcG9ydHMgbWV0YSBoZXJlLlxuLCAyMjY6ICc8YWx0LWdyPidcbiwgMjI5OiAnPGltZS1wcm9jZXNzPidcbiwgMjMxOiBpc09wZXJhID8gJ2AnIDogJzx1bmljb2RlPidcbiwgMjQ2OiAnPGF0dGVudGlvbj4nXG4sIDI0NzogJzxjcnNlbD4nXG4sIDI0ODogJzxleHNlbD4nXG4sIDI0OTogJzxlcmFzZS1lb2Y+J1xuLCAyNTA6ICc8cGxheT4nXG4sIDI1MTogJzx6b29tPidcbiwgMjUyOiAnPG5vLW5hbWU+J1xuLCAyNTM6ICc8cGEtMT4nXG4sIDI1NDogJzxjbGVhcj4nXG59XG5cbmZvcihpID0gNTg7IGkgPCA2NTsgKytpKSB7XG4gIG91dHB1dFtpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSlcbn1cblxuLy8gMC05XG5mb3IoaSA9IDQ4OyBpIDwgNTg7ICsraSkge1xuICBvdXRwdXRbaV0gPSAoaSAtIDQ4KSsnJ1xufVxuXG4vLyBBLVpcbmZvcihpID0gNjU7IGkgPCA5MTsgKytpKSB7XG4gIG91dHB1dFtpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSlcbn1cblxuLy8gbnVtMC05XG5mb3IoaSA9IDk2OyBpIDwgMTA2OyArK2kpIHtcbiAgb3V0cHV0W2ldID0gJzxudW0tJysoaSAtIDk2KSsnPidcbn1cblxuLy8gRjEtRjI0XG5mb3IoaSA9IDExMjsgaSA8IDEzNjsgKytpKSB7XG4gIG91dHB1dFtpXSA9ICdGJysoaS0xMTEpXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcImV2ZW50c1wiKS5FdmVudEVtaXR0ZXJcbiAgLCB1dGlsICAgICAgICAgPSByZXF1aXJlKFwidXRpbFwiKVxuICAsIGRvbXJlYWR5ICAgICA9IHJlcXVpcmUoXCJkb21yZWFkeVwiKVxuICAsIHZrZXkgICAgICAgICA9IHJlcXVpcmUoXCJ2a2V5XCIpXG4gICwgaW52ZXJ0ICAgICAgID0gcmVxdWlyZShcImludmVydC1oYXNoXCIpXG4gICwgdW5pcSAgICAgICAgID0gcmVxdWlyZShcInVuaXFcIilcbiAgLCBic2VhcmNoICAgICAgPSByZXF1aXJlKFwiYmluYXJ5LXNlYXJjaC1ib3VuZHNcIilcbiAgLCBpb3RhICAgICAgICAgPSByZXF1aXJlKFwiaW90YS1hcnJheVwiKVxuICAsIG1pbiAgICAgICAgICA9IE1hdGgubWluXG5cbi8vQnJvd3NlciBjb21wYXRpYmlsaXR5IGhhY2tzXG5yZXF1aXJlKFwiLi9saWIvcmFmLXBvbHlmaWxsLmpzXCIpXG52YXIgYWRkTW91c2VXaGVlbCA9IHJlcXVpcmUoXCIuL2xpYi9tb3VzZXdoZWVsLXBvbHlmaWxsLmpzXCIpXG52YXIgaHJ0aW1lID0gcmVxdWlyZShcIi4vbGliL2hydGltZS1wb2x5ZmlsbC5qc1wiKVxuXG4vL1JlbW92ZSBhbmdsZSBicmFjZXMgYW5kIG90aGVyIHVzZWxlc3MgY3JhcFxudmFyIGZpbHRlcmVkX3ZrZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoMjU2KVxuICAgICwgaSwgaiwga1xuICBmb3IoaT0wOyBpPDI1NjsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gXCJVTktcIlxuICB9XG4gIGZvcihpIGluIHZrZXkpIHtcbiAgICBrID0gdmtleVtpXVxuICAgIGlmKGsuY2hhckF0KDApID09PSAnPCcgJiYgay5jaGFyQXQoay5sZW5ndGgtMSkgPT09ICc+Jykge1xuICAgICAgayA9IGsuc3Vic3RyaW5nKDEsIGsubGVuZ3RoLTEpXG4gICAgfVxuICAgIGsgPSBrLnJlcGxhY2UoL1xccy9nLCBcIi1cIilcbiAgICByZXN1bHRbcGFyc2VJbnQoaSldID0ga1xuICB9XG4gIHJldHVybiByZXN1bHRcbn0pKClcblxuLy9Db21wdXRlIG1pbmltYWwgY29tbW9uIHNldCBvZiBrZXlib2FyZCBmdW5jdGlvbnNcbnZhciBrZXlOYW1lcyA9IHVuaXEoT2JqZWN0LmtleXMoaW52ZXJ0KGZpbHRlcmVkX3ZrZXkpKSlcblxuLy9UcmFuc2xhdGVzIGEgdmlydHVhbCBrZXljb2RlIHRvIGEgbm9ybWFsaXplZCBrZXljb2RlXG5mdW5jdGlvbiB2aXJ0dWFsS2V5Q29kZShrZXkpIHtcbiAgcmV0dXJuIGJzZWFyY2guZXEoa2V5TmFtZXMsIGtleSlcbn1cblxuLy9NYXBzIGEgcGh5c2ljYWwga2V5Y29kZSB0byBhIG5vcm1hbGl6ZWQga2V5Y29kZVxuZnVuY3Rpb24gcGh5c2ljYWxLZXlDb2RlKGtleSkge1xuICByZXR1cm4gdmlydHVhbEtleUNvZGUoZmlsdGVyZWRfdmtleVtrZXldKVxufVxuXG4vL0dhbWUgc2hlbGxcbmZ1bmN0aW9uIEdhbWVTaGVsbCgpIHtcbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcylcbiAgdGhpcy5fY3VyS2V5U3RhdGUgID0gbmV3IEFycmF5KGtleU5hbWVzLmxlbmd0aClcbiAgdGhpcy5fcHJlc3NDb3VudCAgID0gbmV3IEFycmF5KGtleU5hbWVzLmxlbmd0aClcbiAgdGhpcy5fcmVsZWFzZUNvdW50ID0gbmV3IEFycmF5KGtleU5hbWVzLmxlbmd0aClcbiAgXG4gIHRoaXMuX3RpY2tJbnRlcnZhbCA9IG51bGxcbiAgdGhpcy5fcmFmSGFuZGxlID0gbnVsbFxuICB0aGlzLl90aWNrUmF0ZSA9IDBcbiAgdGhpcy5fbGFzdFRpY2sgPSBocnRpbWUoKVxuICB0aGlzLl9mcmFtZVRpbWUgPSAwLjBcbiAgdGhpcy5fcGF1c2VkID0gdHJ1ZVxuICB0aGlzLl93aWR0aCA9IDBcbiAgdGhpcy5faGVpZ2h0ID0gMFxuICBcbiAgdGhpcy5fd2FudEZ1bGxzY3JlZW4gPSBmYWxzZVxuICB0aGlzLl93YW50UG9pbnRlckxvY2sgPSBmYWxzZVxuICB0aGlzLl9mdWxsc2NyZWVuQWN0aXZlID0gZmFsc2VcbiAgdGhpcy5fcG9pbnRlckxvY2tBY3RpdmUgPSBmYWxzZVxuICBcbiAgdGhpcy5fcmVuZGVyID0gcmVuZGVyLmJpbmQodW5kZWZpbmVkLCB0aGlzKVxuXG4gIHRoaXMucHJldmVudERlZmF1bHRzID0gdHJ1ZVxuICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlXG4gIFxuICBmb3IodmFyIGk9MDsgaTxrZXlOYW1lcy5sZW5ndGg7ICsraSkge1xuICAgIHRoaXMuX2N1cktleVN0YXRlW2ldID0gZmFsc2VcbiAgICB0aGlzLl9wcmVzc0NvdW50W2ldID0gdGhpcy5fcmVsZWFzZUNvdW50W2ldID0gMFxuICB9XG4gIFxuICAvL1B1YmxpYyBtZW1iZXJzXG4gIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgdGhpcy5iaW5kaW5ncyA9IHt9XG4gIHRoaXMuZnJhbWVTa2lwID0gMTAwLjBcbiAgdGhpcy50aWNrQ291bnQgPSAwXG4gIHRoaXMuZnJhbWVDb3VudCA9IDBcbiAgdGhpcy5zdGFydFRpbWUgPSBocnRpbWUoKVxuICB0aGlzLnRpY2tUaW1lID0gdGhpcy5fdGlja1JhdGVcbiAgdGhpcy5mcmFtZVRpbWUgPSAxMC4wXG4gIHRoaXMuc3RpY2t5RnVsbHNjcmVlbiA9IGZhbHNlXG4gIHRoaXMuc3RpY2t5UG9pbnRMb2NrID0gZmFsc2VcbiAgXG4gIC8vU2Nyb2xsIHN0dWZmXG4gIHRoaXMuc2Nyb2xsID0gWzAsMCwwXVxuICAgIFxuICAvL01vdXNlIHN0YXRlXG4gIHRoaXMubW91c2VYID0gMFxuICB0aGlzLm1vdXNlWSA9IDBcbiAgdGhpcy5wcmV2TW91c2VYID0gMFxuICB0aGlzLnByZXZNb3VzZVkgPSAwXG59XG5cbnV0aWwuaW5oZXJpdHMoR2FtZVNoZWxsLCBFdmVudEVtaXR0ZXIpXG5cbnZhciBwcm90byA9IEdhbWVTaGVsbC5wcm90b3R5cGVcblxuLy9CaW5kIGtleW5hbWVzXG5wcm90by5rZXlOYW1lcyA9IGtleU5hbWVzXG5cbi8vQmluZHMgYSB2aXJ0dWFsIGtleWJvYXJkIGV2ZW50IHRvIGEgcGh5c2ljYWwga2V5XG5wcm90by5iaW5kID0gZnVuY3Rpb24odmlydHVhbF9rZXkpIHtcbiAgLy9Mb29rIHVwIHByZXZpb3VzIGtleSBiaW5kaW5nc1xuICB2YXIgYXJyXG4gIGlmKHZpcnR1YWxfa2V5IGluIHRoaXMuYmluZGluZ3MpIHtcbiAgICBhcnIgPSB0aGlzLmJpbmRpbmdzW3ZpcnR1YWxfa2V5XVxuICB9IGVsc2Uge1xuICAgIGFyciA9IFtdXG4gIH1cbiAgLy9BZGQga2V5cyB0byBsaXN0XG4gIHZhciBwaHlzaWNhbF9rZXlcbiAgZm9yKHZhciBpPTEsIG49YXJndW1lbnRzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICBwaHlzaWNhbF9rZXkgPSBhcmd1bWVudHNbaV1cbiAgICBpZih2aXJ0dWFsS2V5Q29kZShwaHlzaWNhbF9rZXkpID49IDApIHtcbiAgICAgIGFyci5wdXNoKHBoeXNpY2FsX2tleSlcbiAgICB9IGVsc2UgaWYocGh5c2ljYWxfa2V5IGluIHRoaXMuYmluZGluZ3MpIHtcbiAgICAgIHZhciBrZXliaW5kcyA9IHRoaXMuYmluZGluZ3NbcGh5c2ljYWxfa2V5XVxuICAgICAgZm9yKHZhciBqPTA7IGo8a2V5YmluZHMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgYXJyLnB1c2goa2V5YmluZHNbal0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vUmVtb3ZlIGFueSBkdXBsaWNhdGUga2V5c1xuICBhcnIgPSB1bmlxKGFycilcbiAgaWYoYXJyLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLmJpbmRpbmdzW3ZpcnR1YWxfa2V5XSA9IGFyclxuICB9XG4gIHRoaXMuZW1pdCgnYmluZCcsIHZpcnR1YWxfa2V5LCBhcnIpXG59XG5cbi8vVW5iaW5kcyBhIHZpcnR1YWwga2V5Ym9hcmQgZXZlbnRcbnByb3RvLnVuYmluZCA9IGZ1bmN0aW9uKHZpcnR1YWxfa2V5KSB7XG4gIGlmKHZpcnR1YWxfa2V5IGluIHRoaXMuYmluZGluZ3MpIHtcbiAgICBkZWxldGUgdGhpcy5iaW5kaW5nc1t2aXJ0dWFsX2tleV1cbiAgfVxuICB0aGlzLmVtaXQoJ3VuYmluZCcsIHZpcnR1YWxfa2V5KVxufVxuXG4vL0NoZWNrcyBpZiBhIGtleSBpcyBzZXQgaW4gYSBnaXZlbiBzdGF0ZVxuZnVuY3Rpb24gbG9va3VwS2V5KHN0YXRlLCBiaW5kaW5ncywga2V5KSB7XG4gIGlmKGtleSBpbiBiaW5kaW5ncykge1xuICAgIHZhciBhcnIgPSBiaW5kaW5nc1trZXldXG4gICAgZm9yKHZhciBpPTAsIG49YXJyLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICAgIGlmKHN0YXRlW3ZpcnR1YWxLZXlDb2RlKGFycltpXSldKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBrYyA9IHZpcnR1YWxLZXlDb2RlKGtleSlcbiAgaWYoa2MgPj0gMCkge1xuICAgIHJldHVybiBzdGF0ZVtrY11cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy9DaGVja3MgaWYgYSBrZXkgaXMgc2V0IGluIGEgZ2l2ZW4gc3RhdGVcbmZ1bmN0aW9uIGxvb2t1cENvdW50KHN0YXRlLCBiaW5kaW5ncywga2V5KSB7XG4gIGlmKGtleSBpbiBiaW5kaW5ncykge1xuICAgIHZhciBhcnIgPSBiaW5kaW5nc1trZXldLCByID0gMFxuICAgIGZvcih2YXIgaT0wLCBuPWFyci5sZW5ndGg7IGk8bjsgKytpKSB7XG4gICAgICByICs9IHN0YXRlW3ZpcnR1YWxLZXlDb2RlKGFycltpXSldXG4gICAgfVxuICAgIHJldHVybiByXG4gIH1cbiAgdmFyIGtjID0gdmlydHVhbEtleUNvZGUoa2V5KVxuICBpZihrYyA+PSAwKSB7XG4gICAgcmV0dXJuIHN0YXRlW2tjXVxuICB9XG4gIHJldHVybiAwXG59XG5cbi8vQ2hlY2tzIGlmIGEga2V5IChlaXRoZXIgcGh5c2ljYWwgb3IgdmlydHVhbCkgaXMgY3VycmVudGx5IGhlbGQgZG93blxucHJvdG8uZG93biA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gbG9va3VwS2V5KHRoaXMuX2N1cktleVN0YXRlLCB0aGlzLmJpbmRpbmdzLCBrZXkpXG59XG5cbi8vQ2hlY2tzIGlmIGEga2V5IHdhcyBldmVyIGRvd25cbnByb3RvLndhc0Rvd24gPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIHRoaXMuZG93bihrZXkpIHx8ICEhdGhpcy5wcmVzcyhrZXkpXG59XG5cbi8vT3Bwb3NpdGUgb2YgZG93blxucHJvdG8udXAgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuICF0aGlzLmRvd24oa2V5KVxufVxuXG4vL0NoZWNrcyBpZiBhIGtleSB3YXMgcmVsZWFzZWQgZHVyaW5nIHByZXZpb3VzIGZyYW1lXG5wcm90by53YXNVcCA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gdGhpcy51cChrZXkpIHx8ICEhdGhpcy5yZWxlYXNlKGtleSlcbn1cblxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgYSBrZXkgd2FzIHByZXNzZWQgc2luY2UgbGFzdCB0aWNrXG5wcm90by5wcmVzcyA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gbG9va3VwQ291bnQodGhpcy5fcHJlc3NDb3VudCwgdGhpcy5iaW5kaW5ncywga2V5KVxufVxuXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBhIGtleSB3YXMgcmVsZWFzZWQgc2luY2UgbGFzdCB0aWNrXG5wcm90by5yZWxlYXNlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHJldHVybiBsb29rdXBDb3VudCh0aGlzLl9yZWxlYXNlQ291bnQsIHRoaXMuYmluZGluZ3MsIGtleSlcbn1cblxuLy9QYXVzZS91bnBhdXNlIHRoZSBnYW1lIGxvb3Bcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJwYXVzZWRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXVzZWRcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHZhciBucyA9ICEhc3RhdGVcbiAgICBpZihucyAhPT0gdGhpcy5fcGF1c2VkKSB7XG4gICAgICBpZighdGhpcy5fcGF1c2VkKSB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWVcbiAgICAgICAgdGhpcy5fZnJhbWVUaW1lID0gbWluKDEuMCwgKGhydGltZSgpIC0gdGhpcy5fbGFzdFRpY2spIC8gdGhpcy5fdGlja1JhdGUpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGlja0ludGVydmFsKVxuICAgICAgICAvL2NhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JhZkhhbmRsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuX2xhc3RUaWNrID0gaHJ0aW1lKCkgLSBNYXRoLmZsb29yKHRoaXMuX2ZyYW1lVGltZSAqIHRoaXMuX3RpY2tSYXRlKVxuICAgICAgICB0aGlzLl90aWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aWNrLCB0aGlzLl90aWNrUmF0ZSwgdGhpcylcbiAgICAgICAgdGhpcy5fcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlbmRlcilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG5cbi8vRnVsbHNjcmVlbiBzdGF0ZSB0b2dnbGVcblxuZnVuY3Rpb24gdHJ5RnVsbHNjcmVlbihzaGVsbCkge1xuICAvL1JlcXVlc3QgZnVsbCBzY3JlZW5cbiAgdmFyIGVsZW0gPSBzaGVsbC5lbGVtZW50XG4gIFxuICBpZihzaGVsbC5fd2FudEZ1bGxzY3JlZW4gJiYgIXNoZWxsLl9mdWxsc2NyZWVuQWN0aXZlKSB7XG4gICAgdmFyIGZzID0gZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbiB8fFxuICAgICAgICAgICAgIGVsZW0ucmVxdWVzdEZ1bGxTY3JlZW4gfHxcbiAgICAgICAgICAgICBlbGVtLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIHx8XG4gICAgICAgICAgICAgZWxlbS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuICAgICAgICAgICAgIGVsZW0ubW96UmVxdWVzdEZ1bGxzY3JlZW4gfHxcbiAgICAgICAgICAgICBlbGVtLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8XG4gICAgICAgICAgICAgZnVuY3Rpb24oKSB7fVxuICAgIGZzLmNhbGwoZWxlbSlcbiAgfVxuICBpZihzaGVsbC5fd2FudFBvaW50ZXJMb2NrICYmICFzaGVsbC5fcG9pbnRlckxvY2tBY3RpdmUpIHtcbiAgICB2YXIgcGwgPSAgZWxlbS5yZXF1ZXN0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgZWxlbS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgZWxlbS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgZWxlbS5tc1JlcXVlc3RQb2ludGVyTG9jayB8fFxuICAgICAgICAgICAgICBlbGVtLm9SZXF1ZXN0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7fVxuICAgIHBsLmNhbGwoZWxlbSlcbiAgfVxufVxuXG52YXIgY2FuY2VsRnVsbHNjcmVlbiA9IGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNhbmNlbEZ1bGxzY3JlZW4gfHwgIC8vV2h5IGNhbiBubyBvbmUgYWdyZWUgb24gdGhpcz9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY2FuY2VsRnVsbFNjcmVlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsc2NyZWVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbHNjcmVlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7fVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwiZnVsbHNjcmVlblwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxzY3JlZW5BY3RpdmVcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHZhciBucyA9ICEhc3RhdGVcbiAgICBpZighbnMpIHtcbiAgICAgIHRoaXMuX3dhbnRGdWxsc2NyZWVuID0gZmFsc2VcbiAgICAgIGNhbmNlbEZ1bGxzY3JlZW4uY2FsbChkb2N1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fd2FudEZ1bGxzY3JlZW4gPSB0cnVlXG4gICAgICB0cnlGdWxsc2NyZWVuKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mdWxsc2NyZWVuQWN0aXZlXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZUZ1bGxzY3JlZW4oc2hlbGwpIHtcbiAgc2hlbGwuX2Z1bGxzY3JlZW5BY3RpdmUgPSBkb2N1bWVudC5mdWxsc2NyZWVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubW96RnVsbFNjcmVlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gIGlmKCFzaGVsbC5zdGlja3lGdWxsc2NyZWVuICYmIHNoZWxsLl9mdWxsc2NyZWVuQWN0aXZlKSB7XG4gICAgc2hlbGwuX3dhbnRGdWxsc2NyZWVuID0gZmFsc2VcbiAgfVxufVxuXG4vL1BvaW50ZXIgbG9jayBzdGF0ZSB0b2dnbGVcbnZhciBleGl0UG9pbnRlckxvY2sgPSBkb2N1bWVudC5leGl0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5tb3pFeGl0UG9pbnRlckxvY2sgfHxcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHt9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJwb2ludGVyTG9ja1wiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXJMb2NrQWN0aXZlXG4gIH0sXG4gIHNldDogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICB2YXIgbnMgPSAhIXN0YXRlXG4gICAgaWYoIW5zKSB7XG4gICAgICB0aGlzLl93YW50UG9pbnRlckxvY2sgPSBmYWxzZVxuICAgICAgZXhpdFBvaW50ZXJMb2NrLmNhbGwoZG9jdW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dhbnRQb2ludGVyTG9jayA9IHRydWVcbiAgICAgIHRyeUZ1bGxzY3JlZW4odGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXJMb2NrQWN0aXZlXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZVBvaW50ZXJMb2NrQ2hhbmdlKHNoZWxsLCBldmVudCkge1xuICBzaGVsbC5fcG9pbnRlckxvY2tBY3RpdmUgPSBzaGVsbC5lbGVtZW50ID09PSAoXG4gICAgICBkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgfHxcbiAgICAgIGRvY3VtZW50Lm1velBvaW50ZXJMb2NrRWxlbWVudCB8fFxuICAgICAgZG9jdW1lbnQud2Via2l0UG9pbnRlckxvY2tFbGVtZW50IHx8XG4gICAgICBudWxsKVxuICBpZighc2hlbGwuc3RpY2t5UG9pbnRlckxvY2sgJiYgc2hlbGwuX3BvaW50ZXJMb2NrQWN0aXZlKSB7XG4gICAgc2hlbGwuX3dhbnRQb2ludGVyTG9jayA9IGZhbHNlXG4gIH1cbn1cblxuLy9XaWR0aCBhbmQgaGVpZ2h0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwid2lkdGhcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfVxufSlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJoZWlnaHRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gIH1cbn0pXG5cbi8vU2V0IGtleSBzdGF0ZVxuZnVuY3Rpb24gc2V0S2V5U3RhdGUoc2hlbGwsIGtleSwgc3RhdGUpIHtcbiAgdmFyIHBzID0gc2hlbGwuX2N1cktleVN0YXRlW2tleV1cbiAgaWYocHMgIT09IHN0YXRlKSB7XG4gICAgaWYoc3RhdGUpIHtcbiAgICAgIHNoZWxsLl9wcmVzc0NvdW50W2tleV0rK1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGVsbC5fcmVsZWFzZUNvdW50W2tleV0rK1xuICAgIH1cbiAgICBzaGVsbC5fY3VyS2V5U3RhdGVba2V5XSA9IHN0YXRlXG4gIH1cbn1cblxuLy9UaWNrcyB0aGUgZ2FtZSBzdGF0ZSBvbmUgdXBkYXRlXG5mdW5jdGlvbiB0aWNrKHNoZWxsKSB7XG4gIHZhciBza2lwID0gaHJ0aW1lKCkgKyBzaGVsbC5mcmFtZVNraXBcbiAgICAsIHBDb3VudCA9IHNoZWxsLl9wcmVzc0NvdW50XG4gICAgLCByQ291bnQgPSBzaGVsbC5fcmVsZWFzZUNvdW50XG4gICAgLCBpLCBzLCB0XG4gICAgLCB0ciA9IHNoZWxsLl90aWNrUmF0ZVxuICAgICwgbiA9IGtleU5hbWVzLmxlbmd0aFxuICB3aGlsZSghc2hlbGwuX3BhdXNlZCAmJlxuICAgICAgICBocnRpbWUoKSA+PSBzaGVsbC5fbGFzdFRpY2sgKyB0cikge1xuICAgIFxuICAgIC8vU2tpcCBmcmFtZXMgaWYgd2UgYXJlIG92ZXIgYnVkZ2V0XG4gICAgaWYoaHJ0aW1lKCkgPiBza2lwKSB7XG4gICAgICBzaGVsbC5fbGFzdFRpY2sgPSBocnRpbWUoKSArIHRyXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgLy9UaWNrIHRoZSBnYW1lXG4gICAgcyA9IGhydGltZSgpXG4gICAgc2hlbGwuZW1pdChcInRpY2tcIilcbiAgICB0ID0gaHJ0aW1lKClcbiAgICBzaGVsbC50aWNrVGltZSA9IHQgLSBzXG4gICAgXG4gICAgLy9VcGRhdGUgY291bnRlcnMgYW5kIHRpbWVcbiAgICArK3NoZWxsLnRpY2tDb3VudFxuICAgIHNoZWxsLl9sYXN0VGljayArPSB0clxuICAgIFxuICAgIC8vU2hpZnQgaW5wdXQgc3RhdGVcbiAgICBmb3IoaT0wOyBpPG47ICsraSkge1xuICAgICAgcENvdW50W2ldID0gckNvdW50W2ldID0gMFxuICAgIH1cbiAgICBpZihzaGVsbC5fcG9pbnRlckxvY2tBY3RpdmUpIHtcbiAgICAgIHNoZWxsLnByZXZNb3VzZVggPSBzaGVsbC5tb3VzZVggPSBzaGVsbC53aWR0aD4+MVxuICAgICAgc2hlbGwucHJldk1vdXNlWSA9IHNoZWxsLm1vdXNlWSA9IHNoZWxsLmhlaWdodD4+MVxuICAgIH0gZWxzZSB7XG4gICAgICBzaGVsbC5wcmV2TW91c2VYID0gc2hlbGwubW91c2VYXG4gICAgICBzaGVsbC5wcmV2TW91c2VZID0gc2hlbGwubW91c2VZXG4gICAgfVxuICAgIHNoZWxsLnNjcm9sbFswXSA9IHNoZWxsLnNjcm9sbFsxXSA9IHNoZWxsLnNjcm9sbFsyXSA9IDBcbiAgfVxufVxuXG4vL1JlbmRlciBzdHVmZlxuZnVuY3Rpb24gcmVuZGVyKHNoZWxsKSB7XG5cbiAgLy9SZXF1ZXN0IG5leHQgZnJhbWVcbiAgc2hlbGwuX3JhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzaGVsbC5fcmVuZGVyKVxuXG4gIC8vVGljayB0aGUgc2hlbGxcbiAgdGljayhzaGVsbClcbiAgXG4gIC8vQ29tcHV0ZSBmcmFtZSB0aW1lXG4gIHZhciBkdFxuICBpZihzaGVsbC5fcGF1c2VkKSB7XG4gICAgZHQgPSBzaGVsbC5fZnJhbWVUaW1lXG4gIH0gZWxzZSB7XG4gICAgZHQgPSBtaW4oMS4wLCAoaHJ0aW1lKCkgLSBzaGVsbC5fbGFzdFRpY2spIC8gc2hlbGwuX3RpY2tSYXRlKVxuICB9XG4gIFxuICAvL0RyYXcgYSBmcmFtZVxuICArK3NoZWxsLmZyYW1lQ291bnRcbiAgdmFyIHMgPSBocnRpbWUoKVxuICBzaGVsbC5lbWl0KFwicmVuZGVyXCIsIGR0KVxuICB2YXIgdCA9IGhydGltZSgpXG4gIHNoZWxsLmZyYW1lVGltZSA9IHQgLSBzXG4gIFxufVxuXG5mdW5jdGlvbiBpc0ZvY3VzZWQoc2hlbGwpIHtcbiAgcmV0dXJuIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSB8fFxuICAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHNoZWxsLmVsZW1lbnQpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KHNoZWxsLCBldikge1xuICBpZihzaGVsbC5wcmV2ZW50RGVmYXVsdHMpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbiAgaWYoc2hlbGwuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxufVxuXG4vL1NldCBrZXkgdXBcbmZ1bmN0aW9uIGhhbmRsZUtleVVwKHNoZWxsLCBldikge1xuICBoYW5kbGVFdmVudChzaGVsbCwgZXYpXG4gIHZhciBrYyA9IHBoeXNpY2FsS2V5Q29kZShldi5rZXlDb2RlIHx8IGV2LmNoYXIgfHwgZXYud2hpY2ggfHwgZXYuY2hhckNvZGUpXG4gIGlmKGtjID49IDApIHtcbiAgICBzZXRLZXlTdGF0ZShzaGVsbCwga2MsIGZhbHNlKVxuICB9XG59XG5cbi8vU2V0IGtleSBkb3duXG5mdW5jdGlvbiBoYW5kbGVLZXlEb3duKHNoZWxsLCBldikge1xuICBpZighaXNGb2N1c2VkKHNoZWxsKSkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZUV2ZW50KHNoZWxsLCBldilcbiAgaWYoZXYubWV0YUtleSkge1xuICAgIC8vSGFjazogQ2xlYXIga2V5IHN0YXRlIHdoZW4gbWV0YSBnZXRzIHByZXNzZWQgdG8gcHJldmVudCBrZXlzIHN0aWNraW5nXG4gICAgaGFuZGxlQmx1cihzaGVsbCwgZXYpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGtjID0gcGh5c2ljYWxLZXlDb2RlKGV2LmtleUNvZGUgfHwgZXYuY2hhciB8fCBldi53aGljaCB8fCBldi5jaGFyQ29kZSlcbiAgICBpZihrYyA+PSAwKSB7XG4gICAgICBzZXRLZXlTdGF0ZShzaGVsbCwga2MsIHRydWUpXG4gICAgfVxuICB9XG59XG5cbi8vTW91c2UgZXZlbnRzIGFyZSByZWFsbHkgYW5ub3lpbmdcbnZhciBtb3VzZUNvZGVzID0gaW90YSgzMikubWFwKGZ1bmN0aW9uKG4pIHtcbiAgcmV0dXJuIHZpcnR1YWxLZXlDb2RlKFwibW91c2UtXCIgKyAobisxKSlcbn0pXG5cbmZ1bmN0aW9uIHNldE1vdXNlQnV0dG9ucyhzaGVsbCwgYnV0dG9ucykge1xuICBmb3IodmFyIGk9MDsgaTwzMjsgKytpKSB7XG4gICAgc2V0S2V5U3RhdGUoc2hlbGwsIG1vdXNlQ29kZXNbaV0sICEhKGJ1dHRvbnMgJiAoMTw8aSkpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShzaGVsbCwgZXYpIHtcbiAgaGFuZGxlRXZlbnQoc2hlbGwsIGV2KVxuICBpZihzaGVsbC5fcG9pbnRlckxvY2tBY3RpdmUpIHtcbiAgICB2YXIgbW92ZW1lbnRYID0gZXYubW92ZW1lbnRYICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIGV2Lm1vek1vdmVtZW50WCAgICB8fFxuICAgICAgICAgICAgICAgICAgICBldi53ZWJraXRNb3ZlbWVudFggfHxcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgbW92ZW1lbnRZID0gZXYubW92ZW1lbnRZICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIGV2Lm1vek1vdmVtZW50WSAgICB8fFxuICAgICAgICAgICAgICAgICAgICBldi53ZWJraXRNb3ZlbWVudFkgfHxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgIHNoZWxsLm1vdXNlWCArPSBtb3ZlbWVudFhcbiAgICBzaGVsbC5tb3VzZVkgKz0gbW92ZW1lbnRZXG4gIH0gZWxzZSB7XG4gICAgc2hlbGwubW91c2VYID0gZXYuY2xpZW50WCAtIHNoZWxsLmVsZW1lbnQub2Zmc2V0TGVmdFxuICAgIHNoZWxsLm1vdXNlWSA9IGV2LmNsaWVudFkgLSBzaGVsbC5lbGVtZW50Lm9mZnNldFRvcFxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oc2hlbGwsIGV2KSB7XG4gIGhhbmRsZUV2ZW50KHNoZWxsLCBldilcbiAgc2V0S2V5U3RhdGUoc2hlbGwsIG1vdXNlQ29kZXNbZXYuYnV0dG9uXSwgdHJ1ZSlcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoc2hlbGwsIGV2KSB7XG4gIGhhbmRsZUV2ZW50KHNoZWxsLCBldilcbiAgc2V0S2V5U3RhdGUoc2hlbGwsIG1vdXNlQ29kZXNbZXYuYnV0dG9uXSwgZmFsc2UpXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKHNoZWxsLCBldikge1xuICBoYW5kbGVFdmVudChzaGVsbCwgZXYpXG4gIGlmKHNoZWxsLl9wb2ludGVyTG9ja0FjdGl2ZSkge1xuICAgIHNoZWxsLnByZXZNb3VzZVggPSBzaGVsbC5tb3VzZVggPSBzaGVsbC53aWR0aD4+MVxuICAgIHNoZWxsLnByZXZNb3VzZVkgPSBzaGVsbC5tb3VzZVkgPSBzaGVsbC5oZWlnaHQ+PjFcbiAgfSBlbHNlIHtcbiAgICBzaGVsbC5wcmV2TW91c2VYID0gc2hlbGwubW91c2VYID0gZXYuY2xpZW50WCAtIHNoZWxsLmVsZW1lbnQub2Zmc2V0TGVmdFxuICAgIHNoZWxsLnByZXZNb3VzZVkgPSBzaGVsbC5tb3VzZVkgPSBldi5jbGllbnRZIC0gc2hlbGwuZWxlbWVudC5vZmZzZXRUb3BcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShzaGVsbCwgZXYpIHtcbiAgaGFuZGxlRXZlbnQoc2hlbGwsIGV2KVxuICBzZXRNb3VzZUJ1dHRvbnMoc2hlbGwsIDApXG4gIHJldHVybiBmYWxzZVxufVxuXG4vL0hhbmRsZSBtb3VzZSB3aGVlbCBldmVudHNcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoc2hlbGwsIGV2KSB7XG4gIGhhbmRsZUV2ZW50KHNoZWxsLCBldilcbiAgdmFyIHNjYWxlID0gMVxuICBzd2l0Y2goZXYuZGVsdGFNb2RlKSB7XG4gICAgY2FzZSAwOiAvL1BpeGVsXG4gICAgICBzY2FsZSA9IDFcbiAgICBicmVha1xuICAgIGNhc2UgMTogLy9MaW5lXG4gICAgICBzY2FsZSA9IDEyXG4gICAgYnJlYWtcbiAgICBjYXNlIDI6IC8vUGFnZVxuICAgICAgIHNjYWxlID0gc2hlbGwuaGVpZ2h0XG4gICAgYnJlYWtcbiAgfVxuICAvL0FkZCBzY3JvbGxcbiAgc2hlbGwuc2Nyb2xsWzBdICs9ICBldi5kZWx0YVggKiBzY2FsZVxuICBzaGVsbC5zY3JvbGxbMV0gKz0gIGV2LmRlbHRhWSAqIHNjYWxlXG4gIHNoZWxsLnNjcm9sbFsyXSArPSAoZXYuZGVsdGFaICogc2NhbGUpfHwwLjBcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnRleE1lbnUoc2hlbGwsIGV2KSB7XG4gIGhhbmRsZUV2ZW50KHNoZWxsLCBldilcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoc2hlbGwsIGV2KSB7XG4gIHZhciBuID0ga2V5TmFtZXMubGVuZ3RoXG4gICAgLCBjID0gc2hlbGwuX2N1cktleVN0YXRlXG4gICAgLCByID0gc2hlbGwuX3JlbGVhc2VDb3VudFxuICAgICwgaVxuICBmb3IoaT0wOyBpPG47ICsraSkge1xuICAgIGlmKGNbaV0pIHtcbiAgICAgICsrcltpXVxuICAgIH1cbiAgICBjW2ldID0gZmFsc2VcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzaXplRWxlbWVudChzaGVsbCwgZXYpIHtcbiAgdmFyIHcgPSBzaGVsbC5lbGVtZW50LmNsaWVudFdpZHRofDBcbiAgdmFyIGggPSBzaGVsbC5lbGVtZW50LmNsaWVudEhlaWdodHwwXG4gIGlmKCh3ICE9PSBzaGVsbC5fd2lkdGgpIHx8IChoICE9PSBzaGVsbC5faGVpZ2h0KSkge1xuICAgIHNoZWxsLl93aWR0aCA9IHdcbiAgICBzaGVsbC5faGVpZ2h0ID0gaFxuICAgIHNoZWxsLmVtaXQoXCJyZXNpemVcIiwgdywgaClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlRGVmYXVsdENvbnRhaW5lcigpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29udGFpbmVyLnRhYmluZGV4ID0gMVxuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcbiAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSBcIjBweFwiXG4gIGNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiMHB4XCJcbiAgY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiMHB4XCJcbiAgY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCJcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiXG4gIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiIC8vUHJldmVudCBib3VuY2VcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoZWxsKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgXG4gIC8vQ2hlY2sgZnVsbHNjcmVlbiBhbmQgcG9pbnRlciBsb2NrIGZsYWdzXG4gIHZhciB1c2VGdWxsc2NyZWVuID0gISFvcHRpb25zLmZ1bGxzY3JlZW5cbiAgdmFyIHVzZVBvaW50ZXJMb2NrID0gdXNlRnVsbHNjcmVlblxuICBpZih0eXBlb2Ygb3B0aW9ucy5wb2ludGVyTG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdXNlUG9pbnRlckxvY2sgPSAhIW9wdGlvbnMucG9pbnRlckxvY2tcbiAgfVxuICBcbiAgLy9DcmVhdGUgaW5pdGlhbCBzaGVsbFxuICB2YXIgc2hlbGwgPSBuZXcgR2FtZVNoZWxsKClcbiAgc2hlbGwuX3RpY2tSYXRlID0gb3B0aW9ucy50aWNrUmF0ZSB8fCAzMFxuICBzaGVsbC5mcmFtZVNraXAgPSBvcHRpb25zLmZyYW1lU2tpcCB8fCAoc2hlbGwuX3RpY2tSYXRlKzUpICogNVxuICBzaGVsbC5zdGlja3lGdWxsc2NyZWVuID0gISFvcHRpb25zLnN0aWNreUZ1bGxzY3JlZW4gfHwgISFvcHRpb25zLnN0aWNreVxuICBzaGVsbC5zdGlja3lQb2ludGVyTG9jayA9ICEhb3B0aW9ucy5zdGlja1BvaW50ZXJMb2NrIHx8ICFvcHRpb25zLnN0aWNreVxuICBcbiAgLy9TZXQgYmluZGluZ3NcbiAgaWYob3B0aW9ucy5iaW5kaW5ncykge1xuICAgIHNoZWxsLmJpbmRpbmdzID0gb3B0aW9ucy5iaW5kaW5nc1xuICB9XG4gIFxuICAvL1dhaXQgZm9yIGRvbSB0byBpbnRpYWlsaXplXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGRvbXJlYWR5KGZ1bmN0aW9uIGluaXRHYW1lU2hlbGwoKSB7XG4gICAgXG4gICAgLy9SZXRyaWV2ZSBlbGVtZW50XG4gICAgdmFyIGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnRcbiAgICBpZih0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpXG4gICAgICBpZighZSkge1xuICAgICAgICBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudClcbiAgICAgIH1cbiAgICAgIGlmKCFlKSB7XG4gICAgICAgIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlDbGFzcyhlbGVtZW50KVswXVxuICAgICAgfVxuICAgICAgaWYoIWUpIHtcbiAgICAgICAgZSA9IG1ha2VEZWZhdWx0Q29udGFpbmVyKClcbiAgICAgIH1cbiAgICAgIHNoZWxsLmVsZW1lbnQgPSBlXG4gICAgfSBlbHNlIGlmKHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmICEhZWxlbWVudCkge1xuICAgICAgc2hlbGwuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9IGVsc2UgaWYodHlwZW9mIGVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc2hlbGwuZWxlbWVudCA9IGVsZW1lbnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaGVsbC5lbGVtZW50ID0gbWFrZURlZmF1bHRDb250YWluZXIoKVxuICAgIH1cbiAgICBcbiAgICAvL0Rpc2FibGUgdXNlci1zZWxlY3RcbiAgICBpZihzaGVsbC5lbGVtZW50LnN0eWxlKSB7XG4gICAgICBzaGVsbC5lbGVtZW50LnN0eWxlW1wiLXdlYmtpdC10b3VjaC1jYWxsb3V0XCJdID0gXCJub25lXCJcbiAgICAgIHNoZWxsLmVsZW1lbnQuc3R5bGVbXCItd2Via2l0LXVzZXItc2VsZWN0XCJdID0gXCJub25lXCJcbiAgICAgIHNoZWxsLmVsZW1lbnQuc3R5bGVbXCIta2h0bWwtdXNlci1zZWxlY3RcIl0gPSBcIm5vbmVcIlxuICAgICAgc2hlbGwuZWxlbWVudC5zdHlsZVtcIi1tb3otdXNlci1zZWxlY3RcIl0gPSBcIm5vbmVcIlxuICAgICAgc2hlbGwuZWxlbWVudC5zdHlsZVtcIi1tcy11c2VyLXNlbGVjdFwiXSA9IFwibm9uZVwiXG4gICAgICBzaGVsbC5lbGVtZW50LnN0eWxlW1widXNlci1zZWxlY3RcIl0gPSBcIm5vbmVcIlxuICAgIH1cbiAgICBcbiAgICAvL0hvb2sgcmVzaXplIGhhbmRsZXJcbiAgICBzaGVsbC5fd2lkdGggPSBzaGVsbC5lbGVtZW50LmNsaWVudFdpZHRoXG4gICAgc2hlbGwuX2hlaWdodCA9IHNoZWxsLmVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGhhbmRsZVJlc2l6ZUVsZW1lbnQuYmluZCh1bmRlZmluZWQsIHNoZWxsKVxuICAgIGlmKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVSZXNpemUpXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNoZWxsLmVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2hlbGwuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NU3VidHJlZU1vZGlmaWVkXCIsIGhhbmRsZVJlc2l6ZSwgZmFsc2UpXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSwgZmFsc2UpXG4gICAgXG4gICAgLy9Ib29rIGtleWJvYXJkIGxpc3RlbmVyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24uYmluZCh1bmRlZmluZWQsIHNoZWxsKSwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVLZXlVcC5iaW5kKHVuZGVmaW5lZCwgc2hlbGwpLCBmYWxzZSlcbiAgICBcbiAgICAvL0Rpc2FibGUgcmlnaHQgY2xpY2tcbiAgICBzaGVsbC5lbGVtZW50Lm9uY29udGV4dG1lbnUgPSBoYW5kbGVDb250ZXhNZW51LmJpbmQodW5kZWZpbmVkLCBzaGVsbClcbiAgICBcbiAgICAvL0hvb2sgbW91c2UgbGlzdGVuZXJzXG4gICAgc2hlbGwuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bi5iaW5kKHVuZGVmaW5lZCwgc2hlbGwpLCBmYWxzZSlcbiAgICBzaGVsbC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXAuYmluZCh1bmRlZmluZWQsIHNoZWxsKSwgZmFsc2UpXG4gICAgc2hlbGwuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZS5iaW5kKHVuZGVmaW5lZCwgc2hlbGwpLCBmYWxzZSlcbiAgICBzaGVsbC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhhbmRsZU1vdXNlRW50ZXIuYmluZCh1bmRlZmluZWQsIHNoZWxsKSwgZmFsc2UpXG4gICAgXG4gICAgLy9Nb3VzZSBsZWF2ZVxuICAgIHZhciBsZWF2ZSA9IGhhbmRsZU1vdXNlTGVhdmUuYmluZCh1bmRlZmluZWQsIHNoZWxsKVxuICAgIHNoZWxsLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbGVhdmUsIGZhbHNlKVxuICAgIHNoZWxsLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGxlYXZlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbGVhdmUsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbGVhdmUsIGZhbHNlKVxuICAgIFxuICAgIC8vQmx1ciBldmVudCBcbiAgICB2YXIgYmx1ciA9IGhhbmRsZUJsdXIuYmluZCh1bmRlZmluZWQsIHNoZWxsKVxuICAgIHNoZWxsLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgYmx1ciwgZmFsc2UpXG4gICAgc2hlbGwuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYmx1ciwgZmFsc2UpXG4gICAgc2hlbGwuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgYmx1ciwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGJsdXIsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYmx1ciwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBibHVyLCBmYWxzZSlcblxuICAgIC8vTW91c2Ugd2hlZWwgaGFuZGxlclxuICAgIGFkZE1vdXNlV2hlZWwoc2hlbGwuZWxlbWVudCwgaGFuZGxlTW91c2VXaGVlbC5iaW5kKHVuZGVmaW5lZCwgc2hlbGwpLCBmYWxzZSlcblxuICAgIC8vRnVsbHNjcmVlbiBoYW5kbGVyXG4gICAgdmFyIGZ1bGxzY3JlZW5DaGFuZ2UgPSBoYW5kbGVGdWxsc2NyZWVuLmJpbmQodW5kZWZpbmVkLCBzaGVsbClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBmdWxsc2NyZWVuQ2hhbmdlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW96ZnVsbHNjcmVlbmNoYW5nZVwiLCBmdWxsc2NyZWVuQ2hhbmdlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLCBmdWxsc2NyZWVuQ2hhbmdlLCBmYWxzZSlcblxuICAgIC8vU3R1cGlkIGZ1bGxzY3JlZW4gaGFja1xuICAgIHNoZWxsLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyeUZ1bGxzY3JlZW4uYmluZCh1bmRlZmluZWQsIHNoZWxsKSwgZmFsc2UpXG5cbiAgICAvL1BvaW50ZXIgbG9jayBjaGFuZ2UgaGFuZGxlclxuICAgIHZhciBwb2ludGVyTG9ja0NoYW5nZSA9IGhhbmRsZVBvaW50ZXJMb2NrQ2hhbmdlLmJpbmQodW5kZWZpbmVkLCBzaGVsbClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmxvY2tjaGFuZ2VcIiwgcG9pbnRlckxvY2tDaGFuZ2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3pwb2ludGVybG9ja2NoYW5nZVwiLCBwb2ludGVyTG9ja0NoYW5nZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdHBvaW50ZXJsb2NrY2hhbmdlXCIsIHBvaW50ZXJMb2NrQ2hhbmdlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmxvY2tsb3N0XCIsIHBvaW50ZXJMb2NrQ2hhbmdlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0cG9pbnRlcmxvY2tsb3N0XCIsIHBvaW50ZXJMb2NrQ2hhbmdlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW96cG9pbnRlcmxvY2tsb3N0XCIsIHBvaW50ZXJMb2NrQ2hhbmdlLCBmYWxzZSlcbiAgICBcbiAgICAvL1VwZGF0ZSBmbGFnc1xuICAgIHNoZWxsLmZ1bGxzY3JlZW4gPSB1c2VGdWxsc2NyZWVuXG4gICAgc2hlbGwucG9pbnRlckxvY2sgPSB1c2VQb2ludGVyTG9ja1xuICBcbiAgICAvL0RlZmF1bHQgbW91c2UgYnV0dG9uIGFsaWFzZXNcbiAgICBzaGVsbC5iaW5kKFwibW91c2UtbGVmdFwiLCAgIFwibW91c2UtMVwiKVxuICAgIHNoZWxsLmJpbmQoXCJtb3VzZS1yaWdodFwiLCAgXCJtb3VzZS0zXCIpXG4gICAgc2hlbGwuYmluZChcIm1vdXNlLW1pZGRsZVwiLCBcIm1vdXNlLTJcIilcbiAgICBcbiAgICAvL0luaXRpYWxpemUgdGljayBjb3VudGVyXG4gICAgc2hlbGwuX2xhc3RUaWNrID0gaHJ0aW1lKClcbiAgICBzaGVsbC5zdGFydFRpbWUgPSBocnRpbWUoKVxuXG4gICAgLy9VbnBhdXNlIHNoZWxsXG4gICAgc2hlbGwucGF1c2VkID0gZmFsc2VcbiAgICBcbiAgICAvL0VtaXQgaW5pdGlhbGl6ZSBldmVudFxuICAgIHNoZWxsLmVtaXQoXCJpbml0XCIpXG4gIH0pfSwgMClcbiAgXG4gIHJldHVybiBzaGVsbFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNoZWxsXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZVVuaWZvcm1XcmFwcGVyICAgPSByZXF1aXJlKCcuL2xpYi9jcmVhdGUtdW5pZm9ybXMnKVxudmFyIGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL2xpYi9jcmVhdGUtYXR0cmlidXRlcycpXG52YXIgbWFrZVJlZmxlY3QgICAgICAgICAgICA9IHJlcXVpcmUoJy4vbGliL3JlZmxlY3QnKVxudmFyIHNoYWRlckNhY2hlICAgICAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9zaGFkZXItY2FjaGUnKVxudmFyIHJ1bnRpbWUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9ydW50aW1lLXJlZmxlY3QnKVxuXG4vL1NoYWRlciBvYmplY3RcbmZ1bmN0aW9uIFNoYWRlcihnbCkge1xuICB0aGlzLmdsICAgICAgICAgPSBnbFxuXG4gIC8vRGVmYXVsdCBpbml0aWFsaXplIHRoZXNlIHRvIG51bGxcbiAgdGhpcy5fdnJlZiAgICAgID0gXG4gIHRoaXMuX2ZyZWYgICAgICA9IFxuICB0aGlzLl9yZWxpbmsgICAgPVxuICB0aGlzLnZlcnRTaGFkZXIgPVxuICB0aGlzLmZyYWdTaGFkZXIgPVxuICB0aGlzLnByb2dyYW0gICAgPVxuICB0aGlzLmF0dHJpYnV0ZXMgPVxuICB0aGlzLnVuaWZvcm1zICAgPVxuICB0aGlzLnR5cGVzICAgICAgPSBudWxsXG59XG5cbnZhciBwcm90byA9IFNoYWRlci5wcm90b3R5cGVcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5wcm9ncmFtKSB7XG4gICAgdGhpcy5fcmVsaW5rKClcbiAgfVxuICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKVxufVxuXG5wcm90by5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIGlmKHRoaXMuX2ZyZWYpIHtcbiAgICB0aGlzLl9mcmVmLmRpc3Bvc2UoKVxuICB9XG4gIGlmKHRoaXMuX3ZyZWYpIHtcbiAgICB0aGlzLl92cmVmLmRpc3Bvc2UoKVxuICB9XG4gIHRoaXMuYXR0cmlidXRlcyA9XG4gIHRoaXMudHlwZXMgICAgICA9XG4gIHRoaXMudmVydFNoYWRlciA9XG4gIHRoaXMuZnJhZ1NoYWRlciA9XG4gIHRoaXMucHJvZ3JhbSAgICA9IFxuICB0aGlzLl9yZWxpbmsgICAgPSBcbiAgdGhpcy5fZnJlZiAgICAgID0gXG4gIHRoaXMuX3ZyZWYgICAgICA9IG51bGxcbn1cblxuZnVuY3Rpb24gY29tcGFyZUF0dHJpYnV0ZXMoYSwgYikge1xuICBpZihhLm5hbWUgPCBiLm5hbWUpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gMVxufVxuXG4vL1VwZGF0ZSBleHBvcnQgaG9vayBmb3IgZ2xzbGlmeS1saXZlXG5wcm90by51cGRhdGUgPSBmdW5jdGlvbihcbiAgICB2ZXJ0U291cmNlXG4gICwgZnJhZ1NvdXJjZVxuICAsIHVuaWZvcm1zXG4gICwgYXR0cmlidXRlcykge1xuXG4gIC8vSWYgb25seSBvbmUgb2JqZWN0IHBhc3NlZCwgYXNzdW1lIGdsc2xpZnkgc3R5bGUgb3V0cHV0XG4gIGlmKCFmcmFnU291cmNlIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgb2JqID0gdmVydFNvdXJjZVxuICAgIHZlcnRTb3VyY2UgPSBvYmoudmVydGV4XG4gICAgZnJhZ1NvdXJjZSA9IG9iai5mcmFnbWVudFxuICAgIHVuaWZvcm1zICAgPSBvYmoudW5pZm9ybXNcbiAgICBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXNcbiAgfVxuXG4gIHZhciB3cmFwcGVyID0gdGhpc1xuICB2YXIgZ2wgICAgICA9IHdyYXBwZXIuZ2xcblxuICAvL0NvbXBpbGUgdmVydGV4IGFuZCBmcmFnbWVudCBzaGFkZXJzXG4gIHZhciBwdnJlZiA9IHdyYXBwZXIuX3ZyZWZcbiAgd3JhcHBlci5fdnJlZiA9IHNoYWRlckNhY2hlLnNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydFNvdXJjZSlcbiAgaWYocHZyZWYpIHtcbiAgICBwdnJlZi5kaXNwb3NlKClcbiAgfVxuICB3cmFwcGVyLnZlcnRTaGFkZXIgPSB3cmFwcGVyLl92cmVmLnNoYWRlclxuICB2YXIgcGZyZWYgPSB0aGlzLl9mcmVmXG4gIHdyYXBwZXIuX2ZyZWYgPSBzaGFkZXJDYWNoZS5zaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ1NvdXJjZSlcbiAgaWYocGZyZWYpIHtcbiAgICBwZnJlZi5kaXNwb3NlKClcbiAgfVxuICB3cmFwcGVyLmZyYWdTaGFkZXIgPSB3cmFwcGVyLl9mcmVmLnNoYWRlclxuICBcbiAgLy9JZiB1bmlmb3Jtcy9hdHRyaWJ1dGVzIGlzIG5vdCBzcGVjaWZpZWQsIHVzZSBSVCByZWZsZWN0aW9uXG4gIGlmKCF1bmlmb3JtcyB8fCAhYXR0cmlidXRlcykge1xuXG4gICAgLy9DcmVhdGUgaW5pdGlhbCB0ZXN0IHByb2dyYW1cbiAgICB2YXIgdGVzdFByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgICBnbC5hdHRhY2hTaGFkZXIodGVzdFByb2dyYW0sIHdyYXBwZXIuZnJhZ1NoYWRlcilcbiAgICBnbC5hdHRhY2hTaGFkZXIodGVzdFByb2dyYW0sIHdyYXBwZXIudmVydFNoYWRlcilcbiAgICBnbC5saW5rUHJvZ3JhbSh0ZXN0UHJvZ3JhbSlcbiAgICBpZighZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0ZXN0UHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGVzdFByb2dyYW0pXG4gICAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGxpbmtpbmcgcHJvZ3JhbTonLCBlcnJMb2cpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgbGlua2luZyBwcm9ncmFtOicgKyBlcnJMb2cpXG4gICAgfVxuICAgIFxuICAgIC8vTG9hZCBkYXRhIGZyb20gcnVudGltZVxuICAgIHVuaWZvcm1zICAgPSB1bmlmb3JtcyAgIHx8IHJ1bnRpbWUudW5pZm9ybXMoZ2wsIHRlc3RQcm9ncmFtKVxuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHJ1bnRpbWUuYXR0cmlidXRlcyhnbCwgdGVzdFByb2dyYW0pXG5cbiAgICAvL1JlbGVhc2UgdGVzdCBwcm9ncmFtXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbSh0ZXN0UHJvZ3JhbSlcbiAgfVxuXG4gIC8vU29ydCBhdHRyaWJ1dGVzIGxleGljb2dyYXBoaWNhbGx5XG4gIC8vIG92ZXJyaWRlcyB1bmRlZmluZWQgV2ViR0wgYmVoYXZpb3IgZm9yIGF0dHJpYnV0ZSBsb2NhdGlvbnNcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuc2xpY2UoKVxuICBhdHRyaWJ1dGVzLnNvcnQoY29tcGFyZUF0dHJpYnV0ZXMpXG5cbiAgLy9Db252ZXJ0IGF0dHJpYnV0ZSB0eXBlcywgcmVhZCBvdXQgbG9jYXRpb25zXG4gIHZhciBhdHRyaWJ1dGVVbnBhY2tlZCAgPSBbXVxuICB2YXIgYXR0cmlidXRlTmFtZXMgICAgID0gW11cbiAgdmFyIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPGF0dHJpYnV0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYXR0ciA9IGF0dHJpYnV0ZXNbaV1cbiAgICBpZihhdHRyLnR5cGUuaW5kZXhPZignbWF0JykgPj0gMCkge1xuICAgICAgdmFyIHNpemUgPSBhdHRyLnR5cGUuY2hhckF0KGF0dHIudHlwZS5sZW5ndGgtMSl8MFxuICAgICAgdmFyIGxvY1ZlY3RvciA9IG5ldyBBcnJheShzaXplKVxuICAgICAgZm9yKHZhciBqPTA7IGo8c2l6ZTsgKytqKSB7XG4gICAgICAgIGxvY1ZlY3RvcltqXSA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5sZW5ndGhcbiAgICAgICAgYXR0cmlidXRlTmFtZXMucHVzaChhdHRyLm5hbWUgKyAnWycgKyBqICsgJ10nKVxuICAgICAgICBpZih0eXBlb2YgYXR0ci5sb2NhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMucHVzaChhdHRyLmxvY2F0aW9uICsgailcbiAgICAgICAgfSBlbHNlIGlmKEFycmF5LmlzQXJyYXkoYXR0ci5sb2NhdGlvbikgJiYgXG4gICAgICAgICAgICAgICAgICBhdHRyLmxvY2F0aW9uLmxlbmd0aCA9PT0gc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgdHlwZW9mIGF0dHIubG9jYXRpb25bal0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zLnB1c2goYXR0ci5sb2NhdGlvbltqXXwwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucy5wdXNoKC0xKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdHRyaWJ1dGVVbnBhY2tlZC5wdXNoKHtcbiAgICAgICAgbmFtZTogYXR0ci5uYW1lLFxuICAgICAgICB0eXBlOiBhdHRyLnR5cGUsXG4gICAgICAgIGxvY2F0aW9uczogbG9jVmVjdG9yXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyaWJ1dGVVbnBhY2tlZC5wdXNoKHtcbiAgICAgICAgbmFtZTogYXR0ci5uYW1lLFxuICAgICAgICB0eXBlOiBhdHRyLnR5cGUsXG4gICAgICAgIGxvY2F0aW9uczogWyBhdHRyaWJ1dGVMb2NhdGlvbnMubGVuZ3RoIF1cbiAgICAgIH0pXG4gICAgICBhdHRyaWJ1dGVOYW1lcy5wdXNoKGF0dHIubmFtZSlcbiAgICAgIGlmKHR5cGVvZiBhdHRyLmxvY2F0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMucHVzaChhdHRyLmxvY2F0aW9ufDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMucHVzaCgtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL0ZvciBhbGwgdW5zcGVjaWZpZWQgYXR0cmlidXRlcywgYXNzaWduIHRoZW0gbGV4aWNvZ3JhcGhpY2FsbHkgbWluIGF0dHJpYnV0ZVxuICB2YXIgY3VyTG9jYXRpb24gPSAwXG4gIGZvcih2YXIgaT0wOyBpPGF0dHJpYnV0ZUxvY2F0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgIGlmKGF0dHJpYnV0ZUxvY2F0aW9uc1tpXSA8IDApIHtcbiAgICAgIHdoaWxlKGF0dHJpYnV0ZUxvY2F0aW9ucy5pbmRleE9mKGN1ckxvY2F0aW9uKSA+PSAwKSB7XG4gICAgICAgIGN1ckxvY2F0aW9uICs9IDFcbiAgICAgIH1cbiAgICAgIGF0dHJpYnV0ZUxvY2F0aW9uc1tpXSA9IGN1ckxvY2F0aW9uXG4gICAgfVxuICB9XG5cbiAgLy9SZWJ1aWxkIHByb2dyYW0gYW5kIHJlY29tcHV0ZSBhbGwgdW5pZm9ybSBsb2NhdGlvbnNcbiAgdmFyIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQXJyYXkodW5pZm9ybXMubGVuZ3RoKVxuICBmdW5jdGlvbiByZWxpbmsoKSB7XG4gICAgd3JhcHBlci5wcm9ncmFtID0gc2hhZGVyQ2FjaGUucHJvZ3JhbShcbiAgICAgICAgZ2xcbiAgICAgICwgd3JhcHBlci5fdnJlZlxuICAgICAgLCB3cmFwcGVyLl9mcmVmXG4gICAgICAsIGF0dHJpYnV0ZU5hbWVzXG4gICAgICAsIGF0dHJpYnV0ZUxvY2F0aW9ucylcblxuICAgIGZvcih2YXIgaT0wOyBpPHVuaWZvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgICB1bmlmb3JtTG9jYXRpb25zW2ldID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxuICAgICAgICAgIHdyYXBwZXIucHJvZ3JhbVxuICAgICAgICAsIHVuaWZvcm1zW2ldLm5hbWUpXG4gICAgfVxuICB9XG5cbiAgLy9QZXJmb3JtIGluaXRpYWwgbGlua2luZywgcmV1c2UgcHJvZ3JhbSB1c2VkIGZvciByZWZsZWN0aW9uXG4gIHJlbGluaygpXG5cbiAgLy9TYXZlIHJlbGlua2luZyBwcm9jZWR1cmUsIGRlZmVyIHVudGlsIHJ1bnRpbWVcbiAgd3JhcHBlci5fcmVsaW5rID0gcmVsaW5rXG5cbiAgLy9HZW5lcmF0ZSB0eXBlIGluZm9cbiAgd3JhcHBlci50eXBlcyA9IHtcbiAgICB1bmlmb3JtczogICBtYWtlUmVmbGVjdCh1bmlmb3JtcyksXG4gICAgYXR0cmlidXRlczogbWFrZVJlZmxlY3QoYXR0cmlidXRlcylcbiAgfVxuXG4gIC8vR2VuZXJhdGUgYXR0cmlidXRlIHdyYXBwZXJzXG4gIHdyYXBwZXIuYXR0cmlidXRlcyA9IGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXIoXG4gICAgICBnbFxuICAgICwgd3JhcHBlclxuICAgICwgYXR0cmlidXRlVW5wYWNrZWRcbiAgICAsIGF0dHJpYnV0ZUxvY2F0aW9ucylcblxuICAvL0dlbmVyYXRlIHVuaWZvcm0gd3JhcHBlcnNcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdyYXBwZXIsICd1bmlmb3JtcycsIGNyZWF0ZVVuaWZvcm1XcmFwcGVyKFxuICAgICAgZ2xcbiAgICAsIHdyYXBwZXJcbiAgICAsIHVuaWZvcm1zXG4gICAgLCB1bmlmb3JtTG9jYXRpb25zKSlcbn1cblxuLy9Db21waWxlcyBhbmQgbGlua3MgYSBzaGFkZXIgcHJvZ3JhbSB3aXRoIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYW5kIHZlcnRleCBsaXN0XG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoXG4gICAgZ2xcbiAgLCB2ZXJ0U291cmNlXG4gICwgZnJhZ1NvdXJjZVxuICAsIHVuaWZvcm1zXG4gICwgYXR0cmlidXRlcykge1xuXG4gIHZhciBzaGFkZXIgPSBuZXcgU2hhZGVyKGdsKVxuXG4gIHNoYWRlci51cGRhdGUoXG4gICAgICB2ZXJ0U291cmNlXG4gICAgLCBmcmFnU291cmNlXG4gICAgLCB1bmlmb3Jtc1xuICAgICwgYXR0cmlidXRlcylcblxuICByZXR1cm4gc2hhZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hhZGVyIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXR0cmlidXRlV3JhcHBlclxuXG5mdW5jdGlvbiBTaGFkZXJBdHRyaWJ1dGUoXG4gICAgZ2xcbiAgLCB3cmFwcGVyXG4gICwgaW5kZXhcbiAgLCBsb2NhdGlvbnNcbiAgLCBkaW1lbnNpb25cbiAgLCBjb25zdEZ1bmMpIHtcbiAgdGhpcy5fZ2wgICAgICAgID0gZ2xcbiAgdGhpcy5fd3JhcHBlciAgID0gd3JhcHBlclxuICB0aGlzLl9pbmRleCAgICAgPSBpbmRleFxuICB0aGlzLl9sb2NhdGlvbnMgPSBsb2NhdGlvbnNcbiAgdGhpcy5fZGltZW5zaW9uID0gZGltZW5zaW9uXG4gIHRoaXMuX2NvbnN0RnVuYyA9IGNvbnN0RnVuY1xufVxuXG52YXIgcHJvdG8gPSBTaGFkZXJBdHRyaWJ1dGUucHJvdG90eXBlXG5cbnByb3RvLnBvaW50ZXIgPSBmdW5jdGlvbiBzZXRBdHRyaWJQb2ludGVyKFxuICAgIHR5cGVcbiAgLCBub3JtYWxpemVkXG4gICwgc3RyaWRlXG4gICwgb2Zmc2V0KSB7XG5cbiAgdmFyIHNlbGYgICAgICA9IHRoaXNcbiAgdmFyIGdsICAgICAgICA9IHNlbGYuX2dsXG4gIHZhciBsb2NhdGlvbiAgPSBzZWxmLl9sb2NhdGlvbnNbc2VsZi5faW5kZXhdXG5cbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgIGxvY2F0aW9uXG4gICAgLCBzZWxmLl9kaW1lbnNpb25cbiAgICAsIHR5cGUgfHwgZ2wuRkxPQVRcbiAgICAsICEhbm9ybWFsaXplZFxuICAgICwgc3RyaWRlIHx8IDBcbiAgICAsIG9mZnNldCB8fCAwKVxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbilcbn1cblxucHJvdG8uc2V0ID0gZnVuY3Rpb24oeDAsIHgxLCB4MiwgeDMpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnN0RnVuYyh0aGlzLl9sb2NhdGlvbnNbdGhpcy5faW5kZXhdLCB4MCwgeDEsIHgyLCB4Mylcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbG9jYXRpb24nLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uc1t0aGlzLl9pbmRleF1cbiAgfVxuICAsIHNldDogZnVuY3Rpb24odikge1xuICAgIGlmKHYgIT09IHRoaXMuX2xvY2F0aW9uc1t0aGlzLl9pbmRleF0pIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uc1t0aGlzLl9pbmRleF0gPSB2fDBcbiAgICAgIHRoaXMuX3dyYXBwZXIucHJvZ3JhbSA9IG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHZ8MFxuICB9XG59KVxuXG4vL0FkZHMgYSB2ZWN0b3IgYXR0cmlidXRlIHRvIG9ialxuZnVuY3Rpb24gYWRkVmVjdG9yQXR0cmlidXRlKFxuICAgIGdsXG4gICwgd3JhcHBlclxuICAsIGluZGV4XG4gICwgbG9jYXRpb25zXG4gICwgZGltZW5zaW9uXG4gICwgb2JqXG4gICwgbmFtZSkge1xuXG4gIC8vQ29uc3RydWN0IGNvbnN0YW50IGZ1bmN0aW9uXG4gIHZhciBjb25zdEZ1bmNBcmdzID0gWyAnZ2wnLCAndicgXVxuICB2YXIgdmFyTmFtZXMgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvbnN0RnVuY0FyZ3MucHVzaCgneCcraSlcbiAgICB2YXJOYW1lcy5wdXNoKCd4JytpKVxuICB9XG4gIGNvbnN0RnVuY0FyZ3MucHVzaChcbiAgICAnaWYoeDAubGVuZ3RoPT09dm9pZCAwKXtyZXR1cm4gZ2wudmVydGV4QXR0cmliJyArXG4gICAgZGltZW5zaW9uICsgJ2YodiwnICtcbiAgICB2YXJOYW1lcy5qb2luKCkgK1xuICAgICcpfWVsc2V7cmV0dXJuIGdsLnZlcnRleEF0dHJpYicgK1xuICAgIGRpbWVuc2lvbiArXG4gICAgJ2Z2KHYseDApfScpXG4gIHZhciBjb25zdEZ1bmMgPSBGdW5jdGlvbi5hcHBseShudWxsLCBjb25zdEZ1bmNBcmdzKVxuXG4gIC8vQ3JlYXRlIGF0dHJpYnV0ZSB3cmFwcGVyXG4gIHZhciBhdHRyID0gbmV3IFNoYWRlckF0dHJpYnV0ZShcbiAgICAgIGdsXG4gICAgLCB3cmFwcGVyXG4gICAgLCBpbmRleFxuICAgICwgbG9jYXRpb25zXG4gICAgLCBkaW1lbnNpb25cbiAgICAsIGNvbnN0RnVuYylcblxuICAvL0NyZWF0ZSBhY2Nlc3NvclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgc2V0OiBmdW5jdGlvbih4KSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb25zW2luZGV4XSlcbiAgICAgIGNvbnN0RnVuYyhnbCwgbG9jYXRpb25zW2luZGV4XSwgeClcbiAgICAgIHJldHVybiB4XG4gICAgfVxuICAgICwgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhdHRyXG4gICAgfVxuICAgICwgZW51bWVyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRNYXRyaXhBdHRyaWJ1dGUoXG4gICAgZ2xcbiAgLCB3cmFwcGVyXG4gICwgaW5kZXhcbiAgLCBsb2NhdGlvbnNcbiAgLCBkaW1lbnNpb25cbiAgLCBvYmpcbiAgLCBuYW1lKSB7XG5cbiAgdmFyIHBhcnRzID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgdmFyIGF0dHJzID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoXG4gICAgICAgIGdsXG4gICAgICAsIHdyYXBwZXJcbiAgICAgICwgaW5kZXhbaV1cbiAgICAgICwgbG9jYXRpb25zXG4gICAgICAsIGRpbWVuc2lvblxuICAgICAgLCBwYXJ0c1xuICAgICAgLCBpKVxuICAgIGF0dHJzW2ldID0gcGFydHNbaV1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwYXJ0cywgJ2xvY2F0aW9uJywge1xuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheSkge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgICAgIGF0dHJzW2ldLmxvY2F0aW9uID0gdltpXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgICAgIHJlc3VsdFtpXSA9IGF0dHJzW2ldLmxvY2F0aW9uID0gdiArIGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICB9XG4gICAgLCBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gICAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgICByZXN1bHRbaV0gPSBsb2NhdGlvbnNbaW5kZXhbaV1dXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgICwgZW51bWVyYWJsZTogdHJ1ZVxuICB9KVxuXG4gIHBhcnRzLnBvaW50ZXIgPSBmdW5jdGlvbih0eXBlLCBub3JtYWxpemVkLCBzdHJpZGUsIG9mZnNldCkge1xuICAgIHR5cGUgICAgICAgPSB0eXBlIHx8IGdsLkZMT0FUXG4gICAgbm9ybWFsaXplZCA9ICEhbm9ybWFsaXplZFxuICAgIHN0cmlkZSAgICAgPSBzdHJpZGUgfHwgKGRpbWVuc2lvbiAqIGRpbWVuc2lvbilcbiAgICBvZmZzZXQgICAgID0gb2Zmc2V0IHx8IDBcbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgdmFyIGxvY2F0aW9uID0gbG9jYXRpb25zW2luZGV4W2ldXVxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgLCBkaW1lbnNpb25cbiAgICAgICAgICAsIHR5cGVcbiAgICAgICAgICAsIG5vcm1hbGl6ZWRcbiAgICAgICAgICAsIHN0cmlkZVxuICAgICAgICAgICwgb2Zmc2V0ICsgaSAqIGRpbWVuc2lvbilcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHZhciBzY3JhdGNoID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgdmFyIHZlcnRleEF0dHJpYiA9IGdsWyd2ZXJ0ZXhBdHRyaWInICsgZGltZW5zaW9uICsgJ2Z2J11cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgc2V0OiBmdW5jdGlvbih4KSB7XG4gICAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgICB2YXIgbG9jID0gbG9jYXRpb25zW2luZGV4W2ldXVxuICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KHhbMF0pKSB7XG4gICAgICAgICAgdmVydGV4QXR0cmliLmNhbGwoZ2wsIGxvYywgeFtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikge1xuICAgICAgICAgICAgc2NyYXRjaFtqXSA9IHhbZGltZW5zaW9uKmkgKyBqXVxuICAgICAgICAgIH1cbiAgICAgICAgICB2ZXJ0ZXhBdHRyaWIuY2FsbChnbCwgbG9jLCBzY3JhdGNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4geFxuICAgIH1cbiAgICAsIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGFydHNcbiAgICB9XG4gICAgLCBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8vQ3JlYXRlIHNoaW1zIGZvciBhdHRyaWJ1dGVzXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyKFxuICAgIGdsXG4gICwgd3JhcHBlclxuICAsIGF0dHJpYnV0ZXNcbiAgLCBsb2NhdGlvbnMpIHtcblxuICB2YXIgb2JqID0ge31cbiAgZm9yKHZhciBpPTAsIG49YXR0cmlidXRlcy5sZW5ndGg7IGk8bjsgKytpKSB7XG5cbiAgICB2YXIgYSA9IGF0dHJpYnV0ZXNbaV1cbiAgICB2YXIgbmFtZSA9IGEubmFtZVxuICAgIHZhciB0eXBlID0gYS50eXBlXG4gICAgdmFyIGxvY3MgPSBhLmxvY2F0aW9uc1xuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgYWRkVmVjdG9yQXR0cmlidXRlKFxuICAgICAgICAgICAgZ2xcbiAgICAgICAgICAsIHdyYXBwZXJcbiAgICAgICAgICAsIGxvY3NbMF1cbiAgICAgICAgICAsIGxvY2F0aW9uc1xuICAgICAgICAgICwgMVxuICAgICAgICAgICwgb2JqXG4gICAgICAgICAgLCBuYW1lKVxuICAgICAgYnJlYWtcbiAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYodHlwZS5pbmRleE9mKCd2ZWMnKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIGdsXG4gICAgICAgICAgICAsIHdyYXBwZXJcbiAgICAgICAgICAgICwgbG9jc1swXVxuICAgICAgICAgICAgLCBsb2NhdGlvbnNcbiAgICAgICAgICAgICwgZFxuICAgICAgICAgICAgLCBvYmpcbiAgICAgICAgICAgICwgbmFtZSlcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUuaW5kZXhPZignbWF0JykgPj0gMCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlIGZvciBhdHRyaWJ1dGUgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkTWF0cml4QXR0cmlidXRlKFxuICAgICAgICAgICAgICBnbFxuICAgICAgICAgICAgLCB3cmFwcGVyXG4gICAgICAgICAgICAsIGxvY3NcbiAgICAgICAgICAgICwgbG9jYXRpb25zXG4gICAgICAgICAgICAsIGRcbiAgICAgICAgICAgICwgb2JqXG4gICAgICAgICAgICAsIG5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gZGF0YSB0eXBlIGZvciBhdHRyaWJ1dGUgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29hbGxlc2NlVW5pZm9ybXMgPSByZXF1aXJlKCcuL3JlZmxlY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVVuaWZvcm1XcmFwcGVyXG5cbi8vQmluZHMgYSBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIHZhbHVlXG5mdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gIHZhciBjID0gbmV3IEZ1bmN0aW9uKCd5JywgJ3JldHVybiBmdW5jdGlvbigpe3JldHVybiB5fScpXG4gIHJldHVybiBjKHgpXG59XG5cbmZ1bmN0aW9uIG1ha2VWZWN0b3IobGVuZ3RoLCBmaWxsKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICBmb3IodmFyIGk9MDsgaTxsZW5ndGg7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IGZpbGxcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vQ3JlYXRlIHNoaW1zIGZvciB1bmlmb3Jtc1xuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVdyYXBwZXIoZ2wsIHdyYXBwZXIsIHVuaWZvcm1zLCBsb2NhdGlvbnMpIHtcblxuICBmdW5jdGlvbiBtYWtlR2V0dGVyKGluZGV4KSB7XG4gICAgdmFyIHByb2MgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdnbCdcbiAgICAgICwgJ3dyYXBwZXInXG4gICAgICAsICdsb2NhdGlvbnMnXG4gICAgICAsICdyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZ2wuZ2V0VW5pZm9ybSh3cmFwcGVyLnByb2dyYW0sbG9jYXRpb25zWycgKyBpbmRleCArICddKX0nKSBcbiAgICByZXR1cm4gcHJvYyhnbCwgd3JhcHBlciwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVByb3BTZXR0ZXIocGF0aCwgaW5kZXgsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtMWkobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAnZ2wudW5pZm9ybTFmKGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHZpZHggPSB0eXBlLmluZGV4T2YoJ3ZlYycpXG4gICAgICAgIGlmKDAgPD0gdmlkeCAmJiB2aWR4IDw9IDEgJiYgdHlwZS5sZW5ndGggPT09IDQgKyB2aWR4KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2godHlwZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2l2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2Z2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVucmVjb2duaXplZCBkYXRhIHR5cGUgZm9yIHZlY3RvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHR5cGUuaW5kZXhPZignbWF0JykgPT09IDAgJiYgdHlwZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIHVuaWZvcm0gZGltZW5zaW9uIHR5cGUgZm9yIG1hdHJpeCAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm1NYXRyaXgnICsgZCArICdmdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sZmFsc2Usb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biB1bmlmb3JtIGRhdGEgdHlwZSBmb3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbnVtZXJhdGVJbmRpY2VzKHByZWZpeCwgdHlwZSkge1xuICAgIGlmKHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFsgW3ByZWZpeCwgdHlwZV0gXVxuICAgIH1cbiAgICB2YXIgaW5kaWNlcyA9IFtdXG4gICAgZm9yKHZhciBpZCBpbiB0eXBlKSB7XG4gICAgICB2YXIgcHJvcCA9IHR5cGVbaWRdXG4gICAgICB2YXIgdHByZWZpeCA9IHByZWZpeFxuICAgICAgaWYocGFyc2VJbnQoaWQpICsgJycgPT09IGlkKSB7XG4gICAgICAgIHRwcmVmaXggKz0gJ1snICsgaWQgKyAnXSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRwcmVmaXggKz0gJy4nICsgaWRcbiAgICAgIH1cbiAgICAgIGlmKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpbmRpY2VzLnB1c2guYXBwbHkoaW5kaWNlcywgZW51bWVyYXRlSW5kaWNlcyh0cHJlZml4LCBwcm9wKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGljZXMucHVzaChbdHByZWZpeCwgcHJvcF0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2V0dGVyKHR5cGUpIHtcbiAgICB2YXIgY29kZSA9IFsgJ3JldHVybiBmdW5jdGlvbiB1cGRhdGVQcm9wZXJ0eShvYmopeycgXVxuICAgIHZhciBpbmRpY2VzID0gZW51bWVyYXRlSW5kaWNlcygnJywgdHlwZSlcbiAgICBmb3IodmFyIGk9MDsgaTxpbmRpY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgaXRlbSA9IGluZGljZXNbaV1cbiAgICAgIHZhciBwYXRoID0gaXRlbVswXVxuICAgICAgdmFyIGlkeCAgPSBpdGVtWzFdXG4gICAgICBpZihsb2NhdGlvbnNbaWR4XSkge1xuICAgICAgICBjb2RlLnB1c2gobWFrZVByb3BTZXR0ZXIocGF0aCwgaWR4LCB1bmlmb3Jtc1tpZHhdLnR5cGUpKVxuICAgICAgfVxuICAgIH1cbiAgICBjb2RlLnB1c2goJ3JldHVybiBvYmp9JylcbiAgICB2YXIgcHJvYyA9IG5ldyBGdW5jdGlvbignZ2wnLCAnbG9jYXRpb25zJywgY29kZS5qb2luKCdcXG4nKSlcbiAgICByZXR1cm4gcHJvYyhnbCwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgIHJldHVybiAwXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAwLjBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2aWR4ID0gdHlwZS5pbmRleE9mKCd2ZWMnKVxuICAgICAgICBpZigwIDw9IHZpZHggJiYgdmlkeCA8PSAxICYmIHR5cGUubGVuZ3RoID09PSA0ICsgdmlkeCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodHlwZS5jaGFyQXQoMCkgPT09ICdiJykge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VWZWN0b3IoZCwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYWtlVmVjdG9yKGQsIDApXG4gICAgICAgIH0gZWxzZSBpZih0eXBlLmluZGV4T2YoJ21hdCcpID09PSAwICYmIHR5cGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCB1bmlmb3JtIGRpbWVuc2lvbiB0eXBlIGZvciBtYXRyaXggJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1ha2VWZWN0b3IoZCpkLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBVbmtub3duIHVuaWZvcm0gZGF0YSB0eXBlIGZvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlUHJvcGVydHkob2JqLCBwcm9wLCB0eXBlKSB7XG4gICAgaWYodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGQgPSBwcm9jZXNzT2JqZWN0KHR5cGUpXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgIGdldDogaWRlbnRpdHkoY2hpbGQpLFxuICAgICAgICBzZXQ6IG1ha2VTZXR0ZXIodHlwZSksXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGxvY2F0aW9uc1t0eXBlXSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgICAgICAgZ2V0OiBtYWtlR2V0dGVyKHR5cGUpLFxuICAgICAgICAgIHNldDogbWFrZVNldHRlcih0eXBlKSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtwcm9wXSA9IGRlZmF1bHRWYWx1ZSh1bmlmb3Jtc1t0eXBlXS50eXBlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NPYmplY3Qob2JqKSB7XG4gICAgdmFyIHJlc3VsdFxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpXG4gICAgICBmb3IodmFyIGk9MDsgaTxvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3RvcmVQcm9wZXJ0eShyZXN1bHQsIGksIG9ialtpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge31cbiAgICAgIGZvcih2YXIgaWQgaW4gb2JqKSB7XG4gICAgICAgIHN0b3JlUHJvcGVydHkocmVzdWx0LCBpZCwgb2JqW2lkXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy9SZXR1cm4gZGF0YVxuICB2YXIgY29hbGxlc2NlZCA9IGNvYWxsZXNjZVVuaWZvcm1zKHVuaWZvcm1zLCB0cnVlKVxuICByZXR1cm4ge1xuICAgIGdldDogaWRlbnRpdHkocHJvY2Vzc09iamVjdChjb2FsbGVzY2VkKSksXG4gICAgc2V0OiBtYWtlU2V0dGVyKGNvYWxsZXNjZWQpLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VSZWZsZWN0VHlwZXNcblxuLy9Db25zdHJ1Y3QgdHlwZSBpbmZvIGZvciByZWZsZWN0aW9uLlxuLy9cbi8vIFRoaXMgaXRlcmF0ZXMgb3ZlciB0aGUgZmxhdHRlbmVkIGxpc3Qgb2YgdW5pZm9ybSB0eXBlIHZhbHVlcyBhbmQgc21hc2hlcyB0aGVtIGludG8gYSBKU09OIG9iamVjdC5cbi8vXG4vLyBUaGUgbGVhdmVzIG9mIHRoZSByZXN1bHRpbmcgb2JqZWN0IGFyZSBlaXRoZXIgaW5kaWNlcyBvciB0eXBlIHN0cmluZ3MgcmVwcmVzZW50aW5nIHByaW1pdGl2ZSBnbHNsaWZ5IHR5cGVzXG5mdW5jdGlvbiBtYWtlUmVmbGVjdFR5cGVzKHVuaWZvcm1zLCB1c2VJbmRleCkge1xuICB2YXIgb2JqID0ge31cbiAgZm9yKHZhciBpPTA7IGk8dW5pZm9ybXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgbiA9IHVuaWZvcm1zW2ldLm5hbWVcbiAgICB2YXIgcGFydHMgPSBuLnNwbGl0KFwiLlwiKVxuICAgIHZhciBvID0gb2JqXG4gICAgZm9yKHZhciBqPTA7IGo8cGFydHMubGVuZ3RoOyArK2opIHtcbiAgICAgIHZhciB4ID0gcGFydHNbal0uc3BsaXQoXCJbXCIpXG4gICAgICBpZih4Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYoISh4WzBdIGluIG8pKSB7XG4gICAgICAgICAgb1t4WzBdXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgbyA9IG9beFswXV1cbiAgICAgICAgZm9yKHZhciBrPTE7IGs8eC5sZW5ndGg7ICsraykge1xuICAgICAgICAgIHZhciB5ID0gcGFyc2VJbnQoeFtrXSlcbiAgICAgICAgICBpZihrPHgubGVuZ3RoLTEgfHwgajxwYXJ0cy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgaWYoISh5IGluIG8pKSB7XG4gICAgICAgICAgICAgIGlmKGsgPCB4Lmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgb1t5XSA9IFtdXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb1t5XSA9IHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBvW3ldXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHVzZUluZGV4KSB7XG4gICAgICAgICAgICAgIG9beV0gPSBpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvW3ldID0gdW5pZm9ybXNbaV0udHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKGogPCBwYXJ0cy5sZW5ndGgtMSkge1xuICAgICAgICBpZighKHhbMF0gaW4gbykpIHtcbiAgICAgICAgICBvW3hbMF1dID0ge31cbiAgICAgICAgfVxuICAgICAgICBvID0gb1t4WzBdXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYodXNlSW5kZXgpIHtcbiAgICAgICAgICBvW3hbMF1dID0gaVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9beFswXV0gPSB1bmlmb3Jtc1tpXS50eXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufSIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnVuaWZvcm1zICAgID0gcnVudGltZVVuaWZvcm1zXG5leHBvcnRzLmF0dHJpYnV0ZXMgID0gcnVudGltZUF0dHJpYnV0ZXNcblxudmFyIEdMX1RPX0dMU0xfVFlQRVMgPSB7XG4gICdGTE9BVCc6ICAgICAgICdmbG9hdCcsXG4gICdGTE9BVF9WRUMyJzogICd2ZWMyJyxcbiAgJ0ZMT0FUX1ZFQzMnOiAgJ3ZlYzMnLFxuICAnRkxPQVRfVkVDNCc6ICAndmVjNCcsXG4gICdJTlQnOiAgICAgICAgICdpbnQnLFxuICAnSU5UX1ZFQzInOiAgICAnaXZlYzInLFxuICAnSU5UX1ZFQzMnOiAgICAnaXZlYzMnLFxuICAnSU5UX1ZFQzQnOiAgICAnaXZlYzQnLFxuICAnQk9PTCc6ICAgICAgICAnYm9vbCcsXG4gICdCT09MX1ZFQzInOiAgICdidmVjMicsXG4gICdCT09MX1ZFQzMnOiAgICdidmVjMycsXG4gICdCT09MX1ZFQzQnOiAgICdidmVjNCcsXG4gICdGTE9BVF9NQVQyJzogICdtYXQyJyxcbiAgJ0ZMT0FUX01BVDMnOiAgJ21hdDMnLFxuICAnRkxPQVRfTUFUNCc6ICAnbWF0NCcsXG4gICdTQU1QTEVSXzJEJzogICdzYW1wbGVyMkQnLFxuICAnU0FNUExFUl9DVUJFJzonc2FtcGxlckN1YmUnXG59XG5cbnZhciBHTF9UQUJMRSA9IG51bGxcblxuZnVuY3Rpb24gZ2V0VHlwZShnbCwgdHlwZSkge1xuICBpZighR0xfVEFCTEUpIHtcbiAgICB2YXIgdHlwZU5hbWVzID0gT2JqZWN0LmtleXMoR0xfVE9fR0xTTF9UWVBFUylcbiAgICBHTF9UQUJMRSA9IHt9XG4gICAgZm9yKHZhciBpPTA7IGk8dHlwZU5hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgdG4gPSB0eXBlTmFtZXNbaV1cbiAgICAgIEdMX1RBQkxFW2dsW3RuXV0gPSBHTF9UT19HTFNMX1RZUEVTW3RuXVxuICAgIH1cbiAgfVxuICByZXR1cm4gR0xfVEFCTEVbdHlwZV1cbn1cblxuZnVuY3Rpb24gcnVudGltZVVuaWZvcm1zKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKVxuICB2YXIgcmVzdWx0ID0gW11cbiAgZm9yKHZhciBpPTA7IGk8bnVtVW5pZm9ybXM7ICsraSkge1xuICAgIHZhciBpbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKVxuICAgIGlmKGluZm8pIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgbmFtZTogaW5mby5uYW1lLFxuICAgICAgICB0eXBlOiBnZXRUeXBlKGdsLCBpbmZvLnR5cGUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHJ1bnRpbWVBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBudW1BdHRyaWJ1dGVzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfQVRUUklCVVRFUylcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPG51bUF0dHJpYnV0ZXM7ICsraSkge1xuICAgIHZhciBpbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKHByb2dyYW0sIGkpXG4gICAgaWYoaW5mbykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBuYW1lOiBpbmZvLm5hbWUsXG4gICAgICAgIHR5cGU6IGdldFR5cGUoZ2wsIGluZm8udHlwZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5zaGFkZXIgICA9IGdldFNoYWRlclJlZmVyZW5jZVxuZXhwb3J0cy5wcm9ncmFtICA9IGNyZWF0ZVByb2dyYW1cblxudmFyIHdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd3ZWFrbWFwLXNoaW0nKSA6IFdlYWtNYXBcbnZhciBDQUNIRSA9IG5ldyB3ZWFrTWFwKClcblxudmFyIFNIQURFUl9DT1VOVEVSID0gMFxuXG5mdW5jdGlvbiBTaGFkZXJSZWZlcmVuY2UoaWQsIHNyYywgdHlwZSwgc2hhZGVyLCBwcm9ncmFtcywgY291bnQsIGNhY2hlKSB7XG4gIHRoaXMuaWQgICAgICAgPSBpZFxuICB0aGlzLnNyYyAgICAgID0gc3JjXG4gIHRoaXMudHlwZSAgICAgPSB0eXBlXG4gIHRoaXMuc2hhZGVyICAgPSBzaGFkZXJcbiAgdGhpcy5jb3VudCAgICA9IGNvdW50XG4gIHRoaXMucHJvZ3JhbXMgPSBbXVxuICB0aGlzLmNhY2hlICAgID0gY2FjaGVcbn1cblxuU2hhZGVyUmVmZXJlbmNlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIGlmKC0tdGhpcy5jb3VudCA9PT0gMCkge1xuICAgIHZhciBjYWNoZSAgICA9IHRoaXMuY2FjaGVcbiAgICB2YXIgZ2wgICAgICAgPSBjYWNoZS5nbFxuICAgIFxuICAgIC8vUmVtb3ZlIHByb2dyYW0gcmVmZXJlbmNlc1xuICAgIHZhciBwcm9ncmFtcyA9IHRoaXMucHJvZ3JhbXNcbiAgICBmb3IodmFyIGk9MCwgbj1wcm9ncmFtcy5sZW5ndGg7IGk8bjsgKytpKSB7XG4gICAgICB2YXIgcCA9IGNhY2hlLnByb2dyYW1zW3Byb2dyYW1zW2ldXVxuICAgICAgaWYocCkge1xuICAgICAgICBkZWxldGUgY2FjaGUucHJvZ3JhbXNbaV1cbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vUmVtb3ZlIHNoYWRlciByZWZlcmVuY2VcbiAgICBnbC5kZWxldGVTaGFkZXIodGhpcy5zaGFkZXIpXG4gICAgZGVsZXRlIGNhY2hlLnNoYWRlcnNbKHRoaXMudHlwZSA9PT0gZ2wuRlJBR01FTlRfU0hBREVSKXwwXVt0aGlzLnNyY11cbiAgfVxufVxuXG5mdW5jdGlvbiBDb250ZXh0Q2FjaGUoZ2wpIHtcbiAgdGhpcy5nbCAgICAgICA9IGdsXG4gIHRoaXMuc2hhZGVycyAgPSBbe30sIHt9XVxuICB0aGlzLnByb2dyYW1zID0ge31cbn1cblxudmFyIHByb3RvID0gQ29udGV4dENhY2hlLnByb3RvdHlwZVxuXG5mdW5jdGlvbiBjb21waWxlU2hhZGVyKGdsLCB0eXBlLCBzcmMpIHtcbiAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKVxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzcmMpXG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxuICBpZighZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgdmFyIGVyckxvZyA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGlsaW5nIHNoYWRlcjonLCBlcnJMb2cpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBpbGluZyBzaGFkZXI6JyArIGVyckxvZylcbiAgfVxuICByZXR1cm4gc2hhZGVyXG59XG5cbnByb3RvLmdldFNoYWRlclJlZmVyZW5jZSA9IGZ1bmN0aW9uKHR5cGUsIHNyYykge1xuICB2YXIgZ2wgICAgICA9IHRoaXMuZ2xcbiAgdmFyIHNoYWRlcnMgPSB0aGlzLnNoYWRlcnNbKHR5cGUgPT09IGdsLkZSQUdNRU5UX1NIQURFUil8MF1cbiAgdmFyIHNoYWRlciAgPSBzaGFkZXJzW3NyY11cbiAgaWYoIXNoYWRlcikge1xuICAgIHZhciBzaGFkZXJPYmogPSBjb21waWxlU2hhZGVyKGdsLCB0eXBlLCBzcmMpXG4gICAgc2hhZGVyID0gc2hhZGVyc1tzcmNdID0gbmV3IFNoYWRlclJlZmVyZW5jZShcbiAgICAgIFNIQURFUl9DT1VOVEVSKyssXG4gICAgICBzcmMsXG4gICAgICB0eXBlLFxuICAgICAgc2hhZGVyT2JqLFxuICAgICAgW10sXG4gICAgICAxLFxuICAgICAgdGhpcylcbiAgfSBlbHNlIHtcbiAgICBzaGFkZXIuY291bnQgKz0gMVxuICB9XG4gIHJldHVybiBzaGFkZXJcbn1cblxuZnVuY3Rpb24gbGlua1Byb2dyYW0oZ2wsIHZzaGFkZXIsIGZzaGFkZXIsIGF0dHJpYnMsIGxvY2F0aW9ucykge1xuICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdnNoYWRlcilcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzaGFkZXIpXG4gIGZvcih2YXIgaT0wOyBpPGF0dHJpYnMubGVuZ3RoOyArK2kpIHtcbiAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbG9jYXRpb25zW2ldLCBhdHRyaWJzW2ldKVxuICB9XG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gIGlmKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgbGlua2luZyBwcm9ncmFtOicsIGVyckxvZylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgbGlua2luZyBwcm9ncmFtOicgKyBlcnJMb2cpXG4gIH1cbiAgcmV0dXJuIHByb2dyYW1cbn1cblxucHJvdG8uZ2V0UHJvZ3JhbSA9IGZ1bmN0aW9uKHZyZWYsIGZyZWYsIGF0dHJpYnMsIGxvY2F0aW9ucykge1xuICB2YXIgdG9rZW4gPSBbdnJlZi5pZCwgZnJlZi5pZCwgYXR0cmlicy5qb2luKCc6JyksIGxvY2F0aW9ucy5qb2luKCc6JyldLmpvaW4oJ0AnKVxuICB2YXIgcHJvZyAgPSB0aGlzLnByb2dyYW1zW3Rva2VuXVxuICBpZighcHJvZykge1xuICAgIHRoaXMucHJvZ3JhbXNbdG9rZW5dID0gcHJvZyA9IGxpbmtQcm9ncmFtKFxuICAgICAgdGhpcy5nbCxcbiAgICAgIHZyZWYuc2hhZGVyLFxuICAgICAgZnJlZi5zaGFkZXIsXG4gICAgICBhdHRyaWJzLFxuICAgICAgbG9jYXRpb25zKVxuICAgIHZyZWYucHJvZ3JhbXMucHVzaCh0b2tlbilcbiAgICBmcmVmLnByb2dyYW1zLnB1c2godG9rZW4pXG4gIH1cbiAgcmV0dXJuIHByb2dcbn1cblxuZnVuY3Rpb24gZ2V0Q2FjaGUoZ2wpIHtcbiAgdmFyIGN0eENhY2hlID0gQ0FDSEUuZ2V0KGdsKVxuICBpZighY3R4Q2FjaGUpIHtcbiAgICBjdHhDYWNoZSA9IG5ldyBDb250ZXh0Q2FjaGUoZ2wpXG4gICAgQ0FDSEUuc2V0KGdsLCBjdHhDYWNoZSlcbiAgfVxuICByZXR1cm4gY3R4Q2FjaGVcbn1cblxuZnVuY3Rpb24gZ2V0U2hhZGVyUmVmZXJlbmNlKGdsLCB0eXBlLCBzcmMpIHtcbiAgcmV0dXJuIGdldENhY2hlKGdsKS5nZXRTaGFkZXJSZWZlcmVuY2UodHlwZSwgc3JjKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsLCB2cmVmLCBmcmVmLCBhdHRyaWJzLCBsb2NhdGlvbnMpIHtcbiAgcmV0dXJuIGdldENhY2hlKGdsKS5nZXRQcm9ncmFtKHZyZWYsIGZyZWYsIGF0dHJpYnMsIGxvY2F0aW9ucylcbn0iLCJ2YXIgaGlkZGVuU3RvcmUgPSByZXF1aXJlKCcuL2hpZGRlbi1zdG9yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVN0b3JlO1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZSgpIHtcbiAgICB2YXIga2V5ID0ge307XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbidcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYWttYXAtc2hpbTogS2V5IG11c3QgYmUgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdG9yZSA9IG9iai52YWx1ZU9mKGtleSk7XG4gICAgICAgIHJldHVybiBzdG9yZSAmJiBzdG9yZS5pZGVudGl0eSA9PT0ga2V5ID9cbiAgICAgICAgICAgIHN0b3JlIDogaGlkZGVuU3RvcmUob2JqLCBrZXkpO1xuICAgIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGhpZGRlblN0b3JlO1xuXG5mdW5jdGlvbiBoaWRkZW5TdG9yZShvYmosIGtleSkge1xuICAgIHZhciBzdG9yZSA9IHsgaWRlbnRpdHk6IGtleSB9O1xuICAgIHZhciB2YWx1ZU9mID0gb2JqLnZhbHVlT2Y7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInZhbHVlT2ZcIiwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGtleSA/XG4gICAgICAgICAgICAgICAgdmFsdWVPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogc3RvcmU7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG4iLCIvLyBPcmlnaW5hbCAtIEBHb3pvbGEuIFxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vR296YWxhLzEyNjk5OTFcbi8vIFRoaXMgaXMgYSByZWltcGxlbWVudGVkIHZlcnNpb24gKHdpdGggYSBmZXcgYnVnIGZpeGVzKS5cblxudmFyIGNyZWF0ZVN0b3JlID0gcmVxdWlyZSgnLi9jcmVhdGUtc3RvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWFrTWFwO1xuXG5mdW5jdGlvbiB3ZWFrTWFwKCkge1xuICAgIHZhciBwcml2YXRlcyA9IGNyZWF0ZVN0b3JlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKGtleSwgZmFsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHByaXZhdGVzKGtleSlcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/XG4gICAgICAgICAgICAgICAgc3RvcmUudmFsdWUgOiBmYWxsYmFja1xuICAgICAgICB9LFxuICAgICAgICAnc2V0JzogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHByaXZhdGVzKGtleSkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgJ2hhcyc6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuICd2YWx1ZScgaW4gcHJpdmF0ZXMoa2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxldGUgcHJpdmF0ZXMoa2V5KS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGRvQmluZChnbCwgZWxlbWVudHMsIGF0dHJpYnV0ZXMpIHtcbiAgaWYoZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5iaW5kKClcbiAgfSBlbHNlIHtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKVxuICB9XG4gIHZhciBuYXR0cmlicyA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX0FUVFJJQlMpfDBcbiAgaWYoYXR0cmlidXRlcykge1xuICAgIGlmKGF0dHJpYnV0ZXMubGVuZ3RoID4gbmF0dHJpYnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImdsLXZhbzogVG9vIG1hbnkgdmVydGV4IGF0dHJpYnV0ZXNcIilcbiAgICB9XG4gICAgZm9yKHZhciBpPTA7IGk8YXR0cmlidXRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGF0dHJpYiA9IGF0dHJpYnV0ZXNbaV1cbiAgICAgIGlmKGF0dHJpYi5idWZmZXIpIHtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IGF0dHJpYi5idWZmZXJcbiAgICAgICAgdmFyIHNpemUgPSBhdHRyaWIuc2l6ZSB8fCA0XG4gICAgICAgIHZhciB0eXBlID0gYXR0cmliLnR5cGUgfHwgZ2wuRkxPQVRcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWQgPSAhIWF0dHJpYi5ub3JtYWxpemVkXG4gICAgICAgIHZhciBzdHJpZGUgPSBhdHRyaWIuc3RyaWRlIHx8IDBcbiAgICAgICAgdmFyIG9mZnNldCA9IGF0dHJpYi5vZmZzZXQgfHwgMFxuICAgICAgICBidWZmZXIuYmluZCgpXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoaSwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih0eXBlb2YgYXR0cmliID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliMWYoaSwgYXR0cmliKVxuICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjFmKGksIGF0dHJpYlswXSlcbiAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIyZihpLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSlcbiAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIzZihpLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSwgYXR0cmliWzJdKVxuICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjRmKGksIGF0dHJpYlswXSwgYXR0cmliWzFdLCBhdHRyaWJbMl0sIGF0dHJpYlszXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC12YW86IEludmFsaWQgdmVydGV4IGF0dHJpYnV0ZVwiKVxuICAgICAgICB9XG4gICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IoOyBpPG5hdHRyaWJzOyArK2kpIHtcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbClcbiAgICBmb3IodmFyIGk9MDsgaTxuYXR0cmliczsgKytpKSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb0JpbmQiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgYmluZEF0dHJpYnMgPSByZXF1aXJlKFwiLi9kby1iaW5kLmpzXCIpXG5cbmZ1bmN0aW9uIFZBT0VtdWxhdGVkKGdsKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLl9lbGVtZW50cyA9IG51bGxcbiAgdGhpcy5fYXR0cmlidXRlcyA9IG51bGxcbiAgdGhpcy5fZWxlbWVudHNUeXBlID0gZ2wuVU5TSUdORURfU0hPUlRcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgYmluZEF0dHJpYnModGhpcy5nbCwgdGhpcy5fZWxlbWVudHMsIHRoaXMuX2F0dHJpYnV0ZXMpXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihhdHRyaWJ1dGVzLCBlbGVtZW50cywgZWxlbWVudHNUeXBlKSB7XG4gIHRoaXMuX2VsZW1lbnRzID0gZWxlbWVudHNcbiAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNcbiAgdGhpcy5fZWxlbWVudHNUeXBlID0gZWxlbWVudHNUeXBlIHx8IHRoaXMuZ2wuVU5TSUdORURfU0hPUlRcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgfVxuVkFPRW11bGF0ZWQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKCkgeyB9XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24obW9kZSwgY291bnQsIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIGlmKHRoaXMuX2VsZW1lbnRzKSB7XG4gICAgZ2wuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0aGlzLl9lbGVtZW50c1R5cGUsIG9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBnbC5kcmF3QXJyYXlzKG1vZGUsIG9mZnNldCwgY291bnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVkFPRW11bGF0ZWQoZ2wpIHtcbiAgcmV0dXJuIG5ldyBWQU9FbXVsYXRlZChnbClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVWQU9FbXVsYXRlZCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBiaW5kQXR0cmlicyA9IHJlcXVpcmUoXCIuL2RvLWJpbmQuanNcIilcblxuZnVuY3Rpb24gVmVydGV4QXR0cmlidXRlKGxvY2F0aW9uLCBkaW1lbnNpb24sIGEsIGIsIGMsIGQpIHtcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uXG4gIHRoaXMuYSA9IGFcbiAgdGhpcy5iID0gYlxuICB0aGlzLmMgPSBjXG4gIHRoaXMuZCA9IGRcbn1cblxuVmVydGV4QXR0cmlidXRlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oZ2wpIHtcbiAgc3dpdGNoKHRoaXMuZGltZW5zaW9uKSB7XG4gICAgY2FzZSAxOlxuICAgICAgZ2wudmVydGV4QXR0cmliMWYodGhpcy5sb2NhdGlvbiwgdGhpcy5hKVxuICAgIGJyZWFrXG4gICAgY2FzZSAyOlxuICAgICAgZ2wudmVydGV4QXR0cmliMmYodGhpcy5sb2NhdGlvbiwgdGhpcy5hLCB0aGlzLmIpXG4gICAgYnJlYWtcbiAgICBjYXNlIDM6XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWIzZih0aGlzLmxvY2F0aW9uLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5jKVxuICAgIGJyZWFrXG4gICAgY2FzZSA0OlxuICAgICAgZ2wudmVydGV4QXR0cmliNGYodGhpcy5sb2NhdGlvbiwgdGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGhpcy5kKVxuICAgIGJyZWFrXG4gIH1cbn1cblxuZnVuY3Rpb24gVkFPTmF0aXZlKGdsLCBleHQsIGhhbmRsZSkge1xuICB0aGlzLmdsID0gZ2xcbiAgdGhpcy5fZXh0ID0gZXh0XG4gIHRoaXMuaGFuZGxlID0gaGFuZGxlXG4gIHRoaXMuX2F0dHJpYnMgPSBbXVxuICB0aGlzLl91c2VFbGVtZW50cyA9IGZhbHNlXG4gIHRoaXMuX2VsZW1lbnRzVHlwZSA9IGdsLlVOU0lHTkVEX1NIT1JUXG59XG5cblZBT05hdGl2ZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9leHQuYmluZFZlcnRleEFycmF5T0VTKHRoaXMuaGFuZGxlKVxuICBmb3IodmFyIGk9MDsgaTx0aGlzLl9hdHRyaWJzLmxlbmd0aDsgKytpKSB7XG4gICAgdGhpcy5fYXR0cmlic1tpXS5iaW5kKHRoaXMuZ2wpXG4gIH1cbn1cblxuVkFPTmF0aXZlLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fZXh0LmJpbmRWZXJ0ZXhBcnJheU9FUyhudWxsKVxufVxuXG5WQU9OYXRpdmUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fZXh0LmRlbGV0ZVZlcnRleEFycmF5T0VTKHRoaXMuaGFuZGxlKVxufVxuXG5WQU9OYXRpdmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpIHtcbiAgdGhpcy5iaW5kKClcbiAgYmluZEF0dHJpYnModGhpcy5nbCwgZWxlbWVudHMsIGF0dHJpYnV0ZXMpXG4gIHRoaXMudW5iaW5kKClcbiAgdGhpcy5fYXR0cmlicy5sZW5ndGggPSAwXG4gIGlmKGF0dHJpYnV0ZXMpXG4gIGZvcih2YXIgaT0wOyBpPGF0dHJpYnV0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYSA9IGF0dHJpYnV0ZXNbaV1cbiAgICBpZih0eXBlb2YgYSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5fYXR0cmlicy5wdXNoKG5ldyBWZXJ0ZXhBdHRyaWJ1dGUoaSwgMSwgYSkpXG4gICAgfSBlbHNlIGlmKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIHRoaXMuX2F0dHJpYnMucHVzaChuZXcgVmVydGV4QXR0cmlidXRlKGksIGEubGVuZ3RoLCBhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKSlcbiAgICB9XG4gIH1cbiAgdGhpcy5fdXNlRWxlbWVudHMgPSAhIWVsZW1lbnRzXG4gIHRoaXMuX2VsZW1lbnRzVHlwZSA9IGVsZW1lbnRzVHlwZSB8fCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JUXG59XG5cblZBT05hdGl2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKG1vZGUsIGNvdW50LCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBpZih0aGlzLl91c2VFbGVtZW50cykge1xuICAgIGdsLmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdGhpcy5fZWxlbWVudHNUeXBlLCBvZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgZ2wuZHJhd0FycmF5cyhtb2RlLCBvZmZzZXQsIGNvdW50KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZBT05hdGl2ZShnbCwgZXh0KSB7XG4gIHJldHVybiBuZXcgVkFPTmF0aXZlKGdsLCBleHQsIGV4dC5jcmVhdGVWZXJ0ZXhBcnJheU9FUygpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVZBT05hdGl2ZSIsIlwidXNlIHN0cmljdFwiXG5cbnZhciB3ZWJnbGV3ID0gcmVxdWlyZShcIndlYmdsZXdcIilcbnZhciBjcmVhdGVWQU9OYXRpdmUgPSByZXF1aXJlKFwiLi9saWIvdmFvLW5hdGl2ZS5qc1wiKVxudmFyIGNyZWF0ZVZBT0VtdWxhdGVkID0gcmVxdWlyZShcIi4vbGliL3Zhby1lbXVsYXRlZC5qc1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVWQU8oZ2wsIGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpIHtcbiAgdmFyIGV4dCA9IHdlYmdsZXcoZ2wpLk9FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0XG4gIHZhciB2YW9cbiAgaWYoZXh0KSB7XG4gICAgdmFvID0gY3JlYXRlVkFPTmF0aXZlKGdsLCBleHQpXG4gIH0gZWxzZSB7XG4gICAgdmFvID0gY3JlYXRlVkFPRW11bGF0ZWQoZ2wpXG4gIH1cbiAgdmFvLnVwZGF0ZShhdHRyaWJ1dGVzLCBlbGVtZW50cywgZWxlbWVudHNUeXBlKVxuICByZXR1cm4gdmFvXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVkFPIl19
