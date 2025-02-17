/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * blogPost base for POST requests
 */
export type blogPost_Base_Post = {
    /**
     * Title of this blog post.
     */
    title: string;
    /**
     * URL for the public blog post.
     */
    url?: string;
    /**
     * Text body of the blog post.
     */
    body: string;
    /**
     * Tags to characterize the blog post.
     */
    tags?: Array<string>;
    /**
     * Whether the blog post is published. If you want the post to be or remain published following the request, you must set the field explicitly to true, even if the blog post was already published prior to the request.
     */
    is_published?: boolean;
    /**
     * Description text for this blog post’s `<meta/>` element.
     */
    meta_description?: string;
    /**
     * Keywords for this blog post’s `<meta/>` element.
     */
    meta_keywords?: string;
    /**
     * Name of the blog post’s author.
     */
    author?: string;
    /**
     * Local path to a thumbnail uploaded to `/product_images/` using [WebDAV](https://support.bigcommerce.com/s/article/File-Access-WebDAV).
     */
    thumbnail_path?: string;
    published_date?: Date;
};

