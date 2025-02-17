/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a new coupon code is applied to a cart. The webhook request body includes the ID of the coupon code.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/couponApplied",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c",
         * "couponId": 1
         * }
         * }
         * ```
         */
        export type store_cart_couponApplied = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
             */
            data?: {
                /**
                 * can be `cart` or `cart_line_item`
                 */
                type?: string;
                /**
                 * ID of the cart
                 */
                id?: string;
                /**
                 * ID of the coupon
                 */
                couponId?: number;
            };
        });

