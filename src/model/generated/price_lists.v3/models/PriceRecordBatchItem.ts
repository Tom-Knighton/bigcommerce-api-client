/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PriceRecordBase } from './PriceRecordBase';
export type PriceRecordBatchItem = ({
    /**
     * The price list ID the price record is associated with.
     */
    price_list_id?: number;
    /**
     * The price list with which the price record is associated. Either `variant_id` or `sku` is required.
     */
    variant_id?: number;
    /**
     * The SKU for the variant with which this price record is associated. Either `sku` or `variant_id` is required.
     */
    sku?: string;
    /**
     * The 3-letter country code with which this price record is associated.
     */
    currency?: string;
} & PriceRecordBase);

