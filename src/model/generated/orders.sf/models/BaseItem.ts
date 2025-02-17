/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppliedDiscount } from './AppliedDiscount';
export type BaseItem = {
    /**
     * The line-item ID.
     */
    id?: string;
    /**
     * Bundled items will have their parentʼs item ID.
     */
    parentId?: string;
    /**
     * ID of the variant.
     */
    variantId?: number;
    /**
     * ID of the product.
     */
    productId?: number;
    /**
     * SKU of the variant.
     */
    sku?: string;
    /**
     * The itemʼs product name.
     */
    name?: string;
    /**
     * The product URL.
     */
    url?: string;
    /**
     * Quantity of this item.
     */
    quantity: number;
    /**
     * Whether the item is taxable.
     */
    isTaxable?: boolean;
    /**
     * A publicly-accessible URL for an image of this item.
     */
    imageUrl?: string;
    /**
     * A list of discounts applied to this item, as an array of AppliedDiscount objects.
     */
    discounts?: Array<AppliedDiscount>;
    /**
     * The total value of all discounts applied to this item (excluding coupon).
     */
    discountAmount?: number;
    /**
     * The total value of all coupons applied to this item.
     */
    couponAmount?: number;
    /**
     * The net item price before discounts and coupons. BigCommerce derives an item's list price from the product default price or, if applicable, the sale price configured in the admin panel.
     */
    listPrice?: number;
    /**
     * The itemʼs price after all discounts are applied. (The final price before tax calculation.)
     */
    salePrice?: number;
    /**
     * The itemʼs list price multiplied by the quantity.
     */
    extendedListPrice?: number;
    /**
     * The itemʼs sale price multiplied by the quantity.
     */
    extendedSalePrice?: number;
    /**
     * the product type - physical or digital
     */
    type?: string;
};

