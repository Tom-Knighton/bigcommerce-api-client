import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when a customer address is updated.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/customer/address/updated",
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
export type store_customer_address_updated = webhook_callback_base;
