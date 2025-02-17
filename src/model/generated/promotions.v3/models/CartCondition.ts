/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemMatcher } from './ItemMatcher';
import type { Money } from './Money';
/**
 * **Cart Condition**
 * Condition based on the content of the current cart.
 */
export type CartCondition = {
    cart?: {
        items?: ItemMatcher;
        minimum_spend?: Money;
        /**
         * Minimum required quantity of the item in the cart for the condition to match. This field is *mandatory* when `items` are specified, but has *no effect* if `items` are not specified.
         */
        minimum_quantity?: number;
    };
};

