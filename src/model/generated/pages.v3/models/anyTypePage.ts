/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties of all Pages V3 pages.
 *
 */
export type anyTypePage = {
    readonly id?: number;
    readonly channel_id?: number;
    /**
     * The name of the page. Must be unique.
     */
    name: string;
    /**
     * A boolean value that controls whether the page is available to users or visible in any navigation menus.
     */
    is_visible?: boolean;
    /**
     * ID of the parent page, if any.
     */
    parent_id?: number;
    /**
     * Determines the order in which the page is displayed in the parent page’s menu. Pages with lower integers display earlier.
     */
    sort_order?: number;
    /**
     * Determines the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    type: anyTypePage.type;
    /**
     * Determines whether this page loads at the siteʼs root route. For example, at `https://example.com/`.
     */
    is_homepage?: boolean;
    /**
     * When `true`, this page is visible only to logged-in customers.
     */
    is_customers_only?: boolean;
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
};
export namespace anyTypePage {
    /**
     * Determines the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    export enum type {
        PAGE = 'page',
        RAW = 'raw',
        CONTACT_FORM = 'contact_form',
        FEED = 'feed',
        LINK = 'link',
        BLOG = 'blog',
    }
}

