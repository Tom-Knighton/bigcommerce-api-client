/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TokenizedCard = {
    /**
     * Type to classify this payment instrument (required).
     */
    type: TokenizedCard.type;
    /**
     * Identifier representing the tokenized card (required).
     */
    token: string;
    /**
     * Issuer identification number.
     */
    iin?: string;
    /**
     * Last four numbers of this card.
     */
    last_four_digits?: string;
    /**
     * Expiry month of this card.
     */
    expiration_month?: string;
    /**
     * Expiry year of this card.
     */
    expiration_year?: string;
};
export namespace TokenizedCard {
    /**
     * Type to classify this payment instrument (required).
     */
    export enum type {
        TOKENIZED_CARD = 'tokenized_card',
    }
}

