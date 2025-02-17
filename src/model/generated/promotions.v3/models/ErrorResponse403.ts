/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The client is authenticated but does not have the necessary permissions to perform the requested action.
 */
export type ErrorResponse403 = {
    /**
     * Forbidden.
     */
    status?: string;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    /**
     * Error payload for the BigCommerce API.
     */
    error?: string;
};

