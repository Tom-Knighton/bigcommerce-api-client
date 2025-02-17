/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkPricingTier } from './BulkPricingTier';
export type ItemPricing = {
    /**
     * The (required) product ID of the item.
     */
    product_id?: number;
    /**
     * The (optional) variant ID of the item.
     */
    variant_id?: number;
    /**
     * The optional product option configuration for which this price was generated.
     */
    options?: Array<{
        /**
         * The ID of the variant option or modifier option configured for this price.
         */
        option_id?: number;
        /**
         * The selected value ID for the configured option.
         */
        value_id?: number;
    }>;
    /**
     * The (optional) RRP/retail price configured for this product.
     */
    retail_price?: {
        /**
         * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
         */
        as_entered?: number;
        /**
         * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax-exclusive price for this product based on the provided customer group.
         */
        tax_exclusive?: number;
        /**
         * The estimated tax-inclusive price for this product based on the provided customer group.
         */
        tax_inclusive?: number;
    };
    /**
     * The price for a product, including estimates for tax.
     */
    sale_price?: {
        /**
         * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
         */
        as_entered?: number;
        /**
         * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax-exclusive price for this product based on the provided customer group.
         */
        tax_exclusive?: number;
        /**
         * The estimated tax-inclusive price for this product based on the provided customer group.
         */
        tax_inclusive?: number;
    };
    /**
     * The price for a product, including estimates for tax.
     */
    minimum_advertised_price?: {
        /**
         * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
         */
        as_entered?: number;
        /**
         * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax-exclusive price for this product based on the provided customer group.
         */
        tax_exclusive?: number;
        /**
         * The estimated tax-inclusive price for this product based on the provided customer group.
         */
        tax_inclusive?: number;
    };
    /**
     * The price for a product, including estimates for tax.
     */
    price?: {
        /**
         * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
         */
        as_entered?: number;
        /**
         * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax-exclusive price for this product based on the provided customer group.
         */
        tax_exclusive?: number;
        /**
         * The estimated tax-inclusive price for this product based on the provided customer group.
         */
        tax_inclusive?: number;
    };
    /**
     * The price for a product, including estimates for tax.
     */
    calculated_price?: {
        /**
         * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
         */
        as_entered?: number;
        /**
         * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax-exclusive price for this product based on the provided customer group.
         */
        tax_exclusive?: number;
        /**
         * The estimated tax-inclusive price for this product based on the provided customer group.
         */
        tax_inclusive?: number;
    };
    /**
     * For estimated prices, the minimum/maximum price that will typically apply to this product.
     */
    price_range?: {
        /**
         * The price for a product, including estimates for tax.
         */
        minimum?: {
            /**
             * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
             */
            as_entered?: number;
            /**
             * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
             */
            entered_inclusive?: boolean;
            /**
             * The estimated tax-exclusive price for this product based on the provided customer group.
             */
            tax_exclusive?: number;
            /**
             * The estimated tax-inclusive price for this product based on the provided customer group.
             */
            tax_inclusive?: number;
        };
        /**
         * The price for a product, including estimates for tax.
         */
        maximum?: {
            /**
             * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
             */
            as_entered?: number;
            /**
             * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax. jurisdiction
             */
            entered_inclusive?: boolean;
            /**
             * The estimated tax-exclusive price for this product based on the provided customer group.
             */
            tax_exclusive?: number;
            /**
             * The estimated tax-inclusive price for this product based on the provided customer group.
             */
            tax_inclusive?: number;
        };
    };
    /**
     * For estimated prices, the minimum/maximum price that will typically apply to this product.
     */
    retail_price_range?: {
        /**
         * The price for a product, including estimates for tax.
         */
        minimum?: {
            /**
             * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
             */
            as_entered?: number;
            /**
             * Whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
             */
            entered_inclusive?: boolean;
            /**
             * The estimated tax-exclusive price for this product based on the provided customer group.
             */
            tax_exclusive?: number;
            /**
             * The estimated tax-inclusive price for this product based on the provided customer group.
             */
            tax_inclusive?: number;
        };
        /**
         * The price for a product, including estimates for tax.
         */
        maximum?: {
            /**
             * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
             */
            as_entered?: number;
            /**
             * Whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
             */
            entered_inclusive?: boolean;
            /**
             * The estimated tax-exclusive price for this product based on the provided customer group.
             */
            tax_exclusive?: number;
            /**
             * The estimated tax-inclusive price for this product based on the provided customer group.
             */
            tax_inclusive?: number;
        };
    };
    bulk_pricing?: Array<BulkPricingTier>;
};

