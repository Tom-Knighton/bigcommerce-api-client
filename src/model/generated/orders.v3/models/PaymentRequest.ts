/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentRequest = {
    /**
     * Reference to payment provider.
     */
    provider_id?: string;
    /**
     * Amount refunded with this provider.
     */
    amount?: number;
    /**
     * Whether the payment was marked as offline or performed through an online payment service.
     */
    offline?: boolean;
};

