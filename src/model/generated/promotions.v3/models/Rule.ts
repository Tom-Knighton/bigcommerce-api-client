/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from './Action';
import type { Condition } from './Condition';
/**
 * **Rule**
 * A Rule is the executable unit of the promotion. When a ruleʼs condition is met, the API applies the discount defined in the specified action.
 */
export type Rule = {
    action: Action;
    /**
     * Setting this property to false enables the rule to run repeatedly (for example: 1 free product X for every product Y you purchase)
     */
    apply_once?: boolean;
    /**
     * Boolean value that specifies whether to stop executing all the remaining rules down the priority list when the current rule is applied successfully.
     */
    stop?: boolean;
    condition?: Condition;
};

