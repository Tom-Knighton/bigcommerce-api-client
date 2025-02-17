/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * You can use the original details of the request to identify the exact product variant and fetch prices.
 */
export type ReferenceRequest = {
    /**
     * The (required) product ID of the item.
     */
    product_id?: number;
    /**
     * The (optional) variant ID of the item.
     */
    variant_id?: number;
    /**
     * The optional product option configuration for this generated price.
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
};

