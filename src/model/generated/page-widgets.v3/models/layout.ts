/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dropzone } from './dropzone';
export type layout = {
    /**
     * Set by BigCommerce. Read-only.
     */
    readonly layout_template_uuid?: string;
    /**
     * JSON object of necessary configuration to construct a layout.
     */
    configuration?: any;
    /**
     * A human-readable label for the layout; displays in Page Builder.
     */
    name?: string;
    /**
     * Consists of dropzone objects.
     */
    dropzones?: Array<dropzone>;
    type?: layout.type;
};
export namespace layout {
    export enum type {
        LAYOUT = 'layout',
    }
}

