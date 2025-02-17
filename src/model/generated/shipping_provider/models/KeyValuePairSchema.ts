/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Options, ranges, defaults, and validation for a carrier-defined field that displays at checkout.
 */
export type KeyValuePairSchema = {
    /**
     * The internal code that represents this input field.
     */
    code: string;
    /**
     * Display name for this input field.
     */
    label: string;
    /**
     * Longer description text to be displayed as a tooltip at checkout.
     */
    description?: string;
    /**
     * Placeholder for any validation we choose to implement.
     */
    validation?: string;
    /**
     * How this input will be displayed.
     */
    type: KeyValuePairSchema.type;
    /**
     * A valid default value for this field.
     */
    default_value: string;
    /**
     * The list of options available for `select` type fields.
     */
    value_options?: Array<string>;
    /**
     * For date type fields, a set of valid date ranges available to choose from
     */
    date_ranges?: Array<{
        /**
         * Value Object representing a Date.
         */
        from?: {
            date?: string;
            timezone?: string;
        };
        /**
         * Value Object representing a Date.
         */
        to?: {
            date?: string;
            timezone?: string;
        };
    }>;
};
export namespace KeyValuePairSchema {
    /**
     * How this input will be displayed.
     */
    export enum type {
        DATE = 'date',
        STRING = 'string',
        SELECT = 'select',
        CODE = 'code',
    }
}

