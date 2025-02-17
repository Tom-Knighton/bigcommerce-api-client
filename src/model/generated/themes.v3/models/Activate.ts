/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request definition for activation endpoint.
 */
export type Activate = {
    /**
     * The identifier for the variation to activate.
     */
    variation_id: string;
    /**
     * Which configuration to use.
     */
    which?: Activate.which;
};
export namespace Activate {
    /**
     * Which configuration to use.
     */
    export enum which {
        ORIGINAL = 'original',
        LAST_ACTIVATED = 'last_activated',
        LAST_CREATED = 'last_created',
    }
}

