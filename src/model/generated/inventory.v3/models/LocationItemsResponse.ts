/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LocationItemsResponse = {
    identity?: {
        /**
         * "Stock keeping unit" identifier of item.
         */
        sku?: string;
        /**
         * ID of variant.
         */
        variant_id?: number;
        /**
         * ID of product.
         */
        product_id?: number;
    };
    /**
     * Amount of available items.
     */
    available_to_sell?: number;
    /**
     * Amount of available items on hand minus `safety_stock`.
     */
    total_inventory_onhand?: number;
    settings?: {
        /**
         * Safety stock. Decreases the amount available for selling an item. If missing, the value will remain the same.
         *
         */
        safety_stock?: number;
        /**
         * Shows whether an item is available for purchase independent of quantity.
         */
        is_in_stock?: boolean;
        /**
         * Inventory warning level for the product. The store owner will be informed when the product's inventory level drops below the warning level. If missing, the value will remain the same.
         *
         */
        warning_level?: number;
        /**
         * Warehouse location identifier; bin picking number for the item.
         *
         */
        bin_picking_number?: string;
    };
};

