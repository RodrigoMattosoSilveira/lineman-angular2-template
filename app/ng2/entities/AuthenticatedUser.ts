import { AuthenticatedUserINT } from "../interfaces/AuthenticatedUserINT";

export class AuthenticatedUser  {
    private signatureKey: string;
    private token: string;
    private realm: string;
    private grantedRoles: string[];

    constructor(au: any) {
        this.signatureKey = au.signatureKey || "";
        this.token = au.token || "";
        this.realm = au.realm || "";
        this.grantedRoles = au. grantedRoles.slice() || [].slice();
    }

    // Getters and Setters
    setSignatureKeyt(signatureKey: string): void { this.signatureKey = signatureKey; }
    getSignatureKey(): string { return this.signatureKey; }
    setToken(token: string): void { this.token = token; }
    getToken(): string { return this.token; }
    setRealm(realm: string): void { this.realm = realm; }
    getRealm(): string { return this.realm; }
    setGrantedRoles(grantedRoles: string[]): void { this.grantedRoles = grantedRoles.slice(); }
    getGrantedRoles(): string[] { return this.grantedRoles; }
}
