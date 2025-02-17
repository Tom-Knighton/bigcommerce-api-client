/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CartCoupon = {
    /**
     * The coupon ID.
     */
    id?: number;
    /**
     * the coupon code
     */
    code: string;
    /**
     * The coupon name displayed on the storefront.
     */
    displayName?: string;
    /**
     * Key name to identify the type of coupon.
     */
    couponType?: CartCoupon.couponType;
    /**
     * The discounted amount applied within a given context.
     */
    discountedAmount?: number;
};
export namespace CartCoupon {
    /**
     * Key name to identify the type of coupon.
     */
    export enum couponType {
        PER_ITEM_DISCOUNT = 'per_item_discount',
        PERCENTAGE_DISCOUNT = 'percentage_discount',
        PER_TOTAL_DISCOUNT = 'per_total_discount',
        SHIPPING_DISCOUNT = 'shipping_discount',
        FREE_SHIPPING = 'free_shipping',
        PROMOTION = 'promotion',
    }
}

