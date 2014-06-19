var connect = require('connect')
  , replace = require('gulp-replace')
  , less = require('gulp-less')
  , pipeMiddle = require('middleware-pipe')
  , fs = require('fs')
  , path = require('path');

connect()
  // match html
  .use(pipeMiddle(path.join(__dirname, 'src'), /\.html$/)
    // we can get the req
    .pipe(function (req) {
      return replace(/\<inline.*?src\=('|")(.*?)\1.*?\/?\>/, function (all, quz, src) {
        var file = path.resolve(path.dirname(path.join(__dirname, 'src/', req.url)), src);
        return fs.readFileSync(file);
      });
    }))
  // match css
  .use('/css', pipeMiddle(path.join(__dirname, 'src/css'), /\.css$/, function (url) {
      // fixed the actual path
      return url.replace(/\.css$/, '.less');
    }).pipe(function (req) {
      return less({
        paths: [path.join(__dirname, 'src/css')]
      });
    }))
  .listen(3000);