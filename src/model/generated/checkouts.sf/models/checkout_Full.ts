/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address_Base } from './address_Base';
import type { checkoutCart } from './checkoutCart';
import type { CheckoutCoupon } from './CheckoutCoupon';
import type { CheckoutFee } from './CheckoutFee';
import type { checkoutGiftCertificates } from './checkoutGiftCertificates';
import type { checkoutTax } from './checkoutTax';
import type { consignment_Full } from './consignment_Full';
import type { Customer } from './Customer';
export type checkout_Full = {
    billingAddress?: address_Base;
    cart?: checkoutCart;
    /**
     * Channel ID.
     */
    channelId?: number;
    consignments?: Array<consignment_Full>;
    /**
     * Coupons applied at the checkout level.
     */
    coupons?: Array<CheckoutCoupon>;
    /**
     * Fees applied at the checkout level.
     */
    fees?: Array<CheckoutFee>;
    /**
     * Time when the cart was created.
     */
    createdTime?: string;
    customer?: Customer;
    /**
     * Shopperʼs message provided as details for the order to be created from this cart
     */
    customerMessage?: string;
    /**
     * Applied gift certificate (as a payment method).
     */
    giftCertificates?: Array<checkoutGiftCertificates>;
    /**
     * Gift wrapping cost for all items, including or excluding tax.
     */
    giftWrappingCostTotal?: number;
    /**
     * The total payable amount, before applying any store credit or gift certificate.
     */
    grandTotal?: number;
    /**
     * Handling cost for all consignments including or excluding tax.
     */
    handlingCostTotal?: number;
    id?: string;
    /**
     * `true` value indicates StoreCredit has been applied.
     *
     */
    isStoreCreditApplied?: boolean;
    orderId?: string | null;
    /**
     * `grandTotal` subtract the store-credit amount
     *
     */
    outstandingBalance?: number;
    payments?: Array<{
        /**
         * Payment provider ID.
         */
        providerId?: string;
        /**
         * Payment gateway ID.
         */
        gatewayId?: string | null;
        /**
         * Type of payment provider.
         */
        providerType?: 'PAYMENT_TYPE_HOSTED';
        /**
         * Details regarding which checkout steps a shopper has completed.
         */
        detail?: Array<'FINALIZE' | 'INITIALIZE' | 'ACKNOWLEDGE'>;
    }>;
    promotions?: Array<{
        type?: 'promotion' | 'upsell' | 'eligible' | 'applied';
        /**
         * Text displayed on the storefront for the promotion.
         */
        text?: string;
    }>;
    /**
     * The shipping cost before discounts are applied.
     */
    shippingCostBeforeDiscount?: number;
    /**
     * Shipping cost before any discounts are applied.
     */
    shippingCostTotal?: number;
    shouldExecuteSpamCheck?: boolean;
    /**
     * Subtotal of the checkout before applying item-level discounts. Tax inclusive based on the store settings.
     */
    subtotal?: number;
    taxes?: Array<checkoutTax>;
    taxTotal?: number;
    /**
     * Time when the cart was last updated.
     */
    updatedTime?: string;
    /**
     * The current version of the checkout increments with each successful update. You can use it to enable optimistic concurrency control for subsequent updates.
     */
    version?: number;
};

