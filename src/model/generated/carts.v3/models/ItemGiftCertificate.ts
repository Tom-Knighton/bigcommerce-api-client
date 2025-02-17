/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemGiftCertificate = {
    id?: string;
    /**
     * Name provided for the gift certificate that will appear in the control panel.
     */
    name?: string;
    /**
     * The theme of the gift certificate.
     */
    theme: ItemGiftCertificate.theme;
    /**
     * Value must be between 1.00 and 1,000.00 in the store’s default currency.
     */
    amount: number;
    is_taxable?: boolean;
    sender: {
        name?: string;
        email?: string;
    };
    recipient: {
        name?: string;
        email?: string;
    };
    /**
     * Limited to 200 characters.
     */
    message?: string;
};
export namespace ItemGiftCertificate {
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

