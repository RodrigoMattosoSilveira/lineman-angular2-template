// See also: https://angular.io/docs/ts/latest/quickstart.html
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        "app":                        "app",
        "rxjs":                       "node_modules/rxjs",
        "@angular":                   "node_modules/@angular",
        "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api"
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app:                          {defaultExtension: "js", main: "app.js"},
        rxjs:                         {defaultExtension: "js"},
        "angular2-in-memory-web-api": {defaultExtension: "js", main: "index.js"}
    };

    var ngPackageNames = [
        "common",
        "compiler",
        "core",
        "forms",
        "http",
        "platform-browser",
        "platform-browser-dynamic",
        "router",
        "router-deprecated",
        "testing",
        "upgrade"
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages["@angular/"+pkgName] = { main: "index.js", defaultExtension: "js" };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages["@angular/"+pkgName] = { main: "/bundles/" + pkgName + ".umd.js", defaultExtension: "js" };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var paths = {
        underscore: "./node_modules/underscore/underscore.js"
    };

    var config = {
        defaultJSExtensions: true,
        map: map,
        packages: packages,
        paths: paths
    };

    // filterSystemConfig - index.html"s chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
