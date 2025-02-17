/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';
/**
 * `type: feed`.  Makes RSS-syndicated content feeds available in the menu of other pages that contain markup. No page body.
 */
export type typeFeed = (anyTypePage & pageMeta & searchKeywords & {
    /**
     * The URL of the RSS feed. Required in a `POST` request if the page type is `feed`.
     *
     */
    feed: string;
});

