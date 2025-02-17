/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Common metafield properties.
 *
 */
export type Metafield = {
    /**
     * Determines the visibility and writeability of the field by other API consumers.
     * | Value | Description |
     * | :--- | :--- |
     * | `app_only` | Private to the app that owns the field. |
     * | `read` | Visible to other API consumers. |
     * | `write` | Open for reading and writing by other API consumers. |
     * | `read_and_sf_access` | Visible to other API consumers, including on storefront. |
     * | `write_and_sf_access` | Open for reading and writing by other API consumers, including on storefront. |
     *
     */
    permission_set: Metafield.permission_set;
    /**
     * Namespace for the metafield, for organizational purposes.
     *
     */
    namespace: string;
    /**
     * The name of the field, for example: `location_id`, `color`.
     *
     */
    key: string;
    /**
     * The value of the field, for example: `1`, `blue`.
     *
     */
    value: string;
    /**
     * Description for the metafields.
     *
     */
    description: string;
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    resource_type: Metafield.resource_type;
    /**
     * The unique identifier for the resource with which the metafield is associated.
     *
     */
    readonly resource_id: number;
    /**
     * The unique identifier for the metafield.
     */
    id: number;
    /**
     * Date and time of the metafieldʼs creation.
     */
    date_created: Date;
    /**
     * Date and time when the metafield was last updated.
     */
    date_modified: Date;
    /**
     * Client ID for the metafieldʼs creator.
     */
    readonly owner_client_id?: string;
};
export namespace Metafield {
    /**
     * Determines the visibility and writeability of the field by other API consumers.
     * | Value | Description |
     * | :--- | :--- |
     * | `app_only` | Private to the app that owns the field. |
     * | `read` | Visible to other API consumers. |
     * | `write` | Open for reading and writing by other API consumers. |
     * | `read_and_sf_access` | Visible to other API consumers, including on storefront. |
     * | `write_and_sf_access` | Open for reading and writing by other API consumers, including on storefront. |
     *
     */
    export enum permission_set {
        APP_ONLY = 'app_only',
        READ = 'read',
        WRITE = 'write',
        READ_AND_SF_ACCESS = 'read_and_sf_access',
        WRITE_AND_SF_ACCESS = 'write_and_sf_access',
    }
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    export enum resource_type {
        BRAND = 'brand',
        PRODUCT = 'product',
        VARIANT = 'variant',
        CATEGORY = 'category',
        CART = 'cart',
        CHANNEL = 'channel',
        LOCATION = 'location',
        ORDER = 'order',
        CUSTOMER = 'customer',
    }
}

