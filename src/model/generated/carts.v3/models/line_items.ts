/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * * `redirect_urls`: Create a direct link to a cart. This can be used for the /POST request for carts.
 * * `line_items.physical_items.options`: The cart returns an abbreviated result. Use this to return physical items product options. To return the extended cart object, use in a /POST request.
 * * `line_items.digital_items.options`: The cart returns an abbreviated result. Use this to return digital items product options. To return the extended cart object, use in a /POST request.
 * * `promotions.banners`: Returns a list of eligible banners.
 */
export type line_items = Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options'>;
