/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Form Field
 */
export type FormField = {
    /**
     * Field unique ID
     */
    id?: string;
    /**
     * Field name
     */
    name?: string;
    /**
     * Whether this is a custom field or system built-in field.
     */
    custom?: boolean;
    /**
     * User-friendly label
     */
    label?: string;
    /**
     * Whether this field is required or not
     */
    required?: boolean;
    /**
     * The field unique ID
     */
    default?: string;
    /**
     * Type of the value hold by the field
     */
    type?: FormField.type;
    /**
     * Type of the field
     */
    fieldType?: FormField.fieldType;
    /**
     * The minimum valid value for the field (integer and date type only).
     */
    min?: string;
    /**
     * The minimum valid value for the field (integer and date type only).
     */
    max?: string;
    /**
     * The maximum length for the value (string type only).
     */
    maxLength?: number;
    /**
     * Whether the field represents a password field (password field type only).
     */
    secret?: boolean;
    /**
     * Password requirements (password field type only).
     */
    requirements?: {
        /**
         * Regex expression for the required alpha characters.
         */
        alpha?: string;
        /**
         * Description for the password requirements.
         */
        description?: string;
        /**
         * Minimum password length.
         */
        minlength?: number;
        /**
         * Regex expression for the required numeric characters.
         */
        numeric?: string;
    };
    /**
     * Extra data for radio, dropdown and checkbox field types.
     */
    options?: {
        /**
         * Placeholder text for dropdown field type.
         */
        helperLabel?: string;
        /**
         * List of possible values for this field.
         */
        items?: Array<{
            label?: string;
            value?: string;
        }>;
    };
};
export namespace FormField {
    /**
     * Type of the value hold by the field
     */
    export enum type {
        INTEGER = 'integer',
        STRING = 'string',
        ARRAY = 'array',
        DATE = 'date',
    }
    /**
     * Type of the field
     */
    export enum fieldType {
        CHECKBOX = 'checkbox',
        TEXT = 'text',
        DATE = 'date',
        MULTILINE = 'multiline',
        RADIO = 'radio',
        DROPDOWN = 'dropdown',
    }
}

