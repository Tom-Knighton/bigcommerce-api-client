/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { productImage_Base } from './productImage_Base';
/**
 * The model for a POST or PUT to create  or update applicable Product Image fields.
 */
export type productImage_Post_Put = ({
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
} & productImage_Base);

