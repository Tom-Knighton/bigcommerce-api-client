/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type lineItemPhysicalDigital = {
    /**
     * If the item was added automatically by a promotion, such as a coupon or buy one, get one.
     */
    addedByPromotion?: boolean;
    categoryNames?: Array<string>;
    /**
     * The itemʼs comparison price
     */
    comparisonPrice?: number;
    /**
     * The total value of all coupons applied to this item.
     */
    couponAmount?: number;
    /**
     * A list of discounts applied to this item, as an array of AppliedDiscount objects.
     */
    discounts?: Array<{
        /**
         * Discount ID.
         */
        id?: number;
        /**
         * The discounted amount applied within a given context.
         */
        discountedAmount?: number;
    }>;
    /**
     * The total value of all discounts applied to this item (excluding coupon).
     */
    discountAmount?: number;
    /**
     * The itemʼs comparison price multiplied by the quantity.
     */
    extendedComparisonPrice?: number;
    /**
     * The itemʼs list price multiplied by the quantity.
     */
    extendedListPrice?: number;
    /**
     * The itemʼs sale price multiplied by the quantity.
     */
    extendedSalePrice?: number;
    giftWrapping?: {
        name?: string;
        message?: string;
        amount?: number;
    };
    /**
     * The line-item ID.
     */
    id?: string;
    /**
     * A publicly-accessible URL for an image of this item.
     */
    imageUrl?: string;
    isMutable?: boolean;
    /**
     * Whether this item requires shipping to a physical address.
     */
    isShippingRequired?: boolean;
    /**
     * Whether the item is taxable.
     */
    isTaxable?: boolean;
    /**
     * The net item price before discounts and coupons. BigCommerce derives an item's list price from the product default price or, if applicable, the sale price configured in the admin panel.
     */
    listPrice?: number;
    /**
     * The itemʼs product name.
     */
    name?: string;
    options?: Array<{
        /**
         * Option name.
         */
        name?: string;
        /**
         * Option ID.
         */
        nameId?: number;
        /**
         * Option value.
         */
        value?: string;
        /**
         * Option value ID.
         */
        valueId?: string;
    }>;
    /**
     * The item’s original price is the same as the product’s default price.
     */
    originalPrice?: number;
    /**
     * The product is part of a bundle such as a product pick list, then the parentId or the main product ID will populate.
     */
    parentId?: string;
    /**
     * ID of the product.
     */
    productId?: number;
    /**
     * SKU of the variant.
     */
    sku?: string;
    /**
     * Quantity of this item.
     */
    quantity: number;
    /**
     * The itemʼs price after all discounts are applied. The final price before tax calculation.
     */
    salePrice?: number;
    /**
     * the product type - physical or digital
     */
    type?: string;
    /**
     * The product URL.
     */
    url?: string;
    /**
     * ID of the variant.
     */
    variantId?: number;
};

