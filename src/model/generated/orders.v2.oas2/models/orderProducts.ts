/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { orderProductAppliedDiscounts } from './orderProductAppliedDiscounts';
import type { orderProductOptions } from './orderProductOptions';
export type orderProducts = {
    /**
     * Numeric ID of this product within this order.
     */
    id?: number;
    /**
     * Numeric ID of the associated order.
     */
    order_id?: number;
    /**
     * Numeric ID of the product.
     */
    product_id?: number;
    /**
     * ID of the pickup fulfillment method for this item. Default value is 0 when the item is not fulfilled by pickup method.
     */
    order_pickup_method_id?: number;
    /**
     * Numeric ID of the associated order address. Value is `0` for items that are not fulfilled by a pickup method.
     */
    order_address_id?: number;
    /**
     * Alias for name_customer - The product name that is shown to customer in storefront.
     */
    name?: string;
    /**
     * User-defined product code/stock keeping unit (SKU).
     */
    sku?: string;
    /**
     * Type of product.
     */
    type?: orderProducts.type;
    /**
     * The product’s base price. (Float, Float-As-String, Integer)
     */
    base_price?: string;
    /**
     * The product’s price excluding tax. The value can't be negative. (Float, Float-As-String, Integer)
     */
    price_ex_tax?: string;
    /**
     * The product’s price including tax. The value can't be negative. (Float, Float-As-String, Integer)
     */
    price_inc_tax?: string;
    /**
     * Amount of tax applied to a single product.
     *
     * Price tax is calculated as:
     * `price_tax = price_inc_tax - price_ex_tax`
     *
     * (Float, Float-As-String, Integer)
     */
    price_tax?: string;
    /**
     * Total base price. (Float, Float-As-String, Integer)
     *
     * **Note**: The `base_total` is affected by the tax options set up in the control panel and is altered on tax-free orders. See more details on how `base_total` is affected by visiting the [Responsive Tax Display Settings](https://support.bigcommerce.com/s/article/Manual-Tax-Setup) overview. If the `base_total` is `$0`, it's due to the store's tax settings. To learn more about tax settings in the control panel, check out this [Tax Settings](https://support.bigcommerce.com/s/article/Tax-Overview?language=en_US#tax-settings) support article.
     */
    base_total?: string;
    /**
     * Total base price excluding tax. The value can't be negative. (Float, Float-As-String, Integer)
     */
    total_ex_tax?: string;
    /**
     * Total base price including tax. The value can't be negative. (Float, Float-As-String, Integer)
     */
    total_inc_tax?: string;
    /**
     * Total tax applied to products.
     * For example, if quantity if 2, base price is 5 and tax rate is 10%. price_tax will be $.50 and total_tax will be $1.00.
     *
     * If there is a manual discount applied total_tax is calculated as the following:
     * `(price_ex_tax - discount)*tax_rate=total_tax`.
     * (Float, Float-As-String, Integer)
     */
    total_tax?: string;
    /**
     * Quantity of the product ordered.
     */
    quantity?: number;
    /**
     * The product’s cost price.  This can be set using the Catalog API. (Float, Float-As-String, Integer)
     */
    base_cost_price?: string;
    /**
     * The product’s cost price including tax. (Float, Float-As-String, Integer)
     * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. The value can't be negative.
     */
    cost_price_inc_tax?: string;
    /**
     * The product cost price excluding tax. (Float, Float-As-String, Integer)
     * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. The value can't be negative.
     */
    cost_price_ex_tax?: string;
    /**
     * Weight of the product. The value can't be negative. (Float, Float-As-String, Integer)
     */
    weight?: (number | string);
    /**
     * Product width. The value can't be negative.
     */
    width?: string;
    /**
     * Product height. The value can't be negative.
     */
    height?: string;
    /**
     * Product depth. The value can't be negative.
     */
    depth?: string;
    /**
     * Tax applied to the product’s cost price. (Float, Float-As-String, Integer)
     * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
     */
    cost_price_tax?: string;
    /**
     * Whether the product has been refunded.
     */
    is_refunded?: boolean;
    /**
     * The total quantity of product refunded from this transaction.
     */
    quantity_refunded?: number;
    /**
     * The amount refunded from this transaction; always returns `0`. (Float, Float-As-String, Integer)
     * @deprecated
     */
    refund_amount?: string;
    /**
     * Numeric ID for the refund.
     */
    return_id?: number;
    /**
     * ID of the gift wrapping option.
     */
    wrapping_id?: number;
    /**
     * Name of gift-wrapping option.
     */
    wrapping_name?: string | null;
    /**
     * The value of the base wrapping cost. The value can't be negative. (Float, Float-As-String, Integer)
     */
    base_wrapping_cost?: (string | number);
    /**
     * The value of the wrapping cost, excluding tax. The value can't be negative. (Float, Float-As-String, Integer)
     */
    wrapping_cost_ex_tax?: string;
    /**
     * The value of the wrapping cost, including tax. The value can't be negative. (Float, Float-As-String, Integer)
     */
    wrapping_cost_inc_tax?: string;
    /**
     * Tax applied to gift-wrapping option. (Float, Float-As-String, Integer)
     */
    wrapping_cost_tax?: string;
    /**
     * Message to accompany gift-wrapping option.
     */
    wrapping_message?: string;
    /**
     * Quantity of this item shipped.
     */
    quantity_shipped?: number;
    /**
     * Name of promotional event/delivery date.
     */
    event_name?: string | null;
    /**
     * Date of the promotional event/scheduled delivery.
     */
    event_date?: string | null;
    /**
     * Fixed shipping cost for this product. (Float, Float-As-String, Integer)
     */
    fixed_shipping_cost?: string;
    /**
     * Item ID for this product on eBay.
     */
    ebay_item_id?: string;
    /**
     * Transaction ID for this product on eBay.
     */
    ebay_transaction_id?: string;
    /**
     * Numeric ID of the option set applied to the product.
     */
    option_set_id?: number | null;
    /**
     * ID of a parent product.
     */
    parent_order_product_id?: number | null;
    /**
     * Whether this product is bundled with other products.
     */
    is_bundled_product?: boolean;
    /**
     * Bin picking number for the physical product.
     */
    bin_picking_number?: string;
    /**
     * (Read-only) ID of the order in another system. For example, the Amazon order ID if this is an Amazon order.
     */
    readonly external_id?: string | null;
    /**
     * The productʼs brand.
     */
    brand?: string;
    /**
     * Array of objects containing discounts applied to the product.
     */
    applied_discounts?: Array<orderProductAppliedDiscounts>;
    /**
     * Array of product option objects.
     */
    product_options?: Array<orderProductOptions>;
    /**
     * Available for only [Catalog V2 stores](/docs/store-operations/catalog/migration).
     */
    configurable_fields?: Array<{
        name?: string;
        value?: string;
    }>;
    /**
     * Universal Product Code. Can be written to for custom products and catalog products.
     */
    upc?: string;
    /**
     * Products `variant_id`. PUT or POST. This field is not available for custom products.
     */
    variant_id?: number;
    /**
     * The product name that is shown to customer in storefront.
     */
    name_customer?: string;
    /**
     * The product name that is shown to merchant in Control Panel.
     */
    name_merchant?: string;
    /**
     * ID of the associated gift certificate.
     */
    gift_certificate_id?: number | null;
    /**
     * Represent the correct total amount of the line item after deducting all the discounts and including the tax. This number can be used for accounting purpose.
     *
     * This makes it easier to have the "shopper paid" value for a line item and api user doesn't have to do any calculation to deduct discount on the client side.
     *
     * This field includes all types of discounts (automatic, coupon, manual) and therefore if you use this value, you don't need to deduct any more discounts at line item level or order level.
     */
    discounted_total_inc_tax?: string;
};
export namespace orderProducts {
    /**
     * Type of product.
     */
    export enum type {
        PHYSICAL = 'physical',
        DIGITAL = 'digital',
        GIFTCERTIFICATE = 'giftcertificate',
    }
}

