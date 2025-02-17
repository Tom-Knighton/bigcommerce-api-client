/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomField } from './CustomField';
export type AddressProperties = {
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    /**
     * Represents state or province.
     */
    stateOrProvince?: string;
    stateOrProvinceCode?: string;
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    countryCode: string;
    postalCode?: string;
    phone?: string;
    customFields?: Array<CustomField>;
};

