/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { cart_PostCustomItem } from './cart_PostCustomItem';
import type { cart_PostModifier } from './cart_PostModifier';
import type { cart_PostVariant } from './cart_PostVariant';
export type Cart_Line_Item_Update_Put = {
    line_item?: (cart_PostVariant | cart_PostModifier);
    gift_certificates?: Array<{
        /**
         * Given name for a gift certificate line item.
         */
        name: string;
        /**
         * The theme of the gift certificate.
         */
        theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        /**
         * Message shown to recipient, as provided by sender.
         */
        message?: string;
    }>;
    custom_items?: cart_PostCustomItem;
    /**
     * The cart version that you expect to apply the updates. If the provided version doesn't match the current cart version, you will receive a conflict error. This field is optional; if not provided, optimistic concurrency control will not apply.
     */
    version?: number;
};

