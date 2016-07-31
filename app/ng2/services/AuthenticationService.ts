
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/Rx";
import "rxjs/add/operator/map";

import {Credentials} from "../entities/Credentials";
import {AuthenticatedUser} from "../entities/AuthenticatedUser";

@Injectable()
export class AuthenticationService {
//    loginUrl = "http://127.0.0.1:8080/admin/resources/token";  // URL to web API
    loginUrl = "http://localhost:8080/admin/resources/token";  // URL to web API

    constructor (private http: Http,
                 private router: Router) {}

    login (credentials: Credentials): Observable<AuthenticatedUser> {
        let tenant: string = credentials.getTenant();
        let username: string = credentials.getUsername();
        let password: string = credentials.getPassword();
        let headers = new Headers({
            "Accept": "application/json",
            "Authorization": "DLabsU " + tenant + ":" + username + ":" + password
        });
        let options = new RequestOptions({ headers: headers });
        console.log("AuthenticationService::login - Tenant=" + tenant + ", Username=" + username + ", Password: " + password);
        return this.http.get(this.loginUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    logout (): void {
        this.router.navigate(["/login"]);
    }


    private extractData(res: Response) {
        let body = res.json();
        console.log("AuthenticationService::ExtractData: " + JSON.stringify(body));
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}