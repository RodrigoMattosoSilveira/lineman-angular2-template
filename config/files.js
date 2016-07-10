/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
    //Override file patterns here
    return {
        js: {
            vendor: [
                "vendor/js/angular.js",
                "vendor/js/**/*.js"
            ],
        app: [
                "app/js/app.js",
                "app/js/**/*.js"
            ]
        },

        less: {
            compile: {
                options: {
                    paths: ["vendor/css/normalize.css", "vendor/css/**/*.css", "app/css/**/*.less"]
                }
            }
        },

        ng2: {
            libs: [
                "systemjs.config.js",
                "node_modules/@angular/**",
                "node_modules/systemjs/**",
                "node_modules/core-js/**",
                "node_modules/reflect-metadata/**",
                "node_modules/rxjs/**",
                "node_modules/zone.js/**",
                "node_modules/angular2-in-memory-web-api/**"
            ],
            css: [
                // used in conjunction with the CWD option
                "**/*.css"
            ],
            html: [
                // used in conjunction with the CWD option
                "**/*.html"
            ],
            "systemjs": {
                generated: "generated/",
                dist: "dist/"
            },
            ts: [
                // used in conjunction with the CWD option
                "**/*.ts"
            ],
            generated: "generated/ng2",
            dist: "dist/ng2"
        },
    };
};
