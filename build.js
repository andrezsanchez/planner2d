#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2))

var browserify = require('browserify')
var es6ify = require('es6ify')
var brfs = require('brfs')
var fs = require('fs')

var output = './bundle.js'
var w
var debug = false

var i = 0
if (argv.w) {
  var watchify = require('watchify')
  var b = browserify({cache: {}, packageCache: {}, debug: debug})

  applyTransforms(b)
  
  w = watchify(b)
  w.on('update', bundle)
  bundle()
}
else {
  var b = browserify({debug: debug})
  applyTransforms(b)
  b.bundle().pipe(process.stdout)
}

function bundle() {
  console.log('bundled', ++i)
  w.bundle()
    .on('error', function(e) {
      console.error(String(e))
    })
    .pipe(fs.createWriteStream(output))
}

function applyTransforms(b) {
  return b
    .add(es6ify.runtime)
    .transform(es6ify)
    .transform(brfs)
    .require(require.resolve('./'), {entry: true})
}
