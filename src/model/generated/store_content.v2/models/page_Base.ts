/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type page_Base = {
    /**
     * channel ID
     */
    channel_id?: number;
    /**
     * Page name, as displayed on the storefront.
     */
    name: string;
    /**
     * Text specified for this page’s `<title>` element. If empty, the value of the name property is used.
     */
    meta_title?: string;
    /**
     * HTML or variable that populates this page’s `<body>` element, in default/desktop view. Required in POST if page type is `raw`.
     */
    body: string;
    /**
     * If true, this page appears in the storefront’s navigation menu.
     */
    is_visible?: boolean;
    /**
     * ID of any parent Web page.
     */
    parent_id?: number;
    /**
     * Order in which this page should display on the storefront. (Lower integers specify earlier display.)
     */
    sort_order?: number;
    /**
     * Comma-separated list of SEO-relevant keywords to include in the page’s `<meta/>` element.
     */
    meta_keywords?: string;
    /**
     * `page`: free-text page
     * `link`: link to another web address
     * `rss_feed`: syndicated content from an RSS feed
     * `contact_form`: When the store’s contact form is used
     *
     */
    type: page_Base.type;
    /**
     * Description contained within this page’s `<meta/>` element.
     */
    meta_description?: string;
    /**
     * If true, this page is the storefront’s home page.
     */
    is_homepage?: boolean;
    /**
     * If true, this page is for customers only.
     */
    is_customers_only?: boolean;
    /**
     * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
     */
    search_keywords?: string;
    /**
     * If true, this page has a mobile version. (For Blueprint themes only)
     */
    has_mobile_version?: boolean;
    /**
     * HTML to use for this page’s body when viewed in the mobile template (deprecated - Blueprint themes only).
     */
    mobile_body?: string;
    /**
     * Where the page’s type is a contact form: object whose members are the fields enabled (in the control panel) for storefront display. Possible members are:`fullname`: full name of the customer submitting the form; `phone`: customer’s phone number, as submitted on the form; `companyname`: customer’s submitted company name; `orderno`: customer’s submitted order number; `rma`: customer’s submitted RMA (Return Merchandise Authorization) number.
     */
    contact_fields?: string;
    /**
     * Where the page’s type is a contact form, the email address that receives messages sent using the form.
     */
    email?: string;
    /**
     * Relative URL on the storefront for this page.
     */
    url?: string;
    /**
     * Layout template for this page. This field is writable only for stores with a Blueprint theme applied.
     */
    layout_file?: string;
    /**
     * If page type is `rss_feed` then this field is visible. Required in POST required for `rss page` type.
     */
    feed?: string;
    /**
     * If page type is `link` this field is returned. Required in  POST to create a `link` page.
     */
    link?: string;
    content_type?: page_Base.content_type;
};
export namespace page_Base {
    /**
     * `page`: free-text page
     * `link`: link to another web address
     * `rss_feed`: syndicated content from an RSS feed
     * `contact_form`: When the store’s contact form is used
     *
     */
    export enum type {
        PAGE = 'page',
        RSS_FEED = 'rss_feed',
        CONTACT_FORM = 'contact_form',
        RAW = 'raw',
        LINK = 'link',
    }
    export enum content_type {
        APPLICATION_JSON = 'application/json',
        TEXT_JAVASCRIPT = 'text/javascript',
        TEXT_HTML = 'text/html',
    }
}

