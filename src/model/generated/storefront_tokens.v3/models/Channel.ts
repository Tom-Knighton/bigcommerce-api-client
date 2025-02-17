/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Channel = {
    /**
     * Channel ID that is valid for the requested token. Use this field to enter a channel ID. Do not use this field if you have more than one channel. We support this field for backwards compatibility, but `channel_ids` is preferred. You can not use both `channel_id` and `channel_ids` in your request.
     */
    channel_id: number;
};

