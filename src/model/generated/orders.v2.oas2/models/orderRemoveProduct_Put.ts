/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type orderRemoveProduct_Put = {
    /**
     * The `id` returned from a request to the [List order products](/docs/rest-management/orders/order-products#list-order-products) or the [Get an order product](/docs/rest-management/orders/order-products#get-an-order-product) endpoint.
     */
    id?: number;
    /**
     * The numeric ID of the product.
     */
    product_id?: number;
    /**
     * The quantity of product being removed.
     */
    quantity?: number;
    /**
     * List of product variant options and modifiers. `product_options` are required when removing a product with variants and not specifying the `variant_id`, or when products have mandatory modifiers.
     */
    product_options?: Array<{
        /**
         * The product’s cost price including tax. (Float, Float-As-String, Integer)
         * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. The value can't be negative.
         */
        cost_price_inc_tax?: string;
        /**
         * The products cost price excluding tax. (Float, Float-As-String, Integer)
         * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only. The value can't be negative.
         */
        readonly price_ex_tax?: string;
    }>;
};

