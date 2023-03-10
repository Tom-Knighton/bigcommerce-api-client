import type { FormFields } from './FormFields';
/**
 * Group of form field groups
 */
export type FormFieldGroups = {
    customerAccount?: FormFields;
    shippingAddress?: FormFields;
    billingAddress?: FormFields;
};
