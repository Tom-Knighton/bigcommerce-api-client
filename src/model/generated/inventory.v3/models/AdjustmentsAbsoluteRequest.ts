/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdjustmentsAbsoluteRequest = {
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
         * variant_id identifier of item.
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
         * product_id identifier of item.
         */
        product_id: number;
        /**
         * Amount of items that will be moved.
         */
        quantity: number;
    })>;
};

