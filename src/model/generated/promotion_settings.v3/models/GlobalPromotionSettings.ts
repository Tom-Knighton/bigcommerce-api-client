/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GlobalPromotionSettings = {
    /**
     * - When the property is set to "true", promotions will apply for products with custom pricing.
     * - When the property is set to "false", promotions will not apply for products with custom pricing.
     * - Note: This field can only be edited for Enterprise Accounts.
     */
    promotions_apply_on_products_with_custom_product_price: boolean;
    /**
     * - When the property is set to "true", promotions will be triggered by zero price products.
     * - When the property is set to "false", promotions will not be triggered by zero price products.
     * - Note: This field can only be edited for Enterprise Accounts.
     */
    promotions_triggered_by_products_with_zero_product_price: boolean;
    /**
     * Specifies the number of coupons allowed at checkout on a single order.
     * - Note: This field can only be edited for Enterprise Accounts.
     */
    number_of_coupons_allowed_at_checkout: number;
    /**
     * - When the property is set to "true", promotions in a cart are calculated independently, each applied to the original price of the included products.
     * - When the property is set to "false", promotions in a cart are calculated cumulatively, applied to the order sub-total based on your promotion order.
     */
    promotions_applied_on_original_product_price: boolean;
};

