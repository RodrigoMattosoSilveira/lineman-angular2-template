/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
    // DO NOT REMOVE
    var files = lineman.config.files;

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
            libs: files.ng2.libs.concat("node_modules/bootstrap/**")
        }
    };
};
