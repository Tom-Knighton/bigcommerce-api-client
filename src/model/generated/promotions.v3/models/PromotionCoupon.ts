/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromotionBase } from './PromotionBase';
/**
 * **Coupon Promotion** A shopper must manually apply a *coupon promotion* to their cart.
 */
export type PromotionCoupon = (PromotionBase & {
    /**
     * This field only has effect when the `redemption_type` is `COUPON` and `can_be_used_with_other_promotions` is `false`:
     * - When the property is set to "true", the coupon will override the applied automatic promotions if it provides a greater discount.
     * - When the property is set to "false", the coupon will not be applied if automatic promotions are already applied.
     *
     * Trying to set the value of this field to "true" when the `redemption_type` is not `COUPON`, or when `can_be_used_with_other_promotions` is `true` will yield a 422 error response.
     */
    coupon_overrides_automatic_when_offering_higher_discounts?: boolean;
});

