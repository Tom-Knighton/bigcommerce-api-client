/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BulkPricingTier = {
    /**
     * The minimum quantity required to trigger this bulk pricing discount.
     */
    minimum?: number;
    /**
     * The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount.
     */
    maximum?: number;
    discount_amount?: number;
    discount_type?: BulkPricingTier.discount_type;
    /**
     * Formats the `bulk_pricing.discount_amount` into the tax price amounts.
     */
    tax_discount_amount?: Array<{
        /**
         * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
         */
        as_entered?: number;
        /**
         * The estimated tax-inclusive price for this product based on the provided customer group.
         */
        tax_inclusive?: number;
        /**
         * The estimated tax-exclusive price for this product based on the provided customer group.
         */
        tax_exclusive?: number;
        /**
         * Determines whether the 'as_entered' price is inclusive or exclusive of tax based on the store's tax jurisdiction.
         */
        entered_inclusive?: boolean;
    }>;
};
export namespace BulkPricingTier {
    export enum discount_type {
        PRICE = 'price',
        PERCENT = 'percent',
        FIXED = 'fixed',
    }
}

