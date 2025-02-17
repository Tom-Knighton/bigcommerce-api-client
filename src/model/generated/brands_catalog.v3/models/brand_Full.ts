/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customUrl_Full } from './customUrl_Full';
/**
 * Common Brand properties.
 */
export type brand_Full = {
    /**
     * Unique ID of the brand.
     */
    readonly id?: number;
    /**
     * The name of the brand. Must be unique.
     * Required in POST.
     */
    name: string;
    /**
     * The title shown in the browser while viewing the brand.
     *
     */
    page_title?: string;
    /**
     * An array of meta keywords to include in the HTML.
     *
     */
    meta_keywords?: Array<string>;
    /**
     * A meta description to include.
     *
     */
    meta_description?: string;
    /**
     * A comma-separated list of keywords that can be used to locate this brand.
     *
     */
    search_keywords?: string;
    /**
     * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/brands/{brandId}/image`, or by providing a publicly accessible URL in this field.
     *
     */
    image_url?: string;
    custom_url?: customUrl_Full;
};

