/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemPhysical } from './ItemPhysical';
import type { OrderItemDigital } from './OrderItemDigital';
import type { OrderItemGiftCertificate } from './OrderItemGiftCertificate';
export type OrderLineItem = {
    /**
     * Array of `ItemPhysical` objects.
     */
    physicalItems: Array<ItemPhysical>;
    /**
     * Array of `ItemDigital` objects.
     */
    digitalItems: Array<OrderItemDigital>;
    /**
     * Array of `ItemGiftCertificate` objects.
     */
    giftCertificate: Array<OrderItemGiftCertificate>;
};

