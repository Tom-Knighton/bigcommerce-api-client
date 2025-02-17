/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A filter based on the product’s price, shown as a price range on the storefront.
 */
export type EnabledPriceFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    /**
     * The ID of the filter.
     */
    id?: string;
    is_enabled?: boolean;
    type?: EnabledPriceFilter.type;
};
export namespace EnabledPriceFilter {
    export enum type {
        PRICE = 'price',
    }
}

