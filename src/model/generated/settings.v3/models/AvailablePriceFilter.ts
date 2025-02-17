/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AvailablePriceFilter = {
    id?: string;
    name?: string;
    price_range_max?: number;
    price_range_min?: number;
    type?: AvailablePriceFilter.type;
};
export namespace AvailablePriceFilter {
    export enum type {
        PRICE = 'price',
    }
}

