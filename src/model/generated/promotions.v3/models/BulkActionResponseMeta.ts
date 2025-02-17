/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains data about the bulk action response including the number of total, failed and success.
 */
export type BulkActionResponseMeta = {
    /**
     * Total number of items in the bulk action.
     */
    total?: number;
    /**
     * Number of items that processed successfully.
     */
    success?: number;
    /**
     * Number of items that failed to process.
     */
    failed?: number;
};

