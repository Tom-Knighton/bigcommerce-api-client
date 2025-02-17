/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { productVariant_Base } from './productVariant_Base';
import type { productVariantOptionValue_Full } from './productVariantOptionValue_Full';
export type productVariant_Full = (productVariant_Base & {
    /**
     * Product ID
     */
    product_id?: number;
    /**
     * Variant ID
     */
    id?: number;
    /**
     * A unique user-defined alphanumeric product code/stock keeping unit (SKU). The SKU is always unique regardless of the letter case for both products and variants.
     */
    sku?: string;
    sku_id?: number;
    /**
     * Array of option and option values IDs that make up this variant. Will be empty if the variant is the productʼs base variant.
     */
    option_values?: Array<productVariantOptionValue_Full>;
    /**
     * The price of the variant as seen on the storefront. This price takes into account `sale_price` and any price adjustment rules that are applicable to this variant.
     *
     */
    calculated_price?: number;
    calculated_weight?: number;
} & {
    /**
     * Product ID
     */
    product_id: number;
    /**
     * Variant ID
     */
    id: number;
    /**
     * A unique user-defined alphanumeric product code/stock keeping unit (SKU). The SKU is always unique regardless of the letter case for both products and variants.
     */
    sku: string;
});

