/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Script properties common to `post`, `put`, and `get` requests.
 */
export type script_Base = {
    /**
     * The user-friendly description.
     */
    description?: string;
    /**
     * An HTML string containing exactly one `script` tag. Present when the script `kind` is `script_tag`.
     */
    html?: string;
    /**
     * The `src` attribute of the script to load. Only present if `kind` is `src`.
     */
    src?: string;
    /**
     * It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked.
     */
    auto_uninstall?: boolean;
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     */
    load_method?: script_Base.load_method;
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     */
    location?: script_Base.location;
    /**
     * Which set of pages the script should load on.
     *
     * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
     *
     * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
     *
     * `storefront`: All pages that are not `checkout` or `order_confirmation`.
     *
     *
     * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
     */
    visibility?: script_Base.visibility;
    /**
     * What type of script this is.
     *
     * `src` - For scripts that use the src URL. A `script` tag will be generated with its `src` attribute set to the value of the `src` property. When your app provides a path to the script, we can optimize and add the script automatically for you. The load_method can vary.
     *
     * `script_tag` - For scripts that include a raw HTML `script` tag-enclosed block of JavaScript. The value of `html` is added directly to the page. The load_method must be default.
     */
    kind?: script_Base.kind;
    /**
     * The client id of the API user that created this script, or blank if created by other means.
     */
    api_client_id?: string;
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `unknown` when not specified. Scripts with an `unknown` consent category do not display on stores with customer cookie consent banners enabled.
     */
    consent_category?: script_Base.consent_category;
    /**
     * Whether the script is enabled or disabled on the storefront.
     */
    enabled?: boolean;
    channel_id?: number;
    /**
     * Array of [Subresource integrity (SRI) hashes](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) for external SRC scripts that lets browsers validate the contents of the script.
     *
     * The hash is the `integrity` attribute on the `script` tag. You can add up to five hashes for a script and generate them using any SRI standard-supported algorithm, including SHA-256, SHA-384, and SHA-512. If you provide more than one hash, they will all be added to the `integrity` attribute in order, separated by whitespace.
     *
     */
    integrity_hashes?: Array<string>;
};
export namespace script_Base {
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     */
    export enum load_method {
        DEFAULT = 'default',
        ASYNC = 'async',
        DEFER = 'defer',
    }
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     */
    export enum location {
        HEAD = 'head',
        FOOTER = 'footer',
    }
    /**
     * Which set of pages the script should load on.
     *
     * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
     *
     * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
     *
     * `storefront`: All pages that are not `checkout` or `order_confirmation`.
     *
     *
     * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
     */
    export enum visibility {
        STOREFRONT = 'storefront',
        ALL_PAGES = 'all_pages',
        CHECKOUT = 'checkout',
        ORDER_CONFIRMATION = 'order_confirmation',
    }
    /**
     * What type of script this is.
     *
     * `src` - For scripts that use the src URL. A `script` tag will be generated with its `src` attribute set to the value of the `src` property. When your app provides a path to the script, we can optimize and add the script automatically for you. The load_method can vary.
     *
     * `script_tag` - For scripts that include a raw HTML `script` tag-enclosed block of JavaScript. The value of `html` is added directly to the page. The load_method must be default.
     */
    export enum kind {
        SRC = 'src',
        SCRIPT_TAG = 'script_tag',
    }
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `unknown` when not specified. Scripts with an `unknown` consent category do not display on stores with customer cookie consent banners enabled.
     */
    export enum consent_category {
        ESSENTIAL = 'essential',
        FUNCTIONAL = 'functional',
        ANALYTICS = 'analytics',
        TARGETING = 'targeting',
    }
}

