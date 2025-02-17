/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Miscellaneous filters which appear as a group.
 */
export type EnabledMiscFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    /**
     * The ID of the filter.
     */
    id?: string;
    is_enabled?: boolean;
    show_free_shipping_filter?: boolean;
    show_in_stock_filter?: boolean;
    show_is_featured_filter?: boolean;
    show_product_count?: boolean;
    type?: EnabledMiscFilter.type;
};
export namespace EnabledMiscFilter {
    export enum type {
        OTHER = 'other',
    }
}

