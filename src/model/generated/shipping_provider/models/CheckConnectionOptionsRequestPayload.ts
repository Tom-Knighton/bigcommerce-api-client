/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionOptionsInstance } from './ConnectionOptionsInstance';
/**
 * The payload sent to a Shipping Provider to check that the store is connected to this provider.
 *
 * Each Shipping Provider will have different configurations for the payload.
 */
export type CheckConnectionOptionsRequestPayload = {
    connection_options: ConnectionOptionsInstance;
};

