/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a customer address is created.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/customer/address/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "customer",
         * "id": 60,
         * "address": {
             * "customer_id": 32
             * }
             * }
             * }
             * ```
             */
            export type store_customer_address_created = (webhook_callback_base & {
                /**
                 * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
                 */
                data?: {
                    /**
                     * The type will always be `customer`.
                     */
                    type?: string;
                    /**
                     * ID of the customer address.
                     */
                    id?: number;
                    address?: {
                        /**
                         * ID of the customer.
                         */
                        customer_id?: number;
                    };
                };
            });

