/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type consignmentShippingOption_Base = {
    cost?: number;
    /**
     * Read only.
     */
    readonly description?: string;
    id?: string;
    imageUrl?: string;
    /**
     * An estimate of the arrival time.
     */
    transitTime?: string;
    /**
     * Specifies the type of shipping option; for example, flat rate, UPS, etc.
     */
    type?: string;
};

