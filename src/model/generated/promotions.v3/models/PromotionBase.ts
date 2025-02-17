/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressMatcher } from './AddressMatcher';
import type { AvailabilityByWeekDay } from './AvailabilityByWeekDay';
import type { Channel } from './Channel';
import type { Customer } from './Customer';
import type { Notification } from './Notification';
import type { Rule } from './Rule';
/**
 * **Promotion**
 * A *promotion* is composed of a condition that a customer can satisfy (such as increasing their cart value above a certain amount or adding an item to their cart) and an action will take place (such as a discount on the customer’s order total, or a free item being added to their cart).
 */
export type PromotionBase = {
    /**
     * An auto-generated unique identifier for the discount rule.
     */
    readonly id?: number;
    /**
     * A read-only field indicating the type of promotion. Promotions applied automatically have a value of `AUTOMATIC` whereas promotions requiring a coupon have a value of `COUPON`.
     */
    readonly redemption_type?: PromotionBase.redemption_type;
    /**
     * An internal name for this rule that the merchant can refer to.
     */
    name: string;
    /**
     * Customer-facing name for this rule, that the merchant want to display to customers.
     */
    display_name?: string;
    /**
     * Channels that the promotion targets. Empty array [] means targeting all the channels. In POST request, if omitted, this field defaults to an empty array [] value.
     */
    channels?: Array<Channel>;
    customer?: Customer;
    /**
     * An ordered list of rules to be executed until the first applicable one applies a discount successfully and the rest will be skipped.
     */
    rules: Array<Rule>;
    /**
     * A read-only count of the times this rule has been used by customers. A rule is considered to be used when a customer successfully checks out with a rule that has applied a discount to their cart.
     */
    readonly current_uses?: number;
    /**
     * The maximum number of times this discount can be used by customers.
     */
    max_uses?: number;
    /**
     * Controls whether or not a discount rule can be used by customers. `INVALID` is a read-only status into which enabled discount rules may transition when they become invalid.
     */
    status?: PromotionBase.status;
    /**
     * The date and time when this rule will become active.
     */
    start_date?: Date;
    /**
     * The date and time when this rule will expire. If this property is left null, the promotion never expires.
     */
    end_date?: Date;
    /**
     * Boolean value that specifies whether to stop evaluating promotions down the priority list when the promotion is applied successfully.
     */
    stop?: boolean;
    /**
     * Boolean value that specifies whether this promotion can be used with other promotions. When set to false, only apply this promotion if there are no discounts applied already, and stop executing other promotions if this promotion applies successfully.
     */
    can_be_used_with_other_promotions?: boolean;
    /**
     * The ISO-4217-based transactional currency code to which the promotion applies OR * for all currencies.
     */
    currency_code?: string;
    /**
     * Notifications to display on the storefront based on the result of the evaluation for promotion eligibility.
     */
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
};
export namespace PromotionBase {
    /**
     * A read-only field indicating the type of promotion. Promotions applied automatically have a value of `AUTOMATIC` whereas promotions requiring a coupon have a value of `COUPON`.
     */
    export enum redemption_type {
        AUTOMATIC = 'AUTOMATIC',
        COUPON = 'COUPON',
    }
    /**
     * Controls whether or not a discount rule can be used by customers. `INVALID` is a read-only status into which enabled discount rules may transition when they become invalid.
     */
    export enum status {
        ENABLED = 'ENABLED',
        DISABLED = 'DISABLED',
        INVALID = 'INVALID',
    }
}

