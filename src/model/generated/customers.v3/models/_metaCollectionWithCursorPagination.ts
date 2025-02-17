/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPagination } from './CursorPagination';
import type { Pagination } from './Pagination';
/**
 * Data about the response, including pagination and collection totals. Both `pagination` and `cursor_pagination` would be returned in the first page. Only `pagination` would be returned when page is greater than 1. Only `cursor_pagination` would be returned when `before` or `after` is provided in the request.
 */
export type _metaCollectionWithCursorPagination = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
};

