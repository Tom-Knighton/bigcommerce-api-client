/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkPricingTier } from './BulkPricingTier';
/**
 * Common Price Record properties.
 */
export type PriceRecordBase = {
    /**
     * The list price for the variant mapped in a Price List. Overrides any existing or Catalog list price for the variant/product. If empty, the sale price will be treated as not being set on this variant.
     */
    price?: number;
    /**
     * The sale price for the variant mapped in a Price List. Overrides any existing or Catalog sale price for the variant/product. If empty, the sale price will be treated as not being set on this variant.
     */
    sale_price?: number;
    /**
     * The retail price for the variant mapped in a Price List. Overrides any existing or Catalog retail price for the variant/product.  If empty, the retail price will be treated as not being set on this variant.
     */
    retail_price?: number;
    /**
     * The MAP (Minimum Advertised Price) for the variant mapped in a Price List. Overrides any existing or Catalog MAP price for the variant/product. If empty, the `map_ price` will be treated as not being set on this variant.
     */
    map_price?: number;
    bulk_pricing_tiers?: Array<BulkPricingTier>;
};

