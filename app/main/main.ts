import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import {LoginComponent} from "../login/loginComponent";
import {HomeComponent} from "../home/homeComponent";
import "rxjs/Rx";

/*
 * TODO; Keep and eye
 * 24-JUL-2016: https://github.com/angular/angular/issues/9963
 */

@Component({
    selector: "main-app",
//    templateUrl: "main/main.html", // does not work with the router!
    template: `
        <h1 class="dlabs-ng2">NG2 App</h1>
        <h4>This is work in progress; being enhanced to fully reflect its sister, lineman-angular-template</h4>
        <router-outlet></router-outlet>
    `,
    styleUrls: ["main/main.css"],
    directives: [ROUTER_DIRECTIVES],
    precompile: [LoginComponent, HomeComponent]
})
export class Main {
}
