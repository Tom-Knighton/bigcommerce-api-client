/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LocationItemsSettingsRequest = {
    settings: Array<{
        /**
         * One of the `sku`, `product_id`, or `variant_id` is required to identify the item.
         */
        identity?: ({
            /**
             * "Stock keeping unit" identifier of an item.
             */
            sku?: string;
        } | {
            /**
             * ID of variant.
             */
            variant_id?: number;
        } | {
            /**
             * ID of product.
             */
            product_id?: number;
        });
        /**
         * Safety stock. Decreases the amount available for selling items at that amount. If missing, the value will remain the same.
         *
         */
        safety_stock?: number;
        /**
         * Shows whether an item is available for purchase independent of quantity. If missing, the value will remain the same.
         *
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
    }>;
};

