/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { layout } from './layout';
import type { widget } from './widget';
export type region = {
    /**
     * Matches the name specified as `{{{region_name="..."}}}` in a theme template file.
     */
    name?: string;
    /**
     * Consists of layout and widget objects.
     */
    children?: Array<(layout | widget)>;
};

