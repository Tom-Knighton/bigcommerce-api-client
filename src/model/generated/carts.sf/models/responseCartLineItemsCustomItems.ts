/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * **Read Only**
 *
 * This will return in the Cart Response if the Cart was created using the [Server to Server Cart API](/api-reference/cart-checkout/server-server-cart-api). A custom item can only be added to a cart using the Server to Server API.
 */
export type responseCartLineItemsCustomItems = {
    readonly extendedListPrice?: number;
    /**
     * Id of the custom item
     */
    readonly id?: string;
    /**
     * Price of the item. With or without tax depending on your stores set up.
     */
    readonly listPrice?: number;
    /**
     * Item name
     */
    readonly name?: string;
    readonly quantity?: number;
    /**
     * Custom item sku
     */
    readonly sku?: string;
};

