/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CategoryBase = {
    /**
     * The product description, which can include HTML formatting.
     *
     */
    description?: string;
    /**
     * Number of views the category has on the storefront.
     *
     */
    views?: number;
    /**
     * Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be.
     *
     */
    sort_order?: number;
    /**
     * Custom title for the category page. If not defined, the category name will be used as the meta title.
     *
     */
    page_title?: string;
    /**
     * Custom meta keywords for the category page. If not defined, the storeʼs default keywords will be used. Must post as an array like: ["awesome","sauce"].
     *
     */
    meta_keywords?: Array<string>;
    /**
     * Custom meta description for the category page. If not defined, the storeʼs default meta description will be used.
     *
     */
    meta_description?: string;
    /**
     * A valid layout file. (Please refer to [this article](https://support.bigcommerce.com/articles/Public/Creating-Custom-Template-Files/) on creating category files.) This field is writable only for stores with a Blueprint theme applied.
     *
     */
    layout_file?: string;
    /**
     * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/categories/{categoryId}/image`, or by providing a publicly accessible URL in this field. Must be either a full-qualified URL or an empty string.
     *
     */
    image_url?: string;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view.
     *
     */
    is_visible?: boolean;
    /**
     * A comma-separated list of keywords that can be used to locate the category when searching the store.
     *
     */
    search_keywords?: string;
    /**
     * Determines how the products are sorted on category page load.
     *
     */
    default_product_sort?: CategoryBase.default_product_sort;
};
export namespace CategoryBase {
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

