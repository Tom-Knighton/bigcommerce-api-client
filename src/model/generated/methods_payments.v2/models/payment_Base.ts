/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_Base = {
    /**
     * Unique platform-wide code identifying the payment method.
     */
    code?: string;
    /**
     * Descriptive name of the payment method.
     */
    name?: string;
    /**
     * Determines whether the payment gateway is in test mode. Always false for offline payment methods.
     */
    test_mode?: boolean;
};

