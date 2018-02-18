var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var ejs = require('gulp-ejs');
var gutil = require('gulp-util');
var async = require('async');
var fs = require('fs');
var path = require('path');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', ['sass', 'uglify', 'ejs', 'imagemin']);

/**
 * Build styles files
 */
gulp.task('sass', function() {
  gulp
    .src('src/styles/main.scss')
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/styles/'));
});

/**
 * Build minified javascript files
 */
gulp.task('uglify', function() {
  gulp
    .src(['src/js/*.js'])
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('public/js'));
});

/**
 * Create HTML files from .ejs files
 */
gulp.task('ejs', function(cb) {
  var langs = getAvailableLanguagesCatalogs();
  gutil.log(
    'Found these languages catalogs (with translation ratio >0.6): ',
    langs
  );

  //A separate gulp stream must be launched for generating html files
  //for each language.
  allTasks = langs.map(function(langCode) {
    return function(cb) {
      //Open the language catalog
      var isDefaultLanguage = langCode == 'en';
      var catalog = isDefaultLanguage
        ? ''
        : require('./locale/' + langCode + '.json');
      var root = isDefaultLanguage ? '.' : '..';
      var destination = 'public/' + (isDefaultLanguage ? '' : langCode);

      //Launch a stream for generating the .ejs file for this language
      gulp
        .src('src/*.ejs')
        .on('end', function() {
          gutil.log(
            'Ended generating ' + langCode + ' files from .ejs sources'
          );
          cb();
        })
        .pipe(
          ejs({
            //The EJS helper function to be used to wrap any string to be translated
            _: function(str) {
              if (str == '__langCode__') {
                return langCode;
              } else if (catalog.hasOwnProperty(str)) {
                return catalog[str];
              }

              return str;
            },
            getAssetsRoot: function() {
              return root + '/assets';
            },
            getStylesRoot: function() {
              return root + '/styles';
            },
            getJsRoot: function() {
              return root + '/js';
            },
            getBowerComponentsRoot: function() {
              return root + '/bower_components';
            },
          }).on('error', cb)
        )
        .pipe(gulp.dest(destination));
    };
  });

  async.parallel(allTasks, function(err) {
    cb(err);
  });
});

/**
 * Create catalog.json
 */
gulp.task('update-translation', function() {
  var allStrings = {};

  gulp
    .src('src/*.ejs')
    .on('end', function() {
      fs.writeFile(
        'locale/catalog.json',
        JSON.stringify(allStrings, null, 4),
        function(err) {
          if (err) {
            gutil.log(err);
            return;
          }

          gutil.log('Catalog with all strings saved to locale/catalog.json');
        }
      );
    })
    .pipe(
      ejs({
        _: function(str) {
          if (str !== '__langCode__') allStrings[str] = str;
        },
        getAssetsRoot: function() {
          return '';
        },
        getStylesRoot: function() {
          return '';
        },
        getJsRoot: function() {
          return '';
        },
        getBowerComponentsRoot: function() {
          return '';
        },
      }).on('error', gutil.log)
    );
});

/**
 * Watch changes in the src directory and launch the appropriate tasks.
 */
gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['uglify']);
  gulp.watch('src/assets/**/*.svg', ['copy-svg']);
  gulp.watch(['src/*.ejs', 'locale/*.json'], ['ejs']);
});

/**
 * Minimize assets size
 */
gulp.task('imagemin', function() {
  //Do not minimize this file, quality is too low
  gulp.src('src/assets/jumbotron-bg.png').pipe(gulp.dest('public/assets'));

  return gulp
    .src(['src/assets/**/*', '!src/assets/jumbotron-bg.png'])
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
      })
    )
    .pipe(gulp.dest('public/assets'));
});

/**
 * Copy svg assets files
 */
gulp.task('copy-svg', function() {
  return gulp.src('src/assets/**/*.svg').pipe(gulp.dest('public/assets'));
});

/**
 * Return a list of language name corresponding to catalogs .json files stored
 * in locale directory, with a translation ratio that is high enough.
 */
function getAvailableLanguagesCatalogs() {
  var availableLangs = ['en'];

  fs.readdirSync('locale').forEach(function(file) {
    if (
      path.basename(file) === 'catalog.json' ||
      path.extname(file) !== '.json'
    )
      return;

    var ratio = getTranslatedRatio(require('./locale/' + file));
    if (ratio > 0.6) availableLangs.push(path.basename(file, '.json'));
  });

  return availableLangs;
}

/**
 * Return the total number of keys that differs from their values
 * in the specified object.
 */
function getTranslatedRatio(catalog) {
  var translatedCount = 0;
  var totalCount = 0;
  for (var p in catalog) {
    if (catalog.hasOwnProperty(p)) {
      if (p !== catalog[p]) {
        translatedCount++;
      }
      totalCount++;
    }
  }

  return translatedCount / totalCount;
}
