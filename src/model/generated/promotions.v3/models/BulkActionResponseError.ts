/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains data about the error of the bulk action.
 */
export type BulkActionResponseError = {
    /**
     * HTTP Response status.
     */
    status?: number;
    /**
     * Title of the status
     */
    title?: string;
    /**
     * Explanation of the error type.
     */
    type?: string;
    /**
     * List all per-item errors. Use an index of an item on a request to reference an error. The example shows the first and second item on a request that has caused an error.
     */
    errors?: Record<string, any>;
};

