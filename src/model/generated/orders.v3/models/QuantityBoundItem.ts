/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Quantity Bound Item
 *
 * Type of refund item that capture refunding of items in the order that are of type quantity.
 * * `PRODUCT`
 * * `GIFT_WRAPPING`
 *
 */
export type QuantityBoundItem = {
    /**
     * Type of refund.
     */
    item_type?: QuantityBoundItem.item_type;
    /**
     * Order Product ID.
     */
    item_id?: number;
    quantity?: number;
    /**
     * Reason for refund
     */
    reason?: string;
};

export namespace QuantityBoundItem {

    /**
     * Type of refund.
     */
    export enum item_type {
        PRODUCT = 'PRODUCT',
        GIFT_WRAPPING = 'GIFT_WRAPPING',
    }


}

