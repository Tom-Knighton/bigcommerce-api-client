import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when a client store is canceled and uninstalled from the platform.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/app/uninstalled",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "store"
         * }
         * }
         * ```
         */
export type store_app_uninstalled = webhook_callback_base;
