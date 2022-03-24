
let projectFolder = "dist";
let sourceFolder = "src";

let path = {
    build: {
        html: projectFolder+"/",
        css: projectFolder + "/css/",
        js: projectFolder + "/js/",
        img: projectFolder + "/img/",
        fonts: projectFolder + "/fonts/"
    },
    src: {
        html: [sourceFolder +"/*.html", "!" + sourceFolder +"/_*.html"],
        css: sourceFolder + "/scss/style.scss",
        js: sourceFolder + "/js/main.js",
        img: sourceFolder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: sourceFolder + "/fonts/*.ttf",
    },
    watch: {
        html: sourceFolder +"/**/*.html",
        css: sourceFolder + "/scss/**/*.scss",
        js: sourceFolder + "/js/**/*.js",
        img: sourceFolder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + projectFolder + "/"

}

let { src , dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileInclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    groupMedia = require('gulp-group-css-media-queries'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default;


function html(){
    return src(path.src.html)
        .pipe(fileInclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}
function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
        }))
        .pipe(groupMedia())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 version"],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(cleanCss())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}
function js(){
    return src(path.src.js)
        .pipe(fileInclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}
function watchFiles (){
    gulp.watch([path.watch.html],html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img],image)
}
function image(){
    return src(path.src.img)
       
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}
function clean () {
    return del(path.clean);
}
function browserSync(){
    browsersync.init({
        server: {
            baseDir: "./" + projectFolder + "/"
        },
        port: 3000,
        notify: false
    })
}


let build = gulp.series(clean, gulp.parallel(js,css, html, image));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.js = js;
exports.css = css;
exports.html = html;
exports.image = image;
exports.build = build;
exports.watch = watch;
exports.default = watch;