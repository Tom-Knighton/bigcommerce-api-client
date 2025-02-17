/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Timezone } from './Timezone';
export type StoreInformation = {
    /**
     * The store hash, a unique store identifier.
     */
    id?: string;
    /**
     * The UUID of the account to which the store belongs.
     */
    account_uuid?: string;
    /**
     * Primary domain name.
     */
    domain?: string;
    /**
     * Store’s current HTTPS URL.
     */
    secure_url?: string;
    /**
     * The secure hostname of the control panel.
     */
    control_panel_base_url?: string;
    /**
     * The status of the store.
     */
    status?: string;
    /**
     * Store’s name.
     */
    name?: string;
    /**
     * Primary contact’s first name (as defined during the store sign-up process).
     */
    first_name?: string;
    /**
     * Primary contact’s last name (as defined during the store sign-up process).
     */
    last_name?: string;
    /**
     * Display address.
     */
    address?: string;
    /**
     * Country where the store is located (as defined during the store sign-up process).
     */
    country?: string;
    /**
     * Two-letter ISO 3166-1 country code
     */
    country_code?: string;
    /**
     * The infrastructure region where the store is located. Use this to determine where to place supporting infrastructure for minimum latency to the store. Compare against GCP regions on https://cloud.google.com/compute/docs/regions-zones
     */
    infrastructure_region?: string;
    /**
     * Display phone number.
     */
    phone?: string;
    /**
     * Email address of the store administrator/owner.
     */
    admin_email?: string;
    /**
     * Email address for orders and fulfillment.
     */
    order_email?: string;
    /**
     * The URL of the favicon image associated with the website. This should be a valid URL pointing to an `.ico` or other supported icon format file.
     */
    favicon_url?: string;
    timezone?: Timezone;
    /**
     * Default language code.
     */
    language?: string;
    /**
     * Default currency code.
     */
    currency?: string;
    /**
     * Default symbol for values in the currency.
     */
    currency_symbol?: string;
    /**
     * Default decimal separator for values in the currency.
     */
    decimal_separator?: string;
    /**
     * Default thousands separator for values in the currency.
     */
    thousands_separator?: string;
    /**
     * Default decimal places for values in the currency.
     */
    decimal_places?: number;
    /**
     * Default position of the currency symbol (left or right).
     */
    currency_symbol_location?: string;
    /**
     * Default weight units (metric or imperial).
     */
    weight_units?: string;
    /**
     * Default dimension units (metric or imperial).
     */
    dimension_units?: string;
    /**
     * The number of decimal places.
     */
    dimension_decimal_places?: number;
    /**
     * The symbol that separates the whole numbers from the decimal points.
     */
    dimension_decimal_token?: string;
    /**
     * The symbol used to denote thousands.
     */
    dimension_thousands_token?: string;
    /**
     * Name of the BigCommerce plan to which this store is subscribed.
     */
    plan_name?: string;
    /**
     * Level of the BigCommerce plan to which this store is subscribed.
     */
    plan_level?: string;
    /**
     * Whether the payment plan associated with the store is still in the trial phase.
     */
    plan_is_trial?: boolean;
    /**
     * Industry, or vertical category, in which the business operates. (As selected from drop-down list during the store sign-up process.)
     */
    industry?: string;
    /**
     * Either an object describing the logo image, or an empty array.
     */
    logo?: {
        url?: string;
    };
    /**
     * A Boolean value that indicates whether or not prices are entered with tax.
     */
    is_price_entered_with_tax?: boolean;
    /**
     * The numeric ID of the store. This is a different unique ID than the store hash.
     */
    store_id?: number;
    /**
     * The ID of the default channel. The ID of the first hosted storefront created on the store is `1`.
     */
    default_channel_id?: number;
    /**
     * The BigCommerce ID of the website associated with the default storefront.
     */
    default_site_id?: number;
    active_comparison_modules?: Array<any>;
    /**
     * Describes some aspects of the storeʼs tech stack and configuration settings that affect the features available for the store to use.
     */
    features?: {
        /**
         * Indicates whether a store is using a Stencil theme.
         */
        stencil_enabled?: boolean;
        /**
         * Indicates whether there is site-wide https.
         */
        sitewidehttps_enabled?: boolean;
        /**
         * The ID of the Facebook by Meta catalog. If there is none, this endpoint returns an empty string.
         */
        facebook_catalog_id?: string;
        /**
         * What type of checkout is enabled on the store. Possible values returned are optimized, single (one page), single_customizable (one page for developers), klarna.
         */
        checkout_type?: StoreInformation.checkout_type;
        wishlists_enabled?: boolean;
        /**
         * Describes whether you can use the [GraphQL Storefront API](/graphql-storefront/reference) on this store.
         */
        graphql_storefront_api_enabled?: boolean;
        /**
         * Indicates whether the store is tracking the values of the cookie and privacy consent settings that the shopper consented to and configured.
         */
        shopper_consent_tracking_enabled?: boolean;
        /**
         * Indicates whether the storeʼs plan provides the possibility of using more than one storefront or sales channel. Internally, this value indicates whether the store has the MSF feature flag enabled.
         */
        multi_storefront_enabled?: boolean;
        storefront_limits?: {
            /**
             * Describes the number of storefronts active on the store. If `multi_storefront_enabled` is `false`, this value is `1`.
             */
            active?: number;
            /**
             * Describes the total number of storefronts associated with the store, including both active and inactive storefronts. The default varies based on store plan.
             */
            total_including_inactive?: number;
        };
    };
};
export namespace StoreInformation {
    /**
     * What type of checkout is enabled on the store. Possible values returned are optimized, single (one page), single_customizable (one page for developers), klarna.
     */
    export enum checkout_type {
        OPTIMIZED = 'optimized',
        SINGLE = 'single',
        SINGLE_CUSTOMIZABLE = 'single_customizable',
        KLARNA = 'klarna',
    }
}

