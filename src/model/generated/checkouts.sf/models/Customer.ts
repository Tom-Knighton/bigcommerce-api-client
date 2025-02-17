/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
/**
 * Customer details.
 */
export type Customer = {
    addresses?: Array<{
        id?: number;
        firstName?: string;
        lastName?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        /**
         * State or province.
         */
        stateOrProvince?: string;
        stateOrProvinceCode?: string;
        /**
         * [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the country.
         */
        countryCode?: string;
        postalCode?: string;
        phone?: string;
        /**
         * Address type.
         */
        type?: string;
        customFields?: Array<customFields>;
    }>;
    customerGroup?: {
        /**
         * ID of the customer group.
         */
        id?: number;
        /**
         * Name of the customer group.
         */
        name?: string;
    };
    /**
     * Customer email.
     */
    email?: string;
    /**
     * Customer's first name.
     */
    firstName?: string;
    /**
     * Customer's full name.
     */
    fullName?: string;
    /**
     * Customer ID.
     */
    id?: number;
    /**
     * Whether the shopper is a guest or a logged-in customer.
     */
    isGuest?: boolean;
    /**
     * Customer's last name.
     */
    lastName?: string;
    shouldEncourageSignIn?: boolean;
    /**
     * The amount of store credit a customer has.
     */
    storeCredit?: number;
};

