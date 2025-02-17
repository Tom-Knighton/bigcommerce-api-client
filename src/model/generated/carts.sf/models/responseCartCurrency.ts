/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This will always be the same between cart and checkout.
 */
export type responseCartCurrency = {
    /**
     * ISO-4217 currency code. (See: https://www.iso.org/iso-4217-currency-codes.html.)
     */
    code?: string;
    /**
     * The number of decimal places that prices have when you use the currency.
     */
    decimalPlaces?: number;
    /**
     * The name for the currency that the merchant entered in the control panel.
     */
    name?: string;
    /**
     * The currency symbol displayed on the storefront.
     */
    symbol?: string;
};

