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
tsd install angular angular-resource --resolve --save

#tsd plugin
https://atom.io/packages/atom-typescript
```

we setup `tsconfig.json` to compile files `./public/modules`

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
