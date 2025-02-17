/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { categoryAccessLevel_Full } from './categoryAccessLevel_Full';
/**
 * When creating a customer group category discount using the API it defaults to "products in this category and its subcategories". In the [store control panel](https://support.bigcommerce.com/s/article/Customer-Groups#pricing), this can be changed to either "products in this category only" or "products in this category and its subcategories". There are currently no settings to change this behavior with the API.
 */
export type customerGroup_Full = {
    /**
     * ID of the customer group.
     */
    id?: number;
    /**
     * Name of the group.
     */
    name?: string;
    /**
     * Determines whether new customers are assigned to this group by default.
     */
    is_default?: boolean;
    category_access?: categoryAccessLevel_Full;
    discount_rules?: ;
    /**
     * Date on which the customer group was created.
     */
    date_created?: Date;
    /**
     * Date on which the customer group was last modified.
     */
    date_modified?: Date;
    /**
     * Describes whether the group is for guests. There can only be one customer group for guests at a time.
     */
    is_group_for_guests?: boolean;
};

