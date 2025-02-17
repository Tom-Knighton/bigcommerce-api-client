/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billingAddress_Base } from './billingAddress_Base';
import type { order_Shared } from './order_Shared';
import type { orderCatalogProduct_Post } from './orderCatalogProduct_Post';
import type { orderConsignment_Post } from './orderConsignment_Post';
import type { orderCustomProduct_Post } from './orderCustomProduct_Post';
import type { orderFees_Post } from './orderFees_Post';
import type { shippingAddress_Base } from './shippingAddress_Base';
/**
 * Products and Billing address only required for POST operation.
 */
export type order_Post = ({
    billing_address?: billingAddress_Base;
    /**
     * The currency code of the transactional currency the shopper pays in is writable when multi-currency is enabled.
     */
    default_currency_code?: string;
    products?: Array<(orderCatalogProduct_Post | orderCustomProduct_Post)>;
    shipping_addresses?: Array<(shippingAddress_Base & {
        /**
         * Text code identifying the BigCommerce shipping module selected by the customer.
         */
        shipping_method?: string;
    })>;
    consignments?: orderConsignment_Post;
    fees?: Array<orderFees_Post>;
} & order_Shared);

