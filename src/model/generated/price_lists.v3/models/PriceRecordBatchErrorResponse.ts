/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DetailedErrors } from './DetailedErrors';
import type { PriceRecordIdentifiers } from './PriceRecordIdentifiers';
/**
 * Error during `Price Record` batch PUT. Includes data sent in the request and errors.
 */
export type PriceRecordBatchErrorResponse = {
    data?: PriceRecordIdentifiers;
    field_errors?: DetailedErrors;
};

