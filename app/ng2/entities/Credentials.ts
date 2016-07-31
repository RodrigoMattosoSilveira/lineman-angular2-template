export class Credentials {
    private tenant: string;
    private username: string;
    private password: string;

    constructor(tenant: string, username: string, password: string) {
        this.tenant = tenant;
        this.username = username;
        this.password = password;
    }
    // Getters and Setters
    setTenant(tenant: string): void { this.tenant = tenant; }
    getTenant(): string { return this.tenant; }
    setUsername(username: string): void { this.username = username; }
    getUsername(): string { return this.username; }
    setPassword(password: string): void { this.password = password; }
    getPassword(): string { return this.password; }
}
