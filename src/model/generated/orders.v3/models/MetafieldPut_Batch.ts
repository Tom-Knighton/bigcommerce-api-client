/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetafieldBase_Post } from './MetafieldBase_Post';
/**
 * The model for a PUT to create metafield.
 *
 */
export type MetafieldPut_Batch = (MetafieldBase_Post & {
    /**
     * The ID of metafield to update.
     *
     */
    id: number;
    /**
     * The ID for the resource with which the metafield is associated.
     *
     */
    resource_id?: number;
});

