/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * List of allowed and denied consent categories. Must be populated with a complete set of allowed and denied categories.
 *
 * Configurable categories are:
 *
 * 1 - Analytics
 * 2 - Functional
 * 3 - Targeting; Advertising
 *
 * For further definition of these categories, see [Scripts API](/docs/integrations/scripts).
 */
export type ConsentPreferences = {
    /**
     * Explicitly allowed consent categories. Allowed values are 1, 2, 3.
     */
    allow: Array<1 | 2 | 3>;
    /**
     * Denied consent categories. Allowed values are 2, 3, 4.
     */
    deny: Array<1 | 2 | 3>;
};

