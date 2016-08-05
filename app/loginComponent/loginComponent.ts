import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators} from "@angular/forms";

import {AuthenticationService} from "../services/AuthenticationService";
import {Credentials} from "../entities/Credentials";
import {AuthenticatedUser} from "../entities/AuthenticatedUser";


@Component({
    selector: "login",
    templateUrl: "app/loginComponent/loginComponent.html",
    styleUrls: ["app/loginComponent/loginComponent.css"],
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [AuthenticationService]
})
export class LoginComponent  implements OnInit {

    public thisForm: FormGroup;
    public tenantQueryParam: string = null;
    public authorizing: boolean = false;
    public failedAuthentication: boolean = false;
    private authenticatedUser: AuthenticatedUser;

    public model = {
        tenant: "",
        username: "",
        password: ""
    };

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

    public ngOnInit ()  {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.model.tenant = params["tenant"];
                this.tenantQueryParam = this.model.tenant;
                this.thisForm = new FormGroup({
                    tenant: new FormControl(this.tenantQueryParam, [
                        Validators.required
                    ]),
                    username: new FormControl("", [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(16)
                    ]),
                    password: new FormControl("", [
                        Validators.required,
                        Validators.minLength(4),
                        Validators.maxLength(18)
                    ])
                });

                // used to remove the authentication failure once the user types a character on any of the form attributes
                this.thisForm.valueChanges
                    .subscribe(items => this.failedAuthentication = false);
            });
    }

    onSubmit = (theForm, valid) => {
        let self = this;
        if (!valid) {
            console.log("LoginComponent::onSubmit: Look Mom, the form is invalid!: " + JSON.stringify(theForm._value));
            //
            this.thisForm.markAsTouched();
            for (let control in this.thisForm.controls) {
                this.thisForm.controls[control].markAsTouched();
            }
            return;
        }

        console.log("LoginComponent::onSubmit: Look Mom, the form is valid!: " + JSON.stringify(theForm._value));
        this.authorizing = true;
        let credentials = new Credentials(theForm._value.tenant, theForm._value.username, theForm._value.password );
        this.authenticationService.login(credentials)
            .subscribe(
                authenticated  => {
                    console.log("LoginComponent::onSubmit: Authentication Succeeded: " +  JSON.stringify(authenticated));
                    self.authorizing = false;
                    self.failedAuthentication = false;
                    self.authenticatedUser = new AuthenticatedUser(authenticated);
                    console.log("LoginComponent::onSubmit: authenticatedUser.signatureKey: " +  self.authenticatedUser.getSignatureKey());
                    console.log("LoginComponent::onSubmit: authenticatedUser.token: " +  self.authenticatedUser.getToken());
                    console.log("LoginComponent::onSubmit: authenticatedUser.realm: " +  self.authenticatedUser.getRealm());
                    console.log("LoginComponent::onSubmit: authenticatedUser.grantedRoles: " +  JSON.stringify(self.authenticatedUser.getGrantedRoles()));
                    self.router.navigate(["/home"]);
                },
                error =>  {
                    console.log("LoginComponent::onSubmit: Authentication Failed");
                    self.authorizing = false;
                    self.failedAuthentication = true;
//                    self.errorMessage = <any>error;
                }
            );

    };

// TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}

