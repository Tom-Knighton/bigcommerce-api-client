/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { productImage_Base } from './productImage_Base';
/**
 * Common ProductImage properties.
 */
export type productImage_Full = (productImage_Base & {
    /**
     * The unique numeric ID of the image; increments sequentially.
     *
     */
    id?: number;
    /**
     * The unique numeric identifier for the product with which the image is associated.
     *
     */
    product_id?: number;
    /**
     * The URL for an image displayed on the storefront when the conditions are applied. Limit of 8MB per file.
     *
     * Cannot be used with `image_file`.
     *
     */
    image_url?: string;
    /**
     * The zoom URL for this image. By default, this is used as the zoom image on product pages when zoom images are enabled. You should provide an image smaller than 1280x1280; otherwise, the API returns a resized image.
     *
     */
    readonly url_zoom?: string;
    /**
     * The standard URL for this image. By default, this is used for product-page images.
     *
     */
    readonly url_standard?: string;
    /**
     * The thumbnail URL for this image. By default, this is the image size used on the category page and in side panels.
     *
     */
    readonly url_thumbnail?: string;
    /**
     * The tiny URL for this image. By default, this is the image size used for thumbnails beneath the product image on a product page.
     *
     */
    readonly url_tiny?: string;
    /**
     * The date on which the product image was modified.
     *
     */
    date_modified?: Date;
});

