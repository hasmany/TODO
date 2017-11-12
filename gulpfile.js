// Require modules;
const gulp = require ("gulp");
const gulpSass = require("gulp-sass");
const connect = require("gulp-connect");
const sourceMaps = require("gulp-sourcemaps");
const bable = require("gulp-babel");

/*
    1.) create, refresh server on change
    2.) sass
    3.) sourcemaps
    4.) babel
*/

gulp.task("default", function() {
    console.log("default task");
});

gulp.task("server", function() {
    console.log("start server");
    connect.server();
});



