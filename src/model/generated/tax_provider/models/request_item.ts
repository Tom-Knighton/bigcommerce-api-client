/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { request_item_tax_property } from './request_item_tax_property';
import type { TaxClass } from './TaxClass';
/**
 * An **ItemRequest** represents required information relating to completing tax calculations for a specific line item.
 */
export type request_item = {
    /**
     * A unique identifier for this item used to map responses back to the corresponding item on the order.
     */
    id: string;
    /**
     * The UPC or SKU of the item. The UPC is used when both UPC and SKU values are available on the item. Empty string if both UPC and SKU are not available.
     */
    item_code?: string;
    /**
     * The SKU of the item. Empty string if SKU is not available.
     */
    item_reference?: string;
    /**
     * A display name for this item.
     */
    name?: string;
    /**
     * The final sale price (after discounts, bulk pricing, price lists, etc.) prior to having taxes calculated. If the merchant lists prices inclusive of tax, this price will already be tax inclusive, and so the tax provider will instead calculate the amount of tax that was already included in this price. For multiple quantities, this price includes that multiplication.
     */
    price: {
        /**
         * Note: This amount will be **negative** for order-level refunds and may be **zero** for line item refunds.
         */
        amount: number;
        /**
         * Note: **Tax Inclusive** and **Tax Exclusive** prices cannot be added together.
         */
        tax_inclusive: boolean;
    };
    quantity: number;
    tax_class?: TaxClass;
    /**
     * Flag whether or not this item is always tax-exempt. For example, gift certificate purchases and order-level refunds are tax-exempt. Tax-exempt items are included in the request for auditing purposes. Tax-exempt items must have a tax amount of zero within the tax quote response.
     */
    tax_exempt?: boolean;
    /**
     * Merchants may opt to include additional properties that a tax provider can choose to support, factoring these values into tax calculation.
     */
    tax_properties?: Array<request_item_tax_property>;
};

