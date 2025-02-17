/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Match a product with a custom field.
 *
 * You can define a maximum of 10 Product Custom Field Item Matchers within an Item Matcher.
 */
export type ProductCustomFieldMatcher = {
    product_custom_field?: {
        name: string;
        values: Array<string>;
    };
};

