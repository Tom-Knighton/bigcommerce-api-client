/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemResponse = {
    identity?: {
        /**
         * "Stock keeping unit" identifier of an item.
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
        /**
         * Read-only reference to Catalog V2 API's SKU ID. `null` if the item is a base variant.
         */
        sku_id?: number;
    };
    locations?: Array<{
        /**
         * ID of location.
         */
        location_id?: number;
        /**
         * Code of location.
         */
        location_code?: string;
        /**
         * Name of location.
         */
        location_name?: string;
        /**
         * Available to sell. Total inventory on hand minus the safety stock.
         */
        available_to_sell?: number;
        /**
         * Total inventory on hand.
         */
        total_inventory_onhand?: number;
        /**
         * Status of the location. Indicates whether a location is enabled.
         */
        location_enabled?: boolean;
        settings?: {
            /**
             * Decreases the amount available for selling items at that amount.
             */
            safety_stock?: number;
            /**
             * Shows whether an item is available for purchase independent of quantity.
             */
            is_in_stock?: boolean;
            /**
             * Inventory warning level for the product. The store owner will be informed when the product inventory level drops below the warning level.
             */
            warning_level?: number;
            /**
             * Warehouse location identifier; bin picking number for the item.
             */
            bin_picking_number?: string;
        };
    }>;
};

