/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Common ProductImage properties.
 */
export type productImage_Base = {
    /**
     * Flag for identifying whether the image is used as the productʼs thumbnail.
     *
     */
    is_thumbnail?: boolean;
    /**
     * The order in which the image will be displayed on the product page. Higher integers give the image a lower priority. When updating, if the image is given a lower priority, all images with a `sort_order` the same as or greater than the imageʼs new `sort_order` value will have their `sort_order`s reordered.
     *
     */
    sort_order?: number;
    /**
     * The description for the image.
     *
     */
    description?: string;
    /**
     * The date on which the product image was modified.
     *
     */
    date_modified?: Date;
};

