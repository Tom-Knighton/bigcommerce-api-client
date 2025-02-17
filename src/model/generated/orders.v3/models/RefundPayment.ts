/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Amount } from './Amount';
export type RefundPayment = {
    /**
     * Reference to refund payment ID.
     */
    readonly id?: number;
    /**
     * Reference to payment provider.
     */
    provider_id?: string;
    amount?: Amount;
    /**
     * Indicate whether payment was offline.
     */
    offline?: boolean;
    /**
     * Indicate if this payment has been declined by payment provider.
     */
    is_declined?: boolean;
    /**
     * Message indicate why payment was declined.
     */
    declined_message?: string;
    /**
     * The BigCommerce `transaction_id`.
     */
    transaction_id?: string;
};

