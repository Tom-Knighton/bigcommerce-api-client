/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type address_Base = {
    address1?: string;
    address2?: string;
    city?: string;
    company?: string;
    /**
     * Country name.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    countryCode: string;
    customFields?: Array<customFields>;
    email?: string;
    firstName?: string;
    lastName?: string;
    /**
     * Represents state or province.
     */
    stateOrProvince?: string;
    stateOrProvinceCode?: string;
    phone?: string;
    postalCode?: string;
};

