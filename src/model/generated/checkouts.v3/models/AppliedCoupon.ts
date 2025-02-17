/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AppliedCoupon = {
    /**
     * The coupon code.
     */
    code: string;
    /**
     * The coupon ID.
     */
    id?: number;
    /**
     * Key name to identify the type of coupon.
     */
    coupon_type?: string;
    /**
     * The display name of the coupon.
     */
    display_name?: string;
    /**
     * The discounted amount applied within a given context.
     */
    discounted_amount?: number;
};

