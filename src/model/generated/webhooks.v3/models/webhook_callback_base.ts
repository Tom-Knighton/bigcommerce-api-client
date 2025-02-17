/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type webhook_callback_base = {
    /**
     * The time the webhook was created, represented in UNIX epoch time.
     */
    readonly created_at?: number;
    /**
     * A numerical identifier that is unique to each store.
     */
    store_id?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     */
    scope?: string;
    /**
     * The payload data encoded in JSON format and then passed through SH1 encryption.
     */
    hash?: string;
};

