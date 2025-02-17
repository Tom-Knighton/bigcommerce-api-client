/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a previously-created order is updated.
 *
 * Changes to the following fields trigger this event:
 * * Status
 * * Coupon Code
 * * Billing and Shipping Address
 * * Product Type
 * * Search Keywords
 * * Related Products
 * * Warranty Information
 * * Page Title
 * * Meta Description
 * * Gift Wrapping options
 * * Bin Picking Number (BPN)
 * * Fixed Shipping Price
 * * Free Shipping
 * * Open Graph Sharing Type
 * * Availability Text
 * * Purchasability
 * * Release Date
 * * Remove pre-order status on this date
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/order/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "order",
         * "id": 250
         * }
         * }
         * ```
         */
        export type store_order_updated = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
             */
            data?: {
                /**
                 * The type will always be `order`.
                 */
                type?: string;
                /**
                 * ID of the order.
                 */
                id?: number;
            };
        });

