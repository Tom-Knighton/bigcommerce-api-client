/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Links } from './Links';
/**
 * Data about cursor pagination.
 */
export type CursorPagination = {
    /**
     * Total number of items in the collection response.
     */
    count?: number;
    /**
     * The amount of items returned in the collection per page, controlled by the limit parameter.
     */
    per_page?: number;
    /**
     * A string representing the starting point of the current page in the collection
     */
    start_cursor?: string;
    /**
     * A string representing the ending point of the current page in the collection.
     */
    end_cursor?: string;
    links?: Links;
};

