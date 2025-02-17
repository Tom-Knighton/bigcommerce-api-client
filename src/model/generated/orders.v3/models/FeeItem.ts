/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Amount } from './Amount';
/**
 * Use this field to refund a custom fee at the order level.
 */
export type FeeItem = {
    /**
     * The type of refund.
     */
    item_type?: FeeItem.item_type;
    /**
     * Numeric ID of the fee in the order.
     */
    item_id?: number;
    amount?: Amount;
    /**
     * Reason for the refund.
     */
    reason?: string;
};
export namespace FeeItem {
    /**
     * The type of refund.
     */
    export enum item_type {
        FEE = 'FEE',
    }
}

