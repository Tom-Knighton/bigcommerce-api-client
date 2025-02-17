/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AddressProperties = {
    first_name?: string;
    last_name?: string;
    email: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    /**
     * Represents state or province.
     */
    state_or_province?: string;
    state_or_province_code?: string;
    country_code: string;
    postal_code?: string;
    phone?: string;
    /**
     * You can retrieve custom fields from the [Get Form Fields](/docs/rest-storefront/forms#get-form-fields) endpoint.
     */
    custom_fields?: Array<{
        field_id?: string;
        /**
         * This can also be an array for fields that need to support a list of values (e.g., a set of check boxes.)
         */
        field_value?: string;
    }>;
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
};

