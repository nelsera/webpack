const g = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const del = require('del');
const conf = require('./stack/gulp.conf');

// Load de outros arquivos com tasks do gulp
const hub = new HubRegistry([conf.path.tasks('tasks/*.js')]);


g.registry(hub);

g.task('default', g.series('build'));
g.task('b', g.series(g.parallel('clean', 'webpack:dist')));
g.task('build', g.series(g.parallel('clean', 'webpack:dist')));

g.task('s', g.series('webpack:watch', 'watch', 'browsersync'));
g.task('serve', g.series('webpack:watch', 'watch', 'browsersync'));
g.task('s:dist', g.series('default', 'browsersync:dist'));
g.task('serve:dist', g.series('default', 'browsersync:dist'));

g.task('watch', watch);
g.task('clean', clean);


function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  g.watch(conf.path.tmp('index.html'), reloadBrowserSync);
  done();
}

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}
