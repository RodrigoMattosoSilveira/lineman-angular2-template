// code/conversion/hybrid/ts/app.ts

import { UpgradeAdapter } from "@angular/upgrade";
import * as angular from "@angular/upgrade/src/angular_js";
import "interestAppNg1"; // "bare import" for side-effects

/*
 * Create our upgradeAdapter
 */
const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter();

// Load the NG1 application
let app = angular.module("app");

// convert NG2 ComponentTwo to work on NG1
import {ComponentOne} from "./componentOne/componentOne";
app.directive("componentOne",
    upgradeAdapter.downgradeNg2Component(ComponentOne));

// convert tNG2 ComponentOne to work on NG1
import {ComponentTwo} from "./componentTwo/componentTwo";
app.directive("componentTwo",
    upgradeAdapter.downgradeNg2Component(ComponentTwo));


/*
* Bootstrap the NG2 App
*/
upgradeAdapter.bootstrap(document.body, ["app"]);