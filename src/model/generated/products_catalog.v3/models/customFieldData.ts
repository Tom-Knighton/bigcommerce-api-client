/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Gets custom fields associated with a product. These allow you to specify additional information that will appear on the product’s page, such as a book’s ISBN or a DVD’s release date.
 */
export type customFieldData = {
    /**
     * The unique numeric ID of the custom field increments sequentially. Read-Only.
     */
    id?: number;
    /**
     * The name of the field, shown on the storefront, orders, etc. This field is a requirement for /POST requests.
     *
     */
    name?: string;
    /**
     * The value of the field, shown on the storefront, orders, etc. This field is a requirement for /POST requests.
     *
     */
    value?: string;
};

