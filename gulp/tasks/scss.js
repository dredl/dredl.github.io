import dartSass from 'sass';
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import concat from "gulp-concat"
import uglify from "gulp-uglify";
import autoprefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: true})
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
          })))
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true
      }))
      .pipe(rename({
        extname: ".min.css"
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
}