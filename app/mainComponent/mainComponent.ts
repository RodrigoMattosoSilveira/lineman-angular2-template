import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import {LoginComponent} from "../loginComponent/loginComponent";
import {HomeComponent} from "../homeComponent/homeComponent";
import "rxjs/Rx";

/*
 * TODO; Keep and eye
 * 24-JUL-2016: https://github.com/angular/angular/issues/9963
 */

@Component({
    selector: "main-app",
//    templateUrl: "mainComponent/mainComponent.html", // does not work with the router!
    template: `
        <h1 class="dlabs-ng2">NG2 App</h1>
        <h4>This is work in progress; being enhanced to fully reflect its sister, lineman-angular-template</h4>
        <router-outlet></router-outlet>
    `,
    styleUrls: ["app/mainComponent/mainComponent.css"],
    directives: [ROUTER_DIRECTIVES],
    precompile: [LoginComponent, HomeComponent]
})
export class MainComponent {
}

