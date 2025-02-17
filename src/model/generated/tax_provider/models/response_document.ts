/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { handling_type } from './handling_type';
import type { item_type } from './item_type';
import type { response_item } from './response_item';
import type { shipping_type } from './shipping_type';
import type { wrapping_type } from './wrapping_type';
export type response_document = {
    /**
     * A unique identifier for this consignment. Must match the ID of the corresponding Document Request.
     */
    id: string;
    /**
     * An optional unique identifier for the document stored in the external provider’s system. Currently not used in any end-to-end operation, but may be logged by BigCommerce and thus be helpful when resolving issues.
     */
    external_id?: string;
    /**
     * Collection of items contained within this consignment that have had tax liabilities calculated. An item may or may not have gift wrapping.
     */
    items: Array<(response_item & {
        type: item_type;
        /**
         * Optional gift wrapping for items in the consignment.
         */
        wrapping?: (response_item & {
            type: wrapping_type;
        } | null);
    })>;
    /**
     * Shipping line item present in each document request.
     */
    shipping: (response_item & {
        type: shipping_type;
    });
    /**
     * Handling line item present in each document request.
     */
    handling: (response_item & {
        type: handling_type;
    });
};

