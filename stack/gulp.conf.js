'use strict';

const path = require('path');
const gutil = require('gulp-util');

exports.ngModule = 'client';

exports.paths = {
  npm: 'node_modules',
  src: 'client',
  dist: 'dist',
  tmp: '._',
  tasks: 'stack'
};

exports.path = {};
for (const pathName in exports.paths) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}

exports.errorHandler = function (title) {
  return function (err) {
    gutil.log(gutil.colors.red(`[${title}]`), err.toString());
    this.emit('end');
  };
};
