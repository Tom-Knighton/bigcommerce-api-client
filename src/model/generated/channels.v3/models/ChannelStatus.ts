/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The status of the channel; channel `type`, `platform`, and `status` must be a [valid combination](/docs/rest-management/channels#status). `terminated` is not valid for `PUT` or `POST` requests. `deleted` is not valid for `POST` requests. `prelaunch` is not valid for `PUT` requests.
 */
export enum ChannelStatus {
    ACTIVE = 'active',
    PRELAUNCH = 'prelaunch',
    INACTIVE = 'inactive',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    ARCHIVED = 'archived',
    DELETED = 'deleted',
    TERMINATED = 'terminated',
}
