/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentRequest = {
    /**
     * Reference to payment provider
     */
    provider_id?: string;
    /**
     * Amount refunded via this provider
     */
    amount?: number;
    /**
     * Whether the payment was marked as offline or performed through an online payment service.
     */
    offline?: boolean;
};

