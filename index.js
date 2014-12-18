var connect = require('connect')
  , replace = require('gulp-replace')
  , less = require('gulp-less')
  , pipeMiddle = require('middleware-pipe')
  , fs = require('fs')
  , path = require('path');

connect()
  // match html
  .use(
    pipeMiddle(path.join(__dirname, 'src'), /\.html$/)
      .pipe(replace(/\<inline src\=\"\.\/inline\/hello.html\" \/>/, function (all, quz, src) {
          return fs.readFileSync(path.join(__dirname, 'src/inline/hello.html'), 'utf-8');
      }))
  )
  // match css
  .use('/css', 
    pipeMiddle(path.join(__dirname, 'src/css'), /\.css$/, function (url) {
      // fixed the actual path
      return url.replace(/\.css$/, '.less');
    }).pipe(
      less({
        paths: [path.join(__dirname, 'src/css')]
      })
    )
  )
  .listen(3000);