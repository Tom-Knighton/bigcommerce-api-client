/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CheckoutCoupon = {
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
     * |Type `int`|Type Name|
     * |-|-|
     * |`0`|`per_item_discount`|
     * |`1`|`percentage_discount`|
     * |`2`|`per_total_discount`|
     * |`3`|`shipping_discount`|
     * |`4`|`free_shipping`|
     * |`5`|`promotion`|
     */
    couponType?: number;
    /**
     * The discounted amount applied within a given context.
     */
    discountedAmount?: number;
};

