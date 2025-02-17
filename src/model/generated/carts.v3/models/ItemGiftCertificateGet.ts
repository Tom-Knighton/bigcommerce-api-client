/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemGiftCertificateGet = {
    id?: string;
    /**
     * Name provided for the gift certificate that will appear in the control panel.
     */
    name?: string;
    /**
     * The theme of the gift certificate. The following options are available:`birthday.html`, `boy.html`, `celebration.html`, `christmas.html`, `general.html`, and `girl.html`.
     */
    theme?: string;
    /**
     * Value must be between 1.00 and 1,000.00 in the store’s default currency.
     */
    amount?: number;
    taxable?: boolean;
    sender?: {
        name?: string;
        email?: string;
    };
    recipient?: {
        name?: string;
        email?: string;
    };
    /**
     * The message included in the gift certificate is limited to 200 characters.
     */
    message?: string;
};

