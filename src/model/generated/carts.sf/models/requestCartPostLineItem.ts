/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { requestPostOrPutGiftWrapping } from './requestPostOrPutGiftWrapping';
export type requestCartPostLineItem = ({
    /**
     * ID of the product.
     */
    productId: number;
    optionSelections?: Array<{
        /**
         * Modifier option ID.
         */
        optionId?: number;
        /**
         * Modifier option value.
         */
        optionValue?: (string | number);
    }>;
    /**
     * Quantity of this item.
     */
    quantity: number;
    giftWrapping?: requestPostOrPutGiftWrapping;
} | {
    /**
     * ID of the product.
     */
    productId: number;
    /**
     * Quantity of this item.
     */
    quantity: number;
    /**
     * ID of the variant.
     */
    variantId?: number;
    optionSelections?: Array<{
        /**
         * Modifier option ID.
         */
        optionId?: number;
        /**
         * Modifier option value.
         */
        optionValue?: (string | number);
    }>;
    giftWrapping?: requestPostOrPutGiftWrapping;
});

