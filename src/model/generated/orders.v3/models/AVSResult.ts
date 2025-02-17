/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address Verification Service (AVS) result from the payment gateway.
 */
export type AVSResult = {
    /**
     * AVS code.
     */
    code?: string;
    /**
     * AVS message.
     */
    message?: string;
    /**
     * AVS Code for street matching result.
     */
    street_match?: string;
    /**
     * AVS Code for postal matching result.
     */
    postal_match?: string;
};

