/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Failed quote response.
 */
export type FailedQuoteError = {
    order_id?: number;
    /**
     * HTTP status code.
     */
    status?: number;
    /**
     * Details why the request failed.
     */
    error?: string;
};

