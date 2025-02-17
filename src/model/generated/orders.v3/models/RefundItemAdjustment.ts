/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Use to reduce the amount refunded for an item.
 */
export type RefundItemAdjustment = {
    /**
     * A negative 2 decimal place rounded value to deduct from the amount refunded.
     */
    amount?: number;
    /**
     * Description of reason for the adjustment.
     */
    description?: string;
};

