/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DetailedErrors } from './DetailedErrors';
export type errorResponse_409 = ({
    code?: number;
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    type?: string;
} & {
    errors?: DetailedErrors;
});

