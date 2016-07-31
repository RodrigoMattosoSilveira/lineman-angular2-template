
import { bootstrap }    from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";

import { APP_ROUTER_PROVIDERS } from "./app_routes";
import { Ng2App } from "./ng2app/ng2app";

bootstrap(Ng2App, [
        APP_ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        disableDeprecatedForms(),
        provideForms(),
    ]
).catch(err => console.error(err));
