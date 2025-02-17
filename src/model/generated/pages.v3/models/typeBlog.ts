/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';
/**
 * A page that contains blog posts. Use caution; `blog`-type pages can only be created in the store control panel, but you may be able to change the type of a blog page to something else with this API. Use the [blog feature of the REST Content API](/docs/rest-content/store-content/blog-posts#create-a-blog-post) to work with blog posts and tags.
 */
export type typeBlog = (anyTypePage & pageMeta & searchKeywords & {
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
});

