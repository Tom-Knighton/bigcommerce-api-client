/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseError } from './BaseError';
export type betaErrorResponse422 = (BaseError & {
    errors?: Array<{
        /**
         * The field that caused the validation error.
         */
        field?: string;
        /**
         * A specific error message describing the issue.
         */
        message?: string;
    }>;
});

