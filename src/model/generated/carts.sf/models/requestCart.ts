/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { requestCartPostLineItem } from './requestCartPostLineItem';
import type { requestLineItemGiftCertificate } from './requestLineItemGiftCertificate';
/**
 * Cart object used in create cart requests.
 */
export type requestCart = ({
    lineItems: Array<requestCartPostLineItem>;
    locale?: string;
} | {
    giftCertificates: Array<requestLineItemGiftCertificate>;
    locale?: string;
} | {
    lineItems: Array<requestCartPostLineItem>;
    giftCertificates: Array<requestLineItemGiftCertificate>;
    locale?: string;
});

