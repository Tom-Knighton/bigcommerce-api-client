/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Payload for POST request to create custom fields associated with a product.
 */
export type customFieldPost = {
    /**
     * The name of the field, shown on the storefront, orders, etc. This field is a requirement for /POST requests.
     *
     */
    name: string;
    /**
     * The value of the field, shown on the storefront, orders, etc. This field is a requirement for /POST requests.
     *
     */
    value: string;
};

