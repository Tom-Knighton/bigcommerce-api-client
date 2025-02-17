/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { handling_type } from './handling_type';
import type { item_type } from './item_type';
import type { request_item } from './request_item';
import type { shipping_type } from './shipping_type';
import type { wrapping_type } from './wrapping_type';
/**
 * Each **DocumentRequest** represents an order or part of an order of items fulfilled from a single origin address to a single destination address. In addition to shipping and billing details, a document request includes the collection of items in the shipment, with tax-relevant information for each item. Multi-address orders, in which items ship to or from multiple addresses, require at least one **DocumentRequest** per combination of sender-recipient addresses. These are similar to "consignments" or "shipments" in other BigCommerce APIs.
 */
export type request_document = {
    /**
     * A unique identifier for this consignment. This value can be expected to be unique within an individual quote request but may be duplicated within subsequent quote requests. A digital consignment will see a prefix **DigitalDelivery_** followed by the Order ID.
     */
    id: string;
    billing_address?: Address;
    destination_address: Address;
    origin_address: Address;
    /**
     * Shipping line item present in each document request.
     */
    shipping: (request_item & {
        type: shipping_type;
    });
    /**
     * Handling line item present in each document request.
     */
    handling: (request_item & {
        type: handling_type;
    });
    /**
     * Collection of one or more items contained within this consignment that need to be assessed for tax liabilities. An item may or may not have gift wrapping.
     */
    items: Array<(request_item & {
        type: item_type;
        /**
         * Optional gift wrapping for items in the consignment.
         */
        wrapping?: (request_item & {
            type: wrapping_type;
        } | null);
    })>;
};

