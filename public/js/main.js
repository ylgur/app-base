;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var pkg = require('../../package.json');

module.exports = {
	title: pkg.name,
	description: pkg.description,
	author: pkg.author
};
},{"../../package.json":3}],2:[function(require,module,exports){
var app = require('./app');
},{"./app":1}],3:[function(require,module,exports){
module.exports=module.exports={
  "name": "frontend-automation",
  "version": "0.0.0",
  "description": "Frontend automation ftw!",
  "license": "MIT",
  "homepage": "http://github.com/rthor/frontend-automation",
  "author": {
    "name": "Ragnar Þór Valgeirsson",
    "email": "ragnar.valgeirsson@gmail.com",
    "url": "http://rthor.is"
  },
  "dependencies": {
    "express": "*",
    "jade": "*"
  },
  "devDependencies": {
    "grunt": "*",
    "grunt-contrib-compass": "*",
    "grunt-contrib-watch": "*",
    "matchdep": "*",
    "grunt-contrib-livereload": "*",
    "grunt-contrib-imagemin": "*",
    "grunt-svgmin": "*",
    "grunt-contrib-uglify": "*",
    "nodemon": "*",
    "grunt-nodemon": "*",
    "grunt-concurrent": "*",
    "grunt-contrib-copy": "*",
    "grunt-watchify": "*"
  }
}
},{}]},{},[1,2])
;