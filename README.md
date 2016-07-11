# A Lineman JS Template using Angular2 - lineman-angular2-template

[![Build Status](https://travis-ci.org/RodrigoMattosoSilveira/lineman-angular2-template.svg?branch=master)](https://travis-ci.org/RodrigoMattosoSilveira/lineman-angular2-template)

## Introduction
This is a project template for Angular 1 and Angular 2 applications using [Lineman](http://www.linemanjs.com). It dependes on the [lineman-angular](https://github.com/linemanjs/lineman-angular) and https://github.com/RodrigoMattosoSilveira/lineman-angular2 plugins. 

It was built based on [lineman-angular-template](https://github.com/linemanjs/lineman-angular-template), enabling you to build pure Angular 1, hybrid [Angular 1](https://angularjs.org/)/ [Angular 2](https://angular.io/), and pure [Angular 2](https://angular.io/) applications.

## Angular 1 and Angular 2

[Angular 2](https://angular.io/) is quite different from [Angular 2](https://angular.io/), with some of these differences having a direct impact on how hybrid Angular 1/ Angular 2, and pure Angular 2 applications are built:

* **TypeScript**: [Angular 2](https://angular.io/) introduced support for one additional language, [TypeScript](https://www.typescriptlang.org/). This plugin adds support for TypeScript transpilation.
* **Module Management** - Angular 2 adopted the [ES6 module architecture](http://exploringjs.com/es6/ch_modules.html), introducing a third party module manager - this plugin uses [SystemJS](https://github.com/systemjs/systemjs), leading to changes in how files are managed during development and at runtime. As a result it became necessary to carefully re-factor the configuration to support the development of hybrid Angular 1/ Angular 2, and pure Angular 2 applications while still fully preserving the Angular 1 support.
* **Component Architecture** - Angular 2 introduces a more sophisticated [component architecture](https://angular.io/docs/ts/latest/guide/architecture.html), offering the developer the ability to consolidate all of a component’s artifacts - css / html / img, png, ts, into the same filesystem folder, leaving it up to the module manager to worry about loading them as necessary. As a result it became necessary to carefully re-factor the configuration to support this paradigm while still supporting Angular 1 fully.

# Instructions

1. `git clone https://github.com/RodrigoMattosoSilveira/lineman-angular2-template.git my-angular-app`
2. `cd my-angular-app`
3. `sudo npm install -g lineman`
4. `npm install`
5. `lineman run`
6. open your web browser to localhost:8000

## Running Tests

This template was used as the basis of [@davemo](http://www.github.com/davemo)'s [Testing Strategies for Angular JS](http://www.youtube.com/watch?v=UYVcY9EJcRs) screencast, and contains all the tests we wrote in the screencast and a few more!

To run the unit tests:

1. `lineman run` from 1 terminal window
2. `lineman spec` from another terminal window, this will launch Testem and execute specs in Chrome

To run the end-to-end tests:

## End-to-End Tests

1. `npm install protractor`
2. `./node_modules/protractor/bin/webdriver-manager update`
3. Make sure you have chrome installed.
4. `lineman run` from 1 terminal window
5. `lineman grunt spec-e2e` from another terminal window
