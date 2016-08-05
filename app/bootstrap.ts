
import { bootstrap }    from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";

import { APP_ROUTER_PROVIDERS } from "./app_routes";
import { MainComponent } from "./mainComponent/mainComponent";

bootstrap(MainComponent, [
        APP_ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        disableDeprecatedForms(),
        provideForms(),
    ]
).catch(err => console.error(err));
