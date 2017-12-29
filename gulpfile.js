// Require modules;
const gulp = require ("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourceMaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");

const config = {
    js: {
        src: "./src/js/simple-list.js", // Entry Point
        outPutDir: "./build/js", // Directory to save bundle to
        mapDir: "", // Directory to save maps to
        outPutFile: "simple-list.js", // Name to use for our bundle
    }
};

/*
    1.) create, refresh server on change
    2.) sass
    3.) sourcemaps
    4.) babel
*/

gulp.task("default", ["html","sass","browserify","watch","serve"]);

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
    gulp.watch("./src/js/**/*.js",["browserify"]);
});

// Convert sass to css
gulp.task("sass", function() {
    return gulp.src("./src/scss/**/*.scss") 
        .pipe(sass().on("error",sass.logError))
        .pipe(gulp.dest("./build/css"))
        .pipe(connect.reload());
});

gulp.task("js", function() {
    gulp.src("./src/js/**/*.js")      
        .pipe(babel())
        .pipe(gulp.dest("./build/js/"))
        .pipe(connect.reload());
});
    
gulp.task("browserify", ()=> {
    console.log("start browserify task");
    return browserify(config.js.src)
        .transform(babelify,{presets: ["env"]})
        .bundle()
        // Pass desired output fillename to vinyl-source-stream-
        .pipe(source(config.js.outPutFile))  
        // Start piping stream to tasks!
        .pipe(gulp.dest(config.js.outPutDir)); 
});


