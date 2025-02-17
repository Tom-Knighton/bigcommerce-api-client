/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A `CouponCode` object encapsulates attributes of a coupon code.
 */
export type CouponCode = {
    /**
     * An auto-generated unique identifier for the coupon code.
     */
    id?: number;
    /**
     * A unique code that can be used to manually apply a discount. Only letters, numbers, white spaces, underscores and hyphens are allowed.
     */
    code: string;
    /**
     * A read-only count of the times this coupon code has been used.
     */
    readonly current_uses?: number;
    /**
     * The maximum number of times you can use this coupon code. The default value is 0, which represents unlimited uses.
     */
    max_uses?: number;
    /**
     * The maximum number of times a specific customer can use this coupon code. The default value is 0, which represents unlimited uses.
     */
    max_uses_per_customer?: number;
    /**
     * The date and time when this coupon code was created.
     */
    created?: string;
};

