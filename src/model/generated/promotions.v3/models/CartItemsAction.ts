/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Discount } from './Discount';
import type { ItemMatcher } from './ItemMatcher';
/**
 * **Cart Items Action**
 * Applies discount on matching products in the cart.
 */
export type CartItemsAction = {
    cart_items?: {
        discount: Discount;
        /**
         * Set this value to true to distribute the discount as a total among matching items. By default, the discount applies to each item.
         * Example: If set to false, the discount is $10 and you have 2 eligible items for this discount in the cart, both items will be discounted by $10, with a total of $20 off the order.
         * If set to true, $10 will be distributed among the 2 items, weighted by their respective price. In a case where there are 2 of the same items, each item will be discounted by $5.
         */
        as_total?: boolean;
        items?: ItemMatcher;
        /**
         * Setting this value to true enables you to discount items that are used to satisfy the condition. By default items that are used to satisfy the condition are excluded from receiving the discount. For example, "Buy 1 Get 1 20% off." When the cart only contains 1 item, the discount won’t apply.
         */
        include_items_considered_by_condition?: boolean;
        /**
         * Setting this value to true enables the option to prevent items already on sale from being further discounted.
         */
        exclude_items_on_sale?: boolean;
        /**
         * If the shopper has multiple items in their cart that could be discounted by this action, strategy will determine which items are discounted, for example LEAST_EXPENSIVE will sort items by their price in ascending order and discount the cheapest item first.
         */
        strategy?: CartItemsAction.strategy;
        /**
         * Specifies a quantity of matching items to discount. If no quantity is specified, an infinite number of items can be discounted.
         */
        quantity?: number;
        /**
         * The promotion will try to add a free item to the cart automatically, but if it cannot, it will discount a matching existing cart item by 100%.
         */
        add_free_item?: boolean;
    };
};
export namespace CartItemsAction {
    /**
     * If the shopper has multiple items in their cart that could be discounted by this action, strategy will determine which items are discounted, for example LEAST_EXPENSIVE will sort items by their price in ascending order and discount the cheapest item first.
     */
    export enum strategy {
        LEAST_EXPENSIVE = 'LEAST_EXPENSIVE',
        LEAST_EXPENSIVE_ONLY = 'LEAST_EXPENSIVE_ONLY',
        MOST_EXPENSIVE = 'MOST_EXPENSIVE',
        MOST_EXPENSIVE_ONLY = 'MOST_EXPENSIVE_ONLY',
    }
}

