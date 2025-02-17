/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CartUpdateRequest = {
    line_item?: {
        quantity: number;
        product_id: number;
        /**
         * The variant ID. Required if the product has variants.
         */
        variant_id: number;
        list_price?: number;
        option_selections?: Array<{
            option_id?: number;
            option_value?: string;
        }>;
    };
    gift_certificate?: {
        /**
         * Given name for the gift certificate line item.
         */
        name: string;
        /**
         * The theme of the gift certificate.
         */
        theme: CartUpdateRequest.theme;
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
    };
};
export namespace CartUpdateRequest {
    /**
     * The theme of the gift certificate.
     */
    export enum theme {
        BIRTHDAY_HTML = 'birthday.html',
        BOY_HTML = 'boy.html',
        CELEBRATION_HTML = 'celebration.html',
        CHRISTMAS_HTML = 'christmas.html',
        GENERAL_HTML = 'general.html',
        GIRL_HTML = 'girl.html',
    }
}

