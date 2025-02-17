/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PricingRequest = {
    /**
     * The channel ID that pricing evaluates within. The default BigCommerce storefront is channel 1.
     */
    channel_id?: number;
    /**
     * The currency of prices to be returned for this request.
     */
    currency_code?: string;
    /**
     * The customer group relevant for any customer group pricing, tax values, etc.
     */
    customer_group_id?: number;
    /**
     * The items for which to fetch prices.
     */
    items?: Array<{
        /**
         * The (required) product ID of the item.
         */
        product_id?: number;
        /**
         * The (optional) variant ID of the item.
         */
        variant_id?: number;
        /**
         * The (optional) option configuration of the product. May be "partially" configured for estimates.
         */
        options?: Array<{
            /**
             * The ID of the variant option or modifier option being configured for this product.
             */
            option_id?: number;
            /**
             * The ID of the value matching the option being configured.
             *
             * **Note:** This must be the ID, not the value.
             *
             */
            value_id?: number;
        }>;
    }>;
};

