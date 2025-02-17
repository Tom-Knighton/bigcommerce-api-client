/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires on new cart creation when any of the following occur:
 * * a storefront shopper adds their first product to a cart during a new session
 * * an application makes a successful `POST` request to `/carts` using either the [REST Storefront](/docs/rest-storefront/carts#create-a-cart) API or the [REST Management](/docs/rest-management/carts/carts-single#create-a-cart) API
 * * a storefront makes a successful call to create a cart using the [GraphQL Storefront API](/docs/storefront/cart-checkout/guide/graphql-storefront)
 *
 * Cart creation also fires the `store/cart/updated` webhook.
 *
 * ```json filename="Example callback object" showLineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c"
         * }
         * }
         * ```
         */
        export type store_cart_created = (webhook_callback_base & {
            /**
             * A lightweight description of the event that triggered the webhook.
             */
            data?: {
                /**
                 * can be `cart` or `cart_line_item`
                 */
                type?: store_cart_created.type;
                /**
                 * ID of the cart
                 */
                id?: string;
            };
        });
        export namespace store_cart_created {
            /**
             * can be `cart` or `cart_line_item`
             */
            export enum type {
                CART = 'cart',
                CART_LINE_ITEM = 'cart_line_item',
            }
        }

