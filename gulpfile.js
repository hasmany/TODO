// Require modules;
const gulp = require ("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourceMaps = require("gulp-sourcemaps");
const bable = require("gulp-babel");

/*
    1.) create, refresh server on change
    2.) sass
    3.) sourcemaps
    4.) babel
*/

gulp.task("default", ["html","watch","serve"]);

// Starts the connect server
gulp.task("serve", function() {
    console.log("start server");
    console.log("run server task");
    connect.server({
        root: "build",
        livereload: true
    });
});

// reloads the server pass in the html file
gulp.task("html", function() {
    console.log("run html task");
    gulp.src("./src/**.html")
        .pipe(gulp.dest("build"))
        .pipe(connect.reload()); 
});

// Watches for changes in html,css,js
gulp.task("watch", function() {
    console.log("start watching files");
    gulp.watch("./src/**.html",["html"]);
    gulp.watch("./src/scss/**/*.scss",["sass"]);
});

// Convert sass to css
gulp.task("sass", function() {
    return gulp.src("./src/scss/**/*.scss") 
        .pipe(sass().on("error",sass.logError))
        .pipe(gulp.dest("./build/css"))
        .pipe(connect.reload());
});











