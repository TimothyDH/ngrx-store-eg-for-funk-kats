// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/gulp-protractor/gulp-protractor.d.ts
declare module 'gulp-protractor' {
    import gulp = require('gulp');

    interface IOptions {
        configFile?: string;
        args?: Array<string>;
        debug?: boolean;
    }

    interface IGulpProtractor {
        getProtractorDir(): string;
        protractor(options?: IOptions): NodeJS.ReadWriteStream;
        webdriver_standalone: gulp.TaskCallback;
        webdriver_update: gulp.TaskCallback;
    }

    var protractor: IGulpProtractor;
    export = protractor;
}
