/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CheckoutsSettingsRequest = {
    /**
     * Custom checkout script URL to replace our default checkout. To reset a store to optimized one-page checkout, pass an empty string for `custom_checkout_script_url` and `custom_order_confirmation_script_url`.
     */
    custom_checkout_script_url?: string;
    /**
     * When order_confirmation_use_custom_checkout_script=true, the default custom_order_confirmation_script_url defaults to an empty string.
     */
    order_confirmation_use_custom_checkout_script?: boolean;
    /**
     * Custom order confirmation script URL to replace the default order confirmation. To reset a store to optimized one-page checkout, pass an empty string for `custom_checkout_script_url` and `custom_order_confirmation_script_url`.
     */
    custom_order_confirmation_script_url?: string;
    /**
     * Boolean value that specifies whether this checkout supports Optimized One-Page Checkout settings.
     */
    custom_checkout_supports_uco_settings?: boolean;
    /**
     * The Subresource Integrity (SRI) hash for the custom checkout script URL.
     */
    custom_checkout_sri_hash?: string;
    /**
     * The Subresource Integrity (SRI) hash for the custom order confirmation script URL.
     */
    custom_order_confirmation_sri_hash?: string;
};

