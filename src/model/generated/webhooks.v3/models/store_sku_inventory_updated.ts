/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * Fires when a SKU is updated.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/sku/inventory/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "sku",
         * "id": 461,
         * "inventory": {
             * "product_id": 167,
             * "method": "absolute",
             * "value": 2,
             * "variant_id": 509
             * }
             * }
             * }
             * ```
             */
            export type store_sku_inventory_updated = (webhook_callback_base & {
                /**
                 * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
                 */
                data?: {
                    /**
                     * The type will always be `sku`.
                     */
                    type?: string;
                    /**
                     * ID of the SKU.
                     */
                    id?: number;
                    inventory?: {
                        /**
                         * ID of the product.
                         */
                        product_id?: number;
                        /**
                         * How the inventory was adjusted. Value will be one of the following:
                         * * `absolute` - inventory updated by an order.
                         * * `relative` - inventory updated using the API or the control panel.
                         */
                        method?: store_sku_inventory_updated.method;
                        /**
                         * The number of items that the inventory changed by. This can be negative if the inventory is decreased `-3` or positive if an item is returned to the inventory from an order, `2`.
                         */
                        value?: number;
                        /**
                         * ID of the variant.
                         */
                        variant_id?: number;
                    };
                };
            });
            export namespace store_sku_inventory_updated {
                /**
                 * How the inventory was adjusted. Value will be one of the following:
                 * * `absolute` - inventory updated by an order.
                 * * `relative` - inventory updated using the API or the control panel.
                 */
                export enum method {
                    ABSOLUTE = 'absolute',
                    RELATIVE = 'relative',
                }
            }

