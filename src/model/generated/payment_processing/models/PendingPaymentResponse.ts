/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PendingPaymentResponse = {
    /**
     * Identifier for this transaction
     */
    id?: string;
    /**
     * Transaction type for this payment
     */
    transaction_type?: PendingPaymentResponse.transaction_type;
    /**
     * Status to indicate a success response
     */
    status?: PendingPaymentResponse.status;
};

export namespace PendingPaymentResponse {

    /**
     * Transaction type for this payment
     */
    export enum transaction_type {
        AUTHORIZATION = 'authorization',
        PURCHASE = 'purchase',
    }

    /**
     * Status to indicate a success response
     */
    export enum status {
        SUCCESS = 'success',
        PENDING = 'pending',
    }


}

