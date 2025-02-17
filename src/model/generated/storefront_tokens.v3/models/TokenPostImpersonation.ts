/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Channel } from './Channel';
import type { Channels } from './Channels';
export type TokenPostImpersonation = ({
    /**
     * Unix timestamp (UTC time) defining when the token should expire. Supports seconds, but does not support milliseconds, microseconds, or nanoseconds.
     */
    expires_at: number;
} & (Channels | Channel));

