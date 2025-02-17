/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address_Full } from './address_Full';
import type { consignmentAvailableShippingOptions } from './consignmentAvailableShippingOptions';
import type { PickupOption } from './PickupOption';
/**
 * This allows us to have multiple shipping addresses. Where there is only one shipping address, this array will contain only one value, with all the items.
 */
export type consignment_Full = {
    address?: address_Full;
    /**
     * This is available only when "include=consignments.availableShippingOptions" is present in the URL.
     */
    availableShippingOptions?: Array<consignmentAvailableShippingOptions>;
    /**
     * List of consignment discounts applied through coupons.
     */
    couponDiscounts?: Array<{
        amount?: number;
        /**
         * Coupon code that applied this discount.
         */
        code?: string;
    }>;
    /**
     * List of consignment discounts applied through cart level discounts.
     */
    discounts?: Array<{
        /**
         * Discount rule ID that applied this discount.
         */
        id?: string;
    }>;
    /**
     * The handling cost of shipping for this consignment.
     */
    handlingCost?: number;
    id?: string;
    selectedPickupOption?: PickupOption;
    selectedShippingOption?: {
        /**
         * Read only.
         */
        readonly description?: string;
        id?: string;
        /**
         * Specifies the type of shipping option; for example, flat rate, UPS, etc.
         */
        type?: string;
        imageUrl?: string;
        cost?: number;
        /**
         * An estimate of the arrival time.
         */
        transitTime?: string;
        /**
         * Read only. Field used for Shipping Provider API.
         */
        readonly additionalDescription?: string;
    };
    /**
     * Use the `address` field instead.
     * @deprecated
     */
    shippingAddress?: any;
    /**
     * The shipping cost for this consignment.
     */
    shippingCost?: number;
    lineItemIds?: Array<string>;
};

