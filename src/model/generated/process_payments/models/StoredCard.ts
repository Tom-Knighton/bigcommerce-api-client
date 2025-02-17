/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type StoredCard = {
    /**
     * Type to classify this payment instrument (required)
     */
    type?: string;
    /**
     * Identifier representing this stored card (required)
     */
    token?: string;
    /**
     * Verification value of this card (CVV)
     */
    verification_value?: string;
};

