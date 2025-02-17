/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomerChannelSettingsObject = {
    /**
     * Controls the privacy settings.
     */
    privacy_settings?: {
        /**
         * Determines if a customer requires consent for tracking privacy.
         */
        ask_shopper_for_tracking_consent?: boolean;
        /**
         * The URL for a websiteʼs privacy policy.
         */
        policy_url?: string;
    };
    /**
     * The settings for a collection of customers.
     */
    customer_group_settings?: {
        /**
         * The ID for a guest customer group.
         */
        guest_customer_group_id?: number;
        /**
         * The ID for a default customer group.
         */
        default_customer_group_id?: number;
    };
    /**
     * * Determines if a channel allows global customer to login
     * * Determines if customers created on this channel will get global access/login
     */
    allow_global_logins?: boolean;
};

