/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFields } from './CustomFields';
export type CustomerCreateData = {
    /**
     * First name of customer.
     */
    firstName?: string;
    /**
     * Last name of customer.
     */
    lastName?: string;
    /**
     * Email of customer.
     */
    email?: string;
    /**
     * Password of customer.
     */
    password?: string;
    /**
     * Indicates whether customer provided consent to receive marketing emails.
     */
    acceptsMarketingEmails?: boolean;
    /**
     * A valid [reCAPTCHA](/docs/storefront/graphql/customers#recaptcha) token from a successful verification response.
     */
    token?: string;
    customFields?: Array<CustomFields>;
};

