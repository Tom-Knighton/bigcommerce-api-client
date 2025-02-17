/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a new product is created.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/product/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "product",
         * "id": 205
         * }
         * }
         * ```
         */
        export type store_product_created = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
             */
            data?: {
                /**
                 * The type will always be `product`.
                 */
                type?: string;
                /**
                 * ID of the product.
                 */
                id?: number;
            };
        });

