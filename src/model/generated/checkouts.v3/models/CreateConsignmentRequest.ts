/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateConsignmentRequest = Array<{
    address?: {
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
        state_or_province: string;
        state_or_province_code?: string;
        country_code: string;
        postal_code: string;
        phone?: string;
        /**
         * You can retrieve custom fields from the [Get Form Fields](/docs/rest-storefront/forms#get-form-fields) endpoint.
         */
        custom_fields?: Array<{
            /**
             * You must provide the form field ID value as the `field_id`.
             */
            field_id: string;
            /**
             * This can also be an array for fields that need to support a list of values (e.g., a set of check boxes.)
             */
            field_value?: string;
        }>;
    };
    line_items?: Array<{
        /**
         * Corresponds to `line_items.physical_items[N].id` value from `GET`checkout response.
         */
        item_id: string;
        quantity: number;
    }>;
    /**
     * Assigns a pickup consignment. Note: You cannot assign a shipping method with a pickup consignment.
     */
    pickup_option?: {
        pickup_method_id?: number;
    };
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
}>;
