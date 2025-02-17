/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when an order status changes; for example, from `Pending` to `Awaiting Payment`.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/order/statusUpdated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "order",
         * "id": 250,
         * "status": {
             * "previous_status_id": 1,
             * "new_status_id": 11
             * }
             * }
             * }
             * ```
             */
            export type store_order_statusUpdated = (webhook_callback_base & {
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
                    status?: {
                        /**
                         * ID of the previous status.
                         */
                        previous_status_id?: number;
                        /**
                         * ID of the updated status.
                         */
                        new_status_id?: number;
                    };
                };
            });

