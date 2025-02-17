/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Controls the sort order of the response, for example, `sort=name`.
 *
 * Allowed values:
 * - `name`: sort categories in alphabetical order by category name.
 * - `id`: sort in ascending order by category ID.
 * - `parent_id`: sort in ascending order by the ID of the parent category.
 * - `sort_order`: sort in ascending order by sort order value.
 */
export enum SortParam {
    NAME = 'name',
    ID = 'id',
    PARENT_ID = 'parent_id',
    SORT_ORDER = 'sort_order',
}
