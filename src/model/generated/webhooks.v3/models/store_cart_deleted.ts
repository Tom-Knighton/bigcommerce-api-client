/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a cart is deleted. Carts are deleted in two ways; when all items are removed from a cart, and when an API consumer explicitly removes the cart using a `DELETE` request. Cart deletion ends the cart lifecycle. The `store/cart/updated` webhook also fires when the last item is removed.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/deleted",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c"
         * }
         * }
         * ```
         */
        export type store_cart_deleted = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook.
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
            };
        });

