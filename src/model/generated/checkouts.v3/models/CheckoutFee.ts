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
    display_name?: string;
    /**
     * Cost of the fee including tax.
     */
    cost_inc_tax?: number;
    /**
     * Cost of the fee excluding tax.
     */
    cost_ex_tax?: number;
    /**
     * The source of the request.
     */
    source?: string;
    /**
     * The tax class ID.
     */
    tax_class_id?: number | null;
};
export namespace CheckoutFee {
    /**
     * The type of the fee.
     */
    export enum type {
        CUSTOM_FEE = 'custom_fee',
    }
}

