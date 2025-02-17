/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionMeta } from './CollectionMeta';
import type { Metafield } from './Metafield';
/**
 * Response payload for the BigCommerce API.
 *
 */
export type MetaFieldCollectionResponse_POST_PUT = {
    data?: Array<Metafield>;
    /**
     * Empty for 200 responses.
     */
    errors?: Array<any>;
    meta?: CollectionMeta;
};

