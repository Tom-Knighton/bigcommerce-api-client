/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';
/**
 * `type: contact_form`. A user-customizable page that contains a contact form. Body content returns HTML.
 */
export type typeContactForm = (anyTypePage & pageMeta & searchKeywords & {
    /**
     * Applicable when the page type is `contact_form`: contact email address that receives messages sent using the form. Must be unique.
     */
    email?: string;
    /**
     * A comma-separated list of the contact field forms that are enabled in the store control panel for display on the subject storefront. Possible fields include:
     *
     * | Field | Description |
     * |:------|:------------|
     * | `fullname` | The full name of the customer submitting the form. |
     * | `phone` | The customer’s phone number. |
     * | `companyname` | The customer’s company name. |
     * | `orderno` | A field that lets customers specify a subject order number. |
     * | `rma` | A customer’s submitted RMA (Return Merchandise Authorization) number. |
     *
     */
    contact_fields?: string;
});

