/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
    //Override application configuration here. Common examples follow in the comments.

    // DO NOT REMOVE
    var app = lineman.config.application;


    return {
        // grunt-angular-templates assumes your module is named "app", but
        // you can override it like so:
        //
        // ngtemplates: {
        //   options: {
        //     module: "myModuleName"
        //   }
        // }


        server: {
            pushState: true
            // API Proxying
            //
            // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
            // port as your lineman development server. By enabling the API proxy and setting the port, all
            // requests for paths that don't match a static asset in ./generated will be forwarded to
            // whatever service might be running on the specified port.
            //
            // apiProxy: {
            //   enabled: true,
            //   host: 'localhost',
            //   port: 3000
            // }
        },

        loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-contrib-copy", "grunt-contrib-clean", "grunt-ts"),

        /*
         * Task Configuration
         */

        clean: {
            ng2: {
                "generated": {
                    src: "<%= files.ng2.generated %>" + "/*",
                    options: {
                        force: true
                    }
                }
            }
        },

        copy: {
            ng2_css_generated: {
                // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                expand: true,
                cwd: "app/ng2",
                src: "<%= files.ng2.css %>",
                dest: "<%= files.ng2.generated %>"
            },
             ng2_html_generated: {
                 // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                 // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                 expand: true,
                 cwd: "app/ng2",
                 src: "<%= files.ng2.html %>",
                 dest: "<%= files.ng2.generated %>"
             },
            ng2_libs_generated: {
                files: [
                    {expand: true, src: "<%= files.ng2.libs %>", dest: "generated/" }
                ]
            },
            ng2_other_generated: {
               // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                expand: true,
                cwd: "app/ng2",
                src: ["<%= files.ng2.css %>", "<%= files.ng2.html %>"], //todo consolidate
                dest: "<%= files.ng2.generated %>"
            },
            ng2_libs_dist: {
                files: [
                    {expand: true, src: "<%= files.ng2.libs %>", dest: "dist/" }
                ]
            },
            ng2_other_dist: {
               // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                expand: true,
                cwd: "app/ng2",
                src: ["<%= files.ng2.css %>", "<%= files.ng2.html %>"], //todo consolidate
                dest: "<%= files.ng2.dist %>"
            },
            systemjs_to_dist: {
                src: "systemjs.config.js",
                dest: "<%= files.ng2.systemjs.dist %>"
            },
            systemjs_to_generated: {
                src: "systemjs.config.js",
                dest: "<%= files.ng2.systemjs.generated %>"
            }
        },

        // Added this to fix the following error:
        // Warning: Path must be a string. Received null Use --force to continue.
        // found out about this error here: https://github.com/jshint/jshint/issues/2922
        jshint: {
            options: {
                reporterOutput: ""
            }
        },

        // Task to compile typescript files
        // Look here for config options: https://www.npmjs.com/package/grunt-ts
        ts: {
            development: {
                "src": "app/ng2/**/*.ts",
                "outDir": "<%= files.ng2.generated %>",
                "options": {
                    "emitDecoratorMetadata": true,
                    "module": "system",
                    "moduleResolution": "node",
                    "noImplicitAny": false,
                    "removeComments": false,
                    "sourceMap": true,
                    // using es5 is problematic with NG2-beta
                    // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                    "target": "es6"
                }
            },
            production: {
                "src": "app/ng2/**/*.ts",
                "outDir": "<%= files.ng2.dist %>",
                "options": {
                    "emitDecoratorMetadata": true,
                    "module": "system",
                    "moduleResolution": "node",
                    "noImplicitAny": false,
                    "removeComments": false,
                    "sourceMap": false,
                    // using es5 is problematic with NG2-beta
                    // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                    "target": "es6"
                }
            }
        },

        /*
        * Watch configuration
        */
        watch: {
               ng2_systemjs: {
                    "files": "systemjs.config.js",
                    "tasks": ["copy:systemjs_generated"]
                },
                // renamed & deleted files remain in place, restarting lineman run will fix it
                ng2_css: {
                    "files": "<%= files.ng2.css %>",
                    "tasks": ["copy:ng2_css_generated"]
                },
                // renamed & deleted files remain in place, restarting lineman run will fix it
                ng2_html: {
                    "files": "<%= files.ng2.html %>",
                    "tasks": ["copy:ng2_html_generated"]
                },
                // renamed & deleted files remain in place, restarting lineman run will fix it
                ng2_ts: {
                    "files": "<%= files.ng2.ts %>",
                    "tasks": ["ts:development"]
                }
        },

        /*
        * Workflow configuration
        */
        prependTasks: {
            common: "clean:ng2:generated".concat(lineman.config.application.prependTasks.common).concat(["ts:ng2:generated"]),
            dev: ["copy:ng2_other_generated", "copy:ng2_libs_generated"].concat(lineman.config.application.prependTasks.dev),
            dist: ["copy:ng2_other_dist", "copy:ng2_libs_dist"].concat(lineman.config.application.prependTasks.dev)
        }
    };
};
