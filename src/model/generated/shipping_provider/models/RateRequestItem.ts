/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A cart item along with its shipping-specific attributes.
 */
export type RateRequestItem = {
    /**
     * The variant SKU.
     */
    sku?: string;
    variant_id?: string;
    product_id?: string;
    name?: string;
    /**
     * Value object for a length measurement.
     */
    length?: {
        units: RateRequestItem.units;
        value: number;
    };
    /**
     * Value object for a width measurement.
     */
    width?: {
        units: RateRequestItem.units;
        value: number;
    };
    /**
     * Value object for a height measurement.
     */
    height?: {
        units: RateRequestItem.units;
        value: number;
    };
    /**
     * Value object for a weight measurement.
     */
    weight?: {
        units: RateRequestItem.units;
        value: number;
    };
    /**
     * Value object for a money amount.
     */
    discounted_price?: {
        currency: string;
        amount: number;
    };
    /**
     * Value object for a money amount.
     */
    declared_value?: {
        currency: string;
        amount: number;
    };
    quantity?: number;
    /**
     * A list of arbitrary properties stored as part of the product or product variant meta fields. These consist of any public fields specific to the carrier integration.
     */
    attributes?: Array<{
        /**
         * The key associated with the product or product variant meta field.
         */
        key?: string;
        /**
         * The value associated with the product or product variant meta field.
         */
        value?: string;
        /**
         * The namespace associated with metafields for [products](/docs/rest-catalog/products/metafields) and [product variants](/docs/rest-catalog/product-variants/metafields). Save the metafield namespace using the format `shipping_carrier_{yourCarrierId}`; otherwise, it will not be recognized as a valid attribute.
         */
        namespace?: string;
        /**
         * Resource type associated with the product or product variant meta field. Currently, the only values available are 'product' or 'variant'.
         */
        resource_type?: 'product' | 'variant';
        /**
         * The resource ID of the product or product variant meta field.
         */
        resource_id?: string;
        /**
         * Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
         */
        attribute_type?: 'metafield';
    }>;
};
export namespace RateRequestItem {
    export enum units {
        CM = 'cm',
        IN = 'in',
    }
}

