/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billingAddress_Base } from './billingAddress_Base';
import type { shipping_provider_custom } from './shipping_provider_custom';
import type { shipping_provider_standard } from './shipping_provider_standard';
import type { shippingAddress_Base } from './shippingAddress_Base';
export type orderShipment = {
    /**
     * Shipment ID.
     */
    id?: number;
    /**
     * ID of the order associated with this shipment.
     */
    order_id?: number;
    /**
     * ID of this order’s customer.
     */
    customer_id?: number;
    /**
     * ID of the desired `shipping_address` associated with the shipment.
     */
    order_address_id?: number;
    /**
     * Creation date for the shipment.
     */
    date_created?: Date;
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
     */
    shipping_method?: string;
    shipping_provider?: (shipping_provider_standard | shipping_provider_custom);
    /**
     * Tracking carrier for the shipment.
     * Acceptable values for `tracking_carrier` include an empty string (`""`) or one of the valid [tracking-carrier values](https://www.aftership.com/docs/tracking/others/supported-couriers).
     */
    tracking_carrier?: string;
    /**
     * The custom tracking link supplied on POST or PUT shipments. For the link to one of our integrated providers or Aftership tracking link, see the `generated_tracking_link` property.
     */
    tracking_link?: string;
    /**
     * Comments the shipper wishes to add.
     */
    comments?: string;
    billing_address?: billingAddress_Base;
    shipping_address?: shippingAddress_Base;
    /**
     * The items in the shipment. This object has the following members, all integer: order_product_id (required), quantity (required), product_id (read-only). A sample items value might be: [ {"order_product_id":16,"product_id": 0,"quantity":2} ]
     */
    items?: Array<{
        order_product_id?: number;
        product_id?: number;
        quantity?: number;
    }>;
    /**
     * The human-readable name for the `shipping_provider`.
     */
    readonly shipping_provider_display_name?: string;
    /**
     * The link to one of our integrated providers or Aftership tracking link that is generated using the combination of either the `tracking_number` and `shipping_provider` or `tracking_number` and `tracking_carrier`. This will be empty if the custom `tracking_link` value is provided.
     */
    generated_tracking_link?: string;
};

