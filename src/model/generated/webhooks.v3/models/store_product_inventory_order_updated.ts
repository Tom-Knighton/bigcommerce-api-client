/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when a product’s inventory increases or decreases.
 *
 * Changes to the following fields trigger this event:
 * * Quantity
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/product/inventory/order/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "product",
         * "id": 167,
         * "inventory": {
             * "product_id": 167,
             * "method": "absolute",
             * "value": 2
             * }
             * }
             * }
             * ```
             */
            export type store_product_inventory_order_updated = (webhook_callback_base & {
                /**
                 * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
                 */
                data?: {
                    /**
                     * Type will always be `product`.
                     */
                    type?: string;
                    /**
                     * ID of the product.
                     */
                    id?: number;
                    inventory?: {
                        /**
                         * ID of the product.
                         */
                        product_id?: number;
                        /**
                         * How the inventory was adjusted. Value will be one of the following:
                         * * `absolute` - inventory updated using the API or the control panel.
                         * * `relative` - inventory updated by an order.
                         */
                        method?: store_product_inventory_order_updated.method;
                        /**
                         * This value is the difference between an item’s inventory count before and after the inventory updates. This value is negative if an item’s inventory count decreases. For example, reducing inventory by three returns a value of `-3`. This value is positive if an item’s inventory count increases. For example, returning two items to the inventory returns a value of `2`.
                         */
                        value?: number;
                    };
                };
            });
            export namespace store_product_inventory_order_updated {
                /**
                 * How the inventory was adjusted. Value will be one of the following:
                 * * `absolute` - inventory updated using the API or the control panel.
                 * * `relative` - inventory updated by an order.
                 */
                export enum method {
                    ABSOLUTE = 'absolute',
                    RELATIVE = 'relative',
                }
            }

