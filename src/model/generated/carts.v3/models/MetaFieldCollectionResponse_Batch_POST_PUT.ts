/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metafield } from './Metafield';
import type { WriteCollectionPartialSuccessMeta } from './WriteCollectionPartialSuccessMeta';
/**
 * Response payload for the BigCommerce API.
 *
 */
export type MetaFieldCollectionResponse_Batch_POST_PUT = {
    data?: Array<Metafield>;
    /**
     * Empty for 200 responses.
     */
    errors?: Array<any>;
    meta?: WriteCollectionPartialSuccessMeta;
};

