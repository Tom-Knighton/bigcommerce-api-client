/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type webhook_Base = {
    /**
     * Event you subscribe to.
     */
    scope: string;
    /**
     * URL must be active, return a 200 response, and be served on port 443. Custom ports arenʼt currently supported.
     */
    destination: string;
    /**
     * Boolean value that indicates whether the webhook is active or not. A webhook subscription becomes deactivated after 90 days of inactivity.
     */
    is_active?: boolean;
    /**
     * Headers used to validate that webhooks are active. You can pass in any number of custom headers to validate webhooks are being returned.
     */
    headers?: Record<string, string> | null;
};

