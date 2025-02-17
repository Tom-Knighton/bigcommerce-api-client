/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdjustmentsRelativeRequest = {
    /**
     * Reason for the adjustment operation.
     */
    reason?: string;
    /**
     * One of the `sku`, `product_id`, or `variant_id` is required to identify the item.
     */
    items: Array<({
        /**
         * ID of location. This is empty in the case of the default allotment.
         */
        location_id: number;
        /**
         * "Stock keeping unit" identifier of an item.
         */
        sku: string;
        /**
         * Amount of items that will be moved.
         */
        quantity: number;
    } | {
        /**
         * ID of location. This is empty in the case of the default allotment.
         */
        location_id: number;
        /**
         * ID of variant.
         */
        variant_id: number;
        /**
         * Amount of items that will be moved.
         */
        quantity: number;
    } | {
        /**
         * ID of location. This is empty in the case of the default allotment.
         */
        location_id: number;
        /**
         * ID of product.
         */
        product_id: number;
        /**
         * Amount of items that will be moved.
         */
        quantity: number;
    })>;
};

