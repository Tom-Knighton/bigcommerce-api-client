/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when a new SKU is created.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/sku/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "sku",
         * "id": 461,
         * "sku": {
             * "product_id": 206,
             * "variant_id": 509
             * }
             * }
             * }
             * ```
             */
            export type store_sku_created = (webhook_callback_base & {
                /**
                 * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
                 */
                data?: {
                    /**
                     * The type will always be `"sku"`.
                     */
                    type?: string;
                    /**
                     * ID of the SKU.
                     */
                    id?: number;
                    sku?: {
                        /**
                         * ID of the product.
                         */
                        product_id?: number;
                        /**
                         * ID of the variant.
                         */
                        variant_id?: number;
                    };
                };
            });

