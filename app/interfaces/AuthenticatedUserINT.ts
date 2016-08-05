export interface AuthenticatedUserINT {
    signatureKey?: string;
    token?: string;
    realm?: string;
    grantedRoles?: string[];
}