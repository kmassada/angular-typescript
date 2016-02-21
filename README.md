### init
```
mkdir nuProject
bower init
npm init -y

touch gulfile.js
mkdir -p public/{css,js,modules,partials}
touch public/css/style.css
touch public/js/script.js
```

- public/css is to hold private css files
- public/js is to hold private js files
- public/modules is to hold all angular compiled js from ts
- public/partials is to hold partial html files for angular app

### TSD
```
tsd init
tsd install angular angular-ui-router angular-resource --resolve --save

#tsd plugin
https://atom.io/packages/atom-typescript
```

we setup `tsconfig.json` to compile files `./public/modules`

we also inside `tsconfig.json` set rootDir to `'./app'`,
without this value, gulp was saving 'app/app.js' to public/modules/app/app.js
conflicting with text editor

### bower ui and angular files
```
bower install jquery bootstrap font-awesome  --save
bower install angular  --save
```

### Gulp
gulp quick setup
```
npm install gulp wiredep gulp-inject --save-dev
```

we introduce `injectAngularSrc` to support injecting modules saved from typescript.
`name: 'angular'` allows us to use `<!-- angular:js -->` as a place holder

```JS
  var injectAngularSrc = gulp.src('./public/modules/**/*.js',
  {read: false});
  var injectAngularOptions = {
    ignorePath: 'public',
    name: 'angular',
  };
```

We also introduce
```
var ts = require('gulp-typescript');
var tsd = require('gulp-tsd');
```
- tsd allows us to compile tsd resources, since they are in .gitignore, this will come handing in production.
- ts allows us to compile typscript to destination using same `tsconfig.json`, we already are able to do this via texteditor, but again, this will help at deployment.

We've been running http-server using a simple python http-server module, for consistency, we introduce, gulp-nodemon and power http-server using https://github.com/indexzero/http-server that runs `http-server [path] [options]`
```
var node = require('gulp-nodemon');
```

watching all files, and running on our preferred port of 8000
```
var Files = ['public/**/*.*', '!gulpfile.js'];
var options = {
  exec: 'node_modules/.bin/http-server',
  delayTime: 1,
  env: {
    PORT: 8000,
  },
  watch: Files,
};
```

`gulp serve` will compile all ts files, and start server, and will rerun these for any changes in /public or /app 
