import { provideRouter, RouterConfig } from "@angular/router";

import {LoginComponent} from "./login/loginComponent";
import {HomeComponent} from "./home/homeComponent";

const routes: RouterConfig = [
    { path: "login", component: LoginComponent },
    { path: "home",  component: HomeComponent },
    { path: "",      component: LoginComponent },
    { path: "**",    component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];