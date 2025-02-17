/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { placement_Base } from './placement_Base';
export type placement_Post = ({
    /**
     * A widget identifier.
     */
    widget_uuid: string;
    /**
     * The template file that you would like to target.
     */
    template_file: string;
    /**
     * The id of the channel on which to create this placement. Defaults to the first channel created on the store.
     */
    channel_id?: number;
} & placement_Base);

