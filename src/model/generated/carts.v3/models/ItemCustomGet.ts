/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Add a custom item to the shopperʼs cart.
 *
 * * Custom items are not added to the catalog.
 * * The price should be set to match the store settings for taxes.
 */
export type ItemCustomGet = {
    /**
     * ID of the custom item.
     */
    id?: string;
    /**
     * SKU of the custom item.
     */
    sku?: string;
    /**
     * Name of the item.
     */
    name?: string;
    quantity?: string;
    /**
     * Specifies the price of the item. This value can include or exclude tax, depending on the store setup.
     */
    list_price?: string;
    /**
     * List price of the item multiplied by the quantity.
     */
    extended_list_price?: number;
    /**
     * Image of the product or variant.
     */
    image_url?: string;
};

