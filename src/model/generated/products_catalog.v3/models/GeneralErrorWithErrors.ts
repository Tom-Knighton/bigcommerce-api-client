/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GeneralErrorWithErrors = {
    /**
     * The HTTP status code.
     */
    status: number;
    /**
     * The error title describes the particular error.
     */
    title: string;
    type: string;
    errors: Record<string, any>;
};

