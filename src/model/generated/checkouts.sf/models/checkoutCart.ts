/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartCoupon } from './CartCoupon';
import type { lineItemPhysicalDigital } from './lineItemPhysicalDigital';
/**
 * A cart contains a collection of items, prices, discounts, etc. It does not contain customer-related data.
 */
export type checkoutCart = {
    /**
     * Cost of cart’s contents, before applying discounts.
     */
    baseAmount?: number;
    /**
     * Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes, where applicable.
     */
    cartAmount?: number;
    /**
     * Time when the cart was created.
     */
    createdTime?: string;
    coupons?: Array<CartCoupon>;
    /**
     * The currency in which prices are displayed; the store default currency.
     */
    currency?: {
        /**
         * ISO-4217 currency code. (See: https://www.iso.org/iso-4217-currency-codes.html.)
         */
        code?: string;
        /**
         * The number of decimal places for the currency. For example, the USD currency has two decimal places.
         */
        decimalPlaces?: number;
        /**
         * The currency name.
         */
        name?: string;
        /**
         * The currency symbol.
         */
        symbol?: string;
    };
    /**
     * ID of the customer to which the cart belongs.
     */
    customerId?: number;
    /**
     * Order-based discounted amount only - Excludes coupon discounts and product-based discounts.
     */
    discountAmount?: number;
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
     * The cartʼs email. This is the same email that is used in the billing address.
     */
    email?: string;
    /**
     * Cart ID, provided after creating a cart with a POST.
     */
    id?: string;
    /**
     * Boolean representing whether tax information is included.
     */
    isTaxIncluded?: boolean;
    lineItems?: {
        customItems?: Array<{
            /**
             * ID of the custom item.
             */
            id?: string;
            /**
             * The net item price before discounts and coupons. BigCommerce derives an item's list price from the product default price or, if applicable, the sale price configured in the admin panel.
             */
            listPrice?: string;
            /**
             * Item name.
             */
            name?: string;
            quantity?: string;
            /**
             * Custom item SKU.
             */
            sku?: string;
        }>;
        digitalItems: Array<lineItemPhysicalDigital>;
        giftCertificates?: Array<{
            /**
             * Value must be between $1.00 and $1,000.00.
             */
            amount: number;
            /**
             * Gift certificate identifier
             */
            id?: string;
            /**
             * Limited to 200 characters.
             */
            message?: string;
            /**
             * The name of the purchased gift certificate; for example, `$20 Gift Certificate`.
             */
            name?: string;
            recipient: {
                name?: string;
                email?: string;
            };
            sender: {
                name?: string;
                email?: string;
            };
            taxable?: boolean;
            /**
             * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
             */
            theme: string;
            /**
             * Explicitly specifying the gift certificate type.
             */
            type?: string;
        }>;
        physicalItems: Array<lineItemPhysicalDigital>;
    };
    /**
     * Shopper's locale.
     */
    locale?: string;
    /**
     * Time when the cart was last updated.
     */
    updatedTime?: string;
    /**
     * Cart version.
     */
    version?: number;
};

