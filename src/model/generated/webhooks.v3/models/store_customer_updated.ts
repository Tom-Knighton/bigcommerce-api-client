/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when a customer is updated. In addition, this webhook is triggered when a shopper initially enters custom form field values within the account sign-up form. Please note that neither changing existing data in customer form fields nor changing a customerʼs address will trigger the webhook.
 *
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/customer/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "customer",
         * "id": 32
         * }
         * }
         * ```
         */
        export type store_customer_updated = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
             */
            data?: {
                /**
                 * The type will always be `customer`.
                 */
                readonly type?: string;
                /**
                 * ID of the customer
                 */
                id?: number;
            };
        });

