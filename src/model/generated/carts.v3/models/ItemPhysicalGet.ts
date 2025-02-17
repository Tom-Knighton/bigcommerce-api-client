/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemPhysicalGet = {
    /**
     * The line-item ID.
     */
    id?: string;
    /**
     * Bundled items will have the ID of their parent item.
     */
    parent_id?: string;
    /**
     * The ID of the variant. Required in the /PUT or /POST request if the product has variants.
     */
    variant_id: number;
    /**
     * The ID of the product. Required in a /POST request.
     */
    product_id: number;
    /**
     * SKU of the variant.
     */
    sku?: string;
    /**
     * The item’s product name.
     */
    name?: string;
    /**
     * The product URL.
     */
    url?: string;
    /**
     * Quantity of this item in the cart.
     */
    quantity: number;
    /**
     * Boolean value that specifies whether the item is taxable.
     */
    taxable?: boolean;
    /**
     * Image of the product or variant.
     */
    image_url?: string;
    discounts?: Array<{
        id?: (string | number);
        /**
         * The discounted amount.
         */
        discounted_amount?: number;
    }>;
    coupons?: number;
    /**
     * The total value of all discounts applied to this item. This includes coupons and cart-level discounts.
     */
    discount_amount?: number;
    /**
     * The total value of all coupons applied to this item.
     */
    coupon_amount?: number;
    /**
     * An item’s original price is the same as the product default price in the admin panel.
     */
    original_price?: number;
    /**
     * The net item price before discounts and coupons are applied. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel. To enable v3 promotions at the product level, you must update the [promotion](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#promotion) settings in the control panel.
     */
    list_price?: number;
    /**
     * Price of the item after all discounts are applied. (The final price before tax calculation.)
     */
    sale_price?: number;
    /**
     * List price of the item multiplied by the quantity.
     */
    extended_list_price?: number;
    /**
     * Sale price of the item multiplied by the quantity.
     */
    extended_sale_price?: number;
    /**
     * Whether or not a physical product requires shipping.
     */
    is_require_shipping?: boolean;
    /**
     * Whether or not you can change or remove the item from the cart. Items that are immutable include those added automatically by promotions.
     */
    is_mutable?: boolean;
    /**
     * Whether or not a promotion added an additional item.
     */
    added_by_promotion?: boolean;
    /**
     * The gift wrapping details for this item.
     */
    gift_wrapping?: {
        name?: string;
        message?: string;
        amount?: number;
    };
};

