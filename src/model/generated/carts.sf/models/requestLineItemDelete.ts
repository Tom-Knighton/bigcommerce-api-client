/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type requestLineItemDelete = {
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
};

