/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when an item’s quantity has changed or the product options change.
 *
 * Changes to the following fields trigger this event:
 * * Quantity
 * * Item Price
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/lineItem/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c",
         * "cartId": "b0386708-fef3-45de-9d8b-fbe3031450a4"
         * }
         * }
         * ```
         */
        export type store_cart_lineItem_updated = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
             */
            data?: {
                /**
                 * can be `cart` or `cart_line_item`
                 */
                type?: string;
                /**
                 * ID of the line item
                 */
                id?: string;
                /**
                 * ID of the cart
                 */
                cartId?: string;
            };
        });

