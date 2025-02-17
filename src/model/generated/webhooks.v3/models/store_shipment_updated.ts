/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a shipment is updated.
 *
 * Changes to the following fields trigger this event:
 * * Shipping Tracking Number
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/shipment/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "shipment",
         * "id": 12,
         * "orderId": 251
         * }
         * }
         * ```
         */
        export type store_shipment_updated = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
             */
            data?: {
                /**
                 * The type will always be `shipment`.
                 */
                type?: string;
                /**
                 * ID of the shipment.
                 */
                id?: number;
                /**
                 * ID of the order.
                 */
                orderId?: number;
            };
        });

