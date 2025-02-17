/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * if passing null, it will remove the current gift wrapping for the item
 */
export type requestPostOrPutGiftWrapping = {
    /**
     * Boolean value that specifies whether items whether items should be wrapped together or wrapped individually.
     */
    wrapTogether: boolean;
    /**
     * Details for the gift wrapping option selected. This can be specified for each line item or together based on wrapTogether value.
     * If wrapTogether is false, each element in the wrapDetails array determines each item's specific wrapping.
     * (e.g if this line item has 6 quantity, you can pass at maximum 6 elements for the array to spefified each one's wrapping)
     * If wrapTogether is true, we will only use 1st element in the wrapDetails array to determine what to be wrapped
     */
    wrapDetails: Array<{
        /**
         * Identifier of the gift wrapping option selected.
         */
        id: number;
        /**
         * Custom gift message.
         */
        message?: string;
    }>;
};

