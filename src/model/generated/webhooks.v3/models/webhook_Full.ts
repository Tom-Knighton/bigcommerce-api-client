/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_Base } from './webhook_Base';
export type webhook_Full = ({
    /**
     * ID of the webhook.
     */
    id?: number;
    /**
     * Client ID, unique to the store or app.
     */
    client_id?: string;
    /**
     * Permanent ID of the BigCommerce store.
     */
    store_hash?: string;
    /**
     * The time the webhook was created, represented in UNIX epoch time.
     */
    created_at?: number;
    /**
     * The time the webhook was most recently updated, represented in UNIX epoch time.
     */
    updated_at?: number;
} & webhook_Base);

