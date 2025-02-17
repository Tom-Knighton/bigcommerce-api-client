/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * One or more of these three fields is mandatory. You can update address and line items in one request. You have to update shipping option ID or pickup option ID in a separate request since changing the address or line items can invalidate the previously available shipping options.
 */
export type NewUpdateConsignment = {
    shippingAddress?: any;
    address?: {
        firstName?: string;
        lastName?: string;
        email?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        /**
         * Represents state or province.
         */
        stateOrProvince?: string;
        stateOrProvinceCode?: string;
        /**
         * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
         */
        countryCode: string;
        postalCode?: string;
        phone?: string;
        customFields?: Array<{
            fieldId?: string;
            fieldValue?: string;
        }>;
        /**
         * Indicates whether we should add this address to the customer address book.
         */
        shouldSaveAddress?: boolean;
    };
    lineItems?: Array<{
        /**
         * The ID of a line item.
         */
        itemId: string;
        /**
         * The quantity of a line item.
         */
        quantity: number;
    }>;
    shippingOptionId?: string;
    pickupOption?: {
        pickupMethodId?: number;
    };
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
};

