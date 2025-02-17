/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Tax_ZonePOST = {
    /**
     * The human-readable name for this tax zone. The name appears in the store control panel.
     */
    name: string;
    /**
     * Indicates whether a tax zone is enabled. Tax operations are only for enabled zones.
     */
    enabled?: boolean;
    /**
     * Settings that describe how a store displays prices to shoppers matched with this tax zone.
     */
    price_display_settings?: {
        /**
         * Indicates whether to show prices as tax inclusive or tax exclusive to shoppers matched with this tax zone.
         */
        show_inclusive: boolean;
        /**
         * Indicates whether to show both tax inclusive and tax exclusive prices when viewing product detail; for example, on product pages. This view applies to shoppers matched with this tax zone.
         */
        show_both_on_detail_view?: boolean;
        /**
         * Indicates whether to show both tax inclusive and tax exclusive prices when viewing a list of products; for example, on category and brand pages. This view applies to shoppers matched with this tax zone.
         */
        show_both_on_list_view?: boolean;
    };
    /**
     * Settings that describe which shoppers match this tax zone and help determine the most appropriate target for a shopper.
     */
    shopper_target_settings?: {
        /**
         * A tax zone may target shoppers in one or more locations.
         */
        locations: Array<{
            /**
             * Two-letter ISO 3166-1 country code
             */
            country_code?: string;
            /**
             * Three-letter ISO 3166-2 subdivision code
             */
            subdivision_codes?: Array<string>;
            postal_codes?: Array<string>;
        }>;
        /**
         * One or more customer groups that a tax zone targets. Empty array if zone applies to all customers.
         */
        customer_groups?: Array<number>;
    };
};

