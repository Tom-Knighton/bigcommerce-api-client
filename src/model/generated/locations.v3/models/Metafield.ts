/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetafieldBase } from './MetafieldBase';
/**
 * Allows app partners to write custom data to various resources in the API.
 *
 */
export type Metafield = ({
    /**
     * Unique ID for the metafield.
     */
    id?: number;
} & MetafieldBase & {
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    resource_type?: Metafield.resource_type;
    /**
     * The unique identifier for the resource with which the metafield is associated.
     *
     */
    readonly resource_id?: number;
} & {
    /**
     * Date and time when the metafield was created.
     *
     */
    date_created?: Date;
    /**
     * Date and time when the metafield was last updated.
     *
     */
    date_modified?: Date;
    /**
     * Client ID for the metafieldʼs creator.
     */
    readonly owner_client_id?: string;
});
export namespace Metafield {
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    export enum resource_type {
        LOCATION = 'location',
    }
}

