/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Amount } from './Amount';
/**
 * Amount Bound Item
 *
 * Type of refund item that capture refunding of items in the order that are of type amount.
 * * `ORDER`
 * * `SHIPPING`
 * * `HANDLING`
 * * `TAX`
 * * `FEE`
 */
export type AmountBoundItem = {
    /**
     * Type of refund.
     */
    item_type: AmountBoundItem.item_type;
    /**
     * Order address ID.
     */
    item_id: number;
    amount: Amount;
    /**
     * Explanation of refund.
     */
    reason?: string;
};
export namespace AmountBoundItem {
    /**
     * Type of refund.
     */
    export enum item_type {
        ORDER = 'ORDER',
        SHIPPING = 'SHIPPING',
        HANDLING = 'HANDLING',
        TAX = 'TAX',
        FEE = 'FEE',
    }
}

