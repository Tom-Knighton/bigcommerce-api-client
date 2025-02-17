/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains data about paginating the response via cursors.
 */
export type CursorPagination = {
    /**
     * Total number of items in the result set.
     */
    count: number;
    /**
     * The amount of items returned in the collection per page, controlled by the limit of items per page parameter.
     */
    per_page: number;
    /**
     * The cursor to the first item in the result set. Can be used with the "before" query parameter to paginate backwards. This property is omitted when the result set is empty.
     *
     */
    start_cursor?: string;
    /**
     * The cursor to the last item in the result set. Can be used with the "after" query parameter to paginate forwards. This property is omitted when the result set is empty.
     *
     */
    end_cursor?: string;
    links: {
        /**
         * Link to the previous page returned in the response. This property is omitted when the result set is empty or on the first page.
         *
         */
        previous?: string;
        /**
         * Link to the next page returned in the response. This property is omitted when the result set is empty.
         *
         */
        next?: string;
    };
};

