/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This will always be the same between cart and checkout.
 */
export type Currency = {
    /**
     * The currency name.
     */
    name?: string;
    /**
     * ISO-4217 currency code. (See: https://www.iso.org/iso-4217-currency-codes.html.)
     */
    code?: string;
    /**
     * The currency symbol.
     */
    symbol?: string;
    /**
     * Number of decimal places for the currency. For example, USD currency has two decimal places.
     */
    decimalPlaces?: number;
};

