/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlackoutHours } from './BlackoutHours';
import type { OperatingHours } from './OperatingHours';
export type LocationsUpdateRequest = Array<{
    /**
     * Location immutable unique identifier.
     */
    id: number;
    /**
     * Location user-defined unique identifier.
     */
    code?: string;
    /**
     * Location label.
     */
    label?: string;
    /**
     * Description of location.
     */
    description?: string;
    /**
     * Indicates if the third-party system is the source of truth for inventory values. If set to true, manually editing inventory in BCʼs control panel will be disabled.
     *
     */
    managed_by_external_source?: boolean;
    /**
     * Describe type of given location.
     */
    type_id?: 'PHYSICAL' | 'VIRTUAL';
    /**
     * Indicator of accessibility of the location.
     */
    enabled?: boolean;
    operating_hours?: OperatingHours;
    /**
     * Time zone of location.
     */
    time_zone?: string;
    address?: {
        /**
         * Main address information.
         */
        address1?: string;
        /**
         * Additional address information.
         */
        address2?: string;
        /**
         * The city where the location is located.
         */
        city?: string;
        /**
         * The state where the location is located.
         */
        state?: string;
        /**
         * Zip code of the location.
         */
        zip?: string;
        /**
         * Email of the location.
         */
        email?: string;
        /**
         * Phone number of the location.
         */
        phone?: string;
        /**
         * Object with latitude and longitude that points at the location.
         */
        geo_coordinates?: {
            /**
             * Latitude.
             */
            latitude: number;
            /**
             * Longitude.
             */
            longitude: number;
        };
        /**
         * ISO 3166-1 alpha-3 code.
         */
        country_code: 'US';
    };
    /**
     * Indicator of accessibility of location on the storefront.
     */
    storefront_visibility?: boolean;
    special_hours?: BlackoutHours;
}>;
