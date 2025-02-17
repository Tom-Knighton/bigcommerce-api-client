/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { metafield_Base } from './metafield_Base';
export type metafield_Full = ({
    /**
     * Unique ID of the metafield.
     */
    readonly id?: number;
} & metafield_Base & {
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    resource_type?: metafield_Full.resource_type;
    /**
     * The ID of the resource with which the metafield is associated.
     *
     */
    resource_id?: number;
    /**
     * Date and time of the metafieldʼs creation.
     *
     */
    readonly date_created?: Date;
    /**
     * Date and time when the metafield was last updated.
     *
     */
    readonly date_modified?: Date;
    /**
     * Client ID for the metafieldʼs creator.
     */
    readonly owner_client_id?: string;
});
export namespace metafield_Full {
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    export enum resource_type {
        CATEGORY = 'category',
        BRAND = 'brand',
        PRODUCT = 'product',
        VARIANT = 'variant',
    }
}

