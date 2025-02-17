/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Meta = {
    pagination?: {
        /**
         * The total number of items in the result set.
         */
        total?: number;
        /**
         * The total number of items in the collection on current page.
         */
        count?: number;
        /**
         * The number of items returned in the collection per page, controlled by the limit parameter.
         */
        per_page?: number;
        /**
         * The page you are currently on within the collection.
         */
        current_page?: number;
        /**
         * The total number of pages in the collection.
         */
        total_pages?: number;
        /**
         * Pagination links for the previous and next parts of the whole collection.
         */
        links?: {
            /**
             * The link to the previous page is returned in the response.
             */
            previous?: string;
            /**
             * A link to the current page is returned in the response.
             */
            current?: string;
            /**
             * Link to the next page returned in the response.
             */
            next?: string;
        };
    };
};

