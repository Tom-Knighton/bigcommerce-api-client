/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { shipping_provider_custom } from './shipping_provider_custom';
import type { shipping_provider_standard } from './shipping_provider_standard';
export type orderShipment_Put = {
    /**
     * ID of the desired `shipping_address` associated with the shipment.
     */
    order_address_id?: number;
    /**
     * Tracking number of the shipment.
     */
    tracking_number?: string;
    /**
     * Shipping cost for the merchant.
     */
    merchant_shipping_cost?: string;
    /**
     * Additional information to describe the method of shipment (ex. Standard, Ship by Weight, Custom Shipment). Can be used for live quotes from certain shipping providers.
     * If different from `shipping_provider`, `shipping_method` should correspond to `tracking_carrier`.
     *
     */
    shipping_method?: string;
    shipping_provider?: (shipping_provider_standard | shipping_provider_custom);
    /**
     * Tracking carrier for the shipment.
     * Acceptable values for `tracking_carrier` include an empty string (`""`) or one of the valid [tracking-carrier values](https://www.aftership.com/docs/tracking/others/supported-couriers).
     */
    tracking_carrier?: string;
    /**
     * The custom tracking link supplied on POST or PUT shipments. For the link to one of our integrated providers or Aftership tracking link see the `generated_tracking_link` property.
     */
    tracking_link?: string;
    /**
     * Comments the shipper wishes to add.
     */
    comments?: string;
};

