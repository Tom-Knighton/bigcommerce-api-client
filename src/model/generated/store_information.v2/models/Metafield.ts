/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetafieldBase } from './MetafieldBase';
/**
 * Allows app partners to write custom data to various resources in the API.
 *
 */
export type Metafield = (MetafieldBase & {
    /**
     * The unique identifier for the metafield.
     */
    id?: string;
    /**
     * Date and time of the metafieldʼs creation.
     */
    date_created?: Date;
    /**
     * Date and time when the metafield was last updated.
     */
    date_modified?: Date;
    /**
     * Client ID for the metafieldʼs creator.
     */
    readonly owner_client_id?: string;
});

