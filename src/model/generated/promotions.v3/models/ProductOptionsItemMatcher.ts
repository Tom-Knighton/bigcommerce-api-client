/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Match a product by product options.
 *
 * Currently the only supported type is `string_match` which performs a string comparison on the name and values.
 */
export type ProductOptionsItemMatcher = {
    product_option?: {
        type: string;
        name: string;
        values: Array<string>;
    };
};

