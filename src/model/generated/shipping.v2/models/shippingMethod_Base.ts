/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingMethodType } from './ShippingMethodType';
export type shippingMethod_Base = {
    /**
     * Display name for shipping method.
     */
    name?: string;
    type?: ShippingMethodType;
    /**
     * Depends on the shipping method type. See the [supported settings object](#settings-objects).
     */
    settings?: {
        /**
         * Flat rate per order.
         */
        rate?: number;
    };
    /**
     * Whether or not this shipping zone method is enabled.
     */
    enabled?: boolean;
    handling_fees?: ({
        /**
         * Flat-rate handling fee applied to shipping cost.
         */
        fixed_surcharge?: number;
    } | {
        /**
         * Percentage handling fee applied to shipping cost.
         */
        percentage_surcharge?: number;
    });
    /**
     * Whether or not this shipping method is a fallback method used when advanced shipping rules are unavailable.
     */
    is_fallback?: boolean;
    /**
     * List of channels associated to a method. When creating a new method, all available channels are associated by default. (Optional)
     */
    channel_ids?: Array<number>;
};

