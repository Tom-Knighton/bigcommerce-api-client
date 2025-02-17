/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The type of item for the line item in the document.
 *
 * Tax estimate requests for order-level refunds have an additional line item with the type `refund`.
 */
export enum item_type {
    ITEM = 'item',
    REFUND = 'refund',
    FEE = 'fee',
}
