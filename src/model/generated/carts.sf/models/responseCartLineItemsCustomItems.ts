/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * **Read Only**
 *
 * This will return in the Cart Response if the Cart was created using the [REST Management API](/docs/rest-management/carts). A custom item can only be added to a cart using the REST Management API.
 */
export type responseCartLineItemsCustomItems = {
    readonly extendedListPrice?: number;
    /**
     * ID of the custom item
     */
    readonly id?: string;
    /**
     * Price of the item. With or without tax depending on your stores set up.
     */
    readonly listPrice?: number;
    /**
     * Name of the custom item.
     */
    readonly name?: string;
    readonly quantity?: number;
    /**
     * SKU of the custom item.
     */
    readonly sku?: string;
};

