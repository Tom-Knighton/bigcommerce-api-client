/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type orderFees_Post = {
    /**
     * The type of the fee.
     */
    type?: orderFees_Post.type;
    /**
     * The display name of the fee targeting customers.
     */
    display_name_customer?: string;
    /**
     * The display name of the fee targeting shoppers. NOTE - At least one of the following fields (display_name_customer, display_name_merchant) must be included in the request.
     */
    display_name_merchant?: string;
    /**
     * The source of the request.
     */
    source?: string;
    /**
     * The fee cost value excluding tax. (Float, Float-As-String, Integer)
     */
    cost_ex_tax?: (string | number);
    /**
     * The fee cost value including tax. (Float, Float-As-String, Integer)
     */
    cost_inc_tax?: (string | number);
    /**
     * The tax amount on the fee cost. (Float, Float-As-String, Integer) NOTE - At least two of the following fields (cost_ex_tax, cost_inc_tax, and cost_tax) must be included in the request.
     */
    cost_tax?: (string | number);
    /**
     * A unique numeric identifier for the tax class. If not provided or null, the default fee tax class from the control panel is used.
     */
    tax_class_id?: number | null;
};
export namespace orderFees_Post {
    /**
     * The type of the fee.
     */
    export enum type {
        CUSTOM_FEE = 'custom_fee',
    }
}

