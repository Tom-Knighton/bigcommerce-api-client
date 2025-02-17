/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorDetail } from './ErrorDetail';
/**
 * Error response payload for the BigCommerce API.
 *
 */
export type Error = {
    /**
     * The HTTP status code for the error.
     *
     */
    status?: number;
    /**
     * The error title.
     *
     */
    title?: string;
    /**
     * The error type.
     *
     */
    type?: string;
    errors?: ErrorDetail;
};

