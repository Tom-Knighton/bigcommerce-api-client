/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { requestCartPostLineItem } from './requestCartPostLineItem';
import type { requestLineItemGiftCertificate } from './requestLineItemGiftCertificate';
/**
 * Cart object used in add items requests.
 */
export type LineItemsRequest = ({
    lineItems: Array<requestCartPostLineItem>;
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
} | {
    giftCertificates: Array<requestLineItemGiftCertificate>;
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
} | {
    lineItems: Array<requestCartPostLineItem>;
    giftCertificates: Array<requestLineItemGiftCertificate>;
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
});

