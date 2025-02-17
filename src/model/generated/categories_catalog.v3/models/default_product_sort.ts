/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type default_product_sort = {
    /**
     * Determines how the products are sorted on category page load.
     *
     */
    default_product_sort?: default_product_sort.default_product_sort;
};
export namespace default_product_sort {
    /**
     * Determines how the products are sorted on category page load.
     *
     */
    export enum default_product_sort {
        USE_STORE_SETTINGS = 'use_store_settings',
        FEATURED = 'featured',
        NEWEST = 'newest',
        BEST_SELLING = 'best_selling',
        ALPHA_ASC = 'alpha_asc',
        ALPHA_DESC = 'alpha_desc',
        AVG_CUSTOMER_REVIEW = 'avg_customer_review',
        PRICE_ASC = 'price_asc',
        PRICE_DESC = 'price_desc',
    }
}

