/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPagination } from './CursorPagination';
import type { DeprecatedPagination } from './DeprecatedPagination';
/**
 * Contains data about paginating the response via cursors. If no pagination details are specified, then both properties will be present.  When a 'before' or 'after' cursor is provided, only the 'cursor_pagination' property will be present. When a 'page' parameter is provided, only the offset based 'pagination' property will be present.
 *
 */
export type OptionalCursorCollectionMeta = {
    pagination?: DeprecatedPagination;
    cursor_pagination?: CursorPagination;
};

