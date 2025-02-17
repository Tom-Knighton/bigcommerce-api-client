/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CheckoutFee = {
    /**
     * The fee ID.
     */
    id?: string;
    /**
     * The type of the fee.
     */
    type?: CheckoutFee.type;
    /**
     * Name of the fee.
     */
    name?: string;
    /**
     * Display name of the fee targeting customers/shoppers.
     */
    displayName?: string;
    /**
     * Cost of the fee (include or exclude tax dependent on tax settings, same as shipping cost).
     */
    cost?: number;
    /**
     * The source of the request.
     */
    source?: string;
    /**
     * The tax class ID.
     */
    taxClassId?: number;
};
export namespace CheckoutFee {
    /**
     * The type of the fee.
     */
    export enum type {
        CUSTOM_FEE = 'custom_fee',
    }
}

