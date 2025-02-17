/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The server cannot process the request because the syntax or data is invalid.
 */
export type ErrorResponse400 = {
    /**
     * Bad request.
     */
    status?: string;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    /**
     * Error payload for the BigCommerce API.
     */
    type?: string;
    /**
     * Detailed summary describing the particular error.
     */
    detail?: string;
};

