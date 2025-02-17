/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemMatcher } from './ItemMatcher';
import type { Money } from './Money';
/**
 * **Fixed Price Set Action**
 * Sets a fixed price for a list of items.
 */
export type FixedPriceSetAction = {
    fixed_price_set?: {
        /**
         * Quantity of items in the set that would receive the discount.
         */
        quantity: number;
        fixed_price: Money;
        items?: ItemMatcher;
        /**
         * If the shopper has multiple items in their cart that could be discounted by this action, strategy will determine which items are discounted, for example LEAST_EXPENSIVE will sort items in price ascending order and discount the cheapest item first.
         */
        strategy?: FixedPriceSetAction.strategy;
        /**
         * Enable this option to prevent items already on sale from being further discounted.
         */
        exclude_items_on_sale?: boolean;
        /**
         * Setting this value to false enables you to exclude items used to satisfy the condition to be discounted. By default, items that are used to satisfy the condition are eligible to receive the discount.
         */
        include_items_considered_by_condition?: boolean;
    };
};
export namespace FixedPriceSetAction {
    /**
     * If the shopper has multiple items in their cart that could be discounted by this action, strategy will determine which items are discounted, for example LEAST_EXPENSIVE will sort items in price ascending order and discount the cheapest item first.
     */
    export enum strategy {
        LEAST_EXPENSIVE = 'LEAST_EXPENSIVE',
        LEAST_EXPENSIVE_ONLY = 'LEAST_EXPENSIVE_ONLY',
        MOST_EXPENSIVE = 'MOST_EXPENSIVE',
        MOST_EXPENSIVE_ONLY = 'MOST_EXPENSIVE_ONLY',
    }
}

