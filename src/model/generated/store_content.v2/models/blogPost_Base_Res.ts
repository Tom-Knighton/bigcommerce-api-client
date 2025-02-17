/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { publishedDate } from './publishedDate';
/**
 * blog post base response
 */
export type blogPost_Base_Res = {
    /**
     * Title of this blog post.
     */
    title?: string;
    /**
     * URL for the public blog post.
     */
    url?: string;
    /**
     * URL to preview the blog post. READ-ONLY.
     */
    readonly preview_url?: string;
    /**
     * Text body of the blog post.
     */
    body?: string;
    /**
     * Tags to characterize the blog post.
     */
    tags?: Array<string>;
    /**
     * Summary of the blog post. READ-ONLY.
     */
    readonly summary?: string;
    /**
     * Whether the blog post is published. If you want the post to be or remain published following the request, you must set the field explicitly to true, even if the blog post was already published prior to the request.
     */
    is_published?: boolean;
    published_date?: publishedDate;
    /**
     * Published date in `ISO 8601` format.
     */
    published_date_iso8601?: string;
    /**
     * Description text for this blog post’s `<meta/>` element.
     */
    meta_description?: string | null;
    /**
     * Keywords for this blog post’s `<meta/>` element.
     */
    meta_keywords?: string | null;
    /**
     * Name of the blog post’s author.
     */
    author?: string | null;
    /**
     * Local path to a thumbnail uploaded to `/product_images/` using [WebDAV](https://support.bigcommerce.com/s/article/File-Access-WebDAV).
     */
    thumbnail_path?: string | null;
};

