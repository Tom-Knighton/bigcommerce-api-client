/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when a refund is submitted against an order.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/order/refund/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "order",
         * "id": 250,
         * "refund": {
             * "refund_id": 3
             * }
             * }
             * }
             * ```
             */
            export type store_order_refund_created = (webhook_callback_base & {
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
                    refund?: {
                        /**
                         * ID of the refund submitted against the order.
                         */
                        refund_id?: number;
                    };
                };
            });

