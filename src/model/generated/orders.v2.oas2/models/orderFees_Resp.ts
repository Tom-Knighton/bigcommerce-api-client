/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type orderFees_Resp = {
    /**
     * The unique numeric identifier of the fees object.
     */
    id?: number;
    /**
     * The type of the fee.
     */
    type?: orderFees_Resp.type;
    /**
     * The display name of the fee targeting customers.
     */
    display_name_customer?: string;
    /**
     * The display name of the fee targeting shoppers.
     */
    display_name_merchant?: string;
    /**
     * The source of the request.
     */
    source?: string;
    /**
     * The base fee cost value. (Float, Float-As-String, Integer)
     */
    base_cost?: (string | number);
    /**
     * The fee cost value excluding tax. (Float, Float-As-String, Integer)
     */
    cost_ex_tax?: (string | number);
    /**
     * The fee cost value including tax. (Float, Float-As-String, Integer)
     */
    cost_inc_tax?: (string | number);
    /**
     * The tax amount on the fee cost. (Float, Float-As-String, Integer)
     */
    cost_tax?: (string | number);
    /**
     * A unique numeric identifier for the tax class. If not persisted or null, the default fee tax class from the control panel is used.
     */
    tax_class_id?: number | null;
};
export namespace orderFees_Resp {
    /**
     * The type of the fee.
     */
    export enum type {
        CUSTOM_FEE = 'custom_fee',
    }
}

