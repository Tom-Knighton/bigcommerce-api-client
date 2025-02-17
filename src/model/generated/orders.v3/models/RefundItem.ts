/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Amount } from './Amount';
import type { RefundItemAdjustment } from './RefundItemAdjustment';
export type RefundItem = {
    /**
     * Type of item that was refunded.
     */
    item_type?: RefundItem.item_type;
    /**
     * order_product.id corresponding to the item_types of PRODUCT, GIFT_WRAPPING. order_address.id corresponding to the item_types of SHIPPING, HANDLING. order.id corresponding to the item_type of ORDER.
     */
    item_id?: number;
    /**
     * Reason for refunding an item.
     */
    reason?: string;
    /**
     * Quantity of item refunded. Note: this will only be populated for item_type PRODUCT
     */
    quantity?: number;
    /**
     * Adjustments to apply to the refunded amount for an item. Only supported for item_type PRODUCT
     */
    adjustments?: Array<RefundItemAdjustment>;
    requested_amount?: Amount;
};
export namespace RefundItem {
    /**
     * Type of item that was refunded.
     */
    export enum item_type {
        PRODUCT = 'PRODUCT',
        GIFT_WRAPPING = 'GIFT_WRAPPING',
        SHIPPING = 'SHIPPING',
        HANDLING = 'HANDLING',
        ORDER = 'ORDER',
        FEE = 'FEE',
    }
}

