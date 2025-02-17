/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Error payload for the BigCommerce API.
 */
export type NotFound = {
    /**
     * 404 HTTP status code.
     *
     */
    status?: number;
    /**
     * The resource at that URL is not found.
     */
    title?: string;
    type?: string;
    /**
     * Empty for 200 responses.
     */
    errors?: Array<any>;
};

