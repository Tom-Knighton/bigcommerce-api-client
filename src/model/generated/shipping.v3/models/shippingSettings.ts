/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type shippingSettings = {
    checkout?: {
        /**
         * The approach for displaying the list of countries at checkout.
         */
        country_list_strategy?: shippingSettings.country_list_strategy;
        /**
         * Message shown to the shopper during checkout when their order does not meet the merchant's shipping criteria.
         */
        out_of_zone_delivery_message?: string;
    };
};
export namespace shippingSettings {
    /**
     * The approach for displaying the list of countries at checkout.
     */
    export enum country_list_strategy {
        DISPLAY_ALL_COUNTRIES = 'DISPLAY_ALL_COUNTRIES',
        DISPLAY_ONLY_SHIPPABLE_COUNTRIES = 'DISPLAY_ONLY_SHIPPABLE_COUNTRIES',
    }
}

