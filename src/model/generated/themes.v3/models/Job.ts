/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The job for theme upload or download
 */
export type Job = {
    /**
     * The errors.
     */
    errors?: Array<{
        /**
         * The error.
         */
        error?: string;
        /**
         * The message.
         */
        message?: string;
    }>;
    /**
     * The identifier.
     */
    id?: string;
    /**
     * The percent complete.
     */
    percent_complete?: number;
    /**
     * The result.
     */
    result?: Record<string, any>;
    /**
     * The status.
     */
    status?: Job.status;
    /**
     * The time.
     */
    time?: string;
    /**
     * The warnings.
     */
    warnings?: Array<{
        /**
         * The message.
         */
        message?: string;
        /**
         * The warning.
         */
        warning?: string;
    }>;
};
export namespace Job {
    /**
     * The status.
     */
    export enum status {
        COMPLETED = 'COMPLETED',
        QUEUED = 'QUEUED',
        WORKING = 'WORKING',
        FAILED = 'FAILED',
    }
}

