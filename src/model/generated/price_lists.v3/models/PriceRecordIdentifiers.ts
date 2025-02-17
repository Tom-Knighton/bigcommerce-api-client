/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The `Price Record` object used in batch create or update.
 */
export type PriceRecordIdentifiers = {
    /**
     * The Price List with which this price record is associated.
     */
    price_list_id?: number;
    /**
     * The variant with which this price record is associated. Either `variant_id` or `sku` is required.
     */
    variant_id?: number;
    /**
     * The variant with which this price record is associated. Either `sku` or `variant_id` is required.
     */
    sku?: string;
    /**
     * The 3-letter currency code with which this price set is associated.
     */
    currency?: string;
};

