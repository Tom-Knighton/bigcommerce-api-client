/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { formFields } from './formFields';
import type { shippingAddress_Base } from './shippingAddress_Base';
export type shippingAddress_Put = (shippingAddress_Base & {
    /**
     * Text code identifying the BigCommerce shipping module selected by the customer.
     */
    shipping_method?: string;
} & {
    form_fields?: Array<formFields>;
});

