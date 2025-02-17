/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BaseFee = {
    /**
     * The type of the fee.
     */
    type: BaseFee.type;
    /**
     * The name of the fee.
     */
    name: string;
    /**
     * The display name of the fee targeting customers/shoppers.
     */
    display_name: string;
    /**
     * The cost of the fee.
     */
    cost: number;
    /**
     * The source of the request.
     */
    source: string;
    /**
     * The tax class ID applied to this fee (you can retrieve the tax class ID from our management API - v2/tax_classes). If the tax class is not provided or is null, the tax class set in the control panel is applied.
     */
    tax_class_id?: number;
};
export namespace BaseFee {
    /**
     * The type of the fee.
     */
    export enum type {
        CUSTOM_FEE = 'custom_fee',
    }
}

