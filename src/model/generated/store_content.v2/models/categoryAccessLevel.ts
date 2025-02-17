/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type categoryAccessLevel = {
    /**
     * + `all` - Customers can access all categories
     * + `specific`  - Customers can access a specific list of categories
     * + `none` - Customers are prevented from viewing any of the categories in this group.
     */
    type?: categoryAccessLevel.type;
    /**
     * A comma-separated list of category IDs. Should be supplied only if `type` is `specific`.
     */
    categories?: Array<number>;
};
export namespace categoryAccessLevel {
    /**
     * + `all` - Customers can access all categories
     * + `specific`  - Customers can access a specific list of categories
     * + `none` - Customers are prevented from viewing any of the categories in this group.
     */
    export enum type {
        ALL = 'all',
        SPECIFIC = 'specific',
        NONE = 'none',
    }
}

