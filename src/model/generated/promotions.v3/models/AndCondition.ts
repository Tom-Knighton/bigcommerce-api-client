/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartCondition } from './CartCondition';
/**
 * **AndCondition**
 * Evaluates to true when all children are evaluated to true.
 */
export type AndCondition = {
    /**
     * Array of [Conditions](/docs/rest-management/promotions).
     */
    and?: Array<CartCondition>;
};

