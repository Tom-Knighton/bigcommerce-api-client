/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response payload for the BigCommerce API.
 *
 */
export type ThemesCollectionResponse = {
    data?: Array<{
        /**
         * The variations.
         */
        variations?: Array<{
            /**
             * The description.
             */
            description?: string;
            /**
             * The external identifier.
             */
            external_id?: string;
            /**
             * The name.
             */
            name?: string;
            /**
             * The identifier.
             */
            uuid?: string;
        }>;
        /**
         * The identifier.
         */
        uuid?: string;
        /**
         * The theme name identifier.
         */
        name?: string;
        /**
         * Flag to identify private themes.
         */
        is_private?: boolean;
        /**
         * Indicates whether this theme is active on the storefront.
         */
        is_active?: boolean;
        /**
         * The date-time of the last theme update.
         */
        updated_at?: string;
    }>;
    /**
     * Response metadata.
     */
    meta?: Record<string, any>;
};

