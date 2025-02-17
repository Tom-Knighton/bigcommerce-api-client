/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * When you explicitly set this query parameter to `true`, deleting a parent page will recursively delete all its immediate children and their descendants.
 * Otherwise, if you set this query parameter to `false` or not provided, deleting a parent page will update its immediate children by setting their `parent_id` to `0` and their `is_visible` status to `false`.
 *
 */
export type deleteChildrenQuery = boolean;
