/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { consentAllow } from './consentAllow';
import type { Deny } from './Deny';
/**
 * Request payload for the BigCommerce API.
 */
export type DeclareCustomerConsentRequest = {
    allow?: consentAllow;
    deny?: Deny;
};

