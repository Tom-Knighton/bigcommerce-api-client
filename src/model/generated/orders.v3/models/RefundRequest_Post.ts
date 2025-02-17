/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemsRefund } from './ItemsRefund';
import type { MerchantOverride } from './MerchantOverride';
import type { PaymentRequest } from './PaymentRequest';
/**
 * Request body for refund requests.
 */
export type RefundRequest_Post = {
    items: Array<ItemsRefund>;
    payments: Array<PaymentRequest>;
    merchant_calculated_override?: MerchantOverride;
};

