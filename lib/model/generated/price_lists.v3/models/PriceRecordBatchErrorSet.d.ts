/**
 * Error during Price Record batch PUT request. Includes data sent in the request and errors.
 */
export type PriceRecordBatchErrorSet = {
    /**
     * Price Record object used in batch create or update request.
     */
    data?: {
        /**
         * The Price List with which this price set is associated.
         *
         */
        price_list_id?: number;
        /**
         * The variant ID with which this price set is associated. Either variant_id or SKU is required.
         *
         */
        variant_id?: number;
        /**
         * The SKU with which this price set is associated. Either SKU or variant_id is required.
         *
         */
        sku?: string;
        /**
         * The 3-letter currency code with which this price set is associated.
         *
         */
        currency?: string;
    };
    field_errors?: any;
};
