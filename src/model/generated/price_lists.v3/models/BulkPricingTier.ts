/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BulkPricingTier = {
    /**
     * The cart's minimum quantity of associated variants needed to qualify for this tier's pricing.
     */
    quantity_min?: number;
    /**
     * The cart's maximum allowed quantity of associated variants to qualify for this tier's pricing.
     */
    quantity_max?: number;
    /**
     * The type of adjustment that is made.
     * Acceptable values:
     * * price – the adjustment amount per product
     * * percent – the adjustment as a percentage of the original price
     * * fixed – the adjusted absolute price of the product
     */
    type?: BulkPricingTier.type;
    /**
     * The price adjustment amount. This value and the type will decide the price per variant for the pricing tier.
     */
    amount?: number;
};
export namespace BulkPricingTier {
    /**
     * The type of adjustment that is made.
     * Acceptable values:
     * * price – the adjustment amount per product
     * * percent – the adjustment as a percentage of the original price
     * * fixed – the adjusted absolute price of the product
     */
    export enum type {
        FIXED = 'fixed',
        PRICE = 'price',
        PERCENT = 'percent',
    }
}

