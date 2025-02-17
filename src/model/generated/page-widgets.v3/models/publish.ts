/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { region } from './region';
export type publish = {
    regions: Array<region>;
    /**
     * The template file that you would like to target. Leave it empty if the request is for Global regions.
     */
    template_file?: string;
    /**
     * The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`. Leave it empty if the request is for Global regions.
     */
    entity_id?: string;
    /**
     * The id of the channel on which to create this placement. Defaults to the first channel created on the store.
     */
    channel_id?: number;
};

