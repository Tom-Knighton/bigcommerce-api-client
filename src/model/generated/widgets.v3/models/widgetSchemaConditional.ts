/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An optional property that can be added to each setting to control whether it should be displayed to the user while editing in Page Builder. This does not clear the value in the setting, just controls the display of the setting.
 */
export type widgetSchemaConditional = {
    /**
     * The ID of the `settings` object the conditional attribute is related to. You must define the key within the same settings array as the conditional property to scope the conditional logic to the relevant settings group.
     */
    key?: string;
    /**
     * Specifies the operation used to determine whether to display the setting. The `IN` operator is currently the only supported operator. The setting will be displayed if the conditional’s `value` property is equal to the selected value of the `selectOptions`.
     */
    operator?: string;
    /**
     * A single-object array containing a value from the `typeMeta`'s `selectOptions`.
     */
    value?: Array<any>;
};

