/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LineItemGiftCertificateRequestData = {
    /**
     * Given name for gift certificate line item.
     */
    name: string;
    /**
     * The theme of the gift certificate.
     */
    theme: LineItemGiftCertificateRequestData.theme;
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
export namespace LineItemGiftCertificateRequestData {
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

