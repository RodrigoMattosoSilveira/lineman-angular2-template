# A Lineman JS Template using Angular2

[![Build Status](https://travis-ci.org/linemanjs/lineman-angular-template.png?branch=master)](https://travis-ci.org/linemanjs/lineman-angular-template)

This is a project template for Angular 1 and Angular 2 applications using [Lineman](http://www.linemanjs.com). 

It was built based on [lineman-angular-template](https://github.com/linemanjs/lineman-angular-template).

## Introduction
This plugin enhances the original  [lineman-angular](https://github.com/linemanjs/lineman-angular) plugin to support [Angular 2](https://angular.io/). Using this plugin you can build pure Angular 1, hybrid [Angular 1](https://angularjs.org/)/ [Angular 2](https://angular.io/), and pure [Angular 2](https://angular.io/) applications.

[Angular 2](https://angular.io/) is quite different from [Angular 2](https://angular.io/), with some of these differences having a direct impact on how hybrid Angular 1/ Angular 2, and pure Angular 2 applications are built:

* **TypeScript**: [Angular 2](https://angular.io/) introduced support for one additional language, [TypeScript](https://www.typescriptlang.org/). This plugin adds support for TypeScript transpilation.
* **Module Management** - Angular 2 adopted the [ES6 module architecture](http://exploringjs.com/es6/ch_modules.html), introducing a third party module manager - this plugin uses [SystemJS](https://github.com/systemjs/systemjs), leading to changes in how files are managed during development and at runtime. As a result it became necessary to carefully re-factor the configuration to support the development of hybrid Angular 1/ Angular 2, and pure Angular 2 applications while still fully preserving the Angular 1 support.
* **Component Architecture** - Angular 2 introduces a more sophisticated [component architecture](https://angular.io/docs/ts/latest/guide/architecture.html), offering the developer the ability to consolidate all of a component’s artifacts - css / html / img, png, ts, into the same filesystem folder, leaving it up to the module manager to worry about loading them as necessary. As a result it became necessary to carefully re-factor the configuration to support this paradigm while still supporting Angular 1 fully.