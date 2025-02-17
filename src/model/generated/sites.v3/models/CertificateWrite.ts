/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CertificateWrite = {
    /**
     * The primary certificate, as a string.
     */
    certificate?: string;
    /**
     * The private key, as a string. Is a "write-only" field, will never be returned after write.
     */
    private_key?: string;
    /**
     * The intermediate certificate(s), as a string.
     */
    intermediate_certificates?: string;
};

