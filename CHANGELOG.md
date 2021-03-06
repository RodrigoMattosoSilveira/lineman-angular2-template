# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.0.7] - 2016 08 06
### Updated
* Bumped the version
* Updated it to depend on [lineman-angular2](https://www.npmjs.com/package/lineman-angular2) v0.0.7

## [0.0.6] - SKIPPED

## [0.0.5] - 2016 08 05
### Updated
* Bumped the version
* Removed lineman-less v0.0.1 dependency

### Updated
#### Changed the file structure to reflect a pure Angular 2 development environment

## [0.0.4] - 2016-08-05
### Added
* Add unit and end to end test samples
* Add the elements of the original lineman-angular-template app

### Updated
#### Changed the file structure to reflect a pure Angular 2 development environment
````bash
your-project-name
|
|-- app/
    |
    |- app.css
    |- bootstrap.ts
    |- moduleA/
       |- moduleA.css
       |- moduleA.html
       |- moduleA.ts
    |- ...
    |- moduleN/
       |- moduleN.css
       |- moduleN.html
       |- moduleN.ts    
|-- node_modules/
|-- test/
    |
    |- main_spec.ts
    |- moduleA/
       |- moduleA_spec.ts
    |- ...
    |- moduleN/
       |- moduleN_spec.ts    
|-- gitignore
|-- Gruntfile.js
|-- LICENSE
|-- README.md
|-- favicon.ico
|-- index.html
|-- package.json
|-- systems.config.js
|-- tslint.json
|-- typings.json
````

## [0.0.3] - 2016-07-31
### Added
* Angular 2 source code, including index.html to load pure Angular 2.
* CHANGELOG.md - hereon I'll keep a high level change log.

## [0.0.2] - 2016-07-11
### Added
* Initial Release.