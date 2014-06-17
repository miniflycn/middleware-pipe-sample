var connect = require('connect')
  , replace = require('gulp-replace')
  , less = require('gulp-less')
  , pipeMiddle = require('middleware-pipe')
  , fs = require('fs')
  , path = require('path');

connect()
  // match html
  .use(pipeMiddle('./src', /\.html$/)
    // we can get the req
    .pipe(function (req) {
      return replace(/\<inline.*?src\=('|")(.*?)\1.*?\/?\>/, function (all, quz, src) {
        var file = path.resolve(path.dirname(path.join('./src', req.url)), src);
        return fs.readFileSync(file);
      });
    }))
  // match css
  .use('/css', pipeMiddle('./src/css', /\.css$/, function (url) {
      // fixed the actual path
      return url.replace(/\.css$/, '.less');
    }).pipe(function (req) {
      return less({
        paths: ['./src/css']
      });
    }))
  .listen(3000);