/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PutRequestPickup = {
    /**
     * @deprecated
     */
    id: number;
    /**
     * The ID of pickup.
     */
    pickup_id: number;
    /**
     * Can be provided as two inputs.
     * Unix: Represents the time in seconds that has elapsed since Unix epoch (00:00:00 UTC on 1 January 1970)
     * ISO-8601: Represents the time in ISO format.
     *
     */
    ready_at?: string;
    /**
     * Can be provided as two inputs.
     * Unix: Represents the time in seconds that has elapsed since Unix epoch (00:00:00 UTC on 1 January 1970).
     * ISO-8601: Represents the time in ISO format.
     * If this value is not supplied, the pickup item collected_at property will be null.
     *
     */
    collected_at?: string;
};

