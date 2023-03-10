import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when an order is archived.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/order/archived",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "order",
         * "id": 250
         * }
         * }
         * ```
         */
export type store_order_archived = webhook_callback_base;
