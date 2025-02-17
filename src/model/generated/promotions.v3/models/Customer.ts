/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerSegmentLimitation } from './CustomerSegmentLimitation';
/**
 * Specifies the requirements which make the customer eligible for the promotion.
 *
 * Note:
 * - Only "group_ids" or "excluded_group_ids" should be specified (have non-empty array data), but not both.
 * - group_id zero (0) signifies guest customers or registered customers who are not assigned to any groups.
 */
export type Customer = {
    /**
     * A list of customer group IDs that the promotion targets. Only customers in those groups are eligible for this promotion. When unspecified, or set to an empty array, this requirement is not effective, and all customers who satisfy the other requirements (minimum_order_count, excluded_group_ids) are eligible for the promotion.
     */
    group_ids?: Array<number>;
    /**
     * The minimum number of completed orders required of the customer.
     */
    minimum_order_count?: number;
    /**
     * A list of customer group IDs that the promotion will exclude. Only customers who are NOT in those groups are eligible for this promotion. When unspecified, or set to an empty array, this requirement will not have any effects, and all customers who satisfy the other requirements (group_ids, minimum_order_count) are eligible for the promotion.
     */
    excluded_group_ids?: Array<number>;
    segments?: CustomerSegmentLimitation;
};

