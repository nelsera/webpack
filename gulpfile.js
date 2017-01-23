const g = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const del = require('del');
const conf = require('./stack/gulp.conf');

g.registry(new HubRegistry([conf.path.tasks('tasks/*.js')]));

g.task('default', g.series('build'));
g.task('b', g.series(g.parallel('clean', 'webpack:dist')));
g.task('build', g.series(g.parallel('clean', 'webpack:dist')));

g.task('s', g.series('webpack:watch', 'watch', 'browsersync'));
g.task('serve', g.series('webpack:watch', 'watch', 'browsersync'));
g.task('s:dist', g.series('default', 'browsersync:dist'));
g.task('serve:dist', g.series('default', 'browsersync:dist'));

g.task('watch', done => {
  g.watch(conf.path.tmp('index.html'), cb => {
    browserSync.reload();
    cb();
  });
  done();
});

g.task('clean', () => del([conf.paths.dist, conf.paths.tmp]));
