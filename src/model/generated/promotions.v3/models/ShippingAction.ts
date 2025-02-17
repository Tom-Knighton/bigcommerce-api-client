/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * **Shipping Action**
 * Applies discount on shipping, optionally restricted to specific shipping zones.
 */
export type ShippingAction = {
    shipping?: {
        /**
         * Set this property to true to provide a separate free shipping method. Read-Only.
         */
        free_shipping?: boolean;
        zone_ids: ('*' | Array<number>);
    };
};

