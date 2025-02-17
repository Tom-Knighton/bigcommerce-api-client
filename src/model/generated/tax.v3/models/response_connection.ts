/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type response_connection = {
    data?: {
        /**
         * Identifies a unique account on the external tax provider infrastructure. May be used to reconcile the two platforms.
         */
        username?: string;
        /**
         * Describes whether the stored credentials are considered complete and configured, ready to be used for Tax Provider API requests.
         *
         * Merchants may enable any **configured** tax provider for storefront tax quotation.
         */
        configured?: boolean;
        /**
         * The countries and subdivisions in which this tax provider connection is active.
         */
        target?: {
            /**
             * The list of country codes where the tax provider connection is active. ISO 3166-1 alpha-2.
             */
            country_codes?: Array<string>;
            /**
             * The list of subdivision codes where the tax provider connection is active. ISO 3166-2.
             */
            subdivision_codes?: Array<string>;
        };
    };
};

