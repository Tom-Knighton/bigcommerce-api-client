/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type bulkPricingRule_Full = {
    /**
     * The minimum inclusive quantity of a product to satisfy this rule. Must be greater than or equal to zero. For `fixed` rules, the minimum quantity canʼt be less than two.
     * Required in /POST.
     *
     */
    quantity_min: number;
    /**
     * The maximum inclusive quantity of a product to satisfy this rule. Must be greater than the `quantity_min` value – unless this field has a value of 0 (zero), in which case there will be no maximum bound for this rule.
     * Required in /POST.
     */
    quantity_max: number;
    /**
     * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product.
     * Required in /POST.
     */
    type: bulkPricingRule_Full.type;
    /**
     * You can express the adjustment type as either a fixed dollar amount or a percentage. Send a number; the response will return a number for `price` and `fixed` adjustments.
     * Divide the adjustment percentage by 100 and send the result in string format. For example, represent 10% as “.10”. The response will return a float value for both `price` and `percentage` adjustments.
     * Required in /POST.
     */
    amount: (number | string);
};
export namespace bulkPricingRule_Full {
    /**
     * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product.
     * Required in /POST.
     */
    export enum type {
        PRICE = 'price',
        PERCENT = 'percent',
        FIXED = 'fixed',
    }
}

