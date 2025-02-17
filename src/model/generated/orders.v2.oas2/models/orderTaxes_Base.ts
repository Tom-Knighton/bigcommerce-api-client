/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type orderTaxes_Base = {
    /**
     * The unique numeric identifier of the taxes object.
     */
    id?: number;
    /**
     * The unique numeric identifier of the order to which the tax was applied. NOTE: Not included if the store was using the automatic tax feature.
     */
    order_id?: number;
    /**
     * The unique numeric identifier of the order address object associated with the order. NOTE: Not included if the store was using the automatic tax feature.
     */
    order_address_id?: number;
    /**
     * The unique numeric identifier of the tax rate.
     */
    tax_rate_id?: number;
    /**
     * A unique numeric identifier for the tax class. If not provided or null, the default fee tax class from the control panel is used.
     */
    tax_class_id?: number | null;
    /**
     * The name of the tax class object.
     */
    name?: string;
    /**
     * The name of the type of tax that was applied. NOTE: It will be "Automatic Tax" if automatic tax was enabled. It will be "API Tax Override" if the order was created with V2 Orders API.
     */
    class?: string;
    /**
     * The tax rate.  The priority order in which the tax is applied (Float, Float-As-String, Integer)
     */
    rate?: string;
    /**
     * The order in which the tax is applied.
     */
    priority?: number;
    /**
     * The amount of tax calculated on the order. (Float, Float-As-String, Integer)
     */
    priority_amount?: string;
    /**
     * (Float, Float-As-String, Integer)
     */
    line_amount?: string;
    /**
     * The ID of the order pickup method object (which contains pickup location details) associated with the order.
     */
    order_pickup_method_id?: number;
    /**
     * If the `line_item_type` is `item` or `handling` then this field will be the order product id. Otherwise the field will return as null.
     */
    order_product_id?: string;
    /**
     * Type of tax on item.
     */
    line_item_type?: orderTaxes_Base.line_item_type;
};
export namespace orderTaxes_Base {
    /**
     * Type of tax on item.
     */
    export enum line_item_type {
        ITEM = 'item',
        SHIPPING = 'shipping',
        HANDLING = 'handling',
        GIFT_WRAPPING = 'gift-wrapping',
    }
}

