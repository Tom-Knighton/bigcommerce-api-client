/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from './Error';
import type { Metafield } from './Metafield';
import type { WriteCollectionPartialSuccessMeta } from './WriteCollectionPartialSuccessMeta';
/**
 * Response payload for the BigCommerce API.
 *
 */
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};

