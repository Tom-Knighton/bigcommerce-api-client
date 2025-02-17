/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ErrorResponse = ({
    /**
     * The HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: Record<string, any>;
});

