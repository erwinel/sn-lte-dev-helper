var gulp = require("gulp");
gulp.task("copyTypings", function(cb) {
    gulp.src("src/*.d.ts").pipe(gulp.dest("dist/scoped-types/"));
    gulp.src("out/*.d.ts").pipe(gulp.dest("dist/scoped-types/"));
    gulp.src("out/*.d.ts").pipe(gulp.dest("dist/global-types/"));
    cb();
});