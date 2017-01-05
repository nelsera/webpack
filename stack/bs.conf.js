const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      routes: {
      	'/node_modules': './node_modules'
      }
    },
    open: true
  };
};
